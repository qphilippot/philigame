(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("GameDong", [], factory);
	else if(typeof exports === 'object')
		exports["GameDong"] = factory();
	else
		root["GameDong"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/tiles/a.png":
/*!****************************!*\
  !*** ./assets/tiles/a.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "059f67d1ccb259a78d52cfa4f77f0ce9.png";

/***/ }),

/***/ "./assets/tiles/b.png":
/*!****************************!*\
  !*** ./assets/tiles/b.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cddf5fd6d19cb195ddc8a4ac70469679.png";

/***/ }),

/***/ "./assets/tiles/tile.png":
/*!*******************************!*\
  !*** ./assets/tiles/tile.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0dde22c4f7ae0f112541782fcacd5af3.png";

/***/ }),

/***/ "./autoload/index.js":
/*!***************************!*\
  !*** ./autoload/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Generated from cli **/
module.exports = GameDong => {
    const prefix = '.';
    // require(prefix + '/grass.tileset.loader.js')(GameDong);
    // require(prefix + '/sample-1.tileset.loader.js')(GameDong);

};


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./src/app/assets.loader.js":
/*!**********************************!*\
  !*** ./src/app/assets.loader.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (GameDong) => {
    const AssetManager = GameDong.AssetManager;
    AssetManager.store('tile', __webpack_require__(/*! @assets/tiles/tile.png */ "./assets/tiles/tile.png"));
    AssetManager.store('a', __webpack_require__(/*! @assets/tiles/a.png */ "./assets/tiles/a.png"));
    AssetManager.store('b', __webpack_require__(/*! @assets/tiles/b.png */ "./assets/tiles/b.png"));
};

/***/ }),

/***/ "./src/app/class.loader.js":
/*!*********************************!*\
  !*** ./src/app/class.loader.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (app) => {
    app.AssetManager = __webpack_require__(/*! @core/assets */ "./src/core/assets/index.js");
    app.Map = __webpack_require__(/*! ../map */ "./src/map/index.js");
    app.TileMap = __webpack_require__(/*! ../map/tile-map.model */ "./src/map/tile-map.model.js");
    app.TileSet = __webpack_require__(/*! ../tileset */ "./src/tileset/index.js");
    app.Camera = __webpack_require__(/*! ../camera */ "./src/camera/index.js");
    app.Coords = __webpack_require__(/*! @core/coords */ "./src/core/coords/index.js");
    app.ViewPort = __webpack_require__(/*! @core/viewport */ "./src/core/viewport/index.js");
    app.GameElement = __webpack_require__(/*! @core/game-element */ "./src/core/game-element/index.js");
    app.MouseController = __webpack_require__(/*! @core/controllers/mouse.controller */ "./src/core/controllers/mouse.controller.js");
    app.Canvas = __webpack_require__(/*! @core/canvas */ "./src/core/canvas/index.js");
    app.Scene = __webpack_require__(/*! @core/scene */ "./src/core/scene/index.js");
};


/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./main */ "./src/app/main.js");

/***/ }),

/***/ "./src/app/main.js":
/*!*************************!*\
  !*** ./src/app/main.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const app = {};

try {
    __webpack_require__(/*! ./class.loader */ "./src/app/class.loader.js")(app);
    __webpack_require__(/*! @autoload */ "./autoload/index.js")(app);
    __webpack_require__(/*! ./assets.loader */ "./src/app/assets.loader.js")(app);
   
}

catch(error) {
    console.error(error);
}

finally {
    window.GameDong = app;
}

module.exports  = app;

/***/ }),

/***/ "./src/camera/index.js":
/*!*****************************!*\
  !*** ./src/camera/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const GameElement = __webpack_require__(/*! @core/game-element */ "./src/core/game-element/index.js");
const Coords = __webpack_require__(/*! @core/coords */ "./src/core/coords/index.js");

class Camera extends GameElement {
    constructor(settings) {
        super(settings);
        
        this.radius = settings.radius || 10;
        // this.data.position = settings.coords || Coords._2D.getOne();
    }

    setScene(scene) {
        this.data.scene = scene;
    }

    getScene() {
        return this.data.scene;
    }

    /**
     * Search all visibles game-element through environment according this own position and radius
     * @param {*} environment 
     */
    snapshot(environment) {
        const position = this.getPosition();
        const pos_x = position.x;
        const pos_y = position.y;
        const nbRows = environment.getNbRows();
        const nbColumns = environment.getNbColumns();
        
        const renderingData = environment.getRenderingData(
            Math.round(pos_x * (nbColumns )) - this.radius,
            Math.round(pos_y * (nbRows )) - this.radius,
            0,
            Math.round(pos_x * (nbColumns )) + this.radius,
            Math.round(pos_y * (nbRows )) + this.radius,
            10
        );

        const delta = this.radius / nbColumns;      
        const x0 = Math.round((pos_x - delta) * nbColumns) / nbColumns;
        const y0 = Math.round((pos_y - delta) * nbRows) / nbRows;

        renderingData.forEach(data => {
            data.x = (data.x - x0) / (2 * delta);
            data.y = (data.y - y0) / (2 * delta);
            data.width = data.width / (delta * 2);
            data.height = data.height / (delta * 2);
        });
        
        return renderingData;
    }

    move(x = 0, y = 0, z = 0) {
        const position = this.getPosition();
        this.setPosition({
            x: position.x + x,
            y: position.y + y,
            z: position.z + z
        });
    }

    destroy() {
        // this.data.coords.recycle();
    }
}

module.exports = Camera;

/***/ }),

/***/ "./src/core/assets/asset.service.js":
/*!******************************************!*\
  !*** ./src/core/assets/asset.service.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// const Asset = require('./asset.model')
const GameElement = __webpack_require__(/*! @core/game-element */ "./src/core/game-element/index.js");

class AssetManager {
    constructor() {
        this.ressources = {};
        this.ressourcesDetails = {};
        this.index = {};
    }

    store(name, data, details = null) {
        this.ressources[name] = data;
        
        if (details === null) {
            this.ressourcesDetails[name] = { name : name };
        }

        else {
            details.name = name;
            this.ressourcesDetails[name] = details;
        }
        
    }

    setDetails(ressourceName, details) {
        this.ressourcesDetails[ressourceName] = details;
    }

    get(name) {
        return this.ressources[name];
    }

    find(selectors) {
        const ressourcesName = Object.keys(this.ressources);

        const filteredRessources = ressourcesName.filter(name => {
            const details = this.ressourcesDetails[name];
            Object.keys(selectors).forEach(attributeName => {
                const attributeValue = selectors[attributeName];
                if (details[attributeName] !== attributeValue) {
                    return false;
                }
            });

            return true;
        });
    
        return filteredRessources.map(name => {
            return {
                name: name,
                value: this.ressources[name],
                details: this.ressourcesDetails[name]
            };
        })
    }

    createIndex(name, content = {}) {
        if (typeof this.index[name] !== 'undefined') {
            throw new Error(`Cannot create an index twice (${name})`);
        }

        else {
            this.index[name] = content;
        }
    }

    addToIndex(name, key, value) {
        if (typeof this.index[name] === 'undefined') {
            throw new Error(`Index not found (${name})`);
        }

        else {
            this.index[name][key] = value;
        }
    }

    toImage(ressource) {
        return this.getImage(ressource.name);
    }

    getImage(imageName) {
        return new Promise(resolve => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.src = this.get(imageName);
            img.name = imageName;
        });
    }

    getImageAsGameElement(imageName) {
        return new Promise(resolve => {
            this.getImage(imageName).then(image => {
                const elt = new GameElement();
                elt.name = image.name;
                elt.setTexture(image);

                resolve(elt);
            });
        });
    }
    delete(name) {
        delete this.ressources[name];
    }
}

AssetManager.singleton = null;
AssetManager.getInstance = function() {
    if (AssetManager.singleton === null) {
        AssetManager.singleton = new AssetManager();
    }

    return AssetManager.singleton;
}

module.exports = AssetManager;



/***/ }),

/***/ "./src/core/assets/index.js":
/*!**********************************!*\
  !*** ./src/core/assets/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./asset.service */ "./src/core/assets/asset.service.js").getInstance();

/***/ }),

/***/ "./src/core/canvas/canvas.model.js":
/*!*****************************************!*\
  !*** ./src/core/canvas/canvas.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Canvas {
    constructor(settings = {}) {
        this.node = this.getNode(settings);
        this.context = this.node.getContext('2d');
        this.init_Size(settings);
        this.init_Resolution(settings);
        this.init_Ratio();
       
        if (settings.name) {
            this.setName(settings.name);
        }

        this.container = this.getContainer(settings);
        
        if (this.container === null) {
            const parent = this.node.parentNode;
            if (parent) {
                this.container = parent;
                this.container.appendChild(this.node);
            }
        }

        else {
            this.container.appendChild(this.node);
        }
    }

    setName(name) {
        this.name = name;
        this.node.setAttribute('data-name', name);
    }

    setContainer(container) {
        this.contaner = container;
        this.container.appendChild(this.node);
        return this;
    }

    addClass(className) {
        this.node.classList.add(className);
        return this;
    }

    removeClass(className) {
        this.node.classList.remove(className);
        return this;
    }

    toggleClass(className) {
        this.node.classList.toggle(className);
        return this;
    }

    getNode(settings) {
        const type = typeof settings.node; 
        if (type === 'string') {
            return document.querySelector(settings.node);
        }

        else if (type === 'object') {
            return settings.node;
        }

        else {
            return document.createElement('canvas');
        }   
    }

    getContainer(settings) {
        const type = typeof settings.container;   
  
        if (type === 'string') {
            return document.getElementById(settings.container);
        }

        else if (type === 'object') {
            return settings.container;
        }

        else {
            return null;    
        }   
    }
    
    setBackground(color) {
        this.node.style.background = color;
        return this;
    }

    disableEvent() {
        this.node.style.pointerEvents = 'none';
        return this;
    }

    enableEvent() {
        this.node.style.pointerEvents = 'auto';
        return this;
    }

    init_Size(settings) {
        this.size = {};
        const size = settings.size;
        if (typeof size === 'undefined') {
            this.setSize(
                300,
                300,
                false
            );
            
        }

        else {
            this.setSize(
                size.width, 
                size.height,
                false
            );
        }

    }


    init_Resolution(settings) {
        this.resolution = {};
        const resolution = settings.resolution;

        if (typeof resolution === 'undefined') {    
            this.setResolution(
                this.size.width,
                this.size.height
            );
        }

        else {
            
            this.setResolution(
                resolution.width, 
                resolution.height
            );
        }

    }

    clear() {
        const resolution = this.resolution;
        this.context.clearRect(
            0, 0, 
            resolution.width, resolution.height
        );
    }

    init_Ratio() {
        this.ratio = {};
        this.updateRatio();
    }

    setSize(width, height, refreshRatio = true) {
        this.size.width = width;
        this.size.height = height;

        this.node.style.width = width + 'px';
        this.node.style.height = height + 'px';
        
        if (refreshRatio === true) {
            this.updateRatio();
        }
    }

    getSize() {
        return this.size;
    }

    getWidth() {
        return this.size.width;
    }

    getHeight() {
        return this.size.height;
    }

    getInnerWidth() {
        return this.resolution.width;
    }

    getInnerHeight() {
        return this.resolution.height;
    }

    getResolution() {
        return JSON.parse(JSON.stringify(this.resolution));
    }

    setResolution(width, height) {
        this.node.width = width;
        this.node.height = height;

        this.resolution.width = width;
        this.resolution.height = height;
    }

    updateRatio() {
        const size = this.size;
        const ratio = this.ratio;
        const resolution = this.resolution;

        if (size.width === 0 || size.height === 0) {
            ratio.x = 1;
            ratio.y = 1;
        }

        else {
            ratio.x = resolution.width / size.width;
            ratio.y = resolution.height / size.height;
        }
    }

    getPixelsCoordsFromPageCoords(coords) {
        const x = coords.x - this.node.offsetLeft + window.scrollX;
        const y = coords.y - this.node.offsetTop + window.scrollY;
        return {x, y};
    }

    getCellCoordsFromPixelCoords(coords) {
        const ratio  = this.ratio;
        const x      = Math.floor(coords.x * ratio.x);
        const y      = Math.floor(coords.y * ratio.y);
        return {x, y};
    }

    getNormalizedPosition(coords) {
        const x = (coords.x - this.node.offsetLeft + window.scrollX) / this.size.width;
        const y = (coords.y - this.node.offsetTop + window.scrollY) / this.size.height;
        return {x, y};
    }
}

module.exports = Canvas;

/***/ }),

/***/ "./src/core/canvas/index.js":
/*!**********************************!*\
  !*** ./src/core/canvas/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./canvas.model */ "./src/core/canvas/canvas.model.js");

/***/ }),

/***/ "./src/core/components/POOL.model.js":
/*!*******************************************!*\
  !*** ./src/core/components/POOL.model.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class POOL {
    constructor(settings) {
        this.type = settings.type;
        this.isInitialized = false;

        const capacity = settings.capacity || 10;
        this.data = new Array(capacity);
        this.index = capacity -1;
        

        this.initPool();
    }

    getCapacity() {
        return this.data.length;
    }

    initPool() {
        const capacity = this.getCapacity();
        for(let i = 0; i < capacity; ++i) {
            this.data[i] = new (this.type)();
        }
    }

    setCapacity(capacity) {
        this.data.length = capacity;
    }

    beSureThatCapacityIsOkay() {
        const capacity = this.getCapacity();
        if ((1 + this.index) === capacity) {
            this.setCapacity(capacity + 10);
        }
    }

    recycle(instance) {
        this.beSureThatCapacityIsOkay();

        this.data[this.index] = instance;
        this.index++;
    }

    getOne() {
        let instance  = null;

        if (this.index > 0) {
            instance = this.data[this.index];
            this.index--;
        }

        else {
            instance = new (this.type)();
        }

        instance.core.pool = this;
        return instance;
    }
}

module.exports = POOL;

/***/ }),

/***/ "./src/core/controllers/mouse.controller.js":
/*!**************************************************!*\
  !*** ./src/core/controllers/mouse.controller.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Entity = __webpack_require__(/*! ../entity/entity.model */ "./src/core/entity/entity.model.js")

class MouseController extends Entity {
    constructor(settings = {}) {
        super(settings);

        this.component = settings.component;
    }

    onMouseMove(event) {
        console.log('mouse move', event);
    }

    onLeftClick(event) {
        console.log('mouse left click', event);
    }

    onRightClick(event) {
        console.log('mouse right click', event);
    } 

    onMouseWheel(event) {
        console.log('mouse wheel', event);
    }

    onMouseDown(event) {
        event = event || window.event;
        let button = 0;
        
        if (typeof event.buttons === 'undefined') {
            button = event.which || event.button;
        }

        switch(button) {
            case MouseController.LEFT_CLICK:
                this.onLeftClick(event);
                break;
            case MouseController.RIGHT_CLICK:  
                this.onRightClick(event);
                break;
        }
    }

    onMouseOut() {

    }

    onMouseEnter() {

    }
    
    static isLeftClick(event) {
        // https://stackoverflow.com/questions/3944122/detect-left-mouse-button-press
        event = event || window.event;
        if (typeof event.buttons !== 'undefined') {
            return event.buttons == 1;
        }

        const button = event.which || event.button;
        return button == 1;
    }

    static isRightClick(event) {
        event = event || window.event;
        if (typeof event.buttons !== 'undefined') {
            return event.buttons == 0;
        }

        const button = event.which || event.button;
        return button == 0;
    }
}

MouseController.LEFT_CLICK = 1;
MouseController.RIGHT_CLICK = 2;
module.exports = MouseController;

/***/ }),

/***/ "./src/core/coords/coords.model.js":
/*!*****************************************!*\
  !*** ./src/core/coords/coords.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Coords {
    constructor(pool) {
        this.core = {
            pool: pool || null
        }
    }

    set(coords) {
        const max = Math.min(this.data.length, coords.data.length);

        for(let i = 0; i < max; ++i) {
            this.data[i] = coords.data[0];
        }
    }

    get() {
        return this.data;
    }

    recycle() {
        if (this.core.pool !== null) {
            this.core.pool.recycle(this);
        }
    }
}

module.exports = Coords;

/***/ }),

/***/ "./src/core/coords/coords2D.model.js":
/*!*******************************************!*\
  !*** ./src/core/coords/coords2D.model.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Coords = __webpack_require__(/*! ./coords.model */ "./src/core/coords/coords.model.js");

class Coords2D extends Coords {
    constructor(x = 0, y = 0, pool = null) {
        super(pool);
        this.data = [x, y];
    }

    getX() {
        return this.data[0];
    }

    getY() {
        return this.data[1];
    }

    setX(x) {
        this.data[0] = x;
    }

    setY(y) {
        this.data[1] = y;
    }

}

module.exports = Coords2D;

/***/ }),

/***/ "./src/core/coords/coords3D.model.js":
/*!*******************************************!*\
  !*** ./src/core/coords/coords3D.model.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Coords2D = __webpack_require__(/*! ./coords2D.model */ "./src/core/coords/coords2D.model.js");

class Coords3D extends Coords2D {
    constructor(x = 0, y = 0, z = 0, pool = null) {
        super(x, y, pool)
        this.data.length = 3;
        this.data[2] = z;
    }

    getZ() {
        return this.data[2];
    }

    setZ(z) {
        this.data[2] = z;
    }
}


module.exports = Coords3D;

/***/ }),

/***/ "./src/core/coords/index.js":
/*!**********************************!*\
  !*** ./src/core/coords/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Coords2D = __webpack_require__(/*! ./coords2D.model */ "./src/core/coords/coords2D.model.js");
const Coords3D = __webpack_require__(/*! ./coords3D.model */ "./src/core/coords/coords3D.model.js");

const POOL = __webpack_require__(/*! ../components/POOL.model */ "./src/core/components/POOL.model.js");


module.exports = {
    _2D: new POOL({
        type: Coords2D,
        capacity: 20
    }),
    
    _3D: new POOL({
        type: Coords3D
    })
};

/***/ }),

/***/ "./src/core/entity/entity.model.config.js":
/*!************************************************!*\
  !*** ./src/core/entity/entity.model.config.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
    name: 'entity',
    version: '1.0.0',

    strictMode: false,
    verboseMode: false,
    auto_setup_settings: true,

    services: {}
}

/***/ }),

/***/ "./src/core/entity/entity.model.js":
/*!*****************************************!*\
  !*** ./src/core/entity/entity.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;
const configuration = __webpack_require__(/*! ./entity.model.config */ "./src/core/entity/entity.model.config.js");
const Notification = __webpack_require__(/*! ../notification */ "./src/core/notification/index.js");

let counter = 0;

class Entity {
    constructor(settings = {}) {
        // Must copy configuration file cause later a delete may remove services.skill
        settings = Object.assign(JSON.parse(JSON.stringify(configuration)), settings);
        
        this.name = settings.name;

        this.initialize_skills(settings);

        this.skills       = {};
        this.data         = {};
        this.ui           = {};
        this.subscriptions  = {};

        this.services = settings.services;
        this.strictMode = settings.strictMode;
        this.verboseMode = settings.verboseMode;

       
        
        if (settings.testMode === true) {
            this.enableTestMode();
        }

        else {
            this.store('services_to_enable', settings.services);
        }
    }

    setupListener(settings) {
        this.listeners = [];
    }

    

    sendNotificationToSubscribers(subscribers, name, data) {
        if (
            typeof subscribers !== 'undefined' && 
            typeof subscribers.forEach === 'function'
        ) {
            subscribers.forEach(record => {
                const notification = Notification.POOL.getOne(name, data, this);

                if (typeof record.callback === 'Promise') {
                    record.callback(notification).then(
                        () => {
                            notification.recycle();
                        },

                        () => {
                            notification.recycle();
                        }
                    );
                }

                else {
                    record.callback(notification);
                    notification.recycle();
                }
            
            });
        }
    }

    notify(name, data = {}) {
        this.sendNotificationToSubscribers(this.subscriptions[name], name, data);
        this.sendNotificationToSubscribers(this.subscriptions.all, name, data);  
    }

    getData(propertyName) {
        return this.data[propertyName];
    }

    subscribeTo(observable, eventName = 'all', callback = null) {
        if (callback === null) {
            callback = this.onNewNotification.bind(this);
        }

        observable.register(this, eventName, callback);
    }

    // subscribe(observable) {
    //     observable.register(this);
    //     // record all subscribed ?
    // }

    register(subscriber, eventName, callback) {
        let subscription = this.subscriptions[eventName];
        if (typeof subscription !== Set) {
            subscription = new Set();
            this.subscriptions[eventName] = subscription;
        }

        subscription.add({
            subscriber, 
            callback
        });
    }

    onNewNotification(notification) {
        const notificationName = notification.name;

        // override me !

        notification.recycle();
    }

    createCustomEvent(eventName, data) {
        if (typeof window.CustomEvent === "function") {
            return new CustomEvent(eventName, data);
        }
        // IE polyfill
        else {
            const params = data || { bubbles: false, cancelable: false, detail: undefined };
            const evt = document.createEvent( 'CustomEvent' );
            evt.initCustomEvent( eventName, params.bubbles, params.cancelable, params.detail );
            return evt;
        }
    }
    
    
    init_id(settings) {
        this.entity_id = `entity_${++counter}`;
        if (typeof settings._id === 'undefined') {
            this._id = settings._id;
        }

        else {
            this._id = this.entity_id;
        }
    }
    
    disable_skills(settings = {}) {
        if (typeof settings.services !== 'undefined') {
            delete settings.services.skill;
        }
    }

    initialize_skills(settings = {}) {
        this.skills = {};

        if (settings.disableSkills === true) {
            this.disable_skills(settings);
        }
    }

    setName(name) {
        this.name = name;
    }

    setId(id) {
        this._id = id;
    }

    setService(serviceName, serviceInstance) {
        this.services[serviceName] = serviceInstance;
    }
    
    enableStrictMode() {
        this.strictMode = true;
    }

    disableStrictMode() {
        this.strictMode = false;
    }

    disableVerboseMode() {
        this.verboseMode = false;
    }

    enableVerboseMode() {
        this.verboseMode = true;
    }

    enableTestMode() {
        this.enableStrictMode();
        this.enableVerboseMode();
    }

    disableTestMode() {
        this.disableStrictMode();
        this.disableVerboseMode();
    }

    emit(eventName, data) {
        const target = data.target || window;
        const event = this.createCustomEvent(eventName, data);
        target.dispatchEvent(event);
    }

    listen(eventName, handler) {
        window.addEventListener(eventName, handler);

        this.listeners = [{
            eventName: eventName,
            handler: handler
        }];
    }

    store(attributeName, attributeValue) {
        this.data[attributeName] = attributeValue;
    }

    //https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
    /**
    * @param {String} htmlString representing a single element
    * @return {Element}
    */
   generateDOM(htmlString = '') {
        const template = document.createElement('template');
        template.innerHTML = htmlString.trim();
        return template.content.firstChild;
    }

    get(attributeName) {
        return this.data[attributeName];
    }

    log() {
        console.log.call(null, this.name + ': ', ...arguments);       
    }

    debug() {
        if (this.verboseMode) {
            this.log('debug');
            this.log(...arguments);
        }
    }

    doAsync(task, delay = 1) {
        setTimeout(() => {
            task();
        }, delay);
    }

    // async waitingFor(promisesArray) {
    //     return await Promise.all(promisesArray);
    // }

    hasSkill(skillName) {
        return typeof this.skills[skillName] !== 'undefined';
    }

    notifyError(error, throwError = true) {
        console.error(`[${this.name}] ${error}`);
        
        if (throwError === true || this.strictMode === true) {
            if (error instanceof Error) {
                throw error;
            }
            
            else {
                throw new Error(error);
            }
        }
    }

    removeListener(listener) {
        this.removeEventListener(listener.eventName, listener.handler)
    }

    removeAllListeners() {
        this.listeners.forEach(
            listener => {
                this.removeListener(listener)
            }
        );
    }

    destroy() {
        this.removeAllListeners();
    }
}

module.exports = Entity;

/***/ }),

/***/ "./src/core/entity/index.js":
/*!**********************************!*\
  !*** ./src/core/entity/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./entity.model */ "./src/core/entity/entity.model.js");

/***/ }),

/***/ "./src/core/game-element/game-element.model.js":
/*!*****************************************************!*\
  !*** ./src/core/game-element/game-element.model.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Entity = __webpack_require__(/*! @core/entity */ "./src/core/entity/index.js");

class GameElement extends Entity {
    constructor(settings = {}) {
        super(settings);

        this.setTexture(settings.texture);
        this.setPosition(settings.position)
    }

    move(delta) {
        this.data.position.x += delta.x;
        this.data.position.y += delta.y;
    }

    getX() {
        return this.data.position.x;
    }

    getY() {
        return this.data.position.y;
    }

    getWidth() {
        return this.data.size.width;
    }

    getHeight() {
        return this.data.size.height;
    }

    getPosition() {
        return this.data.position;
    }
    
    setPosition(position = {x: 0, y:0}) {
        this.data.position = position;
    }

    setSize(size = {width: 0, height:0}) {
        this.data.size = size;
    }

    setTexture(texture = null) {
        this.data.texture = texture;
    }

    render(context = null, x, y, w, h) {
        const d = this.data;
        const p = d.position;
        const s = d.size;
        
        if (typeof x !== 'number') {
            x = p.x;
        }


        if (typeof y !== 'number') {
            y = p.y;
        }
 
        context.drawImage(d.texture, x, y, w || s.width, h || s.height);
        // context.drawImage(d.texture, x, y, w, h);
    }
}

module.exports = GameElement;

/***/ }),

/***/ "./src/core/game-element/index.js":
/*!****************************************!*\
  !*** ./src/core/game-element/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./game-element.model */ "./src/core/game-element/game-element.model.js");

/***/ }),

/***/ "./src/core/notification/index.js":
/*!****************************************!*\
  !*** ./src/core/notification/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Notification = __webpack_require__(/*! ./notification.model */ "./src/core/notification/notification.model.js");
const POOL = __webpack_require__(/*! ./notification.POOL */ "./src/core/notification/notification.POOL.js");

if (Notification.POOL === null) {
    Notification.POOL = new POOL();
}

module.exports = Notification;

/***/ }),

/***/ "./src/core/notification/notification.POOL.js":
/*!****************************************************!*\
  !*** ./src/core/notification/notification.POOL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Notification = __webpack_require__(/*! ./notification.model */ "./src/core/notification/notification.model.js");
const POOL = __webpack_require__(/*! ../components/POOL.model */ "./src/core/components/POOL.model.js");

class NotificationPOOL extends POOL {
    constructor(settings) {
        super({
            type: Notification,
            capacity: 10
        });
    }

    getOne(name, data, emitter) {
        const notification = super.getOne();
        notification.setName(name);
        notification.setEmitter(emitter);
        notification.setData(data);


        return notification;
    }
   
}



module.exports = NotificationPOOL;

/***/ }),

/***/ "./src/core/notification/notification.model.js":
/*!*****************************************************!*\
  !*** ./src/core/notification/notification.model.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Notification {
    constructor(name, data = null, emitter = null) {
        this.name = name || '';
        this.data = data;
        this.emitter = emitter;

        this.core  = {};
    }

    getName() {
        return this.name;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    setName(name) {
        this.name = name;
    }

    setEmitter(emitter) {
        this.emitter = emitter;
    }

    clear() {
        this.name = null;
        this.data = null;
        this.emitter = null;
    }

    recycle() {
        this.clear();
        Notification.POOL.recycle(this);
    }
}

if (typeof Notification.POOL === 'undefined') {
    Notification.POOL = null;
}

module.exports = Notification;

/***/ }),

/***/ "./src/core/scene/index.js":
/*!*********************************!*\
  !*** ./src/core/scene/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./scene.model */ "./src/core/scene/scene.model.js");

/***/ }),

/***/ "./src/core/scene/scene.model.js":
/*!***************************************!*\
  !*** ./src/core/scene/scene.model.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Entity = __webpack_require__(/*! ../entity */ "./src/core/entity/index.js");
const DefaultSettings = __webpack_require__(/*! ./scene.settings */ "./src/core/scene/scene.settings.js");

class Scene extends Entity {
    constructor(settings = {}) {
        super(settings);
        this.init();
        this.setEnvironment(settings.environment);
        this.setCamera(settings.camera);
    }

    init() {
        this.entities = [];
        this.capacity = 0;
        this.nbGameElement = 0;
        this.controllers = {};
    }

    setEnvironment(environment = null) {
        this.environment = environment;
    }

    setCamera(camera = null) {
        if (camera === null) {
            camera = new Ca
        }

        this.camera = camera;
    }

    bindTo(viewport) {
        this.viewport = viewport;
        this.subscribeTo(
            viewport, 
            'mouse-move', 
            this.onMouseMove.bind(this)
        );
    }


    onMouseMove(notification) {
        console.log('scene-mouse-move', notification);
    }

    render(viewport) {
        if (typeof viewport === 'undefined') {
            viewport = this.viewport;
        }
        
        viewport.clear();
        
        const renderingData = this.camera.snapshot(this.environment);
        const context = viewport.getContext();
        const width =  viewport.getResolution().width;
        
        context.font = '20px';
            
        // data.x is a normalized coord into environment coord system.
        // we want to transform theses coordinates in 0..1 coordinates into viewport grid
        renderingData.forEach(data => {
            data.x = Math.round(data.x * width);
            data.y = Math.round(data.y * width);
            data.width = Math.round(data.width * width);
            data.height = Math.round(data.height * width);
           
            data.gameElement.render(
                context, 
                data.x, 
                data.y, 
                data.width, 
                data.height
            );
        });
    }

    unlink() {
        // @todo
        //this.unsubscribe()
    }

    add(gameElement, x = 0, y = 0, z = 0) {
        this.environment.add(gameElement, x, y, z);

        if (this.nbGameElement <= this.capacity) {
            this.entities[this.nbGameElement] = gameElement;
            this.nbGameElement++;
        }

        else {
            this.entities.push(gameElement);
            this.nbGameElement = this.entities.length;
            this.capacity = this.nbGameElement;
        }
    }
    
    increaseCapacity(delta = 0) {
        this.entities.length += Math.abs(delta);
    }

    move(x, y, z) {
        this.camera.move(x, y, z);
    }

    getEnvironment() {
        return this.environment;
    }

    static create() {
        return new Scene({ 
            camera: DefaultSettings.getCamera(),
            environment: DefaultSettings.getEnvironment()
        });
    }
}

module.exports =  Scene;

/***/ }),

/***/ "./src/core/scene/scene.settings.js":
/*!******************************************!*\
  !*** ./src/core/scene/scene.settings.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Camera = __webpack_require__(/*! ../../camera */ "./src/camera/index.js");
const Map = __webpack_require__(/*! ../../map */ "./src/map/index.js");

module.exports = {
    getCamera() {
        return new Camera({
            radius: 5,
            position: {
                x: 0.5,
                y: 0.5
            }
        });
    },
    
    getEnvironment() {
        return new Map({
            name: 'map',
            nbRows: 100,
            nbColumns: 100
        });
    } 
};

/***/ }),

/***/ "./src/core/viewport/index.js":
/*!************************************!*\
  !*** ./src/core/viewport/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./viewport.model */ "./src/core/viewport/viewport.model.js");

/***/ }),

/***/ "./src/core/viewport/viewport.model.js":
/*!*********************************************!*\
  !*** ./src/core/viewport/viewport.model.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Entity = __webpack_require__(/*! ../entity/entity.model */ "./src/core/entity/entity.model.js");
const MouseController = __webpack_require__(/*! ./viewport.mouse.controller */ "./src/core/viewport/viewport.mouse.controller.js");
const Canvas = __webpack_require__(/*! ../canvas */ "./src/core/canvas/index.js");

class ViewPort extends Entity {
    constructor(settings = {}) {
        super(settings);
        this.init_ViewPort(settings);
    }

    
    drawCoordinates() {
        const context = this.getContext();
        const { width, height } = this.getResolution();

        context.font = '1px serif';
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                context.fillText(`(${i}, ${j})`, i, j);
            }    
        }
    }

    getResolution(layerName = 'main') {
        return this.layers[layerName].resolution;
    }

    getSize(layerName = 'main') {
        return this.layers[layerName].size;
    }

    getContext(layerName = 'main') {
        return this.layers[layerName].context;  
    }

    init_Controllers(settings) {
        this.controllers = {};
        this.init_MouseController(settings);
    }

    init_MouseController(settings = {}) {
        let Model = MouseController;

        if (typeof settings.MouseController === 'function') {
            Model = settings.MouseController;
        }

        this.setMouseController(new Model({
            component: this
        }));
    }

    setMouseController(handler) {
        this.controllers.mouse = handler
    }

    setupViewPortListeners(settings) {
        this.init_Controllers(settings);
        const mainLayer = this.layers.main.node;
       
        mainLayer.addEventListener('mousemove', (event) => {
            this.controllers.mouse.onMouseMove(event);
        });

        mainLayer.addEventListener('mousedown', (event) => {
           this.controllers.mouse.onMouseDown(event);
        });

        mainLayer.addEventListener('mouseout', event => {
            this.controllers.mouse.onMouseOut(event);
        });

        mainLayer.addEventListener('mouseenter', event => {
            this.controllers.mouse.onMouseEnter(event);
        });
    }

    addLayer(name) {
        const main = this.layers.main; 
        
        const layer = new Canvas({
            name: name,
            container: main.container,
            size: main.size,
            resolution: main.resolution
        });

        layer
            .disableEvent()
            .addClass('gd-viewport')
            .setBackground('none')
        ;

        this.layers[name] = layer;
    }

    clear(layer) {
        if (typeof layer === 'string') {
            this.layers[layer].clear();
        }

        else {
            Object.values(this.layers).forEach(
                layer => layer.clear()
            );
        }
    }
    
    init_ViewPort(settings = {}) {
        settings.name = 'main';
        const main = new Canvas(settings);
        main.addClass('gd-viewport');

        // .setContainer(
        //     document.getElementById(settings.container)
        // );
        
        this.layers = { main };
        this.shrinkContainer();

        this.addLayer('ui');

        this.setupViewPortListeners(settings);
    }

    setResolution(width, height) {
        Object.values(this.layers).forEach(
            layer => layer.setResolution(width, height)
        );
    }

    shrinkContainer() {
        this.layers.main.container.style.width = this.layers.main.getWidth() + 'px';
    }
    
    setSize(width, height, refreshRatio = true) {
        Object.values(this.layers).forEach(
            layer => layer.setSize(width, height, refreshRatio)
        );

        this.shrinkContainer();
        
        if (refreshRatio === true) {
            this.setResolution(width, height)
        } 
    }

    getPixelsCoordsFromPageCoords(coords) {
        return this.layers.main.getPixelsCoordsFromPageCoords(coords);
    }

    bind(component) {
        component.subscribe(this);
    }

    getCellCoordsFromPixelCoords(coords) {
        const ratio  = this.layers.main.ratio;
        const x      = Math.floor(coords.x * ratio.x);
        const y      = Math.floor(coords.y * ratio.y);
        return {x, y};
    }

    getNormalizedPosition(coords) {
        return this.layers.main.getNormalizedPosition(coords);
    }
}

module.exports = ViewPort;

/***/ }),

/***/ "./src/core/viewport/viewport.mouse.controller.js":
/*!********************************************************!*\
  !*** ./src/core/viewport/viewport.mouse.controller.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MouseController = __webpack_require__(/*! ../controllers/mouse.controller */ "./src/core/controllers/mouse.controller.js");

class ViewPortMouseController extends MouseController {
    constructor(settings) {
       super(settings);
    }

    onMouseMove(event) {
        const normalizedCoords = this.component.getNormalizedPosition(event);
        this.component.notify('mouse-move', normalizedCoords);
    }
}

module.exports = ViewPortMouseController;

/***/ }),

/***/ "./src/map/index.js":
/*!**************************!*\
  !*** ./src/map/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Map = __webpack_require__(/*! ./map.model */ "./src/map/map.model.js");
const TileMap = __webpack_require__(/*! ./tile-map.model */ "./src/map/tile-map.model.js");

module.exports = __webpack_require__(/*! ./map.model */ "./src/map/map.model.js");

/***/ }),

/***/ "./src/map/map.model.js":
/*!******************************!*\
  !*** ./src/map/map.model.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Entity = __webpack_require__(/*! ../core/entity/entity.model */ "./src/core/entity/entity.model.js");
class Map extends Entity {
    constructor(settings = {}) {
        super(settings);

        this.layers = {};


        this.context = {
            topLeftPixelCoords: {
                x: 0,
                y:0
            },

            topRightPixelCoords: {
                x: 0,
                y:0
            },

            bottomLeftPixelCoords: {
                x: 0,
                y:0
            },


        }

        this.data.nbRows           = settings.nbRows || 10;
        this.data.nbColumns        = settings.nbColumns || 10;
        this.data.nbLayers         = 0;
        this.data.layersAvailabes  = [];
    }

    getLayer(z) {
        return this.layers[z] || null;
    }

    setLayer(layers = {}, index) {
        this.layers[index] = layers;
        this.data.nbLayers = Object.keys(this.layers).length;
        this.data.layersAvailabes = Object.values(this.layers).sort();
    }

    add(gameElement, x = 0, y = 0, z = 0) {
        if (typeof this.layers[z] !== 'undefined') {
            if (typeof this.layers[z][x] !== 'undefined') {
                this.layers[z][x][y] = gameElement;
            }

            else {
                this.layers[z][x] = {};
                this.layers[z][x][y] = gameElement;
            }
        }

        else {
            const layer = {};
            layer[x] = {};
            layer[x][y] = gameElement;
            this.setLayer(layer, z);
        }
    }

    // render(x_min, y_min, z_min, x_max, y_max, z_max, context) {
    //     let layer, row = null;
    //     for(let z = z_min; z < z_max; ++z) {
    //         if (typeof this.layers[z] === 'undefined') {
    //             continue;
    //         }

    //         else {
    //             layer = this.layers[z];
    //         }

    //         for(let y = y_min; y < y_max; ++y) {
    //             if (typeof layers[y] === 'undefined') {
    //                 continue;
    //             }
    
    //             else {
    //                 row = layers[y];
    //             }

    //             for(let x = x_min; x < x_max; ++x) {
    //                 if (typeof row[x] === "undefined") {
    //                     continue
    //                 }

    //                 else {
    //                     row[x].render(context)
    //                 }
    //             }
    //         }
    //     }
    // }

    getNbRows() {
        return this.data.nbRows;
    }

    getNbColumns() {
        return this.data.nbColumns;
    }

    viewPortCellCoordsToMapCellCoords(viewportCellCoords) {
        const x = Math.floor(viewportCellCoords.x * this.getNbRows());
        const y = Math.floor(viewportCellCoords.y * this.getNbColumns());
        return {x, y};
    }
    

    // onNewNotification(notification) {
    //     const notificationName = notification.name;

    //     switch(notificationName) {
    //         case 'updateCoords':
    //             this.viewPortCellCoordsToMapCellCoords(notification.data);
    //             break;
    //         default:
    //             break;
    //     } 

    //     // override me !

    //     notification.recycle();
    // }
}

module.exports = Map;

/***/ }),

/***/ "./src/map/tile-map.model.js":
/*!***********************************!*\
  !*** ./src/map/tile-map.model.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Map = __webpack_require__(/*! ./map.model */ "./src/map/map.model.js");
class TileMap extends Map {
    constructor(settings = {}) {
        settings.name = settings.name || 'tile-map';
        super(settings);
    }

    add(tile, x = 0, y = 0, z = 0, width = 1, height = 1) {
        tile.setPosition({x, y});
        tile.setSize({width, height});
        super.add(tile, x, y, z);
    }

    // map date is an object like
    // { layer: { x : { y : gameElement }}}
    fill(mapData) {

    }

    getRenderingDataFromNormalizedCoords(x_min = 0, y_min = 0, z_min = 0, x_max = 0, y_max = 1, z_max = 1) {
        const nbColumns = this.getNbColumns();
        const nbRows = this.getNbRows();
        return this.getRenderingData(
            Math.round(x_min *  nbColumns),
            Math.round(y_min *  nbRows),
            z_min,
            Math.round(x_max *  nbColumns),
            Math.round(y_min *  nbRows),
            z_max,
        );
    }

    getTile(x, y, z = 0) {
        const layer = this.layers;
        if (
            typeof layer[z] !== 'undefined' &&
            typeof layer[z][x] !== 'undefined'
        ) {
            return this.layers[z][x][y];
        }

        else {
            return undefined;
        }
    }

    
    getRenderingData(x_min = 0, y_min = 0, z_min = 0, x_max = this.getNbColumns(), y_max = this.getNbRows(), z_max = 10) {
        let layer, column = null;
        let renderingData = [];
        let x, y, z;


       
        for(z = z_min; z < z_max; z++) {
            layer = this.getLayer(z);
            if (layer !== null) {
                for(x = x_min; x < x_max; x++) {
                    if (typeof layer[x] !== 'undefined') {
                        column = layer[x];
                        for(y = y_min; y < y_max; y++) {
                            if (typeof column[y] !== "undefined") {
                                const elt = column[y];
                                renderingData.push({
                                    gameElement: elt,
                                    x: elt.getX() / this.getNbColumns(),
                                    y: elt.getY() / this.getNbRows(),
                                    width: elt.getWidth() / this.getNbColumns(),
                                    height: elt.getHeight() / this.getNbRows()
                                });
                            }
                        }
                    }
                }
            }
        }

        return renderingData;
    }

    
    getNbRows() {
        return this.data.nbRows;
    }

    getNbColumns() {
        return this.data.nbColumns;
    }

    viewPortCellCoordsToMapCellCoords(viewportCellCoords) {
        const x = Math.floor(viewportCellCoords.x * this.getNbRows());
        const y = Math.floor(viewportCellCoords.y * this.getNbColumns());
        return {x, y};
    }
}

module.exports = TileMap;

/***/ }),

/***/ "./src/tileset/Tile.model.js":
/*!***********************************!*\
  !*** ./src/tileset/Tile.model.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Tile {
    constructor(settings = {}) {
        this.src = settings.value;
        this.name = settings.name;
        this.setImg(settings.img);

        this.details = settings.details

    }

    setImg(img = new Image()) {
        this.img = img;
        this.loaded = img.height !== 0;
    }

    isLoaded() {
        return this.loaded;
    }

    load() {
        return new Promise(resolve => {
            const img = new Image();
            img.onload = () => {
                this.setImg(img);
                this.img = img;
                resolve(img);
            };

            img.src = this.src;
            img.name = this.name;
        });
    }

    setDetails(details) {
        this.details = details;
    }
}

module.exports = Tile;

/***/ }),

/***/ "./src/tileset/Tileset.config.js":
/*!***************************************!*\
  !*** ./src/tileset/Tileset.config.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
    defaultName: 'Untitled tileset'
};

/***/ }),

/***/ "./src/tileset/Tileset.model.js":
/*!**************************************!*\
  !*** ./src/tileset/Tileset.model.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const defaults = __webpack_require__(/*! ./Tileset.config */ "./src/tileset/Tileset.config.js");
const Entity = __webpack_require__(/*! @core/entity */ "./src/core/entity/index.js");
const Tile = __webpack_require__(/*! ./Tile.model */ "./src/tileset/Tile.model.js");

class Tileset extends Entity {
    constructor(settings = {}) {
        super(settings);

        this.setName(settings.name);
        this.tiles = null; 
        this.assetManager = settings.assetManager;

        this.index = settings.index || null;
        this.retrieveTiles();
    }

    retrieveTiles() {
        let ressources;

        if (this.index === null) {
            ressources = this.assetManager.find({
                tileset: this.name
            });
        }

        else {
            ressources = this.assetManager.index[this.index];
        }
       
        this.tiles = ressources.map(ressource => {
            return new Tile(ressource);
        });
    }

    loadTiles() {
        return this.tiles.filter(tile => {
            return tile.isLoaded() === false;
        }).map(tile => {
            tile.load();
        });
    }

    getTile(name) {
        return this.tiles[name];
    }

    setName(name) {
        this.name = name || defaults.name;
    }

    exports() {
        // todo
    }

    import() {
        // todo
    }

    getTiles() {
        return Object.values(this.tiles);
    }
}

module.exports = Tileset;

/***/ }),

/***/ "./src/tileset/index.js":
/*!******************************!*\
  !*** ./src/tileset/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./Tileset.model */ "./src/tileset/Tileset.model.js");

/***/ })

/******/ });
});
//# sourceMappingURL=gamedong-engine.js.map