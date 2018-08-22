var speed = require('./')(null, true)
var el = document.createElement('div')

var scrollHandler = function() {
  document.body.innerHTML = [speed[0], speed[1], speed[2]].join(', ')
  speed.flush()
};

speed.on('scroll', scrollHandler)

setTimeout(function() {
  document.body.innerHTML = 'Scroll fetcher disposed!'
  speed.dispose()
}, 5000);

