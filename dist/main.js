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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ball */ \"./src/modules/ball.js\");\n/* harmony import */ var _modules_paddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/paddle */ \"./src/modules/paddle.js\");\n/* harmony import */ var _utility_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/util */ \"./src/utility/util.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    let canvas = document.getElementById('screen');\n    let screen = canvas.getContext('2d');\n    let paddle = new _modules_paddle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas, 10, 100);\n    let ball = new _modules_ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, canvas.width / 2, paddle.y - 5);\n    let gameStart = false;\n\n    canvas.addEventListener('mousemove', (e) => {\n        let mousePos = calculateMousePos(e);\n        paddle.x = mousePos.x - (paddle.width / 2);\n        if (gameStart === false) {\n            ball.x = mousePos.x;\n        }\n    });\n\n    const calculateMousePos = (e) => {\n        let rect = canvas.getBoundingClientRect();\n        let root = document.documentElement;\n        let mouseX = e.clientX - rect.left - root.scrollLeft;\n        let mouseY = e.clientY - rect.top - root.scrollTop;\n        return {\n            x: mouseX,\n            y: mouseY\n        };\n    };\n\n\n    canvas.addEventListener('click', () => {\n        if (!gameStart) {\n            gameStart = true;\n            ball.dy = -1;\n        }\n    });\n\n    function draw() {\n        canvas.width = canvas.width;\n        ball.draw(screen);\n        paddle.draw(screen);\n\n        if (gameStart) {\n\n            ball.collisionWithWall(canvas);\n            ball.collisionWithTop();\n            ball.collisionWithPaddle(paddle);\n            ball.collisionWithGround(canvas);\n    \n            ball.x += ball.dx * ball.speed;\n            ball.y += ball.dy * ball.speed;\n        }\n\n        requestAnimationFrame(draw);\n    }\n\n    draw();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/ball.js":
/*!*****************************!*\
  !*** ./src/modules/ball.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ball {\n\n    constructor(radius, startX, startY) {\n        this.x = startX;\n        this.y = startY;\n        this.dx = 0;\n        this.dy = 0;\n        this.speed = 2;\n        this.radius = radius;\n    }\n\n    draw(screen) {\n        screen.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n        screen.fill();\n    }\n\n    collisionWithWall(canvas) {\n        if (this.x + (this.dx * this.speed) > canvas.width - this.radius || this.x + (this.dx * this.speed) < this.radius) {\n            this.dx = -this.dx;\n        } \n    }\n\n    collisionWithTop() {\n        if (this.y + (this.dy * this.speed) < this.radius) {\n            this.dy = -this.dy;\n        }\n    }\n\n    collisionWithPaddle(paddle) {\n        if (this.y + (this.dy * this.speed) > paddle.y - this.radius && this.x > paddle.x && this.x < paddle.x + paddle.width) {\n            this.speed += 0.2;\n            this.dy = -this.dy;\n            this.calculateTraj(paddle);\n        }\n    }\n\n    collisionWithGround(canvas) {\n        if (this.y + (this.dy * this.speed) > canvas.height - this.radius) {\n            alert(\"GAME OVER\");\n            document.location.reload();\n        }\n    }\n\n    calculateTraj(paddle)  {\n        let distFromEdgeL = this.x - paddle.x;\n        this.dx = (distFromEdgeL / (paddle.width / 2) - 1) * 2;\n    }\n\n    move(newX, newY) {\n\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n//# sourceURL=webpack:///./src/modules/ball.js?");

/***/ }),

/***/ "./src/modules/paddle.js":
/*!*******************************!*\
  !*** ./src/modules/paddle.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Paddle {\n\n    constructor(canvas, height, width) {\n        this.height = height;   \n        this.width = width;\n        this.x = canvas.width / 2 - (width / 2);\n        this.y = canvas.height - height - 10;\n    }\n\n    draw(screen) {\n        screen.fillRect(this.x, this.y, this.width, this.height);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Paddle);\n\n//# sourceURL=webpack:///./src/modules/paddle.js?");

/***/ }),

/***/ "./src/utility/util.js":
/*!*****************************!*\
  !*** ./src/utility/util.js ***!
  \*****************************/
/*! exports provided: collisionWithWall, collisionWithTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collisionWithWall\", function() { return collisionWithWall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collisionWithTop\", function() { return collisionWithTop; });\n\nconst collisionWithWall = (ball, canvas) => {\n\n    return (ball.x + (ball.dx * ball.speed) > canvas.width - ball.radius || ball.x + (ball.dx * ball.speed) < ball.radius) ? true : false;\n    \n};\n\nconst collisionWithTop = (ball) => {\n\n    return (ball.y + (ball.dy * ball.speed) < ball.radius) ? true : false;\n};\n\n//# sourceURL=webpack:///./src/utility/util.js?");

/***/ })

/******/ });