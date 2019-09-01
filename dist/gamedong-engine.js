/******/ (function(modules) { // webpackBootstrap
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

/***/ "./assets/tileset/grass/tilable-IMG_0044-dark.png":
/*!********************************************************!*\
  !*** ./assets/tileset/grass/tilable-IMG_0044-dark.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "11b2754ac4589179091972a53bcb185e.png";

/***/ }),

/***/ "./assets/tileset/grass/tilable-IMG_0044-grey.png":
/*!********************************************************!*\
  !*** ./assets/tileset/grass/tilable-IMG_0044-grey.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "53e8166ef2a1923d950d50affd3cfb78.png";

/***/ }),

/***/ "./assets/tileset/grass/tilable-IMG_0044-grey1.png":
/*!*********************************************************!*\
  !*** ./assets/tileset/grass/tilable-IMG_0044-grey1.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0eecbc60e5d6e63f23f543b3fa71b463.png";

/***/ }),

/***/ "./assets/tileset/grass/tilable-IMG_0044-lush.png":
/*!********************************************************!*\
  !*** ./assets/tileset/grass/tilable-IMG_0044-lush.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b86a8c75e6c7122c95e8d7f2e8ffc0ec.png";

/***/ }),

/***/ "./assets/tileset/grass/tilable-IMG_0044-verydark.png":
/*!************************************************************!*\
  !*** ./assets/tileset/grass/tilable-IMG_0044-verydark.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd66a44797b8e1f230acd359cd091342.png";

/***/ }),

/***/ "./assets/tileset/grass/tilable-IMG_0044.png":
/*!***************************************************!*\
  !*** ./assets/tileset/grass/tilable-IMG_0044.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a50ac44a3cc4a96fa6e833bedb69d115.png";

/***/ }),

/***/ "./assets/tileset/grass/tilable-IMG_0044_nm.png":
/*!******************************************************!*\
  !*** ./assets/tileset/grass/tilable-IMG_0044_nm.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5a228e2f1ef3d31e91f17b3304b3e153.png";

/***/ }),

/***/ "./assets/tileset/sample-1/barrel32x32transparent.png":
/*!************************************************************!*\
  !*** ./assets/tileset/sample-1/barrel32x32transparent.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b5363844aee000e45d8022ee6614baf4.png";

/***/ }),

/***/ "./assets/tileset/sample-1/bush32x32transparent.png":
/*!**********************************************************!*\
  !*** ./assets/tileset/sample-1/bush32x32transparent.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4211a904a26ed656154d0b7ff21aacff.png";

/***/ }),

/***/ "./assets/tileset/sample-1/fence32x32transparent.png":
/*!***********************************************************!*\
  !*** ./assets/tileset/sample-1/fence32x32transparent.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b961efd6e1abd637edc062734025f5a0.png";

/***/ }),

/***/ "./assets/tileset/sample-1/flower32x32transparent.png":
/*!************************************************************!*\
  !*** ./assets/tileset/sample-1/flower32x32transparent.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6926abb34a3470cac5c624478d4f5618.png";

/***/ }),

/***/ "./assets/tileset/sample-1/grassa32x32transparent.png":
/*!************************************************************!*\
  !*** ./assets/tileset/sample-1/grassa32x32transparent.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "97d2c1303692dec23b971b2e0991fae9.png";

/***/ }),

/***/ "./assets/tileset/sample-1/grassb32x32transparent.png":
/*!************************************************************!*\
  !*** ./assets/tileset/sample-1/grassb32x32transparent.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cb38e2fa03d52fe2b6dd42f32713044e.png";

/***/ }),

/***/ "./assets/tileset/sample-1/grassc32x32transparent.png":
/*!************************************************************!*\
  !*** ./assets/tileset/sample-1/grassc32x32transparent.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "61f96f70722e42e08f3e0806df369e23.png";

/***/ }),

/***/ "./assets/tileset/sample-1/grassd32x32transparent.png":
/*!************************************************************!*\
  !*** ./assets/tileset/sample-1/grassd32x32transparent.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ce44d6a3eecad5e20f30d2484e25bd90.png";

/***/ }),

/***/ "./assets/tileset/sample-1/grasse32x32transparent.png":
/*!************************************************************!*\
  !*** ./assets/tileset/sample-1/grasse32x32transparent.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "17898989153c0142195aaec4f0d1ce01.png";

/***/ }),

/***/ "./assets/tileset/sample-1/grassf32x32transparent.png":
/*!************************************************************!*\
  !*** ./assets/tileset/sample-1/grassf32x32transparent.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a373258d39ed8c69e1e178ef6c366d73.png";

/***/ }),

/***/ "./assets/tileset/sample-1/grassg32x32transparent.png":
/*!************************************************************!*\
  !*** ./assets/tileset/sample-1/grassg32x32transparent.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cc328b6437695834bcb9984e8ca79317.png";

/***/ }),

/***/ "./assets/tileset/sample-1/grassh32x32transparent.png":
/*!************************************************************!*\
  !*** ./assets/tileset/sample-1/grassh32x32transparent.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "630631e5bf2ed6c6e02908285f57e312.png";

/***/ }),

/***/ "./assets/tileset/sample-1/grassi32x32transparent.png":
/*!************************************************************!*\
  !*** ./assets/tileset/sample-1/grassi32x32transparent.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0c8edeff533de3d2e9427e689725e8d6.png";

/***/ }),

/***/ "./assets/tileset/sample-1/patch32x32transparent.png":
/*!***********************************************************!*\
  !*** ./assets/tileset/sample-1/patch32x32transparent.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4825f9367124bc51ada9a58b29b82ef2.png";

/***/ }),

/***/ "./assets/tileset/sample-1/roadbottom32x32transparent.png":
/*!****************************************************************!*\
  !*** ./assets/tileset/sample-1/roadbottom32x32transparent.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ea0e74a305785c61775217faf3c48926.png";

/***/ }),

/***/ "./assets/tileset/sample-1/roadmiddle32x32transparent.png":
/*!****************************************************************!*\
  !*** ./assets/tileset/sample-1/roadmiddle32x32transparent.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "37a34384f6baba6cfb722d52b7fb5178.png";

/***/ }),

/***/ "./assets/tileset/sample-1/roadtop32x32transparent.png":
/*!*************************************************************!*\
  !*** ./assets/tileset/sample-1/roadtop32x32transparent.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f558a7b5d58c12027cb09cd1d1ea9c90.png";

/***/ }),

/***/ "./assets/tileset/sample-1/rock32x32transparent.png":
/*!**********************************************************!*\
  !*** ./assets/tileset/sample-1/rock32x32transparent.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d30b06b8f75c7207df1675cc738f96d5.png";

/***/ }),

/***/ "./assets/tileset/sample-1/signpost32x32transparent.png":
/*!**************************************************************!*\
  !*** ./assets/tileset/sample-1/signpost32x32transparent.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ecaf6ffca88ad27a03f5d8d00278fff5.png";

/***/ }),

/***/ "./assets/tileset/sample-1/tree96x96transparent.png":
/*!**********************************************************!*\
  !*** ./assets/tileset/sample-1/tree96x96transparent.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d5fec499fc4b3fbb3cbce7e9236c69ab.png";

/***/ }),

/***/ "./autoload sync recursive ^.*\\/grass\\.tileset\\.loader\\.js$":
/*!********************************************************!*\
  !*** ./autoload sync ^.*\/grass\.tileset\.loader\.js$ ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./grass.tileset.loader.js": "./autoload/grass.tileset.loader.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./autoload sync recursive ^.*\\/grass\\.tileset\\.loader\\.js$";

/***/ }),

/***/ "./autoload sync recursive ^.*\\/sample\\-1\\.tileset\\.loader\\.js$":
/*!************************************************************!*\
  !*** ./autoload sync ^.*\/sample\-1\.tileset\.loader\.js$ ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sample-1.tileset.loader.js": "./autoload/sample-1.tileset.loader.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./autoload sync recursive ^.*\\/sample\\-1\\.tileset\\.loader\\.js$";

/***/ }),

/***/ "./autoload/grass.tileset.loader.js":
/*!******************************************!*\
  !*** ./autoload/grass.tileset.loader.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/** Generated from cli **/
module.exports = (GameDong) => {
    const AssetManager = GameDong.AssetManager;
    const prefix = '/home/quentin/dev/gamedong/gamedong-engine/assets/tileset/grass';
    AssetManager.store('tilable-IMG_0044-dark.png', __webpack_require__(/*! ./assets/tileset/grass/tilable-IMG_0044-dark.png */ "./assets/tileset/grass/tilable-IMG_0044-dark.png"), { tileset: 'grass' });
    AssetManager.store('tilable-IMG_0044-grey.png', __webpack_require__(/*! ./assets/tileset/grass/tilable-IMG_0044-grey.png */ "./assets/tileset/grass/tilable-IMG_0044-grey.png"), { tileset: 'grass' });
    AssetManager.store('tilable-IMG_0044-grey1.png', __webpack_require__(/*! ./assets/tileset/grass/tilable-IMG_0044-grey1.png */ "./assets/tileset/grass/tilable-IMG_0044-grey1.png"), { tileset: 'grass' });
    AssetManager.store('tilable-IMG_0044-lush.png', __webpack_require__(/*! ./assets/tileset/grass/tilable-IMG_0044-lush.png */ "./assets/tileset/grass/tilable-IMG_0044-lush.png"), { tileset: 'grass' });
    AssetManager.store('tilable-IMG_0044-verydark.png', __webpack_require__(/*! ./assets/tileset/grass/tilable-IMG_0044-verydark.png */ "./assets/tileset/grass/tilable-IMG_0044-verydark.png"), { tileset: 'grass' });
    AssetManager.store('tilable-IMG_0044.png', __webpack_require__(/*! ./assets/tileset/grass/tilable-IMG_0044.png */ "./assets/tileset/grass/tilable-IMG_0044.png"), { tileset: 'grass' });
    AssetManager.store('tilable-IMG_0044_nm.png', __webpack_require__(/*! ./assets/tileset/grass/tilable-IMG_0044_nm.png */ "./assets/tileset/grass/tilable-IMG_0044_nm.png"), { tileset: 'grass' });

};

        

/***/ }),

/***/ "./autoload/index.js":
/*!***************************!*\
  !*** ./autoload/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** Generated from cli **/
module.exports = GameDong => {
    const prefix = '.';
    __webpack_require__("./autoload sync recursive ^.*\\/grass\\.tileset\\.loader\\.js$")(prefix + "/grass.tileset.loader.js")(GameDong);
    __webpack_require__("./autoload sync recursive ^.*\\/sample\\-1\\.tileset\\.loader\\.js$")(prefix + "/sample-1.tileset.loader.js")(GameDong);

};


/***/ }),

/***/ "./autoload/sample-1.tileset.loader.js":
/*!*********************************************!*\
  !*** ./autoload/sample-1.tileset.loader.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/** Generated from cli **/
module.exports = (GameDong) => {
    const AssetManager = GameDong.AssetManager;
    const prefix = '/home/quentin/dev/gamedong/gamedong-engine/assets/tileset/sample-1';
    AssetManager.store('barrel32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/barrel32x32transparent.png */ "./assets/tileset/sample-1/barrel32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('bush32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/bush32x32transparent.png */ "./assets/tileset/sample-1/bush32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('fence32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/fence32x32transparent.png */ "./assets/tileset/sample-1/fence32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('flower32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/flower32x32transparent.png */ "./assets/tileset/sample-1/flower32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('grassa32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/grassa32x32transparent.png */ "./assets/tileset/sample-1/grassa32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('grassb32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/grassb32x32transparent.png */ "./assets/tileset/sample-1/grassb32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('grassc32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/grassc32x32transparent.png */ "./assets/tileset/sample-1/grassc32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('grassd32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/grassd32x32transparent.png */ "./assets/tileset/sample-1/grassd32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('grasse32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/grasse32x32transparent.png */ "./assets/tileset/sample-1/grasse32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('grassf32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/grassf32x32transparent.png */ "./assets/tileset/sample-1/grassf32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('grassg32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/grassg32x32transparent.png */ "./assets/tileset/sample-1/grassg32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('grassh32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/grassh32x32transparent.png */ "./assets/tileset/sample-1/grassh32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('grassi32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/grassi32x32transparent.png */ "./assets/tileset/sample-1/grassi32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('patch32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/patch32x32transparent.png */ "./assets/tileset/sample-1/patch32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('roadbottom32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/roadbottom32x32transparent.png */ "./assets/tileset/sample-1/roadbottom32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('roadmiddle32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/roadmiddle32x32transparent.png */ "./assets/tileset/sample-1/roadmiddle32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('roadtop32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/roadtop32x32transparent.png */ "./assets/tileset/sample-1/roadtop32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('rock32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/rock32x32transparent.png */ "./assets/tileset/sample-1/rock32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('signpost32x32transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/signpost32x32transparent.png */ "./assets/tileset/sample-1/signpost32x32transparent.png"), { tileset: 'sample-1' });
    AssetManager.store('tree96x96transparent.png', __webpack_require__(/*! ./assets/tileset/sample-1/tree96x96transparent.png */ "./assets/tileset/sample-1/tree96x96transparent.png"), { tileset: 'sample-1' });

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

    snapshot(viewport) {
        // means render

        const resolution = viewport.getResolution();
        const size = viewport.getSize();
        const context = viewport.getContext();
        const rx = resolution.width;
        const ry = resolution.height;
        // const vw = size.width;
        // const vh = size.height;

        const position = this.getPosition();
        console.log('position de la caméra')
        console.table(position)
        const pos_x = position.x;
        const pos_y = position.y;
        const nbRows = this.data.scene.getNbRows();
        const nbColumns = this.data.scene.getNbColumns();
        
        const renderingData = this.data.scene.getRenderingData(
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

        const xn = Math.round((pos_x + delta) * nbColumns) / nbColumns; 
        const yn = Math.round((pos_y + delta) * nbRows) / nbRows

        context.font = '20px';
            
        // data.x is a normalized position into map
        // we want to transform theses coordinates in 0..1 coordinates in camera grid
        renderingData.forEach((data, index) => {
            // const x = Math.round(((data.x - x0) / (xn - x0)) * rx);
            // const y = Math.round(((data.y - y0) / (yn - y0)) * rx);
            const x = Math.round((((data.x - x0) * 100) / (2 * delta)) * rx) / 100;
            const y = Math.round((((data.y - y0) * 100) / (2 * delta)) * rx) / 100;
            const w = Math.round((((data.width)  * 100) / (delta * 2)) * rx) / 100;
            const h = Math.round((((data.height) * 100) / (delta * 2)) * rx) / 100;

            // for (let i = 0; i < width; i++) {
            //     for (let j = 0; j < height; j++) {
            //         context.fillText(`(${i}, ${j})`, i, j);
            //     }    
            // }

            // context.fillText(`(${x}, ${y})`, x + w, y + h);
           
            data.gameElement.render(
                context, 
                x, y, w, h
            )

            // context.fillText(`(${x}, ${y})`, x, y + 10);
            // context.fillText(`(${data.x}, ${data.y})`, x, y + 20);
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
        this.subscribers  = new Set();

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

    

    sendNotification(name, data) {
        this.subscribers.forEach(subscriber => {
            const notification = Notification.POOL.getOne(name, data);
            subscriber.onNewNotification(notification)
        });
    }

    getData(propertyName) {
        return this.data[propertyName];
    }

    subscribe(observable) {
        observable.register(this);
        // record all subscribed ?
    }

    register(subscriber) {
        this.subscribers.add(subscriber);
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
        const envent = this.createCustomEvent(eventName, data);
        target.dispatchEvent(event);
        // this.event.emit(eventName, data);
    }

    listen(eventName, handler) {
        this.addEventListener(eventName, handler);

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

    doAsync(task) {
        setTimeout(() => {
            task();
        }, 1);
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
        
        console.log(typeof x);
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

    getOne(name, data) {
        const notification = super.getOne();
        notification.setName(name);
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
    constructor(name, data) {
        this.name = name || '';
        this.data = data || {};
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

    recycle() {
        Notification.POOL.recycle(this);
    }
}

if (typeof Notification.POOL === 'undefined') {
    Notification.POOL = null;
}

module.exports = Notification;

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

class ViewPort extends Entity {
    constructor(settings = {}) {
        super(settings);
        this.ui.layout = document.createElement('canvas');

        this.initViewPort(settings);
    }

    drawCoordinates() {
        const context = this.getContext();
        const { width, height } = this.getResolution();

        context.font = '1px serif';
        console.table({width, height})
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                context.fillText(`(${i}, ${j})`, i, j);
            }    
        }
    }

    getContext() {
        return this.ui.layout.context;
    }

    initControllers() {
        this.controllers = {};

        this.initMouseController();
    }

    initMouseController() {
        this.controllers.mouse = new MouseController({
            component: this
        });
    }

    setupViewPortListeners() {
        const layout = this.ui.layout;

        this.initControllers();
        layout.addEventListener('mousemove', (event) => {
            this.controllers.mouse.onMouseMove(event);
        });

        layout.addEventListener('mousedown', (event) => {
           this.controllers.mouse.onMouseDown(event);
        });
    }

    retrieveSize(settings) {
        if (typeof settings.size === 'undefined') {
            settings.size = {
                width: 0,
                height: 0
            }
        }

        else {
            // sanitize options
        }


        return settings.size;
    }


    retrieveResolution(settings) {
        if (typeof settings.resolution === 'undefined') {
            settings.resolution = {
                width: settings.size.width,
                height: settings.size.height
            }
        }

        else {
            // sanitize options
        }

        return settings.resolution;
    }

    clear() {
        const context = this.getContext();
        const resolution = this.getResolution();
        context.clearRect(0, 0, resolution.width, resolution.height);
    }
    
    initViewPort(settings) {
        const layout = this.ui.layout; 
        layout.classList.add('gd-viewport');
        layout.context = layout.getContext('2d');

        

        const data = this.data;
        data.size = {};
        data.resolution = {};
        data.ratio = {
            x: 1,
            y: 1
        };


        const size = this.retrieveSize(settings);
        const resolution = this.retrieveResolution(settings);

        // this.setPixelDensity(1);
        this.setSize(size.width, size.height, false);
        this.setResolution(resolution.width, resolution.height);

       
        
        // todo implements tests
        if (typeof settings.container !== 'string') {
            this.notifyError(new Error(`Invalid type for param 'container', a string was expected`));
        }

        const container = document.getElementById(settings.container);
        
        // todo implements tests
        if ((container instanceof Element) === false) {
            this.notifyError(new Error(`No Element found with id ${settings.container}`));
        }
        
    
        this.setupViewPortListeners();
        this.ui.container = container;
        container.appendChild(layout);
    }

    setSize(width, height, refreshRatio = true) {
        this.data.size.width = width;
        this.data.size.height = height;

        this.ui.layout.style.width = width + 'px';
        this.ui.layout.style.height = height + 'px';
        
        if (refreshRatio === true) {
            this.updateRatio();
        }
    }

    getSize() {
        return this.data.size;
    }

    getWidth() {
        return this.data.size.width;
    }

    getHeight() {
        return this.data.size.height;
    }

    getInnerWidth() {
        return this.data.resolution.width;
    }

    getInnerHeight() {
        return this.data.resolution.height;
    }

    getResolution() {
        return JSON.parse(JSON.stringify(this.data.resolution));
    }

    setResolution(width, height, refreshRatio = true) {
        this.ui.layout.width = width;
        this.ui.layout.height = height;

        this.data.resolution.width = width;
        this.data.resolution.height = height;


        if (refreshRatio === true) {
            this.updateRatio();
        }
    }

    updateRatio() {
        if (this.data.size.width === 0 || this.data.size.height === 0) {
            this.data.ratio.x = 1;
            this.data.ratio.y = 1;
        }

        else {
            this.data.ratio.x = this.data.resolution.width / this.data.size.width;
            this.data.ratio.y = this.data.resolution.height / this.data.size.height;
        }
    }

    getPixelsCoordsFromPageCoords(coords) {
        const x = coords.x - this.ui.layout.offsetLeft + window.scrollX;
        const y = coords.y - this.ui.layout.offsetTop + window.scrollY;
        return {x, y};
    }

    bind(component) {
        component.subscribe(this);
    }

    getCellCoordsFromPixelCoords(coords) {
        const ratio  = this.data.ratio;
        const x      = Math.floor(coords.x * ratio.x);
        const y      = Math.floor(coords.y * ratio.y);
        return {x, y};
    }

    getNormalizedPosition(coords) {
        const x = (coords.x - this.ui.layout.offsetLeft + window.scrollX) / this.data.size.width;
        const y = (coords.y - this.ui.layout.offsetTop + window.scrollY) / this.data.size.height;
        return {x, y};
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
        const pixelCoords = this.component.getPixelsCoordsFromPageCoords(event);
        const cellCoords = this.component.getCellCoordsFromPixelCoords(pixelCoords);
        const p = this.component.getNormalizedPosition(event);
        this.component.sendNotification('updateCoords', p);
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
    

    onNewNotification(notification) {
        const notificationName = notification.name;

        switch(notificationName) {
            case 'updateCoords':
                this.viewPortCellCoordsToMapCellCoords(notification.data);
                break;
            default:
                break;
        } 

        // override me !

        notification.recycle();
    }
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

    getRenderingData(x_min = 0, y_min = 0, z_min = 0, x_max = this.getNbColumns(), y_max = this.getNbRows(), z_max = 10) {
        console.log('get rendering data')
        console.table({x_min, y_min, x_max, y_max});
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
    

    onNewNotification(notification) {
        const notificationName = notification.name;

        switch(notificationName) {
            case 'updateCoords':
                this.viewPortCellCoordsToMapCellCoords(notification.data);
                break;
            default:
                console.log(notification);
                break;
        } 

        // override me !

        notification.recycle();
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
       
        console.table(ressources);
        this.tiles = ressources.map(ressource => {
            return new Tile(ressource);
        });
    }

    loadTiles() {
        return this.tiles.filter(tile => {
            console.log(tile);
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
//# sourceMappingURL=gamedong-engine.js.map