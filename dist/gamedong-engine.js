(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("GameDong", [], factory);
	else if(typeof exports === 'object')
		exports["GameDong"] = factory();
	else
		root["GameDong"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./autoload/index.js":
/*!***************************!*\
  !*** ./autoload/index.js ***!
  \***************************/
/***/ ((module) => {

/** Generated from cli **/
module.exports = function (GameDong) {
  var prefix = '.'; // require(prefix + '/grass.tileset.loader.js')(GameDong);
  // require(prefix + '/sample-1.tileset.loader.js')(GameDong);
};

/***/ }),

/***/ "./src/app/assets.loader.js":
/*!**********************************!*\
  !*** ./src/app/assets.loader.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function (GameDong) {
  var AssetManager = GameDong.AssetManager;
  AssetManager.store('tile', __webpack_require__(/*! @assets/tiles/tile.png */ "./assets/tiles/tile.png"));
  AssetManager.store('a', __webpack_require__(/*! @assets/tiles/a.png */ "./assets/tiles/a.png"));
  AssetManager.store('b', __webpack_require__(/*! @assets/tiles/b.png */ "./assets/tiles/b.png"));
};

/***/ }),

/***/ "./src/app/class.loader.js":
/*!*********************************!*\
  !*** ./src/app/class.loader.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function (app) {
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
};

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./main */ "./src/app/main.js");

/***/ }),

/***/ "./src/app/main.js":
/*!*************************!*\
  !*** ./src/app/main.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var app = {};

try {
  __webpack_require__(/*! ./class.loader */ "./src/app/class.loader.js")(app);

  __webpack_require__(/*! @autoload */ "./autoload/index.js")(app);

  __webpack_require__(/*! ./assets.loader */ "./src/app/assets.loader.js")(app);
} catch (error) {
  console.error(error);
} finally {
  window.GameDong = app;
}

module.exports = app;

/***/ }),

/***/ "./src/camera/index.js":
/*!*****************************!*\
  !*** ./src/camera/index.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var GameElement = __webpack_require__(/*! @core/game-element */ "./src/core/game-element/index.js");

var Coords = __webpack_require__(/*! @core/coords */ "./src/core/coords/index.js");

var Camera = /*#__PURE__*/function (_GameElement) {
  _inherits(Camera, _GameElement);

  var _super = _createSuper(Camera);

  function Camera(settings) {
    var _this;

    _classCallCheck(this, Camera);

    _this = _super.call(this, settings);
    _this.radius = settings.radius || 10; // this.data.position = settings.coords || Coords._2D.getOne();

    return _this;
  }

  _createClass(Camera, [{
    key: "setScene",
    value: function setScene(scene) {
      this.data.scene = scene;
    }
  }, {
    key: "getScene",
    value: function getScene() {
      return this.data.scene;
    }
  }, {
    key: "snapshot",
    value: function snapshot(viewport) {
      // means render
      var resolution = viewport.getResolution();
      var size = viewport.getSize();
      var context = viewport.getContext();
      var rx = resolution.width;
      var ry = resolution.height; // const vw = size.width;
      // const vh = size.height;

      var position = this.getPosition();
      var pos_x = position.x;
      var pos_y = position.y;
      var nbRows = this.data.scene.getNbRows();
      var nbColumns = this.data.scene.getNbColumns();
      var renderingData = this.data.scene.getRenderingData(Math.round(pos_x * nbColumns) - this.radius, Math.round(pos_y * nbRows) - this.radius, 0, Math.round(pos_x * nbColumns) + this.radius, Math.round(pos_y * nbRows) + this.radius, 10);
      var delta = this.radius / nbColumns;
      var x0 = Math.round((pos_x - delta) * nbColumns) / nbColumns;
      var y0 = Math.round((pos_y - delta) * nbRows) / nbRows;
      var xn = Math.round((pos_x + delta) * nbColumns) / nbColumns;
      var yn = Math.round((pos_y + delta) * nbRows) / nbRows;
      context.font = '20px'; // data.x is a normalized position into map
      // we want to transform theses coordinates in 0..1 coordinates in camera grid

      renderingData.forEach(function (data, index) {
        var x = Math.round((data.x - x0) * 100 / (2 * delta) * rx) / 100;
        var y = Math.round((data.y - y0) * 100 / (2 * delta) * rx) / 100;
        var w = Math.round(data.width * 100 / (delta * 2) * rx) / 100;
        var h = Math.round(data.height * 100 / (delta * 2) * rx) / 100;
        data.gameElement.render(context, x, y, w, h);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {// this.data.coords.recycle();
    }
  }]);

  return Camera;
}(GameElement);

module.exports = Camera;

/***/ }),

/***/ "./src/core/assets/asset.service.js":
/*!******************************************!*\
  !*** ./src/core/assets/asset.service.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const Asset = require('./asset.model')
var GameElement = __webpack_require__(/*! @core/game-element */ "./src/core/game-element/index.js");

var AssetManager = /*#__PURE__*/function () {
  function AssetManager() {
    _classCallCheck(this, AssetManager);

    this.ressources = {};
    this.ressourcesDetails = {};
    this.index = {};
  }

  _createClass(AssetManager, [{
    key: "store",
    value: function store(name, data) {
      var details = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.ressources[name] = data;

      if (details === null) {
        this.ressourcesDetails[name] = {
          name: name
        };
      } else {
        details.name = name;
        this.ressourcesDetails[name] = details;
      }
    }
  }, {
    key: "setDetails",
    value: function setDetails(ressourceName, details) {
      this.ressourcesDetails[ressourceName] = details;
    }
  }, {
    key: "get",
    value: function get(name) {
      return this.ressources[name];
    }
  }, {
    key: "find",
    value: function find(selectors) {
      var _this = this;

      var ressourcesName = Object.keys(this.ressources);
      var filteredRessources = ressourcesName.filter(function (name) {
        var details = _this.ressourcesDetails[name];
        Object.keys(selectors).forEach(function (attributeName) {
          var attributeValue = selectors[attributeName];

          if (details[attributeName] !== attributeValue) {
            return false;
          }
        });
        return true;
      });
      return filteredRessources.map(function (name) {
        return {
          name: name,
          value: _this.ressources[name],
          details: _this.ressourcesDetails[name]
        };
      });
    }
  }, {
    key: "createIndex",
    value: function createIndex(name) {
      var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (typeof this.index[name] !== 'undefined') {
        throw new Error("Cannot create an index twice (".concat(name, ")"));
      } else {
        this.index[name] = content;
      }
    }
  }, {
    key: "addToIndex",
    value: function addToIndex(name, key, value) {
      if (typeof this.index[name] === 'undefined') {
        throw new Error("Index not found (".concat(name, ")"));
      } else {
        this.index[name][key] = value;
      }
    }
  }, {
    key: "toImage",
    value: function toImage(ressource) {
      return this.getImage(ressource.name);
    }
  }, {
    key: "getImage",
    value: function getImage(imageName) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var img = new Image();

        img.onload = function () {
          return resolve(img);
        };

        img.src = _this2.get(imageName);
        img.name = imageName;
      });
    }
  }, {
    key: "getImageAsGameElement",
    value: function getImageAsGameElement(imageName) {
      var _this3 = this;

      return new Promise(function (resolve) {
        _this3.getImage(imageName).then(function (image) {
          var elt = new GameElement();
          elt.name = image.name;
          elt.setTexture(image);
          resolve(elt);
        });
      });
    }
  }, {
    key: "delete",
    value: function _delete(name) {
      delete this.ressources[name];
    }
  }]);

  return AssetManager;
}();

AssetManager.singleton = null;

AssetManager.getInstance = function () {
  if (AssetManager.singleton === null) {
    AssetManager.singleton = new AssetManager();
  }

  return AssetManager.singleton;
};

module.exports = AssetManager;

/***/ }),

/***/ "./src/core/assets/index.js":
/*!**********************************!*\
  !*** ./src/core/assets/index.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./asset.service */ "./src/core/assets/asset.service.js").getInstance();

/***/ }),

/***/ "./src/core/canvas/canvas.model.js":
/*!*****************************************!*\
  !*** ./src/core/canvas/canvas.model.js ***!
  \*****************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Canvas = /*#__PURE__*/function () {
  function Canvas() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Canvas);

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
      var parent = this.node.parentNode;

      if (parent) {
        this.container = parent;
        this.container.appendChild(this.node);
      }
    } else {
      this.container.appendChild(this.node);
    }
  }

  _createClass(Canvas, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
      this.node.setAttribute('data-name', name);
    }
  }, {
    key: "setContainer",
    value: function setContainer(container) {
      this.contaner = container;
      this.container.appendChild(this.node);
      return this;
    }
  }, {
    key: "addClass",
    value: function addClass(className) {
      this.node.classList.add(className);
      return this;
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      this.node.classList.remove(className);
      return this;
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(className) {
      this.node.classList.toggle(className);
      return this;
    }
  }, {
    key: "getNode",
    value: function getNode(settings) {
      var type = _typeof(settings.node);

      if (type === 'string') {
        return document.querySelector(settings.node);
      } else if (type === 'object') {
        return settings.node;
      } else {
        return document.createElement('canvas');
      }
    }
  }, {
    key: "getContainer",
    value: function getContainer(settings) {
      var type = _typeof(settings.container);

      if (type === 'string') {
        return document.getElementById(settings.container);
      } else if (type === 'object') {
        return settings.container;
      } else {
        return null;
      }
    }
  }, {
    key: "setBackground",
    value: function setBackground(color) {
      this.node.style.background = color;
      return this;
    }
  }, {
    key: "disableEvent",
    value: function disableEvent() {
      this.node.style.pointerEvents = 'none';
      return this;
    }
  }, {
    key: "enableEvent",
    value: function enableEvent() {
      this.node.style.pointerEvents = 'auto';
      return this;
    }
  }, {
    key: "init_Size",
    value: function init_Size(settings) {
      this.size = {};
      var size = settings.size;

      if (typeof size === 'undefined') {
        this.setSize(300, 300, false);
      } else {
        this.setSize(size.width, size.height, false);
      }
    }
  }, {
    key: "init_Resolution",
    value: function init_Resolution(settings) {
      this.resolution = {};
      var resolution = settings.resolution;

      if (typeof resolution === 'undefined') {
        this.setResolution(this.size.width, this.size.height);
      } else {
        this.setResolution(resolution.width, resolution.height);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var resolution = this.resolution;
      this.context.clearRect(0, 0, resolution.width, resolution.height);
    }
  }, {
    key: "init_Ratio",
    value: function init_Ratio() {
      this.ratio = {};
      this.updateRatio();
    }
  }, {
    key: "setSize",
    value: function setSize(width, height) {
      var refreshRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.size.width = width;
      this.size.height = height;
      this.node.style.width = width + 'px';
      this.node.style.height = height + 'px';

      if (refreshRatio === true) {
        this.updateRatio();
      }
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.size.width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.size.height;
    }
  }, {
    key: "getInnerWidth",
    value: function getInnerWidth() {
      return this.resolution.width;
    }
  }, {
    key: "getInnerHeight",
    value: function getInnerHeight() {
      return this.resolution.height;
    }
  }, {
    key: "getResolution",
    value: function getResolution() {
      return JSON.parse(JSON.stringify(this.resolution));
    }
  }, {
    key: "setResolution",
    value: function setResolution(width, height) {
      this.node.width = width;
      this.node.height = height;
      this.resolution.width = width;
      this.resolution.height = height;
    }
  }, {
    key: "updateRatio",
    value: function updateRatio() {
      var size = this.size;
      var ratio = this.ratio;
      var resolution = this.resolution;

      if (size.width === 0 || size.height === 0) {
        ratio.x = 1;
        ratio.y = 1;
      } else {
        ratio.x = resolution.width / size.width;
        ratio.y = resolution.height / size.height;
      }
    }
  }, {
    key: "getPixelsCoordsFromPageCoords",
    value: function getPixelsCoordsFromPageCoords(coords) {
      var x = coords.x - this.node.offsetLeft + window.scrollX;
      var y = coords.y - this.node.offsetTop + window.scrollY;
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "getCellCoordsFromPixelCoords",
    value: function getCellCoordsFromPixelCoords(coords) {
      var ratio = this.ratio;
      var x = Math.floor(coords.x * ratio.x);
      var y = Math.floor(coords.y * ratio.y);
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "getNormalizedPosition",
    value: function getNormalizedPosition(coords) {
      var x = (coords.x - this.node.offsetLeft + window.scrollX) / this.size.width;
      var y = (coords.y - this.node.offsetTop + window.scrollY) / this.size.height;
      return {
        x: x,
        y: y
      };
    }
  }]);

  return Canvas;
}();

module.exports = Canvas;

/***/ }),

/***/ "./src/core/canvas/index.js":
/*!**********************************!*\
  !*** ./src/core/canvas/index.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./canvas.model */ "./src/core/canvas/canvas.model.js");

/***/ }),

/***/ "./src/core/components/POOL.model.js":
/*!*******************************************!*\
  !*** ./src/core/components/POOL.model.js ***!
  \*******************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var POOL = /*#__PURE__*/function () {
  function POOL(settings) {
    _classCallCheck(this, POOL);

    this.type = settings.type;
    this.isInitialized = false;
    var capacity = settings.capacity || 10;
    this.data = new Array(capacity);
    this.index = capacity - 1;
    this.initPool();
  }

  _createClass(POOL, [{
    key: "getCapacity",
    value: function getCapacity() {
      return this.data.length;
    }
  }, {
    key: "initPool",
    value: function initPool() {
      var capacity = this.getCapacity();

      for (var i = 0; i < capacity; ++i) {
        this.data[i] = new this.type();
      }
    }
  }, {
    key: "setCapacity",
    value: function setCapacity(capacity) {
      this.data.length = capacity;
    }
  }, {
    key: "beSureThatCapacityIsOkay",
    value: function beSureThatCapacityIsOkay() {
      var capacity = this.getCapacity();

      if (1 + this.index === capacity) {
        this.setCapacity(capacity + 10);
      }
    }
  }, {
    key: "recycle",
    value: function recycle(instance) {
      this.beSureThatCapacityIsOkay();
      this.data[this.index] = instance;
      this.index++;
    }
  }, {
    key: "getOne",
    value: function getOne() {
      var instance = null;

      if (this.index > 0) {
        instance = this.data[this.index];
        this.index--;
      } else {
        instance = new this.type();
      }

      instance.core.pool = this;
      return instance;
    }
  }]);

  return POOL;
}();

module.exports = POOL;

/***/ }),

/***/ "./src/core/controllers/mouse.controller.js":
/*!**************************************************!*\
  !*** ./src/core/controllers/mouse.controller.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Entity = __webpack_require__(/*! ../entity/entity.model */ "./src/core/entity/entity.model.js");

var MouseController = /*#__PURE__*/function (_Entity) {
  _inherits(MouseController, _Entity);

  var _super = _createSuper(MouseController);

  function MouseController() {
    var _this;

    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MouseController);

    _this = _super.call(this, settings);
    _this.component = settings.component;
    return _this;
  }

  _createClass(MouseController, [{
    key: "onMouseMove",
    value: function onMouseMove(event) {
      console.log('mouse move', event);
    }
  }, {
    key: "onLeftClick",
    value: function onLeftClick(event) {
      console.log('mouse left click', event);
    }
  }, {
    key: "onRightClick",
    value: function onRightClick(event) {
      console.log('mouse right click', event);
    }
  }, {
    key: "onMouseWheel",
    value: function onMouseWheel(event) {
      console.log('mouse wheel', event);
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      event = event || window.event;
      var button = 0;

      if (typeof event.buttons === 'undefined') {
        button = event.which || event.button;
      }

      switch (button) {
        case MouseController.LEFT_CLICK:
          this.onLeftClick(event);
          break;

        case MouseController.RIGHT_CLICK:
          this.onRightClick(event);
          break;
      }
    }
  }, {
    key: "onMouseOut",
    value: function onMouseOut() {}
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter() {}
  }], [{
    key: "isLeftClick",
    value: function isLeftClick(event) {
      // https://stackoverflow.com/questions/3944122/detect-left-mouse-button-press
      event = event || window.event;

      if (typeof event.buttons !== 'undefined') {
        return event.buttons == 1;
      }

      var button = event.which || event.button;
      return button == 1;
    }
  }, {
    key: "isRightClick",
    value: function isRightClick(event) {
      event = event || window.event;

      if (typeof event.buttons !== 'undefined') {
        return event.buttons == 0;
      }

      var button = event.which || event.button;
      return button == 0;
    }
  }]);

  return MouseController;
}(Entity);

MouseController.LEFT_CLICK = 1;
MouseController.RIGHT_CLICK = 2;
module.exports = MouseController;

/***/ }),

/***/ "./src/core/coords/coords.model.js":
/*!*****************************************!*\
  !*** ./src/core/coords/coords.model.js ***!
  \*****************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Coords = /*#__PURE__*/function () {
  function Coords(pool) {
    _classCallCheck(this, Coords);

    this.core = {
      pool: pool || null
    };
  }

  _createClass(Coords, [{
    key: "set",
    value: function set(coords) {
      var max = Math.min(this.data.length, coords.data.length);

      for (var i = 0; i < max; ++i) {
        this.data[i] = coords.data[0];
      }
    }
  }, {
    key: "get",
    value: function get() {
      return this.data;
    }
  }, {
    key: "recycle",
    value: function recycle() {
      if (this.core.pool !== null) {
        this.core.pool.recycle(this);
      }
    }
  }]);

  return Coords;
}();

module.exports = Coords;

/***/ }),

/***/ "./src/core/coords/coords2D.model.js":
/*!*******************************************!*\
  !*** ./src/core/coords/coords2D.model.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Coords = __webpack_require__(/*! ./coords.model */ "./src/core/coords/coords.model.js");

var Coords2D = /*#__PURE__*/function (_Coords) {
  _inherits(Coords2D, _Coords);

  var _super = _createSuper(Coords2D);

  function Coords2D() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var pool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, Coords2D);

    _this = _super.call(this, pool);
    _this.data = [x, y];
    return _this;
  }

  _createClass(Coords2D, [{
    key: "getX",
    value: function getX() {
      return this.data[0];
    }
  }, {
    key: "getY",
    value: function getY() {
      return this.data[1];
    }
  }, {
    key: "setX",
    value: function setX(x) {
      this.data[0] = x;
    }
  }, {
    key: "setY",
    value: function setY(y) {
      this.data[1] = y;
    }
  }]);

  return Coords2D;
}(Coords);

module.exports = Coords2D;

/***/ }),

/***/ "./src/core/coords/coords3D.model.js":
/*!*******************************************!*\
  !*** ./src/core/coords/coords3D.model.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Coords2D = __webpack_require__(/*! ./coords2D.model */ "./src/core/coords/coords2D.model.js");

var Coords3D = /*#__PURE__*/function (_Coords2D) {
  _inherits(Coords3D, _Coords2D);

  var _super = _createSuper(Coords3D);

  function Coords3D() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var pool = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, Coords3D);

    _this = _super.call(this, x, y, pool);
    _this.data.length = 3;
    _this.data[2] = z;
    return _this;
  }

  _createClass(Coords3D, [{
    key: "getZ",
    value: function getZ() {
      return this.data[2];
    }
  }, {
    key: "setZ",
    value: function setZ(z) {
      this.data[2] = z;
    }
  }]);

  return Coords3D;
}(Coords2D);

module.exports = Coords3D;

/***/ }),

/***/ "./src/core/coords/index.js":
/*!**********************************!*\
  !*** ./src/core/coords/index.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Coords2D = __webpack_require__(/*! ./coords2D.model */ "./src/core/coords/coords2D.model.js");

var Coords3D = __webpack_require__(/*! ./coords3D.model */ "./src/core/coords/coords3D.model.js");

var POOL = __webpack_require__(/*! ../components/POOL.model */ "./src/core/components/POOL.model.js");

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
/***/ ((module) => {

module.exports = {
  name: 'entity',
  version: '1.0.0',
  strictMode: false,
  verboseMode: false,
  auto_setup_settings: true,
  services: {}
};

/***/ }),

/***/ "./src/core/entity/entity.model.js":
/*!*****************************************!*\
  !*** ./src/core/entity/entity.model.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;

var configuration = __webpack_require__(/*! ./entity.model.config */ "./src/core/entity/entity.model.config.js");

var Notification = __webpack_require__(/*! ../notification */ "./src/core/notification/index.js");

var counter = 0;

var Entity = /*#__PURE__*/function () {
  function Entity() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Entity);

    // Must copy configuration file cause later a delete may remove services.skill
    settings = Object.assign(JSON.parse(JSON.stringify(configuration)), settings);
    this.name = settings.name;
    this.initialize_skills(settings);
    this.skills = {};
    this.data = {};
    this.ui = {};
    this.subscriptions = {};
    this.services = settings.services;
    this.strictMode = settings.strictMode;
    this.verboseMode = settings.verboseMode;

    if (settings.testMode === true) {
      this.enableTestMode();
    } else {
      this.store('services_to_enable', settings.services);
    }
  }

  _createClass(Entity, [{
    key: "setupListener",
    value: function setupListener(settings) {
      this.listeners = [];
    }
  }, {
    key: "sendNotificationToSubscribers",
    value: function sendNotificationToSubscribers(subscribers, name, data) {
      var _this = this;

      if (typeof subscribers !== 'undefined' && typeof subscribers.forEach === 'function') {
        subscribers.forEach(function (record) {
          var notification = Notification.POOL.getOne(name, data, _this);

          if (typeof record.callback === 'Promise') {
            record.callback(notification).then(function () {
              notification.recycle();
            }, function () {
              notification.recycle();
            });
          } else {
            record.callback(notification);
            notification.recycle();
          }
        });
      }
    }
  }, {
    key: "notify",
    value: function notify(name) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.sendNotificationToSubscribers(this.subscriptions[name], name, data);
      this.sendNotificationToSubscribers(this.subscriptions.all, name, data);
    }
  }, {
    key: "getData",
    value: function getData(propertyName) {
      return this.data[propertyName];
    }
  }, {
    key: "subscribeTo",
    value: function subscribeTo(observable) {
      var eventName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (callback === null) {
        callback = this.onNewNotification.bind(this);
      }

      observable.register(this, eventName, callback);
    } // subscribe(observable) {
    //     observable.register(this);
    //     // record all subscribed ?
    // }

  }, {
    key: "register",
    value: function register(subscriber, eventName, callback) {
      var subscription = this.subscriptions[eventName];

      if (_typeof(subscription) !== Set) {
        subscription = new Set();
        this.subscriptions[eventName] = subscription;
      }

      subscription.add({
        subscriber: subscriber,
        callback: callback
      });
    }
  }, {
    key: "onNewNotification",
    value: function onNewNotification(notification) {
      var notificationName = notification.name; // override me !

      notification.recycle();
    }
  }, {
    key: "createCustomEvent",
    value: function createCustomEvent(eventName, data) {
      if (typeof window.CustomEvent === "function") {
        return new CustomEvent(eventName, data);
      } // IE polyfill
      else {
        var params = data || {
          bubbles: false,
          cancelable: false,
          detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);
        return evt;
      }
    }
  }, {
    key: "init_id",
    value: function init_id(settings) {
      this.entity_id = "entity_".concat(++counter);

      if (typeof settings._id === 'undefined') {
        this._id = settings._id;
      } else {
        this._id = this.entity_id;
      }
    }
  }, {
    key: "disable_skills",
    value: function disable_skills() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (typeof settings.services !== 'undefined') {
        delete settings.services.skill;
      }
    }
  }, {
    key: "initialize_skills",
    value: function initialize_skills() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.skills = {};

      if (settings.disableSkills === true) {
        this.disable_skills(settings);
      }
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "setId",
    value: function setId(id) {
      this._id = id;
    }
  }, {
    key: "setService",
    value: function setService(serviceName, serviceInstance) {
      this.services[serviceName] = serviceInstance;
    }
  }, {
    key: "enableStrictMode",
    value: function enableStrictMode() {
      this.strictMode = true;
    }
  }, {
    key: "disableStrictMode",
    value: function disableStrictMode() {
      this.strictMode = false;
    }
  }, {
    key: "disableVerboseMode",
    value: function disableVerboseMode() {
      this.verboseMode = false;
    }
  }, {
    key: "enableVerboseMode",
    value: function enableVerboseMode() {
      this.verboseMode = true;
    }
  }, {
    key: "enableTestMode",
    value: function enableTestMode() {
      this.enableStrictMode();
      this.enableVerboseMode();
    }
  }, {
    key: "disableTestMode",
    value: function disableTestMode() {
      this.disableStrictMode();
      this.disableVerboseMode();
    }
  }, {
    key: "emit",
    value: function emit(eventName, data) {
      var target = data.target || window;
      var event = this.createCustomEvent(eventName, data);
      target.dispatchEvent(event);
    }
  }, {
    key: "listen",
    value: function listen(eventName, handler) {
      window.addEventListener(eventName, handler);
      this.listeners = [{
        eventName: eventName,
        handler: handler
      }];
    }
  }, {
    key: "store",
    value: function store(attributeName, attributeValue) {
      this.data[attributeName] = attributeValue;
    } //https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518

    /**
    * @param {String} htmlString representing a single element
    * @return {Element}
    */

  }, {
    key: "generateDOM",
    value: function generateDOM() {
      var htmlString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var template = document.createElement('template');
      template.innerHTML = htmlString.trim();
      return template.content.firstChild;
    }
  }, {
    key: "get",
    value: function get(attributeName) {
      return this.data[attributeName];
    }
  }, {
    key: "log",
    value: function log() {
      var _console$log;

      (_console$log = console.log).call.apply(_console$log, [null, this.name + ': '].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "debug",
    value: function debug() {
      if (this.verboseMode) {
        this.log('debug');
        this.log.apply(this, arguments);
      }
    }
  }, {
    key: "doAsync",
    value: function doAsync(task) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      setTimeout(function () {
        task();
      }, delay);
    } // async waitingFor(promisesArray) {
    //     return await Promise.all(promisesArray);
    // }

  }, {
    key: "hasSkill",
    value: function hasSkill(skillName) {
      return typeof this.skills[skillName] !== 'undefined';
    }
  }, {
    key: "notifyError",
    value: function notifyError(error) {
      var throwError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      console.error("[".concat(this.name, "] ").concat(error));

      if (throwError === true || this.strictMode === true) {
        if (error instanceof Error) {
          throw error;
        } else {
          throw new Error(error);
        }
      }
    }
  }, {
    key: "removeListener",
    value: function removeListener(listener) {
      this.removeEventListener(listener.eventName, listener.handler);
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      var _this2 = this;

      this.listeners.forEach(function (listener) {
        _this2.removeListener(listener);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeAllListeners();
    }
  }]);

  return Entity;
}();

module.exports = Entity;

/***/ }),

/***/ "./src/core/entity/index.js":
/*!**********************************!*\
  !*** ./src/core/entity/index.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./entity.model */ "./src/core/entity/entity.model.js");

/***/ }),

/***/ "./src/core/game-element/game-element.model.js":
/*!*****************************************************!*\
  !*** ./src/core/game-element/game-element.model.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Entity = __webpack_require__(/*! @core/entity */ "./src/core/entity/index.js");

var GameElement = /*#__PURE__*/function (_Entity) {
  _inherits(GameElement, _Entity);

  var _super = _createSuper(GameElement);

  function GameElement() {
    var _this;

    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, GameElement);

    _this = _super.call(this, settings);

    _this.setTexture(settings.texture);

    _this.setPosition(settings.position);

    return _this;
  }

  _createClass(GameElement, [{
    key: "move",
    value: function move(delta) {
      this.data.position.x += delta.x;
      this.data.position.y += delta.y;
    }
  }, {
    key: "getX",
    value: function getX() {
      return this.data.position.x;
    }
  }, {
    key: "getY",
    value: function getY() {
      return this.data.position.y;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.data.size.width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.data.size.height;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.data.position;
    }
  }, {
    key: "setPosition",
    value: function setPosition() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        x: 0,
        y: 0
      };
      this.data.position = position;
    }
  }, {
    key: "setSize",
    value: function setSize() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        width: 0,
        height: 0
      };
      this.data.size = size;
    }
  }, {
    key: "setTexture",
    value: function setTexture() {
      var texture = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.data.texture = texture;
    }
  }, {
    key: "render",
    value: function render() {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var x = arguments.length > 1 ? arguments[1] : undefined;
      var y = arguments.length > 2 ? arguments[2] : undefined;
      var w = arguments.length > 3 ? arguments[3] : undefined;
      var h = arguments.length > 4 ? arguments[4] : undefined;
      var d = this.data;
      var p = d.position;
      var s = d.size;

      if (typeof x !== 'number') {
        x = p.x;
      }

      if (typeof y !== 'number') {
        y = p.y;
      }

      context.drawImage(d.texture, x, y, w || s.width, h || s.height); // context.drawImage(d.texture, x, y, w, h);
    }
  }]);

  return GameElement;
}(Entity);

module.exports = GameElement;

/***/ }),

/***/ "./src/core/game-element/index.js":
/*!****************************************!*\
  !*** ./src/core/game-element/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./game-element.model */ "./src/core/game-element/game-element.model.js");

/***/ }),

/***/ "./src/core/notification/index.js":
/*!****************************************!*\
  !*** ./src/core/notification/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Notification = __webpack_require__(/*! ./notification.model */ "./src/core/notification/notification.model.js");

var POOL = __webpack_require__(/*! ./notification.POOL */ "./src/core/notification/notification.POOL.js");

if (Notification.POOL === null) {
  Notification.POOL = new POOL();
}

module.exports = Notification;

/***/ }),

/***/ "./src/core/notification/notification.POOL.js":
/*!****************************************************!*\
  !*** ./src/core/notification/notification.POOL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Notification = __webpack_require__(/*! ./notification.model */ "./src/core/notification/notification.model.js");

var POOL = __webpack_require__(/*! ../components/POOL.model */ "./src/core/components/POOL.model.js");

var NotificationPOOL = /*#__PURE__*/function (_POOL) {
  _inherits(NotificationPOOL, _POOL);

  var _super = _createSuper(NotificationPOOL);

  function NotificationPOOL(settings) {
    _classCallCheck(this, NotificationPOOL);

    return _super.call(this, {
      type: Notification,
      capacity: 10
    });
  }

  _createClass(NotificationPOOL, [{
    key: "getOne",
    value: function getOne(name, data, emitter) {
      var notification = _get(_getPrototypeOf(NotificationPOOL.prototype), "getOne", this).call(this);

      notification.setName(name);
      notification.setEmitter(emitter);
      notification.setData(data);
      return notification;
    }
  }]);

  return NotificationPOOL;
}(POOL);

module.exports = NotificationPOOL;

/***/ }),

/***/ "./src/core/notification/notification.model.js":
/*!*****************************************************!*\
  !*** ./src/core/notification/notification.model.js ***!
  \*****************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Notification = /*#__PURE__*/function () {
  function Notification(name) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var emitter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, Notification);

    this.name = name || '';
    this.data = data;
    this.emitter = emitter;
    this.core = {};
  }

  _createClass(Notification, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.data = data;
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "setEmitter",
    value: function setEmitter(emitter) {
      this.emitter = emitter;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.name = null;
      this.data = null;
      this.emitter = null;
    }
  }, {
    key: "recycle",
    value: function recycle() {
      this.clear();
      Notification.POOL.recycle(this);
    }
  }]);

  return Notification;
}();

if (typeof Notification.POOL === 'undefined') {
  Notification.POOL = null;
}

module.exports = Notification;

/***/ }),

/***/ "./src/core/viewport/index.js":
/*!************************************!*\
  !*** ./src/core/viewport/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./viewport.model */ "./src/core/viewport/viewport.model.js");

/***/ }),

/***/ "./src/core/viewport/viewport.model.js":
/*!*********************************************!*\
  !*** ./src/core/viewport/viewport.model.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Entity = __webpack_require__(/*! ../entity/entity.model */ "./src/core/entity/entity.model.js");

var MouseController = __webpack_require__(/*! ./viewport.mouse.controller */ "./src/core/viewport/viewport.mouse.controller.js");

var Canvas = __webpack_require__(/*! ../canvas */ "./src/core/canvas/index.js");

var ViewPort = /*#__PURE__*/function (_Entity) {
  _inherits(ViewPort, _Entity);

  var _super = _createSuper(ViewPort);

  function ViewPort() {
    var _this;

    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ViewPort);

    _this = _super.call(this, settings);

    _this.init_ViewPort(settings);

    return _this;
  }

  _createClass(ViewPort, [{
    key: "drawCoordinates",
    value: function drawCoordinates() {
      var context = this.getContext();

      var _this$getResolution = this.getResolution(),
          width = _this$getResolution.width,
          height = _this$getResolution.height;

      context.font = '1px serif';

      for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
          context.fillText("(".concat(i, ", ").concat(j, ")"), i, j);
        }
      }
    }
  }, {
    key: "getResolution",
    value: function getResolution() {
      var layerName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'main';
      return this.layers[layerName].resolution;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      var layerName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'main';
      return this.layers[layerName].size;
    }
  }, {
    key: "getContext",
    value: function getContext() {
      var layerName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'main';
      return this.layers[layerName].context;
    }
  }, {
    key: "init_Controllers",
    value: function init_Controllers(settings) {
      this.controllers = {};
      this.init_MouseController(settings);
    }
  }, {
    key: "init_MouseController",
    value: function init_MouseController() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var Model = MouseController;

      if (typeof settings.MouseController === 'function') {
        Model = settings.MouseController;
      }

      this.setMouseController(new Model({
        component: this
      }));
    }
  }, {
    key: "setMouseController",
    value: function setMouseController(handler) {
      this.controllers.mouse = handler;
    }
  }, {
    key: "setupViewPortListeners",
    value: function setupViewPortListeners(settings) {
      var _this2 = this;

      this.init_Controllers(settings);
      var mainLayer = this.layers.main.node;
      mainLayer.addEventListener('mousemove', function (event) {
        _this2.controllers.mouse.onMouseMove(event);
      });
      mainLayer.addEventListener('mousedown', function (event) {
        _this2.controllers.mouse.onMouseDown(event);
      });
      mainLayer.addEventListener('mouseout', function (event) {
        _this2.controllers.mouse.onMouseOut(event);
      });
      mainLayer.addEventListener('mouseenter', function (event) {
        _this2.controllers.mouse.onMouseEnter(event);
      });
    }
  }, {
    key: "addLayer",
    value: function addLayer(name) {
      var main = this.layers.main;
      var layer = new Canvas({
        name: name,
        container: main.container,
        size: main.size,
        resolution: main.resolution
      });
      layer.disableEvent().addClass('gd-viewport').setBackground('none');
      this.layers[name] = layer;
    }
  }, {
    key: "clear",
    value: function clear(layer) {
      if (typeof layer === 'string') {
        this.layers[layer].clear();
      } else {
        Object.values(this.layers).forEach(function (layer) {
          return layer.clear();
        });
      }
    }
  }, {
    key: "init_ViewPort",
    value: function init_ViewPort() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      settings.name = 'main';
      var main = new Canvas(settings);
      main.addClass('gd-viewport'); // .setContainer(
      //     document.getElementById(settings.container)
      // );

      this.layers = {
        main: main
      };
      this.shrinkContainer();
      this.addLayer('ui');
      this.setupViewPortListeners(settings);
    }
  }, {
    key: "setResolution",
    value: function setResolution(width, height) {
      Object.values(this.layers).forEach(function (layer) {
        return layer.setResolution(width, height);
      });
    }
  }, {
    key: "shrinkContainer",
    value: function shrinkContainer() {
      this.layers.main.container.style.width = this.layers.main.getWidth() + 'px';
    }
  }, {
    key: "setSize",
    value: function setSize(width, height) {
      var refreshRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      Object.values(this.layers).forEach(function (layer) {
        return layer.setSize(width, height, refreshRatio);
      });
      this.shrinkContainer();

      if (refreshRatio === true) {
        this.setResolution(width, height);
      }
    }
  }, {
    key: "getPixelsCoordsFromPageCoords",
    value: function getPixelsCoordsFromPageCoords(coords) {
      return this.layers.main.getPixelsCoordsFromPageCoords(coords);
    }
  }, {
    key: "bind",
    value: function bind(component) {
      component.subscribe(this);
    }
  }, {
    key: "getCellCoordsFromPixelCoords",
    value: function getCellCoordsFromPixelCoords(coords) {
      var ratio = this.layers.main.ratio;
      var x = Math.floor(coords.x * ratio.x);
      var y = Math.floor(coords.y * ratio.y);
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "getNormalizedPosition",
    value: function getNormalizedPosition(coords) {
      return this.layers.main.getNormalizedPosition(coords);
    }
  }]);

  return ViewPort;
}(Entity);

module.exports = ViewPort;

/***/ }),

/***/ "./src/core/viewport/viewport.mouse.controller.js":
/*!********************************************************!*\
  !*** ./src/core/viewport/viewport.mouse.controller.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MouseController = __webpack_require__(/*! ../controllers/mouse.controller */ "./src/core/controllers/mouse.controller.js");

var ViewPortMouseController = /*#__PURE__*/function (_MouseController) {
  _inherits(ViewPortMouseController, _MouseController);

  var _super = _createSuper(ViewPortMouseController);

  function ViewPortMouseController(settings) {
    _classCallCheck(this, ViewPortMouseController);

    return _super.call(this, settings);
  }

  _createClass(ViewPortMouseController, [{
    key: "onMouseMove",
    value: function onMouseMove(event) {
      var pixelCoords = this.component.getPixelsCoordsFromPageCoords(event);
      var cellCoords = this.component.getCellCoordsFromPixelCoords(pixelCoords);
      var p = this.component.getNormalizedPosition(event);
      this.component.notify('updateCoords', p);
    }
  }]);

  return ViewPortMouseController;
}(MouseController);

module.exports = ViewPortMouseController;

/***/ }),

/***/ "./src/map/index.js":
/*!**************************!*\
  !*** ./src/map/index.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Map = __webpack_require__(/*! ./map.model */ "./src/map/map.model.js");

var TileMap = __webpack_require__(/*! ./tile-map.model */ "./src/map/tile-map.model.js");

module.exports = __webpack_require__(/*! ./map.model */ "./src/map/map.model.js");

/***/ }),

/***/ "./src/map/map.model.js":
/*!******************************!*\
  !*** ./src/map/map.model.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Entity = __webpack_require__(/*! ../core/entity/entity.model */ "./src/core/entity/entity.model.js");

var Map = /*#__PURE__*/function (_Entity) {
  _inherits(Map, _Entity);

  var _super = _createSuper(Map);

  function Map() {
    var _this;

    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Map);

    _this = _super.call(this, settings);
    _this.layers = {};
    _this.context = {
      topLeftPixelCoords: {
        x: 0,
        y: 0
      },
      topRightPixelCoords: {
        x: 0,
        y: 0
      },
      bottomLeftPixelCoords: {
        x: 0,
        y: 0
      }
    };
    _this.data.nbRows = settings.nbRows || 10;
    _this.data.nbColumns = settings.nbColumns || 10;
    _this.data.nbLayers = 0;
    _this.data.layersAvailabes = [];
    return _this;
  }

  _createClass(Map, [{
    key: "getLayer",
    value: function getLayer(z) {
      return this.layers[z] || null;
    }
  }, {
    key: "setLayer",
    value: function setLayer() {
      var layers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var index = arguments.length > 1 ? arguments[1] : undefined;
      this.layers[index] = layers;
      this.data.nbLayers = Object.keys(this.layers).length;
      this.data.layersAvailabes = Object.values(this.layers).sort();
    }
  }, {
    key: "add",
    value: function add(gameElement) {
      var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      if (typeof this.layers[z] !== 'undefined') {
        if (typeof this.layers[z][x] !== 'undefined') {
          this.layers[z][x][y] = gameElement;
        } else {
          this.layers[z][x] = {};
          this.layers[z][x][y] = gameElement;
        }
      } else {
        var layer = {};
        layer[x] = {};
        layer[x][y] = gameElement;
        this.setLayer(layer, z);
      }
    } // render(x_min, y_min, z_min, x_max, y_max, z_max, context) {
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

  }, {
    key: "getNbRows",
    value: function getNbRows() {
      return this.data.nbRows;
    }
  }, {
    key: "getNbColumns",
    value: function getNbColumns() {
      return this.data.nbColumns;
    }
  }, {
    key: "viewPortCellCoordsToMapCellCoords",
    value: function viewPortCellCoordsToMapCellCoords(viewportCellCoords) {
      var x = Math.floor(viewportCellCoords.x * this.getNbRows());
      var y = Math.floor(viewportCellCoords.y * this.getNbColumns());
      return {
        x: x,
        y: y
      };
    } // onNewNotification(notification) {
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

  }]);

  return Map;
}(Entity);

module.exports = Map;

/***/ }),

/***/ "./src/map/tile-map.model.js":
/*!***********************************!*\
  !*** ./src/map/tile-map.model.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Map = __webpack_require__(/*! ./map.model */ "./src/map/map.model.js");

var TileMap = /*#__PURE__*/function (_Map) {
  _inherits(TileMap, _Map);

  var _super = _createSuper(TileMap);

  function TileMap() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TileMap);

    settings.name = settings.name || 'tile-map';
    return _super.call(this, settings);
  }

  _createClass(TileMap, [{
    key: "add",
    value: function add(tile) {
      var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var width = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var height = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      tile.setPosition({
        x: x,
        y: y
      });
      tile.setSize({
        width: width,
        height: height
      });

      _get(_getPrototypeOf(TileMap.prototype), "add", this).call(this, tile, x, y, z);
    } // map date is an object like
    // { layer: { x : { y : gameElement }}}

  }, {
    key: "fill",
    value: function fill(mapData) {}
  }, {
    key: "getRenderingDataFromNormalizedCoords",
    value: function getRenderingDataFromNormalizedCoords() {
      var x_min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y_min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z_min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var x_max = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var y_max = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var z_max = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      var nbColumns = this.getNbColumns();
      var nbRows = this.getNbRows();
      return this.getRenderingData(Math.round(x_min * nbColumns), Math.round(y_min * nbRows), z_min, Math.round(x_max * nbColumns), Math.round(y_min * nbRows), z_max);
    }
  }, {
    key: "getTile",
    value: function getTile(x, y) {
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var layer = this.layers;

      if (typeof layer[z] !== 'undefined' && typeof layer[z][x] !== 'undefined') {
        return this.layers[z][x][y];
      } else {
        return undefined;
      }
    }
  }, {
    key: "getRenderingData",
    value: function getRenderingData() {
      var x_min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y_min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z_min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var x_max = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.getNbColumns();
      var y_max = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.getNbRows();
      var z_max = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 10;
      var layer,
          column = null;
      var renderingData = [];
      var x, y, z;

      for (z = z_min; z < z_max; z++) {
        layer = this.getLayer(z);

        if (layer !== null) {
          for (x = x_min; x < x_max; x++) {
            if (typeof layer[x] !== 'undefined') {
              column = layer[x];

              for (y = y_min; y < y_max; y++) {
                if (typeof column[y] !== "undefined") {
                  var elt = column[y];
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
  }, {
    key: "getNbRows",
    value: function getNbRows() {
      return this.data.nbRows;
    }
  }, {
    key: "getNbColumns",
    value: function getNbColumns() {
      return this.data.nbColumns;
    }
  }, {
    key: "viewPortCellCoordsToMapCellCoords",
    value: function viewPortCellCoordsToMapCellCoords(viewportCellCoords) {
      var x = Math.floor(viewportCellCoords.x * this.getNbRows());
      var y = Math.floor(viewportCellCoords.y * this.getNbColumns());
      return {
        x: x,
        y: y
      };
    }
  }]);

  return TileMap;
}(Map);

module.exports = TileMap;

/***/ }),

/***/ "./src/tileset/Tile.model.js":
/*!***********************************!*\
  !*** ./src/tileset/Tile.model.js ***!
  \***********************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tile = /*#__PURE__*/function () {
  function Tile() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Tile);

    this.src = settings.value;
    this.name = settings.name;
    this.setImg(settings.img);
    this.details = settings.details;
  }

  _createClass(Tile, [{
    key: "setImg",
    value: function setImg() {
      var img = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Image();
      this.img = img;
      this.loaded = img.height !== 0;
    }
  }, {
    key: "isLoaded",
    value: function isLoaded() {
      return this.loaded;
    }
  }, {
    key: "load",
    value: function load() {
      var _this = this;

      return new Promise(function (resolve) {
        var img = new Image();

        img.onload = function () {
          _this.setImg(img);

          _this.img = img;
          resolve(img);
        };

        img.src = _this.src;
        img.name = _this.name;
      });
    }
  }, {
    key: "setDetails",
    value: function setDetails(details) {
      this.details = details;
    }
  }]);

  return Tile;
}();

module.exports = Tile;

/***/ }),

/***/ "./src/tileset/Tileset.config.js":
/*!***************************************!*\
  !*** ./src/tileset/Tileset.config.js ***!
  \***************************************/
/***/ ((module) => {

module.exports = {
  defaultName: 'Untitled tileset'
};

/***/ }),

/***/ "./src/tileset/Tileset.model.js":
/*!**************************************!*\
  !*** ./src/tileset/Tileset.model.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var defaults = __webpack_require__(/*! ./Tileset.config */ "./src/tileset/Tileset.config.js");

var Entity = __webpack_require__(/*! @core/entity */ "./src/core/entity/index.js");

var Tile = __webpack_require__(/*! ./Tile.model */ "./src/tileset/Tile.model.js");

var Tileset = /*#__PURE__*/function (_Entity) {
  _inherits(Tileset, _Entity);

  var _super = _createSuper(Tileset);

  function Tileset() {
    var _this;

    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Tileset);

    _this = _super.call(this, settings);

    _this.setName(settings.name);

    _this.tiles = null;
    _this.assetManager = settings.assetManager;
    _this.index = settings.index || null;

    _this.retrieveTiles();

    return _this;
  }

  _createClass(Tileset, [{
    key: "retrieveTiles",
    value: function retrieveTiles() {
      var ressources;

      if (this.index === null) {
        ressources = this.assetManager.find({
          tileset: this.name
        });
      } else {
        ressources = this.assetManager.index[this.index];
      }

      this.tiles = ressources.map(function (ressource) {
        return new Tile(ressource);
      });
    }
  }, {
    key: "loadTiles",
    value: function loadTiles() {
      return this.tiles.filter(function (tile) {
        return tile.isLoaded() === false;
      }).map(function (tile) {
        tile.load();
      });
    }
  }, {
    key: "getTile",
    value: function getTile(name) {
      return this.tiles[name];
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name || defaults.name;
    }
  }, {
    key: "exports",
    value: function exports() {// todo
    }
  }, {
    key: "import",
    value: function _import() {// todo
    }
  }, {
    key: "getTiles",
    value: function getTiles() {
      return Object.values(this.tiles);
    }
  }]);

  return Tileset;
}(Entity);

module.exports = Tileset;

/***/ }),

/***/ "./src/tileset/index.js":
/*!******************************!*\
  !*** ./src/tileset/index.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./Tileset.model */ "./src/tileset/Tileset.model.js");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

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
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

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

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
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

  checkListener(listener);

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
    m = _getMaxListeners(target);
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
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
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
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

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

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./assets/tiles/a.png":
/*!****************************!*\
  !*** ./assets/tiles/a.png ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./assets/tiles/b.png":
/*!****************************!*\
  !*** ./assets/tiles/b.png ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA9QAAAPUCAYAAABM1HGEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAASAAAAEgARslrPgAAewZJREFUeNrt3XeYFeX5P+Bndpey1FVARSwYOxg1it1ERbGLvbdY0KixJbZEo5ii8tMYo7F37N3EFnuJaGLvKIpiVxTpu8CW+f3xDQYUKXvO7pyzc9/XxRXZ3TPznAO8mc887/tOkqZpAC1j/Pjx6Ty+v8DHnDZtWtTV1S3w6yZOnBhNTU0L9JoZM2bE1KlTF/hckydPjoaGhgV6TUNDQ0yePHmBzzV16tSYMWPGAr2mqakpJk6cuMDnqquri2nTpi3w65rz59zamvv3Kku1tbUxffr0rMtYIFOmTIn6+voWP09FRUV0794967dbdO3atYsuXbpkXUbRdezYMaqrq8vmnN27d4+KiooFfl0hf35dunSJdu3aLfDrCvm3UF1dHR07dmzWa2tqaiJJkgV+Xfv27aNz584L/Lp5fbbzOu5//z4seMFAJAI1ERGTJk1KGxsbI2LOAWXSpEkx8/sREWmaxoQJE2b7mfr6+pgyZcpsX5tTAJnTBeWECRNi1r+LjY2NMWnSpNl+Zm7hbl5hbG4Bb16hcW5BtBxDCADAgpjXzYVOnTpFhw4dfvD787oh0rVr16iqqvre17t16xaVlZXz/NqcXj+nc87pa507d4727dvP8/3M+rXKysro1q1bRMx+M6NDhw7RqVMnNyZyRqAuARMnTkzHjx8fdXV1UVtbGxMmTIi6urqoq6uL8ePHz9aFmRlsZw20swbZ5v4sAABQHLPehJg1tM8a6me9OTBzVkOSJFFTUxMR/3ejoLq6Orp06RJdu3aNjh07RteuXaNLly7RuXPnWGSRRaJPnz7RtWtXIT5DAnUraWhoSF999dUYMWJE/Pvf/46PPvooPv300/jiiy+aNYUUAACguro6llpqqVh77bVj/fXXjw022CD69+8fFRUVgnYrEKhbSJqm6SuvvBIPPfRQPPLII/Hvf//7e9OhAQAAiq179+6x8cYbx6BBg2LQoEGxwgorCNctRKAuosmTJ6cPPPBA/OMf/4iHH344xo4dm3VJAABAzi211FKxzTbbxA477BAbb7xxtG/fXsAuEoG6QN988016xx13xN133x2PPvqoNckAAEDJ6tatW2y11Vax6667xjbbbBMdO3YUrgsgUDfDtGnT0nvvvTeuv/76eOCBBxb4kT0AAABZ69atW+y0006x5557xqabbhqVlZXC9QISqBfAq6++ml522WVxww03NOsZtgAAAKVoiSWWiAMOOCAOOOCAWGaZZQTr+SRQz0NdXV164403xmWXXRbPPfdc1uUAAAC0mIqKith0003jsMMOi8GDB+taz4NA/QPGjh2bXn311XH++efHZ599lnU5AAAArWqZZZaJQw89NIYMGRILL7ywYD0HAvV3jBo1Kh02bFjccMMNNhgDAAByr2vXrnHIIYfEr3/96+jdu7dgPQuB+r/efPPNdNiwYXHTTTdFQ0ND1uUAAACUlPbt28fuu+8ev/vd72L55ZcXrEOgjlGjRqWnnHJK3HHHHdHU1JR1OQAAACWtXbt2ceCBB8bvfve76NOnT66DdW4D9WeffZb+/ve/jyuvvFJHOiKSJImampqIiKisrIxu3brN9v2qqqro2rXrPL/Wrl276NKly2xfa9++fXTu3HmeX5vb1+dlTuedH3N6D/NjTp9RW7PQQgtlXUJMnjzZv88iGj9+fNYltBkNDQ0xefLkrMsoWbW1tblfNmX8ipg4cWKumxVpmsaECROyLiNTxsqI6dOnR21t7QK/Lk3TeOONN0r+8bzV1dVxxBFHxIknnhg9e/bMZbDOXaCura1Nhw0bFuecc06z/nKXgo4dO0aPHj2iR48esfDCC0fPnj2jZ8+e0b179+jatWt06tQpOnfuHDU1NVFdXR2dOnWKmpqaqKioiO7du0fE/62DqKqqig4dOkSnTp1y+ZcfAABK1dixY9Phw4fHFVdcEe+8807W5cxV9+7d45RTTomjjjoq2rdvn6tskZtAnaZpevPNN8cJJ5wQn3zySdblzFOHDh2if//+seqqq0b//v2jb9++sfTSS8dSSy0Viy66aK7+kgIAQJ7961//Si+//PK4/fbbo66uLutyftByyy0X55xzTmy//fa5ySu5CNRvvPFGethhh8XTTz+ddSk/qEOHDrHxxhvHJptsEhtttFEMGDAgqqqqcvMXEQAAmLsJEyakN9xwQ1x++eXx6quvZl3OD9p8883joosuimWXXbbN55k2HainTZuWnnXWWXHmmWeW5PqDHj16xMCBA2PbbbeN7bffPrp3797m/8IBAACFe/HFF9Phw4fH9ddfH998803W5XxPx44d48QTT4zf/OY30aFDhzabc9psoH7iiSfSIUOGxHvvvZd1KbNZaaWVYvDgwbHddtvFeuutF5WVlW32LxcAANCypkyZkt5yyy1xxRVXxL///e+sy/melVdeOa666qpYd91122TuaXOBur6+Pv3Tn/4Uf/zjH6OxsTHrciIioqamJnbbbbfYd999Y8MNN2yTf5EAAIBsjRw5Mr322mvjsssuK6mne1RUVMTBBx8cf/nLX9rchshtKlCPHDky3XvvvePll1/OupSorKyMzTffPA444IAYPHhwm57mAAAAlI7JkyenN954Y1x66aUlkY1m6tevX1xzzTWx1lprtZls1CYCdZqm6cUXXxzHHXdc5rve9e3bNw499NDYd999c/+QcwAAIFv/+c9/0ksuuSRuuummmD59etblRLt27eIPf/hDHH/88VFRUVH2eansA/XYsWPTgw8+OO65555M61httdXiV7/6Vey111525wYAAErK2LFj04suuiguuOCCktjEbJNNNonrrruu7JuQZR2oH3rooXTfffeNsWPHZnL+JEli8803j+OPPz423XTTsv6LAAAAtH2TJ09Or7jiijjvvPPio48+yrSWXr16xQ033BCDBg0q2yxVtoH63HPPTU844YRMNh6rqqqKPffcM4477rhYddVVy/YPHwAAyKf6+vr0lltuiT/96U/x9ttvZ1ZHZWVlnH766fHb3/42kiQpu2xVdoF6+vTp6aGHHhrXXnttq587SZLYcccd44wzzogVV1yx7P6wAQAAZtXY2Jhed911cfrpp8eYMWMyq2O77baL6667Lrp3715WOausAvXnn3+e7rTTTpk8X23dddeN//f//l/89Kc/Las/YAAAgHmpr69Pr7766jj99NPjs88+y6SG5ZdfPu65556yal6WTaB+/vnn0x133DE+/fTTVj1vv3794swzz4zBgweXzR8qAABAc9TW1qbnn39+nHHGGTF58uRWP3+PHj3ijjvuiI022qgs8ldF1gXMjxtuuCH92c9+1qphumfPnnH55ZfHa6+9JkwDAAC50KlTp+Skk05KRo4cGbvvvnurn3/cuHGx+eabx7XXXlsWnd+SD9R/+9vf0n333TemTZvWaufcdddd46233oqDDz44qaysFKYBAIBc6dOnT3LzzTcnTzzxRPTv379Vzz1jxow44IAD4pxzzin5UF3SgXro0KHpkUceGa01LX255ZaLRx55JG699dakV69egjQAAJBrG220UfLSSy/FWWedFZ06dWq186ZpGscff3z87ne/K+lQXZJrqNM0TY8//vj485//3Crna9euXRx22GFxxhlnROfOnQVpAACA73j//ffT/fffP55++ulWPe9hhx0Wf/vb36KioqLkslrJBerGxsb00EMPjSuvvLJVzjdgwIC4+uqrY5VVVim5PxwAAIBS0tDQkJ5xxhnxhz/8IRoaGlrtvHvvvXdcffXV0a5du5LKbSUVqGfMmJHuu+++ceutt7b8G0+SOPLII+Pss8+O9u3bl9QfCgAAQCl7/vnn0/322y/efvvtVjvnNttsE7fddltUV1eXTH4rmUA9ffr0dKeddor777+/xc+16KKLxvDhw2PzzTcvmT8IAACAclJXV5ceeeSRrTa7OCJi4MCBcd9990XHjh1LIsuVxKZkjY2N6b777tsqYXqzzTaLl19+WZgGAAAoQHV1dXLFFVck1157bVRXV7fKOR977LHYbbfdoqGhoSQ6w5kH6jRN01/84hdx2223teh5qqqq4rTTTosHH3wwevfuLUwDAAAUwX777Zc8/fTTsfTSS7fK+e655574+c9/Hk1NTZmH6synfJ9wwgnp2Wef3aLn6NmzZ9x+++2x0UYbCdIAAAAt4Ouvv0732GOPePTRR1vlfIcffnhceOGFmWa8TDvUw4YNa/Ewveqqq8YLL7wgTAMAALSgnj17Jg888EAMGTKkVc530UUXxWmnnZZphzizDvW1116bHnDAAdGS5996663jpptuim7dugnTAAAArWTYsGHpb37zmxbNezOdffbZcdxxx2WS+TIJ1Lfffnu6xx57RGNjY4ud46STToo//elPJfnwbwAAgLbu6quvTg855JAWf151kiQxfPjw2GeffVo9+7V6oH7ppZfSDTfcMOrq6lrk+B06dIgrrrgikw8TAACA/3nggQfS3XbbLaZMmdKi5+nYsWM89dRTsdZaa7VqDmzVQP3VV1+lAwYMiI8++qhFjt+5c+e46667YtCgQcI0AABACXjhhRfSbbbZJsaOHdui5+nTp0+88MILsdhii7VaHmy1TckaGhrS3XffvcXCdPfu3ePBBx8UpgEAAErIgAEDkieffDIWX3zxFj3Pp59+GjvttFNMnz691brGrRaof/WrX8Xjjz/eIsdeaKGF4sEHH4wNNthAmAYAACgxK620UvL444/HEkss0aLnefbZZ+PQQw9ttffVKlO+r7/++nTfffdtkWMvtthi8dBDD8WPf/xjYRoAAKCEjRkzJh04cGB88MEHLXqeiy66KA477LAWz4gtHqhffvnldMMNN4za2tqiH3vppZeOhx9+OJZffnlhGgAAoAx89NFH6cCBA2P06NEtdo527drFQw89FBtvvHGLZsUWDdTjxo1Lf/KTn8THH39c9GP36dMn/vWvf8UyyywjTAMAAJSRjz/+ON14443j/fffb7Fz9O7dO1577bXo2bNni2XGFl1DffDBB7dImK6pqYn77rtPmAYAAChDSy65ZPL444/HUkst1WLn+Pzzz+Pggw9u0ffRYoH64osvTu++++6iH7dTp05x7733xmqrrSZMAwAAlKmllloquf/++6NHjx4tdo6///3vcc0117TYtOwWmfL95ptvpmuttVbU1dUV9bgdOnSIe++9NzbbbDNhGgAAoA147rnn0s022ywmT57cIsfv1q1bvPLKKy0yw7noHeqGhob05z//edHDdGVlZVx33XXCNAAAQBuy9tprJ3//+9+jY8eOLXL8SZMmxb777huNjY1F7yYXPVAPGzYsXnjhhaJ/CBdddFHsuuuuwjQAAEAbs8kmmyQ33XRTVFZWtsjxR4wYEWeffXbRj1vUKd8jR45M11hjjZg2bVpRizz66KPjvPPOE6YBAADasHPOOSc9/vjjW+TY7dq1ixEjRsRaa61VtGxZtEDd2NiYrrfeevH8888X9U0PHDgwHnzwwaiqqhKoAQAA2rgDDzwwvfrqq1vk2Kuvvno8//zzRcuXRZvyfeGFFxY9TC+99NJx8803C9MAAAA5cemll8bGG2/cIsd+5ZVX4vzzzy/a8YrSof7iiy/SlVdeOSZMmFC0wqqrq+Ppp5+ONdZYQ5gGAADIkXHjxqXrrLNOjB49uujH7tSpU7z55pvRt2/fgrNmUTrURx11VFHDdJIkce211wrTAAAAOdSjR4/krrvuii5duhT92LW1tXHssccW5VgFB+rHHnssve2224r6Bk844QQ7egMAAOTYj3/84+SSSy5pkWPffffd8cgjjxQ8XbugKd9NTU3p2muvHS+++GLR3tiaa64ZzzzzTLRv316gBgAAyLkDDjggveaaa4p+3H79+sWrr75a0J5dBXWor7zyyqKG6c6dO8cNN9wgTAMAABAREX/7299i5ZVXLvpx33rrrbj88ssLOkazO9STJ09Ol19++fjyyy+L9oYuvfTSOOSQQ4RpAAAAvvX666+n66yzTtTV1RX1uL169YrRo0dH165dm5VDm92h/stf/lLUML399tsL0wAAAHzPj3/84+Tcc88t+nG/+uqrKOS4zepQjxs3Ll122WVj4sSJRXkTvXv3jtdeey169uwpUAMAADBHO+ywQ/r3v/+9qMfs1q1bjB49ull5tFkd6mHDhhUtTEdEXHXVVcI0AAAAc3XRRRdFTU1NUY85adKkOOuss5r12gXuUH/xxRfpj370o6LNXd9rr73ihhtuEKYBAACYpyuuuCIdMmRIUY9ZXV0dH3zwQSy66KILlE0XuEN97rnnFi1Md+vWLc4+++yifhAAAAC0XQcddFAMGjSoqMesq6uL8847b4Fft0Ad6m+++Sbt27dvTJ48uShFn3/++XHkkUfqTgMAADDfxowZk/74xz+OKVOmFO2Y3bp1izFjxsRCCy003xl1gTrUf/vb34oWptdYY404/PDDi/bmAQAAyIe+ffsmp59+elGPOWnSpPjb3/62QK+Z7w51XV1dutRSS8XXX39dcKEVFRXx7LPPxtprr607DQAAwAJraGhIf/KTn8Qbb7xRtGP26tUrPvroo+jYseN8ZdX57lBfd911RQnTERGHHHKIMA0AAECzVVVVJX/961+Lesyvvvoqbrzxxvn++fnqUKdpmq666qpFSf7du3eP0aNHR48ePQRqAAAACrLNNtuk999/f9GOt+qqq8arr75avA71o48+WrQ2+q9//WthGgAAgKI455xzoqqqqmjHe+211+Lxxx+fr7XR8xWoL7rooqIUtsgii8Sxxx5btDcKAABAvq288srJL37xi6Ie8+KLL56vn5vnlO8vvvgiXWqppaK+vr7gov7yl7/EMcccozsNAABA0YwbNy5dfvnlY/z48UU5Xvv27eOTTz6JXr16zTW/zrNDfe211xYlTPfp0ycOPfTQYn1eAAAAEBERPXr0SI455piiHW/GjBkxfPjwef7cXDvUaZqmK620UowaNarggq644oo46KCDdKcBAAAouokTJ6Z9+/aNCRMmFOV4K620UowcObL5Hepnn322KGF6xRVXjP3337+IHxUAAAD8T/fu3ZOjjjqqaMd7++2347nnnpvrGum5BuoFef7W3JxwwglRVVWlOw0AAECLOfbYY6OmpqZox7vpppvm+v0fDNQNDQ3p7bffXnABvXr1ir322qt4nxAAAADMQU1NTXLYYYcV7Xi33HJLNDY2/mCX+gcD9SOPPBJffvllwQUcdthh0bFjR91pAAAAWtyvfvWr6NKlS1GO9fnnn8eTTz75g9//wUBdjO50hw4doph3BwAAAGBuevbsmRx44IFFO97csvEcd/luampK+/TpE1988UVBJz7ggAPiqquu0p0GAACg1bz33nvpiiuuGE1NTQUfa/HFF49PPvkkkiT5XradY4f62WefLThMR0QcffTRrfFZAQAAwLeWW265ZNCgQUU51meffRYvvPDCHL83x0D9j3/8o+CTDhw4MFZbbTXdaQAAAFrdkUceWbRj3X333XP8+hwD9X333VfwCYcMGdIynwoAAADMw1ZbbRXLLrtsUY51//33z/Hr3wvUX3zxRfrWW28VdLJu3brF4MGDW+EjAgAAgO+rqKhIDj/88KIc69VXX42xY8d+bwOy7wXqhx9+OOa0UdmC2HnnnaNTp06mewMAAJCZAw88MKqrqws+Tpqm8eijj37v63MM1IXad999W+njAQAAgDmrqalJtt9++6Ic65FHHvne174XqB9//PGCTrLkkkvGRhtt1EofDwAAAPywffbZpyjHeeyxx773tdkC9Ycffph+8sknBZ1k7733joqKCtO9AQAAyNwWW2wRiy66aMHHGTNmTHzyySezrY+eLVA/88wzBZ9k7733bu3PBwAAAOaoqqoq2W233YpyrO9m5tkC9bPPPlvQwfv37x+rrLKK7jQAAAAlo1j7fI0YMWK2388WqJ9//vmCDr7VVlu18scCAAAAc7fWWmslK620UsHHee6552b7/WyButD10wI1AAAApWjPPfcs+BiffvrpbL9PZj5zuqmpKe3YsWPU19c368BdunSJr7/+Ojp06GDKNwAAACXllVdeSX/yk58UdIz27dvHtGnTIkmSJGKWDvXXX3/d7DAdEbHZZpsJ0wAAAJSk1VZbLXr37l3QMWbMmBHjxo379vffBuovv/yyoAOb7g0AAECpSpIkWXvttQs+ztixY7/9728D9eTJkws66BZbbJHhRwMAAABzN2DAgIKPMWXKlG//+9tAPXXq1GYfsH///rH00kub7g0AAEDJ+vGPf1zwMeYYqAvpUA8cODDjjwUAAADmrm/fvgUfo+gd6o022ijbTwUAAADmYZlllin4GLNm56IE6g033DDjjwUAAADmrlu3bsnCCy9c0DHm2KGe9YsLYokllohFF13U+mkAAABKXqGPzppjh7q5gbrQB2MDAABAa+nRo0dBr59jh7q2trZZB1t11VWz/jwAAABgvvTs2bOg18+xQz19+vRmHWz55ZfP+vMAAACA+VJooJ4xY8a3/10xpy8uiGLskgYAAACtodAp30UN1MV4jhcAAAC0hkJ3+Z51dndBgbpdu3bRp0+frD8PAAAAmC9dunQp6PVz7FA3Zw11r169orKy0iOzAAAAKAudO3cu6PVFm/Jd6GJuAAAAaE0t0qFuTqDu1atX1p8FAAAAzDcdagAAAGgGHWoAAABohpIJ1DU1NVl/FgAAADDfCg3Uc3xsVnN2+e7atWvWnwUAAADMt+rq6oJeX7QOtUANAABAOenYsWNBrxeoAQAAyKUOHToU9HqBGgAAgFxqkQ61NdQAAAC0dRUVFUm7du2a/fo5bkrWnA51obujAQAAQGsrpEs9xw51fX39Ah9IoAYAAKDcFD1QN2fKd6HbjQMAAEBrK2Rjsu8F6jRN0+Z0qAtdzA0AAACtragd6uasn44ofLtxAAAAaG2FZNnGxsZobGxMIwRqAAAAcqbQLDtzyXTFrL9ZUKZ8AwAAUG6qqqoKev3MpnSzO9Tt2rWLysrKJOsPAgAAABZEZWVlQa8vOFDrTgMAAFCOMu9QC9QAAACUo8wDtQ3JAAAAKEcCNQAAADRDoYF6tl2+GxoaFvgA7dq1y/ozAAAAgAVW6KZkjY2NEVFAoC400QMAAEAWCs2zswXqmb9ZEIUmegAAAMhCoYF6ZlNahxoAAIBcybxDLVADAABQjjLvUJvyDQAAQDkq6qZkOtQAAADkReYdaoEaAACAciRQAwAAQDNkvimZNdQAAACUIx1qAAAAaAabkgEAAEAzZN6hNuUbAACAcpT5GmodagAAAMpR5h1qgRoAAIByZA01AAAANEPmHWprqAEAAChHRe1Qm/INAABAXhS1Q23KNwAAAHlR1F2+TfkGAAAgL3SoAQAAoBk8hxoAAACaodAZ155DDQAAQC5l3qG2hhoAAIBy1K5du4Je7znUAAAA5FKSJAW93nOoAQAAyKWKioqCXm9TMgAAAHKp0A61TckAAADIpcw71NZQAwAAUI4y71AL1AAAAJSjQjvUswXq5nSoCy0AAAAAspD5Lt8CNQAAAOWoqGuomxOoC030AAAAkIWirqFuzpRvgRoAAIBypEMNAAAAzZB5h9oaagAAAMqRDjUAAAA0Q+aPzRKoAQAAKEdFnfLtsVkAAADkRVGnfOtQAwAAkBdFnfLd1NS0wAcQqAEAAChHhebZNE0jwi7fAAAA5EyhgXq2Kd861AAAAORFoQ3imRlaoAYAACBXCs2zswVqU74BAADIi6Lu8q1DDQAAQF4UtUMtUAMAAJAXma+hNuUbAACAclTUKd/NWUOtQw0AAEA5MuUbAAAAmiHzKd8CNQAAAOUo8w61NdQAAACUI2uoAQAAoBky71AL1AAAAJSjzNdQm/INAABAOSq0QWzKNwAAALmUeYdaoAYAAKAcZb6G2pRvAAAAylFRd/nWoQYAACAvitqhtoYaAACAvMh8DbUp3wAAAJSjzAO1DjUAAADlyGOzAAAAoBl0qAEAAKAZPDYLAAAAmsFjswAAAKAZPDYLAAAAmqFoa6jT/9PqBQAAAEAWitahbs5072IUAAAAAFko2hpqgRoAAIA80aEGAACAZijGEubGxsa0ojkbkhWrAAAAAGhtxWgQp2mqQw0AAEC+FCPPNjY2Nj9Q61ADAACQV01NTdHsKd861AAAAJSjYuTZpqYmU74BAADIl8ynfAMAAEBe6VADAACQO0Wb8t3cNdQAAACQVzrUAAAA5I411AAAANAMpnwDAABARgqa8g0AAADlKPMp39ZQAwAAkFc61AAAAOSONdQAAADQDKZ8AwAAQEZM+QYAACB3ijblW6AGAACABSNQAwAAkDvWUAMAAEAzFCPPpmkaFWmaZv1eAAAAoKwI1AAAAORO0TrUpnwDAADAgmlqatKhBgAAIF+soQYAAIBmEKgBAAAgI9ZQAwAAkDvFyLPWUAMAAEAzmPINAABA7lhDDQAAAM2QFCFRW0MNAAAAzWANNQAAADSDKd8AAADkUqGzrgsK1KZ8AwAAkFcFraEGAACAcpVphxoAAADKVaGB2qZkAAAA0AzWUAMAAJBLRZnybQ01AAAALBhrqAEAAMilTNdQm/INAABAubLLNwAAAGRAoAYAACCXbEoGAAAAGfDYLAAAAHIp003JAAAAoFzZlAwAAAAyUNAaalO+AQAAKFc61AAAAJCBpqamqBKogTy6/PLL0x8a/6qqqqJr164/+NokSaKmpmaux+/evXtUVFT84Pe7du0aVVVVP/j9Tp06RYcOHX7w+x06dIhOnTqZKgQA0EzF6FAL1EAuHXbYYdHY2Jh1GYX6wQG8NW4KdOnSJdq1a/eD36+uro6OHTs26/vzqn9utc3tZsS8jltTU/OD/+c6t+N+93uzHqddu3bRpUsXNz8AoMQUJVBbQw3kUVu/mdjQ0BDjx4+f68988803WZeZJ9/+hZv1RsR3b2zMnLnQuXPnaN++/bdBfebNh44dO0Z1dXW0b98+OnfuPDOsR01NTXTt2jW6des226+FFlrI/1kDQAvRoQaAVjZlypTZft/CNzbSmeG6pqYmFl988VhsscWid+/e0bt371hsscVi8cUXj0UXXTT69u0b7du3F8AByI1iPIdaoAZyydhHXkyaNCkmTZoUn3zySbzxxhs/+HOVlZXRt2/fdIUVVoiVVlopVlhhhVhhhRVilVVWiUUWWUTQBoDv0KEGcsvYB7NrbGyM0aNHx+jRo+OBBx6Y7Xu9e/dO11xzzZj5a5111hGyASh71lADAC3u888/j3vvvTfuvffeb7/2ox/9KN1ggw1iww03jA022CD69+/vwgCAsmKXbwAgE++//368//77cd1110VExJJLLplutNFGsemmm8agQYOiT58+AjYAbZpADeRSauCDovv444/j+uuvj+uvvz4iIvr165cOGjQoBg0aFBtvvHF07txZwAagpGS6KZkp3wDAD3nrrbfirbfeir/+9a/RsWPH2HDDDdNtt902dtppp1hyySVdRABQ9tI0jQqNGgCgJU2bNi0eeeSROOaYY2LppZeONddcMz399NPTN99800UIAJkpxhrqiuZuSgZQrtxIhOykaRovvfRSDB06NFZZZZXo379/OnTo0HTkyJH+YQLQqooSqF1YAgBZeeutt+L000+Pfv36xWqrrZaeffbZ6WeffebiBICS19TU1PxAbQ01UK7cSITS9Nprr8UJJ5wQSy65ZAwaNCgdPnx4Wltb6x8sAC1ChxoAaHOamprikUceif333z+WWGKJOOqoo0wJB6DkWEMN5JIbiVA+xo8fHxdccEH069cvBgwYkA4fPjytr6/3jxiAgmXaoTblGwBoTS+++GLsv//+0bdv3zjjjDPS8ePHC9YANFsxnkNtyjeQO8Y9KG+fffZZnHzyybHkkkvGoYcemo4aNco/agBanTXUAEDZmjp1alx22WXRv3//2GuvvTzXGoAFYlMygGYw7kHb0tDQEDfddFOsuuqqsd1226WvvPKKf+QAzFNRpnw3d1Mya6gBgFLS1NQU9957b6y55pqx1157mQoOQIvToQZyx7gHbVtTU1PcdNNN0b9//zj00EPTL774wj96AIrOpmQAQJvV0NAQl112WSy33HJx0kknpZMnT3bRA0DRWEMNALR5U6dOjWHDhkX//v3j9ttvd+EDQFEUtIYaoFy5kQj59PHHH8euu+4aAwcOTEeOHGkgAKBgOtQAQK48/vjj8ZOf/CROPfXUdPr06S6EAGgWa6iBXDLuAdOnT48//OEPscYaa8Rzzz1nUABggaVpaso3AJBfb731Vqy33npx6KGHprW1tYI1APPNpmQAQO41NTXFZZddFgMGDIiXX37ZhREA86WgQC2IA+XK+AXMyciRI2OdddaJoUOHpk1NTQYKgDYuSZKCXq9DDeSScQ/4IfX19XH66afHlltuGZ9//rnBAoAfZFMyAIA5ePjhh2PAgAHx7LPPulACYI50qAEAfsBnn30WP/vZz2LYsGEulgD4Hrt8A7nkRiIwvxoaGuKkk06K/fbbL62rqzN4APAtm5IBAMyH6667LgYNGhTjxo1zAQRARFhDDeSUcQ9ojhEjRsQ666wTo0aNMogAYA01AMCCGD16dKy//vrx9NNPu4ACyDlrqAEAFtC4ceNiiy22iH/+859CNUCO6VADuWTcAwpVW1sb22+/fdxxxx0GFIAylSRJQa8XqIFcMu4BxTBjxozYfffd49prrzWoAORQQZuSuSAFAPKusbExDjrooBg+fLgLI4CcsYYaAKBAjY2NceCBB8Ytt9wiVAPkiCnfQC4Z94Bia2xsjH333TfuvfdeAwxATgjUAABFUl9fH7vttls8+eSTLq4AckCgBnLJuAe0lLq6uhg8eHC8/vrrBhqANq6pqan5a6hdkAIAfN+kSZNi8ODB8cUXX7hYAmjDdKiBXDLuAS1tzJgxse2228bUqVMNOABtlEANANBCXnzxxfj5z38eqYstgDZJoAZyybgHtJbbb789zj777KzLAGAOkiQp6PVNTU0CNQBAS/rNb34TDz74oAsugDYmTVObkgEAtKSmpqbYZ5994uOPP3bxBNCGpGkaVYIxkDfGvYgLL7wwevXqlXUZmWhqaoqJEyfO989PmTIl6uvrZ/va1KlTY8aMGVFfXx9TpkyJiIiJEydGU1NT1NXVxbRp06KxsTEmTZoUERGTJ0+OhoaGmD59etTW1kZExPjx47P+KGhFX3/9deyzzz7x2GOPpZWVlYXNMQSgJAjUADm1zTbbxNJLL+2iPmNTpkxJJ02aFBMnToyJEyfGzP/+5ptvYuzYsfHVV1/Fl19+GV988UV89dVX8dlnny3QzQBKy1NPPRVnnXVWnHzyyVmXAkARNDU1CdRA/hj3KBVdunRJunTpEosvvvh8v2bChAnpmDFj4oMPPogPPvggRo8eHSNHjoxXX301vvnmm6zfEvNw+umnx6BBg9K1117bDS2AMpemaVQ1dw01AND6ampqktVXXz1WX331733v008/TV9//fV46aWX4t///nc8++yz8fXXX2ddMrOor6+PvffeO1599dW0U6dOQjVAGStoyrcODwCUlj59+iR9+vSJLbfc8tuvjRo1Kn322WdjxIgR8fjjj8d7772XdZm5995778Wpp54a55xzTtalAFAAa6iBXDLukScrrLBCssIKK8T+++8fERFjxoxJH3300Zj5a+zYsVmXmEvnnXde7L777ulaa62lSw1QptI09RxqIH+Me+RZ3759k4MOOii58cYbky+//DJ544034rTTTos111wz69JypbGxMQ466KCYMWOGAQkgI0lS2D3Npqam5j+HGgAof/3790+GDh2avPDCC8moUaPirLPOilVXXTXrsnLh9ddfjz//+c9ZlwFAM+lQAwDfWn755ZMTTzwxefXVV7/tXC+zzDJZl9Wm/fGPf4yPPvrIxRhAGSooUAviQLkyfsG8zexcv/fee3H//ffHtttuGxUVFVmX1ebU1tZ6LjVAmdKhBgDmqqKiItlqq62Se+65Jxk9enSceOKJ0bNnz6zLalNuuOGGePbZZ12QAZQZa6iBXHIjEZqnb9++yVlnnZWMGTMmzj333Fh88cWzLqlNSNM0jj322EgNTgBlRYcaAFhg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kIVPPvkkNt5447j99ttdVAGUKbt8A7lj3ANKxbRp02K33XaLoUOHGpgAypAp30DuCNRAKUnTNE4//fQ4+uij06amJgMUQJmwyzcAQIk4//zzY7fddovp06cL1QBlotmBWocHKFfGL6BU3XHHHbHDDjtEXV2dgQqghRXlOdSmfAN5I1ADpeyf//xnbLnlljF58mSDFUCJ06EGACgxTz31VGy11VYxceJEF1wAJcwaaiB33BAEysGIESNiiy220KkGKFGmfAO5JFAD5eI///lPbLXVVjF16lQDF0AJMuUbAKCEjRgxInbccUe7fwOUIB1qIHfcEATKzcMPPxx77rlnNDQ0GMAASkSSJFGVdREAtL6TTjopampqsi6j7NTV1cW0adOKftyJEydGU1PTbF+bNm1a1NXVzfa18ePHz/H3EyZMiDRNv/3fOR2P8nfXXXfF4YcfHpdddlnWpQDwX80O1Do8QLkyfkX84he/iKWXXtoUpTZu4sSJ6fTp02PChAlz/PXNN9/EZ599Fp988kl8+umn8fHHH38vxFNaLr/88ujbt2/629/+1r9fgIwlSRJVpnwDQNvUvXv3JCJikUUWme/XfP311+lHH30Ub731VrzxxhvxxhtvxJtvvhkffvihm1El4pRTTom+ffume+21l4s4gAIU4//XdKiB3DF+wQ/r2bNn0rNnz1hjjTVm+/rEiRPTZ599Np555pl4+umn47nnnoupU6dmXW4upWkaBx54YCyxxBLpz372M6EaIEPWUAO5I1DDguvevXuy5ZZbxpZbbhkREQ0NDekLL7wQ//znP+Of//xnvPDCC9HY2Jh1mbkxffr02HHHHeM///lPutxyywnVABnwHGoglwRqKFxVVVWy7rrrJkOHDk3+/e9/J19++WXceuutccghh8QSSyyRdXm58M0338R2220XkyZNMqgBZMRzqAGAgvXo0SPZddddk0svvTT56KOP4oUXXogTTjgh+vbtm3Vpbdrbb78dBx54YKQuzAAy0exADVCuXHdCy0qSJFlzzTWTYcOGJR988EHyxhtvxGmnnRbLLrts1qW1SXfccUeceeaZWZcBkDsFTfl2QQoAzI/+/fsnQ4cOTd59990YMWJEHHzwwdGlS5esy2pTfve738UDDzzg4gyglelQA7njhiBkI0mSZP31108uv/zy5LPPPotLL700Vl999azLahOamppi7733jo8++sgAB9BKbEoGAGSia9euySGHHJK8/PLLyTPPPBP77bdfdOjQIeuyytr48eNjv/32i8bGRqEaoJXYlAzIHeMXlJb11lsvufbaa5OPPvooTjvttOjWrVvWJZWtJ598Mv7whz9kXQZAbpjyDeSOQA2laZFFFkmGDh2ajB49Ok477bSoqanJuqSy9Ic//CEeffRRAx3APBR6TWhTMgCg5PTs2TMZOnRo8sEHH8TQoUNtYLaAmpqaYv/994/x48e7WANoYTrUQO64IQjloaamJjnttNOSUaNGxSGHHBIVFS5b5tenn34aRx55ZNZlALR5/p8JyB2BGspL7969k0svvTR57rnnYsMNN8y6nLJxww03xO23327AA2ghpnwDAGVjzTXXTJ566qm44YYbYpFFFsm6nLJwxBFHxFdffeWiDaCF6FADueOGIJSvJEmSvfbaK3n77bdjn332ybqckjd27NgYMmRI1mUAtElJknhsFpA/xi8ofwsttFBy3XXXJbfeemv06NEj63JK2t///ve46667DHwALaDZU74BALK26667Jq+99lpstdVWWZdS0o466qiYPHmyUA1QZKZ8A7mjQw1ty+KLL57cd999cdZZZ0VlZWXW5ZSkTz75JE499dSsywBoU0z5BnLJ+AVtT5IkyYknnpjce++9sdBCC2VdTkm64IIL4qWXXjIAAvxXMa4JTfkGANqMLbfcMnnuuedilVVWybqUktPY2Bi/+MUvorGxUagGKBJTvoHc0aGGtm255ZZLnn322dh+++2zLqXkPP/883H11VdnXQZAm+A51EAuGb+g7evSpUtyxx13xEEHHZR1KSXn5JNPjkmTJhkIAYpAhxoAaJMqKyuTyy+/PI477risSykpY8eOjbPOOivrMgDKnk3JgFwyfkF+JEmSnH322YkAObtzzz03Ro8ebTAEKJBNyQCANu/EE09Mzj///HDd83+mT58eJ598ctZlAJQ9U76B3NGhhnw68sgjk3PPPTfrMkrGrbfeGs8//7wBEaCZTPkGAHLlmGOOSXRm/0+apnH66adnXQZAWTPlG8gdNwQh3/74xz8mhx9+eNZllIT77rsvnn32WYMikEvFuCbUoQZyx/gFnH/++TF48OCsyygJp556atYlAJSlgqZ8AwCUq8rKyuSGG26I1VdfPetSMvfII4/E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c4A5+eCDD9IhQ4ZkXUZJ2H333aNLly4GS4C5MOUbyCUdauC7Jk+enO64444xceLErEspCQceeGDWJQCUvIICtQ41ANAWNDY2pnvuuWe8+uqrWZdSElZaaaVYf/31dVwA5sEaaiCX3BAEZvWrX/0q7rvvvqzLKBmHH3541iUAlIWC1lADAJS7Cy+8MD3//POzLqNkdO3aNfbff/+sywAoC6Z8A7lk/AIiIq6++ur0qKOOyrqMknLAAQdEt27ddFuAXCj0mtCmZEAuCdTANddckx588ME2KZxFkiSmewMsgILWULsgBQDK0bXXXpsedNBBwvR3bLPNNrHiiivqtADMJx1qIJfcEIT8uuiii4TpH/Db3/426xIAyopNyYBcEqghf9I0TYcOHZoeccQR0djYmHU5JWfgwIGx3nrruSgEWABJkkSVTckAgLZs6tSp6T777BN333131qWUrJNPPjnrEgDKTpIkUeU51ABAW/Xxxx+nO+20U7zwwgtZl1Ky1ltvvRg4cKDuNMACsoYayCVrJyEf/vGPf6Q/+clPhOl5+OMf/5h1CQBlqaA11KZ8AwClqL6+Pj3ppJPSHXbYIcaNG5d1OSVtiy220J0GaKaC1lADAJSat99+O91nn33ixRdfzLqUkpckSfzpT3/KugyAzBTaJC5oyrcONVCujF/Q9syYMSP9/e9/n66++urC9HzaZZddYs0119RZAWgmm5IBuSRQQ9syYsSI9NBDD40333wz61LKRseOHWPYsGFZlwFQ1mxKBgCUrS+//DI95JBD0p/+9KfC9AI67rjjYplllnERCFCAiooKz6EG8scu31Depk6dmv7tb3+LM844IyZNmpR1OWVniSWWiJNOOinrMgDKnk3JgFwy7kF5qq+vTy+//PL4/e9/H19++WXW5ZSts88+Ozp37mwgBChQQWuodaiBcmX8gvIybdq09Oqrr45zzjkn3n///azLKWubb7557LHHHsI0QBHoUAO5JFBDeZg8eXJ61VVXxdlnnx2ffvpp1uWUvU6dOsVFF12UdRkAbUZBa6gBypVADaXtq6++Si+88MI4//zzY/z48VmX02b88Y9/jGWXXdaFH0CRFNShdkEKABTTm2++mV544YVxzTXXRF1dXdbltClrrbVWHHXUUVmXAdCmeA41kEtuCELpqKurS2+77ba47LLLYsSIEVmX0yZVV1fHNddcE5WVlbrTALMo9JpQhxrIJeMXZKuxsTF99tln47rrroubb77Zo69a2LBhw6Jfv37CNECRWUMNALSKsWPHpg899FD885//jAceeCC++eabrEvKhS233DJ++ctfZl0GQJtkl28AoEV8/PHH6TPPPBPPPvts/Otf/4qXX37Z7JBW1rNnz7jqqqsicbEH0CI8hxrIJeMXFM/06dPTkSNHxltvvRWvv/56vPnmm/Hyyy/HJ598knVpuVZRURHXXXdd9O7dW5gGaCE61EAuCdQwf5qamtKxY8fGV199FZ9//nl88cUX8cEHH8z269NPP42mpqasS+U7Tj755Nhyyy1d5AG0IJuSAUAbk6ZpOmHChGhsbIxJkybFjBkzYurUqVFXVxfTpk2LqVOnxowZM2LSpElRW1sbEyZMiPHjx8f48eNn+++ZQbqxsTHrt8QC2nTTTeO0007LugyANs+mZEAuuSEYcckll0RNTY0PYj7U1tbG9OnTi3a88ePHz/b7NE1jwoQJs31tZhieVUNDQ0yePHmOtU2ZMiXq6+tj4sSJusU5t8QSS8SNN97oEVkArcCUbyCXBOqIs846K+sSgCKrrq6OO+64IxZZZBEXdwCtIEmSqLApGZA3xi+grUmSJK666qpYe+21hWmA+VToNWGSJFGhQw3kjUANtDWnn3567LHHHi7qAFpRRUWFQA0AUM723XffOOWUU7IuAyB3CupQ6/AA5cr4BbQVm266aVxxxRWR6JAAtLqC1lADlCuBGmgLBgwYEHfffXe0b99emAbIgA41kEsaOUC5W3755eP++++PLl26GNAAMmINNZBLntMLlLOllloqHnrooejVq5eLOIAM2eUbAKCMLLnkkvHEE09E3759XcABZMxzqIFcMn4B5WiJJZaIxx9/PJZZZhlhGqAE6FADAJSBvn37xhNPPBHLLrusCzeAIim0yWJTMiCXjF9AOVlxxRXjqaeeEqYBSoxNyYBcEqiBctG/f/94/PHHY8kll3TBBlBiPIcaAKBEbbjhhvH0009H7969hWmAEmTKN5BLxi+g1O28887x0EMPRU1NjTANUKJsSgbkkkANlLKjjjoqbr311qiurnaRBlDCkiSJKh1qAIDstWvXLv72t7/FIYccIkgDlIGKioqosoYayBs3BIFS07Nnz7jlllti4MCBwjRAmSioQw1QrgRqoJSsvvrqcdddd0Xfvn1dlAGUEZuSAQBkaO+9945nnnlGmAYoQzYlA3LJDUEgax07dozzzjsvrr/++sTmYwDZKPSa0JRvIJcEaiBLK620Utxyyy2x6qqruggDKGMVFRWmfAP540YikJWDDjooXnzxRWEaoA1IksQu30D+NDU1ZV0CkDOLLLJIXHrppbHDDjsI0gBthE3JAABa2C677BJvvvmmMA3QxtiUDACghSyyyCJx4403xm233Zb07NnTBRdAG1PQGmqAcmXKN9CSkiSJfffdN958883Yc889XWgBtFEFraE25RsAYHbLLbdcXHzxxbHZZpsJ0gBtnCnfAABF0KVLlzjjjDPijTfeEKYBckKHGsglU76BYkmSJHbZZZc455xzYqmllhKkAXIkSZKoyroIgNZmZg5QDOuuu2785S9/iXXXXdegAlCGCm0SV1RURIXnUAN5o0MNFGLllVeOW2+9NZ555hlhGqCMFRqokySJKs+hBvLG+AU0x5JLLhmnnHJKHHTQQVFZWSlIA5S5TAM1AEAeLL300nHsscfGoYceGh07dnThBEBE6FADOWX8AubHMsssE0cffXT84he/iA4dOgjSAG1MMdZQN3uXbwCAtmittdaKX//617HLLruY2g3ADzLlG8glHWrguyoqKmLrrbeOo48+2nOkAXLCpmQAAAXo0aNH7L///nH44YfHsssuK0gD5IhNyQCawQ1BYM0114xDDjkk9tlnn+jUqZOLIQAWWEVFhQ41AJAPvXv3jj333DMOPPDA6N+/vxANkHNF6VDblAzIm6ampqxLAFpJx44dY7vttot99903ttxyy2jXrp0gDUBRmPIN5JJxD9q26urq2HLLLWOXXXaJ7bbbLrp27eofPQDfY1MygGYwfkHb07lz59hqq61il112iW222Sa6dOkiRAMwV0V5DrVODZA3AjW0Dcsss0wMGjQott122xg0aFB07NjRRQ0ArcYaagCgbHTt2jU22mijGDhwYGy11Vax0korCdAANJsp3wDNYPyC8tC5c+dYZ511YpNNNolNN9001lprraiqqhKiASgJNiUDckmghtLUu3fvWHPNNWPDDTeMDTbYINZaa63o0KGDCxUAWoQONUAzGL8gezPD88xfAwYMiN69ewvPALSaomxKZg01ANBSFl100ejfv3+svPLK3/7vj3/84+jRo4fwDEBZM+UbAChIdXV1LLroorH00kvHsssuGz/60Y9i2WWX/fbXwgsv7EIDgJJkyjdAMxi/yKuOHTtGdXV1RETU1NREkiTRoUOH6NSpU0REdO/ePTp06BBdunSJmpqa6Ny5c3Tu3Dm6du0a3bt3j86dO0dNTU307NkzFl100Vh00UWjc+fOAjMAuaRDDeSSQF3aOnfuHO3bty/KsWYNkMU+xsxA2ho/O2vo7dSpU3To0CGSJImampqI+L8ucceOHSMiYqGFFvre8f97TP+HDwCzyHQNtQtSoFzNmDFDsAAAyLliTPmucMMaAAAAFoxADQAAQC5l2qE25RsAAIC8SpIkKjyHGgAAgLwpxqZkOtQAAADkjk3JAAAAIAMCNQAAALlkUzIAAADIQEVFhU3JAAAAyB9rqAEAAKAZTPkGAACADOhQAwAAkEtFeQ51c9dQ61ADAACQVzrUAAAA5JJNyQAAACADNiUDAAAgd9IiBNokSTyHGgAAABZURUWFDjUAAAD5Uow8aw01AAAANINADQAAQO4UrUPtOdQAAADkSTHybEFrqAEAACCvPDYLAACA3LEpGQAAAGREoAYAACB3iraG2qZkAAAA5Ikp3wAAAJARm5IBAACQO5k/hxoAAADySqAGAAAgd4rRoa6srLQpGQAAAPmS+S7fAAAAkFeVlZVRUVlZmXUdAAAA0Goy71Cb8g0AAEBemfINAABA7hStQ93cKd861AAAAJSjzHf5BgAAgLwy5RsAAIDcsSkZAAAAZMRjswAAAMgdHWoAAABohswDNQAAAOSVKd8AAADkTuYdalO+AQAAyKuKiormd6gFagAAAMpR0TrUSZJk/V4AAACg1RQjUFtDDQAAQO40NTUVfAy7fAMAAJA7NiUDAACAZihShzrRoQYAACBXCm0Qz1w6XVFZWdmsXcl0qAEAAChHhXaoZzamK2b9DQAAALR1hTaIBWoAAAByqdAO9bdTviOaF6hN+QYAAKAcFXXKt2dRAwAAkBemfAMAAEAzZL4pmSnfAAAAlKOiPTYrQocaAACA/Mh8DbUONQAAAOXIGmoAAABohswfmwUAAADlqKgdalO+AQAAyIvMd/kGAACAcpT5GmodagAAAMqRNdQAAADQDJk/NgsAAADKkSnfAAAA0AymfAMAAEAz6FADAABAM1hDDQAAAM1QaIPYlG8AAAByqagdalO+AQAAyIuirqE25RsAAIC8yLxDDQAAAOUo8zXUpnwDAABQjnSoAQAAoBkyX0OtQw0AAEA5KrRD7bFZAAAA5FJRp3zrUAMAAJAXmU/5BgAAgHJUaIe6qqoqIgRqAAAAcqaoj82ama5bswAAAADIgg41AAAANEPmHWoAAAAoR0XtUJvyDQAAQF4UtUNtyjcAAAB5oUMNAAAAzaBDDQAAAM2QeYcaAAAAylGhgbrgDrUp3wAAAJSjQvOsDjUAAAC5pEMNAAAAzaBDDQAAAM1Q1A61QA0AAEBeNDQ0FPT62TrUpnwDAACQF4UGah1qAAAAcqmogbo5HWoAAAAoR6Z8AwAAQDOY8g0AAADN0NjYWNDrdagBAADIJR1qAAAAaIairqEWqAEAAMiLzHf5NuUbAACAclTUNdQ61AAAAOSFDjUAAAA0gw41AAAANENRNyVrTocaAAAAylHmj80y5RsAAIBy5LFZAAAA0Aw2JQMAAIBmsCkZAAAANEPmHWoAAAAoR5mvoTblGwAAgHKkQw0AAADNoEMNAAAAzVDopmQFP4caAAAAylFRO9SmfAMAAJAXRV1Dbco3AAAAeZH5GmoAAAAoR0VdQ92+ffus3w8AAAC0ikI71B06dIiIAgK1Kd8AAACUo0ID9cwMrUMNAABArhQ1UM9sVy8IHWoAAADKUaFrqGcL1O3atcv6/QAAAECrmDZtWkGvL7hDDQAAAOVo+vTpBb3epmQAAADkUlE71O3atYskSbJ+TwAAANDiCgnUVVVVUVFRkUT8N1AnSZIs6DpqHWoAAADKUSFTvmed4V0xpy8CAABAW1VIh1qgBgAAIJcaGxvTQp5DPcdAvaA7fZvyDQAAQLkpdEOyWbOzDjUAAAC5Uegjs4oy5VuHGgAAgHJTaId61g29dagBAADIjdra2oJeb8o3AAAAuTRlypSCXm/KNwAAALnUIoF6QXf5BgAAgHIzderUgl5vyjcAAAC5ZMo3AAAANENJBGoAAAAoNyWxhlqHGgAAgHJT6BpqHWoAAABy6euvvy7o9TYlAwAAIJfGjRtX0OttSgYAAEAuFdqhNuUbAACAXGqRDnXHjh0X6CAzZszI+nMAAACABVJooJ7jGupOnTot0EE+/PDDePXVV837BgAAoGx8+umnBb2+c+fO3/73t4G6S5cuC3ygq6++OuvPAgAAAObLuHHj0smTJxd0jFmz87eBetaUPb+uvfbaqKur06UGAACg5I0ZM6bgYxStQz1hwoS48847s/5MAAAAYJ4++OCDgo8xx0DdnA51RMQVV1yR9WcCAAAA8/TKK68UfIw5TvluToc6IuLJJ5+Md99917RvAAAAStoLL7xQ8DGKGqjTNNWlBgAAoKQ1Njamzz//fMHHmeOU727dujX7gNdee23U19frUgMAAFCS/v3vf8c333xT8HFmzc7fBurFFlus2Qf88ssv45577sn44wEAAIA5+8c//lGU4yy66KLf/ve3gXrhhRdOqqurm31Q074BAAAoRU1NTelNN91U8HGqq6ujpqYmmfn7ilm/OWvSXlAPPvhgfPjhh6Z9AwAAUFIeffTR+Pjjjws+Tu/evWf7/WyBeumll272gZuamuKqq67K6OMBAACAORs+fHhRjrPkkkvO9vvZAvW6665b0MGvvvrqaGxs1KUGAACgJEyePDm98847i3Ks9dZbb7bfzxao119//YIO/vHHH8f999/fyh8PAAAAzNltt90WtbW1RTnWhhtuONvvvxeokyRZoAN+16WXXtrKHw8AAADMWbGmeydJ8r0OdZKms8/QXmmlldJ33nmn2SepqKiI0aNHR9++fQtL5gAAAFCA9957L11hhRXiu7m3Ofr16xdvvvnmbDm34rs/NHDgwIJO0tTU5BFaAAAAZO6CCy4oSpiOiNh0002/97XvBepBgwYVfKIrr7wy6uvrbU4GAABAJiZPnpxee+21RTvenLLy9wL1JptsElVVVQWd6Isvvoi777675T8hAAAAmIOrrroqJk6cWJRjVVVVxUYbbfS9r38vUNfU1CRrrbVWwSe8+OKLW+EjAgAAgNk1NTWlF154YdGOt+6660a3bt2+t09YxZx+eNttty34hI8//ni8+OKLpn0DAADQqu6///549913i3a87bbbbo5fn2Og3n777Yty0nPOOacFPhoAAAD4Yeeff35Rjzd48OA5fj35oR3PVlhhhbTQRF9ZWRnvvPNOLLvssh6hBQAAQIt76aWX0gEDBhRtd++VV1453nrrrTlm2oofetEPtbQXRGNjY9HvDAAAAMAPOe2004oWpiN+uDsdMZcO9b///e90vfXWK/jknTp1io8++ih69OihSw0AAECLKXZ3OiLixRdfjDXWWGPBOtTrrLNOLLvssgWfvLa2Ni655JKW+KwAAADgW8XuTq+44oo/GKYj5hKokyRJ9txzz6IU8ec//zkmTJhgx28AAABaxIsvvpjed999RT3mvDJxRSEvnl/jx4+Pv/zlL0V9YwAAADBTsbvTERF77LHHXL+fzOuEa6+9dvr8888XXEjXrl3j/fffj549e1pLDQAAQNE8++yz6frrr1/UY6633nrxzDPPzDW/VszrIAcddFBRipk8eXKcddZZRX2DAAAA5FuapukxxxxT9OMOGTJknj8zzw71lClT0t69e8eUKVMKLqhjx47x7rvvxhJLLKFLDQAAQMGGDx+e7r///kU9ZteuXeOzzz6LLl26FNah7tKlS7LbbrsVpahp06bF73//+6K+UQAAAPJp6tSp6W9/+9uiH3evvfaaZ5iOmI9AHRFxxBFHFK2wK6+8Mp577jk7fgMAAFCQM888Mz799NOiH/fwww+fr5+b55TvmX7605+mTz/9dFGKGzBgQPznP/+JiooKU78BAABYYB9//HG60korRW1tbVGPu+mmm8YjjzwyX1l1vjrUERFHH3100Qp84YUX4sorryzqmwYAACA/fvWrXxU9TEdEHHXUUfP9s/PdoW5oaEiXW265+PDDD4tSZI8ePeKdd96JHj166FIDAAAw3+6888505513Lvpxl1122Rg1atR8z6ae7w51VVVV8utf/7pohY4bNy5+85vfFP0DAAAAoO365ptv0mLu8zWr4447boGWJs93hzoiYtq0aemPfvSj+Pzzz4tSbJIkcf/998eWW26pSw0AAMA87b///unw4cOLftzFFlss3n///aiurp7vfDrfHeqIiI4dOyYLMp98XtI0jYMPPjjGjx9v128AAADm6oEHHmiRMB0Rcfzxxy9QmI5YwA51RMSkSZPSvn37xvjx44tW+N577x3XX3+9LjUAAABzNGnSpHSVVVaJjz/+uOjH7tmzZ3zwwQfz9ezpWS1Qhzoiolu3bsnxxx9f1OJvuOGGuPXWW3WpAQAAmKNjjz22RcJ0RMSJJ564wGE6ohkd6oiIqVOnpsstt1x88cUXRXsDNTU18dprr8WSSy6pUw0AAMC3br311nT33XdvkWP37t073nvvvejUqdMCZ9EF7lBHRHTu3Dk5+eSTi/omJkyYEPvtt180NDToVAMAABAREe+++2568MEHt9jxTz311GaF6YhmdqgjImbMmJGuvPLK8f777xf1zRx77LFx7rnn6lIDAADk3PTp09P11lsvXn755RY5/nLLLRdvvfVWtGvXrlkZtFkd6oiI9u3bJ//v//2/or+hv/zlL3HttdfqUgMAAOTccccd12JhOiLinHPOaXaYjiigQz3TxhtvnD755JNFfVOdO3eOZ555JlZddVWdagAAgBy666670p133jkKzaw/ZNNNN41HHnmkoMxZcKB+5ZVX0gEDBkRjY2NR31zfvn3j+eefj549ewrVAAAAOTJy5Mh0vfXWi4kTJ7bI8SsrK+Oll14quInb7CnfM62++upJSywQHzNmTOy2224xY8YM078BAABy4quvvkq32WabFgvTERGHHXZYUWZEF9yhjoiYOHFi2q9fv/jss8+K/kZ33333uPHGG6OiokKnGgAAoA2rr69PN99883jiiSda7ByLLbZYjBw5MmpqagrOmAV3qCMiunfvnpx99tkt8mZvueWWOPHEE1vk2AAAAJSOI444okXDdETE+eefX5QwHVGkDvVMm2++efrwww+3yJv+61//GkcddZQuNQAAQBs0bNiw9KSTTmrRc2y11VZx//33Fy1XFjVQjxkzJl111VVj8uTJRX/jFRUVceutt8bOO+8sVAMAALQhN910U7rPPvtEU1NTi52je/fu8dprr8VSSy1VtExZlCnfM/Xt27fFpn43NTXFXnvtFffdd59NygAAANqIhx56KP35z3/eomE6IuLcc88tapiOKHKHOiIiTdN06623jn/+858t8iF06NAh7rrrrthqq610qgEAAMrYiBEj0i222CKmTp3aoucZNGhQPPjgg5EkSWkH6oiIjz76KF199dVj/PjxLfJhdO7cOe6///742c9+JlQDAACUoeeeey7dbLPNWmTJ8Kx69OgRr776avTp06fo+bGoU75nWmqppZIrrriixT6QqVOnxtZbbx1PPfWU6d8AAABl5o033ki33nrrFg/TERFXXHFFi4TpiBYK1BERO+20UzJkyJAW+1CmTp0agwcPjueee06oBgAAKBOvv/56OmjQoBg3blyLn+uwww6LHXbYocVmNrfIlO+Zamtr0wEDBsTIkSNb7Bw1NTVxzz33xIYbbmj6NwAAQAl77rnn0q222iq++eabFj/XKqusEs8991xUV1e3WFZssQ51RESnTp2Su+66K7p169Zi55gwYUJsscUW8cADD+hUAwAAlKgnn3wyHTRoUKuE6YUWWijuvPPOFg3TES0cqCMiVlxxxeTaa6+NIm+mNpva2trYYYcd4pZbbhGqAQAASsx9992XbrXVVjFp0qQWP1dFRUVcf/31sfzyy7f4LOYWD9QRETvssENy9NFHt+g5ZsyYEXvvvXdcdtllQjUAAECJuPHGG9Mdd9wx6urqWuV8Z511Vmy99datsiS4RddQz6q+vj7daqut4tFHH23ZN5QkceaZZ8aJJ55oTTUAAEBG0jRNzzzzzDjllFOitXLnnnvuGTfeeGOrZcFWC9QREePHj0/XXXfdGDVqVIuf66CDDoqLLroo2rdvL1gDAAC0ounTp6eHHHJIDB8+vNXOufrqq8eIESOiU6dObTNQR0S8//776TrrrBNff/11i59rgw02iDvvvDMWWWQRoRoAAKAVfP311+nOO+8cTz31VKuds0ePHvH888/HMsss06rZr1XWUM/qRz/6UXLbbbdFx44dW/xcI0aMiHXXXTfeeOMN66oBAABa2GuvvZYOGDCgVcN0dXV13H333a0epiMyCNQRERtvvHFyyy23RFVVVYuf64MPPogNNtgg7rvvPqEaAACghdx6663pBhtsEB9++GGrnbNdu3Zx2223xYYbbpjJrORMAnVExODBg5OrrroqKipavoRJkybF9ttvH6eddlra2NgoWAMAABRJXV1deuihh6a77757TJkypdXOW1FREddcc01ss802mS3xbfU11N910UUXpUcccUSrnW+dddaJm2++Ofr27WtdNQAAQAHefvvtdI899ohXX3211c/9l7/8JY455phMc11mHeqZDj/88OT0009vtfP95z//iQEDBsS9996rUw0AANBMw4cPTwcMGJBJmP7jH/+YeZiOKIFAHRFx6qmnJkcffXSrnW/cuHExePDg+NWvfpXOmDFDsAYAAJhP48ePT/fZZ590//33j6lTp7b6+X/1q1/FySefnHmYjiiBKd8zpWmaDhkyJK688spWPe/qq68eV155Zayxxhol8QcCAABQqu6+++708MMPj88//zyT8w8ZMiQuvfTSSJKkJPJbSXSoIyKSJEkuv/zyOO6441r1vK+88kqss846cfTRR6dTp04tjbsLAAAAJWT8+PHpoYcemu64446ZhekjjzyypMJ0RAl1qGc1bNiw9KSTTmr18y677LJx2WWXxcCBA0vmDwgAACBLt912W3rEEUfEV199lVkNJ554Ypx11lkll9NKpkM9qxNPPDG54IILWuWRWrMaPXp0bLbZZnH44YenEydOLL07DQAAAK1k1KhR6bbbbpvutttumYXpioqKuPjii0syTEeUaId6phtvvDH9+c9/HvX19a1+7oUXXjhOPfXUOOKII6Kqqqok//AAAACKbcqUKek555wTZ511VkyfPj2zOqqqquKKK66I/fffv2TzWEkH6oiIe++9N91tt92irq4uk/OvtNJKcfbZZ8e2225bsn+IAAAAhWpqakqvv/76OOGEE+LLL7/MtJZOnTrF7bffHltttVVJ57CSD9QREf/617/SXXbZJcaOHZtZDVtvvXWcc845sfLKK5f0HygAAMCCevTRR9Nf/epX8dprr2VdSiy66KJx5513xvrrr1/y2ask11B/109/+tPk+eefjzXWWCOzGu6///5YddVV48ADD0zfe++90r8LAQAAMA9PPvlkuskmm6SbbbZZSYTpAQMGxAsvvFAWYTqiTAJ1RMRSSy2VjBgxIvbff//MamhoaIirr746Vlxxxdhtt93St99+W7AGAADKzogRI9Ltttsu3XjjjeOJJ57IupyIiNhzzz3jySefjCWWWKIswnREGQXqiIiOHTsm11xzTXLppZdGVVVVZnU0NTXFbbfdFv3794/tttsuffnllwVrAACg5M0M0htuuGHce++9WZcTERGVlZVx1llnxY033ph06tSpbMJ0RJmsoZ6TBx98MN1zzz1j/PjxWZcSFRUVsd1228Uvf/nL2HTTTUvqQeMAAEC+1dfXp3fccUf89a9/jX//+99ZlzObhRdeOG655ZbYbLPNyjJDlW2gjoh477330p133rkk5vrPtPLKK8cvf/nL2HfffaNr165l+ZcCAAAof1999VV62WWXxcUXXxyffvpp1uV8z2qrrRZ33nln/OhHPyrb3FTWgToiYvr06ekpp5wS5557bjQ1NWVdzre6desWP//5z+OII46IFVZYoWz/ggAAAOXllVdeSS+44IK48cYbY9q0aVmX8z1JksSRRx4Zw4YNi44dO5Z1Vir7QD3TM888k+63334xevTorEv5njXXXDP23Xff2HPPPWORRRYp678wAABA6Rk/fnx62223xfDhw2PEiBFZl/ODevXqFVdddVVsu+22bSIXtZlAHRExceLE9Mgjj4zrrrsu61LmqH379rH11lvHPvvsE9tuu2106NChTfwlAgAAWt/06dPTe++9N6699tr45z//GfX19VmXNFfbb799XHLJJbHYYou1mRzUpgL1TLfddlt62GGHxbhx47Iu5QcttNBCsfPOO8fgwYNj0003jXLbzQ4AAGh9dXV16WOPPRb33HNP3HbbbfHNN99kXdI8LbTQQnH++efHPvvs0+YyT5sM1BERn332WfqLX/wi7rnnnqxLmaf27dvHqquuGmuttVasuuqq0bdv329/lfuaAgAAYMFNmzYt/fDDD2PMmDExZsyYeO211+KFF16IV199NaZPn551efNthx12iAsvvDAWX3zxNplr2mygnumuu+5KjzrqqPjkk0+yLqVZevToET179owePXrM9qtLly5RXV0dCy20UHTq1Cmqq6uje/fu0blz52jfvn107do1qqqqorq6Ojp27Bjt2rWLLl26tMm/xAAAUAqmTp2azpgxI6ZPnx61tbXR2NgYkyZNivr6+pgyZUpMnDgx6urqora2NiZMmBC1tbUxderU+Prrr2PcuHGz/fr666+zfjsFWWqppeKCCy6IwYMHt+kM0uYDdUTE5MmT09NOOy3+9re/lfy6gpaWJEnU1NRExP/tRF5ZWfnt9zp06BCdOnWa7ee7d+8eFRUVc/2ZmpqamPXR2/PzMxExM+TPV91VVVXRtWvX+frZysrK6Nat23z9bEVFRXTv3n2BP7uWtiCfTbH898+6TQ94AFCINE3TCRMmtOo5p06dGjNmzGiVc02YMCHmNxtMnDhxvp+wM2nSpGhsbJyvn508eXI0NDTM189OmTJljtf248ePn+33dXV1s+10naZpfPfPcX5+pra2drbO8MywvKCfR1vXrl27OProo2Po0KHRuXPnNn9tmYtAPdPIkSPTX//61/HAAw9kXQpARMS3s0oAFsTMbhdAKdlmm23iz3/+c6y44optPkjPlKtAPdMDDzyQHnfccfHWW29lXQoAAEBZ69evX5x77rmxxRZb5CZIz1RR+CHKz1ZbbZW8/vrrceutt8ayyy6bdTkAAABlZ6mllopLL700Xn311VyG6YicdqhnNWPGjPTSSy+NM888Mz7//POsywEAAChpiy++ePz2t7+NIUOGRPv27XMZpGfKfaCeacaMGenNN98cf/zjH+Pdd9/NuhwAAICSsvTSS8exxx4bhxxySFRXV+c6SM8kUH9HfX19euONN8bZZ58db775ZtblAAAAZGqVVVaJ448/Pvbaa6+oqqoSpGchUM/F008/nZ5//vlx5513zvdW/wAAAOWuoqIiBg4cGEcddVRsu+22kXz3GbhEhEA9X0aNGpVecsklcd1115X9A9YBAAB+SK9evWK//faLX/ziF7HccssJ0fMgUC+A6dOnp3fffXdcccUV8dhjj3l4OwAAUPYqKipi0003jYMPPjh22GGH3G80tiAE6mb69NNP09tvvz1uu+22eOaZZ8LnCAAAlJN+/frFrrvuGvvvv38ss8wyQnQzCNRF8M4776S333573H333fHiiy8K1wAAQMlJkiQGDBgQO+ywQ+yyyy6xwgorCNEFEqiL7JNPPkn/8Y9/xH333RdPPvlkTJ06NeuSAACAnOrcuXNstNFGse2228bgwYOjT58+QnQRCdQtaMaMGekzzzwTDz/8cDz++OPxwgsvRH19fdZlAQAAbVT79u1jzTXXjIEDB8agQYNivfXWsya6BQnUraiuri594YUX4umnn47nnnsuPvroo/jiiy9i7Nix0dDQkHV5AABAmaiqqopFFlkkFltssVhqqaVinXXWiQ022CAGDBgQ1dXVAnQrEahLQJqm6ddffx2TJ0+OyZMnR11dXUyZMiUmTZoUdXV1MXXq1Jg4cWI0NTVFXV1dTJs2LSIiJk+e/G0QHz9+fERENDQ0xOTJkyMiYtq0aVFXVxcREVOmTPm2Oz5hwoRI0zQaGxtj0qRJWb99AAAoW926dYvKyspIkiRqamoiIqJdu3bRpUuXiIiorq6Ojh07RkRE165do6qqKiIiFlpooR/82YqKiujevXt07tw5qquro1u3btGlS5eorq6Orl27RteuXaNnz56eDV0CBGoiImLatGnpnMJ3RESapjFhwoTZfn7W4D7T9OnTo7a2drav1dbWxvTp02f72qw3AmaaGfJnampqiokTJ872M/X19TFlypQ51j9p0qRobGz8off27Y2F75rTe5vVdz+LWc2YMcMaeQCg7HXu3Dnat28/x+/NGvbmpKamJn4o03Xq1Ck6dOgwx+9VVlZGt27d5vi9Ll26RLt27Wb7Wvfu3aOiouLb388aXmeqqqqKrl27zva1Dh06RKdOneZZ18xQPKuZgXem9u3bR+fOnWc9hjCLQA0tZfz48T/4j2tONxrm43gLXMOcbkzMjzndMJkfzb3JMLebHnPTnM8xYu43SuZmbjdu5mbmDJNSNevMl3JS6p/rnMztxmCxzOlCtNTN7MSUm1m7TqWouZ/rnELJ/Jg1bCyIOQWe+dHcz39u4XFuZu0sLojvBsH59d0wNy9z+xz/Gz6FP2gB/x/mrWGt6gKeYgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wNi0xMlQwMzozNDoyNSswODowMHoQLjwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMDQtMjNUMDA6NDA6MDkrMDg6MDCNvIqaAAAAVHRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2RiL3N2Z19pbmZvL3N2Zy81Mi8zOC81MjM4ODZiNjQxNGVkYjMwYmExOGZmZjMwZmI5M2FiNC5zdmePHYp7AAAAAElFTkSuQmCC";

/***/ }),

/***/ "./assets/tiles/tile.png":
/*!*******************************!*\
  !*** ./assets/tiles/tile.png ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+UAAAPoCAMAAACPg69mAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAwBQTFRFAAAAALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTlALTl////9+LWAwAAAP50Uk5TAAADFDpt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";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=gamedong-engine.js.map