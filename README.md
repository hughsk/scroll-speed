# scroll-speed [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Get the scroll speed being used on either the window or a particular element.

## Usage

[![NPM](https://nodei.co/npm/scroll-speed.png)](https://nodei.co/npm/scroll-speed/)

### speed = scroll(element, [preventDefault])

Listens to `element` for scroll events. If you don't supply an element, this
will default to `window`. Pass `preventDefault` as `true` to override the
default scrolling behavior.

### speed.on('scroll', callback(event))

Calls `callback` whenever a scroll event is captured, passing a normalized
`wheel` event for you to read from.

### speed.flush()

You need to call at the end of each frame for the module to work properly – we
need to cater to the possibility of multiple events per frame. Stick this at
the end of your `requestAnimationFrame` or `setInterval` loop.

### speed[0]

The horizontal speed of the scroll.

### speed[1]

The vertical speed of the scroll.

### speed[2]

The depth speed of the scroll – you never know!

## License

MIT. See [LICENSE.md](http://github.com/hughsk/scroll-speed/blob/master/LICENSE.md) for details.
