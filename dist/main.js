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

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\nclass Ball {\n\n    constructor(startX, startY) {\n        this.x = startX;\n        this.y = startY;\n        this.dx = 0;\n        this.dy = 0;\n        this.speed = 2;\n        this.radius = 5;\n    }\n\n    move(newX, newY) {\n\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/ball.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ \"./src/ball.js\");\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paddle */ \"./src/paddle.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    let canvas = document.getElementById('screen');\n    let screen = canvas.getContext('2d');\n    let paddle = new _paddle__WEBPACK_IMPORTED_MODULE_1__[\"Paddle\"](canvas, 10, 100);\n    let ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"](canvas.width / 2, paddle.y - 5);\n    let speed = 2;\n    let dx = 0;\n    let dy = 0;\n    let gameStart = false;\n\n    canvas.addEventListener('mousemove', (e) => {\n        let mousePos = calculateMousePos(e);\n        paddle.x = mousePos.x - (paddle.width / 2);\n        if (gameStart === false) {\n            ball.x = mousePos.x;\n        }\n        \n        // mousePos = calculateMousePos(e);\n    });\n\n    canvas.addEventListener('click', () => {\n        if (!gameStart) {\n            gameStart = true;\n            dy = -1;\n        }\n    });\n\n    function draw() {\n        canvas.width = canvas.width;\n        screen.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);\n        screen.fill();\n        screen.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);\n\n        if (gameStart) {\n\n            if (ball.x + (dx * speed) > canvas.width - ball.radius || ball.x + (dx * speed) < ball.radius) {\n                dx = -dx;\n            }\n    \n            // if (y + (dy * speed) < ballRadius) {\n            //     dy = -dy;\n            // } \n    \n            if (ball.y + (dy * speed) < ball.radius) {\n                dy = -dy;\n            } else if (ball.y + (dy * speed) > paddle.y - ball.radius && ball.x > paddle.x && ball.x < paddle.x + paddle.width) {\n                speed += 0.2;\n                dy = -dy;\n                dx = calculateTraj();\n            } else if (ball.y + (dy * speed)> canvas.height - ball.radius) {\n                alert(\"GAME OVER\");\n                document.location.reload();\n                // clearInterval(interval); // Needed for Chrome to end game\n            }\n    \n            ball.x += dx * speed;\n            ball.y += dy * speed;\n        }\n\n        \n\n        // ctx.beginPath();\n        // ctx.arc(50, 50, 10, 0, Math.PI * 2);\n        // ctx.fillStyle = \"#0095DD\";\n        // ctx.fill();\n        // ctx.closePath();\n\n        requestAnimationFrame(draw);\n    }\n\n    const calculateTraj = () => {\n        /*\n            paddleX = position of left edge of paddle\n            x = ball position on x axis\n            paddleWidth = length of paddle\n        */\n       let distFromEdgeL = ball.x - paddle.x;\n       return (distFromEdgeL / (paddle.width / 2) - 1) * 2;\n    };\n\n    const calculateMousePos = (e) => {\n        let rect = canvas.getBoundingClientRect();\n        let root = document.documentElement;\n        let mouseX = e.clientX - rect.left - root.scrollLeft;\n        let mouseY = e.clientY - rect.top - root.scrollTop;\n        return {\n            x: mouseX,\n            y: mouseY\n        };\n    };\n\n    draw();\n    // let interval = setInterval(draw, 1000/frames);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/paddle.js":
/*!***********************!*\
  !*** ./src/paddle.js ***!
  \***********************/
/*! exports provided: Paddle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Paddle\", function() { return Paddle; });\n\n\nclass Paddle {\n\n    constructor(canvas, height, width) {\n        this.height = height;   \n        this.width = width;\n        this.x = canvas.width / 2 - (width / 2);\n        this.y = canvas.height - height - 10;\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/paddle.js?");

/***/ })

/******/ });