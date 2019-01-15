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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ball */ \"./src/modules/ball.js\");\n/* harmony import */ var _modules_paddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/paddle */ \"./src/modules/paddle.js\");\n/* harmony import */ var _modules_brick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/brick */ \"./src/modules/brick.js\");\n/* harmony import */ var _modules_levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/levels */ \"./src/modules/levels.js\");\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    let game = new _modules_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    game.play();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/ball.js":
/*!*****************************!*\
  !*** ./src/modules/ball.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ball {\n\n    constructor(game, radius, startX, startY) {\n        this.game = game;\n        this.defaultSpeed = 2 * game.difficulty;\n        this.x = startX;\n        this.y = startY;\n        this.dx = 0;\n        this.dy = 0;\n        this.speed = this.defaultSpeed;\n        this.radius = radius;\n    \n    }\n\n    draw(screen) {\n        const img = document.getElementById('sprites');\n        screen.beginPath();\n        screen.fillStyle = 'rgba(255, 255,255, 0.0)';\n        screen.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n        screen.fill();\n        screen.drawImage(img, 160, 200, 15, 15, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);\n        screen.closePath();\n    }\n\n    collisionWithWall(canvas) {\n        if (this.x + (this.dx * this.speed) > canvas.width - this.radius || \n            this.x + (this.dx * this.speed) < this.radius) {\n\n            this.dx = -this.dx;\n        } \n    }\n\n    collisionWithBrick(brick) {\n        let left = brick.x;\n        let right = brick.x + brick.edge;\n        let bottom = brick.y + brick.edge;\n        let top = brick.y;\n\n        this.bottom = this.y + this.radius;\n        this.top = this.y - this.radius;\n        this.left = this.x - this.radius;\n        this.right = this.x + this.radius;\n\n        if (this.right + (this.speed * this.dx) > left && \n            this.left + (this.speed * this.dx) < right && \n            this.bottom + (this.speed * this.dy) > top && \n            this.top + (this.speed * this.dy) < bottom) {\n\n            if (this.right > left && this.left < right && this.top >= bottom) {\n                this.dy = -this.dy;\n            } else if (this.right > left && this.left < right && this.bottom <= top) {\n                this.dy = -this.dy;\n            } else {\n                this.dx = -this.dx;\n            }\n            this.game.score += 1;\n            brick.value--;\n        }\n\n\n    }\n\n    collisionWithTop() {\n        if (this.y + (this.dy * this.speed) < this.radius) {\n            this.dy = -this.dy;\n        }\n    }\n\n    collisionWithPaddle(paddle) {\n        if (this.y + (this.dy * this.speed) > paddle.y - this.radius && \n            this.x > paddle.x && \n            this.x < paddle.x + paddle.width) {\n\n            this.speed += 0.2;\n            this.dy = -this.dy;\n            this.calculateTraj(paddle);\n        }\n    }\n\n    collisionWithGround(canvas) {\n        if (this.y + (this.dy * this.speed) > canvas.height - this.radius) {\n            if (this.game.lives > 0) {\n                this.game.lives -= 1;\n                this.game.roundStart = false;\n                this.y = this.game.paddle.y - this.radius;\n                this.x = this.game.paddle.x + this.game.paddle.width / 2;\n                this.dy = -this.dy;\n                this.dx = 0;\n                this.speed = this.defaultSpeed;\n            }\n        }\n    }\n\n    calculateTraj(paddle)  {\n        let distFromEdgeL = this.x - paddle.x;\n        this.dx = (distFromEdgeL / (paddle.width / 2) - 1) * 2;\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n//# sourceURL=webpack:///./src/modules/ball.js?");

/***/ }),

/***/ "./src/modules/brick.js":
/*!******************************!*\
  !*** ./src/modules/brick.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Brick {\n\n    constructor(x,y, value) {\n        this.x = x;\n        this.y = y;\n        this.edge = 35;\n        this.value = value;\n    }\n\n    draw(screen) {\n\n        const POSITIONS = {\n            0: {x: 0, y: 120},\n            1: {x: 0, y: 120},\n            2: { x: 360, y: 80},\n            3: {x: 320, y: 80}\n        };\n\n        screen.beginPath();\n\n        const img = document.getElementById('sprites');\n        screen.drawImage(img, POSITIONS[this.value].x, POSITIONS[this.value].y, 30, 30, this.x, this.y, this.edge, this.edge);\n        \n\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Brick);\n\n//# sourceURL=webpack:///./src/modules/brick.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle */ \"./src/modules/paddle.js\");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ \"./src/modules/ball.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./levels */ \"./src/modules/levels.js\");\n/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brick */ \"./src/modules/brick.js\");\n\n\n\n\n\nclass Game {\n\n    constructor(lives = 3) {\n        this.lives = lives;\n        this.roundStart = false;\n        this.score = 0;\n        this.canvas = document.getElementById('screen');\n        this.screen = this.canvas.getContext('2d');\n        this.paddle = new _paddle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas, 10, 100);\n        this.ball = new _ball__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, 15 / 2, this.canvas.width / 2, this.paddle.y - (15 / 2));\n        this.bricks = [];\n        this.level = 1;\n        this.levels = _levels__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        this.difficulty = 1;\n        // this.currentLevel = this.levels[(this.level - 1) % this.levels.length];\n        this.currentLevel = this.levels[1];\n    }\n\n    buildLevel() {\n        for (let y = 0; y < this.currentLevel.length; y++) {\n            for (let x = 0; x < this.currentLevel[0].length; x++) {\n                if (this.currentLevel[y][x] > 0) {\n                    let brick = new _brick__WEBPACK_IMPORTED_MODULE_3__[\"default\"](x * 40, y * 40, this.currentLevel[y][x]);\n                    this.bricks.push(brick);\n                }\n            }\n        }\n    }\n\n    play() {\n        this.buildLevel();\n        let game = this;\n        this.canvas.addEventListener('click', () => {\n            if (!this.roundStart) {\n                this.roundStart = true;\n                this.ball.dy = -1;\n            }\n        });\n\n        this.canvas.addEventListener('mousemove', (e) => {\n            let mousePos = calculateMousePos(e);\n            this.paddle.x = mousePos.x - (this.paddle.width / 2);\n            if (this.roundStart === false) {\n                this.ball.x = mousePos.x;\n            }\n        });\n\n        const calculateMousePos = (e) => {\n            let rect = this.canvas.getBoundingClientRect();\n            let root = document.documentElement;\n            let mouseX = e.clientX - rect.left - root.scrollLeft;\n            let mouseY = e.clientY - rect.top - root.scrollTop;\n            return {\n                x: mouseX,\n                y: mouseY\n            };\n        };\n\n        function draw() {\n            game.canvas.width = game.canvas.width;\n            game.screen.beginPath();\n            game.screen.font = '30px sans-serif';\n            game.screen.fillStyle = 'white';\n            game.screen.fillText(`Level: ${game.level}`, 10, 50);\n            game.screen.fillText(`Score: ${game.score}`, game.canvas.width / 2 - 30, 50);\n            game.screen.fillText(`Lives: ${game.lives}`, game.canvas.width - 120, 50);\n            game.screen.closePath();\n            game.paddle.draw(game.screen);\n            game.bricks.forEach((brick) => brick.draw(game.screen));\n            game.ball.draw(game.screen);\n            if (game.bricks.length === 0) {\n                cancelAnimationFrame(id);\n                alert('You won');\n                return;\n            }\n            \n            if (game.roundStart) {\n                \n                game.ball.collisionWithWall(game.canvas);\n                game.ball.collisionWithTop();\n                game.ball.collisionWithPaddle(game.paddle);\n                game.ball.collisionWithGround(game.canvas);\n                if (game.lives === 0){\n                    cancelAnimationFrame(id);\n                    alert('Game Over');\n                    return;\n                }\n                game.bricks.forEach((brick) => game.ball.collisionWithBrick(brick));\n                game.bricks.forEach((brick, i) => {\n                    if (brick.value <= 0) game.bricks.splice(i, 1);\n                });\n                \n\n                game.ball.x += game.ball.dx * game.ball.speed;\n                game.ball.y += game.ball.dy * game.ball.speed;\n            }\n\n            id = requestAnimationFrame(draw);\n        }\n\n        let id = requestAnimationFrame(draw);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/levels.js":
/*!*******************************!*\
  !*** ./src/modules/levels.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n const testLevel = [\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]\n];\n\nconst one = [\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],\n    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0]\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([testLevel, one]);\n\n//# sourceURL=webpack:///./src/modules/levels.js?");

/***/ }),

/***/ "./src/modules/paddle.js":
/*!*******************************!*\
  !*** ./src/modules/paddle.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Paddle {\n\n    constructor(canvas, height, width) {\n        this.height = 30;   \n        this.width = width;\n        this.x = canvas.width / 2 - (width / 2);\n        this.y = canvas.height - 30 - 10;\n    }\n\n    draw(screen) {\n        // screen.fillRect(this.x, this.y, this.width, this.height);\n\n        const img = document.getElementById('sprites');\n        screen.drawImage(img, 0, 200, 100, 30, this.x, this.y, this.width, this.height);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Paddle);\n\n//# sourceURL=webpack:///./src/modules/paddle.js?");

/***/ })

/******/ });