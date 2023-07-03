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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_DomWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DomWeather */ \"./src/modules/DomWeather.js\");\n\r\n\r\n\r\nlet input = document.querySelector(\"[data-input]\")\r\nlet submitBtn = document.querySelector(\"[data-form-btn]\")\r\n\r\nsubmitBtn.addEventListener(\"click\", async (e) => {\r\n    e.preventDefault()\r\n    console.log(\"input:\", input.value)\r\n    if (input.value == \"\") return\r\n    let weatherInfo = await (0,_modules_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input.value)\r\n    ;(0,_modules_DomWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherInfo)\r\n})\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/DomWeather.js":
/*!***********************************!*\
  !*** ./src/modules/DomWeather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ domWeather)\n/* harmony export */ });\n/* harmony import */ var _Images_cloudy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Images/cloudy.png */ \"./src/Images/cloudy.png\");\n/* harmony import */ var _Images_rain_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Images/rain.png */ \"./src/Images/rain.png\");\n/* harmony import */ var _Images_storm_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/storm.png */ \"./src/Images/storm.png\");\n/* harmony import */ var _Images_snow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/snow.png */ \"./src/Images/snow.png\");\n/* harmony import */ var _Images_sun_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Images/sun.png */ \"./src/Images/sun.png\");\n/* harmony import */ var _Images_foggy_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Images/foggy.png */ \"./src/Images/foggy.png\");\n/* harmony import */ var _Images_sleet_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Images/sleet.png */ \"./src/Images/sleet.png\");\n/* harmony import */ var _Images_overcast_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Images/overcast.png */ \"./src/Images/overcast.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction domWeather(data) {\r\n  console.log(\"this is the data: \", data);\r\n  const card = document.querySelector(\".card\")\r\n  let image = document.querySelector(\"[data-img]\");\r\n  let cityName = document.querySelector(\"[data-city-name] span\");\r\n  let country = document.querySelector(\"#country span\");\r\n  let tempC = document.querySelector(\"[data-temp-c] span\");\r\n  let windKph = document.querySelector(\"[data-wind-kph] span\");\r\n  let humidity = document.querySelector(\"[data-humidity] span\");\r\n  changeImg(data);\r\n  cityName.textContent = `${data.name}`;\r\n  country.textContent = `${data.country}`;\r\n  tempC.textContent = `${data.temp_c}°`;\r\n  windKph.textContent = `${data.wind_kph}km/h`;\r\n  humidity.textContent = `${data.humidity}%`;\r\n\r\n  async function changeImg() {\r\n    let text = await data.text.toLowerCase();\r\n    console.log(\"image.src: \", image);\r\n    console.log(text);\r\n\r\n    if (text.includes(\"cloudy\")) {\r\n      image.setAttribute(\"src\", _Images_cloudy_png__WEBPACK_IMPORTED_MODULE_0__);\r\n      if(card.classList.contains(\"darkBackground\")) card.classList.remove(\"darkBackground\")\r\n      card.classList.add(\"lightBackground\")\r\n    }\r\n    else if (text.includes(\"rain\")) {\r\n      if(card.classList.contains(\"lightBackground\")) card.classList.remove(\"lightBackground\")\r\n      card.classList.add(\"darkBackground\")\r\n      image.setAttribute(\"src\", _Images_rain_png__WEBPACK_IMPORTED_MODULE_1__);\r\n    }\r\n\r\n    else if (text.includes(\"snow\") || text.includes(\"ice\") ) {\r\n      if(card.classList.contains(\"lightBackground\")) card.classList.remove(\"lightBackground\")\r\n      card.classList.add(\"darkBackground\")\r\n      image.setAttribute(\"src\", _Images_snow_png__WEBPACK_IMPORTED_MODULE_3__);\r\n    }\r\n\r\n    else if (text.includes(\"storm\") || text.includes(\"thunder\")) {\r\n      if(card.classList.contains(\"lightBackground\")) card.classList.remove(\"lightBackground\")\r\n      card.classList.add(\"darkBackground\")\r\n      image.setAttribute(\"src\", _Images_storm_png__WEBPACK_IMPORTED_MODULE_2__);\r\n    }\r\n    else if (text.includes(\"sun\")) {\r\n      if(card.classList.contains(\"darkBackground\")) card.classList.remove(\"darkBackground\")\r\n      card.classList.add(\"lightBackground\")\r\n      image.setAttribute(\"src\", _Images_sun_png__WEBPACK_IMPORTED_MODULE_4__);\r\n    } \r\n    else if(text.includes(\"fog\") || text.includes(\"mist\")){\r\n      if(card.classList.contains(\"lightBackground\")) card.classList.remove(\"lightBackground\")\r\n      card.classList.add(\"darkBackground\")\r\n      image.setAttribute(\"src\", _Images_foggy_png__WEBPACK_IMPORTED_MODULE_5__);\r\n    }\r\n    else if(text.includes(\"sleet\")){\r\n      if(card.classList.contains(\"lightBackground\")) card.classList.remove(\"lightBackground\")\r\n      card.classList.add(\"darkBackground\")\r\n      image.setAttribute(\"src\", _Images_sleet_png__WEBPACK_IMPORTED_MODULE_6__)\r\n    }\r\n    else if(text.includes(\"overcast\")){\r\n      if(card.classList.contains(\"lightBackground\")) card.classList.remove(\"lightBackground\")\r\n      card.classList.add(\"darkBackground\")\r\n      image.setAttribute(\"src\", _Images_overcast_png__WEBPACK_IMPORTED_MODULE_7__)\r\n    }\r\n    else {\r\n      if(card.classList.contains(\"darkBackground\")) card.classList.remove(\"darkBackground\")\r\n      card.classList.add(\"lightBackground\")\r\n      image.setAttribute(\"src\", _Images_cloudy_png__WEBPACK_IMPORTED_MODULE_0__);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/DomWeather.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Weather)\n/* harmony export */ });\nasync function Weather(input){\r\n\r\n    function getData(dataInfo){\r\n        const {\r\n            location:{\r\n            name,\r\n            country\r\n            },\r\n            current: {\r\n                temp_c,\r\n                temp_f,\r\n                wind_kph,\r\n                humidity,\r\n                condition: {\r\n                     text,\r\n                     icon\r\n                }\r\n            }\r\n        } = dataInfo\r\n        return{name, country, temp_c, temp_f, wind_kph, humidity, text, icon}\r\n    }\r\n\r\n    let API_KEY = \"525d45bbcba74f1388f212553230107\"\r\n    let baseUrl = \"https://api.weatherapi.com/v1/current.json?key=\";\r\n\r\n    let response = await fetch(baseUrl+API_KEY+`&q=${input}`,{\r\n        mode: 'cors'\r\n    })\r\n    if(response.status != 200) alert (new Error(`${input} Location not found`))\r\n   let data= await response.json()\r\n    return getData(data)\r\n\r\n}\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

/***/ }),

/***/ "./src/Images/cloudy.png":
/*!*******************************!*\
  !*** ./src/Images/cloudy.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"20f0cc1d2fa7fabb49bb.png\";\n\n//# sourceURL=webpack://weather-app/./src/Images/cloudy.png?");

/***/ }),

/***/ "./src/Images/foggy.png":
/*!******************************!*\
  !*** ./src/Images/foggy.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"338664462ba3290acf49.png\";\n\n//# sourceURL=webpack://weather-app/./src/Images/foggy.png?");

/***/ }),

/***/ "./src/Images/overcast.png":
/*!*********************************!*\
  !*** ./src/Images/overcast.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e9db19aebbc22c51bf68.png\";\n\n//# sourceURL=webpack://weather-app/./src/Images/overcast.png?");

/***/ }),

/***/ "./src/Images/rain.png":
/*!*****************************!*\
  !*** ./src/Images/rain.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9574243189cb689b3686.png\";\n\n//# sourceURL=webpack://weather-app/./src/Images/rain.png?");

/***/ }),

/***/ "./src/Images/sleet.png":
/*!******************************!*\
  !*** ./src/Images/sleet.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"224f6f6c29053518807c.png\";\n\n//# sourceURL=webpack://weather-app/./src/Images/sleet.png?");

/***/ }),

/***/ "./src/Images/snow.png":
/*!*****************************!*\
  !*** ./src/Images/snow.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9957456da0445490c376.png\";\n\n//# sourceURL=webpack://weather-app/./src/Images/snow.png?");

/***/ }),

/***/ "./src/Images/storm.png":
/*!******************************!*\
  !*** ./src/Images/storm.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"34ba1304792a31b7d163.png\";\n\n//# sourceURL=webpack://weather-app/./src/Images/storm.png?");

/***/ }),

/***/ "./src/Images/sun.png":
/*!****************************!*\
  !*** ./src/Images/sun.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea0a58acf7a353322fb4.png\";\n\n//# sourceURL=webpack://weather-app/./src/Images/sun.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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