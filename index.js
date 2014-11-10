var Emitter = require('events/')
var wheel = require('wheel')

module.exports = getScroller

function getScroller(element, preventDefault) {
  var scroll = new Emitter

  scroll.flush = flush
  flush()

  if (typeof window === 'undefined') {
    return scroll
  }

  element = element || window
  wheel(element, onscroll, false)

  return scroll

  function flush() {
    scroll[0] =
    scroll[1] =
    scroll[2] = 0
  }

  function onscroll(e) {
    // Normal/Line scrolling
    var scale = e.deltaMode === 1 ? 12 : 1

    scroll[0] += scale * (e.deltaX || 0)
    scroll[1] += scale * (e.deltaY || 0)
    scroll[2] += scale * (e.deltaZ || 0)
    scroll.emit('scroll', scroll)

    if (!preventDefault) return
    if (!e.preventDefault) return

    e.preventDefault()
    if (e.stopPropagation) e.stopPropagation()
  }
}
