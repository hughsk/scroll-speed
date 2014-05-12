var speed = require('./')(null, true)
var el = document.createElement('div')

speed.on('scroll', function() {
  document.body.innerHTML = [speed[0], speed[1], speed[2]].join(', ')
  speed.flush()
})
