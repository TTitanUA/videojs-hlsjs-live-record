/*!
 * videojs-hlsjs-live-record
 * Live stream record functionality for VideoJS with hls.js
 * 
 * @version v0.1.0
 * @author [object Object]
 * @homepage https://github.com/TTitanUA/videojs-hlsjs-live-record#readme
 * @repository https://github.com/TTitanUA/videojs-hlsjs-live-record.git
 */
module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../package.json":
/*!***********************!*\
  !*** ../package.json ***!
  \***********************/
/*! exports provided: name, version, description, author, license, homepage, repository, bugs, keywords, files, scripts, dependencies, devDependencies, browserslist, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"videojs-hlsjs-live-record\",\"version\":\"0.1.0\",\"description\":\"Live stream record functionality for VideoJS with hls.js\",\"author\":{\"name\":\"Taras Prokofiev\",\"url\":\"xttitax@gmail\"},\"license\":\"MIT\",\"homepage\":\"https://github.com/TTitanUA/videojs-hlsjs-live-record#readme\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/TTitanUA/videojs-hlsjs-live-record.git\"},\"bugs\":{\"url\":\"https://github.com/TTitanUA/videojs-hlsjs-live-record/issues\"},\"keywords\":[\"videojs\",\"videojs-plugin\",\"videojs-hlsjs\"],\"files\":[\"dist/\",\"index.html\",\"webpack/\",\"src/\"],\"scripts\":{\"prestart\":\"rimraf dist\",\"start\":\"webpack-dev-server --open --mode development\",\"prebuild\":\"rimraf dist\",\"build\":\"npm-run-all prebuild build:*\",\"build:umdmin\":\"webpack --mode=production --output-library-target=umd\",\"build:umd\":\"webpack --mode=development --output-library-target=umd\",\"build:commonjs\":\"webpack --mode=development --output-library-target=commonjs2\",\"dev:umd\":\"webpack --progress --colors --watch --mode=development --output-library-target=umd\",\"dev:commonjs\":\"webpack --progress --colors --watch --mode=development --output-library-target=commonjs2\",\"dev\":\"npm-run-all --parallel dev:*\",\"check-eslint-config\":\"eslint --print-config .eslintrc | eslint-config-prettier-check\",\"check-stylelint-config\":\"stylelint-config-prettier-check\",\"lint-code\":\"eslint 'src/**/*.js'\",\"lint-style\":\"stylelint 'src/**/*.{css,scss}'\"},\"dependencies\":{\"global\":\"^4.3.2\"},\"devDependencies\":{\"@babel/core\":\"^7.6.2\",\"@babel/plugin-proposal-class-properties\":\"^7.5.5\",\"@babel/plugin-proposal-object-rest-spread\":\"^7.6.2\",\"@babel/plugin-transform-async-to-generator\":\"^7.5.0\",\"@babel/plugin-transform-runtime\":\"^7.6.2\",\"@babel/preset-env\":\"^7.6.2\",\"@babel/runtime\":\"^7.6.2\",\"autoprefixer\":\"^9.6.1\",\"babel-loader\":\"^8.0.6\",\"copy-webpack-plugin\":\"^5.0.4\",\"css-loader\":\"^3.2.0\",\"csso-webpack-plugin\":\"^1.0.0-beta.12\",\"eslint\":\"^6.4.0\",\"eslint-config-prettier\":\"^6.3.0\",\"eslint-config-videojs\":\"^5.0.2\",\"eslint-plugin-import\":\"^2.18.2\",\"eslint-plugin-prettier\":\"^3.1.1\",\"file-loader\":\"^4.2.0\",\"mini-css-extract-plugin\":\"^0.8.0\",\"node-sass\":\"^4.12.0\",\"normalize.css\":\"^8.0.1\",\"npm-run-all\":\"~4.1.5\",\"postcss-flexbugs-fixes\":\"^4.1.0\",\"postcss-loader\":\"^3.0.0\",\"prettier\":\"^1.18.2\",\"rimraf\":\"^3.0.0\",\"yargs\":\"~14.1.0\",\"sass-loader\":\"^8.0.0\",\"style-loader\":\"^1.0.0\",\"stylelint\":\"^11.0.0\",\"stylelint-config-prettier\":\"^6.0.0\",\"stylelint-config-recommended\":\"^3.0.0\",\"stylelint-config-sass-guidelines\":\"^6.1.0\",\"stylelint-prettier\":\"^1.1.1\",\"stylelint-scss\":\"^3.11.1\",\"video.js\":\"^7.6.0\",\"videojs-contrib-hls.js\":\"^3.2.0\",\"webpack\":\"^4.41.0\",\"webpack-assets-manifest\":\"^3.1.1\",\"webpack-bundle-analyzer\":\"^3.5.2\",\"webpack-cli\":\"^3.3.9\",\"webpack-dev-server\":\"^3.8.1\",\"webpack-merge\":\"^4.2.2\"},\"browserslist\":{\"production\":[\">0.2%\",\"not dead\",\"not op_mini all\"],\"development\":[\"last 1 chrome version\",\"last 1 firefox version\",\"last 1 safari version\"]}}");

/***/ }),

/***/ "./Components/RecSettingsModalHlsJs.js":
/*!*********************************************!*\
  !*** ./Components/RecSettingsModalHlsJs.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ "video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recSettingsModal_TabsHlsJs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recSettingsModal/TabsHlsJs */ "./Components/recSettingsModal/TabsHlsJs.js");


const VideoJsModalDialogClass = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.getComponent('ModalDialog');
const Dom = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.dom;
const defaultOptions = {};
/**
 * Extend vjs button class for quality button.
 */

class RecSettingsModalHlsJs extends VideoJsModalDialogClass {
  /**
   * Button constructor.
   *
   * @param {Player} player - videojs player instance
   * @param {Object} options
   */
  constructor(player, options) {
    console.group("RecSettingsModalHlsJs.js:20 - constructor");
    console.log(player);
    console.groupEnd();
    super(player, options);
  }
  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   *
   * @deprecated Since version 5.
   */


  buildCSSClass() {
    return `vjs-hlsjs-lr-rec-settings ${super.buildCSSClass()}`;
  }
  /**
   * Gets the localized error message based on the `Player`s error.
   *
   * @return {string}
   *         The `Player`s error message localized or an empty string.
   */


  content() {
    this.tabsComponent = new _recSettingsModal_TabsHlsJs__WEBPACK_IMPORTED_MODULE_1__["default"](this.player_, {});
    return this.tabsComponent.el_;
  }

}

RecSettingsModalHlsJs.prototype.options_ = Object.assign({}, VideoJsModalDialogClass.prototype.options_, {
  pauseOnOpen: false,
  fillAlways: false,
  temporary: true,
  uncloseable: false
});
video_js__WEBPACK_IMPORTED_MODULE_0___default.a.registerComponent('RecSettingsModalHlsJs', RecSettingsModalHlsJs);
/* harmony default export */ __webpack_exports__["default"] = (RecSettingsModalHlsJs);

/***/ }),

/***/ "./Components/recSettingsModal/BackgroundRecordTabHlsJs.js":
/*!*****************************************************************!*\
  !*** ./Components/recSettingsModal/BackgroundRecordTabHlsJs.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ "video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_0__);

const VideoJsComponentClass = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.getComponent('Component');
const Dom = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.dom;
const defaultOptions = {};
/**
 * Extend vjs button class for quality button.
 */

class BackgroundRecordTabHlsJs extends VideoJsComponentClass {
  /**
   * Button constructor.
   *
   * @param {Player} player - videojs player instance
   * @param {Object} options
   */
  constructor(player, options) {
    console.group("BackgroundRecordTabHlsJs.js:20 - constructor");
    console.log(player);
    console.groupEnd();
    super(player, options);
  }

  createEl() {
    return super.createEl('div', {
      className: 'vjs-hlsjs-tab-background-record',
      innerHTML: '<p>vjs-hlsjs-tab-background-record</p>'
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BackgroundRecordTabHlsJs);

/***/ }),

/***/ "./Components/recSettingsModal/RealTimeRecordTabHlsJs.js":
/*!***************************************************************!*\
  !*** ./Components/recSettingsModal/RealTimeRecordTabHlsJs.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ "video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/uuid */ "./utils/uuid.js");


const VideoJsComponentClass = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.getComponent('Component');
const VideoJsButtonClass = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.getComponent('MenuButton');
const VideoJsMenuClass = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.getComponent('Menu');
const Dom = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.dom;
const defaultOptions = {};
/**
 * Extend vjs button class for quality button.
 */

class RealTimeRecordTabHlsJs extends VideoJsComponentClass {
  /**
   * Button constructor.
   *
   * @param {Player} player - videojs player instance
   * @param {Object} options
   */
  constructor(player, options) {
    super(player, options);
  }

  getQualityLevels() {
    const hlsjs = this.player().hlsJSLiveRecord().getHlsJs();
    const levels = hlsjs.levels || [];
    const currentLevel = hlsjs.currentLevel || 0;
    return levels.map((item, index) => ({
      label: item.height + 'p',
      value: index,
      selected: index === currentLevel
    })).sort((current, next) => {
      if (typeof current !== 'object' || typeof next !== 'object') {
        return -1;
      }

      if (current.value < next.value) {
        return -1;
      }

      if (current.value > next.value) {
        return 1;
      }

      return 0;
    });
  }

  createEl() {
    const elem = super.createEl('div', {
      className: 'vjs-hlsjs-tab-realtime-record'
    });
    elem.appendChild(this.renderHead());
    elem.appendChild(this.renderQualitySelector());
    elem.appendChild(this.renderButton());
    return elem;
  }

  renderHead() {
    return Dom.createEl('div', {
      innerHTML: "<p>Real-time recording allows you to record a fragment of the program you are watching. " + "Recording will be done until the recording stops, the recording time limit is exceeded or the tab is closed." + "To start recording, select your preferred quality and click <strong>\"start recording\"</strong>.</p>" + "<p>Your current recording time limit is 60 min.</p>"
    });
  }

  renderQualitySelector() {
    const elem = Dom.createEl('div', {
      className: 'vjs-hlsjs-tab-quality-select vjs-hlsjs-form-group'
    });
    const uuid = Object(_utils_uuid__WEBPACK_IMPORTED_MODULE_1__["faceUUID"])('vjs-hls-quality-select');
    elem.appendChild(Dom.createEl('label', {
      for: uuid,
      innerText: 'Quality',
      className: 'vjs-hlsjs-form-label'
    }));
    this.qualitySelect = Dom.createEl('select', {
      id: uuid,
      className: 'vjs-hlsjs-form-input'
    });
    const levels = this.getQualityLevels();
    levels.forEach(item => {
      this.qualitySelect.appendChild(Dom.createEl('option', {
        value: item.value,
        text: item.label,
        selected: item.selected
      }));

      if (item.selected) {
        this.qualitySelect.value = item.value;
      }
    });
    elem.appendChild(this.qualitySelect);
    return elem;
  }

  renderButton() {
    const holder = Dom.createEl('div', {
      className: 'vjs-hlsjs-form-group'
    });
    holder.appendChild(Dom.createEl('button', {
      className: 'vjs-hlsjs-button vjs-hlsjs-start-record',
      innerText: 'Start Recording',
      onclick: this.handleStartRecording.bind(this)
    }));
    return holder;
  }

  handleStartRecording() {
    this.player().hlsJSLiveRecord().startRealtimeRecord(this.qualitySelect.value);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RealTimeRecordTabHlsJs);

/***/ }),

/***/ "./Components/recSettingsModal/TabsHlsJs.js":
/*!**************************************************!*\
  !*** ./Components/recSettingsModal/TabsHlsJs.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ "video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RealTimeRecordTabHlsJs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RealTimeRecordTabHlsJs */ "./Components/recSettingsModal/RealTimeRecordTabHlsJs.js");
/* harmony import */ var _BackgroundRecordTabHlsJs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackgroundRecordTabHlsJs */ "./Components/recSettingsModal/BackgroundRecordTabHlsJs.js");



const VideoJsComponentClass = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.getComponent('Component');
const Dom = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.dom;
const defaultOptions = {};
/**
 * Extend vjs button class for quality button.
 */

class TabsHlsJs extends VideoJsComponentClass {
  /**
   * Button constructor.
   *
   * @param {Player} player - videojs player instance
   * @param {Object} options
   */
  constructor(player, options) {
    console.group("TabsHlsJs.js:20 - constructor");
    console.log(player);
    console.groupEnd();
    super(player, options);
  }

  createEl() {
    const tabsHolder = super.createEl('div', {
      className: 'vjs-hlsjs-vertical-tabs'
    });
    tabsHolder.appendChild(this.renderNav());
    tabsHolder.appendChild(this.renderBody());
    return tabsHolder;
  }

  renderNav() {
    const navHolder = Dom.createEl('div', {
      className: 'vjs-hlsjs-vertical-tabs-nav'
    });
    console.group("TabsHlsJs.js:66 - renderNav");
    console.log(this);
    console.groupEnd();
    navHolder.appendChild(Dom.createEl('div', {
      className: 'vjs-hlsjs-vertical-tabs-nav-elem active',
      innerHTML: 'Realtime',
      onclick: () => {
        this.handleClick(0);
      }
    }));
    navHolder.appendChild(Dom.createEl('div', {
      className: 'vjs-hlsjs-vertical-tabs-nav-elem',
      innerHTML: 'Background',
      onclick: () => {
        this.handleClick(1);
      }
    }));
    return navHolder;
  }

  renderBody() {
    const bodyHolder = Dom.createEl('div', {
      className: 'vjs-hlsjs-vertical-tabs-body'
    });
    this.realtimeRecord = new _RealTimeRecordTabHlsJs__WEBPACK_IMPORTED_MODULE_1__["default"](this.player_, {});
    const elem1 = Dom.createEl('div', {
      className: 'vjs-hlsjs-vertical-tabs-elem active'
    });
    elem1.appendChild(this.realtimeRecord.el_);
    bodyHolder.appendChild(elem1);
    this.backgroundRecord = new _BackgroundRecordTabHlsJs__WEBPACK_IMPORTED_MODULE_2__["default"](this.player_, {});
    const elem2 = Dom.createEl('div', {
      className: 'vjs-hlsjs-vertical-tabs-elem'
    });
    elem2.appendChild(this.backgroundRecord.el_);
    bodyHolder.appendChild(elem2);
    return bodyHolder;
  }

  handleClick(index) {
    this.$$('.vjs-hlsjs-vertical-tabs-nav-elem').forEach((elem, elemIndex) => {
      if (index === elemIndex) {
        Dom.addClass(elem, 'active');
      } else {
        Dom.removeClass(elem, 'active');
      }
    });
    this.$$('.vjs-hlsjs-vertical-tabs-elem').forEach((elem, elemIndex) => {
      if (index === elemIndex) {
        Dom.addClass(elem, 'active');
      } else {
        Dom.removeClass(elem, 'active');
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TabsHlsJs);

/***/ }),

/***/ "./Controllers/RealtimeRecordController.js":
/*!*************************************************!*\
  !*** ./Controllers/RealtimeRecordController.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Models_Playlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/Playlist */ "./Models/Playlist.js");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/date */ "./utils/date.js");
/* harmony import */ var _utils_xhr_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/xhr-loader */ "./utils/xhr-loader.js");




const Hls = window.Hls;

class RealtimeRecordController {
  constructor(plugin) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "fragmentLoaded", (response, stats, context, networkDetails = null) => {
      context.loader.destroy();
      context.loader = null;
      this.plugin.storageController.saveFragment(context.frag, response.data, stats).then(() => {
        this.playlist.fragmentSaved(context.frag);
        this.plugin.storageController.savePlaylist(this.playlist);
        console.groupCollapsed("RealtimeRecordController.js:104 - ");
        console.log(this.playlist.toString());
        console.groupEnd();
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "hlsFragmentLoaded", (event, data) => {
      if (this.recordStarted) {
        this.saveFragment(data.frag);
      }
    });

    this.plugin = plugin;
    this.manifestListener = null;
    this.levelListener = null;
    this.fragmentListener = null;
    this.recordStarted = false;
    this.playlist = null;
  }

  init() {
    const hlsjs = this.plugin.getHlsJs(); // this.manifestListener = hlsjs.on(Hls.Events.MANIFEST_LOADED, this.hlsManifestLoaded);
    // this.levelListener = hlsjs.on(Hls.Events.LEVEL_LOADED, this.hlsLevelLoaded);

    this.fragmentListener = hlsjs.on(Hls.Events.FRAG_LOADED, this.hlsFragmentLoaded);
  }

  startRecord() {
    this.playlist = null;
    this.recordStarted = true;
  }

  stopRecord() {
    this.recordStarted = false;
  } // hlsManifestLoaded = (event, data) => {
  //   console.group("RealtimeRecordController.js:25 - hlsManifestLoaded");
  //   console.log(data);
  //   console.groupEnd();
  // };
  //
  //
  // hlsLevelLoaded = (event, data) => {
  //   console.group("RealtimeRecordController.js:25 - hlsLevelLoaded");
  //   console.log(data);
  //   console.groupEnd();
  // };


  saveFragment(frag) {
    if (this.playlist === null) {
      this.initPlaylist(frag.level);
    }

    if (this.playlist === null) {
      return;
    }

    const loader = new _utils_xhr_loader__WEBPACK_IMPORTED_MODULE_3__["default"]();
    const url = frag.url;
    const loaderContext = {
      url,
      frag: this.playlist.addFragment(frag.duration, url),
      responseType: 'arraybuffer',
      progressData: false,
      loader
    };
    const loaderConfig = {
      timeout: 60,
      maxRetry: 0,
      retryDelay: 0,
      maxRetryDelay: 3
    };
    const loaderCallbacks = {
      onSuccess: this.fragmentLoaded // onError: this.loaderror.bind(this),
      // onTimeout: this.loadtimeout.bind(this),
      // onProgress: this.loadprogress.bind(this)

    };
    loader.load(loaderContext, loaderConfig, loaderCallbacks);
  }

  initPlaylist(levelIndex) {
    const hlsjs = this.plugin.getHlsJs();
    const level = hlsjs.levels[levelIndex];

    if (!level) {
      return;
    }

    this.playlist = new _Models_Playlist__WEBPACK_IMPORTED_MODULE_1__["PlaylistModel"]({
      id: 'record-' + Object(_utils_date__WEBPACK_IMPORTED_MODULE_2__["nowInFormatYmdHis"])(),
      width: level.width,
      height: level.height,
      targetduration: level.details.targetduration
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RealtimeRecordController);

/***/ }),

/***/ "./Controllers/StorageController.js":
/*!******************************************!*\
  !*** ./Controllers/StorageController.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const DB_VERSION = 1;
const STORAGE_WRITE_MODE = 'readwrite';
const STORAGE_READ_MODE = 'readonly';

class StorageController {
  constructor(plugin) {
    this.plugin = plugin;
    this.db = null;
  }

  init() {
    const openRequest = indexedDB.open(this.plugin.options.storageDbName, DB_VERSION);

    openRequest.onupgradeneeded = () => {
      this.db = openRequest.result;
      this.db.createObjectStore(this.plugin.options.storagePlaylistsName, {
        keyPath: 'id'
      });
      const fragmentsStorage = this.db.createObjectStore(this.plugin.options.storageFragmentsName, {
        keyPath: 'uuid'
      });
      fragmentsStorage.createIndex('playlistId', 'playlistId', {
        unique: false
      });
    };

    openRequest.onsuccess = () => {
      this.db = openRequest.result;
    };
  }

  checkRequirements() {
    return 'indexedDB' in window;
  } //TODO: need to add error processing


  saveFragment(fragment, payload, stats) {
    return new Promise(resolve => {
      if (this.db === null) {
        resolve(true);
        return;
      }

      const transaction = this.db.transaction(this.plugin.options.storageFragmentsName, STORAGE_WRITE_MODE);
      const storage = transaction.objectStore(this.plugin.options.storageFragmentsName);
      const request = storage.add(_objectSpread({}, fragment, {
        payload,
        stats
      }));

      request.onsuccess = function () {// console.group("cache-driver.js:17 - store - onsuccess");
        // console.log(request);
        // console.groupEnd();
      };

      request.onerror = function () {// console.group("cache-driver.js:17 - store - onerror");
        // console.warn(request);
        // console.groupEnd();
      };

      resolve(true);
    });
  } //TODO: need to add error processing


  savePlaylist(playlist) {
    return new Promise(resolve => {
      if (this.db === null) {
        resolve(true);
        return;
      }

      const transaction = this.db.transaction(this.plugin.options.storagePlaylistsName, STORAGE_WRITE_MODE);
      const storage = transaction.objectStore(this.plugin.options.storagePlaylistsName);
      const request = storage.put(playlist);

      request.onsuccess = function () {// console.group("cache-driver.js:17 - store - onsuccess");
        // console.log(request);
        // console.groupEnd();
      };

      request.onerror = function () {// console.group("cache-driver.js:17 - store - onerror");
        // console.warn(request);
        // console.groupEnd();
      };

      resolve(true);
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StorageController);

/***/ }),

/***/ "./Controllers/ViewController.js":
/*!***************************************!*\
  !*** ./Controllers/ViewController.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_RecSettingsModalHlsJs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/RecSettingsModalHlsJs */ "./Components/RecSettingsModalHlsJs.js");



class ViewController {
  constructor(plugin) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "init", () => {
      const controlBar = this.plugin.player.getChild('ControlBar');
      const space = controlBar.addChild('Component', {}, 2);
      space.addClass('vjs-hlsjs-controls-holder');
      this.removeDefaultControls();
      this.listOfControlsHiddenOnRec = this.plugin.options.listOfControlsHiddenOnRec.map(selector => {
        return controlBar.children().filter(component => component.hasClass(selector))[0];
      }).filter(component => !!component);
      this.cachedButtonComponent = space.addChild('CachedButtonHlsJs', {
        clickHandler: this.activeLiveMode
      }, 1);
      this.cachedButtonComponent.hide();
      this.liveButtonComponent = controlBar.addChild('LiveButtonHlsJs', {
        clickHandler: this.activateProgressMode
      }, 2);
      this.liveButtonComponent.hide();
      this.recButtonComponent = space.addChild('RecButtonHlsJs', {
        clickHandler: this.showRecordSettings
      }, 1);
      this.recButtonComponent.hide();
      this.stopButtonComponent = controlBar.addChild('StopButtonHlsJs', {
        clickHandler: this.plugin.stopRealtimeRecord
      }, 1);
      this.stopButtonComponent.hide();
      this.recStatusBarComponent = space.addChild('RecStatusBarHlsJs', 1);
      this.recStatusBarComponent.hide();
      this.progressControlComponent = space.addChild('ProgressControlHlsJs', {}, 2);
      this.progressControlComponent.hide();
      this.activeLiveMode();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "removeDefaultControls", () => {
      const controlBar = this.plugin.player.getChild('ControlBar');
      controlBar.removeChild('ProgressControl');
      controlBar.removeChild('SeekToLive');
      controlBar.removeChild('LiveDisplay');
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "activeLiveMode", () => {
      try {
        this.showOtherControl();
        this.showLiveControl();
        this.hideProgressControl();
        this.hideRecControl();
        this.plugin.player.liveTracker.seekToLiveEdge();
      } catch (e) {
        this.plugin.player.log.warn(e.message);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "activateProgressMode", () => {
      if (this.plugin.state.recordInProcess) {
        return;
      }

      this.showOtherControl();
      this.showProgressControl();
      this.hideLiveControl();
      this.hideRecControl();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "showRecordSettings", () => {
      this.recSettingsModalComponent = new _Components_RecSettingsModalHlsJs__WEBPACK_IMPORTED_MODULE_1__["default"](this.plugin.player, {});
      this.plugin.player.addChild(this.recSettingsModalComponent);
      this.recSettingsModalComponent.open();
      console.group("plugin.js:108 - showRecordSettings");
      console.log(this);
      console.groupEnd(); // this.activateRecordMode();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "activateRecordMode", () => {
      this.recSettingsModalComponent.close();
      this.hideProgressControl();
      this.hideLiveControl();
      this.hideOtherControl();
      this.showRecControl();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "showRecControl", () => {
      this.plugin.player.addClass('vjs-hlsjs-record-started');
      this.recStatusBarComponent.updateRecordTime(0);
      let a = 1;
      this.recordUpdateInterval = setInterval(() => {
        this.recStatusBarComponent.updateRecordTime(a++);
      }, 1000);
      this.stopButtonComponent.show();
      this.recStatusBarComponent.show();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "hideRecControl", () => {
      this.plugin.player.removeClass('vjs-hlsjs-record-started');
      clearInterval(this.recordUpdateInterval);
      this.stopButtonComponent.hide();
      this.recStatusBarComponent.hide();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "showProgressControl", () => {
      this.progressControlComponent.show();
      this.cachedButtonComponent.show();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "hideProgressControl", () => {
      this.progressControlComponent.hide();
      this.cachedButtonComponent.hide();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "hideOtherControl", () => {
      this.listOfControlsHiddenOnRec.forEach(component => component.addClass('vjs-hlsjs-lr-hidden'));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "showOtherControl", () => {
      this.listOfControlsHiddenOnRec.forEach(component => component.removeClass('vjs-hlsjs-lr-hidden'));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "showLiveControl", () => {
      this.liveButtonComponent.show();
      this.recButtonComponent.show();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "hideLiveControl", () => {
      this.liveButtonComponent.hide();
      this.recButtonComponent.hide();
    });

    this.plugin = plugin;
    this.recButtonComponent = null;
    this.stopButtonComponent = null;
    this.recStatusBarComponent = null;
    this.progressControlComponent = null;
    this.liveButtonComponent = null;
    this.cachedButtonComponent = null;
    this.recSettingsModalComponent = null;
    this.listOfControlsHiddenOnRec = [];
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ViewController);

/***/ }),

/***/ "./Models/Fragment.js":
/*!****************************!*\
  !*** ./Models/Fragment.js ***!
  \****************************/
/*! exports provided: FragmentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FragmentModel", function() { return FragmentModel; });
/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/uuid */ "./utils/uuid.js");

class FragmentModel {
  constructor(fragmentData) {
    this.duration = fragmentData.duration || 0;
    this.url = fragmentData.url || '';
    this.playlistId = fragmentData.playlistId || 'tmp';
    this.uuid = Object(_utils_uuid__WEBPACK_IMPORTED_MODULE_0__["faceUUID"])(this.playlistId + '-' + this.url.split('/').pop());
    this.saved = fragmentData.saved || false;
  }

}

/***/ }),

/***/ "./Models/Playlist.js":
/*!****************************!*\
  !*** ./Models/Playlist.js ***!
  \****************************/
/*! exports provided: PlaylistModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistModel", function() { return PlaylistModel; });
/* harmony import */ var _Fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fragment */ "./Models/Fragment.js");


const createPlaylistHeader = targetduration => {
  return "#EXTM3U\n" + "#EXT-X-VERSION:4\n" + "#EXT-X-TARGETDURATION:" + targetduration + "\n" + "#EXT-X-MEDIA-SEQUENCE:0\n";
};

const addPlaylistFragment = (duraction, url) => {
  return "#EXTINF:" + duraction + ",\n" + url + "\n";
};

const createPlaylistFooter = () => {
  return "#EXT-X-ENDLIST\n";
};

class PlaylistModel {
  constructor(playlistData) {
    this.id = playlistData.id || '';
    this.width = playlistData.width || 384;
    this.height = playlistData.height || 384;
    this.fragments = playlistData.fragments || [];
    this.targetduration = playlistData.targetduration || 0;
  }

  addFragment(duration, url) {
    const fragment = new _Fragment__WEBPACK_IMPORTED_MODULE_0__["FragmentModel"]({
      duration,
      url
    });
    this.fragments.push(fragment);
    return fragment;
  }

  fragmentSaved(fragment) {
    this.fragments = this.fragments.map(frag => {
      if (frag.uuid === fragment.uuid) {
        frag.saved = true;
      }

      return frag;
    });
  }

  toString() {
    return createPlaylistHeader(this.targetduration) + this.fragments.filter(fragment => fragment.saved).map(fragment => addPlaylistFragment(fragment.duration, fragment.uuid)).join('') + createPlaylistFooter();
  }

}

/***/ }),

/***/ "./components/CachedButtonHlsJs.js":
/*!*****************************************!*\
  !*** ./components/CachedButtonHlsJs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CachedButtonHlsJs; });
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ "video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_0__);

const VideoJsButtonClass = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.getComponent('Button');
const Dom = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.dom;
const defaultOptions = {};
/**
 * Extend vjs button class for quality button.
 */

class CachedButtonHlsJs extends VideoJsButtonClass {
  /**
   * Button constructor.
   *
   * @param {Player} player - videojs player instance
   * @param {Object} options
   */
  constructor(player, options) {
    super(player, Object.assign(defaultOptions, options));
    console.group("CachedButtonHlsJs.js:23 - constructor");
    console.log(this);
    console.groupEnd();
  }

  createEl(tag, props = {}, attributes = {}) {
    this.nonIconControl = true;
    props = Object.assign({
      // className: 'vjs-live-display',
      // innerHTML: 'DVR',
      className: 'vjs-seek-to-live-control',
      innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>LIVE'
    }, props);
    attributes = Object.assign({
      'aria-live': 'On'
    }, attributes);
    return super.createEl(tag, props, attributes);
  }

  createControlTextEl(el) {
    this.controlText_ = 'Stream Type';
    super.createControlTextEl(el);
  }

  handleClick(event) {
    if (this.options_.clickHandler) {
      this.options_.clickHandler.call(this, arguments);
    }
  }

}

/***/ }),

/***/ "./components/LiveButtonHlsJs.js":
/*!***************************************!*\
  !*** ./components/LiveButtonHlsJs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LiveButtonHlsJs; });
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ "video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_0__);

const VideoJsButtonClass = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.getComponent('Button');
const Dom = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.dom;
const defaultOptions = {};
/**
 * Extend vjs button class for quality button.
 */

class LiveButtonHlsJs extends VideoJsButtonClass {
  /**
   * Button constructor.
   *
   * @param {Player} player - videojs player instance
   * @param {Object} options
   */
  constructor(player, options) {
    super(player, Object.assign(defaultOptions, options));
    console.group("LiveButtonHlsJs.js:25 - constructor");
    console.log(this);
    console.groupEnd();
  }

  createEl(tag, props = {}, attributes = {}) {
    this.nonIconControl = true;
    props = Object.assign({
      className: 'vjs-control vjs-seek-to-live-control vjs-at-live-edge',
      innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>LIVE'
    }, props);
    attributes = Object.assign({
      'aria-live': 'off'
    }, attributes);
    return super.createEl(tag, props, attributes);
  }

  createControlTextEl(el) {
    this.controlText_ = 'Stream Type';
    super.createControlTextEl(el);
  }

  handleClick(event) {
    if (this.options_.clickHandler) {
      this.options_.clickHandler.call(this, arguments);
    }
  }

}

/***/ }),

/***/ "./components/ProgressControlHlsJs.js":
/*!********************************************!*\
  !*** ./components/ProgressControlHlsJs.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProgressControlHlsJs; });
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ "video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_0__);

const VideoJsProgressControlComponent = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.getComponent('ProgressControl');
const Dom = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.dom;
/**
 * Extend vjs button class for quality button.
 */

class ProgressControlHlsJs extends VideoJsProgressControlComponent {
  constructor(player, options) {
    super(player, options);
    console.group("ProgressControlHlsJs.js:13 - constructor");
    console.log(this);
    console.groupEnd();
  }

}

/***/ }),

/***/ "./components/RecButtonHlsJs.js":
/*!**************************************!*\
  !*** ./components/RecButtonHlsJs.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecButtonHlsJs; });
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ "video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_0__);

const VideoJsButtonClass = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.getComponent('Button');
const Dom = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.dom;
const defaultOptions = {};
/**
 * Extend vjs button class for quality button.
 */

class RecButtonHlsJs extends VideoJsButtonClass {
  /**
   * Button constructor.
   *
   * @param {Player} player - videojs player instance
   * @param {Object} options
   */
  constructor(player, options) {
    super(player, Object.assign(defaultOptions, options));
    console.group("RecButtonHlsJs.js:25 - constructor");
    console.log(this);
    console.groupEnd();
  }

  createEl(tag, props = {}, attributes = {}) {
    this.nonIconControl = true;
    props = Object.assign({
      className: 'vjs-control vjs-seek-to-live-control',
      innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>REC'
    }, props);
    attributes = Object.assign({
      'aria-live': 'On'
    }, attributes);
    return super.createEl(tag, props, attributes);
  }

  createControlTextEl(el) {
    this.controlText_ = 'Start Record';
    super.createControlTextEl(el);
  }

  handleClick(event) {
    if (this.options_.clickHandler) {
      this.options_.clickHandler.call(this, arguments);
    }
  }

}

/***/ }),

/***/ "./components/RecStatusBarHlsJs.js":
/*!*****************************************!*\
  !*** ./components/RecStatusBarHlsJs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecStatusBarHlsJs; });
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ "video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_format_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/format-time */ "./utils/format-time.js");


const VideoJsComponentClass = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.getComponent('Component');
const Dom = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.dom;
const defaultOptions = {};
/**
 * Extend vjs button class for quality button.
 */

class RecStatusBarHlsJs extends VideoJsComponentClass {
  /**
   * Button constructor.
   *
   * @param {Player} player - videojs player instance
   * @param {Object} options
   */
  constructor(player, options) {
    super(player, Object.assign(defaultOptions, options));
  }

  createEl() {
    this.nonIconControl = true;
    const elem = super.createEl('div', {
      className: 'vjs-control vjs-hlsjs-lr-rec-status-bar',
      innerHTML: '<span class="vjs-hlsjs-lr-rec-indicator"><i class="material-icons md-10">fiber_manual_record</i>REC</span>'
    });
    this.recordedEl_ = Dom.createEl('span', {
      className: 'vjs-hlsjs-lr-recorded',
      innerText: '--:--:--'
    }, {
      'aria-live': 'off',
      'role': 'presentation'
    });
    elem.appendChild(this.recordedEl_);
    elem.appendChild(Dom.createEl('span', {
      className: 'vjs-hlsjs-lr-divider',
      innerText: '/'
    }, {
      'aria-live': 'off',
      'role': 'presentation'
    }));
    this.recordLeftEl_ = Dom.createEl('span', {
      className: 'vjs-hlsjs-lr-record-left',
      innerText: '--:--:--'
    }, {
      'aria-live': 'off',
      'role': 'presentation'
    });
    elem.appendChild(this.recordLeftEl_);
    this.updateRecordTime(0);
    this.updateRecordLeftTime(60 * 60);
    return elem;
  }

  updateRecordTime(time) {
    if (this.recordedEl_) {
      this.recordedEl_.innerText = Object(_utils_format_time__WEBPACK_IMPORTED_MODULE_1__["default"])(time);
    }
  }

  updateRecordLeftTime(time) {
    if (this.recordLeftEl_) {
      this.recordLeftEl_.innerText = Object(_utils_format_time__WEBPACK_IMPORTED_MODULE_1__["default"])(time);
    }
  }

  dispose() {
    this.recordedEl_ = null;
    this.recordLeftEl_ = null;
    super.dispose();
  }

}

/***/ }),

/***/ "./components/StopButtonHlsJs.js":
/*!***************************************!*\
  !*** ./components/StopButtonHlsJs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StopButtonHlsJs; });
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ "video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_0__);

const VideoJsButtonClass = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.getComponent('Button');
const Dom = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.dom;
const defaultOptions = {};
/**
 * Extend vjs button class for quality button.
 */

class StopButtonHlsJs extends VideoJsButtonClass {
  /**
   * Button constructor.
   *
   * @param {Player} player - videojs player instance
   * @param {Object} options
   */
  constructor(player, options) {
    super(player, Object.assign(defaultOptions, options));
    console.group("StopButtonHlsJs.js:25 - constructor");
    console.log(this);
    console.groupEnd();
  }

  createEl(tag, props = {}, attributes = {}) {
    this.nonIconControl = false;
    props = Object.assign({
      className: 'vjs-control vjs-hlsjs-lr-stop',
      innerHTML: '<i class="material-icons">stop</i>'
    }, props);
    return super.createEl(tag, props, attributes);
  }

  createControlTextEl(el) {
    this.controlText_ = 'Stop Record';
    super.createControlTextEl(el);
  }

  handleClick(event) {
    if (this.options_.clickHandler) {
      this.options_.clickHandler.call(this, arguments);
    }
  }

}

/***/ }),

/***/ "./plugin.js":
/*!*******************!*\
  !*** ./plugin.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugin_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin.scss */ "./plugin.scss");
/* harmony import */ var _plugin_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plugin_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! video.js */ "video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../package.json */ "../package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "../package.json", 1);
/* harmony import */ var _components_ProgressControlHlsJs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ProgressControlHlsJs */ "./components/ProgressControlHlsJs.js");
/* harmony import */ var _components_LiveButtonHlsJs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LiveButtonHlsJs */ "./components/LiveButtonHlsJs.js");
/* harmony import */ var _components_CachedButtonHlsJs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CachedButtonHlsJs */ "./components/CachedButtonHlsJs.js");
/* harmony import */ var _components_RecButtonHlsJs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/RecButtonHlsJs */ "./components/RecButtonHlsJs.js");
/* harmony import */ var _components_StopButtonHlsJs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/StopButtonHlsJs */ "./components/StopButtonHlsJs.js");
/* harmony import */ var _components_RecStatusBarHlsJs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/RecStatusBarHlsJs */ "./components/RecStatusBarHlsJs.js");
/* harmony import */ var _Controllers_ViewController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Controllers/ViewController */ "./Controllers/ViewController.js");
/* harmony import */ var _Controllers_StorageController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Controllers/StorageController */ "./Controllers/StorageController.js");
/* harmony import */ var _Controllers_RealtimeRecordController__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Controllers/RealtimeRecordController */ "./Controllers/RealtimeRecordController.js");



const Plugin = video_js__WEBPACK_IMPORTED_MODULE_2___default.a.getPlugin('plugin');










const defaults = {
  listOfControlsHiddenOnRec: ['vjs-play-control', 'vjs-quality-selector'],
  storageDbName: 'vjs-hlsjs-lr',
  storagePlaylistsName: 'playlists',
  storageFragmentsName: 'fragments'
};

class HlsJSLiveRecordPlugin extends Plugin {
  constructor(player, options) {
    super(player, options);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "init", () => {
      if (this.checkRequirements()) {
        this.player.addClass('vjs-hls-live-record');
        this.player.on('pause', this.viewController.activateProgressMode);
        this.viewController.init();
        this.storageController.init();
        this.realtimeRecordController.init();
      } else {
        video_js__WEBPACK_IMPORTED_MODULE_2___default.a.log.warn('HlsJSLiveRecordPlugin: cannot be initialized because one or more of the requirements are not met.');
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "checkRequirements", () => {
      if (!this.getHlsJs()) {
        video_js__WEBPACK_IMPORTED_MODULE_2___default.a.log.warn('HlsJSLiveRecordPlugin: HLS.JS plugin not found.');
        return false;
      }

      if (!this.storageController.checkRequirements()) {
        video_js__WEBPACK_IMPORTED_MODULE_2___default.a.log.warn('HlsJSLiveRecordPlugin: This browser doesn\'t support IndexedDB.');
        return false;
      }

      return true;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "getHlsJs", () => {
      return this.player.tech({
        IWillUseThisInPlugin: true
      }).sourceHandler_.hls;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "stopRealtimeRecord", () => {
      this.realtimeRecordController.stopRecord();
      this.viewController.activeLiveMode();
      this.setState({
        recordInProcess: false
      });
      this.getHlsJs().currentLevel = -1;
    });

    this.viewController = new _Controllers_ViewController__WEBPACK_IMPORTED_MODULE_10__["default"](this);
    this.storageController = new _Controllers_StorageController__WEBPACK_IMPORTED_MODULE_11__["default"](this);
    this.realtimeRecordController = new _Controllers_RealtimeRecordController__WEBPACK_IMPORTED_MODULE_12__["default"](this);
    this.options = video_js__WEBPACK_IMPORTED_MODULE_2___default.a.mergeOptions(defaults, options);
    player.on('ready', () => {
      this.init();
    });
  }

  startRealtimeRecord(levelId) {
    this.setState({
      recordInProcess: true
    });
    this.getHlsJs().currentLevel = levelId * 1;
    this.viewController.activateRecordMode();
    this.realtimeRecordController.startRecord(); // console.group("plugin.js:203 - startRealtimeRecord");
    // console.log(this);
    // console.log(levelId);
    // console.groupEnd();
  }

  handleStateChanged(e) {}

}

HlsJSLiveRecordPlugin.VERSION = _package_json__WEBPACK_IMPORTED_MODULE_3__["version"];
HlsJSLiveRecordPlugin.defaultState = {
  recordAllowed: true,
  recordInProcess: false
};
video_js__WEBPACK_IMPORTED_MODULE_2___default.a.registerPlugin('hlsJSLiveRecord', HlsJSLiveRecordPlugin);
video_js__WEBPACK_IMPORTED_MODULE_2___default.a.registerComponent('ProgressControlHlsJs', _components_ProgressControlHlsJs__WEBPACK_IMPORTED_MODULE_4__["default"]);
video_js__WEBPACK_IMPORTED_MODULE_2___default.a.registerComponent('LiveButtonHlsJs', _components_LiveButtonHlsJs__WEBPACK_IMPORTED_MODULE_5__["default"]);
video_js__WEBPACK_IMPORTED_MODULE_2___default.a.registerComponent('CachedButtonHlsJs', _components_CachedButtonHlsJs__WEBPACK_IMPORTED_MODULE_6__["default"]);
video_js__WEBPACK_IMPORTED_MODULE_2___default.a.registerComponent('RecButtonHlsJs', _components_RecButtonHlsJs__WEBPACK_IMPORTED_MODULE_7__["default"]);
video_js__WEBPACK_IMPORTED_MODULE_2___default.a.registerComponent('StopButtonHlsJs', _components_StopButtonHlsJs__WEBPACK_IMPORTED_MODULE_8__["default"]);
video_js__WEBPACK_IMPORTED_MODULE_2___default.a.registerComponent('RecStatusBarHlsJs', _components_RecStatusBarHlsJs__WEBPACK_IMPORTED_MODULE_9__["default"]);

/***/ }),

/***/ "./plugin.scss":
/*!*********************!*\
  !*** ./plugin.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* Material icons */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format(\"woff2\"); }\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n\n/* Rules for sizing the icon. */\n.material-icons.md-8 {\n  font-size: 9px; }\n\n.material-icons.md-10 {\n  font-size: 10px; }\n\n.material-icons.md-12 {\n  font-size: 12px; }\n\n.material-icons.md-18 {\n  font-size: 18px; }\n\n.material-icons.md-24 {\n  font-size: 24px; }\n\n.material-icons.md-36 {\n  font-size: 36px; }\n\n.material-icons.md-48 {\n  font-size: 48px; }\n\n/* Rules for using icons as black on a light background. */\n.material-icons.md-dark {\n  color: rgba(0, 0, 0, 0.54); }\n\n.material-icons.md-dark.md-inactive {\n  color: rgba(0, 0, 0, 0.26); }\n\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light {\n  color: white; }\n\n.material-icons.md-light.md-inactive {\n  color: rgba(255, 255, 255, 0.3); }\n\n/* End material icons */\n:root {\n  --main-color: red;\n  --base-font-size: 9;\n  --font-size: 7; }\n\n.video-js .vjs-hlsjs-form-group {\n  padding: 5px 0; }\n  .video-js .vjs-hlsjs-form-group .vjs-hlsjs-form-label {\n    display: inline-block;\n    font-weight: bold;\n    padding-right: 10px; }\n  .video-js .vjs-hlsjs-form-group .vjs-hlsjs-form-input {\n    display: inline-block; }\n\n.video-js .vjs-hlsjs-button {\n  background: none;\n  border: none;\n  color: inherit;\n  display: inline-block;\n  font-size: inherit;\n  line-height: inherit;\n  text-transform: none;\n  text-decoration: none;\n  transition: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  line-height: 1.5;\n  display: block;\n  cursor: pointer;\n  opacity: 1;\n  border: 0.06666em solid #fff;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  border-radius: 0.3em;\n  transition: all 0.3s; }\n  .video-js .vjs-hlsjs-button:disabled, .video-js .vjs-hlsjs-button.disabled {\n    opacity: 0.6; }\n\n.video-js .vjs-hlsjs-vertical-tabs {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.video-js .vjs-hlsjs-vertical-tabs-nav {\n  width: 140px;\n  flex: 140px 0;\n  flex-shrink: 0; }\n\n.video-js .vjs-hlsjs-vertical-tabs-nav-elem {\n  padding: 10px 5px;\n  cursor: pointer;\n  text-transform: uppercase; }\n  .video-js .vjs-hlsjs-vertical-tabs-nav-elem.active {\n    background-color: #333; }\n  .video-js .vjs-hlsjs-vertical-tabs-nav-elem:hover {\n    background-color: #292929; }\n\n.video-js .vjs-hlsjs-vertical-tabs-body {\n  min-height: 300px;\n  height: 300px; }\n\n.video-js .vjs-hlsjs-vertical-tabs-elem {\n  display: none;\n  padding: 10px; }\n  .video-js .vjs-hlsjs-vertical-tabs-elem.active {\n    display: block; }\n\n.video-js .vjs-hlsjs-lr-rec-settings.vjs-modal-dialog .vjs-modal-dialog-content {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.video-js .vjs-hlsjs-lr-rec-settings.vjs-modal-dialog .vjs-hlsjs-start-record {\n  padding: 5px 10px; }\n\n.video-js.vjs-hlsjs-record-started .vjs-tech {\n  pointer-events: none !important;\n  touch-action: none !important; }\n\n.video-js .vjs-hlsjs-lr-hidden {\n  display: none !important; }\n\n.video-js.vjs-hlsjs-live-record {\n  display: block; }\n  .video-js.vjs-hlsjs-live-record.vjs-user-inactive .vjs-control-bar {\n    opacity: 1; }\n\n.video-js .vjs-hlsjs-lr-stop {\n  cursor: pointer; }\n\n.video-js .vjs-hlsjs-controls-holder {\n  display: flex;\n  flex: auto;\n  flex-direction: row-reverse; }\n  .video-js .vjs-hlsjs-controls-holder .vjs-live-display {\n    cursor: pointer; }\n  .video-js .vjs-hlsjs-controls-holder .vjs-control.vjs-at-live-edge {\n    cursor: pointer; }\n  .video-js .vjs-hlsjs-controls-holder .vjs-progress-control .vjs-load-progress {\n    background-color: #b83700; }\n    .video-js .vjs-hlsjs-controls-holder .vjs-progress-control .vjs-load-progress div {\n      background-color: rgba(20, 177, 106, 0.95); }\n  .video-js .vjs-hlsjs-controls-holder .vjs-progress-control:hover .vjs-load-progress {\n    padding-bottom: 8px; }\n  .video-js .vjs-hlsjs-controls-holder .vjs-progress-control:hover .vjs-mouse-display {\n    padding-bottom: 8px; }\n\n.video-js .vjs-hlsjs-lr-rec-status-bar {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  -webkit-user-select: none;\n          user-select: none; }\n  .video-js .vjs-hlsjs-lr-rec-status-bar .vjs-hlsjs-lr-rec-indicator {\n    display: flex;\n    color: red;\n    font-size: 11px;\n    margin-right: 10px;\n    margin-left: 1px; }\n  .video-js .vjs-hlsjs-lr-rec-status-bar .vjs-hlsjs-lr-divider {\n    padding: 0 2px; }\n", "",{"version":3,"sources":["D:\\projects\\altena_stream\\videojs-hlsjs-live-record/src\\plugin.scss","D:\\projects\\altena_stream\\videojs-hlsjs-live-record/src\\styles\\forms.scss","D:\\projects\\altena_stream\\videojs-hlsjs-live-record/src\\styles\\buttons.scss","D:\\projects\\altena_stream\\videojs-hlsjs-live-record/src\\styles\\vertical-tabs.scss","D:\\projects\\altena_stream\\videojs-hlsjs-live-record/src\\styles\\modal\\rec-settings.scss"],"names":[],"mappings":"AAAA,mBAAA;AACA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,gBAAgB;EAChB,0GAA0G,EAAA;;AAG5G;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,qCAAqC;EACrC,mCAAmC,EAAA;;AAGrC,+BAAA;AACA;EAAuB,cAAc,EAAA;;AACrC;EAAwB,eAAe,EAAA;;AACvC;EAAwB,eAAe,EAAA;;AACvC;EAAwB,eAAe,EAAA;;AACvC;EAAwB,eAAe,EAAA;;AACvC;EAAwB,eAAe,EAAA;;AACvC;EAAwB,eAAe,EAAA;;AAEvC,0DAAA;AACA;EAA0B,0BAA0B,EAAA;;AACpD;EAAsC,0BAA0B,EAAA;;AAEhE,yDAAA;AACA;EAA2B,YAA6B,EAAA;;AACxD;EAAuC,+BAA+B,EAAA;;AAEtE,uBAAA;AAEA;EACE,iBAAa;EACb,mBAAiB;EACjB,cAAY,EAAA;;AAGd;EChDE,cAAc,EAAA;EDgDhB;IC9CI,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB,EAAA;ED4CvB;ICxCI,qBAAqB,EAAA;;ADwCzB;EEhDE,gBAAgB;EAChB,YAAY;EACZ,cAAc;EACd,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,qBAAqB;EACrB,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,UAAU;EACV,4BAA4B;EAC5B,yBAAyB;EACzB,uCAAuC;EACvC,oBAAoB;EACpB,oBAAoB,EAAA;EF4BtB;IEzBI,YAAY,EAAA;;AFyBhB;EGhDE,aAAa;EACb,WAAW;EACX,gBAAgB;EAGhB,oCAAoC,EAAA;;AH2CtC;EGvCE,YAAY;EACZ,aAAe;EACf,cAAc,EAAA;;AHqChB;EGjCE,iBAAiB;EACjB,eAAe;EACf,yBAAyB,EAAA;EH+B3B;IG7BI,sBAAsB,EAAA;EH6B1B;IGzBI,yBAA4B,EAAA;;AHyBhC;EGpBE,iBAAiB;EACjB,aAAa,EAAA;;AHmBf;EGfE,aAAa;EACb,aAAa,EAAA;EHcf;IGZI,cAAc,EAAA;;AHYlB;EI7CI,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;;AJ2CvB;EIvCI,iBAAiB,EAAA;;AJuCrB;EAQM,+BAA+B;EAC/B,6BAA6B,EAAA;;AATnC;EAcI,wBAAwB,EAAA;;AAd5B;EAkBI,cAAc,EAAA;EAlBlB;IAsBQ,UAAU,EAAA;;AAtBlB;EA8BI,eAAe,EAAA;;AA9BnB;EAkCI,aAAa;EACb,UAAU;EACV,2BAA2B,EAAA;EApC/B;IAuCM,eAAe,EAAA;EAvCrB;IA4CQ,eAAe,EAAA;EA5CvB;IAkDQ,yBAAiC,EAAA;IAlDzC;MAoDU,0CAA0C,EAAA;EApDpD;IA0DU,mBAAmB,EAAA;EA1D7B;IA6DU,mBAAmB,EAAA;;AA7D7B;EAoEI,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,yBAAiB;UAAjB,iBAAiB,EAAA;EAvErB;IA2EM,aAAa;IACb,UAAU;IACV,eAAe;IACf,kBAAkB;IAClB,gBAAgB,EAAA;EA/EtB;IAqFM,cAAc,EAAA","file":"plugin.scss","sourcesContent":["/* Material icons */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n}\n\n/* Rules for sizing the icon. */\n.material-icons.md-8 { font-size: 9px; }\n.material-icons.md-10 { font-size: 10px; }\n.material-icons.md-12 { font-size: 12px; }\n.material-icons.md-18 { font-size: 18px; }\n.material-icons.md-24 { font-size: 24px; }\n.material-icons.md-36 { font-size: 36px; }\n.material-icons.md-48 { font-size: 48px; }\n\n/* Rules for using icons as black on a light background. */\n.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }\n.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }\n\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light { color: rgba(255, 255, 255, 1); }\n.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }\n\n/* End material icons */\n\n:root {\n  --main-color: red;\n  --base-font-size: 9;\n  --font-size: 7;\n}\n\n.video-js {\n\n  @import \"styles/forms\";\n  @import \"styles/buttons\";\n  @import \"styles/modal/rec-settings\";\n\n  &.vjs-hlsjs-record-started {\n    .vjs-tech {\n      pointer-events: none !important;\n      touch-action: none !important;\n    }\n  }\n\n  .vjs-hlsjs-lr-hidden {\n    display: none !important;\n  }\n\n  &.vjs-hlsjs-live-record {\n    display: block;\n\n    &.vjs-user-inactive {\n      .vjs-control-bar {\n        opacity: 1;\n      }\n    }\n  }\n\n\n\n  .vjs-hlsjs-lr-stop {\n    cursor: pointer;\n  }\n\n  .vjs-hlsjs-controls-holder {\n    display: flex;\n    flex: auto;\n    flex-direction: row-reverse;\n\n    .vjs-live-display {\n      cursor: pointer;\n    }\n\n    .vjs-control {\n      &.vjs-at-live-edge {\n        cursor: pointer;\n      }\n    }\n\n    .vjs-progress-control {\n      .vjs-load-progress {\n        background-color: rgb(184, 55, 0);\n        div {\n          background-color: rgba(20, 177, 106, 0.95);\n        }\n      }\n\n      &:hover {\n        .vjs-load-progress {\n          padding-bottom: 8px;\n        }\n        .vjs-mouse-display {\n          padding-bottom: 8px;\n        }\n      }\n    }\n  }\n\n  .vjs-hlsjs-lr-rec-status-bar {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    user-select: none;\n\n\n    .vjs-hlsjs-lr-rec-indicator {\n      display: flex;\n      color: red;\n      font-size: 11px;\n      margin-right: 10px;\n      margin-left: 1px;\n    }\n    .vjs-hlsjs-lr-recorded {\n\n    }\n    .vjs-hlsjs-lr-divider {\n      padding: 0 2px;\n    }\n    .vjs-hlsjs-lr-record-left {\n\n    }\n  }\n}\n",".vjs-hlsjs-form-group {\n  padding: 5px 0;\n  .vjs-hlsjs-form-label {\n    display: inline-block;\n    font-weight: bold;\n    padding-right: 10px;\n  }\n\n  .vjs-hlsjs-form-input {\n    display: inline-block;\n  }\n}\n",".vjs-hlsjs-button {\n  background: none;\n  border: none;\n  color: inherit;\n  display: inline-block;\n  font-size: inherit;\n  line-height: inherit;\n  text-transform: none;\n  text-decoration: none;\n  transition: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  line-height: 1.5;\n  display: block;\n  cursor: pointer;\n  opacity: 1;\n  border: 0.06666em solid #fff;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  border-radius: 0.3em;\n  transition: all 0.3s;\n\n  &:disabled, &.disabled {\n    opacity: 0.6;\n  }\n}\n",".vjs-hlsjs-vertical-tabs {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n\n  //background-color: rgba(41, 41, 41, 0.8);\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.vjs-hlsjs-vertical-tabs-nav {\n  width: 140px;\n  flex: 140px 0 0;\n  flex-shrink: 0;\n}\n\n.vjs-hlsjs-vertical-tabs-nav-elem {\n  padding: 10px 5px;\n  cursor: pointer;\n  text-transform: uppercase;\n  &.active {\n    background-color: #333;\n  }\n\n  &:hover {\n    background-color: #333 - 10%;\n  }\n}\n\n.vjs-hlsjs-vertical-tabs-body {\n  min-height: 300px;\n  height: 300px;\n}\n\n.vjs-hlsjs-vertical-tabs-elem {\n  display: none;\n  padding: 10px;\n  &.active {\n    display: block;\n  }\n}\n","@import \"../vertical-tabs\";\n\n.vjs-hlsjs-lr-rec-settings.vjs-modal-dialog {\n  .vjs-modal-dialog-content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .vjs-hlsjs-start-record {\n    padding: 5px 10px;\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./utils/date.js":
/*!***********************!*\
  !*** ./utils/date.js ***!
  \***********************/
/*! exports provided: toFormatYmdHis, nowInFormatYmdHis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFormatYmdHis", function() { return toFormatYmdHis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nowInFormatYmdHis", function() { return nowInFormatYmdHis; });
const normalize = number => number < 10 ? '0' + number : number;

const toFormatYmdHis = (date, separator) => {
  return [date.getFullYear(), normalize(date.getMonth() + 1), normalize(date.getDate()), normalize(date.getHours()), normalize(date.getMinutes()), normalize(date.getSeconds())].join(separator);
};
const nowInFormatYmdHis = (separator = '-') => {
  return toFormatYmdHis(new Date(), separator);
};

/***/ }),

/***/ "./utils/format-time.js":
/*!******************************!*\
  !*** ./utils/format-time.js ***!
  \******************************/
/*! exports provided: setFormatTime, resetFormatTime, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFormatTime", function() { return setFormatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetFormatTime", function() { return resetFormatTime; });
/**
 * @file format-time.js
 * @module format-time
 */

/**
 * Format seconds as a time string, H:MM:SS or M:SS. Supplying a guide (in
 * seconds) will force a number of leading zeros to cover the length of the
 * guide.
 *
 * @private
 * @param  {number} seconds
 *         Number of seconds to be turned into a string
 *
 * @param  {number} guide
 *         Number (in seconds) to model the string after
 *
 * @return {string}
 *         Time formatted as H:MM:SS or M:SS
 */
const defaultImplementation = function (seconds, guide) {
  seconds = seconds < 0 ? 0 : seconds;
  let s = Math.floor(seconds % 60);
  let m = Math.floor(seconds / 60 % 60);
  let h = Math.floor(seconds / 3600);
  const gm = Math.floor(guide / 60 % 60);
  const gh = Math.floor(guide / 3600); // handle invalid times

  if (isNaN(seconds) || seconds === Infinity) {
    // '-' is false for all relational operators (e.g. <, >=) so this setting
    // will add the minimum number of fields specified by the guide
    h = m = s = '-';
  } // Check if we need to show hours


  h = h > 0 || gh > 0 ? h + ':' : ''; // If hours are showing, we may need to add a leading zero.
  // Always show at least one digit of minutes.

  m = ((h || gm >= 10) && m < 10 ? '0' + m : m) + ':'; // Check if leading zero is need for seconds

  s = s < 10 ? '0' + s : s;
  return h + m + s;
}; // Internal pointer to the current implementation.


let implementation = defaultImplementation;
/**
 * Replaces the default formatTime implementation with a custom implementation.
 *
 * @param {Function} customImplementation
 *        A function which will be used in place of the default formatTime
 *        implementation. Will receive the current time in seconds and the
 *        guide (in seconds) as arguments.
 */

function setFormatTime(customImplementation) {
  implementation = customImplementation;
}
/**
 * Resets formatTime to the default implementation.
 */

function resetFormatTime() {
  implementation = defaultImplementation;
}
/**
 * Delegates to either the default time formatting function or a custom
 * function supplied via `setFormatTime`.
 *
 * Formats seconds as a time string (H:MM:SS or M:SS). Supplying a
 * guide (in seconds) will force a number of leading zeros to cover the
 * length of the guide.
 *
 * @static
 * @example  formatTime(125, 600) === "02:05"
 * @param    {number} seconds
 *           Number of seconds to be turned into a string
 *
 * @param    {number} guide
 *           Number (in seconds) to model the string after
 *
 * @return   {string}
 *           Time formatted as H:MM:SS or M:SS
 */

function formatTime(seconds, guide = seconds) {
  return implementation(seconds, guide);
}

/* harmony default export */ __webpack_exports__["default"] = (formatTime);

/***/ }),

/***/ "./utils/uuid.js":
/*!***********************!*\
  !*** ./utils/uuid.js ***!
  \***********************/
/*! exports provided: faceUUID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faceUUID", function() { return faceUUID; });
const faceUUID = prefix => {
  return prefix + '-' + Date.now();
};

/***/ }),

/***/ "./utils/xhr-loader.js":
/*!*****************************!*\
  !*** ./utils/xhr-loader.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const {
  performance,
  XMLHttpRequest
} = window;

class XhrLoader {
  constructor(config) {
    if (config && config.xhrSetup) {
      this.xhrSetup = config.xhrSetup;
    }
  }

  destroy() {
    this.abort();
    this.loader = null;
  }

  abort() {
    let loader = this.loader;

    if (loader && loader.readyState !== 4) {
      this.stats.aborted = true;
      loader.abort();
    }

    window.clearTimeout(this.requestTimeout);
    this.requestTimeout = null;
    window.clearTimeout(this.retryTimeout);
    this.retryTimeout = null;
  }

  load(context, config, callbacks) {
    this.context = context;
    this.config = config;
    this.callbacks = callbacks;
    this.stats = {
      trequest: performance.now(),
      retry: 0
    };
    this.retryDelay = config.retryDelay;
    this.loadInternal();
  }

  loadInternal() {
    let xhr,
        context = this.context;
    xhr = this.loader = new XMLHttpRequest();
    let stats = this.stats;
    stats.tfirst = 0;
    stats.loaded = 0;
    const xhrSetup = this.xhrSetup;

    try {
      if (xhrSetup) {
        try {
          xhrSetup(xhr, context.url);
        } catch (e) {
          // fix xhrSetup: (xhr, url) => {xhr.setRequestHeader("Content-Language", "test");}
          // not working, as xhr.setRequestHeader expects xhr.readyState === OPEN
          xhr.open('GET', context.url, true);
          xhrSetup(xhr, context.url);
        }
      }

      if (!xhr.readyState) {
        xhr.open('GET', context.url, true);
      }
    } catch (e) {
      // IE11 throws an exception on xhr.open if attempting to access an HTTP resource over HTTPS
      this.callbacks.onError({
        code: xhr.status,
        text: e.message
      }, context, xhr);
      return;
    }

    if (context.rangeEnd) {
      xhr.setRequestHeader('Range', 'bytes=' + context.rangeStart + '-' + (context.rangeEnd - 1));
    }

    xhr.onreadystatechange = this.readystatechange.bind(this);
    xhr.onprogress = this.loadprogress.bind(this);
    xhr.responseType = context.responseType; // setup timeout before we perform request

    this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout);
    xhr.send();
  }

  readystatechange(event) {
    let xhr = event.currentTarget,
        readyState = xhr.readyState,
        stats = this.stats,
        context = this.context,
        config = this.config; // don't proceed if xhr has been aborted

    if (stats.aborted) {
      return;
    } // >= HEADERS_RECEIVED


    if (readyState >= 2) {
      // clear xhr timeout and rearm it if readyState less than 4
      window.clearTimeout(this.requestTimeout);

      if (stats.tfirst === 0) {
        stats.tfirst = Math.max(performance.now(), stats.trequest);
      }

      if (readyState === 4) {
        let status = xhr.status; // http status between 200 to 299 are all successful

        if (status >= 200 && status < 300) {
          stats.tload = Math.max(stats.tfirst, performance.now());
          let data, len;

          if (context.responseType === 'arraybuffer') {
            data = xhr.response;
            len = data.byteLength;
          } else {
            data = xhr.responseText;
            len = data.length;
          }

          stats.loaded = stats.total = len;
          let response = {
            url: xhr.responseURL,
            data: data
          };
          this.callbacks.onSuccess(response, stats, context, xhr);
        } else {
          // if max nb of retries reached or if http status between 400 and 499 (such error cannot be recovered, retrying is useless), return error
          if (stats.retry >= config.maxRetry || status >= 400 && status < 499) {
            this.callbacks.onError({
              code: status,
              text: xhr.statusText
            }, context, xhr);
          } else {
            // aborts and resets internal state
            this.destroy(); // schedule retry

            this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay); // set exponential backoff

            this.retryDelay = Math.min(2 * this.retryDelay, config.maxRetryDelay);
            stats.retry++;
          }
        }
      } else {
        // readyState >= 2 AND readyState !==4 (readyState = HEADERS_RECEIVED || LOADING) rearm timeout as xhr not finished yet
        this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), config.timeout);
      }
    }
  }

  loadtimeout() {
    this.callbacks.onTimeout(this.stats, this.context, null);
  }

  loadprogress(event) {
    let xhr = event.currentTarget,
        stats = this.stats;
    stats.loaded = event.loaded;

    if (event.lengthComputable) {
      stats.total = event.total;
    }

    let onProgress = this.callbacks.onProgress;

    if (onProgress) {
      // third arg is to provide on progress data
      onProgress(stats, this.context, null, xhr);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (XhrLoader);

/***/ }),

/***/ "video.js":
/*!**************************!*\
  !*** external "videojs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("videojs");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Db21wb25lbnRzL1JlY1NldHRpbmdzTW9kYWxIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29tcG9uZW50cy9yZWNTZXR0aW5nc01vZGFsL0JhY2tncm91bmRSZWNvcmRUYWJIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29tcG9uZW50cy9yZWNTZXR0aW5nc01vZGFsL1JlYWxUaW1lUmVjb3JkVGFiSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL0NvbXBvbmVudHMvcmVjU2V0dGluZ3NNb2RhbC9UYWJzSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL0NvbnRyb2xsZXJzL1JlYWx0aW1lUmVjb3JkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29udHJvbGxlcnMvU3RvcmFnZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL0NvbnRyb2xsZXJzL1ZpZXdDb250cm9sbGVyLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Nb2RlbHMvRnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL01vZGVscy9QbGF5bGlzdC5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9DYWNoZWRCdXR0b25IbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9MaXZlQnV0dG9uSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL2NvbXBvbmVudHMvUHJvZ3Jlc3NDb250cm9sSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL2NvbXBvbmVudHMvUmVjQnV0dG9uSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL2NvbXBvbmVudHMvUmVjU3RhdHVzQmFySGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL2NvbXBvbmVudHMvU3RvcEJ1dHRvbkhsc0pzLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL3BsdWdpbi5zY3NzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi91dGlscy9kYXRlLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi91dGlscy9mb3JtYXQtdGltZS5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vdXRpbHMvdXVpZC5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vdXRpbHMveGhyLWxvYWRlci5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL2V4dGVybmFsIFwidmlkZW9qc1wiIl0sIm5hbWVzIjpbIlZpZGVvSnNNb2RhbERpYWxvZ0NsYXNzIiwidmlkZW9qcyIsImdldENvbXBvbmVudCIsIkRvbSIsImRvbSIsImRlZmF1bHRPcHRpb25zIiwiUmVjU2V0dGluZ3NNb2RhbEhsc0pzIiwiY29uc3RydWN0b3IiLCJwbGF5ZXIiLCJvcHRpb25zIiwiY29uc29sZSIsImdyb3VwIiwibG9nIiwiZ3JvdXBFbmQiLCJidWlsZENTU0NsYXNzIiwiY29udGVudCIsInRhYnNDb21wb25lbnQiLCJUYWJzSGxzSnMiLCJwbGF5ZXJfIiwiZWxfIiwicHJvdG90eXBlIiwib3B0aW9uc18iLCJPYmplY3QiLCJhc3NpZ24iLCJwYXVzZU9uT3BlbiIsImZpbGxBbHdheXMiLCJ0ZW1wb3JhcnkiLCJ1bmNsb3NlYWJsZSIsInJlZ2lzdGVyQ29tcG9uZW50IiwiVmlkZW9Kc0NvbXBvbmVudENsYXNzIiwiQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzIiwiY3JlYXRlRWwiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJWaWRlb0pzQnV0dG9uQ2xhc3MiLCJWaWRlb0pzTWVudUNsYXNzIiwiUmVhbFRpbWVSZWNvcmRUYWJIbHNKcyIsImdldFF1YWxpdHlMZXZlbHMiLCJobHNqcyIsImhsc0pTTGl2ZVJlY29yZCIsImdldEhsc0pzIiwibGV2ZWxzIiwiY3VycmVudExldmVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGFiZWwiLCJoZWlnaHQiLCJ2YWx1ZSIsInNlbGVjdGVkIiwic29ydCIsImN1cnJlbnQiLCJuZXh0IiwiZWxlbSIsImFwcGVuZENoaWxkIiwicmVuZGVySGVhZCIsInJlbmRlclF1YWxpdHlTZWxlY3RvciIsInJlbmRlckJ1dHRvbiIsInV1aWQiLCJmYWNlVVVJRCIsImZvciIsImlubmVyVGV4dCIsInF1YWxpdHlTZWxlY3QiLCJpZCIsImZvckVhY2giLCJ0ZXh0IiwiaG9sZGVyIiwib25jbGljayIsImhhbmRsZVN0YXJ0UmVjb3JkaW5nIiwiYmluZCIsInN0YXJ0UmVhbHRpbWVSZWNvcmQiLCJ0YWJzSG9sZGVyIiwicmVuZGVyTmF2IiwicmVuZGVyQm9keSIsIm5hdkhvbGRlciIsImhhbmRsZUNsaWNrIiwiYm9keUhvbGRlciIsInJlYWx0aW1lUmVjb3JkIiwiZWxlbTEiLCJiYWNrZ3JvdW5kUmVjb3JkIiwiZWxlbTIiLCIkJCIsImVsZW1JbmRleCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJIbHMiLCJ3aW5kb3ciLCJSZWFsdGltZVJlY29yZENvbnRyb2xsZXIiLCJwbHVnaW4iLCJyZXNwb25zZSIsInN0YXRzIiwiY29udGV4dCIsIm5ldHdvcmtEZXRhaWxzIiwibG9hZGVyIiwiZGVzdHJveSIsInN0b3JhZ2VDb250cm9sbGVyIiwic2F2ZUZyYWdtZW50IiwiZnJhZyIsImRhdGEiLCJ0aGVuIiwicGxheWxpc3QiLCJmcmFnbWVudFNhdmVkIiwic2F2ZVBsYXlsaXN0IiwiZ3JvdXBDb2xsYXBzZWQiLCJ0b1N0cmluZyIsImV2ZW50IiwicmVjb3JkU3RhcnRlZCIsIm1hbmlmZXN0TGlzdGVuZXIiLCJsZXZlbExpc3RlbmVyIiwiZnJhZ21lbnRMaXN0ZW5lciIsImluaXQiLCJvbiIsIkV2ZW50cyIsIkZSQUdfTE9BREVEIiwiaGxzRnJhZ21lbnRMb2FkZWQiLCJzdGFydFJlY29yZCIsInN0b3BSZWNvcmQiLCJpbml0UGxheWxpc3QiLCJsZXZlbCIsIlhockxvYWRlciIsInVybCIsImxvYWRlckNvbnRleHQiLCJhZGRGcmFnbWVudCIsImR1cmF0aW9uIiwicmVzcG9uc2VUeXBlIiwicHJvZ3Jlc3NEYXRhIiwibG9hZGVyQ29uZmlnIiwidGltZW91dCIsIm1heFJldHJ5IiwicmV0cnlEZWxheSIsIm1heFJldHJ5RGVsYXkiLCJsb2FkZXJDYWxsYmFja3MiLCJvblN1Y2Nlc3MiLCJmcmFnbWVudExvYWRlZCIsImxvYWQiLCJsZXZlbEluZGV4IiwiUGxheWxpc3RNb2RlbCIsIm5vd0luRm9ybWF0WW1kSGlzIiwid2lkdGgiLCJ0YXJnZXRkdXJhdGlvbiIsImRldGFpbHMiLCJEQl9WRVJTSU9OIiwiU1RPUkFHRV9XUklURV9NT0RFIiwiU1RPUkFHRV9SRUFEX01PREUiLCJTdG9yYWdlQ29udHJvbGxlciIsImRiIiwib3BlblJlcXVlc3QiLCJpbmRleGVkREIiLCJvcGVuIiwic3RvcmFnZURiTmFtZSIsIm9udXBncmFkZW5lZWRlZCIsInJlc3VsdCIsImNyZWF0ZU9iamVjdFN0b3JlIiwic3RvcmFnZVBsYXlsaXN0c05hbWUiLCJrZXlQYXRoIiwiZnJhZ21lbnRzU3RvcmFnZSIsInN0b3JhZ2VGcmFnbWVudHNOYW1lIiwiY3JlYXRlSW5kZXgiLCJ1bmlxdWUiLCJvbnN1Y2Nlc3MiLCJjaGVja1JlcXVpcmVtZW50cyIsImZyYWdtZW50IiwicGF5bG9hZCIsIlByb21pc2UiLCJyZXNvbHZlIiwidHJhbnNhY3Rpb24iLCJzdG9yYWdlIiwib2JqZWN0U3RvcmUiLCJyZXF1ZXN0IiwiYWRkIiwib25lcnJvciIsInB1dCIsIlZpZXdDb250cm9sbGVyIiwiY29udHJvbEJhciIsImdldENoaWxkIiwic3BhY2UiLCJhZGRDaGlsZCIsInJlbW92ZURlZmF1bHRDb250cm9scyIsImxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWMiLCJzZWxlY3RvciIsImNoaWxkcmVuIiwiZmlsdGVyIiwiY29tcG9uZW50IiwiaGFzQ2xhc3MiLCJjYWNoZWRCdXR0b25Db21wb25lbnQiLCJjbGlja0hhbmRsZXIiLCJhY3RpdmVMaXZlTW9kZSIsImhpZGUiLCJsaXZlQnV0dG9uQ29tcG9uZW50IiwiYWN0aXZhdGVQcm9ncmVzc01vZGUiLCJyZWNCdXR0b25Db21wb25lbnQiLCJzaG93UmVjb3JkU2V0dGluZ3MiLCJzdG9wQnV0dG9uQ29tcG9uZW50Iiwic3RvcFJlYWx0aW1lUmVjb3JkIiwicmVjU3RhdHVzQmFyQ29tcG9uZW50IiwicHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50IiwicmVtb3ZlQ2hpbGQiLCJzaG93T3RoZXJDb250cm9sIiwic2hvd0xpdmVDb250cm9sIiwiaGlkZVByb2dyZXNzQ29udHJvbCIsImhpZGVSZWNDb250cm9sIiwibGl2ZVRyYWNrZXIiLCJzZWVrVG9MaXZlRWRnZSIsImUiLCJ3YXJuIiwibWVzc2FnZSIsInN0YXRlIiwicmVjb3JkSW5Qcm9jZXNzIiwic2hvd1Byb2dyZXNzQ29udHJvbCIsImhpZGVMaXZlQ29udHJvbCIsInJlY1NldHRpbmdzTW9kYWxDb21wb25lbnQiLCJjbG9zZSIsImhpZGVPdGhlckNvbnRyb2wiLCJzaG93UmVjQ29udHJvbCIsInVwZGF0ZVJlY29yZFRpbWUiLCJhIiwicmVjb3JkVXBkYXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNob3ciLCJjbGVhckludGVydmFsIiwiRnJhZ21lbnRNb2RlbCIsImZyYWdtZW50RGF0YSIsInBsYXlsaXN0SWQiLCJzcGxpdCIsInBvcCIsInNhdmVkIiwiY3JlYXRlUGxheWxpc3RIZWFkZXIiLCJhZGRQbGF5bGlzdEZyYWdtZW50IiwiZHVyYWN0aW9uIiwiY3JlYXRlUGxheWxpc3RGb290ZXIiLCJwbGF5bGlzdERhdGEiLCJmcmFnbWVudHMiLCJwdXNoIiwiam9pbiIsIkNhY2hlZEJ1dHRvbkhsc0pzIiwidGFnIiwicHJvcHMiLCJhdHRyaWJ1dGVzIiwibm9uSWNvbkNvbnRyb2wiLCJjcmVhdGVDb250cm9sVGV4dEVsIiwiZWwiLCJjb250cm9sVGV4dF8iLCJjYWxsIiwiYXJndW1lbnRzIiwiTGl2ZUJ1dHRvbkhsc0pzIiwiVmlkZW9Kc1Byb2dyZXNzQ29udHJvbENvbXBvbmVudCIsIlByb2dyZXNzQ29udHJvbEhsc0pzIiwiUmVjQnV0dG9uSGxzSnMiLCJSZWNTdGF0dXNCYXJIbHNKcyIsInJlY29yZGVkRWxfIiwicmVjb3JkTGVmdEVsXyIsInVwZGF0ZVJlY29yZExlZnRUaW1lIiwidGltZSIsImZvcm1hdFRpbWUiLCJkaXNwb3NlIiwiU3RvcEJ1dHRvbkhsc0pzIiwiUGx1Z2luIiwiZ2V0UGx1Z2luIiwiZGVmYXVsdHMiLCJIbHNKU0xpdmVSZWNvcmRQbHVnaW4iLCJ2aWV3Q29udHJvbGxlciIsInJlYWx0aW1lUmVjb3JkQ29udHJvbGxlciIsInRlY2giLCJJV2lsbFVzZVRoaXNJblBsdWdpbiIsInNvdXJjZUhhbmRsZXJfIiwiaGxzIiwic2V0U3RhdGUiLCJtZXJnZU9wdGlvbnMiLCJsZXZlbElkIiwiYWN0aXZhdGVSZWNvcmRNb2RlIiwiaGFuZGxlU3RhdGVDaGFuZ2VkIiwiVkVSU0lPTiIsImRlZmF1bHRTdGF0ZSIsInJlY29yZEFsbG93ZWQiLCJyZWdpc3RlclBsdWdpbiIsIm5vcm1hbGl6ZSIsIm51bWJlciIsInRvRm9ybWF0WW1kSGlzIiwiZGF0ZSIsInNlcGFyYXRvciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsIkRhdGUiLCJkZWZhdWx0SW1wbGVtZW50YXRpb24iLCJzZWNvbmRzIiwiZ3VpZGUiLCJzIiwiTWF0aCIsImZsb29yIiwibSIsImgiLCJnbSIsImdoIiwiaXNOYU4iLCJJbmZpbml0eSIsImltcGxlbWVudGF0aW9uIiwic2V0Rm9ybWF0VGltZSIsImN1c3RvbUltcGxlbWVudGF0aW9uIiwicmVzZXRGb3JtYXRUaW1lIiwicHJlZml4Iiwibm93IiwicGVyZm9ybWFuY2UiLCJYTUxIdHRwUmVxdWVzdCIsImNvbmZpZyIsInhoclNldHVwIiwiYWJvcnQiLCJyZWFkeVN0YXRlIiwiYWJvcnRlZCIsImNsZWFyVGltZW91dCIsInJlcXVlc3RUaW1lb3V0IiwicmV0cnlUaW1lb3V0IiwiY2FsbGJhY2tzIiwidHJlcXVlc3QiLCJyZXRyeSIsImxvYWRJbnRlcm5hbCIsInhociIsInRmaXJzdCIsImxvYWRlZCIsIm9uRXJyb3IiLCJjb2RlIiwic3RhdHVzIiwicmFuZ2VFbmQiLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmFuZ2VTdGFydCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5c3RhdGVjaGFuZ2UiLCJvbnByb2dyZXNzIiwibG9hZHByb2dyZXNzIiwic2V0VGltZW91dCIsImxvYWR0aW1lb3V0Iiwic2VuZCIsImN1cnJlbnRUYXJnZXQiLCJtYXgiLCJ0bG9hZCIsImxlbiIsImJ5dGVMZW5ndGgiLCJyZXNwb25zZVRleHQiLCJsZW5ndGgiLCJ0b3RhbCIsInJlc3BvbnNlVVJMIiwic3RhdHVzVGV4dCIsIm1pbiIsIm9uVGltZW91dCIsImxlbmd0aENvbXB1dGFibGUiLCJvblByb2dyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7OztBQ2ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDOztB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LEtBQUt4TixVQUFsQixFQUE4QmtMLE1BQU0sQ0FBQ2pMLGFBQXJDLENBQWxCO0FBQ0F4QyxpQkFBSyxDQUFDbU8sS0FBTjtBQUNEO0FBQ0Y7QUFDRixPQTlCRCxNQThCTztBQUNMO0FBQ0EsYUFBS0osY0FBTCxHQUFzQm5PLE1BQU0sQ0FBQ3NQLFVBQVAsQ0FBa0IsS0FBS0MsV0FBTCxDQUFpQnhRLElBQWpCLENBQXNCLElBQXRCLENBQWxCLEVBQStDOE8sTUFBTSxDQUFDcEwsT0FBdEQsQ0FBdEI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ4TSxhQUFXLEdBQUk7QUFDYixTQUFLbEIsU0FBTCxDQUFlK0IsU0FBZixDQUF5QixLQUFLaFEsS0FBOUIsRUFBcUMsS0FBS0MsT0FBMUMsRUFBbUQsSUFBbkQ7QUFDRDs7QUFFRGdQLGNBQVksQ0FBRWxPLEtBQUYsRUFBUztBQUNuQixRQUFJc04sR0FBRyxHQUFHdE4sS0FBSyxDQUFDc08sYUFBaEI7QUFBQSxRQUNFclAsS0FBSyxHQUFHLEtBQUtBLEtBRGY7QUFHQUEsU0FBSyxDQUFDdU8sTUFBTixHQUFleE4sS0FBSyxDQUFDd04sTUFBckI7O0FBQ0EsUUFBSXhOLEtBQUssQ0FBQ2tQLGdCQUFWLEVBQTRCO0FBQzFCalEsV0FBSyxDQUFDNFAsS0FBTixHQUFjN08sS0FBSyxDQUFDNk8sS0FBcEI7QUFDRDs7QUFFRCxRQUFJTSxVQUFVLEdBQUcsS0FBS2pDLFNBQUwsQ0FBZWlDLFVBQWhDOztBQUNBLFFBQUlBLFVBQUosRUFBZ0I7QUFDZDtBQUNBQSxnQkFBVSxDQUFDbFEsS0FBRCxFQUFRLEtBQUtDLE9BQWIsRUFBc0IsSUFBdEIsRUFBNEJvTyxHQUE1QixDQUFWO0FBQ0Q7QUFDRjs7QUF2SmE7O0FBMEpEeE0sd0VBQWYsRTs7Ozs7Ozs7Ozs7QUM1SkEsb0MiLCJmaWxlIjoidmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC5janMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wbHVnaW4uanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tpXSk7XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5pbXBvcnQgVGFic0hsc0pzIGZyb20gXCIuL3JlY1NldHRpbmdzTW9kYWwvVGFic0hsc0pzXCI7XG5cbmNvbnN0IFZpZGVvSnNNb2RhbERpYWxvZ0NsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ01vZGFsRGlhbG9nJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmNsYXNzIFJlY1NldHRpbmdzTW9kYWxIbHNKcyBleHRlbmRzIFZpZGVvSnNNb2RhbERpYWxvZ0NsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIGNvbnNvbGUuZ3JvdXAoXCJSZWNTZXR0aW5nc01vZGFsSGxzSnMuanM6MjAgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aGUgZGVmYXVsdCBET00gYGNsYXNzTmFtZWAuXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogICAgICAgICBUaGUgRE9NIGBjbGFzc05hbWVgIGZvciB0aGlzIG9iamVjdC5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgdmVyc2lvbiA1LlxuICAgKi9cbiAgYnVpbGRDU1NDbGFzcygpIHtcbiAgICByZXR1cm4gYHZqcy1obHNqcy1sci1yZWMtc2V0dGluZ3MgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBsb2NhbGl6ZWQgZXJyb3IgbWVzc2FnZSBiYXNlZCBvbiB0aGUgYFBsYXllcmBzIGVycm9yLlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqICAgICAgICAgVGhlIGBQbGF5ZXJgcyBlcnJvciBtZXNzYWdlIGxvY2FsaXplZCBvciBhbiBlbXB0eSBzdHJpbmcuXG4gICAqL1xuICBjb250ZW50KCkge1xuICAgIHRoaXMudGFic0NvbXBvbmVudCA9IG5ldyBUYWJzSGxzSnModGhpcy5wbGF5ZXJfLCB7fSk7XG4gICAgcmV0dXJuIHRoaXMudGFic0NvbXBvbmVudC5lbF87XG4gIH1cbn1cblxuUmVjU2V0dGluZ3NNb2RhbEhsc0pzLnByb3RvdHlwZS5vcHRpb25zXyA9IE9iamVjdC5hc3NpZ24oe30sIFZpZGVvSnNNb2RhbERpYWxvZ0NsYXNzLnByb3RvdHlwZS5vcHRpb25zXywge1xuICBwYXVzZU9uT3BlbjogZmFsc2UsXG4gIGZpbGxBbHdheXM6IGZhbHNlLFxuICB0ZW1wb3Jhcnk6IHRydWUsXG4gIHVuY2xvc2VhYmxlOiBmYWxzZVxufSk7XG5cbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ1JlY1NldHRpbmdzTW9kYWxIbHNKcycsIFJlY1NldHRpbmdzTW9kYWxIbHNKcyk7XG5leHBvcnQgZGVmYXVsdCBSZWNTZXR0aW5nc01vZGFsSGxzSnM7XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbmNvbnN0IFZpZGVvSnNDb21wb25lbnRDbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuY2xhc3MgQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzIGV4dGVuZHMgVmlkZW9Kc0NvbXBvbmVudENsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIGNvbnNvbGUuZ3JvdXAoXCJCYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnMuanM6MjAgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlRWwoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy10YWItYmFja2dyb3VuZC1yZWNvcmQnLFxuICAgICAgICBpbm5lckhUTUw6ICc8cD52anMtaGxzanMtdGFiLWJhY2tncm91bmQtcmVjb3JkPC9wPidcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnM7XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5pbXBvcnQge2ZhY2VVVUlEfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXVpZFwiO1xuXG5jb25zdCBWaWRlb0pzQ29tcG9uZW50Q2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5jb25zdCBWaWRlb0pzQnV0dG9uQ2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTWVudUJ1dHRvbicpO1xuY29uc3QgVmlkZW9Kc01lbnVDbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdNZW51Jyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmNsYXNzIFJlYWxUaW1lUmVjb3JkVGFiSGxzSnMgZXh0ZW5kcyBWaWRlb0pzQ29tcG9uZW50Q2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIGdldFF1YWxpdHlMZXZlbHMoKSB7XG4gICAgY29uc3QgaGxzanMgPSB0aGlzLnBsYXllcigpLmhsc0pTTGl2ZVJlY29yZCgpLmdldEhsc0pzKCk7XG4gICAgY29uc3QgbGV2ZWxzID0gaGxzanMubGV2ZWxzIHx8IFtdO1xuICAgIGNvbnN0IGN1cnJlbnRMZXZlbCA9IGhsc2pzLmN1cnJlbnRMZXZlbCB8fCAwO1xuICAgIHJldHVybiBsZXZlbHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAge1xuICAgICAgICBsYWJlbDogaXRlbS5oZWlnaHQgKyAncCcsXG4gICAgICAgIHZhbHVlOiBpbmRleCxcbiAgICAgICAgc2VsZWN0ZWQ6IGluZGV4ID09PSBjdXJyZW50TGV2ZWwsXG4gICAgICB9XG4gICAgKSkuc29ydCgoY3VycmVudCwgbmV4dCkgPT4ge1xuICAgICAgaWYgKCh0eXBlb2YgY3VycmVudCAhPT0gJ29iamVjdCcpIHx8ICh0eXBlb2YgbmV4dCAhPT0gJ29iamVjdCcpKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50LnZhbHVlIDwgbmV4dC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudC52YWx1ZSA+IG5leHQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUVsKCkge1xuICAgIGNvbnN0IGVsZW0gPSBzdXBlci5jcmVhdGVFbChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdGFiLXJlYWx0aW1lLXJlY29yZCcsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBlbGVtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVySGVhZCgpKTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyUXVhbGl0eVNlbGVjdG9yKCkpO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJCdXR0b24oKSk7XG5cbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHJlbmRlckhlYWQoKSB7XG4gICAgcmV0dXJuIERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgaW5uZXJIVE1MOiBcIjxwPlJlYWwtdGltZSByZWNvcmRpbmcgYWxsb3dzIHlvdSB0byByZWNvcmQgYSBmcmFnbWVudCBvZiB0aGUgcHJvZ3JhbSB5b3UgYXJlIHdhdGNoaW5nLiBcIiArXG4gICAgICAgIFwiUmVjb3JkaW5nIHdpbGwgYmUgZG9uZSB1bnRpbCB0aGUgcmVjb3JkaW5nIHN0b3BzLCB0aGUgcmVjb3JkaW5nIHRpbWUgbGltaXQgaXMgZXhjZWVkZWQgb3IgdGhlIHRhYiBpcyBjbG9zZWQuXCIgK1xuICAgICAgICBcIlRvIHN0YXJ0IHJlY29yZGluZywgc2VsZWN0IHlvdXIgcHJlZmVycmVkIHF1YWxpdHkgYW5kIGNsaWNrIDxzdHJvbmc+XFxcInN0YXJ0IHJlY29yZGluZ1xcXCI8L3N0cm9uZz4uPC9wPlwiICtcbiAgICAgICAgXCI8cD5Zb3VyIGN1cnJlbnQgcmVjb3JkaW5nIHRpbWUgbGltaXQgaXMgNjAgbWluLjwvcD5cIlxuICAgIH0pXG4gIH1cblxuXG4gIHJlbmRlclF1YWxpdHlTZWxlY3RvcigpIHtcbiAgICBjb25zdCBlbGVtID0gRG9tLmNyZWF0ZUVsKFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy10YWItcXVhbGl0eS1zZWxlY3QgdmpzLWhsc2pzLWZvcm0tZ3JvdXAnLFxuICAgICAgfSxcbiAgICApO1xuICAgIGNvbnN0IHV1aWQgPSBmYWNlVVVJRCgndmpzLWhscy1xdWFsaXR5LXNlbGVjdCcpO1xuXG4gICAgZWxlbS5hcHBlbmRDaGlsZChcbiAgICAgIERvbS5jcmVhdGVFbCgnbGFiZWwnLCB7XG4gICAgICAgIGZvcjogdXVpZCxcbiAgICAgICAgaW5uZXJUZXh0OiAnUXVhbGl0eScsXG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1mb3JtLWxhYmVsJ1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5xdWFsaXR5U2VsZWN0ID0gRG9tLmNyZWF0ZUVsKCdzZWxlY3QnLCB7XG4gICAgICBpZDogdXVpZCxcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1mb3JtLWlucHV0J1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGV2ZWxzID0gdGhpcy5nZXRRdWFsaXR5TGV2ZWxzKCk7XG5cbiAgICBsZXZlbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy5xdWFsaXR5U2VsZWN0LmFwcGVuZENoaWxkKFxuICAgICAgICBEb20uY3JlYXRlRWwoJ29wdGlvbicsIHtcbiAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICB0ZXh0OiBpdGVtLmxhYmVsLFxuICAgICAgICAgIHNlbGVjdGVkOiBpdGVtLnNlbGVjdGVkXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgaWYoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnF1YWxpdHlTZWxlY3QudmFsdWUgPSBpdGVtLnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnF1YWxpdHlTZWxlY3QpO1xuXG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICByZW5kZXJCdXR0b24oKSB7XG4gICAgY29uc3QgaG9sZGVyID0gRG9tLmNyZWF0ZUVsKFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1mb3JtLWdyb3VwJyxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaG9sZGVyLmFwcGVuZENoaWxkKERvbS5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLWJ1dHRvbiB2anMtaGxzanMtc3RhcnQtcmVjb3JkJyxcbiAgICAgIGlubmVyVGV4dDogJ1N0YXJ0IFJlY29yZGluZycsXG4gICAgICBvbmNsaWNrOiB0aGlzLmhhbmRsZVN0YXJ0UmVjb3JkaW5nLmJpbmQodGhpcylcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gaG9sZGVyO1xuICB9XG5cbiAgaGFuZGxlU3RhcnRSZWNvcmRpbmcoKSB7XG4gICAgdGhpcy5wbGF5ZXIoKS5obHNKU0xpdmVSZWNvcmQoKS5zdGFydFJlYWx0aW1lUmVjb3JkKHRoaXMucXVhbGl0eVNlbGVjdC52YWx1ZSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFsVGltZVJlY29yZFRhYkhsc0pzO1xuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuaW1wb3J0IFJlYWxUaW1lUmVjb3JkVGFiSGxzSnMgZnJvbSBcIi4vUmVhbFRpbWVSZWNvcmRUYWJIbHNKc1wiO1xuaW1wb3J0IEJhY2tncm91bmRSZWNvcmRUYWJIbHNKcyBmcm9tIFwiLi9CYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnNcIjtcblxuY29uc3QgVmlkZW9Kc0NvbXBvbmVudENsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5jbGFzcyBUYWJzSGxzSnMgZXh0ZW5kcyBWaWRlb0pzQ29tcG9uZW50Q2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgY29uc29sZS5ncm91cChcIlRhYnNIbHNKcy5qczoyMCAtIGNvbnN0cnVjdG9yXCIpO1xuICAgIGNvbnNvbGUubG9nKHBsYXllcik7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gIH1cblxuICBjcmVhdGVFbCgpIHtcbiAgICBjb25zdCB0YWJzSG9sZGVyID0gc3VwZXIuY3JlYXRlRWwoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMnLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgdGFic0hvbGRlci5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlck5hdigpKTtcblxuICAgIHRhYnNIb2xkZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJCb2R5KCkpO1xuXG4gICAgcmV0dXJuIHRhYnNIb2xkZXI7XG4gIH1cblxuXG4gIHJlbmRlck5hdigpIHtcbiAgICBjb25zdCBuYXZIb2xkZXIgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLW5hdidcbiAgICB9KTtcbiAgICBjb25zb2xlLmdyb3VwKFwiVGFic0hsc0pzLmpzOjY2IC0gcmVuZGVyTmF2XCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICBuYXZIb2xkZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2LWVsZW0gYWN0aXZlJyxcbiAgICAgICAgaW5uZXJIVE1MOiAnUmVhbHRpbWUnLFxuICAgICAgICBvbmNsaWNrOiAoKSA9PiB7dGhpcy5oYW5kbGVDbGljaygwKX1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIG5hdkhvbGRlci5hcHBlbmRDaGlsZChcbiAgICAgIERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYtZWxlbScsXG4gICAgICAgIGlubmVySFRNTDogJ0JhY2tncm91bmQnLFxuICAgICAgICBvbmNsaWNrOiAoKSA9PiB7dGhpcy5oYW5kbGVDbGljaygxKX1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBuYXZIb2xkZXI7XG4gIH1cblxuICByZW5kZXJCb2R5KCkge1xuICAgIGNvbnN0IGJvZHlIb2xkZXIgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWJvZHknXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlYWx0aW1lUmVjb3JkID0gbmV3IFJlYWxUaW1lUmVjb3JkVGFiSGxzSnModGhpcy5wbGF5ZXJfLCB7fSk7XG4gICAgY29uc3QgZWxlbTEgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWVsZW0gYWN0aXZlJ1xuICAgIH0pO1xuICAgIGVsZW0xLmFwcGVuZENoaWxkKHRoaXMucmVhbHRpbWVSZWNvcmQuZWxfKTtcbiAgICBib2R5SG9sZGVyLmFwcGVuZENoaWxkKGVsZW0xKTtcblxuICAgIHRoaXMuYmFja2dyb3VuZFJlY29yZCA9IG5ldyBCYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnModGhpcy5wbGF5ZXJfLCB7fSk7XG4gICAgY29uc3QgZWxlbTIgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWVsZW0nXG4gICAgfSk7XG4gICAgZWxlbTIuYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kUmVjb3JkLmVsXyk7XG4gICAgYm9keUhvbGRlci5hcHBlbmRDaGlsZChlbGVtMik7XG5cbiAgICByZXR1cm4gYm9keUhvbGRlcjtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGluZGV4KSB7XG4gICAgdGhpcy4kJCgnLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLW5hdi1lbGVtJykuZm9yRWFjaCgoZWxlbSwgZWxlbUluZGV4KSA9PiB7XG4gICAgICBpZihpbmRleCA9PT0gZWxlbUluZGV4KSB7XG4gICAgICAgIERvbS5hZGRDbGFzcyhlbGVtLCAnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoZWxlbSwgJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuJCQoJy52anMtaGxzanMtdmVydGljYWwtdGFicy1lbGVtJykuZm9yRWFjaCgoZWxlbSwgZWxlbUluZGV4KSA9PiB7XG4gICAgICBpZihpbmRleCA9PT0gZWxlbUluZGV4KSB7XG4gICAgICAgIERvbS5hZGRDbGFzcyhlbGVtLCAnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoZWxlbSwgJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzSGxzSnM7XG4iLCJpbXBvcnQge1BsYXlsaXN0TW9kZWx9IGZyb20gXCIuLi9Nb2RlbHMvUGxheWxpc3RcIjtcbmltcG9ydCB7bm93SW5Gb3JtYXRZbWRIaXN9IGZyb20gXCIuLi91dGlscy9kYXRlXCI7XG5pbXBvcnQgWGhyTG9hZGVyIGZyb20gXCIuLi91dGlscy94aHItbG9hZGVyXCI7XG5cbmNvbnN0IEhscyA9IHdpbmRvdy5IbHM7XG5cbmNsYXNzIFJlYWx0aW1lUmVjb3JkQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHBsdWdpbikge1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMubWFuaWZlc3RMaXN0ZW5lciA9IG51bGw7XG4gICAgdGhpcy5sZXZlbExpc3RlbmVyID0gbnVsbDtcbiAgICB0aGlzLmZyYWdtZW50TGlzdGVuZXIgPSBudWxsO1xuICAgIHRoaXMucmVjb3JkU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5wbGF5bGlzdCA9IG51bGw7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IGhsc2pzID0gdGhpcy5wbHVnaW4uZ2V0SGxzSnMoKTtcbiAgICAvLyB0aGlzLm1hbmlmZXN0TGlzdGVuZXIgPSBobHNqcy5vbihIbHMuRXZlbnRzLk1BTklGRVNUX0xPQURFRCwgdGhpcy5obHNNYW5pZmVzdExvYWRlZCk7XG4gICAgLy8gdGhpcy5sZXZlbExpc3RlbmVyID0gaGxzanMub24oSGxzLkV2ZW50cy5MRVZFTF9MT0FERUQsIHRoaXMuaGxzTGV2ZWxMb2FkZWQpO1xuICAgIHRoaXMuZnJhZ21lbnRMaXN0ZW5lciA9IGhsc2pzLm9uKEhscy5FdmVudHMuRlJBR19MT0FERUQsIHRoaXMuaGxzRnJhZ21lbnRMb2FkZWQpO1xuICB9XG5cbiAgc3RhcnRSZWNvcmQoKSB7XG4gICAgdGhpcy5wbGF5bGlzdCA9IG51bGw7XG4gICAgdGhpcy5yZWNvcmRTdGFydGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHN0b3BSZWNvcmQoKSB7XG4gICAgdGhpcy5yZWNvcmRTdGFydGVkID0gZmFsc2U7XG4gIH1cblxuICAvLyBobHNNYW5pZmVzdExvYWRlZCA9IChldmVudCwgZGF0YSkgPT4ge1xuICAvLyAgIGNvbnNvbGUuZ3JvdXAoXCJSZWFsdGltZVJlY29yZENvbnRyb2xsZXIuanM6MjUgLSBobHNNYW5pZmVzdExvYWRlZFwiKTtcbiAgLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gIC8vIH07XG4gIC8vXG4gIC8vXG4gIC8vIGhsc0xldmVsTG9hZGVkID0gKGV2ZW50LCBkYXRhKSA9PiB7XG4gIC8vICAgY29uc29sZS5ncm91cChcIlJlYWx0aW1lUmVjb3JkQ29udHJvbGxlci5qczoyNSAtIGhsc0xldmVsTG9hZGVkXCIpO1xuICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAvLyAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgLy8gfTtcblxuICBzYXZlRnJhZ21lbnQoZnJhZykge1xuICAgIGlmKHRoaXMucGxheWxpc3QgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuaW5pdFBsYXlsaXN0KGZyYWcubGV2ZWwpO1xuICAgIH1cblxuICAgIGlmKHRoaXMucGxheWxpc3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgWGhyTG9hZGVyKCk7XG4gICAgY29uc3QgdXJsID0gZnJhZy51cmw7XG4gICAgY29uc3QgbG9hZGVyQ29udGV4dCA9IHtcbiAgICAgIHVybCxcbiAgICAgIGZyYWc6IHRoaXMucGxheWxpc3QuYWRkRnJhZ21lbnQoZnJhZy5kdXJhdGlvbiwgdXJsKSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcbiAgICAgIHByb2dyZXNzRGF0YTogZmFsc2UsXG4gICAgICBsb2FkZXJcbiAgICB9O1xuICAgIGNvbnN0IGxvYWRlckNvbmZpZyA9IHtcbiAgICAgIHRpbWVvdXQ6IDYwLFxuICAgICAgbWF4UmV0cnk6IDAsXG4gICAgICByZXRyeURlbGF5OiAwLFxuICAgICAgbWF4UmV0cnlEZWxheTogM1xuICAgIH07XG5cbiAgICBjb25zdCBsb2FkZXJDYWxsYmFja3MgPSB7XG4gICAgICBvblN1Y2Nlc3M6IHRoaXMuZnJhZ21lbnRMb2FkZWQsXG4gICAgICAvLyBvbkVycm9yOiB0aGlzLmxvYWRlcnJvci5iaW5kKHRoaXMpLFxuICAgICAgLy8gb25UaW1lb3V0OiB0aGlzLmxvYWR0aW1lb3V0LmJpbmQodGhpcyksXG4gICAgICAvLyBvblByb2dyZXNzOiB0aGlzLmxvYWRwcm9ncmVzcy5iaW5kKHRoaXMpXG4gICAgfTtcbiAgICBsb2FkZXIubG9hZChsb2FkZXJDb250ZXh0LCBsb2FkZXJDb25maWcsIGxvYWRlckNhbGxiYWNrcyk7XG4gIH1cblxuICBpbml0UGxheWxpc3QobGV2ZWxJbmRleCkge1xuICAgIGNvbnN0IGhsc2pzID0gdGhpcy5wbHVnaW4uZ2V0SGxzSnMoKTtcbiAgICBjb25zdCBsZXZlbCA9IGhsc2pzLmxldmVsc1tsZXZlbEluZGV4XTtcbiAgICBpZighbGV2ZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBsYXlsaXN0ID0gbmV3IFBsYXlsaXN0TW9kZWwoe1xuICAgICAgaWQ6ICdyZWNvcmQtJyArIG5vd0luRm9ybWF0WW1kSGlzKCksXG4gICAgICB3aWR0aDogbGV2ZWwud2lkdGgsXG4gICAgICBoZWlnaHQ6IGxldmVsLmhlaWdodCxcbiAgICAgIHRhcmdldGR1cmF0aW9uOiBsZXZlbC5kZXRhaWxzLnRhcmdldGR1cmF0aW9uXG4gICAgfSk7XG4gIH1cblxuICBmcmFnbWVudExvYWRlZCA9IChyZXNwb25zZSwgc3RhdHMsIGNvbnRleHQsIG5ldHdvcmtEZXRhaWxzID0gbnVsbCkgPT4ge1xuICAgIGNvbnRleHQubG9hZGVyLmRlc3Ryb3koKTtcbiAgICBjb250ZXh0LmxvYWRlciA9IG51bGw7XG5cbiAgICB0aGlzLnBsdWdpbi5zdG9yYWdlQ29udHJvbGxlci5zYXZlRnJhZ21lbnQoY29udGV4dC5mcmFnLCByZXNwb25zZS5kYXRhLCBzdGF0cykudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnBsYXlsaXN0LmZyYWdtZW50U2F2ZWQoY29udGV4dC5mcmFnKTtcbiAgICAgIHRoaXMucGx1Z2luLnN0b3JhZ2VDb250cm9sbGVyLnNhdmVQbGF5bGlzdCh0aGlzLnBsYXlsaXN0KTtcbiAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoXCJSZWFsdGltZVJlY29yZENvbnRyb2xsZXIuanM6MTA0IC0gXCIpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5bGlzdC50b1N0cmluZygpKTtcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBobHNGcmFnbWVudExvYWRlZCA9IChldmVudCwgZGF0YSkgPT4ge1xuICAgIGlmKHRoaXMucmVjb3JkU3RhcnRlZCkge1xuICAgICAgdGhpcy5zYXZlRnJhZ21lbnQoZGF0YS5mcmFnKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWx0aW1lUmVjb3JkQ29udHJvbGxlcjtcbiIsImNvbnN0IERCX1ZFUlNJT04gPSAxO1xuY29uc3QgU1RPUkFHRV9XUklURV9NT0RFID0gJ3JlYWR3cml0ZSc7XG5jb25zdCBTVE9SQUdFX1JFQURfTU9ERSA9ICdyZWFkb25seSc7XG5cbmNsYXNzIFN0b3JhZ2VDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocGx1Z2luKSB7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgdGhpcy5kYiA9IG51bGw7XG4gIH1cblxuXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgb3BlblJlcXVlc3QgPSBpbmRleGVkREIub3Blbih0aGlzLnBsdWdpbi5vcHRpb25zLnN0b3JhZ2VEYk5hbWUsIERCX1ZFUlNJT04pO1xuICAgIG9wZW5SZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuZGIgPSBvcGVuUmVxdWVzdC5yZXN1bHQ7XG4gICAgICB0aGlzLmRiLmNyZWF0ZU9iamVjdFN0b3JlKHRoaXMucGx1Z2luLm9wdGlvbnMuc3RvcmFnZVBsYXlsaXN0c05hbWUsIHtrZXlQYXRoOiAnaWQnfSk7XG5cbiAgICAgIGNvbnN0IGZyYWdtZW50c1N0b3JhZ2UgPSB0aGlzLmRiLmNyZWF0ZU9iamVjdFN0b3JlKHRoaXMucGx1Z2luLm9wdGlvbnMuc3RvcmFnZUZyYWdtZW50c05hbWUsIHtrZXlQYXRoOiAndXVpZCd9KTtcbiAgICAgIGZyYWdtZW50c1N0b3JhZ2UuY3JlYXRlSW5kZXgoJ3BsYXlsaXN0SWQnLCAncGxheWxpc3RJZCcsIHt1bmlxdWU6IGZhbHNlfSk7XG4gICAgfTtcblxuICAgIG9wZW5SZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIHRoaXMuZGIgPSBvcGVuUmVxdWVzdC5yZXN1bHQ7XG4gICAgfTtcbiAgfVxuXG4gIGNoZWNrUmVxdWlyZW1lbnRzKCkge1xuICAgIHJldHVybiAnaW5kZXhlZERCJyBpbiB3aW5kb3c7XG4gIH1cblxuICAvL1RPRE86IG5lZWQgdG8gYWRkIGVycm9yIHByb2Nlc3NpbmdcbiAgc2F2ZUZyYWdtZW50KGZyYWdtZW50LCBwYXlsb2FkLCBzdGF0cykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYodGhpcy5kYiA9PT0gbnVsbCkge1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXMuZGIudHJhbnNhY3Rpb24odGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlRnJhZ21lbnRzTmFtZSwgU1RPUkFHRV9XUklURV9NT0RFKTtcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSh0aGlzLnBsdWdpbi5vcHRpb25zLnN0b3JhZ2VGcmFnbWVudHNOYW1lKTtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yYWdlLmFkZCh7XG4gICAgICAgIC4uLmZyYWdtZW50LFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgICBzdGF0c1xuICAgICAgfSk7XG5cbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXAoXCJjYWNoZS1kcml2ZXIuanM6MTcgLSBzdG9yZSAtIG9uc3VjY2Vzc1wiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgIH07XG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cChcImNhY2hlLWRyaXZlci5qczoxNyAtIHN0b3JlIC0gb25lcnJvclwiKTtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKHJlcXVlc3QpO1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICB9O1xuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vVE9ETzogbmVlZCB0byBhZGQgZXJyb3IgcHJvY2Vzc2luZ1xuICBzYXZlUGxheWxpc3QocGxheWxpc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmKHRoaXMuZGIgPT09IG51bGwpIHtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0aGlzLmRiLnRyYW5zYWN0aW9uKHRoaXMucGx1Z2luLm9wdGlvbnMuc3RvcmFnZVBsYXlsaXN0c05hbWUsIFNUT1JBR0VfV1JJVEVfTU9ERSk7XG4gICAgICBjb25zdCBzdG9yYWdlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlUGxheWxpc3RzTmFtZSk7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gc3RvcmFnZS5wdXQocGxheWxpc3QpO1xuXG4gICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwKFwiY2FjaGUtZHJpdmVyLmpzOjE3IC0gc3RvcmUgLSBvbnN1Y2Nlc3NcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3QpO1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICB9O1xuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXAoXCJjYWNoZS1kcml2ZXIuanM6MTcgLSBzdG9yZSAtIG9uZXJyb3JcIik7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybihyZXF1ZXN0KTtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgfTtcbiAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2VDb250cm9sbGVyO1xuIiwiaW1wb3J0IFJlY1NldHRpbmdzTW9kYWxIbHNKcyBmcm9tIFwiLi4vQ29tcG9uZW50cy9SZWNTZXR0aW5nc01vZGFsSGxzSnNcIjtcblxuY2xhc3MgVmlld0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihwbHVnaW4pIHtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcblxuICAgIHRoaXMucmVjQnV0dG9uQ29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLnN0b3BCdXR0b25Db21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLnByb2dyZXNzQ29udHJvbENvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5saXZlQnV0dG9uQ29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLmNhY2hlZEJ1dHRvbkNvbXBvbmVudCA9IG51bGw7XG5cblxuICAgIHRoaXMucmVjU2V0dGluZ3NNb2RhbENvbXBvbmVudCA9IG51bGw7XG5cbiAgICB0aGlzLmxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWMgPSBbXTtcbiAgfVxuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udHJvbEJhciA9IHRoaXMucGx1Z2luLnBsYXllci5nZXRDaGlsZCgnQ29udHJvbEJhcicpO1xuICAgIGNvbnN0IHNwYWNlID0gY29udHJvbEJhci5hZGRDaGlsZCgnQ29tcG9uZW50Jywge30sIDIpO1xuICAgIHNwYWNlLmFkZENsYXNzKCd2anMtaGxzanMtY29udHJvbHMtaG9sZGVyJyk7XG5cbiAgICB0aGlzLnJlbW92ZURlZmF1bHRDb250cm9scygpO1xuXG4gICAgdGhpcy5saXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjID0gdGhpcy5wbHVnaW4ub3B0aW9ucy5saXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjLm1hcCgoc2VsZWN0b3IpID0+IHtcbiAgICAgIHJldHVybiBjb250cm9sQmFyLmNoaWxkcmVuKCkuZmlsdGVyKGNvbXBvbmVudCA9PiBjb21wb25lbnQuaGFzQ2xhc3Moc2VsZWN0b3IpKVswXTtcbiAgICB9KS5maWx0ZXIoY29tcG9uZW50ID0+ICEhY29tcG9uZW50KTtcblxuICAgIHRoaXMuY2FjaGVkQnV0dG9uQ29tcG9uZW50ID0gc3BhY2UuYWRkQ2hpbGQoJ0NhY2hlZEJ1dHRvbkhsc0pzJywge1xuICAgICAgY2xpY2tIYW5kbGVyOiB0aGlzLmFjdGl2ZUxpdmVNb2RlXG4gICAgfSwgMSk7XG4gICAgdGhpcy5jYWNoZWRCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuXG4gICAgdGhpcy5saXZlQnV0dG9uQ29tcG9uZW50ID0gY29udHJvbEJhci5hZGRDaGlsZCgnTGl2ZUJ1dHRvbkhsc0pzJywge1xuICAgICAgY2xpY2tIYW5kbGVyOiB0aGlzLmFjdGl2YXRlUHJvZ3Jlc3NNb2RlXG4gICAgfSwgMik7XG4gICAgdGhpcy5saXZlQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcblxuICAgIHRoaXMucmVjQnV0dG9uQ29tcG9uZW50ID0gc3BhY2UuYWRkQ2hpbGQoJ1JlY0J1dHRvbkhsc0pzJywge1xuICAgICAgY2xpY2tIYW5kbGVyOiB0aGlzLnNob3dSZWNvcmRTZXR0aW5nc1xuICAgIH0sIDEpO1xuICAgIHRoaXMucmVjQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcblxuICAgIHRoaXMuc3RvcEJ1dHRvbkNvbXBvbmVudCA9IGNvbnRyb2xCYXIuYWRkQ2hpbGQoJ1N0b3BCdXR0b25IbHNKcycsIHtcbiAgICAgIGNsaWNrSGFuZGxlcjogdGhpcy5wbHVnaW4uc3RvcFJlYWx0aW1lUmVjb3JkXG4gICAgfSwgMSk7XG4gICAgdGhpcy5zdG9wQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcblxuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50ID0gc3BhY2UuYWRkQ2hpbGQoJ1JlY1N0YXR1c0Jhckhsc0pzJywgMSk7XG4gICAgdGhpcy5yZWNTdGF0dXNCYXJDb21wb25lbnQuaGlkZSgpO1xuXG4gICAgdGhpcy5wcm9ncmVzc0NvbnRyb2xDb21wb25lbnQgPSBzcGFjZS5hZGRDaGlsZCgnUHJvZ3Jlc3NDb250cm9sSGxzSnMnLCB7fSwgMik7XG4gICAgdGhpcy5wcm9ncmVzc0NvbnRyb2xDb21wb25lbnQuaGlkZSgpO1xuXG4gICAgdGhpcy5hY3RpdmVMaXZlTW9kZSgpO1xuICB9O1xuXG4gIHJlbW92ZURlZmF1bHRDb250cm9scyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250cm9sQmFyID0gdGhpcy5wbHVnaW4ucGxheWVyLmdldENoaWxkKCdDb250cm9sQmFyJyk7XG4gICAgY29udHJvbEJhci5yZW1vdmVDaGlsZCgnUHJvZ3Jlc3NDb250cm9sJyk7XG4gICAgY29udHJvbEJhci5yZW1vdmVDaGlsZCgnU2Vla1RvTGl2ZScpO1xuICAgIGNvbnRyb2xCYXIucmVtb3ZlQ2hpbGQoJ0xpdmVEaXNwbGF5Jyk7XG4gIH07XG5cbiAgYWN0aXZlTGl2ZU1vZGUgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc2hvd090aGVyQ29udHJvbCgpO1xuICAgICAgdGhpcy5zaG93TGl2ZUNvbnRyb2woKTtcbiAgICAgIHRoaXMuaGlkZVByb2dyZXNzQ29udHJvbCgpO1xuICAgICAgdGhpcy5oaWRlUmVjQ29udHJvbCgpO1xuICAgICAgdGhpcy5wbHVnaW4ucGxheWVyLmxpdmVUcmFja2VyLnNlZWtUb0xpdmVFZGdlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5wbHVnaW4ucGxheWVyLmxvZy53YXJuKGUubWVzc2FnZSlcbiAgICB9XG4gIH07XG5cbiAgYWN0aXZhdGVQcm9ncmVzc01vZGUgPSAoKSA9PiB7XG4gICAgaWYodGhpcy5wbHVnaW4uc3RhdGUucmVjb3JkSW5Qcm9jZXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2hvd090aGVyQ29udHJvbCgpO1xuICAgIHRoaXMuc2hvd1Byb2dyZXNzQ29udHJvbCgpO1xuICAgIHRoaXMuaGlkZUxpdmVDb250cm9sKCk7XG4gICAgdGhpcy5oaWRlUmVjQ29udHJvbCgpO1xuICB9O1xuXG4gIHNob3dSZWNvcmRTZXR0aW5ncyA9ICgpID0+IHtcbiAgICB0aGlzLnJlY1NldHRpbmdzTW9kYWxDb21wb25lbnQgPSBuZXcgUmVjU2V0dGluZ3NNb2RhbEhsc0pzKHRoaXMucGx1Z2luLnBsYXllciwge1xuXG4gICAgfSk7XG4gICAgdGhpcy5wbHVnaW4ucGxheWVyLmFkZENoaWxkKHRoaXMucmVjU2V0dGluZ3NNb2RhbENvbXBvbmVudCk7XG4gICAgdGhpcy5yZWNTZXR0aW5nc01vZGFsQ29tcG9uZW50Lm9wZW4oKTtcblxuXG4gICAgY29uc29sZS5ncm91cChcInBsdWdpbi5qczoxMDggLSBzaG93UmVjb3JkU2V0dGluZ3NcIik7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgIC8vIHRoaXMuYWN0aXZhdGVSZWNvcmRNb2RlKCk7XG4gIH07XG5cbiAgYWN0aXZhdGVSZWNvcmRNb2RlID0gKCkgPT4ge1xuICAgIHRoaXMucmVjU2V0dGluZ3NNb2RhbENvbXBvbmVudC5jbG9zZSgpO1xuICAgIHRoaXMuaGlkZVByb2dyZXNzQ29udHJvbCgpO1xuICAgIHRoaXMuaGlkZUxpdmVDb250cm9sKCk7XG4gICAgdGhpcy5oaWRlT3RoZXJDb250cm9sKCk7XG4gICAgdGhpcy5zaG93UmVjQ29udHJvbCgpO1xuICB9O1xuXG4gIHNob3dSZWNDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMucGx1Z2luLnBsYXllci5hZGRDbGFzcygndmpzLWhsc2pzLXJlY29yZC1zdGFydGVkJyk7XG4gICAgdGhpcy5yZWNTdGF0dXNCYXJDb21wb25lbnQudXBkYXRlUmVjb3JkVGltZSgwKTtcbiAgICBsZXQgYSA9IDE7XG4gICAgdGhpcy5yZWNvcmRVcGRhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50LnVwZGF0ZVJlY29yZFRpbWUoYSsrKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuc3RvcEJ1dHRvbkNvbXBvbmVudC5zaG93KCk7XG4gICAgdGhpcy5yZWNTdGF0dXNCYXJDb21wb25lbnQuc2hvdygpO1xuICB9O1xuXG4gIGhpZGVSZWNDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMucGx1Z2luLnBsYXllci5yZW1vdmVDbGFzcygndmpzLWhsc2pzLXJlY29yZC1zdGFydGVkJyk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnJlY29yZFVwZGF0ZUludGVydmFsKTtcbiAgICB0aGlzLnN0b3BCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50LmhpZGUoKTtcbiAgfTtcblxuICBzaG93UHJvZ3Jlc3NDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMucHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50LnNob3coKTtcbiAgICB0aGlzLmNhY2hlZEJ1dHRvbkNvbXBvbmVudC5zaG93KCk7XG4gIH07XG5cbiAgaGlkZVByb2dyZXNzQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLnByb2dyZXNzQ29udHJvbENvbXBvbmVudC5oaWRlKCk7XG4gICAgdGhpcy5jYWNoZWRCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuICB9O1xuXG4gIGhpZGVPdGhlckNvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5saXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudC5hZGRDbGFzcygndmpzLWhsc2pzLWxyLWhpZGRlbicpKTtcbiAgfTtcblxuICBzaG93T3RoZXJDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMubGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQucmVtb3ZlQ2xhc3MoJ3Zqcy1obHNqcy1sci1oaWRkZW4nKSk7XG4gIH07XG5cblxuICBzaG93TGl2ZUNvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5saXZlQnV0dG9uQ29tcG9uZW50LnNob3coKTtcbiAgICB0aGlzLnJlY0J1dHRvbkNvbXBvbmVudC5zaG93KCk7XG4gIH07XG5cbiAgaGlkZUxpdmVDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMubGl2ZUJ1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG4gICAgdGhpcy5yZWNCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuICB9O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdDb250cm9sbGVyO1xuIiwiaW1wb3J0IHtmYWNlVVVJRH0gZnJvbSBcIi4uL3V0aWxzL3V1aWRcIjtcblxuZXhwb3J0IGNsYXNzIEZyYWdtZW50TW9kZWwge1xuICBjb25zdHJ1Y3RvcihmcmFnbWVudERhdGEpIHtcbiAgICB0aGlzLmR1cmF0aW9uID0gZnJhZ21lbnREYXRhLmR1cmF0aW9uIHx8IDA7XG4gICAgdGhpcy51cmwgPSBmcmFnbWVudERhdGEudXJsIHx8ICcnO1xuICAgIHRoaXMucGxheWxpc3RJZCA9IGZyYWdtZW50RGF0YS5wbGF5bGlzdElkIHx8ICd0bXAnO1xuICAgIHRoaXMudXVpZCA9IGZhY2VVVUlEKHRoaXMucGxheWxpc3RJZCArICctJyArIHRoaXMudXJsLnNwbGl0KCcvJykucG9wKCkpO1xuICAgIHRoaXMuc2F2ZWQgPSBmcmFnbWVudERhdGEuc2F2ZWQgfHwgZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7RnJhZ21lbnRNb2RlbH0gZnJvbSBcIi4vRnJhZ21lbnRcIjtcblxuY29uc3QgY3JlYXRlUGxheWxpc3RIZWFkZXIgPSAodGFyZ2V0ZHVyYXRpb24pID0+IHtcbiAgcmV0dXJuIFwiI0VYVE0zVVxcblwiICtcbiAgICBcIiNFWFQtWC1WRVJTSU9OOjRcXG5cIiArXG4gICAgXCIjRVhULVgtVEFSR0VURFVSQVRJT046XCIgKyB0YXJnZXRkdXJhdGlvbiArIFwiXFxuXCIgK1xuICAgIFwiI0VYVC1YLU1FRElBLVNFUVVFTkNFOjBcXG5cIjtcbn07XG5jb25zdCBhZGRQbGF5bGlzdEZyYWdtZW50ID0gKGR1cmFjdGlvbiwgdXJsKSA9PiB7XG5yZXR1cm4gXCIjRVhUSU5GOlwiICsgZHVyYWN0aW9uICsgXCIsXFxuXCIgK1xuICB1cmwgKyBcIlxcblwiO1xufTtcbmNvbnN0IGNyZWF0ZVBsYXlsaXN0Rm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gXCIjRVhULVgtRU5ETElTVFxcblwiO1xufTtcblxuXG5leHBvcnQgY2xhc3MgUGxheWxpc3RNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKHBsYXlsaXN0RGF0YSkge1xuICAgIHRoaXMuaWQgPSBwbGF5bGlzdERhdGEuaWQgfHwgJyc7XG4gICAgdGhpcy53aWR0aCA9IHBsYXlsaXN0RGF0YS53aWR0aCB8fCAzODQ7XG4gICAgdGhpcy5oZWlnaHQgPSBwbGF5bGlzdERhdGEuaGVpZ2h0IHx8IDM4NDtcbiAgICB0aGlzLmZyYWdtZW50cyA9IHBsYXlsaXN0RGF0YS5mcmFnbWVudHMgfHwgW107XG4gICAgdGhpcy50YXJnZXRkdXJhdGlvbiA9IHBsYXlsaXN0RGF0YS50YXJnZXRkdXJhdGlvbiB8fCAwO1xuICB9XG5cbiAgYWRkRnJhZ21lbnQoZHVyYXRpb24sIHVybCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gbmV3IEZyYWdtZW50TW9kZWwoe2R1cmF0aW9uLCB1cmx9KTtcbiAgICB0aGlzLmZyYWdtZW50cy5wdXNoKGZyYWdtZW50KTtcbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH1cblxuICBmcmFnbWVudFNhdmVkKGZyYWdtZW50KSB7XG4gICAgdGhpcy5mcmFnbWVudHMgPSB0aGlzLmZyYWdtZW50cy5tYXAoKGZyYWcpID0+IHtcbiAgICAgIGlmKGZyYWcudXVpZCA9PT0gZnJhZ21lbnQudXVpZCkge1xuICAgICAgICBmcmFnLnNhdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcmFnO1xuICAgIH0pXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gY3JlYXRlUGxheWxpc3RIZWFkZXIodGhpcy50YXJnZXRkdXJhdGlvbikgK1xuICAgICAgKHRoaXMuZnJhZ21lbnRzLmZpbHRlcihmcmFnbWVudCA9PiAoZnJhZ21lbnQuc2F2ZWQpKVxuICAgICAgICAubWFwKGZyYWdtZW50ID0+IChhZGRQbGF5bGlzdEZyYWdtZW50KGZyYWdtZW50LmR1cmF0aW9uLCBmcmFnbWVudC51dWlkKSkpLmpvaW4oJycpKSArXG4gICAgICBjcmVhdGVQbGF5bGlzdEZvb3RlcigpO1xuICB9XG59XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbmNvbnN0IFZpZGVvSnNCdXR0b25DbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FjaGVkQnV0dG9uSGxzSnMgZXh0ZW5kcyBWaWRlb0pzQnV0dG9uQ2xhc3Mge1xuICBcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucykpO1xuXG4gICAgY29uc29sZS5ncm91cChcIkNhY2hlZEJ1dHRvbkhsc0pzLmpzOjIzIC0gY29uc3RydWN0b3JcIik7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICB9XG5cbiAgY3JlYXRlRWwodGFnLCBwcm9wcyA9IHt9LCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICB0aGlzLm5vbkljb25Db250cm9sID0gdHJ1ZTtcblxuICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAvLyBjbGFzc05hbWU6ICd2anMtbGl2ZS1kaXNwbGF5JyxcbiAgICAgIC8vIGlubmVySFRNTDogJ0RWUicsXG4gICAgICBjbGFzc05hbWU6ICd2anMtc2Vlay10by1saXZlLWNvbnRyb2wnLFxuICAgICAgaW5uZXJIVE1MOiAnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ2anMtaWNvbi1wbGFjZWhvbGRlclwiPjwvc3Bhbj5MSVZFJyxcbiAgICB9LCBwcm9wcyk7XG5cbiAgICBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYXJpYS1saXZlJzogJ09uJ1xuICAgIH0sIGF0dHJpYnV0ZXMpO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKHRhZywgcHJvcHMsIGF0dHJpYnV0ZXMpO1xuICB9XG5cbiAgY3JlYXRlQ29udHJvbFRleHRFbChlbCkge1xuICAgIHRoaXMuY29udHJvbFRleHRfID0gJ1N0cmVhbSBUeXBlJztcbiAgICBzdXBlci5jcmVhdGVDb250cm9sVGV4dEVsKGVsKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbmNvbnN0IFZpZGVvSnNCdXR0b25DbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZUJ1dHRvbkhsc0pzIGV4dGVuZHMgVmlkZW9Kc0J1dHRvbkNsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucykpO1xuXG4gICAgY29uc29sZS5ncm91cChcIkxpdmVCdXR0b25IbHNKcy5qczoyNSAtIGNvbnN0cnVjdG9yXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKHRhZywgcHJvcHMgPSB7fSwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgdGhpcy5ub25JY29uQ29udHJvbCA9IHRydWU7XG5cbiAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWNvbnRyb2wgdmpzLXNlZWstdG8tbGl2ZS1jb250cm9sIHZqcy1hdC1saXZlLWVkZ2UnLFxuICAgICAgaW5uZXJIVE1MOiAnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ2anMtaWNvbi1wbGFjZWhvbGRlclwiPjwvc3Bhbj5MSVZFJyxcbiAgICB9LCBwcm9wcyk7XG5cbiAgICBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYXJpYS1saXZlJzogJ29mZidcbiAgICB9LCBhdHRyaWJ1dGVzKTtcblxuICAgIHJldHVybiBzdXBlci5jcmVhdGVFbCh0YWcsIHByb3BzLCBhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpIHtcbiAgICB0aGlzLmNvbnRyb2xUZXh0XyA9ICdTdHJlYW0gVHlwZSc7XG4gICAgc3VwZXIuY3JlYXRlQ29udHJvbFRleHRFbChlbCk7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzUHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ1Byb2dyZXNzQ29udHJvbCcpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQ29udHJvbEhsc0pzIGV4dGVuZHMgVmlkZW9Kc1Byb2dyZXNzQ29udHJvbENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gICAgY29uc29sZS5ncm91cChcIlByb2dyZXNzQ29udHJvbEhsc0pzLmpzOjEzIC0gY29uc3RydWN0b3JcIik7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICB9XG59XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbmNvbnN0IFZpZGVvSnNCdXR0b25DbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjQnV0dG9uSGxzSnMgZXh0ZW5kcyBWaWRlb0pzQnV0dG9uQ2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKSk7XG5cbiAgICBjb25zb2xlLmdyb3VwKFwiUmVjQnV0dG9uSGxzSnMuanM6MjUgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gIH1cblxuICBjcmVhdGVFbCh0YWcsIHByb3BzID0ge30sIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIHRoaXMubm9uSWNvbkNvbnRyb2wgPSB0cnVlO1xuXG4gICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1jb250cm9sIHZqcy1zZWVrLXRvLWxpdmUtY29udHJvbCcsXG4gICAgICBpbm5lckhUTUw6ICc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cInZqcy1pY29uLXBsYWNlaG9sZGVyXCI+PC9zcGFuPlJFQycsXG4gICAgfSwgcHJvcHMpO1xuXG4gICAgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2FyaWEtbGl2ZSc6ICdPbidcbiAgICB9LCBhdHRyaWJ1dGVzKTtcblxuICAgIHJldHVybiBzdXBlci5jcmVhdGVFbCh0YWcsIHByb3BzLCBhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpIHtcbiAgICB0aGlzLmNvbnRyb2xUZXh0XyA9ICdTdGFydCBSZWNvcmQnO1xuICAgIHN1cGVyLmNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcbmltcG9ydCBmb3JtYXRUaW1lIGZyb20gJy4uL3V0aWxzL2Zvcm1hdC10aW1lJztcblxuY29uc3QgVmlkZW9Kc0NvbXBvbmVudENsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNTdGF0dXNCYXJIbHNKcyBleHRlbmRzIFZpZGVvSnNDb21wb25lbnRDbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKCkge1xuICAgIHRoaXMubm9uSWNvbkNvbnRyb2wgPSB0cnVlO1xuICAgIGNvbnN0IGVsZW0gPSBzdXBlci5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWNvbnRyb2wgdmpzLWhsc2pzLWxyLXJlYy1zdGF0dXMtYmFyJyxcbiAgICAgIGlubmVySFRNTDogJzxzcGFuIGNsYXNzPVwidmpzLWhsc2pzLWxyLXJlYy1pbmRpY2F0b3JcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kLTEwXCI+ZmliZXJfbWFudWFsX3JlY29yZDwvaT5SRUM8L3NwYW4+J1xuICAgIH0pO1xuXG5cbiAgICB0aGlzLnJlY29yZGVkRWxfID0gRG9tLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLWxyLXJlY29yZGVkJyxcbiAgICAgIGlubmVyVGV4dDogJy0tOi0tOi0tJ1xuICAgIH0sIHtcbiAgICAgICdhcmlhLWxpdmUnOiAnb2ZmJyxcbiAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcbiAgICB9KTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKHRoaXMucmVjb3JkZWRFbF8pO1xuXG4gICAgZWxlbS5hcHBlbmRDaGlsZChcbiAgICAgIERvbS5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLWxyLWRpdmlkZXInLFxuICAgICAgICBpbm5lclRleHQ6ICcvJ1xuICAgICAgfSwge1xuICAgICAgICAnYXJpYS1saXZlJzogJ29mZicsXG4gICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMucmVjb3JkTGVmdEVsXyA9IERvbS5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1sci1yZWNvcmQtbGVmdCcsXG4gICAgICBpbm5lclRleHQ6ICctLTotLTotLSdcbiAgICB9LCB7XG4gICAgICAnYXJpYS1saXZlJzogJ29mZicsXG4gICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgfSk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnJlY29yZExlZnRFbF8pO1xuXG4gICAgdGhpcy51cGRhdGVSZWNvcmRUaW1lKDApO1xuICAgIHRoaXMudXBkYXRlUmVjb3JkTGVmdFRpbWUoNjAgKiA2MCk7XG4gICAgcmV0dXJuIGVsZW07XG4gIH07XG5cbiAgdXBkYXRlUmVjb3JkVGltZSh0aW1lKSB7XG4gICAgaWYodGhpcy5yZWNvcmRlZEVsXykge1xuICAgICAgdGhpcy5yZWNvcmRlZEVsXy5pbm5lclRleHQgPSBmb3JtYXRUaW1lKHRpbWUpO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGVSZWNvcmRMZWZ0VGltZSh0aW1lKSB7XG4gICAgaWYodGhpcy5yZWNvcmRMZWZ0RWxfKSB7XG4gICAgICB0aGlzLnJlY29yZExlZnRFbF8uaW5uZXJUZXh0ID0gZm9ybWF0VGltZSh0aW1lKTtcbiAgICB9XG4gIH07XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLnJlY29yZGVkRWxfID0gbnVsbDtcbiAgICB0aGlzLnJlY29yZExlZnRFbF8gPSBudWxsO1xuXG4gICAgc3VwZXIuZGlzcG9zZSgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuY29uc3QgVmlkZW9Kc0J1dHRvbkNsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9wQnV0dG9uSGxzSnMgZXh0ZW5kcyBWaWRlb0pzQnV0dG9uQ2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKSk7XG5cbiAgICBjb25zb2xlLmdyb3VwKFwiU3RvcEJ1dHRvbkhsc0pzLmpzOjI1IC0gY29uc3RydWN0b3JcIik7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICB9XG5cbiAgY3JlYXRlRWwodGFnLCBwcm9wcyA9IHt9LCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICB0aGlzLm5vbkljb25Db250cm9sID0gZmFsc2U7XG5cbiAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWNvbnRyb2wgdmpzLWhsc2pzLWxyLXN0b3AnLFxuICAgICAgaW5uZXJIVE1MOiAnPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnN0b3A8L2k+JyxcbiAgICB9LCBwcm9wcyk7XG5cbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlRWwodGFnLCBwcm9wcywgYXR0cmlidXRlcyk7XG4gIH1cblxuICBjcmVhdGVDb250cm9sVGV4dEVsKGVsKSB7XG4gICAgdGhpcy5jb250cm9sVGV4dF8gPSAnU3RvcCBSZWNvcmQnO1xuICAgIHN1cGVyLmNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCAnLi9wbHVnaW4uc2Nzcyc7XG5pbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5jb25zdCBQbHVnaW4gPSB2aWRlb2pzLmdldFBsdWdpbigncGx1Z2luJyk7XG5pbXBvcnQge3ZlcnNpb24gYXMgVkVSU0lPTn0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcbmltcG9ydCBQcm9ncmVzc0NvbnRyb2xIbHNKcyBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2dyZXNzQ29udHJvbEhsc0pzXCI7XG5pbXBvcnQgTGl2ZUJ1dHRvbkhsc0pzIGZyb20gXCIuL2NvbXBvbmVudHMvTGl2ZUJ1dHRvbkhsc0pzXCI7XG5pbXBvcnQgQ2FjaGVkQnV0dG9uSGxzSnMgZnJvbSBcIi4vY29tcG9uZW50cy9DYWNoZWRCdXR0b25IbHNKc1wiO1xuaW1wb3J0IFJlY0J1dHRvbkhsc0pzIGZyb20gXCIuL2NvbXBvbmVudHMvUmVjQnV0dG9uSGxzSnNcIjtcbmltcG9ydCBTdG9wQnV0dG9uSGxzSnMgZnJvbSBcIi4vY29tcG9uZW50cy9TdG9wQnV0dG9uSGxzSnNcIjtcbmltcG9ydCBSZWNTdGF0dXNCYXJIbHNKcyBmcm9tIFwiLi9jb21wb25lbnRzL1JlY1N0YXR1c0Jhckhsc0pzXCI7XG5pbXBvcnQgVmlld0NvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvVmlld0NvbnRyb2xsZXJcIjtcbmltcG9ydCBTdG9yYWdlQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVycy9TdG9yYWdlQ29udHJvbGxlclwiO1xuaW1wb3J0IFJlYWx0aW1lUmVjb3JkQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVycy9SZWFsdGltZVJlY29yZENvbnRyb2xsZXJcIjtcblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIGxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWM6IFsndmpzLXBsYXktY29udHJvbCcsICd2anMtcXVhbGl0eS1zZWxlY3RvciddLFxuICBzdG9yYWdlRGJOYW1lOiAndmpzLWhsc2pzLWxyJyxcbiAgc3RvcmFnZVBsYXlsaXN0c05hbWU6ICdwbGF5bGlzdHMnLFxuICBzdG9yYWdlRnJhZ21lbnRzTmFtZTogJ2ZyYWdtZW50cycsXG59O1xuXG5jbGFzcyBIbHNKU0xpdmVSZWNvcmRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLnZpZXdDb250cm9sbGVyID0gbmV3IFZpZXdDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMuc3RvcmFnZUNvbnRyb2xsZXIgPSBuZXcgU3RvcmFnZUNvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy5yZWFsdGltZVJlY29yZENvbnRyb2xsZXIgPSBuZXcgUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gdmlkZW9qcy5tZXJnZU9wdGlvbnMoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgcGxheWVyLm9uKCdyZWFkeScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICBpZih0aGlzLmNoZWNrUmVxdWlyZW1lbnRzKCkpIHtcbiAgICAgIHRoaXMucGxheWVyLmFkZENsYXNzKCd2anMtaGxzLWxpdmUtcmVjb3JkJyk7XG4gICAgICB0aGlzLnBsYXllci5vbigncGF1c2UnLCB0aGlzLnZpZXdDb250cm9sbGVyLmFjdGl2YXRlUHJvZ3Jlc3NNb2RlKTtcbiAgICAgIHRoaXMudmlld0NvbnRyb2xsZXIuaW5pdCgpO1xuICAgICAgdGhpcy5zdG9yYWdlQ29udHJvbGxlci5pbml0KCk7XG4gICAgICB0aGlzLnJlYWx0aW1lUmVjb3JkQ29udHJvbGxlci5pbml0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvanMubG9nLndhcm4oJ0hsc0pTTGl2ZVJlY29yZFBsdWdpbjogY2Fubm90IGJlIGluaXRpYWxpemVkIGJlY2F1c2Ugb25lIG9yIG1vcmUgb2YgdGhlIHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldC4nKTtcbiAgICB9XG4gIH07XG5cbiAgY2hlY2tSZXF1aXJlbWVudHMgPSAoKSA9PiB7XG4gICAgaWYoIXRoaXMuZ2V0SGxzSnMoKSkge1xuICAgICAgdmlkZW9qcy5sb2cud2FybignSGxzSlNMaXZlUmVjb3JkUGx1Z2luOiBITFMuSlMgcGx1Z2luIG5vdCBmb3VuZC4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5zdG9yYWdlQ29udHJvbGxlci5jaGVja1JlcXVpcmVtZW50cygpKSB7XG4gICAgICB2aWRlb2pzLmxvZy53YXJuKCdIbHNKU0xpdmVSZWNvcmRQbHVnaW46IFRoaXMgYnJvd3NlciBkb2VzblxcJ3Qgc3VwcG9ydCBJbmRleGVkREIuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGdldEhsc0pzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnBsYXllci50ZWNoKHsgSVdpbGxVc2VUaGlzSW5QbHVnaW46IHRydWUgfSkuc291cmNlSGFuZGxlcl8uaGxzO1xuICB9O1xuXG4gIHN0YXJ0UmVhbHRpbWVSZWNvcmQobGV2ZWxJZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVjb3JkSW5Qcm9jZXNzOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmdldEhsc0pzKCkuY3VycmVudExldmVsID0gbGV2ZWxJZCAqIDE7XG4gICAgdGhpcy52aWV3Q29udHJvbGxlci5hY3RpdmF0ZVJlY29yZE1vZGUoKTtcbiAgICB0aGlzLnJlYWx0aW1lUmVjb3JkQ29udHJvbGxlci5zdGFydFJlY29yZCgpO1xuXG4gICAgLy8gY29uc29sZS5ncm91cChcInBsdWdpbi5qczoyMDMgLSBzdGFydFJlYWx0aW1lUmVjb3JkXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIC8vIGNvbnNvbGUubG9nKGxldmVsSWQpO1xuICAgIC8vIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgfVxuXG4gIHN0b3BSZWFsdGltZVJlY29yZCA9ICgpID0+IHtcbiAgICB0aGlzLnJlYWx0aW1lUmVjb3JkQ29udHJvbGxlci5zdG9wUmVjb3JkKCk7XG4gICAgdGhpcy52aWV3Q29udHJvbGxlci5hY3RpdmVMaXZlTW9kZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVjb3JkSW5Qcm9jZXNzOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMuZ2V0SGxzSnMoKS5jdXJyZW50TGV2ZWwgPSAtMTtcbiAgfTtcblxuICBoYW5kbGVTdGF0ZUNoYW5nZWQoZSkge1xuXG4gIH1cbn1cblxuSGxzSlNMaXZlUmVjb3JkUGx1Z2luLlZFUlNJT04gPSBWRVJTSU9OO1xuXG5IbHNKU0xpdmVSZWNvcmRQbHVnaW4uZGVmYXVsdFN0YXRlID0ge1xuICByZWNvcmRBbGxvd2VkOiB0cnVlLFxuICByZWNvcmRJblByb2Nlc3M6IGZhbHNlXG59O1xuXG52aWRlb2pzLnJlZ2lzdGVyUGx1Z2luKCdobHNKU0xpdmVSZWNvcmQnLCBIbHNKU0xpdmVSZWNvcmRQbHVnaW4pO1xudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnUHJvZ3Jlc3NDb250cm9sSGxzSnMnLCBQcm9ncmVzc0NvbnRyb2xIbHNKcyk7XG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdMaXZlQnV0dG9uSGxzSnMnLCBMaXZlQnV0dG9uSGxzSnMpO1xudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnQ2FjaGVkQnV0dG9uSGxzSnMnLCBDYWNoZWRCdXR0b25IbHNKcyk7XG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdSZWNCdXR0b25IbHNKcycsIFJlY0J1dHRvbkhsc0pzKTtcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ1N0b3BCdXR0b25IbHNKcycsIFN0b3BCdXR0b25IbHNKcyk7XG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdSZWNTdGF0dXNCYXJIbHNKcycsIFJlY1N0YXR1c0Jhckhsc0pzKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIE1hdGVyaWFsIGljb25zICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29ucy92NDgvZmxVaFJxNnR6WmNsUUVKLVZkZy1JdWlhRHNOYy53b2ZmMikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpOyB9XFxuXFxuLm1hdGVyaWFsLWljb25zIHtcXG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxuICAtd2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7IH1cXG5cXG4vKiBSdWxlcyBmb3Igc2l6aW5nIHRoZSBpY29uLiAqL1xcbi5tYXRlcmlhbC1pY29ucy5tZC04IHtcXG4gIGZvbnQtc2l6ZTogOXB4OyB9XFxuXFxuLm1hdGVyaWFsLWljb25zLm1kLTEwIHtcXG4gIGZvbnQtc2l6ZTogMTBweDsgfVxcblxcbi5tYXRlcmlhbC1pY29ucy5tZC0xMiB7XFxuICBmb250LXNpemU6IDEycHg7IH1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMubWQtMTgge1xcbiAgZm9udC1zaXplOiAxOHB4OyB9XFxuXFxuLm1hdGVyaWFsLWljb25zLm1kLTI0IHtcXG4gIGZvbnQtc2l6ZTogMjRweDsgfVxcblxcbi5tYXRlcmlhbC1pY29ucy5tZC0zNiB7XFxuICBmb250LXNpemU6IDM2cHg7IH1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMubWQtNDgge1xcbiAgZm9udC1zaXplOiA0OHB4OyB9XFxuXFxuLyogUnVsZXMgZm9yIHVzaW5nIGljb25zIGFzIGJsYWNrIG9uIGEgbGlnaHQgYmFja2dyb3VuZC4gKi9cXG4ubWF0ZXJpYWwtaWNvbnMubWQtZGFyayB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxcblxcbi5tYXRlcmlhbC1pY29ucy5tZC1kYXJrLm1kLWluYWN0aXZlIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpOyB9XFxuXFxuLyogUnVsZXMgZm9yIHVzaW5nIGljb25zIGFzIHdoaXRlIG9uIGEgZGFyayBiYWNrZ3JvdW5kLiAqL1xcbi5tYXRlcmlhbC1pY29ucy5tZC1saWdodCB7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQubWQtaW5hY3RpdmUge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTsgfVxcblxcbi8qIEVuZCBtYXRlcmlhbCBpY29ucyAqL1xcbjpyb290IHtcXG4gIC0tbWFpbi1jb2xvcjogcmVkO1xcbiAgLS1iYXNlLWZvbnQtc2l6ZTogOTtcXG4gIC0tZm9udC1zaXplOiA3OyB9XFxuXFxuLnZpZGVvLWpzIC52anMtaGxzanMtZm9ybS1ncm91cCB7XFxuICBwYWRkaW5nOiA1cHggMDsgfVxcbiAgLnZpZGVvLWpzIC52anMtaGxzanMtZm9ybS1ncm91cCAudmpzLWhsc2pzLWZvcm0tbGFiZWwge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4OyB9XFxuICAudmlkZW8tanMgLnZqcy1obHNqcy1mb3JtLWdyb3VwIC52anMtaGxzanMtZm9ybS1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi52aWRlby1qcyAudmpzLWhsc2pzLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyOiAwLjA2NjY2ZW0gc29saWQgI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQjMzM0Y7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA1MSwgNjMsIDAuNyk7XFxuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzOyB9XFxuICAudmlkZW8tanMgLnZqcy1obHNqcy1idXR0b246ZGlzYWJsZWQsIC52aWRlby1qcyAudmpzLWhsc2pzLWJ1dHRvbi5kaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNjsgfVxcblxcbi52aWRlby1qcyAudmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTsgfVxcblxcbi52aWRlby1qcyAudmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2IHtcXG4gIHdpZHRoOiAxNDBweDtcXG4gIGZsZXg6IDE0MHB4IDA7XFxuICBmbGV4LXNocmluazogMDsgfVxcblxcbi52aWRlby1qcyAudmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2LWVsZW0ge1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuICAudmlkZW8tanMgLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLW5hdi1lbGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IH1cXG4gIC52aWRlby1qcyAudmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2LWVsZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5OyB9XFxuXFxuLnZpZGVvLWpzIC52anMtaGxzanMtdmVydGljYWwtdGFicy1ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDsgfVxcblxcbi52aWRlby1qcyAudmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtZWxlbSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogMTBweDsgfVxcbiAgLnZpZGVvLWpzIC52anMtaGxzanMtdmVydGljYWwtdGFicy1lbGVtLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLnZpZGVvLWpzIC52anMtaGxzanMtbHItcmVjLXNldHRpbmdzLnZqcy1tb2RhbC1kaWFsb2cgLnZqcy1tb2RhbC1kaWFsb2ctY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLnZpZGVvLWpzIC52anMtaGxzanMtbHItcmVjLXNldHRpbmdzLnZqcy1tb2RhbC1kaWFsb2cgLnZqcy1obHNqcy1zdGFydC1yZWNvcmQge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7IH1cXG5cXG4udmlkZW8tanMudmpzLWhsc2pzLXJlY29yZC1zdGFydGVkIC52anMtdGVjaCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xcbiAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4udmlkZW8tanMgLnZqcy1obHNqcy1sci1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLnZpZGVvLWpzLnZqcy1obHNqcy1saXZlLXJlY29yZCB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLnZpZGVvLWpzLnZqcy1obHNqcy1saXZlLXJlY29yZC52anMtdXNlci1pbmFjdGl2ZSAudmpzLWNvbnRyb2wtYmFyIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcblxcbi52aWRlby1qcyAudmpzLWhsc2pzLWxyLXN0b3Age1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnZpZGVvLWpzIC52anMtaGxzanMtY29udHJvbHMtaG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiBhdXRvO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyB9XFxuICAudmlkZW8tanMgLnZqcy1obHNqcy1jb250cm9scy1ob2xkZXIgLnZqcy1saXZlLWRpc3BsYXkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC52aWRlby1qcyAudmpzLWhsc2pzLWNvbnRyb2xzLWhvbGRlciAudmpzLWNvbnRyb2wudmpzLWF0LWxpdmUtZWRnZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLnZpZGVvLWpzIC52anMtaGxzanMtY29udHJvbHMtaG9sZGVyIC52anMtcHJvZ3Jlc3MtY29udHJvbCAudmpzLWxvYWQtcHJvZ3Jlc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjgzNzAwOyB9XFxuICAgIC52aWRlby1qcyAudmpzLWhsc2pzLWNvbnRyb2xzLWhvbGRlciAudmpzLXByb2dyZXNzLWNvbnRyb2wgLnZqcy1sb2FkLXByb2dyZXNzIGRpdiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMTc3LCAxMDYsIDAuOTUpOyB9XFxuICAudmlkZW8tanMgLnZqcy1obHNqcy1jb250cm9scy1ob2xkZXIgLnZqcy1wcm9ncmVzcy1jb250cm9sOmhvdmVyIC52anMtbG9hZC1wcm9ncmVzcyB7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7IH1cXG4gIC52aWRlby1qcyAudmpzLWhsc2pzLWNvbnRyb2xzLWhvbGRlciAudmpzLXByb2dyZXNzLWNvbnRyb2w6aG92ZXIgLnZqcy1tb3VzZS1kaXNwbGF5IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDhweDsgfVxcblxcbi52aWRlby1qcyAudmpzLWhsc2pzLWxyLXJlYy1zdGF0dXMtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgLnZpZGVvLWpzIC52anMtaGxzanMtbHItcmVjLXN0YXR1cy1iYXIgLnZqcy1obHNqcy1sci1yZWMtaW5kaWNhdG9yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7IH1cXG4gIC52aWRlby1qcyAudmpzLWhsc2pzLWxyLXJlYy1zdGF0dXMtYmFyIC52anMtaGxzanMtbHItZGl2aWRlciB7XFxuICAgIHBhZGRpbmc6IDAgMnB4OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiRDpcXFxccHJvamVjdHNcXFxcYWx0ZW5hX3N0cmVhbVxcXFx2aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3NyY1xcXFxwbHVnaW4uc2Nzc1wiLFwiRDpcXFxccHJvamVjdHNcXFxcYWx0ZW5hX3N0cmVhbVxcXFx2aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3NyY1xcXFxzdHlsZXNcXFxcZm9ybXMuc2Nzc1wiLFwiRDpcXFxccHJvamVjdHNcXFxcYWx0ZW5hX3N0cmVhbVxcXFx2aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3NyY1xcXFxzdHlsZXNcXFxcYnV0dG9ucy5zY3NzXCIsXCJEOlxcXFxwcm9qZWN0c1xcXFxhbHRlbmFfc3RyZWFtXFxcXHZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvc3JjXFxcXHN0eWxlc1xcXFx2ZXJ0aWNhbC10YWJzLnNjc3NcIixcIkQ6XFxcXHByb2plY3RzXFxcXGFsdGVuYV9zdHJlYW1cXFxcdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC9zcmNcXFxcc3R5bGVzXFxcXG1vZGFsXFxcXHJlYy1zZXR0aW5ncy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1CQUFBO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwR0FBMEcsRUFBQTs7QUFHNUc7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFDQUFxQztFQUNyQyxtQ0FBbUMsRUFBQTs7QUFHckMsK0JBQUE7QUFDQTtFQUF1QixjQUFjLEVBQUE7O0FBQ3JDO0VBQXdCLGVBQWUsRUFBQTs7QUFDdkM7RUFBd0IsZUFBZSxFQUFBOztBQUN2QztFQUF3QixlQUFlLEVBQUE7O0FBQ3ZDO0VBQXdCLGVBQWUsRUFBQTs7QUFDdkM7RUFBd0IsZUFBZSxFQUFBOztBQUN2QztFQUF3QixlQUFlLEVBQUE7O0FBRXZDLDBEQUFBO0FBQ0E7RUFBMEIsMEJBQTBCLEVBQUE7O0FBQ3BEO0VBQXNDLDBCQUEwQixFQUFBOztBQUVoRSx5REFBQTtBQUNBO0VBQTJCLFlBQTZCLEVBQUE7O0FBQ3hEO0VBQXVDLCtCQUErQixFQUFBOztBQUV0RSx1QkFBQTtBQUVBO0VBQ0UsaUJBQWE7RUFDYixtQkFBaUI7RUFDakIsY0FBWSxFQUFBOztBQUdkO0VDaERFLGNBQWMsRUFBQTtFRGdEaEI7SUM5Q0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTtFRDRDdkI7SUN4Q0kscUJBQXFCLEVBQUE7O0FEd0N6QjtFRWhERSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6Qix1Q0FBdUM7RUFDdkMsb0JBQW9CO0VBQ3BCLG9CQUFvQixFQUFBO0VGNEJ0QjtJRXpCSSxZQUFZLEVBQUE7O0FGeUJoQjtFR2hERSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUdoQixvQ0FBb0MsRUFBQTs7QUgyQ3RDO0VHdkNFLFlBQVk7RUFDWixhQUFlO0VBQ2YsY0FBYyxFQUFBOztBSHFDaEI7RUdqQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUIsRUFBQTtFSCtCM0I7SUc3Qkksc0JBQXNCLEVBQUE7RUg2QjFCO0lHekJJLHlCQUE0QixFQUFBOztBSHlCaEM7RUdwQkUsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTs7QUhtQmY7RUdmRSxhQUFhO0VBQ2IsYUFBYSxFQUFBO0VIY2Y7SUdaSSxjQUFjLEVBQUE7O0FIWWxCO0VJN0NJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FKMkN2QjtFSXZDSSxpQkFBaUIsRUFBQTs7QUp1Q3JCO0VBUU0sK0JBQStCO0VBQy9CLDZCQUE2QixFQUFBOztBQVRuQztFQWNJLHdCQUF3QixFQUFBOztBQWQ1QjtFQWtCSSxjQUFjLEVBQUE7RUFsQmxCO0lBc0JRLFVBQVUsRUFBQTs7QUF0QmxCO0VBOEJJLGVBQWUsRUFBQTs7QUE5Qm5CO0VBa0NJLGFBQWE7RUFDYixVQUFVO0VBQ1YsMkJBQTJCLEVBQUE7RUFwQy9CO0lBdUNNLGVBQWUsRUFBQTtFQXZDckI7SUE0Q1EsZUFBZSxFQUFBO0VBNUN2QjtJQWtEUSx5QkFBaUMsRUFBQTtJQWxEekM7TUFvRFUsMENBQTBDLEVBQUE7RUFwRHBEO0lBMERVLG1CQUFtQixFQUFBO0VBMUQ3QjtJQTZEVSxtQkFBbUIsRUFBQTs7QUE3RDdCO0VBb0VJLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHlCQUFpQjtVQUFqQixpQkFBaUIsRUFBQTtFQXZFckI7SUEyRU0sYUFBYTtJQUNiLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBL0V0QjtJQXFGTSxjQUFjLEVBQUFcIixcImZpbGVcIjpcInBsdWdpbi5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE1hdGVyaWFsIGljb25zICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29ucy92NDgvZmxVaFJxNnR6WmNsUUVKLVZkZy1JdWlhRHNOYy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIC13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLyogUnVsZXMgZm9yIHNpemluZyB0aGUgaWNvbi4gKi9cXG4ubWF0ZXJpYWwtaWNvbnMubWQtOCB7IGZvbnQtc2l6ZTogOXB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTEwIHsgZm9udC1zaXplOiAxMHB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTEyIHsgZm9udC1zaXplOiAxMnB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTE4IHsgZm9udC1zaXplOiAxOHB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTI0IHsgZm9udC1zaXplOiAyNHB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTM2IHsgZm9udC1zaXplOiAzNnB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTQ4IHsgZm9udC1zaXplOiA0OHB4OyB9XFxuXFxuLyogUnVsZXMgZm9yIHVzaW5nIGljb25zIGFzIGJsYWNrIG9uIGEgbGlnaHQgYmFja2dyb3VuZC4gKi9cXG4ubWF0ZXJpYWwtaWNvbnMubWQtZGFyayB7IGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLWRhcmsubWQtaW5hY3RpdmUgeyBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsgfVxcblxcbi8qIFJ1bGVzIGZvciB1c2luZyBpY29ucyBhcyB3aGl0ZSBvbiBhIGRhcmsgYmFja2dyb3VuZC4gKi9cXG4ubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQgeyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC1saWdodC5tZC1pbmFjdGl2ZSB7IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IH1cXG5cXG4vKiBFbmQgbWF0ZXJpYWwgaWNvbnMgKi9cXG5cXG46cm9vdCB7XFxuICAtLW1haW4tY29sb3I6IHJlZDtcXG4gIC0tYmFzZS1mb250LXNpemU6IDk7XFxuICAtLWZvbnQtc2l6ZTogNztcXG59XFxuXFxuLnZpZGVvLWpzIHtcXG5cXG4gIEBpbXBvcnQgXFxcInN0eWxlcy9mb3Jtc1xcXCI7XFxuICBAaW1wb3J0IFxcXCJzdHlsZXMvYnV0dG9uc1xcXCI7XFxuICBAaW1wb3J0IFxcXCJzdHlsZXMvbW9kYWwvcmVjLXNldHRpbmdzXFxcIjtcXG5cXG4gICYudmpzLWhsc2pzLXJlY29yZC1zdGFydGVkIHtcXG4gICAgLnZqcy10ZWNoIHtcXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICB9XFxuXFxuICAudmpzLWhsc2pzLWxyLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gICYudmpzLWhsc2pzLWxpdmUtcmVjb3JkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgICYudmpzLXVzZXItaW5hY3RpdmUge1xcbiAgICAgIC52anMtY29udHJvbC1iYXIge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG5cXG5cXG4gIC52anMtaGxzanMtbHItc3RvcCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC52anMtaGxzanMtY29udHJvbHMtaG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcblxcbiAgICAudmpzLWxpdmUtZGlzcGxheSB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC52anMtY29udHJvbCB7XFxuICAgICAgJi52anMtYXQtbGl2ZS1lZGdlIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnZqcy1wcm9ncmVzcy1jb250cm9sIHtcXG4gICAgICAudmpzLWxvYWQtcHJvZ3Jlc3Mge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NCwgNTUsIDApO1xcbiAgICAgICAgZGl2IHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMTc3LCAxMDYsIDAuOTUpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIC52anMtbG9hZC1wcm9ncmVzcyB7XFxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICAgICAgICB9XFxuICAgICAgICAudmpzLW1vdXNlLWRpc3BsYXkge1xcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLnZqcy1obHNqcy1sci1yZWMtc3RhdHVzLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG5cXG4gICAgLnZqcy1obHNqcy1sci1yZWMtaW5kaWNhdG9yIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgICBtYXJnaW4tbGVmdDogMXB4O1xcbiAgICB9XFxuICAgIC52anMtaGxzanMtbHItcmVjb3JkZWQge1xcblxcbiAgICB9XFxuICAgIC52anMtaGxzanMtbHItZGl2aWRlciB7XFxuICAgICAgcGFkZGluZzogMCAycHg7XFxuICAgIH1cXG4gICAgLnZqcy1obHNqcy1sci1yZWNvcmQtbGVmdCB7XFxuXFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIudmpzLWhsc2pzLWZvcm0tZ3JvdXAge1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICAudmpzLWhsc2pzLWZvcm0tbGFiZWwge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgfVxcblxcbiAgLnZqcy1obHNqcy1mb3JtLWlucHV0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcbn1cXG5cIixcIi52anMtaGxzanMtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXI6IDAuMDY2NjZlbSBzb2xpZCAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCMzMzRjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDUxLCA2MywgMC43KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuXFxuICAmOmRpc2FibGVkLCAmLmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgfVxcbn1cXG5cIixcIi52anMtaGxzanMtdmVydGljYWwtdGFicyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcblxcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQxLCA0MSwgNDEsIDAuOCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi52anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYge1xcbiAgd2lkdGg6IDE0MHB4O1xcbiAgZmxleDogMTQwcHggMCAwO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi52anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYtZWxlbSB7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAmLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICB9XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAtIDEwJTtcXG4gIH1cXG59XFxuXFxuLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWJvZHkge1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4udmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtZWxlbSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gICYuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCBcXFwiLi4vdmVydGljYWwtdGFic1xcXCI7XFxuXFxuLnZqcy1obHNqcy1sci1yZWMtc2V0dGluZ3MudmpzLW1vZGFsLWRpYWxvZyB7XFxuICAudmpzLW1vZGFsLWRpYWxvZy1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAudmpzLWhsc2pzLXN0YXJ0LXJlY29yZCB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgfVxcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJjb25zdCBub3JtYWxpemUgPSAobnVtYmVyKSA9PiAobnVtYmVyIDwgMTAgPyAnMCcgKyBudW1iZXIgOiBudW1iZXIpO1xuXG5leHBvcnQgY29uc3QgdG9Gb3JtYXRZbWRIaXMgPSAoZGF0ZSwgc2VwYXJhdG9yKSA9PiB7XG4gIHJldHVybiBbXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICBub3JtYWxpemUoZGF0ZS5nZXREYXRlKCkpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldEhvdXJzKCkpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldE1pbnV0ZXMoKSksXG4gICAgbm9ybWFsaXplKGRhdGUuZ2V0U2Vjb25kcygpKSxcbiAgXS5qb2luKHNlcGFyYXRvcik7XG59O1xuXG5leHBvcnQgY29uc3Qgbm93SW5Gb3JtYXRZbWRIaXMgPSAoc2VwYXJhdG9yID0gJy0nKSA9PiB7XG4gIHJldHVybiB0b0Zvcm1hdFltZEhpcyhuZXcgRGF0ZSgpLCBzZXBhcmF0b3IpO1xufTtcbiIsIi8qKlxuICogQGZpbGUgZm9ybWF0LXRpbWUuanNcbiAqIEBtb2R1bGUgZm9ybWF0LXRpbWVcbiAqL1xuXG4vKipcbiAqIEZvcm1hdCBzZWNvbmRzIGFzIGEgdGltZSBzdHJpbmcsIEg6TU06U1Mgb3IgTTpTUy4gU3VwcGx5aW5nIGEgZ3VpZGUgKGluXG4gKiBzZWNvbmRzKSB3aWxsIGZvcmNlIGEgbnVtYmVyIG9mIGxlYWRpbmcgemVyb3MgdG8gY292ZXIgdGhlIGxlbmd0aCBvZiB0aGVcbiAqIGd1aWRlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNlY29uZHNcbiAqICAgICAgICAgTnVtYmVyIG9mIHNlY29uZHMgdG8gYmUgdHVybmVkIGludG8gYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGd1aWRlXG4gKiAgICAgICAgIE51bWJlciAoaW4gc2Vjb25kcykgdG8gbW9kZWwgdGhlIHN0cmluZyBhZnRlclxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICAgICAgICAgVGltZSBmb3JtYXR0ZWQgYXMgSDpNTTpTUyBvciBNOlNTXG4gKi9cbmNvbnN0IGRlZmF1bHRJbXBsZW1lbnRhdGlvbiA9IGZ1bmN0aW9uKHNlY29uZHMsIGd1aWRlKSB7XG4gIHNlY29uZHMgPSBzZWNvbmRzIDwgMCA/IDAgOiBzZWNvbmRzO1xuICBsZXQgcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDYwKTtcbiAgbGV0IG0gPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCAlIDYwKTtcbiAgbGV0IGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcbiAgY29uc3QgZ20gPSBNYXRoLmZsb29yKGd1aWRlIC8gNjAgJSA2MCk7XG4gIGNvbnN0IGdoID0gTWF0aC5mbG9vcihndWlkZSAvIDM2MDApO1xuXG4gIC8vIGhhbmRsZSBpbnZhbGlkIHRpbWVzXG4gIGlmIChpc05hTihzZWNvbmRzKSB8fCBzZWNvbmRzID09PSBJbmZpbml0eSkge1xuICAgIC8vICctJyBpcyBmYWxzZSBmb3IgYWxsIHJlbGF0aW9uYWwgb3BlcmF0b3JzIChlLmcuIDwsID49KSBzbyB0aGlzIHNldHRpbmdcbiAgICAvLyB3aWxsIGFkZCB0aGUgbWluaW11bSBudW1iZXIgb2YgZmllbGRzIHNwZWNpZmllZCBieSB0aGUgZ3VpZGVcbiAgICBoID0gbSA9IHMgPSAnLSc7XG4gIH1cblxuICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHNob3cgaG91cnNcbiAgaCA9IChoID4gMCB8fCBnaCA+IDApID8gaCArICc6JyA6ICcnO1xuXG4gIC8vIElmIGhvdXJzIGFyZSBzaG93aW5nLCB3ZSBtYXkgbmVlZCB0byBhZGQgYSBsZWFkaW5nIHplcm8uXG4gIC8vIEFsd2F5cyBzaG93IGF0IGxlYXN0IG9uZSBkaWdpdCBvZiBtaW51dGVzLlxuICBtID0gKCgoaCB8fCBnbSA+PSAxMCkgJiYgbSA8IDEwKSA/ICcwJyArIG0gOiBtKSArICc6JztcblxuICAvLyBDaGVjayBpZiBsZWFkaW5nIHplcm8gaXMgbmVlZCBmb3Igc2Vjb25kc1xuICBzID0gKHMgPCAxMCkgPyAnMCcgKyBzIDogcztcblxuICByZXR1cm4gaCArIG0gKyBzO1xufTtcblxuLy8gSW50ZXJuYWwgcG9pbnRlciB0byB0aGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbi5cbmxldCBpbXBsZW1lbnRhdGlvbiA9IGRlZmF1bHRJbXBsZW1lbnRhdGlvbjtcblxuLyoqXG4gKiBSZXBsYWNlcyB0aGUgZGVmYXVsdCBmb3JtYXRUaW1lIGltcGxlbWVudGF0aW9uIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9tSW1wbGVtZW50YXRpb25cbiAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgdXNlZCBpbiBwbGFjZSBvZiB0aGUgZGVmYXVsdCBmb3JtYXRUaW1lXG4gKiAgICAgICAgaW1wbGVtZW50YXRpb24uIFdpbGwgcmVjZWl2ZSB0aGUgY3VycmVudCB0aW1lIGluIHNlY29uZHMgYW5kIHRoZVxuICogICAgICAgIGd1aWRlIChpbiBzZWNvbmRzKSBhcyBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGb3JtYXRUaW1lKGN1c3RvbUltcGxlbWVudGF0aW9uKSB7XG4gIGltcGxlbWVudGF0aW9uID0gY3VzdG9tSW1wbGVtZW50YXRpb247XG59XG5cbi8qKlxuICogUmVzZXRzIGZvcm1hdFRpbWUgdG8gdGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZvcm1hdFRpbWUoKSB7XG4gIGltcGxlbWVudGF0aW9uID0gZGVmYXVsdEltcGxlbWVudGF0aW9uO1xufVxuXG4vKipcbiAqIERlbGVnYXRlcyB0byBlaXRoZXIgdGhlIGRlZmF1bHQgdGltZSBmb3JtYXR0aW5nIGZ1bmN0aW9uIG9yIGEgY3VzdG9tXG4gKiBmdW5jdGlvbiBzdXBwbGllZCB2aWEgYHNldEZvcm1hdFRpbWVgLlxuICpcbiAqIEZvcm1hdHMgc2Vjb25kcyBhcyBhIHRpbWUgc3RyaW5nIChIOk1NOlNTIG9yIE06U1MpLiBTdXBwbHlpbmcgYVxuICogZ3VpZGUgKGluIHNlY29uZHMpIHdpbGwgZm9yY2UgYSBudW1iZXIgb2YgbGVhZGluZyB6ZXJvcyB0byBjb3ZlciB0aGVcbiAqIGxlbmd0aCBvZiB0aGUgZ3VpZGUuXG4gKlxuICogQHN0YXRpY1xuICogQGV4YW1wbGUgIGZvcm1hdFRpbWUoMTI1LCA2MDApID09PSBcIjAyOjA1XCJcbiAqIEBwYXJhbSAgICB7bnVtYmVyfSBzZWNvbmRzXG4gKiAgICAgICAgICAgTnVtYmVyIG9mIHNlY29uZHMgdG8gYmUgdHVybmVkIGludG8gYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gICAge251bWJlcn0gZ3VpZGVcbiAqICAgICAgICAgICBOdW1iZXIgKGluIHNlY29uZHMpIHRvIG1vZGVsIHRoZSBzdHJpbmcgYWZ0ZXJcbiAqXG4gKiBAcmV0dXJuICAge3N0cmluZ31cbiAqICAgICAgICAgICBUaW1lIGZvcm1hdHRlZCBhcyBIOk1NOlNTIG9yIE06U1NcbiAqL1xuZnVuY3Rpb24gZm9ybWF0VGltZShzZWNvbmRzLCBndWlkZSA9IHNlY29uZHMpIHtcbiAgcmV0dXJuIGltcGxlbWVudGF0aW9uKHNlY29uZHMsIGd1aWRlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0VGltZTtcbiIsImV4cG9ydCBjb25zdCBmYWNlVVVJRCA9IChwcmVmaXgpID0+IHtcbiAgcmV0dXJuIHByZWZpeCArICctJyArIERhdGUubm93KClcbn07XG4iLCJjb25zdCB7IHBlcmZvcm1hbmNlLCBYTUxIdHRwUmVxdWVzdCB9ID0gd2luZG93O1xuXG5jbGFzcyBYaHJMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcueGhyU2V0dXApIHtcbiAgICAgIHRoaXMueGhyU2V0dXAgPSBjb25maWcueGhyU2V0dXA7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5hYm9ydCgpO1xuICAgIHRoaXMubG9hZGVyID0gbnVsbDtcbiAgfVxuXG4gIGFib3J0ICgpIHtcbiAgICBsZXQgbG9hZGVyID0gdGhpcy5sb2FkZXI7XG4gICAgaWYgKGxvYWRlciAmJiBsb2FkZXIucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgdGhpcy5zdGF0cy5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgIGxvYWRlci5hYm9ydCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0VGltZW91dCk7XG4gICAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IG51bGw7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJldHJ5VGltZW91dCk7XG4gICAgdGhpcy5yZXRyeVRpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgbG9hZCAoY29udGV4dCwgY29uZmlnLCBjYWxsYmFja3MpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIHRoaXMuc3RhdHMgPSB7IHRyZXF1ZXN0OiBwZXJmb3JtYW5jZS5ub3coKSwgcmV0cnk6IDAgfTtcbiAgICB0aGlzLnJldHJ5RGVsYXkgPSBjb25maWcucmV0cnlEZWxheTtcbiAgICB0aGlzLmxvYWRJbnRlcm5hbCgpO1xuICB9XG5cbiAgbG9hZEludGVybmFsICgpIHtcbiAgICBsZXQgeGhyLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgIHhociA9IHRoaXMubG9hZGVyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICBsZXQgc3RhdHMgPSB0aGlzLnN0YXRzO1xuICAgIHN0YXRzLnRmaXJzdCA9IDA7XG4gICAgc3RhdHMubG9hZGVkID0gMDtcbiAgICBjb25zdCB4aHJTZXR1cCA9IHRoaXMueGhyU2V0dXA7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKHhoclNldHVwKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgeGhyU2V0dXAoeGhyLCBjb250ZXh0LnVybCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBmaXggeGhyU2V0dXA6ICh4aHIsIHVybCkgPT4ge3hoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1MYW5ndWFnZVwiLCBcInRlc3RcIik7fVxuICAgICAgICAgIC8vIG5vdCB3b3JraW5nLCBhcyB4aHIuc2V0UmVxdWVzdEhlYWRlciBleHBlY3RzIHhoci5yZWFkeVN0YXRlID09PSBPUEVOXG4gICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGNvbnRleHQudXJsLCB0cnVlKTtcbiAgICAgICAgICB4aHJTZXR1cCh4aHIsIGNvbnRleHQudXJsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICB4aHIub3BlbignR0VUJywgY29udGV4dC51cmwsIHRydWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElFMTEgdGhyb3dzIGFuIGV4Y2VwdGlvbiBvbiB4aHIub3BlbiBpZiBhdHRlbXB0aW5nIHRvIGFjY2VzcyBhbiBIVFRQIHJlc291cmNlIG92ZXIgSFRUUFNcbiAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRXJyb3IoeyBjb2RlOiB4aHIuc3RhdHVzLCB0ZXh0OiBlLm1lc3NhZ2UgfSwgY29udGV4dCwgeGhyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5yYW5nZUVuZCkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1JhbmdlJywgJ2J5dGVzPScgKyBjb250ZXh0LnJhbmdlU3RhcnQgKyAnLScgKyAoY29udGV4dC5yYW5nZUVuZCAtIDEpKTtcbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gdGhpcy5yZWFkeXN0YXRlY2hhbmdlLmJpbmQodGhpcyk7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSB0aGlzLmxvYWRwcm9ncmVzcy5iaW5kKHRoaXMpO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSBjb250ZXh0LnJlc3BvbnNlVHlwZTtcblxuICAgIC8vIHNldHVwIHRpbWVvdXQgYmVmb3JlIHdlIHBlcmZvcm0gcmVxdWVzdFxuICAgIHRoaXMucmVxdWVzdFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmxvYWR0aW1lb3V0LmJpbmQodGhpcyksIHRoaXMuY29uZmlnLnRpbWVvdXQpO1xuICAgIHhoci5zZW5kKCk7XG4gIH1cblxuICByZWFkeXN0YXRlY2hhbmdlIChldmVudCkge1xuICAgIGxldCB4aHIgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgcmVhZHlTdGF0ZSA9IHhoci5yZWFkeVN0YXRlLFxuICAgICAgc3RhdHMgPSB0aGlzLnN0YXRzLFxuICAgICAgY29udGV4dCA9IHRoaXMuY29udGV4dCxcbiAgICAgIGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuXG4gICAgLy8gZG9uJ3QgcHJvY2VlZCBpZiB4aHIgaGFzIGJlZW4gYWJvcnRlZFxuICAgIGlmIChzdGF0cy5hYm9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gPj0gSEVBREVSU19SRUNFSVZFRFxuICAgIGlmIChyZWFkeVN0YXRlID49IDIpIHtcbiAgICAgIC8vIGNsZWFyIHhociB0aW1lb3V0IGFuZCByZWFybSBpdCBpZiByZWFkeVN0YXRlIGxlc3MgdGhhbiA0XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVxdWVzdFRpbWVvdXQpO1xuICAgICAgaWYgKHN0YXRzLnRmaXJzdCA9PT0gMCkge1xuICAgICAgICBzdGF0cy50Zmlyc3QgPSBNYXRoLm1heChwZXJmb3JtYW5jZS5ub3coKSwgc3RhdHMudHJlcXVlc3QpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBsZXQgc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICAgICAgLy8gaHR0cCBzdGF0dXMgYmV0d2VlbiAyMDAgdG8gMjk5IGFyZSBhbGwgc3VjY2Vzc2Z1bFxuICAgICAgICBpZiAoc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICBzdGF0cy50bG9hZCA9IE1hdGgubWF4KHN0YXRzLnRmaXJzdCwgcGVyZm9ybWFuY2Uubm93KCkpO1xuICAgICAgICAgIGxldCBkYXRhLCBsZW47XG4gICAgICAgICAgaWYgKGNvbnRleHQucmVzcG9uc2VUeXBlID09PSAnYXJyYXlidWZmZXInKSB7XG4gICAgICAgICAgICBkYXRhID0geGhyLnJlc3BvbnNlO1xuICAgICAgICAgICAgbGVuID0gZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgIGxlbiA9IGRhdGEubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0cy5sb2FkZWQgPSBzdGF0cy50b3RhbCA9IGxlbjtcbiAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB7IHVybDogeGhyLnJlc3BvbnNlVVJMLCBkYXRhOiBkYXRhIH07XG4gICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25TdWNjZXNzKHJlc3BvbnNlLCBzdGF0cywgY29udGV4dCwgeGhyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiBtYXggbmIgb2YgcmV0cmllcyByZWFjaGVkIG9yIGlmIGh0dHAgc3RhdHVzIGJldHdlZW4gNDAwIGFuZCA0OTkgKHN1Y2ggZXJyb3IgY2Fubm90IGJlIHJlY292ZXJlZCwgcmV0cnlpbmcgaXMgdXNlbGVzcyksIHJldHVybiBlcnJvclxuICAgICAgICAgIGlmIChzdGF0cy5yZXRyeSA+PSBjb25maWcubWF4UmV0cnkgfHwgKHN0YXR1cyA+PSA0MDAgJiYgc3RhdHVzIDwgNDk5KSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25FcnJvcih7IGNvZGU6IHN0YXR1cywgdGV4dDogeGhyLnN0YXR1c1RleHQgfSwgY29udGV4dCwgeGhyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWJvcnRzIGFuZCByZXNldHMgaW50ZXJuYWwgc3RhdGVcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgLy8gc2NoZWR1bGUgcmV0cnlcbiAgICAgICAgICAgIHRoaXMucmV0cnlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5sb2FkSW50ZXJuYWwuYmluZCh0aGlzKSwgdGhpcy5yZXRyeURlbGF5KTtcbiAgICAgICAgICAgIC8vIHNldCBleHBvbmVudGlhbCBiYWNrb2ZmXG4gICAgICAgICAgICB0aGlzLnJldHJ5RGVsYXkgPSBNYXRoLm1pbigyICogdGhpcy5yZXRyeURlbGF5LCBjb25maWcubWF4UmV0cnlEZWxheSk7XG4gICAgICAgICAgICBzdGF0cy5yZXRyeSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVhZHlTdGF0ZSA+PSAyIEFORCByZWFkeVN0YXRlICE9PTQgKHJlYWR5U3RhdGUgPSBIRUFERVJTX1JFQ0VJVkVEIHx8IExPQURJTkcpIHJlYXJtIHRpbWVvdXQgYXMgeGhyIG5vdCBmaW5pc2hlZCB5ZXRcbiAgICAgICAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMubG9hZHRpbWVvdXQuYmluZCh0aGlzKSwgY29uZmlnLnRpbWVvdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvYWR0aW1lb3V0ICgpIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5vblRpbWVvdXQodGhpcy5zdGF0cywgdGhpcy5jb250ZXh0LCBudWxsKTtcbiAgfVxuXG4gIGxvYWRwcm9ncmVzcyAoZXZlbnQpIHtcbiAgICBsZXQgeGhyID0gZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgIHN0YXRzID0gdGhpcy5zdGF0cztcblxuICAgIHN0YXRzLmxvYWRlZCA9IGV2ZW50LmxvYWRlZDtcbiAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgc3RhdHMudG90YWwgPSBldmVudC50b3RhbDtcbiAgICB9XG5cbiAgICBsZXQgb25Qcm9ncmVzcyA9IHRoaXMuY2FsbGJhY2tzLm9uUHJvZ3Jlc3M7XG4gICAgaWYgKG9uUHJvZ3Jlc3MpIHtcbiAgICAgIC8vIHRoaXJkIGFyZyBpcyB0byBwcm92aWRlIG9uIHByb2dyZXNzIGRhdGFcbiAgICAgIG9uUHJvZ3Jlc3Moc3RhdHMsIHRoaXMuY29udGV4dCwgbnVsbCwgeGhyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWGhyTG9hZGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmlkZW9qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9