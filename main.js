/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_DomWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DomWeather */ \"./src/modules/DomWeather.js\");\n\r\n\r\n\r\nlet input = document.querySelector(\"[data-input]\")\r\nlet submitBtn = document.querySelector(\"[data-form-btn]\")\r\n\r\nsubmitBtn.addEventListener(\"click\", async (e) => {\r\n    e.preventDefault()\r\n    console.log(\"input:\", input.value)\r\n    let weatherInfo = await (0,_modules_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input.value)\r\n    ;(0,_modules_DomWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherInfo)\r\n})\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/DomWeather.js":
/*!***********************************!*\
  !*** ./src/modules/DomWeather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ domWeather)\n/* harmony export */ });\n\r\nfunction domWeather(data) {\r\n  console.log(\"this is the data: \", data);\r\n  let image = document.querySelector(\"[data-img]\");\r\n  let cityName = document.querySelector(\"[data-city-name] span\");\r\n  let country = document.querySelector(\"#country span\");\r\n  let tempC = document.querySelector(\"[data-temp-c] span\");\r\n  let windKph = document.querySelector(\"[data-wind-kph] span\");\r\n  let humidity = document.querySelector(\"[data-humidity] span\");\r\n    console.log( windKph)\r\n //image.setAttribute(\"src\", `${data.icon}`)\r\n  cityName.textContent = `${data.name}, `;\r\n country.textContent = `${data.country}`;\r\n  tempC.textContent = `${data.temp_c}°`;\r\n  windKph.textContent = `${data.wind_kph}`;\r\n  humidity.textContent = `${data.humidity}`;\r\n\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/DomWeather.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Weather)\n/* harmony export */ });\nasync function Weather(input){\r\n\r\n    function getData(dataInfo){\r\n        const {\r\n            location:{\r\n            name,\r\n            country\r\n            },\r\n            current: {\r\n                temp_c,\r\n                temp_f,\r\n                wind_kph,\r\n                humidity,\r\n                condition: {\r\n                     text,\r\n                     icon\r\n                }\r\n            }\r\n        } = dataInfo\r\n        return{name, country, temp_c, temp_f, wind_kph, humidity, text, icon}\r\n    }\r\n\r\n    let API_KEY = \"525d45bbcba74f1388f212553230107\"\r\n    let baseUrl = \"https://api.weatherapi.com/v1/current.json?key=\";\r\n\r\n    let response = await fetch(baseUrl+API_KEY+`&q=${input}`,{\r\n        mode: 'cors'\r\n    })\r\n    if(response.status != 200) alert(\"input is wrong\")\r\n   let data= await response.json()\r\n    return getData(data)\r\n\r\n}\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;