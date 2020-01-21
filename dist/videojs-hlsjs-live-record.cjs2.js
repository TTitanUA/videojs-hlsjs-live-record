/*!
 * videojs-hlsjs-live-record
 * Live stream record functionality for VideoJS with hls.js
 * 
 * @version v0.1.2
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

module.exports = JSON.parse("{\"name\":\"videojs-hlsjs-live-record\",\"version\":\"0.1.2\",\"description\":\"Live stream record functionality for VideoJS with hls.js\",\"author\":{\"name\":\"Taras Prokofiev\",\"url\":\"xttitax@gmail\"},\"license\":\"MIT\",\"homepage\":\"https://github.com/TTitanUA/videojs-hlsjs-live-record#readme\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/TTitanUA/videojs-hlsjs-live-record.git\"},\"bugs\":{\"url\":\"https://github.com/TTitanUA/videojs-hlsjs-live-record/issues\"},\"keywords\":[\"videojs\",\"videojs-plugin\",\"videojs-hlsjs\"],\"files\":[\"dist/\",\"index.html\",\"webpack/\",\"src/\"],\"scripts\":{\"prestart\":\"rimraf dist\",\"start\":\"webpack-dev-server --open --mode development\",\"prebuild\":\"rimraf dist\",\"build\":\"npm-run-all prebuild build:*\",\"build:umdmin\":\"webpack --mode=production --output-library-target=umd\",\"build:umd\":\"webpack --mode=development --output-library-target=umd\",\"build:commonjs\":\"webpack --mode=development --output-library-target=commonjs2\",\"dev:umd\":\"webpack --progress --colors --watch --mode=development --output-library-target=umd\",\"dev:commonjs\":\"webpack --progress --colors --watch --mode=development --output-library-target=commonjs2\",\"dev\":\"npm-run-all --parallel dev:*\",\"check-eslint-config\":\"eslint --print-config .eslintrc | eslint-config-prettier-check\",\"check-stylelint-config\":\"stylelint-config-prettier-check\",\"lint-code\":\"eslint 'src/**/*.js'\",\"lint-style\":\"stylelint 'src/**/*.{css,scss}'\"},\"dependencies\":{\"global\":\"^4.3.2\"},\"devDependencies\":{\"@babel/core\":\"^7.6.2\",\"@babel/plugin-proposal-class-properties\":\"^7.5.5\",\"@babel/plugin-proposal-object-rest-spread\":\"^7.6.2\",\"@babel/plugin-transform-async-to-generator\":\"^7.5.0\",\"@babel/plugin-transform-runtime\":\"^7.6.2\",\"@babel/preset-env\":\"^7.6.2\",\"@babel/runtime\":\"^7.6.2\",\"autoprefixer\":\"^9.6.1\",\"babel-loader\":\"^8.0.6\",\"copy-webpack-plugin\":\"^5.0.4\",\"css-loader\":\"^3.2.0\",\"csso-webpack-plugin\":\"^1.0.0-beta.12\",\"eslint\":\"^6.4.0\",\"eslint-config-prettier\":\"^6.3.0\",\"eslint-config-videojs\":\"^5.0.2\",\"eslint-plugin-import\":\"^2.18.2\",\"eslint-plugin-prettier\":\"^3.1.1\",\"file-loader\":\"^4.2.0\",\"mini-css-extract-plugin\":\"^0.8.0\",\"node-sass\":\"^4.12.0\",\"normalize.css\":\"^8.0.1\",\"npm-run-all\":\"~4.1.5\",\"postcss-flexbugs-fixes\":\"^4.1.0\",\"postcss-loader\":\"^3.0.0\",\"prettier\":\"^1.18.2\",\"rimraf\":\"^3.0.0\",\"yargs\":\"~14.1.0\",\"sass-loader\":\"^8.0.0\",\"style-loader\":\"^1.0.0\",\"stylelint\":\"^11.0.0\",\"stylelint-config-prettier\":\"^6.0.0\",\"stylelint-config-recommended\":\"^3.0.0\",\"stylelint-config-sass-guidelines\":\"^6.1.0\",\"stylelint-prettier\":\"^1.1.1\",\"stylelint-scss\":\"^3.11.1\",\"video.js\":\"^7.6.0\",\"videojs-contrib-hls.js\":\"^3.2.0\",\"webpack\":\"^4.41.0\",\"webpack-assets-manifest\":\"^3.1.1\",\"webpack-bundle-analyzer\":\"^3.5.2\",\"webpack-cli\":\"^3.3.9\",\"webpack-dev-server\":\"^3.8.1\",\"webpack-merge\":\"^4.2.2\"},\"browserslist\":{\"production\":[\">0.2%\",\"not dead\",\"not op_mini all\"],\"development\":[\"last 1 chrome version\",\"last 1 firefox version\",\"last 1 safari version\"]}}");

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
    if (this.options().allowed) {
      this.tabsComponent = new _recSettingsModal_TabsHlsJs__WEBPACK_IMPORTED_MODULE_1__["default"](this.player_, this.options());
      return this.tabsComponent.el_;
    } else {
      return this.renderNotAllowedContent();
    }
  }

  renderNotAllowedContent() {
    if (this.renderedEl_) {
      return this.renderedEl_;
    }

    const content = (this.options().notAllowedContent || (() => '<h2>Recording not allowed</h2>'))();

    this.renderedEl_ = Dom.createEl('div', {
      className: '',
      innerHTML: content
    });
    return this.renderedEl_;
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
const Dom = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.dom;
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

    if (this.options().realtimeRecord.allowed) {
      elem.appendChild(this.renderHead());
      elem.appendChild(this.renderQualitySelector());
      elem.appendChild(this.renderButton());
      elem.appendChild(this.renderFooter());
    } else {
      return elem.appendChild(this.renderNotAllowedContent());
    }

    return elem;
  }

  renderHead() {
    const content = (this.options().realtimeRecord.modalHeaderContent || (() => "<p>Real-time recording allows you to record a fragment of the program you are watching. " + "Recording will be done until the recording stops, the recording time limit is exceeded or the tab is closed." + "To start recording, select your preferred quality and click <strong>\"start recording\"</strong>.</p>" + "<p>Your current recording time limit is " + this.options().maxRecordMinutes + " min.</p>"))();

    return Dom.createEl('div', {
      innerHTML: content
    });
  }

  renderFooter() {
    const content = (this.options().realtimeRecord.modalFooterContent || (() => ''))();

    return Dom.createEl('div', {
      innerHTML: content
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

  renderNotAllowedContent() {
    if (this.renderedEl_) {
      return this.renderedEl_;
    }

    const content = (this.options().realtimeRecord.notAllowedContent || (() => '<h2>Recording not allowed</h2>'))();

    this.renderedEl_ = Dom.createEl('div', {
      className: '',
      innerHTML: content
    });
    return this.renderedEl_;
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
    this.realtimeRecord = new _RealTimeRecordTabHlsJs__WEBPACK_IMPORTED_MODULE_1__["default"](this.player_, this.options());
    const elem1 = Dom.createEl('div', {
      className: 'vjs-hlsjs-vertical-tabs-elem active'
    });
    elem1.appendChild(this.realtimeRecord.el_);
    bodyHolder.appendChild(elem1);
    this.backgroundRecord = new _BackgroundRecordTabHlsJs__WEBPACK_IMPORTED_MODULE_2__["default"](this.player_, this.options());
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

const faceMimePromise = () => {
  return new Promise(resolve => {
    resolve({});
  });
};

class RealtimeRecordController {
  constructor(plugin) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "fragmentLoaded", (response, stats, context, networkDetails = null) => {
      context.loader.destroy();
      context.loader = null;
      this.plugin.storageController.saveFragment(context.frag, response.data, stats).then(() => {
        this.playlist.fragmentSaved(context.frag);
        this.plugin.storageController.savePlaylist(this.playlist);
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
    const hlsjs = this.plugin.getHlsJs();
    this.fragmentListener = hlsjs.on(Hls.Events.FRAG_LOADED, this.hlsFragmentLoaded);
  }

  startRecord() {
    this.playlist = null;
    this.recordStarted = true;
  }

  stopRecord() {
    this.recordStarted = false;

    if (this.playlist) {
      this.playlist.finished();
      this.plugin.storageController.savePlaylist(this.playlist);
    }
  }

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
      onSuccess: this.fragmentLoaded
    };
    loader.load(loaderContext, loaderConfig, loaderCallbacks);
  }

  initPlaylist(levelIndex) {
    const hlsjs = this.plugin.getHlsJs();
    const level = hlsjs.levels[levelIndex];
    const mimePromise = (this.plugin.options.realtimeRecord.getRecordMime || faceMimePromise)();

    if (!level) {
      return;
    }

    this.playlist = new _Models_Playlist__WEBPACK_IMPORTED_MODULE_1__["PlaylistModel"]({
      id: 'record-' + Object(_utils_date__WEBPACK_IMPORTED_MODULE_2__["nowInFormatYmdHis"])(),
      width: level.width,
      height: level.height,
      targetduration: level.details.targetduration
    });
    mimePromise.then(mime => {
      this.playlist.mime = mime;
      this.plugin.storageController.savePlaylist(this.playlist);
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
      this.recSettingsModalComponent = new _Components_RecSettingsModalHlsJs__WEBPACK_IMPORTED_MODULE_1__["default"](this.plugin.player, this.plugin.options);
      this.plugin.player.addChild(this.recSettingsModalComponent);
      this.recSettingsModalComponent.open();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "activateRecordMode", () => {
      this.recSettingsModalComponent.close();
      this.hideProgressControl();
      this.hideLiveControl();
      this.hideOtherControl();
      this.showRecControl();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "showRecControl", () => {
      const maxRecordSeconds = this.plugin.options.maxRecordMinutes * 60;
      this.plugin.player.addClass('vjs-hlsjs-record-started');
      this.recStatusBarComponent.updateRecordLeftTime(maxRecordSeconds);
      this.recStatusBarComponent.updateRecordTime(0);
      let a = 1;
      this.recordUpdateInterval = setInterval(() => {
        if (a >= maxRecordSeconds) {
          this.plugin.stopRealtimeRecord();
        }

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
    this.mime = playlistData.mime || {};
    this.createdAt = playlistData.createdAt || Date.now();
    this.updatedAt = playlistData.updatedAt || null;
    this.recFinished = playlistData.recFinished || false;
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
    this.updatedAt = Date.now();
  }

  finished() {
    this.updatedAt = Date.now();
    this.recFinished = true;
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










/**
 * A Default configuration
 * @typedef {Object} DefaultConfig
 * @property {string[]} listOfControlsHiddenOnRec - List of interface elements that should be hidden in recording mode
 * @property {string} storageDbName - The name of the IndexedDB database used to save records
 * @property {string} storagePlaylistsName - The name of the playlists storage
 * @property {string} storageFragmentsName - The name of the fragments storage
 * @property {number} maxRecordMinutes - Maximum record duration in minutes
 * @property {boolean} allowed - Enable recording functionality
 * @property {null | callback<string | HTMLElement>} notAllowedContent - This content will be displayed if recording not allowed
 * @property {object} realtimeRecord - Realtime recording configuration
 * @property {boolean} realtimeRecord.allowed - Enable realtime recording functionality
 * @property {boolean} realtimeRecord.hideIfNotAllowed - Hide realtime recording tab if realtime recording not allowed
 * @property {null | callback<string | HTMLElement>} realtimeRecord.modalHeaderContent - Header content of the realtime recording tab
 * @property {null | callback<string | HTMLElement>} realtimeRecord.modalFooterContent - Footer content of the realtime recording tab
 * @property {null | callback<string | HTMLElement>} realtimeRecord.notAllowedContent - This content will be displayed if realtime recording not allowed
 * @property {null | callback<Promise<object>>} realtimeRecord.getRecordMime - Object returned by this function will be included in playlist and can be used later
 */

/**
 *
 * @type {DefaultConfig}
 */

const defaults = {
  listOfControlsHiddenOnRec: ['vjs-play-control', 'vjs-quality-selector'],
  storageDbName: 'vjs-hlsjs-lr',
  storagePlaylistsName: 'playlists',
  storageFragmentsName: 'fragments',
  maxRecordMinutes: 60,
  allowed: true,
  notAllowedContent: null,
  realtimeRecord: {
    allowed: true,
    modalHeaderContent: null,
    modalFooterContent: null,
    notAllowedContent: null,
    getRecordMime: null
  }
};

class HlsJSLiveRecordPlugin extends Plugin {
  constructor(player, options) {
    super(player, options);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "init", () => {
      if (this.state.init) {
        return;
      }

      this.setState({
        init: true
      });

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

    this.options = video_js__WEBPACK_IMPORTED_MODULE_2___default.a.mergeOptions(defaults, options);
    this.storageController = new _Controllers_StorageController__WEBPACK_IMPORTED_MODULE_11__["default"](this);
    this.viewController = new _Controllers_ViewController__WEBPACK_IMPORTED_MODULE_10__["default"](this);
    this.realtimeRecordController = new _Controllers_RealtimeRecordController__WEBPACK_IMPORTED_MODULE_12__["default"](this);
    player.on('playing', () => {
      this.init();
    });
  }

  startRealtimeRecord(levelId) {
    this.setState({
      recordInProcess: true
    });
    this.getHlsJs().currentLevel = levelId * 1;
    this.viewController.activateRecordMode();
    this.realtimeRecordController.startRecord();
  }

  handleStateChanged(e) {}

}

HlsJSLiveRecordPlugin.VERSION = _package_json__WEBPACK_IMPORTED_MODULE_3__["version"];
HlsJSLiveRecordPlugin.defaultState = {
  recordAllowed: true,
  recordInProcess: false,
  init: false
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
exports.push([module.i, "/* FIXME: need replace color functions https://sass-lang.com/documentation/modules#other_color_functions */\n/* Material icons */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format(\"woff2\"); }\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n\n/* Rules for sizing the icon. */\n.material-icons.md-8 {\n  font-size: 9px; }\n\n.material-icons.md-10 {\n  font-size: 10px; }\n\n.material-icons.md-12 {\n  font-size: 12px; }\n\n.material-icons.md-18 {\n  font-size: 18px; }\n\n.material-icons.md-24 {\n  font-size: 24px; }\n\n.material-icons.md-36 {\n  font-size: 36px; }\n\n.material-icons.md-48 {\n  font-size: 48px; }\n\n/* Rules for using icons as black on a light background. */\n.material-icons.md-dark {\n  color: rgba(0, 0, 0, 0.54); }\n\n.material-icons.md-dark.md-inactive {\n  color: rgba(0, 0, 0, 0.26); }\n\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light {\n  color: white; }\n\n.material-icons.md-light.md-inactive {\n  color: rgba(255, 255, 255, 0.3); }\n\n/* End material icons */\n:root {\n  --main-color: red;\n  --base-font-size: 9;\n  --font-size: 7; }\n\n.video-js .vjs-hlsjs-form-group {\n  padding: 5px 0; }\n  .video-js .vjs-hlsjs-form-group .vjs-hlsjs-form-label {\n    display: inline-block;\n    font-weight: bold;\n    padding-right: 10px; }\n  .video-js .vjs-hlsjs-form-group .vjs-hlsjs-form-input {\n    display: inline-block; }\n\n.video-js .vjs-hlsjs-button {\n  background: none;\n  border: none;\n  color: inherit;\n  display: inline-block;\n  font-size: inherit;\n  line-height: inherit;\n  text-transform: none;\n  text-decoration: none;\n  transition: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  line-height: 1.5;\n  display: block;\n  cursor: pointer;\n  opacity: 1;\n  border: 0.06666em solid #fff;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  border-radius: 0.3em;\n  transition: all 0.3s; }\n  .video-js .vjs-hlsjs-button:disabled, .video-js .vjs-hlsjs-button.disabled {\n    opacity: 0.6; }\n\n.video-js .vjs-hlsjs-vertical-tabs {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.video-js .vjs-hlsjs-vertical-tabs-nav {\n  width: 140px;\n  flex: 140px 0;\n  flex-shrink: 0; }\n\n.video-js .vjs-hlsjs-vertical-tabs-nav-elem {\n  padding: 10px 5px;\n  cursor: pointer;\n  text-transform: uppercase; }\n  .video-js .vjs-hlsjs-vertical-tabs-nav-elem.active {\n    background-color: #333; }\n  .video-js .vjs-hlsjs-vertical-tabs-nav-elem:hover {\n    background-color: #292929; }\n\n.video-js .vjs-hlsjs-vertical-tabs-body {\n  min-height: 300px;\n  height: 300px; }\n\n.video-js .vjs-hlsjs-vertical-tabs-elem {\n  display: none;\n  padding: 10px; }\n  .video-js .vjs-hlsjs-vertical-tabs-elem.active {\n    display: block; }\n\n.video-js .vjs-hlsjs-lr-rec-settings.vjs-modal-dialog .vjs-modal-dialog-content {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.video-js .vjs-hlsjs-lr-rec-settings.vjs-modal-dialog .vjs-hlsjs-start-record {\n  padding: 5px 10px; }\n\n.video-js.vjs-hlsjs-record-started .vjs-tech {\n  pointer-events: none !important;\n  touch-action: none !important; }\n\n.video-js .vjs-hlsjs-lr-hidden {\n  display: none !important; }\n\n.video-js.vjs-hlsjs-live-record {\n  display: block; }\n  .video-js.vjs-hlsjs-live-record.vjs-user-inactive .vjs-control-bar {\n    opacity: 1; }\n\n.video-js .vjs-hlsjs-lr-stop {\n  cursor: pointer; }\n\n.video-js .vjs-hlsjs-controls-holder {\n  display: flex;\n  flex: auto;\n  flex-direction: row-reverse; }\n  .video-js .vjs-hlsjs-controls-holder .vjs-live-display {\n    cursor: pointer; }\n  .video-js .vjs-hlsjs-controls-holder .vjs-control.vjs-at-live-edge {\n    cursor: pointer; }\n  .video-js .vjs-hlsjs-controls-holder .vjs-progress-control .vjs-load-progress {\n    background-color: #b83700; }\n    .video-js .vjs-hlsjs-controls-holder .vjs-progress-control .vjs-load-progress div {\n      background-color: rgba(20, 177, 106, 0.95); }\n  .video-js .vjs-hlsjs-controls-holder .vjs-progress-control:hover .vjs-load-progress {\n    padding-bottom: 8px; }\n  .video-js .vjs-hlsjs-controls-holder .vjs-progress-control:hover .vjs-mouse-display {\n    padding-bottom: 8px; }\n\n.video-js .vjs-hlsjs-lr-rec-status-bar {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  -webkit-user-select: none;\n          user-select: none; }\n  .video-js .vjs-hlsjs-lr-rec-status-bar .vjs-hlsjs-lr-rec-indicator {\n    display: flex;\n    color: red;\n    font-size: 11px;\n    margin-right: 10px;\n    margin-left: 1px; }\n  .video-js .vjs-hlsjs-lr-rec-status-bar .vjs-hlsjs-lr-divider {\n    padding: 0 2px; }\n", "",{"version":3,"sources":["D:\\projects\\altena_stream\\videojs-hlsjs-live-record/src\\plugin.scss","D:\\projects\\altena_stream\\videojs-hlsjs-live-record/src\\styles\\forms.scss","D:\\projects\\altena_stream\\videojs-hlsjs-live-record/src\\styles\\buttons.scss","D:\\projects\\altena_stream\\videojs-hlsjs-live-record/src\\styles\\vertical-tabs.scss","D:\\projects\\altena_stream\\videojs-hlsjs-live-record/src\\styles\\modal\\rec-settings.scss"],"names":[],"mappings":"AAAA,0GAAA;AACA,mBAAA;AACA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,gBAAgB;EAChB,0GAA0G,EAAA;;AAG5G;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,qCAAqC;EACrC,mCAAmC,EAAA;;AAGrC,+BAAA;AACA;EAAuB,cAAc,EAAA;;AACrC;EAAwB,eAAe,EAAA;;AACvC;EAAwB,eAAe,EAAA;;AACvC;EAAwB,eAAe,EAAA;;AACvC;EAAwB,eAAe,EAAA;;AACvC;EAAwB,eAAe,EAAA;;AACvC;EAAwB,eAAe,EAAA;;AAEvC,0DAAA;AACA;EAA0B,0BAA0B,EAAA;;AACpD;EAAsC,0BAA0B,EAAA;;AAEhE,yDAAA;AACA;EAA2B,YAA6B,EAAA;;AACxD;EAAuC,+BAA+B,EAAA;;AAEtE,uBAAA;AAEA;EACE,iBAAa;EACb,mBAAiB;EACjB,cAAY,EAAA;;AAGd;ECjDE,cAAc,EAAA;EDiDhB;IC/CI,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB,EAAA;ED6CvB;ICzCI,qBAAqB,EAAA;;ADyCzB;EEjDE,gBAAgB;EAChB,YAAY;EACZ,cAAc;EACd,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,qBAAqB;EACrB,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,UAAU;EACV,4BAA4B;EAC5B,yBAAyB;EACzB,uCAAuC;EACvC,oBAAoB;EACpB,oBAAoB,EAAA;EF6BtB;IE1BI,YAAY,EAAA;;AF0BhB;EGjDE,aAAa;EACb,WAAW;EACX,gBAAgB;EAGhB,oCAAoC,EAAA;;AH4CtC;EGxCE,YAAY;EACZ,aAAe;EACf,cAAc,EAAA;;AHsChB;EGlCE,iBAAiB;EACjB,eAAe;EACf,yBAAyB,EAAA;EHgC3B;IG9BI,sBAAsB,EAAA;EH8B1B;IG1BI,yBAA4B,EAAA;;AH0BhC;EGrBE,iBAAiB;EACjB,aAAa,EAAA;;AHoBf;EGhBE,aAAa;EACb,aAAa,EAAA;EHef;IGbI,cAAc,EAAA;;AHalB;EI9CI,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;;AJ4CvB;EIxCI,iBAAiB,EAAA;;AJwCrB;EAQM,+BAA+B;EAC/B,6BAA6B,EAAA;;AATnC;EAcI,wBAAwB,EAAA;;AAd5B;EAkBI,cAAc,EAAA;EAlBlB;IAsBQ,UAAU,EAAA;;AAtBlB;EA8BI,eAAe,EAAA;;AA9BnB;EAkCI,aAAa;EACb,UAAU;EACV,2BAA2B,EAAA;EApC/B;IAuCM,eAAe,EAAA;EAvCrB;IA4CQ,eAAe,EAAA;EA5CvB;IAkDQ,yBAAiC,EAAA;IAlDzC;MAoDU,0CAA0C,EAAA;EApDpD;IA0DU,mBAAmB,EAAA;EA1D7B;IA6DU,mBAAmB,EAAA;;AA7D7B;EAoEI,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,yBAAiB;UAAjB,iBAAiB,EAAA;EAvErB;IA2EM,aAAa;IACb,UAAU;IACV,eAAe;IACf,kBAAkB;IAClB,gBAAgB,EAAA;EA/EtB;IAqFM,cAAc,EAAA","file":"plugin.scss","sourcesContent":["/* FIXME: need replace color functions https://sass-lang.com/documentation/modules#other_color_functions */\n/* Material icons */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n}\n\n/* Rules for sizing the icon. */\n.material-icons.md-8 { font-size: 9px; }\n.material-icons.md-10 { font-size: 10px; }\n.material-icons.md-12 { font-size: 12px; }\n.material-icons.md-18 { font-size: 18px; }\n.material-icons.md-24 { font-size: 24px; }\n.material-icons.md-36 { font-size: 36px; }\n.material-icons.md-48 { font-size: 48px; }\n\n/* Rules for using icons as black on a light background. */\n.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }\n.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }\n\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light { color: rgba(255, 255, 255, 1); }\n.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }\n\n/* End material icons */\n\n:root {\n  --main-color: red;\n  --base-font-size: 9;\n  --font-size: 7;\n}\n\n.video-js {\n\n  @import \"styles/forms\";\n  @import \"styles/buttons\";\n  @import \"styles/modal/rec-settings\";\n\n  &.vjs-hlsjs-record-started {\n    .vjs-tech {\n      pointer-events: none !important;\n      touch-action: none !important;\n    }\n  }\n\n  .vjs-hlsjs-lr-hidden {\n    display: none !important;\n  }\n\n  &.vjs-hlsjs-live-record {\n    display: block;\n\n    &.vjs-user-inactive {\n      .vjs-control-bar {\n        opacity: 1;\n      }\n    }\n  }\n\n\n\n  .vjs-hlsjs-lr-stop {\n    cursor: pointer;\n  }\n\n  .vjs-hlsjs-controls-holder {\n    display: flex;\n    flex: auto;\n    flex-direction: row-reverse;\n\n    .vjs-live-display {\n      cursor: pointer;\n    }\n\n    .vjs-control {\n      &.vjs-at-live-edge {\n        cursor: pointer;\n      }\n    }\n\n    .vjs-progress-control {\n      .vjs-load-progress {\n        background-color: rgb(184, 55, 0);\n        div {\n          background-color: rgba(20, 177, 106, 0.95);\n        }\n      }\n\n      &:hover {\n        .vjs-load-progress {\n          padding-bottom: 8px;\n        }\n        .vjs-mouse-display {\n          padding-bottom: 8px;\n        }\n      }\n    }\n  }\n\n  .vjs-hlsjs-lr-rec-status-bar {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    user-select: none;\n\n\n    .vjs-hlsjs-lr-rec-indicator {\n      display: flex;\n      color: red;\n      font-size: 11px;\n      margin-right: 10px;\n      margin-left: 1px;\n    }\n    .vjs-hlsjs-lr-recorded {\n\n    }\n    .vjs-hlsjs-lr-divider {\n      padding: 0 2px;\n    }\n    .vjs-hlsjs-lr-record-left {\n\n    }\n  }\n}\n",".vjs-hlsjs-form-group {\n  padding: 5px 0;\n  .vjs-hlsjs-form-label {\n    display: inline-block;\n    font-weight: bold;\n    padding-right: 10px;\n  }\n\n  .vjs-hlsjs-form-input {\n    display: inline-block;\n  }\n}\n",".vjs-hlsjs-button {\n  background: none;\n  border: none;\n  color: inherit;\n  display: inline-block;\n  font-size: inherit;\n  line-height: inherit;\n  text-transform: none;\n  text-decoration: none;\n  transition: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  line-height: 1.5;\n  display: block;\n  cursor: pointer;\n  opacity: 1;\n  border: 0.06666em solid #fff;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  border-radius: 0.3em;\n  transition: all 0.3s;\n\n  &:disabled, &.disabled {\n    opacity: 0.6;\n  }\n}\n",".vjs-hlsjs-vertical-tabs {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n\n  //background-color: rgba(41, 41, 41, 0.8);\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.vjs-hlsjs-vertical-tabs-nav {\n  width: 140px;\n  flex: 140px 0 0;\n  flex-shrink: 0;\n}\n\n.vjs-hlsjs-vertical-tabs-nav-elem {\n  padding: 10px 5px;\n  cursor: pointer;\n  text-transform: uppercase;\n  &.active {\n    background-color: #333;\n  }\n\n  &:hover {\n    background-color: #333 - 10%;\n  }\n}\n\n.vjs-hlsjs-vertical-tabs-body {\n  min-height: 300px;\n  height: 300px;\n}\n\n.vjs-hlsjs-vertical-tabs-elem {\n  display: none;\n  padding: 10px;\n  &.active {\n    display: block;\n  }\n}\n","@import \"../vertical-tabs\";\n\n.vjs-hlsjs-lr-rec-settings.vjs-modal-dialog {\n  .vjs-modal-dialog-content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .vjs-hlsjs-start-record {\n    padding: 5px 10px;\n  }\n}\n"]}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Db21wb25lbnRzL1JlY1NldHRpbmdzTW9kYWxIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29tcG9uZW50cy9yZWNTZXR0aW5nc01vZGFsL0JhY2tncm91bmRSZWNvcmRUYWJIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29tcG9uZW50cy9yZWNTZXR0aW5nc01vZGFsL1JlYWxUaW1lUmVjb3JkVGFiSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL0NvbXBvbmVudHMvcmVjU2V0dGluZ3NNb2RhbC9UYWJzSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL0NvbnRyb2xsZXJzL1JlYWx0aW1lUmVjb3JkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29udHJvbGxlcnMvU3RvcmFnZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL0NvbnRyb2xsZXJzL1ZpZXdDb250cm9sbGVyLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Nb2RlbHMvRnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL01vZGVscy9QbGF5bGlzdC5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9DYWNoZWRCdXR0b25IbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9MaXZlQnV0dG9uSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL2NvbXBvbmVudHMvUHJvZ3Jlc3NDb250cm9sSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL2NvbXBvbmVudHMvUmVjQnV0dG9uSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL2NvbXBvbmVudHMvUmVjU3RhdHVzQmFySGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL2NvbXBvbmVudHMvU3RvcEJ1dHRvbkhsc0pzLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL3BsdWdpbi5zY3NzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi91dGlscy9kYXRlLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi91dGlscy9mb3JtYXQtdGltZS5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vdXRpbHMvdXVpZC5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vdXRpbHMveGhyLWxvYWRlci5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL2V4dGVybmFsIFwidmlkZW9qc1wiIl0sIm5hbWVzIjpbIlZpZGVvSnNNb2RhbERpYWxvZ0NsYXNzIiwidmlkZW9qcyIsImdldENvbXBvbmVudCIsIkRvbSIsImRvbSIsImRlZmF1bHRPcHRpb25zIiwiUmVjU2V0dGluZ3NNb2RhbEhsc0pzIiwiY29uc3RydWN0b3IiLCJwbGF5ZXIiLCJvcHRpb25zIiwiYnVpbGRDU1NDbGFzcyIsImNvbnRlbnQiLCJhbGxvd2VkIiwidGFic0NvbXBvbmVudCIsIlRhYnNIbHNKcyIsInBsYXllcl8iLCJlbF8iLCJyZW5kZXJOb3RBbGxvd2VkQ29udGVudCIsInJlbmRlcmVkRWxfIiwibm90QWxsb3dlZENvbnRlbnQiLCJjcmVhdGVFbCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsInByb3RvdHlwZSIsIm9wdGlvbnNfIiwiT2JqZWN0IiwiYXNzaWduIiwicGF1c2VPbk9wZW4iLCJmaWxsQWx3YXlzIiwidGVtcG9yYXJ5IiwidW5jbG9zZWFibGUiLCJyZWdpc3RlckNvbXBvbmVudCIsIlZpZGVvSnNDb21wb25lbnRDbGFzcyIsIkJhY2tncm91bmRSZWNvcmRUYWJIbHNKcyIsImNvbnNvbGUiLCJncm91cCIsImxvZyIsImdyb3VwRW5kIiwiUmVhbFRpbWVSZWNvcmRUYWJIbHNKcyIsImdldFF1YWxpdHlMZXZlbHMiLCJobHNqcyIsImhsc0pTTGl2ZVJlY29yZCIsImdldEhsc0pzIiwibGV2ZWxzIiwiY3VycmVudExldmVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGFiZWwiLCJoZWlnaHQiLCJ2YWx1ZSIsInNlbGVjdGVkIiwic29ydCIsImN1cnJlbnQiLCJuZXh0IiwiZWxlbSIsInJlYWx0aW1lUmVjb3JkIiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJIZWFkIiwicmVuZGVyUXVhbGl0eVNlbGVjdG9yIiwicmVuZGVyQnV0dG9uIiwicmVuZGVyRm9vdGVyIiwibW9kYWxIZWFkZXJDb250ZW50IiwibWF4UmVjb3JkTWludXRlcyIsIm1vZGFsRm9vdGVyQ29udGVudCIsInV1aWQiLCJmYWNlVVVJRCIsImZvciIsImlubmVyVGV4dCIsInF1YWxpdHlTZWxlY3QiLCJpZCIsImZvckVhY2giLCJ0ZXh0IiwiaG9sZGVyIiwib25jbGljayIsImhhbmRsZVN0YXJ0UmVjb3JkaW5nIiwiYmluZCIsInN0YXJ0UmVhbHRpbWVSZWNvcmQiLCJ0YWJzSG9sZGVyIiwicmVuZGVyTmF2IiwicmVuZGVyQm9keSIsIm5hdkhvbGRlciIsImhhbmRsZUNsaWNrIiwiYm9keUhvbGRlciIsImVsZW0xIiwiYmFja2dyb3VuZFJlY29yZCIsImVsZW0yIiwiJCQiLCJlbGVtSW5kZXgiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiSGxzIiwid2luZG93IiwiZmFjZU1pbWVQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJSZWFsdGltZVJlY29yZENvbnRyb2xsZXIiLCJwbHVnaW4iLCJyZXNwb25zZSIsInN0YXRzIiwiY29udGV4dCIsIm5ldHdvcmtEZXRhaWxzIiwibG9hZGVyIiwiZGVzdHJveSIsInN0b3JhZ2VDb250cm9sbGVyIiwic2F2ZUZyYWdtZW50IiwiZnJhZyIsImRhdGEiLCJ0aGVuIiwicGxheWxpc3QiLCJmcmFnbWVudFNhdmVkIiwic2F2ZVBsYXlsaXN0IiwiZXZlbnQiLCJyZWNvcmRTdGFydGVkIiwibWFuaWZlc3RMaXN0ZW5lciIsImxldmVsTGlzdGVuZXIiLCJmcmFnbWVudExpc3RlbmVyIiwiaW5pdCIsIm9uIiwiRXZlbnRzIiwiRlJBR19MT0FERUQiLCJobHNGcmFnbWVudExvYWRlZCIsInN0YXJ0UmVjb3JkIiwic3RvcFJlY29yZCIsImZpbmlzaGVkIiwiaW5pdFBsYXlsaXN0IiwibGV2ZWwiLCJYaHJMb2FkZXIiLCJ1cmwiLCJsb2FkZXJDb250ZXh0IiwiYWRkRnJhZ21lbnQiLCJkdXJhdGlvbiIsInJlc3BvbnNlVHlwZSIsInByb2dyZXNzRGF0YSIsImxvYWRlckNvbmZpZyIsInRpbWVvdXQiLCJtYXhSZXRyeSIsInJldHJ5RGVsYXkiLCJtYXhSZXRyeURlbGF5IiwibG9hZGVyQ2FsbGJhY2tzIiwib25TdWNjZXNzIiwiZnJhZ21lbnRMb2FkZWQiLCJsb2FkIiwibGV2ZWxJbmRleCIsIm1pbWVQcm9taXNlIiwiZ2V0UmVjb3JkTWltZSIsIlBsYXlsaXN0TW9kZWwiLCJub3dJbkZvcm1hdFltZEhpcyIsIndpZHRoIiwidGFyZ2V0ZHVyYXRpb24iLCJkZXRhaWxzIiwibWltZSIsIkRCX1ZFUlNJT04iLCJTVE9SQUdFX1dSSVRFX01PREUiLCJTVE9SQUdFX1JFQURfTU9ERSIsIlN0b3JhZ2VDb250cm9sbGVyIiwiZGIiLCJvcGVuUmVxdWVzdCIsImluZGV4ZWREQiIsIm9wZW4iLCJzdG9yYWdlRGJOYW1lIiwib251cGdyYWRlbmVlZGVkIiwicmVzdWx0IiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJzdG9yYWdlUGxheWxpc3RzTmFtZSIsImtleVBhdGgiLCJmcmFnbWVudHNTdG9yYWdlIiwic3RvcmFnZUZyYWdtZW50c05hbWUiLCJjcmVhdGVJbmRleCIsInVuaXF1ZSIsIm9uc3VjY2VzcyIsImNoZWNrUmVxdWlyZW1lbnRzIiwiZnJhZ21lbnQiLCJwYXlsb2FkIiwidHJhbnNhY3Rpb24iLCJzdG9yYWdlIiwib2JqZWN0U3RvcmUiLCJyZXF1ZXN0IiwiYWRkIiwib25lcnJvciIsInB1dCIsIlZpZXdDb250cm9sbGVyIiwiY29udHJvbEJhciIsImdldENoaWxkIiwic3BhY2UiLCJhZGRDaGlsZCIsInJlbW92ZURlZmF1bHRDb250cm9scyIsImxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWMiLCJzZWxlY3RvciIsImNoaWxkcmVuIiwiZmlsdGVyIiwiY29tcG9uZW50IiwiaGFzQ2xhc3MiLCJjYWNoZWRCdXR0b25Db21wb25lbnQiLCJjbGlja0hhbmRsZXIiLCJhY3RpdmVMaXZlTW9kZSIsImhpZGUiLCJsaXZlQnV0dG9uQ29tcG9uZW50IiwiYWN0aXZhdGVQcm9ncmVzc01vZGUiLCJyZWNCdXR0b25Db21wb25lbnQiLCJzaG93UmVjb3JkU2V0dGluZ3MiLCJzdG9wQnV0dG9uQ29tcG9uZW50Iiwic3RvcFJlYWx0aW1lUmVjb3JkIiwicmVjU3RhdHVzQmFyQ29tcG9uZW50IiwicHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50IiwicmVtb3ZlQ2hpbGQiLCJzaG93T3RoZXJDb250cm9sIiwic2hvd0xpdmVDb250cm9sIiwiaGlkZVByb2dyZXNzQ29udHJvbCIsImhpZGVSZWNDb250cm9sIiwibGl2ZVRyYWNrZXIiLCJzZWVrVG9MaXZlRWRnZSIsImUiLCJ3YXJuIiwibWVzc2FnZSIsInN0YXRlIiwicmVjb3JkSW5Qcm9jZXNzIiwic2hvd1Byb2dyZXNzQ29udHJvbCIsImhpZGVMaXZlQ29udHJvbCIsInJlY1NldHRpbmdzTW9kYWxDb21wb25lbnQiLCJjbG9zZSIsImhpZGVPdGhlckNvbnRyb2wiLCJzaG93UmVjQ29udHJvbCIsIm1heFJlY29yZFNlY29uZHMiLCJ1cGRhdGVSZWNvcmRMZWZ0VGltZSIsInVwZGF0ZVJlY29yZFRpbWUiLCJhIiwicmVjb3JkVXBkYXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNob3ciLCJjbGVhckludGVydmFsIiwiRnJhZ21lbnRNb2RlbCIsImZyYWdtZW50RGF0YSIsInBsYXlsaXN0SWQiLCJzcGxpdCIsInBvcCIsInNhdmVkIiwiY3JlYXRlUGxheWxpc3RIZWFkZXIiLCJhZGRQbGF5bGlzdEZyYWdtZW50IiwiZHVyYWN0aW9uIiwiY3JlYXRlUGxheWxpc3RGb290ZXIiLCJwbGF5bGlzdERhdGEiLCJmcmFnbWVudHMiLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93IiwidXBkYXRlZEF0IiwicmVjRmluaXNoZWQiLCJwdXNoIiwidG9TdHJpbmciLCJqb2luIiwiVmlkZW9Kc0J1dHRvbkNsYXNzIiwiQ2FjaGVkQnV0dG9uSGxzSnMiLCJ0YWciLCJwcm9wcyIsImF0dHJpYnV0ZXMiLCJub25JY29uQ29udHJvbCIsImNyZWF0ZUNvbnRyb2xUZXh0RWwiLCJlbCIsImNvbnRyb2xUZXh0XyIsImNhbGwiLCJhcmd1bWVudHMiLCJMaXZlQnV0dG9uSGxzSnMiLCJWaWRlb0pzUHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50IiwiUHJvZ3Jlc3NDb250cm9sSGxzSnMiLCJSZWNCdXR0b25IbHNKcyIsIlJlY1N0YXR1c0Jhckhsc0pzIiwicmVjb3JkZWRFbF8iLCJyZWNvcmRMZWZ0RWxfIiwidGltZSIsImZvcm1hdFRpbWUiLCJkaXNwb3NlIiwiU3RvcEJ1dHRvbkhsc0pzIiwiUGx1Z2luIiwiZ2V0UGx1Z2luIiwiZGVmYXVsdHMiLCJIbHNKU0xpdmVSZWNvcmRQbHVnaW4iLCJzZXRTdGF0ZSIsInZpZXdDb250cm9sbGVyIiwicmVhbHRpbWVSZWNvcmRDb250cm9sbGVyIiwidGVjaCIsIklXaWxsVXNlVGhpc0luUGx1Z2luIiwic291cmNlSGFuZGxlcl8iLCJobHMiLCJtZXJnZU9wdGlvbnMiLCJsZXZlbElkIiwiYWN0aXZhdGVSZWNvcmRNb2RlIiwiaGFuZGxlU3RhdGVDaGFuZ2VkIiwiVkVSU0lPTiIsImRlZmF1bHRTdGF0ZSIsInJlY29yZEFsbG93ZWQiLCJyZWdpc3RlclBsdWdpbiIsIm5vcm1hbGl6ZSIsIm51bWJlciIsInRvRm9ybWF0WW1kSGlzIiwiZGF0ZSIsInNlcGFyYXRvciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImRlZmF1bHRJbXBsZW1lbnRhdGlvbiIsInNlY29uZHMiLCJndWlkZSIsInMiLCJNYXRoIiwiZmxvb3IiLCJtIiwiaCIsImdtIiwiZ2giLCJpc05hTiIsIkluZmluaXR5IiwiaW1wbGVtZW50YXRpb24iLCJzZXRGb3JtYXRUaW1lIiwiY3VzdG9tSW1wbGVtZW50YXRpb24iLCJyZXNldEZvcm1hdFRpbWUiLCJwcmVmaXgiLCJwZXJmb3JtYW5jZSIsIlhNTEh0dHBSZXF1ZXN0IiwiY29uZmlnIiwieGhyU2V0dXAiLCJhYm9ydCIsInJlYWR5U3RhdGUiLCJhYm9ydGVkIiwiY2xlYXJUaW1lb3V0IiwicmVxdWVzdFRpbWVvdXQiLCJyZXRyeVRpbWVvdXQiLCJjYWxsYmFja3MiLCJ0cmVxdWVzdCIsInJldHJ5IiwibG9hZEludGVybmFsIiwieGhyIiwidGZpcnN0IiwibG9hZGVkIiwib25FcnJvciIsImNvZGUiLCJzdGF0dXMiLCJyYW5nZUVuZCIsInNldFJlcXVlc3RIZWFkZXIiLCJyYW5nZVN0YXJ0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlzdGF0ZWNoYW5nZSIsIm9ucHJvZ3Jlc3MiLCJsb2FkcHJvZ3Jlc3MiLCJzZXRUaW1lb3V0IiwibG9hZHRpbWVvdXQiLCJzZW5kIiwiY3VycmVudFRhcmdldCIsIm1heCIsInRsb2FkIiwibGVuIiwiYnl0ZUxlbmd0aCIsInJlc3BvbnNlVGV4dCIsImxlbmd0aCIsInRvdGFsIiwicmVzcG9uc2VVUkwiLCJzdGF0dXNUZXh0IiwibWluIiwib25UaW1lb3V0IiwibGVuZ3RoQ29tcHV0YWJsZSIsIm9uUHJvZ3Jlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7O0FDZmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLHVCQUF1QixHQUFHQywrQ0FBTyxDQUFDQyxZQUFSLENBQXFCLGFBQXJCLENBQWhDO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRiwrQ0FBTyxDQUFDRyxHQUFwQjtBQUVBLE1BQU1DLGNBQWMsR0FBRyxFQUF2QjtBQUVBOzs7O0FBR0EsTUFBTUMscUJBQU4sU0FBb0NOLHVCQUFwQyxDQUE0RDtBQUUxRDs7Ozs7O0FBTUFPLGFBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxPQUFULEVBQWtCO0FBQzNCLFVBQU1ELE1BQU4sRUFBY0MsT0FBZDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7QUFRQUMsZUFBYSxHQUFHO0FBQ2QsV0FBUSw2QkFBNEIsTUFBTUEsYUFBTixFQUFzQixFQUExRDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTUFDLFNBQU8sR0FBRztBQUNSLFFBQUcsS0FBS0YsT0FBTCxHQUFlRyxPQUFsQixFQUEyQjtBQUN6QixXQUFLQyxhQUFMLEdBQXFCLElBQUlDLG1FQUFKLENBQWMsS0FBS0MsT0FBbkIsRUFBNEIsS0FBS04sT0FBTCxFQUE1QixDQUFyQjtBQUNBLGFBQU8sS0FBS0ksYUFBTCxDQUFtQkcsR0FBMUI7QUFDRCxLQUhELE1BR087QUFDTCxhQUFPLEtBQUtDLHVCQUFMLEVBQVA7QUFDRDtBQUNGOztBQUVEQSx5QkFBdUIsR0FBRztBQUN4QixRQUFHLEtBQUtDLFdBQVIsRUFBcUI7QUFDbkIsYUFBTyxLQUFLQSxXQUFaO0FBQ0Q7O0FBRUQsVUFBTVAsT0FBTyxHQUFHLENBQUMsS0FBS0YsT0FBTCxHQUFlVSxpQkFBZixLQUFxQyxNQUFPLGdDQUE1QyxDQUFELEdBQWhCOztBQUVBLFNBQUtELFdBQUwsR0FBbUJmLEdBQUcsQ0FBQ2lCLFFBQUosQ0FBYSxLQUFiLEVBQW9CO0FBQ3JDQyxlQUFTLEVBQUUsRUFEMEI7QUFFckNDLGVBQVMsRUFBRVg7QUFGMEIsS0FBcEIsQ0FBbkI7QUFLQSxXQUFPLEtBQUtPLFdBQVo7QUFDRDs7QUFwRHlEOztBQXVENURaLHFCQUFxQixDQUFDaUIsU0FBdEIsQ0FBZ0NDLFFBQWhDLEdBQTJDQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCMUIsdUJBQXVCLENBQUN1QixTQUF4QixDQUFrQ0MsUUFBcEQsRUFBOEQ7QUFDdkdHLGFBQVcsRUFBRSxLQUQwRjtBQUV2R0MsWUFBVSxFQUFFLEtBRjJGO0FBR3ZHQyxXQUFTLEVBQUUsSUFINEY7QUFJdkdDLGFBQVcsRUFBRTtBQUowRixDQUE5RCxDQUEzQztBQU9BN0IsK0NBQU8sQ0FBQzhCLGlCQUFSLENBQTBCLHVCQUExQixFQUFtRHpCLHFCQUFuRDtBQUNlQSxvRkFBZixFOzs7Ozs7Ozs7Ozs7QUMxRUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNMEIscUJBQXFCLEdBQUcvQiwrQ0FBTyxDQUFDQyxZQUFSLENBQXFCLFdBQXJCLENBQTlCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRiwrQ0FBTyxDQUFDRyxHQUFwQjtBQUVBLE1BQU1DLGNBQWMsR0FBRyxFQUF2QjtBQUVBOzs7O0FBR0EsTUFBTTRCLHdCQUFOLFNBQXVDRCxxQkFBdkMsQ0FBNkQ7QUFFM0Q7Ozs7OztBQU1BekIsYUFBVyxDQUFDQyxNQUFELEVBQVNDLE9BQVQsRUFBa0I7QUFDM0J5QixXQUFPLENBQUNDLEtBQVIsQ0FBYyw4Q0FBZDtBQUNBRCxXQUFPLENBQUNFLEdBQVIsQ0FBWTVCLE1BQVo7QUFDQTBCLFdBQU8sQ0FBQ0csUUFBUjtBQUNBLFVBQU03QixNQUFOLEVBQWNDLE9BQWQ7QUFDRDs7QUFFRFcsVUFBUSxHQUFHO0FBQ1QsV0FBTyxNQUFNQSxRQUFOLENBQ0wsS0FESyxFQUVMO0FBQ0VDLGVBQVMsRUFBRSxpQ0FEYjtBQUVFQyxlQUFTLEVBQUU7QUFGYixLQUZLLENBQVA7QUFPRDs7QUF2QjBEOztBQTBCOUNXLHVGQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNRCxxQkFBcUIsR0FBRy9CLCtDQUFPLENBQUNDLFlBQVIsQ0FBcUIsV0FBckIsQ0FBOUI7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLCtDQUFPLENBQUNHLEdBQXBCO0FBQ0E7Ozs7QUFHQSxNQUFNa0Msc0JBQU4sU0FBcUNOLHFCQUFyQyxDQUEyRDtBQUV6RDs7Ozs7O0FBTUF6QixhQUFXLENBQUNDLE1BQUQsRUFBU0MsT0FBVCxFQUFrQjtBQUMzQixVQUFNRCxNQUFOLEVBQWNDLE9BQWQ7QUFDRDs7QUFFRDhCLGtCQUFnQixHQUFHO0FBQ2pCLFVBQU1DLEtBQUssR0FBRyxLQUFLaEMsTUFBTCxHQUFjaUMsZUFBZCxHQUFnQ0MsUUFBaEMsRUFBZDtBQUNBLFVBQU1DLE1BQU0sR0FBR0gsS0FBSyxDQUFDRyxNQUFOLElBQWdCLEVBQS9CO0FBQ0EsVUFBTUMsWUFBWSxHQUFHSixLQUFLLENBQUNJLFlBQU4sSUFBc0IsQ0FBM0M7QUFDQSxXQUFPRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsTUFDaEI7QUFDRUMsV0FBSyxFQUFFRixJQUFJLENBQUNHLE1BQUwsR0FBYyxHQUR2QjtBQUVFQyxXQUFLLEVBQUVILEtBRlQ7QUFHRUksY0FBUSxFQUFFSixLQUFLLEtBQUtIO0FBSHRCLEtBRGdCLENBQVgsRUFNSlEsSUFOSSxDQU1DLENBQUNDLE9BQUQsRUFBVUMsSUFBVixLQUFtQjtBQUN6QixVQUFLLE9BQU9ELE9BQVAsS0FBbUIsUUFBcEIsSUFBa0MsT0FBT0MsSUFBUCxLQUFnQixRQUF0RCxFQUFpRTtBQUMvRCxlQUFPLENBQUMsQ0FBUjtBQUNEOztBQUNELFVBQUlELE9BQU8sQ0FBQ0gsS0FBUixHQUFnQkksSUFBSSxDQUFDSixLQUF6QixFQUFnQztBQUM5QixlQUFPLENBQUMsQ0FBUjtBQUNEOztBQUNELFVBQUlHLE9BQU8sQ0FBQ0gsS0FBUixHQUFnQkksSUFBSSxDQUFDSixLQUF6QixFQUFnQztBQUM5QixlQUFPLENBQVA7QUFDRDs7QUFDRCxhQUFPLENBQVA7QUFDRCxLQWpCTSxDQUFQO0FBa0JEOztBQUVEOUIsVUFBUSxHQUFHO0FBQ1QsVUFBTW1DLElBQUksR0FBRyxNQUFNbkMsUUFBTixDQUNYLEtBRFcsRUFFWDtBQUNFQyxlQUFTLEVBQUU7QUFEYixLQUZXLENBQWI7O0FBT0EsUUFBRyxLQUFLWixPQUFMLEdBQWUrQyxjQUFmLENBQThCNUMsT0FBakMsRUFBMEM7QUFDeEMyQyxVQUFJLENBQUNFLFdBQUwsQ0FBaUIsS0FBS0MsVUFBTCxFQUFqQjtBQUNBSCxVQUFJLENBQUNFLFdBQUwsQ0FBaUIsS0FBS0UscUJBQUwsRUFBakI7QUFDQUosVUFBSSxDQUFDRSxXQUFMLENBQWlCLEtBQUtHLFlBQUwsRUFBakI7QUFDQUwsVUFBSSxDQUFDRSxXQUFMLENBQWlCLEtBQUtJLFlBQUwsRUFBakI7QUFDRCxLQUxELE1BS087QUFDTCxhQUFPTixJQUFJLENBQUNFLFdBQUwsQ0FBaUIsS0FBS3hDLHVCQUFMLEVBQWpCLENBQVA7QUFDRDs7QUFFRCxXQUFPc0MsSUFBUDtBQUNEOztBQUVERyxZQUFVLEdBQUc7QUFDWCxVQUFNL0MsT0FBTyxHQUFHLENBQUMsS0FBS0YsT0FBTCxHQUFlK0MsY0FBZixDQUE4Qk0sa0JBQTlCLEtBQXFELE1BQ3BFLDZGQUNBLDhHQURBLEdBRUEsdUdBRkEsR0FHQSwwQ0FIQSxHQUc2QyxLQUFLckQsT0FBTCxHQUFlc0QsZ0JBSDVELEdBRytFLFdBSmhFLENBQUQsR0FBaEI7O0FBTUEsV0FBTzVELEdBQUcsQ0FBQ2lCLFFBQUosQ0FBYSxLQUFiLEVBQW9CO0FBQ3pCRSxlQUFTLEVBQUVYO0FBRGMsS0FBcEIsQ0FBUDtBQUdEOztBQUVEa0QsY0FBWSxHQUFHO0FBQ2IsVUFBTWxELE9BQU8sR0FBRyxDQUFDLEtBQUtGLE9BQUwsR0FBZStDLGNBQWYsQ0FBOEJRLGtCQUE5QixLQUFxRCxNQUFPLEVBQTVELENBQUQsR0FBaEI7O0FBQ0EsV0FBTzdELEdBQUcsQ0FBQ2lCLFFBQUosQ0FBYSxLQUFiLEVBQW9CO0FBQ3pCRSxlQUFTLEVBQUVYO0FBRGMsS0FBcEIsQ0FBUDtBQUdEOztBQUVEZ0QsdUJBQXFCLEdBQUc7QUFDdEIsVUFBTUosSUFBSSxHQUFHcEQsR0FBRyxDQUFDaUIsUUFBSixDQUNYLEtBRFcsRUFFWDtBQUNFQyxlQUFTLEVBQUU7QUFEYixLQUZXLENBQWI7QUFNQSxVQUFNNEMsSUFBSSxHQUFHQyw0REFBUSxDQUFDLHdCQUFELENBQXJCO0FBRUFYLFFBQUksQ0FBQ0UsV0FBTCxDQUNFdEQsR0FBRyxDQUFDaUIsUUFBSixDQUFhLE9BQWIsRUFBc0I7QUFDcEIrQyxTQUFHLEVBQUVGLElBRGU7QUFFcEJHLGVBQVMsRUFBRSxTQUZTO0FBR3BCL0MsZUFBUyxFQUFFO0FBSFMsS0FBdEIsQ0FERjtBQVFBLFNBQUtnRCxhQUFMLEdBQXFCbEUsR0FBRyxDQUFDaUIsUUFBSixDQUFhLFFBQWIsRUFBdUI7QUFDMUNrRCxRQUFFLEVBQUVMLElBRHNDO0FBRTFDNUMsZUFBUyxFQUFFO0FBRitCLEtBQXZCLENBQXJCO0FBS0EsVUFBTXNCLE1BQU0sR0FBRyxLQUFLSixnQkFBTCxFQUFmO0FBRUFJLFVBQU0sQ0FBQzRCLE9BQVAsQ0FBZ0J6QixJQUFELElBQVU7QUFDdkIsV0FBS3VCLGFBQUwsQ0FBbUJaLFdBQW5CLENBQ0V0RCxHQUFHLENBQUNpQixRQUFKLENBQWEsUUFBYixFQUF1QjtBQUNyQjhCLGFBQUssRUFBRUosSUFBSSxDQUFDSSxLQURTO0FBRXJCc0IsWUFBSSxFQUFFMUIsSUFBSSxDQUFDRSxLQUZVO0FBR3JCRyxnQkFBUSxFQUFFTCxJQUFJLENBQUNLO0FBSE0sT0FBdkIsQ0FERjs7QUFPQSxVQUFHTCxJQUFJLENBQUNLLFFBQVIsRUFBa0I7QUFDaEIsYUFBS2tCLGFBQUwsQ0FBbUJuQixLQUFuQixHQUEyQkosSUFBSSxDQUFDSSxLQUFoQztBQUNEO0FBQ0YsS0FYRDtBQWFBSyxRQUFJLENBQUNFLFdBQUwsQ0FBaUIsS0FBS1ksYUFBdEI7QUFFQSxXQUFPZCxJQUFQO0FBQ0Q7O0FBRURLLGNBQVksR0FBRztBQUNiLFVBQU1hLE1BQU0sR0FBR3RFLEdBQUcsQ0FBQ2lCLFFBQUosQ0FDYixLQURhLEVBRWI7QUFDRUMsZUFBUyxFQUFFO0FBRGIsS0FGYSxDQUFmO0FBT0FvRCxVQUFNLENBQUNoQixXQUFQLENBQW1CdEQsR0FBRyxDQUFDaUIsUUFBSixDQUFhLFFBQWIsRUFBdUI7QUFDeENDLGVBQVMsRUFBRSx5Q0FENkI7QUFFeEMrQyxlQUFTLEVBQUUsaUJBRjZCO0FBR3hDTSxhQUFPLEVBQUUsS0FBS0Msb0JBQUwsQ0FBMEJDLElBQTFCLENBQStCLElBQS9CO0FBSCtCLEtBQXZCLENBQW5CO0FBTUEsV0FBT0gsTUFBUDtBQUNEOztBQUVEeEQseUJBQXVCLEdBQUc7QUFDeEIsUUFBRyxLQUFLQyxXQUFSLEVBQXFCO0FBQ25CLGFBQU8sS0FBS0EsV0FBWjtBQUNEOztBQUVELFVBQU1QLE9BQU8sR0FBRyxDQUFDLEtBQUtGLE9BQUwsR0FBZStDLGNBQWYsQ0FBOEJyQyxpQkFBOUIsS0FBb0QsTUFBTyxnQ0FBM0QsQ0FBRCxHQUFoQjs7QUFFQSxTQUFLRCxXQUFMLEdBQW1CZixHQUFHLENBQUNpQixRQUFKLENBQWEsS0FBYixFQUFvQjtBQUNyQ0MsZUFBUyxFQUFFLEVBRDBCO0FBRXJDQyxlQUFTLEVBQUVYO0FBRjBCLEtBQXBCLENBQW5CO0FBS0EsV0FBTyxLQUFLTyxXQUFaO0FBQ0Q7O0FBRUR5RCxzQkFBb0IsR0FBRztBQUNyQixTQUFLbkUsTUFBTCxHQUFjaUMsZUFBZCxHQUFnQ29DLG1CQUFoQyxDQUFvRCxLQUFLUixhQUFMLENBQW1CbkIsS0FBdkU7QUFDRDs7QUF2SndEOztBQTBKNUNaLHFGQUFmLEU7Ozs7Ozs7Ozs7OztBQ2xLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTU4scUJBQXFCLEdBQUcvQiwrQ0FBTyxDQUFDQyxZQUFSLENBQXFCLFdBQXJCLENBQTlCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRiwrQ0FBTyxDQUFDRyxHQUFwQjtBQUVBLE1BQU1DLGNBQWMsR0FBRyxFQUF2QjtBQUVBOzs7O0FBR0EsTUFBTVMsU0FBTixTQUF3QmtCLHFCQUF4QixDQUE4QztBQUU1Qzs7Ozs7O0FBTUF6QixhQUFXLENBQUNDLE1BQUQsRUFBU0MsT0FBVCxFQUFrQjtBQUMzQixVQUFNRCxNQUFOLEVBQWNDLE9BQWQ7QUFDRDs7QUFFRFcsVUFBUSxHQUFHO0FBQ1QsVUFBTTBELFVBQVUsR0FBRyxNQUFNMUQsUUFBTixDQUNqQixLQURpQixFQUVqQjtBQUNFQyxlQUFTLEVBQUU7QUFEYixLQUZpQixDQUFuQjtBQU9BeUQsY0FBVSxDQUFDckIsV0FBWCxDQUF1QixLQUFLc0IsU0FBTCxFQUF2QjtBQUVBRCxjQUFVLENBQUNyQixXQUFYLENBQXVCLEtBQUt1QixVQUFMLEVBQXZCO0FBRUEsV0FBT0YsVUFBUDtBQUNEOztBQUdEQyxXQUFTLEdBQUc7QUFDVixVQUFNRSxTQUFTLEdBQUc5RSxHQUFHLENBQUNpQixRQUFKLENBQWEsS0FBYixFQUFvQjtBQUNwQ0MsZUFBUyxFQUFFO0FBRHlCLEtBQXBCLENBQWxCO0FBR0E0RCxhQUFTLENBQUN4QixXQUFWLENBQ0V0RCxHQUFHLENBQUNpQixRQUFKLENBQWEsS0FBYixFQUFvQjtBQUNsQkMsZUFBUyxFQUFFLHlDQURPO0FBRWxCQyxlQUFTLEVBQUUsVUFGTztBQUdsQm9ELGFBQU8sRUFBRSxNQUFNO0FBQUMsYUFBS1EsV0FBTCxDQUFpQixDQUFqQjtBQUFvQjtBQUhsQixLQUFwQixDQURGO0FBUUFELGFBQVMsQ0FBQ3hCLFdBQVYsQ0FDRXRELEdBQUcsQ0FBQ2lCLFFBQUosQ0FBYSxLQUFiLEVBQW9CO0FBQ2xCQyxlQUFTLEVBQUUsa0NBRE87QUFFbEJDLGVBQVMsRUFBRSxZQUZPO0FBR2xCb0QsYUFBTyxFQUFFLE1BQU07QUFBQyxhQUFLUSxXQUFMLENBQWlCLENBQWpCO0FBQW9CO0FBSGxCLEtBQXBCLENBREY7QUFRQSxXQUFPRCxTQUFQO0FBQ0Q7O0FBRURELFlBQVUsR0FBRztBQUNYLFVBQU1HLFVBQVUsR0FBR2hGLEdBQUcsQ0FBQ2lCLFFBQUosQ0FBYSxLQUFiLEVBQW9CO0FBQ3JDQyxlQUFTLEVBQUU7QUFEMEIsS0FBcEIsQ0FBbkI7QUFJQSxTQUFLbUMsY0FBTCxHQUFzQixJQUFJbEIsK0RBQUosQ0FBMkIsS0FBS3ZCLE9BQWhDLEVBQXlDLEtBQUtOLE9BQUwsRUFBekMsQ0FBdEI7QUFDQSxVQUFNMkUsS0FBSyxHQUFHakYsR0FBRyxDQUFDaUIsUUFBSixDQUFhLEtBQWIsRUFBb0I7QUFDaENDLGVBQVMsRUFBRTtBQURxQixLQUFwQixDQUFkO0FBR0ErRCxTQUFLLENBQUMzQixXQUFOLENBQWtCLEtBQUtELGNBQUwsQ0FBb0J4QyxHQUF0QztBQUNBbUUsY0FBVSxDQUFDMUIsV0FBWCxDQUF1QjJCLEtBQXZCO0FBRUEsU0FBS0MsZ0JBQUwsR0FBd0IsSUFBSXBELGlFQUFKLENBQTZCLEtBQUtsQixPQUFsQyxFQUEyQyxLQUFLTixPQUFMLEVBQTNDLENBQXhCO0FBQ0EsVUFBTTZFLEtBQUssR0FBR25GLEdBQUcsQ0FBQ2lCLFFBQUosQ0FBYSxLQUFiLEVBQW9CO0FBQ2hDQyxlQUFTLEVBQUU7QUFEcUIsS0FBcEIsQ0FBZDtBQUdBaUUsU0FBSyxDQUFDN0IsV0FBTixDQUFrQixLQUFLNEIsZ0JBQUwsQ0FBc0JyRSxHQUF4QztBQUNBbUUsY0FBVSxDQUFDMUIsV0FBWCxDQUF1QjZCLEtBQXZCO0FBRUEsV0FBT0gsVUFBUDtBQUNEOztBQUVERCxhQUFXLENBQUNuQyxLQUFELEVBQVE7QUFDakIsU0FBS3dDLEVBQUwsQ0FBUSxtQ0FBUixFQUE2Q2hCLE9BQTdDLENBQXFELENBQUNoQixJQUFELEVBQU9pQyxTQUFQLEtBQXFCO0FBQ3hFLFVBQUd6QyxLQUFLLEtBQUt5QyxTQUFiLEVBQXdCO0FBQ3RCckYsV0FBRyxDQUFDc0YsUUFBSixDQUFhbEMsSUFBYixFQUFtQixRQUFuQjtBQUNELE9BRkQsTUFFTztBQUNMcEQsV0FBRyxDQUFDdUYsV0FBSixDQUFnQm5DLElBQWhCLEVBQXNCLFFBQXRCO0FBQ0Q7QUFDRixLQU5EO0FBT0EsU0FBS2dDLEVBQUwsQ0FBUSwrQkFBUixFQUF5Q2hCLE9BQXpDLENBQWlELENBQUNoQixJQUFELEVBQU9pQyxTQUFQLEtBQXFCO0FBQ3BFLFVBQUd6QyxLQUFLLEtBQUt5QyxTQUFiLEVBQXdCO0FBQ3RCckYsV0FBRyxDQUFDc0YsUUFBSixDQUFhbEMsSUFBYixFQUFtQixRQUFuQjtBQUNELE9BRkQsTUFFTztBQUNMcEQsV0FBRyxDQUFDdUYsV0FBSixDQUFnQm5DLElBQWhCLEVBQXNCLFFBQXRCO0FBQ0Q7QUFDRixLQU5EO0FBT0Q7O0FBeEYyQzs7QUEyRi9CekMsd0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUNBO0FBQ0E7QUFFQSxNQUFNNkUsR0FBRyxHQUFHQyxNQUFNLENBQUNELEdBQW5COztBQUVBLE1BQU1FLGVBQWUsR0FBRyxNQUFNO0FBQzVCLFNBQU8sSUFBSUMsT0FBSixDQUFhQyxPQUFELElBQWE7QUFDOUJBLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDRCxHQUZNLENBQVA7QUFHRCxDQUpEOztBQU1BLE1BQU1DLHdCQUFOLENBQStCO0FBQzdCekYsYUFBVyxDQUFDMEYsTUFBRCxFQUFTO0FBQUEseUdBaUZILENBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFrQkMsT0FBbEIsRUFBMkJDLGNBQWMsR0FBRyxJQUE1QyxLQUFxRDtBQUNwRUQsYUFBTyxDQUFDRSxNQUFSLENBQWVDLE9BQWY7QUFDQUgsYUFBTyxDQUFDRSxNQUFSLEdBQWlCLElBQWpCO0FBRUEsV0FBS0wsTUFBTCxDQUFZTyxpQkFBWixDQUE4QkMsWUFBOUIsQ0FBMkNMLE9BQU8sQ0FBQ00sSUFBbkQsRUFBeURSLFFBQVEsQ0FBQ1MsSUFBbEUsRUFBd0VSLEtBQXhFLEVBQStFUyxJQUEvRSxDQUFvRixNQUFNO0FBQ3hGLGFBQUtDLFFBQUwsQ0FBY0MsYUFBZCxDQUE0QlYsT0FBTyxDQUFDTSxJQUFwQztBQUNBLGFBQUtULE1BQUwsQ0FBWU8saUJBQVosQ0FBOEJPLFlBQTlCLENBQTJDLEtBQUtGLFFBQWhEO0FBQ0QsT0FIRDtBQUlELEtBekZtQjs7QUFBQSw0R0EyRkEsQ0FBQ0csS0FBRCxFQUFRTCxJQUFSLEtBQWlCO0FBQ25DLFVBQUcsS0FBS00sYUFBUixFQUF1QjtBQUNyQixhQUFLUixZQUFMLENBQWtCRSxJQUFJLENBQUNELElBQXZCO0FBQ0Q7QUFDRixLQS9GbUI7O0FBQ2xCLFNBQUtULE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtpQixnQkFBTCxHQUF3QixJQUF4QjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QixJQUF4QjtBQUNBLFNBQUtILGFBQUwsR0FBcUIsS0FBckI7QUFFQSxTQUFLSixRQUFMLEdBQWdCLElBQWhCO0FBQ0Q7O0FBRURRLE1BQUksR0FBRztBQUNMLFVBQU03RSxLQUFLLEdBQUcsS0FBS3lELE1BQUwsQ0FBWXZELFFBQVosRUFBZDtBQUNBLFNBQUswRSxnQkFBTCxHQUF3QjVFLEtBQUssQ0FBQzhFLEVBQU4sQ0FBUzNCLEdBQUcsQ0FBQzRCLE1BQUosQ0FBV0MsV0FBcEIsRUFBaUMsS0FBS0MsaUJBQXRDLENBQXhCO0FBQ0Q7O0FBRURDLGFBQVcsR0FBRztBQUNaLFNBQUtiLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLSSxhQUFMLEdBQXFCLElBQXJCO0FBQ0Q7O0FBRURVLFlBQVUsR0FBRztBQUNYLFNBQUtWLGFBQUwsR0FBcUIsS0FBckI7O0FBQ0EsUUFBRyxLQUFLSixRQUFSLEVBQWtCO0FBQ2hCLFdBQUtBLFFBQUwsQ0FBY2UsUUFBZDtBQUNBLFdBQUszQixNQUFMLENBQVlPLGlCQUFaLENBQThCTyxZQUE5QixDQUEyQyxLQUFLRixRQUFoRDtBQUNEO0FBQ0Y7O0FBRURKLGNBQVksQ0FBQ0MsSUFBRCxFQUFPO0FBQ2pCLFFBQUcsS0FBS0csUUFBTCxLQUFrQixJQUFyQixFQUEyQjtBQUN6QixXQUFLZ0IsWUFBTCxDQUFrQm5CLElBQUksQ0FBQ29CLEtBQXZCO0FBQ0Q7O0FBRUQsUUFBRyxLQUFLakIsUUFBTCxLQUFrQixJQUFyQixFQUEyQjtBQUN6QjtBQUNEOztBQUVELFVBQU1QLE1BQU0sR0FBRyxJQUFJeUIseURBQUosRUFBZjtBQUNBLFVBQU1DLEdBQUcsR0FBR3RCLElBQUksQ0FBQ3NCLEdBQWpCO0FBQ0EsVUFBTUMsYUFBYSxHQUFHO0FBQ3BCRCxTQURvQjtBQUVwQnRCLFVBQUksRUFBRSxLQUFLRyxRQUFMLENBQWNxQixXQUFkLENBQTBCeEIsSUFBSSxDQUFDeUIsUUFBL0IsRUFBeUNILEdBQXpDLENBRmM7QUFHcEJJLGtCQUFZLEVBQUUsYUFITTtBQUlwQkMsa0JBQVksRUFBRSxLQUpNO0FBS3BCL0I7QUFMb0IsS0FBdEI7QUFPQSxVQUFNZ0MsWUFBWSxHQUFHO0FBQ25CQyxhQUFPLEVBQUUsRUFEVTtBQUVuQkMsY0FBUSxFQUFFLENBRlM7QUFHbkJDLGdCQUFVLEVBQUUsQ0FITztBQUluQkMsbUJBQWEsRUFBRTtBQUpJLEtBQXJCO0FBT0EsVUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxlQUFTLEVBQUUsS0FBS0M7QUFETSxLQUF4QjtBQUdBdkMsVUFBTSxDQUFDd0MsSUFBUCxDQUFZYixhQUFaLEVBQTJCSyxZQUEzQixFQUF5Q0ssZUFBekM7QUFDRDs7QUFFRGQsY0FBWSxDQUFDa0IsVUFBRCxFQUFhO0FBQ3ZCLFVBQU12RyxLQUFLLEdBQUcsS0FBS3lELE1BQUwsQ0FBWXZELFFBQVosRUFBZDtBQUNBLFVBQU1vRixLQUFLLEdBQUd0RixLQUFLLENBQUNHLE1BQU4sQ0FBYW9HLFVBQWIsQ0FBZDtBQUNBLFVBQU1DLFdBQVcsR0FBRyxDQUFDLEtBQUsvQyxNQUFMLENBQVl4RixPQUFaLENBQW9CK0MsY0FBcEIsQ0FBbUN5RixhQUFuQyxJQUFvRHBELGVBQXJELEdBQXBCOztBQUVBLFFBQUcsQ0FBQ2lDLEtBQUosRUFBVztBQUNUO0FBQ0Q7O0FBRUQsU0FBS2pCLFFBQUwsR0FBZ0IsSUFBSXFDLDhEQUFKLENBQWtCO0FBQ2hDNUUsUUFBRSxFQUFFLFlBQVk2RSxxRUFBaUIsRUFERDtBQUVoQ0MsV0FBSyxFQUFFdEIsS0FBSyxDQUFDc0IsS0FGbUI7QUFHaENuRyxZQUFNLEVBQUU2RSxLQUFLLENBQUM3RSxNQUhrQjtBQUloQ29HLG9CQUFjLEVBQUV2QixLQUFLLENBQUN3QixPQUFOLENBQWNEO0FBSkUsS0FBbEIsQ0FBaEI7QUFPQUwsZUFBVyxDQUFDcEMsSUFBWixDQUFrQjJDLElBQUQsSUFBVTtBQUN6QixXQUFLMUMsUUFBTCxDQUFjMEMsSUFBZCxHQUFxQkEsSUFBckI7QUFDQSxXQUFLdEQsTUFBTCxDQUFZTyxpQkFBWixDQUE4Qk8sWUFBOUIsQ0FBMkMsS0FBS0YsUUFBaEQ7QUFDRCxLQUhEO0FBSUQ7O0FBaEY0Qjs7QUFtR2hCYix1RkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR0EsTUFBTXdELFVBQVUsR0FBRyxDQUFuQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLFdBQTNCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsVUFBMUI7O0FBRUEsTUFBTUMsaUJBQU4sQ0FBd0I7QUFDdEJwSixhQUFXLENBQUMwRixNQUFELEVBQVM7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBSzJELEVBQUwsR0FBVSxJQUFWO0FBQ0Q7O0FBR0R2QyxNQUFJLEdBQUc7QUFDTCxVQUFNd0MsV0FBVyxHQUFHQyxTQUFTLENBQUNDLElBQVYsQ0FBZSxLQUFLOUQsTUFBTCxDQUFZeEYsT0FBWixDQUFvQnVKLGFBQW5DLEVBQWtEUixVQUFsRCxDQUFwQjs7QUFDQUssZUFBVyxDQUFDSSxlQUFaLEdBQThCLE1BQU07QUFDbEMsV0FBS0wsRUFBTCxHQUFVQyxXQUFXLENBQUNLLE1BQXRCO0FBQ0EsV0FBS04sRUFBTCxDQUFRTyxpQkFBUixDQUEwQixLQUFLbEUsTUFBTCxDQUFZeEYsT0FBWixDQUFvQjJKLG9CQUE5QyxFQUFvRTtBQUFDQyxlQUFPLEVBQUU7QUFBVixPQUFwRTtBQUVBLFlBQU1DLGdCQUFnQixHQUFHLEtBQUtWLEVBQUwsQ0FBUU8saUJBQVIsQ0FBMEIsS0FBS2xFLE1BQUwsQ0FBWXhGLE9BQVosQ0FBb0I4SixvQkFBOUMsRUFBb0U7QUFBQ0YsZUFBTyxFQUFFO0FBQVYsT0FBcEUsQ0FBekI7QUFDQUMsc0JBQWdCLENBQUNFLFdBQWpCLENBQTZCLFlBQTdCLEVBQTJDLFlBQTNDLEVBQXlEO0FBQUNDLGNBQU0sRUFBRTtBQUFULE9BQXpEO0FBQ0QsS0FORDs7QUFRQVosZUFBVyxDQUFDYSxTQUFaLEdBQXdCLE1BQU07QUFDNUIsV0FBS2QsRUFBTCxHQUFVQyxXQUFXLENBQUNLLE1BQXRCO0FBQ0QsS0FGRDtBQUdEOztBQUVEUyxtQkFBaUIsR0FBRztBQUNsQixXQUFPLGVBQWUvRSxNQUF0QjtBQUNELEdBeEJxQixDQTBCdEI7OztBQUNBYSxjQUFZLENBQUNtRSxRQUFELEVBQVdDLE9BQVgsRUFBb0IxRSxLQUFwQixFQUEyQjtBQUNyQyxXQUFPLElBQUlMLE9BQUosQ0FBYUMsT0FBRCxJQUFhO0FBQzlCLFVBQUcsS0FBSzZELEVBQUwsS0FBWSxJQUFmLEVBQXFCO0FBQ25CN0QsZUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBO0FBQ0Q7O0FBQ0QsWUFBTStFLFdBQVcsR0FBRyxLQUFLbEIsRUFBTCxDQUFRa0IsV0FBUixDQUFvQixLQUFLN0UsTUFBTCxDQUFZeEYsT0FBWixDQUFvQjhKLG9CQUF4QyxFQUE4RGQsa0JBQTlELENBQXBCO0FBQ0EsWUFBTXNCLE9BQU8sR0FBR0QsV0FBVyxDQUFDRSxXQUFaLENBQXdCLEtBQUsvRSxNQUFMLENBQVl4RixPQUFaLENBQW9COEosb0JBQTVDLENBQWhCO0FBQ0EsWUFBTVUsT0FBTyxHQUFHRixPQUFPLENBQUNHLEdBQVIsbUJBQ1hOLFFBRFc7QUFFZEMsZUFGYztBQUdkMUU7QUFIYyxTQUFoQjs7QUFNQThFLGFBQU8sQ0FBQ1AsU0FBUixHQUFvQixZQUFXLENBQzdCO0FBQ0E7QUFDQTtBQUNELE9BSkQ7O0FBS0FPLGFBQU8sQ0FBQ0UsT0FBUixHQUFrQixZQUFXLENBQzNCO0FBQ0E7QUFDQTtBQUNELE9BSkQ7O0FBS0FwRixhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsS0F4Qk0sQ0FBUDtBQXlCRCxHQXJEcUIsQ0F1RHRCOzs7QUFDQWdCLGNBQVksQ0FBQ0YsUUFBRCxFQUFXO0FBQ3JCLFdBQU8sSUFBSWYsT0FBSixDQUFhQyxPQUFELElBQWE7QUFDOUIsVUFBRyxLQUFLNkQsRUFBTCxLQUFZLElBQWYsRUFBcUI7QUFDbkI3RCxlQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0E7QUFDRDs7QUFDRCxZQUFNK0UsV0FBVyxHQUFHLEtBQUtsQixFQUFMLENBQVFrQixXQUFSLENBQW9CLEtBQUs3RSxNQUFMLENBQVl4RixPQUFaLENBQW9CMkosb0JBQXhDLEVBQThEWCxrQkFBOUQsQ0FBcEI7QUFDQSxZQUFNc0IsT0FBTyxHQUFHRCxXQUFXLENBQUNFLFdBQVosQ0FBd0IsS0FBSy9FLE1BQUwsQ0FBWXhGLE9BQVosQ0FBb0IySixvQkFBNUMsQ0FBaEI7QUFDQSxZQUFNYSxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0ssR0FBUixDQUFZdkUsUUFBWixDQUFoQjs7QUFFQW9FLGFBQU8sQ0FBQ1AsU0FBUixHQUFvQixZQUFXLENBQzdCO0FBQ0E7QUFDQTtBQUNELE9BSkQ7O0FBS0FPLGFBQU8sQ0FBQ0UsT0FBUixHQUFrQixZQUFXLENBQzNCO0FBQ0E7QUFDQTtBQUNELE9BSkQ7O0FBS0FwRixhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsS0FwQk0sQ0FBUDtBQXFCRDs7QUE5RXFCOztBQW1GVDRELGdGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBOztBQUVBLE1BQU0wQixjQUFOLENBQXFCO0FBQ25COUssYUFBVyxDQUFDMEYsTUFBRCxFQUFTO0FBQUEsK0ZBZ0JiLE1BQU07QUFDWCxZQUFNcUYsVUFBVSxHQUFHLEtBQUtyRixNQUFMLENBQVl6RixNQUFaLENBQW1CK0ssUUFBbkIsQ0FBNEIsWUFBNUIsQ0FBbkI7QUFDQSxZQUFNQyxLQUFLLEdBQUdGLFVBQVUsQ0FBQ0csUUFBWCxDQUFvQixXQUFwQixFQUFpQyxFQUFqQyxFQUFxQyxDQUFyQyxDQUFkO0FBQ0FELFdBQUssQ0FBQy9GLFFBQU4sQ0FBZSwyQkFBZjtBQUVBLFdBQUtpRyxxQkFBTDtBQUVBLFdBQUtDLHlCQUFMLEdBQWlDLEtBQUsxRixNQUFMLENBQVl4RixPQUFaLENBQW9Ca0wseUJBQXBCLENBQThDOUksR0FBOUMsQ0FBbUQrSSxRQUFELElBQWM7QUFDL0YsZUFBT04sVUFBVSxDQUFDTyxRQUFYLEdBQXNCQyxNQUF0QixDQUE2QkMsU0FBUyxJQUFJQSxTQUFTLENBQUNDLFFBQVYsQ0FBbUJKLFFBQW5CLENBQTFDLEVBQXdFLENBQXhFLENBQVA7QUFDRCxPQUZnQyxFQUU5QkUsTUFGOEIsQ0FFdkJDLFNBQVMsSUFBSSxDQUFDLENBQUNBLFNBRlEsQ0FBakM7QUFJQSxXQUFLRSxxQkFBTCxHQUE2QlQsS0FBSyxDQUFDQyxRQUFOLENBQWUsbUJBQWYsRUFBb0M7QUFDL0RTLG9CQUFZLEVBQUUsS0FBS0M7QUFENEMsT0FBcEMsRUFFMUIsQ0FGMEIsQ0FBN0I7QUFHQSxXQUFLRixxQkFBTCxDQUEyQkcsSUFBM0I7QUFFQSxXQUFLQyxtQkFBTCxHQUEyQmYsVUFBVSxDQUFDRyxRQUFYLENBQW9CLGlCQUFwQixFQUF1QztBQUNoRVMsb0JBQVksRUFBRSxLQUFLSTtBQUQ2QyxPQUF2QyxFQUV4QixDQUZ3QixDQUEzQjtBQUdBLFdBQUtELG1CQUFMLENBQXlCRCxJQUF6QjtBQUVBLFdBQUtHLGtCQUFMLEdBQTBCZixLQUFLLENBQUNDLFFBQU4sQ0FBZSxnQkFBZixFQUFpQztBQUN6RFMsb0JBQVksRUFBRSxLQUFLTTtBQURzQyxPQUFqQyxFQUV2QixDQUZ1QixDQUExQjtBQUdBLFdBQUtELGtCQUFMLENBQXdCSCxJQUF4QjtBQUVBLFdBQUtLLG1CQUFMLEdBQTJCbkIsVUFBVSxDQUFDRyxRQUFYLENBQW9CLGlCQUFwQixFQUF1QztBQUNoRVMsb0JBQVksRUFBRSxLQUFLakcsTUFBTCxDQUFZeUc7QUFEc0MsT0FBdkMsRUFFeEIsQ0FGd0IsQ0FBM0I7QUFHQSxXQUFLRCxtQkFBTCxDQUF5QkwsSUFBekI7QUFFQSxXQUFLTyxxQkFBTCxHQUE2Qm5CLEtBQUssQ0FBQ0MsUUFBTixDQUFlLG1CQUFmLEVBQW9DLENBQXBDLENBQTdCO0FBQ0EsV0FBS2tCLHFCQUFMLENBQTJCUCxJQUEzQjtBQUVBLFdBQUtRLHdCQUFMLEdBQWdDcEIsS0FBSyxDQUFDQyxRQUFOLENBQWUsc0JBQWYsRUFBdUMsRUFBdkMsRUFBMkMsQ0FBM0MsQ0FBaEM7QUFDQSxXQUFLbUIsd0JBQUwsQ0FBOEJSLElBQTlCO0FBRUEsV0FBS0QsY0FBTDtBQUNELEtBdERtQjs7QUFBQSxnSEF3REksTUFBTTtBQUM1QixZQUFNYixVQUFVLEdBQUcsS0FBS3JGLE1BQUwsQ0FBWXpGLE1BQVosQ0FBbUIrSyxRQUFuQixDQUE0QixZQUE1QixDQUFuQjtBQUNBRCxnQkFBVSxDQUFDdUIsV0FBWCxDQUF1QixpQkFBdkI7QUFDQXZCLGdCQUFVLENBQUN1QixXQUFYLENBQXVCLFlBQXZCO0FBQ0F2QixnQkFBVSxDQUFDdUIsV0FBWCxDQUF1QixhQUF2QjtBQUNELEtBN0RtQjs7QUFBQSx5R0ErREgsTUFBTTtBQUNyQixVQUFJO0FBQ0YsYUFBS0MsZ0JBQUw7QUFDQSxhQUFLQyxlQUFMO0FBQ0EsYUFBS0MsbUJBQUw7QUFDQSxhQUFLQyxjQUFMO0FBQ0EsYUFBS2hILE1BQUwsQ0FBWXpGLE1BQVosQ0FBbUIwTSxXQUFuQixDQUErQkMsY0FBL0I7QUFDRCxPQU5ELENBTUUsT0FBT0MsQ0FBUCxFQUFVO0FBQ1YsYUFBS25ILE1BQUwsQ0FBWXpGLE1BQVosQ0FBbUI0QixHQUFuQixDQUF1QmlMLElBQXZCLENBQTRCRCxDQUFDLENBQUNFLE9BQTlCO0FBQ0Q7QUFDRixLQXpFbUI7O0FBQUEsK0dBMkVHLE1BQU07QUFDM0IsVUFBRyxLQUFLckgsTUFBTCxDQUFZc0gsS0FBWixDQUFrQkMsZUFBckIsRUFBc0M7QUFDcEM7QUFDRDs7QUFDRCxXQUFLVixnQkFBTDtBQUNBLFdBQUtXLG1CQUFMO0FBQ0EsV0FBS0MsZUFBTDtBQUNBLFdBQUtULGNBQUw7QUFDRCxLQW5GbUI7O0FBQUEsNkdBcUZDLE1BQU07QUFDekIsV0FBS1UseUJBQUwsR0FBaUMsSUFBSXJOLHlFQUFKLENBQTBCLEtBQUsyRixNQUFMLENBQVl6RixNQUF0QyxFQUE4QyxLQUFLeUYsTUFBTCxDQUFZeEYsT0FBMUQsQ0FBakM7QUFDQSxXQUFLd0YsTUFBTCxDQUFZekYsTUFBWixDQUFtQmlMLFFBQW5CLENBQTRCLEtBQUtrQyx5QkFBakM7QUFDQSxXQUFLQSx5QkFBTCxDQUErQjVELElBQS9CO0FBQ0QsS0F6Rm1COztBQUFBLDZHQTJGQyxNQUFNO0FBQ3pCLFdBQUs0RCx5QkFBTCxDQUErQkMsS0FBL0I7QUFDQSxXQUFLWixtQkFBTDtBQUNBLFdBQUtVLGVBQUw7QUFDQSxXQUFLRyxnQkFBTDtBQUNBLFdBQUtDLGNBQUw7QUFDRCxLQWpHbUI7O0FBQUEseUdBbUdILE1BQU07QUFDckIsWUFBTUMsZ0JBQWdCLEdBQUcsS0FBSzlILE1BQUwsQ0FBWXhGLE9BQVosQ0FBb0JzRCxnQkFBcEIsR0FBdUMsRUFBaEU7QUFDQSxXQUFLa0MsTUFBTCxDQUFZekYsTUFBWixDQUFtQmlGLFFBQW5CLENBQTRCLDBCQUE1QjtBQUNBLFdBQUtrSCxxQkFBTCxDQUEyQnFCLG9CQUEzQixDQUFnREQsZ0JBQWhEO0FBQ0EsV0FBS3BCLHFCQUFMLENBQTJCc0IsZ0JBQTNCLENBQTRDLENBQTVDO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFDQSxXQUFLQyxvQkFBTCxHQUE0QkMsV0FBVyxDQUFDLE1BQU07QUFDNUMsWUFBR0YsQ0FBQyxJQUFJSCxnQkFBUixFQUEwQjtBQUN4QixlQUFLOUgsTUFBTCxDQUFZeUcsa0JBQVo7QUFDRDs7QUFDRCxhQUFLQyxxQkFBTCxDQUEyQnNCLGdCQUEzQixDQUE0Q0MsQ0FBQyxFQUE3QztBQUNELE9BTHNDLEVBS3BDLElBTG9DLENBQXZDO0FBT0EsV0FBS3pCLG1CQUFMLENBQXlCNEIsSUFBekI7QUFDQSxXQUFLMUIscUJBQUwsQ0FBMkIwQixJQUEzQjtBQUNELEtBbEhtQjs7QUFBQSx5R0FvSEgsTUFBTTtBQUNyQixXQUFLcEksTUFBTCxDQUFZekYsTUFBWixDQUFtQmtGLFdBQW5CLENBQStCLDBCQUEvQjtBQUNBNEksbUJBQWEsQ0FBQyxLQUFLSCxvQkFBTixDQUFiO0FBQ0EsV0FBSzFCLG1CQUFMLENBQXlCTCxJQUF6QjtBQUNBLFdBQUtPLHFCQUFMLENBQTJCUCxJQUEzQjtBQUNELEtBekhtQjs7QUFBQSw4R0EySEUsTUFBTTtBQUMxQixXQUFLUSx3QkFBTCxDQUE4QnlCLElBQTlCO0FBQ0EsV0FBS3BDLHFCQUFMLENBQTJCb0MsSUFBM0I7QUFDRCxLQTlIbUI7O0FBQUEsOEdBZ0lFLE1BQU07QUFDMUIsV0FBS3pCLHdCQUFMLENBQThCUixJQUE5QjtBQUNBLFdBQUtILHFCQUFMLENBQTJCRyxJQUEzQjtBQUNELEtBbkltQjs7QUFBQSwyR0FxSUQsTUFBTTtBQUN2QixXQUFLVCx5QkFBTCxDQUErQnBILE9BQS9CLENBQXVDd0gsU0FBUyxJQUFJQSxTQUFTLENBQUN0RyxRQUFWLENBQW1CLHFCQUFuQixDQUFwRDtBQUNELEtBdkltQjs7QUFBQSwyR0F5SUQsTUFBTTtBQUN2QixXQUFLa0cseUJBQUwsQ0FBK0JwSCxPQUEvQixDQUF1Q3dILFNBQVMsSUFBSUEsU0FBUyxDQUFDckcsV0FBVixDQUFzQixxQkFBdEIsQ0FBcEQ7QUFDRCxLQTNJbUI7O0FBQUEsMEdBOElGLE1BQU07QUFDdEIsV0FBSzJHLG1CQUFMLENBQXlCZ0MsSUFBekI7QUFDQSxXQUFLOUIsa0JBQUwsQ0FBd0I4QixJQUF4QjtBQUNELEtBakptQjs7QUFBQSwwR0FtSkYsTUFBTTtBQUN0QixXQUFLaEMsbUJBQUwsQ0FBeUJELElBQXpCO0FBQ0EsV0FBS0csa0JBQUwsQ0FBd0JILElBQXhCO0FBQ0QsS0F0Sm1COztBQUNsQixTQUFLbkcsTUFBTCxHQUFjQSxNQUFkO0FBRUEsU0FBS3NHLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0EsU0FBS0UsbUJBQUwsR0FBMkIsSUFBM0I7QUFDQSxTQUFLRSxxQkFBTCxHQUE2QixJQUE3QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDLElBQWhDO0FBQ0EsU0FBS1AsbUJBQUwsR0FBMkIsSUFBM0I7QUFDQSxTQUFLSixxQkFBTCxHQUE2QixJQUE3QjtBQUdBLFNBQUswQix5QkFBTCxHQUFpQyxJQUFqQztBQUVBLFNBQUtoQyx5QkFBTCxHQUFpQyxFQUFqQztBQUNEOztBQWZrQjs7QUEySk5OLDZFQUFmLEU7Ozs7Ozs7Ozs7OztBQzdKQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1rRCxhQUFOLENBQW9CO0FBQ3pCaE8sYUFBVyxDQUFDaU8sWUFBRCxFQUFlO0FBQ3hCLFNBQUtyRyxRQUFMLEdBQWdCcUcsWUFBWSxDQUFDckcsUUFBYixJQUF5QixDQUF6QztBQUNBLFNBQUtILEdBQUwsR0FBV3dHLFlBQVksQ0FBQ3hHLEdBQWIsSUFBb0IsRUFBL0I7QUFDQSxTQUFLeUcsVUFBTCxHQUFrQkQsWUFBWSxDQUFDQyxVQUFiLElBQTJCLEtBQTdDO0FBQ0EsU0FBS3hLLElBQUwsR0FBWUMsNERBQVEsQ0FBQyxLQUFLdUssVUFBTCxHQUFrQixHQUFsQixHQUF3QixLQUFLekcsR0FBTCxDQUFTMEcsS0FBVCxDQUFlLEdBQWYsRUFBb0JDLEdBQXBCLEVBQXpCLENBQXBCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhSixZQUFZLENBQUNJLEtBQWIsSUFBc0IsS0FBbkM7QUFDRDs7QUFQd0IsQzs7Ozs7Ozs7Ozs7O0FDRjNCO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1DLG9CQUFvQixHQUFJeEYsY0FBRCxJQUFvQjtBQUMvQyxTQUFPLGNBQ0wsb0JBREssR0FFTCx3QkFGSyxHQUVzQkEsY0FGdEIsR0FFdUMsSUFGdkMsR0FHTCwyQkFIRjtBQUlELENBTEQ7O0FBTUEsTUFBTXlGLG1CQUFtQixHQUFHLENBQUNDLFNBQUQsRUFBWS9HLEdBQVosS0FBb0I7QUFDaEQsU0FBTyxhQUFhK0csU0FBYixHQUF5QixLQUF6QixHQUNML0csR0FESyxHQUNDLElBRFI7QUFFQyxDQUhEOztBQUlBLE1BQU1nSCxvQkFBb0IsR0FBRyxNQUFNO0FBQ2pDLFNBQU8sa0JBQVA7QUFDRCxDQUZEOztBQUtPLE1BQU05RixhQUFOLENBQW9CO0FBQ3pCM0ksYUFBVyxDQUFDME8sWUFBRCxFQUFlO0FBQ3hCLFNBQUszSyxFQUFMLEdBQVUySyxZQUFZLENBQUMzSyxFQUFiLElBQW1CLEVBQTdCO0FBQ0EsU0FBSzhFLEtBQUwsR0FBYTZGLFlBQVksQ0FBQzdGLEtBQWIsSUFBc0IsR0FBbkM7QUFDQSxTQUFLbkcsTUFBTCxHQUFjZ00sWUFBWSxDQUFDaE0sTUFBYixJQUF1QixHQUFyQztBQUNBLFNBQUtpTSxTQUFMLEdBQWlCRCxZQUFZLENBQUNDLFNBQWIsSUFBMEIsRUFBM0M7QUFDQSxTQUFLN0YsY0FBTCxHQUFzQjRGLFlBQVksQ0FBQzVGLGNBQWIsSUFBK0IsQ0FBckQ7QUFDQSxTQUFLRSxJQUFMLEdBQVkwRixZQUFZLENBQUMxRixJQUFiLElBQXFCLEVBQWpDO0FBQ0EsU0FBSzRGLFNBQUwsR0FBaUJGLFlBQVksQ0FBQ0UsU0FBYixJQUEwQkMsSUFBSSxDQUFDQyxHQUFMLEVBQTNDO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkwsWUFBWSxDQUFDSyxTQUFiLElBQTBCLElBQTNDO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQk4sWUFBWSxDQUFDTSxXQUFiLElBQTRCLEtBQS9DO0FBQ0Q7O0FBRURySCxhQUFXLENBQUNDLFFBQUQsRUFBV0gsR0FBWCxFQUFnQjtBQUN6QixVQUFNNEMsUUFBUSxHQUFHLElBQUkyRCx1REFBSixDQUFrQjtBQUFDcEcsY0FBRDtBQUFXSDtBQUFYLEtBQWxCLENBQWpCO0FBQ0EsU0FBS2tILFNBQUwsQ0FBZU0sSUFBZixDQUFvQjVFLFFBQXBCO0FBQ0EsV0FBT0EsUUFBUDtBQUNEOztBQUVEOUQsZUFBYSxDQUFDOEQsUUFBRCxFQUFXO0FBQ3RCLFNBQUtzRSxTQUFMLEdBQWlCLEtBQUtBLFNBQUwsQ0FBZXJNLEdBQWYsQ0FBb0I2RCxJQUFELElBQVU7QUFDNUMsVUFBR0EsSUFBSSxDQUFDekMsSUFBTCxLQUFjMkcsUUFBUSxDQUFDM0csSUFBMUIsRUFBZ0M7QUFDOUJ5QyxZQUFJLENBQUNrSSxLQUFMLEdBQWEsSUFBYjtBQUNEOztBQUNELGFBQU9sSSxJQUFQO0FBQ0QsS0FMZ0IsQ0FBakI7QUFPQSxTQUFLNEksU0FBTCxHQUFpQkYsSUFBSSxDQUFDQyxHQUFMLEVBQWpCO0FBQ0Q7O0FBRUR6SCxVQUFRLEdBQUc7QUFDVCxTQUFLMEgsU0FBTCxHQUFpQkYsSUFBSSxDQUFDQyxHQUFMLEVBQWpCO0FBQ0EsU0FBS0UsV0FBTCxHQUFtQixJQUFuQjtBQUNEOztBQUVERSxVQUFRLEdBQUc7QUFDVCxXQUFPWixvQkFBb0IsQ0FBQyxLQUFLeEYsY0FBTixDQUFwQixHQUNKLEtBQUs2RixTQUFMLENBQWVwRCxNQUFmLENBQXNCbEIsUUFBUSxJQUFLQSxRQUFRLENBQUNnRSxLQUE1QyxFQUNFL0wsR0FERixDQUNNK0gsUUFBUSxJQUFLa0UsbUJBQW1CLENBQUNsRSxRQUFRLENBQUN6QyxRQUFWLEVBQW9CeUMsUUFBUSxDQUFDM0csSUFBN0IsQ0FEdEMsRUFDMkV5TCxJQUQzRSxDQUNnRixFQURoRixDQURJLEdBR0xWLG9CQUFvQixFQUh0QjtBQUlEOztBQXhDd0IsQzs7Ozs7Ozs7Ozs7O0FDakIzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTVcsa0JBQWtCLEdBQUcxUCwrQ0FBTyxDQUFDQyxZQUFSLENBQXFCLFFBQXJCLENBQTNCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRiwrQ0FBTyxDQUFDRyxHQUFwQjtBQUVBLE1BQU1DLGNBQWMsR0FBRyxFQUF2QjtBQUVBOzs7O0FBR2UsTUFBTXVQLGlCQUFOLFNBQWdDRCxrQkFBaEMsQ0FBbUQ7QUFHaEU7Ozs7OztBQU1BcFAsYUFBVyxDQUFDQyxNQUFELEVBQVNDLE9BQVQsRUFBa0I7QUFDM0IsVUFBTUQsTUFBTixFQUFjaUIsTUFBTSxDQUFDQyxNQUFQLENBQWNyQixjQUFkLEVBQThCSSxPQUE5QixDQUFkO0FBQ0Q7O0FBRURXLFVBQVEsQ0FBQ3lPLEdBQUQsRUFBTUMsS0FBSyxHQUFHLEVBQWQsRUFBa0JDLFVBQVUsR0FBRyxFQUEvQixFQUFtQztBQUN6QyxTQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBRUFGLFNBQUssR0FBR3JPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ3BCO0FBQ0E7QUFDQUwsZUFBUyxFQUFFLDBCQUhTO0FBSXBCQyxlQUFTLEVBQUU7QUFKUyxLQUFkLEVBS0x3TyxLQUxLLENBQVI7QUFPQUMsY0FBVSxHQUFHdE8sTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDekIsbUJBQWE7QUFEWSxLQUFkLEVBRVZxTyxVQUZVLENBQWI7QUFJQSxXQUFPLE1BQU0zTyxRQUFOLENBQWV5TyxHQUFmLEVBQW9CQyxLQUFwQixFQUEyQkMsVUFBM0IsQ0FBUDtBQUNEOztBQUVERSxxQkFBbUIsQ0FBQ0MsRUFBRCxFQUFLO0FBQ3RCLFNBQUtDLFlBQUwsR0FBb0IsYUFBcEI7QUFDQSxVQUFNRixtQkFBTixDQUEwQkMsRUFBMUI7QUFDRDs7QUFFRGhMLGFBQVcsQ0FBQzhCLEtBQUQsRUFBUTtBQUNqQixRQUFJLEtBQUt4RixRQUFMLENBQWMwSyxZQUFsQixFQUFnQztBQUM5QixXQUFLMUssUUFBTCxDQUFjMEssWUFBZCxDQUEyQmtFLElBQTNCLENBQWdDLElBQWhDLEVBQXNDQyxTQUF0QztBQUNEO0FBQ0Y7O0FBdkMrRCxDOzs7Ozs7Ozs7Ozs7QUNWbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1WLGtCQUFrQixHQUFHMVAsK0NBQU8sQ0FBQ0MsWUFBUixDQUFxQixRQUFyQixDQUEzQjtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsK0NBQU8sQ0FBQ0csR0FBcEI7QUFFQSxNQUFNQyxjQUFjLEdBQUcsRUFBdkI7QUFFQTs7OztBQUdlLE1BQU1pUSxlQUFOLFNBQThCWCxrQkFBOUIsQ0FBaUQ7QUFFOUQ7Ozs7OztBQU1BcFAsYUFBVyxDQUFDQyxNQUFELEVBQVNDLE9BQVQsRUFBa0I7QUFDM0IsVUFBTUQsTUFBTixFQUFjaUIsTUFBTSxDQUFDQyxNQUFQLENBQWNyQixjQUFkLEVBQThCSSxPQUE5QixDQUFkO0FBQ0Q7O0FBRURXLFVBQVEsQ0FBQ3lPLEdBQUQsRUFBTUMsS0FBSyxHQUFHLEVBQWQsRUFBa0JDLFVBQVUsR0FBRyxFQUEvQixFQUFtQztBQUN6QyxTQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBRUFGLFNBQUssR0FBR3JPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ3BCTCxlQUFTLEVBQUUsdURBRFM7QUFFcEJDLGVBQVMsRUFBRTtBQUZTLEtBQWQsRUFHTHdPLEtBSEssQ0FBUjtBQUtBQyxjQUFVLEdBQUd0TyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUN6QixtQkFBYTtBQURZLEtBQWQsRUFFVnFPLFVBRlUsQ0FBYjtBQUlBLFdBQU8sTUFBTTNPLFFBQU4sQ0FBZXlPLEdBQWYsRUFBb0JDLEtBQXBCLEVBQTJCQyxVQUEzQixDQUFQO0FBQ0Q7O0FBRURFLHFCQUFtQixDQUFDQyxFQUFELEVBQUs7QUFDdEIsU0FBS0MsWUFBTCxHQUFvQixhQUFwQjtBQUNBLFVBQU1GLG1CQUFOLENBQTBCQyxFQUExQjtBQUNEOztBQUVEaEwsYUFBVyxDQUFDOEIsS0FBRCxFQUFRO0FBQ2pCLFFBQUksS0FBS3hGLFFBQUwsQ0FBYzBLLFlBQWxCLEVBQWdDO0FBQzlCLFdBQUsxSyxRQUFMLENBQWMwSyxZQUFkLENBQTJCa0UsSUFBM0IsQ0FBZ0MsSUFBaEMsRUFBc0NDLFNBQXRDO0FBQ0Q7QUFDRjs7QUFwQzZELEM7Ozs7Ozs7Ozs7OztBQ1ZoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUUsK0JBQStCLEdBQUd0USwrQ0FBTyxDQUFDQyxZQUFSLENBQXFCLGlCQUFyQixDQUF4QztBQUNBLE1BQU1DLEdBQUcsR0FBR0YsK0NBQU8sQ0FBQ0csR0FBcEI7QUFHQTs7OztBQUdlLE1BQU1vUSxvQkFBTixTQUFtQ0QsK0JBQW5DLENBQW1FO0FBQ2hGaFEsYUFBVyxDQUFDQyxNQUFELEVBQVNDLE9BQVQsRUFBa0I7QUFDM0IsVUFBTUQsTUFBTixFQUFjQyxPQUFkO0FBQ0Q7O0FBSCtFLEM7Ozs7Ozs7Ozs7OztBQ1RsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTWtQLGtCQUFrQixHQUFHMVAsK0NBQU8sQ0FBQ0MsWUFBUixDQUFxQixRQUFyQixDQUEzQjtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsK0NBQU8sQ0FBQ0csR0FBcEI7QUFFQSxNQUFNQyxjQUFjLEdBQUcsRUFBdkI7QUFFQTs7OztBQUdlLE1BQU1vUSxjQUFOLFNBQTZCZCxrQkFBN0IsQ0FBZ0Q7QUFFN0Q7Ozs7OztBQU1BcFAsYUFBVyxDQUFDQyxNQUFELEVBQVNDLE9BQVQsRUFBa0I7QUFDM0IsVUFBTUQsTUFBTixFQUFjaUIsTUFBTSxDQUFDQyxNQUFQLENBQWNyQixjQUFkLEVBQThCSSxPQUE5QixDQUFkO0FBQ0Q7O0FBRURXLFVBQVEsQ0FBQ3lPLEdBQUQsRUFBTUMsS0FBSyxHQUFHLEVBQWQsRUFBa0JDLFVBQVUsR0FBRyxFQUEvQixFQUFtQztBQUN6QyxTQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBRUFGLFNBQUssR0FBR3JPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ3BCTCxlQUFTLEVBQUUsc0NBRFM7QUFFcEJDLGVBQVMsRUFBRTtBQUZTLEtBQWQsRUFHTHdPLEtBSEssQ0FBUjtBQUtBQyxjQUFVLEdBQUd0TyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUN6QixtQkFBYTtBQURZLEtBQWQsRUFFVnFPLFVBRlUsQ0FBYjtBQUlBLFdBQU8sTUFBTTNPLFFBQU4sQ0FBZXlPLEdBQWYsRUFBb0JDLEtBQXBCLEVBQTJCQyxVQUEzQixDQUFQO0FBQ0Q7O0FBRURFLHFCQUFtQixDQUFDQyxFQUFELEVBQUs7QUFDdEIsU0FBS0MsWUFBTCxHQUFvQixjQUFwQjtBQUNBLFVBQU1GLG1CQUFOLENBQTBCQyxFQUExQjtBQUNEOztBQUVEaEwsYUFBVyxDQUFDOEIsS0FBRCxFQUFRO0FBQ2pCLFFBQUksS0FBS3hGLFFBQUwsQ0FBYzBLLFlBQWxCLEVBQWdDO0FBQzlCLFdBQUsxSyxRQUFMLENBQWMwSyxZQUFkLENBQTJCa0UsSUFBM0IsQ0FBZ0MsSUFBaEMsRUFBc0NDLFNBQXRDO0FBQ0Q7QUFDRjs7QUFwQzRELEM7Ozs7Ozs7Ozs7OztBQ1YvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1yTyxxQkFBcUIsR0FBRy9CLCtDQUFPLENBQUNDLFlBQVIsQ0FBcUIsV0FBckIsQ0FBOUI7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLCtDQUFPLENBQUNHLEdBQXBCO0FBRUEsTUFBTUMsY0FBYyxHQUFHLEVBQXZCO0FBRUE7Ozs7QUFHZSxNQUFNcVEsaUJBQU4sU0FBZ0MxTyxxQkFBaEMsQ0FBc0Q7QUFFbkU7Ozs7OztBQU1BekIsYUFBVyxDQUFDQyxNQUFELEVBQVNDLE9BQVQsRUFBa0I7QUFDM0IsVUFBTUQsTUFBTixFQUFjaUIsTUFBTSxDQUFDQyxNQUFQLENBQWNyQixjQUFkLEVBQThCSSxPQUE5QixDQUFkO0FBQ0Q7O0FBRURXLFVBQVEsR0FBRztBQUNULFNBQUs0TyxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsVUFBTXpNLElBQUksR0FBRyxNQUFNbkMsUUFBTixDQUFlLEtBQWYsRUFBc0I7QUFDakNDLGVBQVMsRUFBRSx5Q0FEc0I7QUFFakNDLGVBQVMsRUFBRTtBQUZzQixLQUF0QixDQUFiO0FBTUEsU0FBS3FQLFdBQUwsR0FBbUJ4USxHQUFHLENBQUNpQixRQUFKLENBQWEsTUFBYixFQUFxQjtBQUN0Q0MsZUFBUyxFQUFFLHVCQUQyQjtBQUV0QytDLGVBQVMsRUFBRTtBQUYyQixLQUFyQixFQUdoQjtBQUNELG1CQUFhLEtBRFo7QUFFRCxjQUFRO0FBRlAsS0FIZ0IsQ0FBbkI7QUFPQWIsUUFBSSxDQUFDRSxXQUFMLENBQWlCLEtBQUtrTixXQUF0QjtBQUVBcE4sUUFBSSxDQUFDRSxXQUFMLENBQ0V0RCxHQUFHLENBQUNpQixRQUFKLENBQWEsTUFBYixFQUFxQjtBQUNuQkMsZUFBUyxFQUFFLHNCQURRO0FBRW5CK0MsZUFBUyxFQUFFO0FBRlEsS0FBckIsRUFHRztBQUNELG1CQUFhLEtBRFo7QUFFRCxjQUFRO0FBRlAsS0FISCxDQURGO0FBVUEsU0FBS3dNLGFBQUwsR0FBcUJ6USxHQUFHLENBQUNpQixRQUFKLENBQWEsTUFBYixFQUFxQjtBQUN4Q0MsZUFBUyxFQUFFLDBCQUQ2QjtBQUV4QytDLGVBQVMsRUFBRTtBQUY2QixLQUFyQixFQUdsQjtBQUNELG1CQUFhLEtBRFo7QUFFRCxjQUFRO0FBRlAsS0FIa0IsQ0FBckI7QUFPQWIsUUFBSSxDQUFDRSxXQUFMLENBQWlCLEtBQUttTixhQUF0QjtBQUVBLFNBQUszQyxnQkFBTCxDQUFzQixDQUF0QjtBQUNBLFNBQUtELG9CQUFMLENBQTBCLEtBQUssRUFBL0I7QUFDQSxXQUFPekssSUFBUDtBQUNEOztBQUVEMEssa0JBQWdCLENBQUM0QyxJQUFELEVBQU87QUFDckIsUUFBRyxLQUFLRixXQUFSLEVBQXFCO0FBQ25CLFdBQUtBLFdBQUwsQ0FBaUJ2TSxTQUFqQixHQUE2QjBNLGtFQUFVLENBQUNELElBQUQsQ0FBdkM7QUFDRDtBQUNGOztBQUVEN0Msc0JBQW9CLENBQUM2QyxJQUFELEVBQU87QUFDekIsUUFBRyxLQUFLRCxhQUFSLEVBQXVCO0FBQ3JCLFdBQUtBLGFBQUwsQ0FBbUJ4TSxTQUFuQixHQUErQjBNLGtFQUFVLENBQUNELElBQUQsQ0FBekM7QUFDRDtBQUNGOztBQUVERSxTQUFPLEdBQUc7QUFDUixTQUFLSixXQUFMLEdBQW1CLElBQW5CO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUVBLFVBQU1HLE9BQU47QUFDRDs7QUF0RWtFLEM7Ozs7Ozs7Ozs7OztBQ1hyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTXBCLGtCQUFrQixHQUFHMVAsK0NBQU8sQ0FBQ0MsWUFBUixDQUFxQixRQUFyQixDQUEzQjtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsK0NBQU8sQ0FBQ0csR0FBcEI7QUFFQSxNQUFNQyxjQUFjLEdBQUcsRUFBdkI7QUFFQTs7OztBQUdlLE1BQU0yUSxlQUFOLFNBQThCckIsa0JBQTlCLENBQWlEO0FBRTlEOzs7Ozs7QUFNQXBQLGFBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxPQUFULEVBQWtCO0FBQzNCLFVBQU1ELE1BQU4sRUFBY2lCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjckIsY0FBZCxFQUE4QkksT0FBOUIsQ0FBZDtBQUNEOztBQUVEVyxVQUFRLENBQUN5TyxHQUFELEVBQU1DLEtBQUssR0FBRyxFQUFkLEVBQWtCQyxVQUFVLEdBQUcsRUFBL0IsRUFBbUM7QUFDekMsU0FBS0MsY0FBTCxHQUFzQixLQUF0QjtBQUVBRixTQUFLLEdBQUdyTyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNwQkwsZUFBUyxFQUFFLCtCQURTO0FBRXBCQyxlQUFTLEVBQUU7QUFGUyxLQUFkLEVBR0x3TyxLQUhLLENBQVI7QUFLQSxXQUFPLE1BQU0xTyxRQUFOLENBQWV5TyxHQUFmLEVBQW9CQyxLQUFwQixFQUEyQkMsVUFBM0IsQ0FBUDtBQUNEOztBQUVERSxxQkFBbUIsQ0FBQ0MsRUFBRCxFQUFLO0FBQ3RCLFNBQUtDLFlBQUwsR0FBb0IsYUFBcEI7QUFDQSxVQUFNRixtQkFBTixDQUEwQkMsRUFBMUI7QUFDRDs7QUFFRGhMLGFBQVcsQ0FBQzhCLEtBQUQsRUFBUTtBQUNqQixRQUFJLEtBQUt4RixRQUFMLENBQWMwSyxZQUFsQixFQUFnQztBQUM5QixXQUFLMUssUUFBTCxDQUFjMEssWUFBZCxDQUEyQmtFLElBQTNCLENBQWdDLElBQWhDLEVBQXNDQyxTQUF0QztBQUNEO0FBQ0Y7O0FBaEM2RCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmhFO0FBQ0E7QUFDQSxNQUFNWSxNQUFNLEdBQUdoUiwrQ0FBTyxDQUFDaVIsU0FBUixDQUFrQixRQUFsQixDQUFmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7Ozs7QUFJQSxNQUFNQyxRQUFRLEdBQUc7QUFDZnhGLDJCQUF5QixFQUFFLENBQUMsa0JBQUQsRUFBcUIsc0JBQXJCLENBRFo7QUFFZjNCLGVBQWEsRUFBRSxjQUZBO0FBR2ZJLHNCQUFvQixFQUFFLFdBSFA7QUFJZkcsc0JBQW9CLEVBQUUsV0FKUDtBQUtmeEcsa0JBQWdCLEVBQUUsRUFMSDtBQU1mbkQsU0FBTyxFQUFFLElBTk07QUFPZk8sbUJBQWlCLEVBQUUsSUFQSjtBQVFmcUMsZ0JBQWMsRUFBRTtBQUNkNUMsV0FBTyxFQUFFLElBREs7QUFFZGtELHNCQUFrQixFQUFFLElBRk47QUFHZEUsc0JBQWtCLEVBQUUsSUFITjtBQUlkN0MscUJBQWlCLEVBQUUsSUFKTDtBQUtkOEgsaUJBQWEsRUFBRTtBQUxEO0FBUkQsQ0FBakI7O0FBaUJBLE1BQU1tSSxxQkFBTixTQUFvQ0gsTUFBcEMsQ0FBMkM7QUFFekMxUSxhQUFXLENBQUNDLE1BQUQsRUFBU0MsT0FBVCxFQUFrQjtBQUMzQixVQUFNRCxNQUFOLEVBQWNDLE9BQWQ7O0FBRDJCLCtGQVl0QixNQUFNO0FBQ1gsVUFBRyxLQUFLOE0sS0FBTCxDQUFXbEcsSUFBZCxFQUFvQjtBQUNsQjtBQUNEOztBQUVELFdBQUtnSyxRQUFMLENBQWM7QUFBQ2hLLFlBQUksRUFBRTtBQUFQLE9BQWQ7O0FBQ0EsVUFBRyxLQUFLc0QsaUJBQUwsRUFBSCxFQUE2QjtBQUMzQixhQUFLbkssTUFBTCxDQUFZaUYsUUFBWixDQUFxQixxQkFBckI7QUFDQSxhQUFLakYsTUFBTCxDQUFZOEcsRUFBWixDQUFlLE9BQWYsRUFBd0IsS0FBS2dLLGNBQUwsQ0FBb0JoRixvQkFBNUM7QUFDQSxhQUFLZ0YsY0FBTCxDQUFvQmpLLElBQXBCO0FBQ0EsYUFBS2IsaUJBQUwsQ0FBdUJhLElBQXZCO0FBQ0EsYUFBS2tLLHdCQUFMLENBQThCbEssSUFBOUI7QUFDRCxPQU5ELE1BTU87QUFDTHBILHVEQUFPLENBQUNtQyxHQUFSLENBQVlpTCxJQUFaLENBQWlCLG1HQUFqQjtBQUNEO0FBQ0YsS0EzQjRCOztBQUFBLDRHQTZCVCxNQUFNO0FBQ3hCLFVBQUcsQ0FBQyxLQUFLM0ssUUFBTCxFQUFKLEVBQXFCO0FBQ25CekMsdURBQU8sQ0FBQ21DLEdBQVIsQ0FBWWlMLElBQVosQ0FBaUIsaURBQWpCO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBRyxDQUFDLEtBQUs3RyxpQkFBTCxDQUF1Qm1FLGlCQUF2QixFQUFKLEVBQWdEO0FBQzlDMUssdURBQU8sQ0FBQ21DLEdBQVIsQ0FBWWlMLElBQVosQ0FBaUIsaUVBQWpCO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0QsS0F4QzRCOztBQUFBLG1HQTBDbEIsTUFBTTtBQUNmLGFBQU8sS0FBSzdNLE1BQUwsQ0FBWWdSLElBQVosQ0FBaUI7QUFBRUMsNEJBQW9CLEVBQUU7QUFBeEIsT0FBakIsRUFBaURDLGNBQWpELENBQWdFQyxHQUF2RTtBQUNELEtBNUM0Qjs7QUFBQSw2R0EwRFIsTUFBTTtBQUN6QixXQUFLSix3QkFBTCxDQUE4QjVKLFVBQTlCO0FBQ0EsV0FBSzJKLGNBQUwsQ0FBb0JuRixjQUFwQjtBQUNBLFdBQUtrRixRQUFMLENBQWM7QUFDWjdELHVCQUFlLEVBQUU7QUFETCxPQUFkO0FBR0EsV0FBSzlLLFFBQUwsR0FBZ0JFLFlBQWhCLEdBQStCLENBQUMsQ0FBaEM7QUFDRCxLQWpFNEI7O0FBRTNCLFNBQUtuQyxPQUFMLEdBQWVSLCtDQUFPLENBQUMyUixZQUFSLENBQXFCVCxRQUFyQixFQUErQjFRLE9BQS9CLENBQWY7QUFDQSxTQUFLK0YsaUJBQUwsR0FBeUIsSUFBSW1ELHVFQUFKLENBQXNCLElBQXRCLENBQXpCO0FBQ0EsU0FBSzJILGNBQUwsR0FBc0IsSUFBSWpHLG9FQUFKLENBQW1CLElBQW5CLENBQXRCO0FBQ0EsU0FBS2tHLHdCQUFMLEdBQWdDLElBQUl2TCw4RUFBSixDQUE2QixJQUE3QixDQUFoQztBQUVBeEYsVUFBTSxDQUFDOEcsRUFBUCxDQUFVLFNBQVYsRUFBcUIsTUFBTTtBQUN6QixXQUFLRCxJQUFMO0FBQ0QsS0FGRDtBQUdEOztBQW9DRHhDLHFCQUFtQixDQUFDZ04sT0FBRCxFQUFVO0FBRTNCLFNBQUtSLFFBQUwsQ0FBYztBQUNaN0QscUJBQWUsRUFBRTtBQURMLEtBQWQ7QUFJQSxTQUFLOUssUUFBTCxHQUFnQkUsWUFBaEIsR0FBK0JpUCxPQUFPLEdBQUcsQ0FBekM7QUFDQSxTQUFLUCxjQUFMLENBQW9CUSxrQkFBcEI7QUFFQSxTQUFLUCx3QkFBTCxDQUE4QjdKLFdBQTlCO0FBQ0Q7O0FBV0RxSyxvQkFBa0IsQ0FBQzNFLENBQUQsRUFBSSxDQUVyQjs7QUF2RXdDOztBQTBFM0NnRSxxQkFBcUIsQ0FBQ1ksT0FBdEIsR0FBZ0NBLHFEQUFoQztBQUVBWixxQkFBcUIsQ0FBQ2EsWUFBdEIsR0FBcUM7QUFDbkNDLGVBQWEsRUFBRSxJQURvQjtBQUVuQzFFLGlCQUFlLEVBQUUsS0FGa0I7QUFHbkNuRyxNQUFJLEVBQUU7QUFINkIsQ0FBckM7QUFNQXBILCtDQUFPLENBQUNrUyxjQUFSLENBQXVCLGlCQUF2QixFQUEwQ2YscUJBQTFDO0FBQ0FuUiwrQ0FBTyxDQUFDOEIsaUJBQVIsQ0FBMEIsc0JBQTFCLEVBQWtEeU8sd0VBQWxEO0FBQ0F2USwrQ0FBTyxDQUFDOEIsaUJBQVIsQ0FBMEIsaUJBQTFCLEVBQTZDdU8sbUVBQTdDO0FBQ0FyUSwrQ0FBTyxDQUFDOEIsaUJBQVIsQ0FBMEIsbUJBQTFCLEVBQStDNk4scUVBQS9DO0FBQ0EzUCwrQ0FBTyxDQUFDOEIsaUJBQVIsQ0FBMEIsZ0JBQTFCLEVBQTRDME8sa0VBQTVDO0FBQ0F4USwrQ0FBTyxDQUFDOEIsaUJBQVIsQ0FBMEIsaUJBQTFCLEVBQTZDaVAsbUVBQTdDO0FBQ0EvUSwrQ0FBTyxDQUFDOEIsaUJBQVIsQ0FBMEIsbUJBQTFCLEVBQStDMk8scUVBQS9DLEU7Ozs7Ozs7Ozs7O0FDL0lBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsc0dBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsa0pBQWtKLGtDQUFrQyx1QkFBdUIscUJBQXFCLGlIQUFpSCxFQUFFLHFCQUFxQixrQ0FBa0Msd0JBQXdCLHVCQUF1QixvQkFBb0IsbUJBQW1CLDJCQUEyQix5QkFBeUIsMEJBQTBCLHdCQUF3QixzQkFBc0IsbUJBQW1CLDBDQUEwQyx3Q0FBd0MsRUFBRSw0REFBNEQsbUJBQW1CLEVBQUUsMkJBQTJCLG9CQUFvQixFQUFFLDJCQUEyQixvQkFBb0IsRUFBRSwyQkFBMkIsb0JBQW9CLEVBQUUsMkJBQTJCLG9CQUFvQixFQUFFLDJCQUEyQixvQkFBb0IsRUFBRSwyQkFBMkIsb0JBQW9CLEVBQUUsMEZBQTBGLCtCQUErQixFQUFFLHlDQUF5QywrQkFBK0IsRUFBRSwwRkFBMEYsaUJBQWlCLEVBQUUsMENBQTBDLG9DQUFvQyxFQUFFLHFDQUFxQyxzQkFBc0Isd0JBQXdCLG1CQUFtQixFQUFFLHFDQUFxQyxtQkFBbUIsRUFBRSwyREFBMkQsNEJBQTRCLHdCQUF3QiwwQkFBMEIsRUFBRSwyREFBMkQsNEJBQTRCLEVBQUUsaUNBQWlDLHFCQUFxQixpQkFBaUIsbUJBQW1CLDBCQUEwQix1QkFBdUIseUJBQXlCLHlCQUF5QiwwQkFBMEIscUJBQXFCLDZCQUE2QiwwQkFBMEIscUJBQXFCLHFCQUFxQixtQkFBbUIsb0JBQW9CLGVBQWUsaUNBQWlDLDhCQUE4Qiw0Q0FBNEMseUJBQXlCLHlCQUF5QixFQUFFLGdGQUFnRixtQkFBbUIsRUFBRSx3Q0FBd0Msa0JBQWtCLGdCQUFnQixxQkFBcUIseUNBQXlDLEVBQUUsNENBQTRDLGlCQUFpQixrQkFBa0IsbUJBQW1CLEVBQUUsaURBQWlELHNCQUFzQixvQkFBb0IsOEJBQThCLEVBQUUsd0RBQXdELDZCQUE2QixFQUFFLHVEQUF1RCxnQ0FBZ0MsRUFBRSw2Q0FBNkMsc0JBQXNCLGtCQUFrQixFQUFFLDZDQUE2QyxrQkFBa0Isa0JBQWtCLEVBQUUsb0RBQW9ELHFCQUFxQixFQUFFLHFGQUFxRixrQkFBa0IsNEJBQTRCLHdCQUF3QixFQUFFLG1GQUFtRixzQkFBc0IsRUFBRSxrREFBa0Qsb0NBQW9DLGtDQUFrQyxFQUFFLG9DQUFvQyw2QkFBNkIsRUFBRSxxQ0FBcUMsbUJBQW1CLEVBQUUsd0VBQXdFLGlCQUFpQixFQUFFLGtDQUFrQyxvQkFBb0IsRUFBRSwwQ0FBMEMsa0JBQWtCLGVBQWUsZ0NBQWdDLEVBQUUsNERBQTRELHNCQUFzQixFQUFFLHdFQUF3RSxzQkFBc0IsRUFBRSxtRkFBbUYsZ0NBQWdDLEVBQUUseUZBQXlGLG1EQUFtRCxFQUFFLHlGQUF5RiwwQkFBMEIsRUFBRSx5RkFBeUYsMEJBQTBCLEVBQUUsNENBQTRDLGtCQUFrQixnQkFBZ0Isd0JBQXdCLDhCQUE4Qiw4QkFBOEIsRUFBRSx3RUFBd0Usb0JBQW9CLGlCQUFpQixzQkFBc0IseUJBQXlCLHVCQUF1QixFQUFFLGtFQUFrRSxxQkFBcUIsRUFBRSxTQUFTLGdlQUFnZSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksbUJBQW1CLFlBQVksS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxpQkFBaUIsWUFBWSxLQUFLLG1CQUFtQixNQUFNLG1CQUFtQixZQUFZLEtBQUssa0JBQWtCLE1BQU0sbUJBQW1CLFlBQVksS0FBSyxXQUFXLFlBQVksaUJBQWlCLEtBQUssZ0JBQWdCLE9BQU8sYUFBYSxhQUFhLGtCQUFrQixPQUFPLG1CQUFtQixPQUFPLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxrQkFBa0IsT0FBTyxpQkFBaUIsT0FBTyxXQUFXLFVBQVUsWUFBWSxtQkFBbUIsT0FBTyxXQUFXLFVBQVUsZ0JBQWdCLE9BQU8sYUFBYSxXQUFXLGlCQUFpQixPQUFPLGtCQUFrQixPQUFPLG1CQUFtQixPQUFPLGFBQWEsaUJBQWlCLE1BQU0sV0FBVyxlQUFlLEtBQUssZ0JBQWdCLE1BQU0sV0FBVyxZQUFZLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLFlBQVksbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sZ0JBQWdCLE9BQU8saUJBQWlCLE9BQU8saUJBQWlCLE9BQU8sV0FBVyxVQUFVLGlCQUFpQixPQUFPLGdCQUFnQixPQUFPLGdCQUFnQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLG1CQUFtQixPQUFPLFdBQVcsVUFBVSxZQUFZLGFBQWEsa0JBQWtCLE9BQU8sV0FBVyxVQUFVLFVBQVUsWUFBWSxrQkFBa0IsT0FBTyx3TUFBd00sa0NBQWtDLHVCQUF1QixxQkFBcUIsK0dBQStHLEdBQUcscUJBQXFCLGtDQUFrQyx3QkFBd0IsdUJBQXVCLG9CQUFvQixtQkFBbUIsMkJBQTJCLHlCQUF5QiwwQkFBMEIsd0JBQXdCLHNCQUFzQixtQkFBbUIsMENBQTBDLHdDQUF3QyxHQUFHLDREQUE0RCxnQkFBZ0IsRUFBRSx5QkFBeUIsaUJBQWlCLEVBQUUseUJBQXlCLGlCQUFpQixFQUFFLHlCQUF5QixpQkFBaUIsRUFBRSx5QkFBeUIsaUJBQWlCLEVBQUUseUJBQXlCLGlCQUFpQixFQUFFLHlCQUF5QixpQkFBaUIsRUFBRSwwRkFBMEYsNEJBQTRCLEVBQUUsdUNBQXVDLDRCQUE0QixFQUFFLDBGQUEwRiwrQkFBK0IsRUFBRSx3Q0FBd0MsaUNBQWlDLEVBQUUsdUNBQXVDLHNCQUFzQix3QkFBd0IsbUJBQW1CLEdBQUcsZUFBZSwrQkFBK0IsK0JBQStCLDBDQUEwQyxrQ0FBa0MsaUJBQWlCLHdDQUF3QyxzQ0FBc0MsT0FBTyxLQUFLLDRCQUE0QiwrQkFBK0IsS0FBSywrQkFBK0IscUJBQXFCLDZCQUE2QiwwQkFBMEIscUJBQXFCLFNBQVMsT0FBTyxLQUFLLDhCQUE4QixzQkFBc0IsS0FBSyxrQ0FBa0Msb0JBQW9CLGlCQUFpQixrQ0FBa0MsMkJBQTJCLHdCQUF3QixPQUFPLHNCQUFzQiw0QkFBNEIsMEJBQTBCLFNBQVMsT0FBTywrQkFBK0IsNEJBQTRCLDRDQUE0QyxlQUFlLHVEQUF1RCxXQUFXLFNBQVMsbUJBQW1CLDhCQUE4QixnQ0FBZ0MsV0FBVyw4QkFBOEIsZ0NBQWdDLFdBQVcsU0FBUyxPQUFPLEtBQUssb0NBQW9DLG9CQUFvQixrQkFBa0IsMEJBQTBCLHdCQUF3Qix1Q0FBdUMsc0JBQXNCLG1CQUFtQix3QkFBd0IsMkJBQTJCLHlCQUF5QixPQUFPLDhCQUE4QixTQUFTLDZCQUE2Qix1QkFBdUIsT0FBTyxpQ0FBaUMsU0FBUyxLQUFLLEdBQUcsNEJBQTRCLG1CQUFtQiwyQkFBMkIsNEJBQTRCLHdCQUF3QiwwQkFBMEIsS0FBSyw2QkFBNkIsNEJBQTRCLEtBQUssR0FBRyx3QkFBd0IscUJBQXFCLGlCQUFpQixtQkFBbUIsMEJBQTBCLHVCQUF1Qix5QkFBeUIseUJBQXlCLDBCQUEwQixxQkFBcUIsNkJBQTZCLDBCQUEwQixxQkFBcUIscUJBQXFCLG1CQUFtQixvQkFBb0IsZUFBZSxpQ0FBaUMsOEJBQThCLDRDQUE0Qyx5QkFBeUIseUJBQXlCLDhCQUE4QixtQkFBbUIsS0FBSyxHQUFHLCtCQUErQixrQkFBa0IsZ0JBQWdCLHFCQUFxQixnREFBZ0QseUNBQXlDLEdBQUcsa0NBQWtDLGlCQUFpQixvQkFBb0IsbUJBQW1CLEdBQUcsdUNBQXVDLHNCQUFzQixvQkFBb0IsOEJBQThCLGNBQWMsNkJBQTZCLEtBQUssZUFBZSxtQ0FBbUMsS0FBSyxHQUFHLG1DQUFtQyxzQkFBc0Isa0JBQWtCLEdBQUcsbUNBQW1DLGtCQUFrQixrQkFBa0IsY0FBYyxxQkFBcUIsS0FBSyxHQUFHLGtDQUFrQyxpREFBaUQsK0JBQStCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssK0JBQStCLHdCQUF3QixLQUFLLEdBQUcsS0FBSztBQUNocVk7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBLE1BQU0wQixTQUFTLEdBQUlDLE1BQUQsSUFBYUEsTUFBTSxHQUFHLEVBQVQsR0FBYyxNQUFNQSxNQUFwQixHQUE2QkEsTUFBNUQ7O0FBRU8sTUFBTUMsY0FBYyxHQUFHLENBQUNDLElBQUQsRUFBT0MsU0FBUCxLQUFxQjtBQUNqRCxTQUFPLENBQ0xELElBQUksQ0FBQ0UsV0FBTCxFQURLLEVBRUxMLFNBQVMsQ0FBQ0csSUFBSSxDQUFDRyxRQUFMLEtBQWtCLENBQW5CLENBRkosRUFHTE4sU0FBUyxDQUFDRyxJQUFJLENBQUNJLE9BQUwsRUFBRCxDQUhKLEVBSUxQLFNBQVMsQ0FBQ0csSUFBSSxDQUFDSyxRQUFMLEVBQUQsQ0FKSixFQUtMUixTQUFTLENBQUNHLElBQUksQ0FBQ00sVUFBTCxFQUFELENBTEosRUFNTFQsU0FBUyxDQUFDRyxJQUFJLENBQUNPLFVBQUwsRUFBRCxDQU5KLEVBT0xwRCxJQVBLLENBT0E4QyxTQVBBLENBQVA7QUFRRCxDQVRNO0FBV0EsTUFBTXJKLGlCQUFpQixHQUFHLENBQUNxSixTQUFTLEdBQUcsR0FBYixLQUFxQjtBQUNwRCxTQUFPRixjQUFjLENBQUMsSUFBSWxELElBQUosRUFBRCxFQUFhb0QsU0FBYixDQUFyQjtBQUNELENBRk0sQzs7Ozs7Ozs7Ozs7O0FDYlA7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBLE1BQU1PLHFCQUFxQixHQUFHLFVBQVNDLE9BQVQsRUFBa0JDLEtBQWxCLEVBQXlCO0FBQ3JERCxTQUFPLEdBQUdBLE9BQU8sR0FBRyxDQUFWLEdBQWMsQ0FBZCxHQUFrQkEsT0FBNUI7QUFDQSxNQUFJRSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixPQUFPLEdBQUcsRUFBckIsQ0FBUjtBQUNBLE1BQUlLLENBQUMsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVdKLE9BQU8sR0FBRyxFQUFWLEdBQWUsRUFBMUIsQ0FBUjtBQUNBLE1BQUlNLENBQUMsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVdKLE9BQU8sR0FBRyxJQUFyQixDQUFSO0FBQ0EsUUFBTU8sRUFBRSxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBV0gsS0FBSyxHQUFHLEVBQVIsR0FBYSxFQUF4QixDQUFYO0FBQ0EsUUFBTU8sRUFBRSxHQUFHTCxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsS0FBSyxHQUFHLElBQW5CLENBQVgsQ0FOcUQsQ0FRckQ7O0FBQ0EsTUFBSVEsS0FBSyxDQUFDVCxPQUFELENBQUwsSUFBa0JBLE9BQU8sS0FBS1UsUUFBbEMsRUFBNEM7QUFDMUM7QUFDQTtBQUNBSixLQUFDLEdBQUdELENBQUMsR0FBR0gsQ0FBQyxHQUFHLEdBQVo7QUFDRCxHQWJvRCxDQWVyRDs7O0FBQ0FJLEdBQUMsR0FBSUEsQ0FBQyxHQUFHLENBQUosSUFBU0UsRUFBRSxHQUFHLENBQWYsR0FBb0JGLENBQUMsR0FBRyxHQUF4QixHQUE4QixFQUFsQyxDQWhCcUQsQ0FrQnJEO0FBQ0E7O0FBQ0FELEdBQUMsR0FBRyxDQUFFLENBQUNDLENBQUMsSUFBSUMsRUFBRSxJQUFJLEVBQVosS0FBbUJGLENBQUMsR0FBRyxFQUF4QixHQUE4QixNQUFNQSxDQUFwQyxHQUF3Q0EsQ0FBekMsSUFBOEMsR0FBbEQsQ0FwQnFELENBc0JyRDs7QUFDQUgsR0FBQyxHQUFJQSxDQUFDLEdBQUcsRUFBTCxHQUFXLE1BQU1BLENBQWpCLEdBQXFCQSxDQUF6QjtBQUVBLFNBQU9JLENBQUMsR0FBR0QsQ0FBSixHQUFRSCxDQUFmO0FBQ0QsQ0ExQkQsQyxDQTRCQTs7O0FBQ0EsSUFBSVMsY0FBYyxHQUFHWixxQkFBckI7QUFFQTs7Ozs7Ozs7O0FBUU8sU0FBU2EsYUFBVCxDQUF1QkMsb0JBQXZCLEVBQTZDO0FBQ2xERixnQkFBYyxHQUFHRSxvQkFBakI7QUFDRDtBQUVEOzs7O0FBR08sU0FBU0MsZUFBVCxHQUEyQjtBQUNoQ0gsZ0JBQWMsR0FBR1oscUJBQWpCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsU0FBU2pDLFVBQVQsQ0FBb0JrQyxPQUFwQixFQUE2QkMsS0FBSyxHQUFHRCxPQUFyQyxFQUE4QztBQUM1QyxTQUFPVyxjQUFjLENBQUNYLE9BQUQsRUFBVUMsS0FBVixDQUFyQjtBQUNEOztBQUVjbkMseUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQUE7QUFBTyxNQUFNNU0sUUFBUSxHQUFJNlAsTUFBRCxJQUFZO0FBQ2xDLFNBQU9BLE1BQU0sR0FBRyxHQUFULEdBQWUzRSxJQUFJLENBQUNDLEdBQUwsRUFBdEI7QUFDRCxDQUZNLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUEsTUFBTTtBQUFFMkUsYUFBRjtBQUFlQztBQUFmLElBQWtDck8sTUFBeEM7O0FBRUEsTUFBTW1DLFNBQU4sQ0FBZ0I7QUFDZHhILGFBQVcsQ0FBRTJULE1BQUYsRUFBVTtBQUNuQixRQUFJQSxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsUUFBckIsRUFBK0I7QUFDN0IsV0FBS0EsUUFBTCxHQUFnQkQsTUFBTSxDQUFDQyxRQUF2QjtBQUNEO0FBQ0Y7O0FBRUQ1TixTQUFPLEdBQUk7QUFDVCxTQUFLNk4sS0FBTDtBQUNBLFNBQUs5TixNQUFMLEdBQWMsSUFBZDtBQUNEOztBQUVEOE4sT0FBSyxHQUFJO0FBQ1AsUUFBSTlOLE1BQU0sR0FBRyxLQUFLQSxNQUFsQjs7QUFDQSxRQUFJQSxNQUFNLElBQUlBLE1BQU0sQ0FBQytOLFVBQVAsS0FBc0IsQ0FBcEMsRUFBdUM7QUFDckMsV0FBS2xPLEtBQUwsQ0FBV21PLE9BQVgsR0FBcUIsSUFBckI7QUFDQWhPLFlBQU0sQ0FBQzhOLEtBQVA7QUFDRDs7QUFFRHhPLFVBQU0sQ0FBQzJPLFlBQVAsQ0FBb0IsS0FBS0MsY0FBekI7QUFDQSxTQUFLQSxjQUFMLEdBQXNCLElBQXRCO0FBQ0E1TyxVQUFNLENBQUMyTyxZQUFQLENBQW9CLEtBQUtFLFlBQXpCO0FBQ0EsU0FBS0EsWUFBTCxHQUFvQixJQUFwQjtBQUNEOztBQUVEM0wsTUFBSSxDQUFFMUMsT0FBRixFQUFXOE4sTUFBWCxFQUFtQlEsU0FBbkIsRUFBOEI7QUFDaEMsU0FBS3RPLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUs4TixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLUSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUt2TyxLQUFMLEdBQWE7QUFBRXdPLGNBQVEsRUFBRVgsV0FBVyxDQUFDM0UsR0FBWixFQUFaO0FBQStCdUYsV0FBSyxFQUFFO0FBQXRDLEtBQWI7QUFDQSxTQUFLbk0sVUFBTCxHQUFrQnlMLE1BQU0sQ0FBQ3pMLFVBQXpCO0FBQ0EsU0FBS29NLFlBQUw7QUFDRDs7QUFFREEsY0FBWSxHQUFJO0FBQ2QsUUFBSUMsR0FBSjtBQUFBLFFBQVMxTyxPQUFPLEdBQUcsS0FBS0EsT0FBeEI7QUFDQTBPLE9BQUcsR0FBRyxLQUFLeE8sTUFBTCxHQUFjLElBQUkyTixjQUFKLEVBQXBCO0FBRUEsUUFBSTlOLEtBQUssR0FBRyxLQUFLQSxLQUFqQjtBQUNBQSxTQUFLLENBQUM0TyxNQUFOLEdBQWUsQ0FBZjtBQUNBNU8sU0FBSyxDQUFDNk8sTUFBTixHQUFlLENBQWY7QUFDQSxVQUFNYixRQUFRLEdBQUcsS0FBS0EsUUFBdEI7O0FBRUEsUUFBSTtBQUNGLFVBQUlBLFFBQUosRUFBYztBQUNaLFlBQUk7QUFDRkEsa0JBQVEsQ0FBQ1csR0FBRCxFQUFNMU8sT0FBTyxDQUFDNEIsR0FBZCxDQUFSO0FBQ0QsU0FGRCxDQUVFLE9BQU9vRixDQUFQLEVBQVU7QUFDVjtBQUNBO0FBQ0EwSCxhQUFHLENBQUMvSyxJQUFKLENBQVMsS0FBVCxFQUFnQjNELE9BQU8sQ0FBQzRCLEdBQXhCLEVBQTZCLElBQTdCO0FBQ0FtTSxrQkFBUSxDQUFDVyxHQUFELEVBQU0xTyxPQUFPLENBQUM0QixHQUFkLENBQVI7QUFDRDtBQUNGOztBQUNELFVBQUksQ0FBQzhNLEdBQUcsQ0FBQ1QsVUFBVCxFQUFxQjtBQUNuQlMsV0FBRyxDQUFDL0ssSUFBSixDQUFTLEtBQVQsRUFBZ0IzRCxPQUFPLENBQUM0QixHQUF4QixFQUE2QixJQUE3QjtBQUNEO0FBQ0YsS0FkRCxDQWNFLE9BQU9vRixDQUFQLEVBQVU7QUFDVjtBQUNBLFdBQUtzSCxTQUFMLENBQWVPLE9BQWYsQ0FBdUI7QUFBRUMsWUFBSSxFQUFFSixHQUFHLENBQUNLLE1BQVo7QUFBb0IzUSxZQUFJLEVBQUU0SSxDQUFDLENBQUNFO0FBQTVCLE9BQXZCLEVBQThEbEgsT0FBOUQsRUFBdUUwTyxHQUF2RTtBQUNBO0FBQ0Q7O0FBRUQsUUFBSTFPLE9BQU8sQ0FBQ2dQLFFBQVosRUFBc0I7QUFDcEJOLFNBQUcsQ0FBQ08sZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsV0FBV2pQLE9BQU8sQ0FBQ2tQLFVBQW5CLEdBQWdDLEdBQWhDLElBQXVDbFAsT0FBTyxDQUFDZ1AsUUFBUixHQUFtQixDQUExRCxDQUE5QjtBQUNEOztBQUVETixPQUFHLENBQUNTLGtCQUFKLEdBQXlCLEtBQUtDLGdCQUFMLENBQXNCNVEsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBekI7QUFDQWtRLE9BQUcsQ0FBQ1csVUFBSixHQUFpQixLQUFLQyxZQUFMLENBQWtCOVEsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBakI7QUFDQWtRLE9BQUcsQ0FBQzFNLFlBQUosR0FBbUJoQyxPQUFPLENBQUNnQyxZQUEzQixDQW5DYyxDQXFDZDs7QUFDQSxTQUFLb00sY0FBTCxHQUFzQjVPLE1BQU0sQ0FBQytQLFVBQVAsQ0FBa0IsS0FBS0MsV0FBTCxDQUFpQmhSLElBQWpCLENBQXNCLElBQXRCLENBQWxCLEVBQStDLEtBQUtzUCxNQUFMLENBQVkzTCxPQUEzRCxDQUF0QjtBQUNBdU0sT0FBRyxDQUFDZSxJQUFKO0FBQ0Q7O0FBRURMLGtCQUFnQixDQUFFeE8sS0FBRixFQUFTO0FBQ3ZCLFFBQUk4TixHQUFHLEdBQUc5TixLQUFLLENBQUM4TyxhQUFoQjtBQUFBLFFBQ0V6QixVQUFVLEdBQUdTLEdBQUcsQ0FBQ1QsVUFEbkI7QUFBQSxRQUVFbE8sS0FBSyxHQUFHLEtBQUtBLEtBRmY7QUFBQSxRQUdFQyxPQUFPLEdBQUcsS0FBS0EsT0FIakI7QUFBQSxRQUlFOE4sTUFBTSxHQUFHLEtBQUtBLE1BSmhCLENBRHVCLENBT3ZCOztBQUNBLFFBQUkvTixLQUFLLENBQUNtTyxPQUFWLEVBQW1CO0FBQ2pCO0FBQ0QsS0FWc0IsQ0FZdkI7OztBQUNBLFFBQUlELFVBQVUsSUFBSSxDQUFsQixFQUFxQjtBQUNuQjtBQUNBek8sWUFBTSxDQUFDMk8sWUFBUCxDQUFvQixLQUFLQyxjQUF6Qjs7QUFDQSxVQUFJck8sS0FBSyxDQUFDNE8sTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QjVPLGFBQUssQ0FBQzRPLE1BQU4sR0FBZTVCLElBQUksQ0FBQzRDLEdBQUwsQ0FBUy9CLFdBQVcsQ0FBQzNFLEdBQVosRUFBVCxFQUE0QmxKLEtBQUssQ0FBQ3dPLFFBQWxDLENBQWY7QUFDRDs7QUFFRCxVQUFJTixVQUFVLEtBQUssQ0FBbkIsRUFBc0I7QUFDcEIsWUFBSWMsTUFBTSxHQUFHTCxHQUFHLENBQUNLLE1BQWpCLENBRG9CLENBRXBCOztBQUNBLFlBQUlBLE1BQU0sSUFBSSxHQUFWLElBQWlCQSxNQUFNLEdBQUcsR0FBOUIsRUFBbUM7QUFDakNoUCxlQUFLLENBQUM2UCxLQUFOLEdBQWM3QyxJQUFJLENBQUM0QyxHQUFMLENBQVM1UCxLQUFLLENBQUM0TyxNQUFmLEVBQXVCZixXQUFXLENBQUMzRSxHQUFaLEVBQXZCLENBQWQ7QUFDQSxjQUFJMUksSUFBSixFQUFVc1AsR0FBVjs7QUFDQSxjQUFJN1AsT0FBTyxDQUFDZ0MsWUFBUixLQUF5QixhQUE3QixFQUE0QztBQUMxQ3pCLGdCQUFJLEdBQUdtTyxHQUFHLENBQUM1TyxRQUFYO0FBQ0ErUCxlQUFHLEdBQUd0UCxJQUFJLENBQUN1UCxVQUFYO0FBQ0QsV0FIRCxNQUdPO0FBQ0x2UCxnQkFBSSxHQUFHbU8sR0FBRyxDQUFDcUIsWUFBWDtBQUNBRixlQUFHLEdBQUd0UCxJQUFJLENBQUN5UCxNQUFYO0FBQ0Q7O0FBQ0RqUSxlQUFLLENBQUM2TyxNQUFOLEdBQWU3TyxLQUFLLENBQUNrUSxLQUFOLEdBQWNKLEdBQTdCO0FBQ0EsY0FBSS9QLFFBQVEsR0FBRztBQUFFOEIsZUFBRyxFQUFFOE0sR0FBRyxDQUFDd0IsV0FBWDtBQUF3QjNQLGdCQUFJLEVBQUVBO0FBQTlCLFdBQWY7QUFDQSxlQUFLK04sU0FBTCxDQUFlOUwsU0FBZixDQUF5QjFDLFFBQXpCLEVBQW1DQyxLQUFuQyxFQUEwQ0MsT0FBMUMsRUFBbUQwTyxHQUFuRDtBQUNELFNBYkQsTUFhTztBQUNMO0FBQ0EsY0FBSTNPLEtBQUssQ0FBQ3lPLEtBQU4sSUFBZVYsTUFBTSxDQUFDMUwsUUFBdEIsSUFBbUMyTSxNQUFNLElBQUksR0FBVixJQUFpQkEsTUFBTSxHQUFHLEdBQWpFLEVBQXVFO0FBQ3JFLGlCQUFLVCxTQUFMLENBQWVPLE9BQWYsQ0FBdUI7QUFBRUMsa0JBQUksRUFBRUMsTUFBUjtBQUFnQjNRLGtCQUFJLEVBQUVzUSxHQUFHLENBQUN5QjtBQUExQixhQUF2QixFQUErRG5RLE9BQS9ELEVBQXdFME8sR0FBeEU7QUFDRCxXQUZELE1BRU87QUFDTDtBQUNBLGlCQUFLdk8sT0FBTCxHQUZLLENBR0w7O0FBQ0EsaUJBQUtrTyxZQUFMLEdBQW9CN08sTUFBTSxDQUFDK1AsVUFBUCxDQUFrQixLQUFLZCxZQUFMLENBQWtCalEsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBbEIsRUFBZ0QsS0FBSzZELFVBQXJELENBQXBCLENBSkssQ0FLTDs7QUFDQSxpQkFBS0EsVUFBTCxHQUFrQjBLLElBQUksQ0FBQ3FELEdBQUwsQ0FBUyxJQUFJLEtBQUsvTixVQUFsQixFQUE4QnlMLE1BQU0sQ0FBQ3hMLGFBQXJDLENBQWxCO0FBQ0F2QyxpQkFBSyxDQUFDeU8sS0FBTjtBQUNEO0FBQ0Y7QUFDRixPQTlCRCxNQThCTztBQUNMO0FBQ0EsYUFBS0osY0FBTCxHQUFzQjVPLE1BQU0sQ0FBQytQLFVBQVAsQ0FBa0IsS0FBS0MsV0FBTCxDQUFpQmhSLElBQWpCLENBQXNCLElBQXRCLENBQWxCLEVBQStDc1AsTUFBTSxDQUFDM0wsT0FBdEQsQ0FBdEI7QUFDRDtBQUNGO0FBQ0Y7O0FBRURxTixhQUFXLEdBQUk7QUFDYixTQUFLbEIsU0FBTCxDQUFlK0IsU0FBZixDQUF5QixLQUFLdFEsS0FBOUIsRUFBcUMsS0FBS0MsT0FBMUMsRUFBbUQsSUFBbkQ7QUFDRDs7QUFFRHNQLGNBQVksQ0FBRTFPLEtBQUYsRUFBUztBQUNuQixRQUFJOE4sR0FBRyxHQUFHOU4sS0FBSyxDQUFDOE8sYUFBaEI7QUFBQSxRQUNFM1AsS0FBSyxHQUFHLEtBQUtBLEtBRGY7QUFHQUEsU0FBSyxDQUFDNk8sTUFBTixHQUFlaE8sS0FBSyxDQUFDZ08sTUFBckI7O0FBQ0EsUUFBSWhPLEtBQUssQ0FBQzBQLGdCQUFWLEVBQTRCO0FBQzFCdlEsV0FBSyxDQUFDa1EsS0FBTixHQUFjclAsS0FBSyxDQUFDcVAsS0FBcEI7QUFDRDs7QUFFRCxRQUFJTSxVQUFVLEdBQUcsS0FBS2pDLFNBQUwsQ0FBZWlDLFVBQWhDOztBQUNBLFFBQUlBLFVBQUosRUFBZ0I7QUFDZDtBQUNBQSxnQkFBVSxDQUFDeFEsS0FBRCxFQUFRLEtBQUtDLE9BQWIsRUFBc0IsSUFBdEIsRUFBNEIwTyxHQUE1QixDQUFWO0FBQ0Q7QUFDRjs7QUF2SmE7O0FBMEpEL00sd0VBQWYsRTs7Ozs7Ozs7Ozs7QUM1SkEsb0MiLCJmaWxlIjoidmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC5janMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wbHVnaW4uanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tpXSk7XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5pbXBvcnQgVGFic0hsc0pzIGZyb20gXCIuL3JlY1NldHRpbmdzTW9kYWwvVGFic0hsc0pzXCI7XG5cbmNvbnN0IFZpZGVvSnNNb2RhbERpYWxvZ0NsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ01vZGFsRGlhbG9nJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmNsYXNzIFJlY1NldHRpbmdzTW9kYWxIbHNKcyBleHRlbmRzIFZpZGVvSnNNb2RhbERpYWxvZ0NsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIHRoZSBkZWZhdWx0IERPTSBgY2xhc3NOYW1lYC5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiAgICAgICAgIFRoZSBET00gYGNsYXNzTmFtZWAgZm9yIHRoaXMgb2JqZWN0LlxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSB2ZXJzaW9uIDUuXG4gICAqL1xuICBidWlsZENTU0NsYXNzKCkge1xuICAgIHJldHVybiBgdmpzLWhsc2pzLWxyLXJlYy1zZXR0aW5ncyAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGxvY2FsaXplZCBlcnJvciBtZXNzYWdlIGJhc2VkIG9uIHRoZSBgUGxheWVyYHMgZXJyb3IuXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogICAgICAgICBUaGUgYFBsYXllcmBzIGVycm9yIG1lc3NhZ2UgbG9jYWxpemVkIG9yIGFuIGVtcHR5IHN0cmluZy5cbiAgICovXG4gIGNvbnRlbnQoKSB7XG4gICAgaWYodGhpcy5vcHRpb25zKCkuYWxsb3dlZCkge1xuICAgICAgdGhpcy50YWJzQ29tcG9uZW50ID0gbmV3IFRhYnNIbHNKcyh0aGlzLnBsYXllcl8sIHRoaXMub3B0aW9ucygpKTtcbiAgICAgIHJldHVybiB0aGlzLnRhYnNDb21wb25lbnQuZWxfO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJOb3RBbGxvd2VkQ29udGVudCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlck5vdEFsbG93ZWRDb250ZW50KCkge1xuICAgIGlmKHRoaXMucmVuZGVyZWRFbF8pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVkRWxfO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSAodGhpcy5vcHRpb25zKCkubm90QWxsb3dlZENvbnRlbnQgfHwgKCgpID0+ICgnPGgyPlJlY29yZGluZyBub3QgYWxsb3dlZDwvaDI+JykpKSgpO1xuXG4gICAgdGhpcy5yZW5kZXJlZEVsXyA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIGlubmVySFRNTDogY29udGVudCxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLnJlbmRlcmVkRWxfO1xuICB9XG59XG5cblJlY1NldHRpbmdzTW9kYWxIbHNKcy5wcm90b3R5cGUub3B0aW9uc18gPSBPYmplY3QuYXNzaWduKHt9LCBWaWRlb0pzTW9kYWxEaWFsb2dDbGFzcy5wcm90b3R5cGUub3B0aW9uc18sIHtcbiAgcGF1c2VPbk9wZW46IGZhbHNlLFxuICBmaWxsQWx3YXlzOiBmYWxzZSxcbiAgdGVtcG9yYXJ5OiB0cnVlLFxuICB1bmNsb3NlYWJsZTogZmFsc2Vcbn0pO1xuXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdSZWNTZXR0aW5nc01vZGFsSGxzSnMnLCBSZWNTZXR0aW5nc01vZGFsSGxzSnMpO1xuZXhwb3J0IGRlZmF1bHQgUmVjU2V0dGluZ3NNb2RhbEhsc0pzO1xuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzQ29tcG9uZW50Q2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmNsYXNzIEJhY2tncm91bmRSZWNvcmRUYWJIbHNKcyBleHRlbmRzIFZpZGVvSnNDb21wb25lbnRDbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBjb25zb2xlLmdyb3VwKFwiQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzLmpzOjIwIC0gY29uc3RydWN0b3JcIik7XG4gICAgY29uc29sZS5sb2cocGxheWVyKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKCkge1xuICAgIHJldHVybiBzdXBlci5jcmVhdGVFbChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdGFiLWJhY2tncm91bmQtcmVjb3JkJyxcbiAgICAgICAgaW5uZXJIVE1MOiAnPHA+dmpzLWhsc2pzLXRhYi1iYWNrZ3JvdW5kLXJlY29yZDwvcD4nXG4gICAgICB9LFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzO1xuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuaW1wb3J0IHtmYWNlVVVJRH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V1aWRcIjtcblxuY29uc3QgVmlkZW9Kc0NvbXBvbmVudENsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuY2xhc3MgUmVhbFRpbWVSZWNvcmRUYWJIbHNKcyBleHRlbmRzIFZpZGVvSnNDb21wb25lbnRDbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0UXVhbGl0eUxldmVscygpIHtcbiAgICBjb25zdCBobHNqcyA9IHRoaXMucGxheWVyKCkuaGxzSlNMaXZlUmVjb3JkKCkuZ2V0SGxzSnMoKTtcbiAgICBjb25zdCBsZXZlbHMgPSBobHNqcy5sZXZlbHMgfHwgW107XG4gICAgY29uc3QgY3VycmVudExldmVsID0gaGxzanMuY3VycmVudExldmVsIHx8IDA7XG4gICAgcmV0dXJuIGxldmVscy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBpdGVtLmhlaWdodCArICdwJyxcbiAgICAgICAgdmFsdWU6IGluZGV4LFxuICAgICAgICBzZWxlY3RlZDogaW5kZXggPT09IGN1cnJlbnRMZXZlbCxcbiAgICAgIH1cbiAgICApKS5zb3J0KChjdXJyZW50LCBuZXh0KSA9PiB7XG4gICAgICBpZiAoKHR5cGVvZiBjdXJyZW50ICE9PSAnb2JqZWN0JykgfHwgKHR5cGVvZiBuZXh0ICE9PSAnb2JqZWN0JykpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQudmFsdWUgPCBuZXh0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50LnZhbHVlID4gbmV4dC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRWwoKSB7XG4gICAgY29uc3QgZWxlbSA9IHN1cGVyLmNyZWF0ZUVsKFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy10YWItcmVhbHRpbWUtcmVjb3JkJyxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGlmKHRoaXMub3B0aW9ucygpLnJlYWx0aW1lUmVjb3JkLmFsbG93ZWQpIHtcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJIZWFkKCkpO1xuICAgICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclF1YWxpdHlTZWxlY3RvcigpKTtcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJCdXR0b24oKSk7XG4gICAgICBlbGVtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyRm9vdGVyKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlck5vdEFsbG93ZWRDb250ZW50KCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgcmVuZGVySGVhZCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gKHRoaXMub3B0aW9ucygpLnJlYWx0aW1lUmVjb3JkLm1vZGFsSGVhZGVyQ29udGVudCB8fCAoKCkgPT4gKFxuICAgICAgXCI8cD5SZWFsLXRpbWUgcmVjb3JkaW5nIGFsbG93cyB5b3UgdG8gcmVjb3JkIGEgZnJhZ21lbnQgb2YgdGhlIHByb2dyYW0geW91IGFyZSB3YXRjaGluZy4gXCIgK1xuICAgICAgXCJSZWNvcmRpbmcgd2lsbCBiZSBkb25lIHVudGlsIHRoZSByZWNvcmRpbmcgc3RvcHMsIHRoZSByZWNvcmRpbmcgdGltZSBsaW1pdCBpcyBleGNlZWRlZCBvciB0aGUgdGFiIGlzIGNsb3NlZC5cIiArXG4gICAgICBcIlRvIHN0YXJ0IHJlY29yZGluZywgc2VsZWN0IHlvdXIgcHJlZmVycmVkIHF1YWxpdHkgYW5kIGNsaWNrIDxzdHJvbmc+XFxcInN0YXJ0IHJlY29yZGluZ1xcXCI8L3N0cm9uZz4uPC9wPlwiICtcbiAgICAgIFwiPHA+WW91ciBjdXJyZW50IHJlY29yZGluZyB0aW1lIGxpbWl0IGlzIFwiICsgdGhpcy5vcHRpb25zKCkubWF4UmVjb3JkTWludXRlcyArIFwiIG1pbi48L3A+XCJcbiAgICApKSkoKSA7XG4gICAgcmV0dXJuIERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgaW5uZXJIVE1MOiBjb250ZW50XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlckZvb3RlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gKHRoaXMub3B0aW9ucygpLnJlYWx0aW1lUmVjb3JkLm1vZGFsRm9vdGVyQ29udGVudCB8fCAoKCkgPT4gKCcnKSkpKCkgO1xuICAgIHJldHVybiBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGlubmVySFRNTDogY29udGVudFxuICAgIH0pXG4gIH1cblxuICByZW5kZXJRdWFsaXR5U2VsZWN0b3IoKSB7XG4gICAgY29uc3QgZWxlbSA9IERvbS5jcmVhdGVFbChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdGFiLXF1YWxpdHktc2VsZWN0IHZqcy1obHNqcy1mb3JtLWdyb3VwJyxcbiAgICAgIH0sXG4gICAgKTtcbiAgICBjb25zdCB1dWlkID0gZmFjZVVVSUQoJ3Zqcy1obHMtcXVhbGl0eS1zZWxlY3QnKTtcblxuICAgIGVsZW0uYXBwZW5kQ2hpbGQoXG4gICAgICBEb20uY3JlYXRlRWwoJ2xhYmVsJywge1xuICAgICAgICBmb3I6IHV1aWQsXG4gICAgICAgIGlubmVyVGV4dDogJ1F1YWxpdHknLFxuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtZm9ybS1sYWJlbCdcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMucXVhbGl0eVNlbGVjdCA9IERvbS5jcmVhdGVFbCgnc2VsZWN0Jywge1xuICAgICAgaWQ6IHV1aWQsXG4gICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtZm9ybS1pbnB1dCdcbiAgICB9KTtcblxuICAgIGNvbnN0IGxldmVscyA9IHRoaXMuZ2V0UXVhbGl0eUxldmVscygpO1xuXG4gICAgbGV2ZWxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMucXVhbGl0eVNlbGVjdC5hcHBlbmRDaGlsZChcbiAgICAgICAgRG9tLmNyZWF0ZUVsKCdvcHRpb24nLCB7XG4gICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgdGV4dDogaXRlbS5sYWJlbCxcbiAgICAgICAgICBzZWxlY3RlZDogaXRlbS5zZWxlY3RlZFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGlmKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5xdWFsaXR5U2VsZWN0LnZhbHVlID0gaXRlbS52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5xdWFsaXR5U2VsZWN0KTtcblxuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgcmVuZGVyQnV0dG9uKCkge1xuICAgIGNvbnN0IGhvbGRlciA9IERvbS5jcmVhdGVFbChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtZm9ybS1ncm91cCcsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGhvbGRlci5hcHBlbmRDaGlsZChEb20uY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1idXR0b24gdmpzLWhsc2pzLXN0YXJ0LXJlY29yZCcsXG4gICAgICBpbm5lclRleHQ6ICdTdGFydCBSZWNvcmRpbmcnLFxuICAgICAgb25jbGljazogdGhpcy5oYW5kbGVTdGFydFJlY29yZGluZy5iaW5kKHRoaXMpXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIGhvbGRlcjtcbiAgfVxuXG4gIHJlbmRlck5vdEFsbG93ZWRDb250ZW50KCkge1xuICAgIGlmKHRoaXMucmVuZGVyZWRFbF8pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVkRWxfO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSAodGhpcy5vcHRpb25zKCkucmVhbHRpbWVSZWNvcmQubm90QWxsb3dlZENvbnRlbnQgfHwgKCgpID0+ICgnPGgyPlJlY29yZGluZyBub3QgYWxsb3dlZDwvaDI+JykpKSgpO1xuXG4gICAgdGhpcy5yZW5kZXJlZEVsXyA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIGlubmVySFRNTDogY29udGVudCxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLnJlbmRlcmVkRWxfO1xuICB9XG5cbiAgaGFuZGxlU3RhcnRSZWNvcmRpbmcoKSB7XG4gICAgdGhpcy5wbGF5ZXIoKS5obHNKU0xpdmVSZWNvcmQoKS5zdGFydFJlYWx0aW1lUmVjb3JkKHRoaXMucXVhbGl0eVNlbGVjdC52YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhbFRpbWVSZWNvcmRUYWJIbHNKcztcbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcbmltcG9ydCBSZWFsVGltZVJlY29yZFRhYkhsc0pzIGZyb20gXCIuL1JlYWxUaW1lUmVjb3JkVGFiSGxzSnNcIjtcbmltcG9ydCBCYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnMgZnJvbSBcIi4vQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzXCI7XG5cbmNvbnN0IFZpZGVvSnNDb21wb25lbnRDbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuY2xhc3MgVGFic0hsc0pzIGV4dGVuZHMgVmlkZW9Kc0NvbXBvbmVudENsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gIH1cblxuICBjcmVhdGVFbCgpIHtcbiAgICBjb25zdCB0YWJzSG9sZGVyID0gc3VwZXIuY3JlYXRlRWwoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMnLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgdGFic0hvbGRlci5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlck5hdigpKTtcblxuICAgIHRhYnNIb2xkZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJCb2R5KCkpO1xuXG4gICAgcmV0dXJuIHRhYnNIb2xkZXI7XG4gIH1cblxuXG4gIHJlbmRlck5hdigpIHtcbiAgICBjb25zdCBuYXZIb2xkZXIgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLW5hdidcbiAgICB9KTtcbiAgICBuYXZIb2xkZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2LWVsZW0gYWN0aXZlJyxcbiAgICAgICAgaW5uZXJIVE1MOiAnUmVhbHRpbWUnLFxuICAgICAgICBvbmNsaWNrOiAoKSA9PiB7dGhpcy5oYW5kbGVDbGljaygwKX1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIG5hdkhvbGRlci5hcHBlbmRDaGlsZChcbiAgICAgIERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYtZWxlbScsXG4gICAgICAgIGlubmVySFRNTDogJ0JhY2tncm91bmQnLFxuICAgICAgICBvbmNsaWNrOiAoKSA9PiB7dGhpcy5oYW5kbGVDbGljaygxKX1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBuYXZIb2xkZXI7XG4gIH1cblxuICByZW5kZXJCb2R5KCkge1xuICAgIGNvbnN0IGJvZHlIb2xkZXIgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWJvZHknXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlYWx0aW1lUmVjb3JkID0gbmV3IFJlYWxUaW1lUmVjb3JkVGFiSGxzSnModGhpcy5wbGF5ZXJfLCB0aGlzLm9wdGlvbnMoKSk7XG4gICAgY29uc3QgZWxlbTEgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWVsZW0gYWN0aXZlJ1xuICAgIH0pO1xuICAgIGVsZW0xLmFwcGVuZENoaWxkKHRoaXMucmVhbHRpbWVSZWNvcmQuZWxfKTtcbiAgICBib2R5SG9sZGVyLmFwcGVuZENoaWxkKGVsZW0xKTtcblxuICAgIHRoaXMuYmFja2dyb3VuZFJlY29yZCA9IG5ldyBCYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnModGhpcy5wbGF5ZXJfLCB0aGlzLm9wdGlvbnMoKSk7XG4gICAgY29uc3QgZWxlbTIgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWVsZW0nXG4gICAgfSk7XG4gICAgZWxlbTIuYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kUmVjb3JkLmVsXyk7XG4gICAgYm9keUhvbGRlci5hcHBlbmRDaGlsZChlbGVtMik7XG5cbiAgICByZXR1cm4gYm9keUhvbGRlcjtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGluZGV4KSB7XG4gICAgdGhpcy4kJCgnLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLW5hdi1lbGVtJykuZm9yRWFjaCgoZWxlbSwgZWxlbUluZGV4KSA9PiB7XG4gICAgICBpZihpbmRleCA9PT0gZWxlbUluZGV4KSB7XG4gICAgICAgIERvbS5hZGRDbGFzcyhlbGVtLCAnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoZWxlbSwgJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuJCQoJy52anMtaGxzanMtdmVydGljYWwtdGFicy1lbGVtJykuZm9yRWFjaCgoZWxlbSwgZWxlbUluZGV4KSA9PiB7XG4gICAgICBpZihpbmRleCA9PT0gZWxlbUluZGV4KSB7XG4gICAgICAgIERvbS5hZGRDbGFzcyhlbGVtLCAnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoZWxlbSwgJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzSGxzSnM7XG4iLCJpbXBvcnQge1BsYXlsaXN0TW9kZWx9IGZyb20gXCIuLi9Nb2RlbHMvUGxheWxpc3RcIjtcbmltcG9ydCB7bm93SW5Gb3JtYXRZbWRIaXN9IGZyb20gXCIuLi91dGlscy9kYXRlXCI7XG5pbXBvcnQgWGhyTG9hZGVyIGZyb20gXCIuLi91dGlscy94aHItbG9hZGVyXCI7XG5cbmNvbnN0IEhscyA9IHdpbmRvdy5IbHM7XG5cbmNvbnN0IGZhY2VNaW1lUHJvbWlzZSA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZSh7fSk7XG4gIH0pXG59O1xuXG5jbGFzcyBSZWFsdGltZVJlY29yZENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihwbHVnaW4pIHtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLm1hbmlmZXN0TGlzdGVuZXIgPSBudWxsO1xuICAgIHRoaXMubGV2ZWxMaXN0ZW5lciA9IG51bGw7XG4gICAgdGhpcy5mcmFnbWVudExpc3RlbmVyID0gbnVsbDtcbiAgICB0aGlzLnJlY29yZFN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMucGxheWxpc3QgPSBudWxsO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBobHNqcyA9IHRoaXMucGx1Z2luLmdldEhsc0pzKCk7XG4gICAgdGhpcy5mcmFnbWVudExpc3RlbmVyID0gaGxzanMub24oSGxzLkV2ZW50cy5GUkFHX0xPQURFRCwgdGhpcy5obHNGcmFnbWVudExvYWRlZCk7XG4gIH1cblxuICBzdGFydFJlY29yZCgpIHtcbiAgICB0aGlzLnBsYXlsaXN0ID0gbnVsbDtcbiAgICB0aGlzLnJlY29yZFN0YXJ0ZWQgPSB0cnVlO1xuICB9XG5cbiAgc3RvcFJlY29yZCgpIHtcbiAgICB0aGlzLnJlY29yZFN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBpZih0aGlzLnBsYXlsaXN0KSB7XG4gICAgICB0aGlzLnBsYXlsaXN0LmZpbmlzaGVkKCk7XG4gICAgICB0aGlzLnBsdWdpbi5zdG9yYWdlQ29udHJvbGxlci5zYXZlUGxheWxpc3QodGhpcy5wbGF5bGlzdCk7XG4gICAgfVxuICB9XG5cbiAgc2F2ZUZyYWdtZW50KGZyYWcpIHtcbiAgICBpZih0aGlzLnBsYXlsaXN0ID09PSBudWxsKSB7XG4gICAgICB0aGlzLmluaXRQbGF5bGlzdChmcmFnLmxldmVsKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnBsYXlsaXN0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZGVyID0gbmV3IFhockxvYWRlcigpO1xuICAgIGNvbnN0IHVybCA9IGZyYWcudXJsO1xuICAgIGNvbnN0IGxvYWRlckNvbnRleHQgPSB7XG4gICAgICB1cmwsXG4gICAgICBmcmFnOiB0aGlzLnBsYXlsaXN0LmFkZEZyYWdtZW50KGZyYWcuZHVyYXRpb24sIHVybCksXG4gICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXG4gICAgICBwcm9ncmVzc0RhdGE6IGZhbHNlLFxuICAgICAgbG9hZGVyXG4gICAgfTtcbiAgICBjb25zdCBsb2FkZXJDb25maWcgPSB7XG4gICAgICB0aW1lb3V0OiA2MCxcbiAgICAgIG1heFJldHJ5OiAwLFxuICAgICAgcmV0cnlEZWxheTogMCxcbiAgICAgIG1heFJldHJ5RGVsYXk6IDNcbiAgICB9O1xuXG4gICAgY29uc3QgbG9hZGVyQ2FsbGJhY2tzID0ge1xuICAgICAgb25TdWNjZXNzOiB0aGlzLmZyYWdtZW50TG9hZGVkLFxuICAgIH07XG4gICAgbG9hZGVyLmxvYWQobG9hZGVyQ29udGV4dCwgbG9hZGVyQ29uZmlnLCBsb2FkZXJDYWxsYmFja3MpO1xuICB9XG5cbiAgaW5pdFBsYXlsaXN0KGxldmVsSW5kZXgpIHtcbiAgICBjb25zdCBobHNqcyA9IHRoaXMucGx1Z2luLmdldEhsc0pzKCk7XG4gICAgY29uc3QgbGV2ZWwgPSBobHNqcy5sZXZlbHNbbGV2ZWxJbmRleF07XG4gICAgY29uc3QgbWltZVByb21pc2UgPSAodGhpcy5wbHVnaW4ub3B0aW9ucy5yZWFsdGltZVJlY29yZC5nZXRSZWNvcmRNaW1lIHx8IGZhY2VNaW1lUHJvbWlzZSkoKTtcblxuICAgIGlmKCFsZXZlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucGxheWxpc3QgPSBuZXcgUGxheWxpc3RNb2RlbCh7XG4gICAgICBpZDogJ3JlY29yZC0nICsgbm93SW5Gb3JtYXRZbWRIaXMoKSxcbiAgICAgIHdpZHRoOiBsZXZlbC53aWR0aCxcbiAgICAgIGhlaWdodDogbGV2ZWwuaGVpZ2h0LFxuICAgICAgdGFyZ2V0ZHVyYXRpb246IGxldmVsLmRldGFpbHMudGFyZ2V0ZHVyYXRpb25cbiAgICB9KTtcblxuICAgIG1pbWVQcm9taXNlLnRoZW4oKG1pbWUpID0+IHtcbiAgICAgIHRoaXMucGxheWxpc3QubWltZSA9IG1pbWU7XG4gICAgICB0aGlzLnBsdWdpbi5zdG9yYWdlQ29udHJvbGxlci5zYXZlUGxheWxpc3QodGhpcy5wbGF5bGlzdCk7XG4gICAgfSlcbiAgfVxuXG4gIGZyYWdtZW50TG9hZGVkID0gKHJlc3BvbnNlLCBzdGF0cywgY29udGV4dCwgbmV0d29ya0RldGFpbHMgPSBudWxsKSA9PiB7XG4gICAgY29udGV4dC5sb2FkZXIuZGVzdHJveSgpO1xuICAgIGNvbnRleHQubG9hZGVyID0gbnVsbDtcblxuICAgIHRoaXMucGx1Z2luLnN0b3JhZ2VDb250cm9sbGVyLnNhdmVGcmFnbWVudChjb250ZXh0LmZyYWcsIHJlc3BvbnNlLmRhdGEsIHN0YXRzKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucGxheWxpc3QuZnJhZ21lbnRTYXZlZChjb250ZXh0LmZyYWcpO1xuICAgICAgdGhpcy5wbHVnaW4uc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZVBsYXlsaXN0KHRoaXMucGxheWxpc3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIGhsc0ZyYWdtZW50TG9hZGVkID0gKGV2ZW50LCBkYXRhKSA9PiB7XG4gICAgaWYodGhpcy5yZWNvcmRTdGFydGVkKSB7XG4gICAgICB0aGlzLnNhdmVGcmFnbWVudChkYXRhLmZyYWcpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyO1xuIiwiY29uc3QgREJfVkVSU0lPTiA9IDE7XG5jb25zdCBTVE9SQUdFX1dSSVRFX01PREUgPSAncmVhZHdyaXRlJztcbmNvbnN0IFNUT1JBR0VfUkVBRF9NT0RFID0gJ3JlYWRvbmx5JztcblxuY2xhc3MgU3RvcmFnZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihwbHVnaW4pIHtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLmRiID0gbnVsbDtcbiAgfVxuXG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBvcGVuUmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKHRoaXMucGx1Z2luLm9wdGlvbnMuc3RvcmFnZURiTmFtZSwgREJfVkVSU0lPTik7XG4gICAgb3BlblJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuICAgICAgdGhpcy5kYiA9IG9wZW5SZXF1ZXN0LnJlc3VsdDtcbiAgICAgIHRoaXMuZGIuY3JlYXRlT2JqZWN0U3RvcmUodGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlUGxheWxpc3RzTmFtZSwge2tleVBhdGg6ICdpZCd9KTtcblxuICAgICAgY29uc3QgZnJhZ21lbnRzU3RvcmFnZSA9IHRoaXMuZGIuY3JlYXRlT2JqZWN0U3RvcmUodGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlRnJhZ21lbnRzTmFtZSwge2tleVBhdGg6ICd1dWlkJ30pO1xuICAgICAgZnJhZ21lbnRzU3RvcmFnZS5jcmVhdGVJbmRleCgncGxheWxpc3RJZCcsICdwbGF5bGlzdElkJywge3VuaXF1ZTogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgdGhpcy5kYiA9IG9wZW5SZXF1ZXN0LnJlc3VsdDtcbiAgICB9O1xuICB9XG5cbiAgY2hlY2tSZXF1aXJlbWVudHMoKSB7XG4gICAgcmV0dXJuICdpbmRleGVkREInIGluIHdpbmRvdztcbiAgfVxuXG4gIC8vVE9ETzogbmVlZCB0byBhZGQgZXJyb3IgcHJvY2Vzc2luZ1xuICBzYXZlRnJhZ21lbnQoZnJhZ21lbnQsIHBheWxvYWQsIHN0YXRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZih0aGlzLmRiID09PSBudWxsKSB7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdGhpcy5kYi50cmFuc2FjdGlvbih0aGlzLnBsdWdpbi5vcHRpb25zLnN0b3JhZ2VGcmFnbWVudHNOYW1lLCBTVE9SQUdFX1dSSVRFX01PREUpO1xuICAgICAgY29uc3Qgc3RvcmFnZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXMucGx1Z2luLm9wdGlvbnMuc3RvcmFnZUZyYWdtZW50c05hbWUpO1xuICAgICAgY29uc3QgcmVxdWVzdCA9IHN0b3JhZ2UuYWRkKHtcbiAgICAgICAgLi4uZnJhZ21lbnQsXG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIHN0YXRzXG4gICAgICB9KTtcblxuICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cChcImNhY2hlLWRyaXZlci5qczoxNyAtIHN0b3JlIC0gb25zdWNjZXNzXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0KTtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgfTtcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwKFwiY2FjaGUtZHJpdmVyLmpzOjE3IC0gc3RvcmUgLSBvbmVycm9yXCIpO1xuICAgICAgICAvLyBjb25zb2xlLndhcm4ocmVxdWVzdCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgIH07XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy9UT0RPOiBuZWVkIHRvIGFkZCBlcnJvciBwcm9jZXNzaW5nXG4gIHNhdmVQbGF5bGlzdChwbGF5bGlzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYodGhpcy5kYiA9PT0gbnVsbCkge1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXMuZGIudHJhbnNhY3Rpb24odGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlUGxheWxpc3RzTmFtZSwgU1RPUkFHRV9XUklURV9NT0RFKTtcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSh0aGlzLnBsdWdpbi5vcHRpb25zLnN0b3JhZ2VQbGF5bGlzdHNOYW1lKTtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yYWdlLnB1dChwbGF5bGlzdCk7XG5cbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXAoXCJjYWNoZS1kcml2ZXIuanM6MTcgLSBzdG9yZSAtIG9uc3VjY2Vzc1wiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgIH07XG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cChcImNhY2hlLWRyaXZlci5qczoxNyAtIHN0b3JlIC0gb25lcnJvclwiKTtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKHJlcXVlc3QpO1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICB9O1xuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgUmVjU2V0dGluZ3NNb2RhbEhsc0pzIGZyb20gXCIuLi9Db21wb25lbnRzL1JlY1NldHRpbmdzTW9kYWxIbHNKc1wiO1xuXG5jbGFzcyBWaWV3Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHBsdWdpbikge1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuXG4gICAgdGhpcy5yZWNCdXR0b25Db21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMuc3RvcEJ1dHRvbkNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5yZWNTdGF0dXNCYXJDb21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMucHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLmxpdmVCdXR0b25Db21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMuY2FjaGVkQnV0dG9uQ29tcG9uZW50ID0gbnVsbDtcblxuXG4gICAgdGhpcy5yZWNTZXR0aW5nc01vZGFsQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHRoaXMubGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYyA9IFtdO1xuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250cm9sQmFyID0gdGhpcy5wbHVnaW4ucGxheWVyLmdldENoaWxkKCdDb250cm9sQmFyJyk7XG4gICAgY29uc3Qgc3BhY2UgPSBjb250cm9sQmFyLmFkZENoaWxkKCdDb21wb25lbnQnLCB7fSwgMik7XG4gICAgc3BhY2UuYWRkQ2xhc3MoJ3Zqcy1obHNqcy1jb250cm9scy1ob2xkZXInKTtcblxuICAgIHRoaXMucmVtb3ZlRGVmYXVsdENvbnRyb2xzKCk7XG5cbiAgICB0aGlzLmxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWMgPSB0aGlzLnBsdWdpbi5vcHRpb25zLmxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWMubWFwKChzZWxlY3RvcikgPT4ge1xuICAgICAgcmV0dXJuIGNvbnRyb2xCYXIuY2hpbGRyZW4oKS5maWx0ZXIoY29tcG9uZW50ID0+IGNvbXBvbmVudC5oYXNDbGFzcyhzZWxlY3RvcikpWzBdO1xuICAgIH0pLmZpbHRlcihjb21wb25lbnQgPT4gISFjb21wb25lbnQpO1xuXG4gICAgdGhpcy5jYWNoZWRCdXR0b25Db21wb25lbnQgPSBzcGFjZS5hZGRDaGlsZCgnQ2FjaGVkQnV0dG9uSGxzSnMnLCB7XG4gICAgICBjbGlja0hhbmRsZXI6IHRoaXMuYWN0aXZlTGl2ZU1vZGVcbiAgICB9LCAxKTtcbiAgICB0aGlzLmNhY2hlZEJ1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG5cbiAgICB0aGlzLmxpdmVCdXR0b25Db21wb25lbnQgPSBjb250cm9sQmFyLmFkZENoaWxkKCdMaXZlQnV0dG9uSGxzSnMnLCB7XG4gICAgICBjbGlja0hhbmRsZXI6IHRoaXMuYWN0aXZhdGVQcm9ncmVzc01vZGVcbiAgICB9LCAyKTtcbiAgICB0aGlzLmxpdmVCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuXG4gICAgdGhpcy5yZWNCdXR0b25Db21wb25lbnQgPSBzcGFjZS5hZGRDaGlsZCgnUmVjQnV0dG9uSGxzSnMnLCB7XG4gICAgICBjbGlja0hhbmRsZXI6IHRoaXMuc2hvd1JlY29yZFNldHRpbmdzXG4gICAgfSwgMSk7XG4gICAgdGhpcy5yZWNCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuXG4gICAgdGhpcy5zdG9wQnV0dG9uQ29tcG9uZW50ID0gY29udHJvbEJhci5hZGRDaGlsZCgnU3RvcEJ1dHRvbkhsc0pzJywge1xuICAgICAgY2xpY2tIYW5kbGVyOiB0aGlzLnBsdWdpbi5zdG9wUmVhbHRpbWVSZWNvcmRcbiAgICB9LCAxKTtcbiAgICB0aGlzLnN0b3BCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuXG4gICAgdGhpcy5yZWNTdGF0dXNCYXJDb21wb25lbnQgPSBzcGFjZS5hZGRDaGlsZCgnUmVjU3RhdHVzQmFySGxzSnMnLCAxKTtcbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudC5oaWRlKCk7XG5cbiAgICB0aGlzLnByb2dyZXNzQ29udHJvbENvbXBvbmVudCA9IHNwYWNlLmFkZENoaWxkKCdQcm9ncmVzc0NvbnRyb2xIbHNKcycsIHt9LCAyKTtcbiAgICB0aGlzLnByb2dyZXNzQ29udHJvbENvbXBvbmVudC5oaWRlKCk7XG5cbiAgICB0aGlzLmFjdGl2ZUxpdmVNb2RlKCk7XG4gIH07XG5cbiAgcmVtb3ZlRGVmYXVsdENvbnRyb2xzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRyb2xCYXIgPSB0aGlzLnBsdWdpbi5wbGF5ZXIuZ2V0Q2hpbGQoJ0NvbnRyb2xCYXInKTtcbiAgICBjb250cm9sQmFyLnJlbW92ZUNoaWxkKCdQcm9ncmVzc0NvbnRyb2wnKTtcbiAgICBjb250cm9sQmFyLnJlbW92ZUNoaWxkKCdTZWVrVG9MaXZlJyk7XG4gICAgY29udHJvbEJhci5yZW1vdmVDaGlsZCgnTGl2ZURpc3BsYXknKTtcbiAgfTtcblxuICBhY3RpdmVMaXZlTW9kZSA9ICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zaG93T3RoZXJDb250cm9sKCk7XG4gICAgICB0aGlzLnNob3dMaXZlQ29udHJvbCgpO1xuICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3NDb250cm9sKCk7XG4gICAgICB0aGlzLmhpZGVSZWNDb250cm9sKCk7XG4gICAgICB0aGlzLnBsdWdpbi5wbGF5ZXIubGl2ZVRyYWNrZXIuc2Vla1RvTGl2ZUVkZ2UoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnBsdWdpbi5wbGF5ZXIubG9nLndhcm4oZS5tZXNzYWdlKVxuICAgIH1cbiAgfTtcblxuICBhY3RpdmF0ZVByb2dyZXNzTW9kZSA9ICgpID0+IHtcbiAgICBpZih0aGlzLnBsdWdpbi5zdGF0ZS5yZWNvcmRJblByb2Nlc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zaG93T3RoZXJDb250cm9sKCk7XG4gICAgdGhpcy5zaG93UHJvZ3Jlc3NDb250cm9sKCk7XG4gICAgdGhpcy5oaWRlTGl2ZUNvbnRyb2woKTtcbiAgICB0aGlzLmhpZGVSZWNDb250cm9sKCk7XG4gIH07XG5cbiAgc2hvd1JlY29yZFNldHRpbmdzID0gKCkgPT4ge1xuICAgIHRoaXMucmVjU2V0dGluZ3NNb2RhbENvbXBvbmVudCA9IG5ldyBSZWNTZXR0aW5nc01vZGFsSGxzSnModGhpcy5wbHVnaW4ucGxheWVyLCB0aGlzLnBsdWdpbi5vcHRpb25zKTtcbiAgICB0aGlzLnBsdWdpbi5wbGF5ZXIuYWRkQ2hpbGQodGhpcy5yZWNTZXR0aW5nc01vZGFsQ29tcG9uZW50KTtcbiAgICB0aGlzLnJlY1NldHRpbmdzTW9kYWxDb21wb25lbnQub3BlbigpO1xuICB9O1xuXG4gIGFjdGl2YXRlUmVjb3JkTW9kZSA9ICgpID0+IHtcbiAgICB0aGlzLnJlY1NldHRpbmdzTW9kYWxDb21wb25lbnQuY2xvc2UoKTtcbiAgICB0aGlzLmhpZGVQcm9ncmVzc0NvbnRyb2woKTtcbiAgICB0aGlzLmhpZGVMaXZlQ29udHJvbCgpO1xuICAgIHRoaXMuaGlkZU90aGVyQ29udHJvbCgpO1xuICAgIHRoaXMuc2hvd1JlY0NvbnRyb2woKTtcbiAgfTtcblxuICBzaG93UmVjQ29udHJvbCA9ICgpID0+IHtcbiAgICBjb25zdCBtYXhSZWNvcmRTZWNvbmRzID0gdGhpcy5wbHVnaW4ub3B0aW9ucy5tYXhSZWNvcmRNaW51dGVzICogNjA7XG4gICAgdGhpcy5wbHVnaW4ucGxheWVyLmFkZENsYXNzKCd2anMtaGxzanMtcmVjb3JkLXN0YXJ0ZWQnKTtcbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudC51cGRhdGVSZWNvcmRMZWZ0VGltZShtYXhSZWNvcmRTZWNvbmRzKTtcbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudC51cGRhdGVSZWNvcmRUaW1lKDApO1xuICAgIGxldCBhID0gMTtcbiAgICB0aGlzLnJlY29yZFVwZGF0ZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYoYSA+PSBtYXhSZWNvcmRTZWNvbmRzKSB7XG4gICAgICAgIHRoaXMucGx1Z2luLnN0b3BSZWFsdGltZVJlY29yZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWNTdGF0dXNCYXJDb21wb25lbnQudXBkYXRlUmVjb3JkVGltZShhKyspO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5zdG9wQnV0dG9uQ29tcG9uZW50LnNob3coKTtcbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudC5zaG93KCk7XG4gIH07XG5cbiAgaGlkZVJlY0NvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5wbHVnaW4ucGxheWVyLnJlbW92ZUNsYXNzKCd2anMtaGxzanMtcmVjb3JkLXN0YXJ0ZWQnKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMucmVjb3JkVXBkYXRlSW50ZXJ2YWwpO1xuICAgIHRoaXMuc3RvcEJ1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG4gICAgdGhpcy5yZWNTdGF0dXNCYXJDb21wb25lbnQuaGlkZSgpO1xuICB9O1xuXG4gIHNob3dQcm9ncmVzc0NvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9ncmVzc0NvbnRyb2xDb21wb25lbnQuc2hvdygpO1xuICAgIHRoaXMuY2FjaGVkQnV0dG9uQ29tcG9uZW50LnNob3coKTtcbiAgfTtcblxuICBoaWRlUHJvZ3Jlc3NDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMucHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50LmhpZGUoKTtcbiAgICB0aGlzLmNhY2hlZEJ1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG4gIH07XG5cbiAgaGlkZU90aGVyQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLmxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50LmFkZENsYXNzKCd2anMtaGxzanMtbHItaGlkZGVuJykpO1xuICB9O1xuXG4gIHNob3dPdGhlckNvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5saXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudC5yZW1vdmVDbGFzcygndmpzLWhsc2pzLWxyLWhpZGRlbicpKTtcbiAgfTtcblxuXG4gIHNob3dMaXZlQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLmxpdmVCdXR0b25Db21wb25lbnQuc2hvdygpO1xuICAgIHRoaXMucmVjQnV0dG9uQ29tcG9uZW50LnNob3coKTtcbiAgfTtcblxuICBoaWRlTGl2ZUNvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5saXZlQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcbiAgICB0aGlzLnJlY0J1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG4gIH07XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld0NvbnRyb2xsZXI7XG4iLCJpbXBvcnQge2ZhY2VVVUlEfSBmcm9tIFwiLi4vdXRpbHMvdXVpZFwiO1xuXG5leHBvcnQgY2xhc3MgRnJhZ21lbnRNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKGZyYWdtZW50RGF0YSkge1xuICAgIHRoaXMuZHVyYXRpb24gPSBmcmFnbWVudERhdGEuZHVyYXRpb24gfHwgMDtcbiAgICB0aGlzLnVybCA9IGZyYWdtZW50RGF0YS51cmwgfHwgJyc7XG4gICAgdGhpcy5wbGF5bGlzdElkID0gZnJhZ21lbnREYXRhLnBsYXlsaXN0SWQgfHwgJ3RtcCc7XG4gICAgdGhpcy51dWlkID0gZmFjZVVVSUQodGhpcy5wbGF5bGlzdElkICsgJy0nICsgdGhpcy51cmwuc3BsaXQoJy8nKS5wb3AoKSk7XG4gICAgdGhpcy5zYXZlZCA9IGZyYWdtZW50RGF0YS5zYXZlZCB8fCBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtGcmFnbWVudE1vZGVsfSBmcm9tIFwiLi9GcmFnbWVudFwiO1xuXG5jb25zdCBjcmVhdGVQbGF5bGlzdEhlYWRlciA9ICh0YXJnZXRkdXJhdGlvbikgPT4ge1xuICByZXR1cm4gXCIjRVhUTTNVXFxuXCIgK1xuICAgIFwiI0VYVC1YLVZFUlNJT046NFxcblwiICtcbiAgICBcIiNFWFQtWC1UQVJHRVREVVJBVElPTjpcIiArIHRhcmdldGR1cmF0aW9uICsgXCJcXG5cIiArXG4gICAgXCIjRVhULVgtTUVESUEtU0VRVUVOQ0U6MFxcblwiO1xufTtcbmNvbnN0IGFkZFBsYXlsaXN0RnJhZ21lbnQgPSAoZHVyYWN0aW9uLCB1cmwpID0+IHtcbnJldHVybiBcIiNFWFRJTkY6XCIgKyBkdXJhY3Rpb24gKyBcIixcXG5cIiArXG4gIHVybCArIFwiXFxuXCI7XG59O1xuY29uc3QgY3JlYXRlUGxheWxpc3RGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiBcIiNFWFQtWC1FTkRMSVNUXFxuXCI7XG59O1xuXG5cbmV4cG9ydCBjbGFzcyBQbGF5bGlzdE1vZGVsIHtcbiAgY29uc3RydWN0b3IocGxheWxpc3REYXRhKSB7XG4gICAgdGhpcy5pZCA9IHBsYXlsaXN0RGF0YS5pZCB8fCAnJztcbiAgICB0aGlzLndpZHRoID0gcGxheWxpc3REYXRhLndpZHRoIHx8IDM4NDtcbiAgICB0aGlzLmhlaWdodCA9IHBsYXlsaXN0RGF0YS5oZWlnaHQgfHwgMzg0O1xuICAgIHRoaXMuZnJhZ21lbnRzID0gcGxheWxpc3REYXRhLmZyYWdtZW50cyB8fCBbXTtcbiAgICB0aGlzLnRhcmdldGR1cmF0aW9uID0gcGxheWxpc3REYXRhLnRhcmdldGR1cmF0aW9uIHx8IDA7XG4gICAgdGhpcy5taW1lID0gcGxheWxpc3REYXRhLm1pbWUgfHwge307XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBwbGF5bGlzdERhdGEuY3JlYXRlZEF0IHx8IERhdGUubm93KCk7XG4gICAgdGhpcy51cGRhdGVkQXQgPSBwbGF5bGlzdERhdGEudXBkYXRlZEF0IHx8IG51bGw7XG4gICAgdGhpcy5yZWNGaW5pc2hlZCA9IHBsYXlsaXN0RGF0YS5yZWNGaW5pc2hlZCB8fCBmYWxzZTtcbiAgfVxuXG4gIGFkZEZyYWdtZW50KGR1cmF0aW9uLCB1cmwpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IG5ldyBGcmFnbWVudE1vZGVsKHtkdXJhdGlvbiwgdXJsfSk7XG4gICAgdGhpcy5mcmFnbWVudHMucHVzaChmcmFnbWVudCk7XG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9XG5cbiAgZnJhZ21lbnRTYXZlZChmcmFnbWVudCkge1xuICAgIHRoaXMuZnJhZ21lbnRzID0gdGhpcy5mcmFnbWVudHMubWFwKChmcmFnKSA9PiB7XG4gICAgICBpZihmcmFnLnV1aWQgPT09IGZyYWdtZW50LnV1aWQpIHtcbiAgICAgICAgZnJhZy5zYXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZnJhZztcbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlZEF0ID0gRGF0ZS5ub3coKTtcbiAgfVxuXG4gIGZpbmlzaGVkKCkge1xuICAgIHRoaXMudXBkYXRlZEF0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnJlY0ZpbmlzaGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBjcmVhdGVQbGF5bGlzdEhlYWRlcih0aGlzLnRhcmdldGR1cmF0aW9uKSArXG4gICAgICAodGhpcy5mcmFnbWVudHMuZmlsdGVyKGZyYWdtZW50ID0+IChmcmFnbWVudC5zYXZlZCkpXG4gICAgICAgIC5tYXAoZnJhZ21lbnQgPT4gKGFkZFBsYXlsaXN0RnJhZ21lbnQoZnJhZ21lbnQuZHVyYXRpb24sIGZyYWdtZW50LnV1aWQpKSkuam9pbignJykpICtcbiAgICAgIGNyZWF0ZVBsYXlsaXN0Rm9vdGVyKCk7XG4gIH1cbn1cbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuY29uc3QgVmlkZW9Kc0J1dHRvbkNsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWNoZWRCdXR0b25IbHNKcyBleHRlbmRzIFZpZGVvSnNCdXR0b25DbGFzcyB7XG4gIFxuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKSk7XG4gIH1cblxuICBjcmVhdGVFbCh0YWcsIHByb3BzID0ge30sIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIHRoaXMubm9uSWNvbkNvbnRyb2wgPSB0cnVlO1xuXG4gICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIC8vIGNsYXNzTmFtZTogJ3Zqcy1saXZlLWRpc3BsYXknLFxuICAgICAgLy8gaW5uZXJIVE1MOiAnRFZSJyxcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1zZWVrLXRvLWxpdmUtY29udHJvbCcsXG4gICAgICBpbm5lckhUTUw6ICc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cInZqcy1pY29uLXBsYWNlaG9sZGVyXCI+PC9zcGFuPkxJVkUnLFxuICAgIH0sIHByb3BzKTtcblxuICAgIGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICdhcmlhLWxpdmUnOiAnT24nXG4gICAgfSwgYXR0cmlidXRlcyk7XG5cbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlRWwodGFnLCBwcm9wcywgYXR0cmlidXRlcyk7XG4gIH1cblxuICBjcmVhdGVDb250cm9sVGV4dEVsKGVsKSB7XG4gICAgdGhpcy5jb250cm9sVGV4dF8gPSAnU3RyZWFtIFR5cGUnO1xuICAgIHN1cGVyLmNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuY29uc3QgVmlkZW9Kc0J1dHRvbkNsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlQnV0dG9uSGxzSnMgZXh0ZW5kcyBWaWRlb0pzQnV0dG9uQ2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKSk7XG4gIH1cblxuICBjcmVhdGVFbCh0YWcsIHByb3BzID0ge30sIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIHRoaXMubm9uSWNvbkNvbnRyb2wgPSB0cnVlO1xuXG4gICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1jb250cm9sIHZqcy1zZWVrLXRvLWxpdmUtY29udHJvbCB2anMtYXQtbGl2ZS1lZGdlJyxcbiAgICAgIGlubmVySFRNTDogJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwidmpzLWljb24tcGxhY2Vob2xkZXJcIj48L3NwYW4+TElWRScsXG4gICAgfSwgcHJvcHMpO1xuXG4gICAgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2FyaWEtbGl2ZSc6ICdvZmYnXG4gICAgfSwgYXR0cmlidXRlcyk7XG5cbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlRWwodGFnLCBwcm9wcywgYXR0cmlidXRlcyk7XG4gIH1cblxuICBjcmVhdGVDb250cm9sVGV4dEVsKGVsKSB7XG4gICAgdGhpcy5jb250cm9sVGV4dF8gPSAnU3RyZWFtIFR5cGUnO1xuICAgIHN1cGVyLmNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuY29uc3QgVmlkZW9Kc1Byb2dyZXNzQ29udHJvbENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdQcm9ncmVzc0NvbnRyb2wnKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzc0NvbnRyb2xIbHNKcyBleHRlbmRzIFZpZGVvSnNQcm9ncmVzc0NvbnRyb2xDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuICB9XG59XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbmNvbnN0IFZpZGVvSnNCdXR0b25DbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjQnV0dG9uSGxzSnMgZXh0ZW5kcyBWaWRlb0pzQnV0dG9uQ2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKSk7XG4gIH1cblxuICBjcmVhdGVFbCh0YWcsIHByb3BzID0ge30sIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIHRoaXMubm9uSWNvbkNvbnRyb2wgPSB0cnVlO1xuXG4gICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1jb250cm9sIHZqcy1zZWVrLXRvLWxpdmUtY29udHJvbCcsXG4gICAgICBpbm5lckhUTUw6ICc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cInZqcy1pY29uLXBsYWNlaG9sZGVyXCI+PC9zcGFuPlJFQycsXG4gICAgfSwgcHJvcHMpO1xuXG4gICAgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2FyaWEtbGl2ZSc6ICdPbidcbiAgICB9LCBhdHRyaWJ1dGVzKTtcblxuICAgIHJldHVybiBzdXBlci5jcmVhdGVFbCh0YWcsIHByb3BzLCBhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpIHtcbiAgICB0aGlzLmNvbnRyb2xUZXh0XyA9ICdTdGFydCBSZWNvcmQnO1xuICAgIHN1cGVyLmNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcbmltcG9ydCBmb3JtYXRUaW1lIGZyb20gJy4uL3V0aWxzL2Zvcm1hdC10aW1lJztcblxuY29uc3QgVmlkZW9Kc0NvbXBvbmVudENsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNTdGF0dXNCYXJIbHNKcyBleHRlbmRzIFZpZGVvSnNDb21wb25lbnRDbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKCkge1xuICAgIHRoaXMubm9uSWNvbkNvbnRyb2wgPSB0cnVlO1xuICAgIGNvbnN0IGVsZW0gPSBzdXBlci5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWNvbnRyb2wgdmpzLWhsc2pzLWxyLXJlYy1zdGF0dXMtYmFyJyxcbiAgICAgIGlubmVySFRNTDogJzxzcGFuIGNsYXNzPVwidmpzLWhsc2pzLWxyLXJlYy1pbmRpY2F0b3JcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kLTEwXCI+ZmliZXJfbWFudWFsX3JlY29yZDwvaT5SRUM8L3NwYW4+J1xuICAgIH0pO1xuXG5cbiAgICB0aGlzLnJlY29yZGVkRWxfID0gRG9tLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLWxyLXJlY29yZGVkJyxcbiAgICAgIGlubmVyVGV4dDogJy0tOi0tOi0tJ1xuICAgIH0sIHtcbiAgICAgICdhcmlhLWxpdmUnOiAnb2ZmJyxcbiAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcbiAgICB9KTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKHRoaXMucmVjb3JkZWRFbF8pO1xuXG4gICAgZWxlbS5hcHBlbmRDaGlsZChcbiAgICAgIERvbS5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLWxyLWRpdmlkZXInLFxuICAgICAgICBpbm5lclRleHQ6ICcvJ1xuICAgICAgfSwge1xuICAgICAgICAnYXJpYS1saXZlJzogJ29mZicsXG4gICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMucmVjb3JkTGVmdEVsXyA9IERvbS5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1sci1yZWNvcmQtbGVmdCcsXG4gICAgICBpbm5lclRleHQ6ICctLTotLTotLSdcbiAgICB9LCB7XG4gICAgICAnYXJpYS1saXZlJzogJ29mZicsXG4gICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgfSk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnJlY29yZExlZnRFbF8pO1xuXG4gICAgdGhpcy51cGRhdGVSZWNvcmRUaW1lKDApO1xuICAgIHRoaXMudXBkYXRlUmVjb3JkTGVmdFRpbWUoNjAgKiA2MCk7XG4gICAgcmV0dXJuIGVsZW07XG4gIH07XG5cbiAgdXBkYXRlUmVjb3JkVGltZSh0aW1lKSB7XG4gICAgaWYodGhpcy5yZWNvcmRlZEVsXykge1xuICAgICAgdGhpcy5yZWNvcmRlZEVsXy5pbm5lclRleHQgPSBmb3JtYXRUaW1lKHRpbWUpO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGVSZWNvcmRMZWZ0VGltZSh0aW1lKSB7XG4gICAgaWYodGhpcy5yZWNvcmRMZWZ0RWxfKSB7XG4gICAgICB0aGlzLnJlY29yZExlZnRFbF8uaW5uZXJUZXh0ID0gZm9ybWF0VGltZSh0aW1lKTtcbiAgICB9XG4gIH07XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLnJlY29yZGVkRWxfID0gbnVsbDtcbiAgICB0aGlzLnJlY29yZExlZnRFbF8gPSBudWxsO1xuXG4gICAgc3VwZXIuZGlzcG9zZSgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuY29uc3QgVmlkZW9Kc0J1dHRvbkNsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9wQnV0dG9uSGxzSnMgZXh0ZW5kcyBWaWRlb0pzQnV0dG9uQ2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKSk7XG4gIH1cblxuICBjcmVhdGVFbCh0YWcsIHByb3BzID0ge30sIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIHRoaXMubm9uSWNvbkNvbnRyb2wgPSBmYWxzZTtcblxuICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICd2anMtY29udHJvbCB2anMtaGxzanMtbHItc3RvcCcsXG4gICAgICBpbm5lckhUTUw6ICc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c3RvcDwvaT4nLFxuICAgIH0sIHByb3BzKTtcblxuICAgIHJldHVybiBzdXBlci5jcmVhdGVFbCh0YWcsIHByb3BzLCBhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpIHtcbiAgICB0aGlzLmNvbnRyb2xUZXh0XyA9ICdTdG9wIFJlY29yZCc7XG4gICAgc3VwZXIuY3JlYXRlQ29udHJvbFRleHRFbChlbCk7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0ICcuL3BsdWdpbi5zY3NzJztcbmltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcbmNvbnN0IFBsdWdpbiA9IHZpZGVvanMuZ2V0UGx1Z2luKCdwbHVnaW4nKTtcbmltcG9ydCB7dmVyc2lvbiBhcyBWRVJTSU9OfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IFByb2dyZXNzQ29udHJvbEhsc0pzIGZyb20gXCIuL2NvbXBvbmVudHMvUHJvZ3Jlc3NDb250cm9sSGxzSnNcIjtcbmltcG9ydCBMaXZlQnV0dG9uSGxzSnMgZnJvbSBcIi4vY29tcG9uZW50cy9MaXZlQnV0dG9uSGxzSnNcIjtcbmltcG9ydCBDYWNoZWRCdXR0b25IbHNKcyBmcm9tIFwiLi9jb21wb25lbnRzL0NhY2hlZEJ1dHRvbkhsc0pzXCI7XG5pbXBvcnQgUmVjQnV0dG9uSGxzSnMgZnJvbSBcIi4vY29tcG9uZW50cy9SZWNCdXR0b25IbHNKc1wiO1xuaW1wb3J0IFN0b3BCdXR0b25IbHNKcyBmcm9tIFwiLi9jb21wb25lbnRzL1N0b3BCdXR0b25IbHNKc1wiO1xuaW1wb3J0IFJlY1N0YXR1c0Jhckhsc0pzIGZyb20gXCIuL2NvbXBvbmVudHMvUmVjU3RhdHVzQmFySGxzSnNcIjtcbmltcG9ydCBWaWV3Q29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVycy9WaWV3Q29udHJvbGxlclwiO1xuaW1wb3J0IFN0b3JhZ2VDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJzL1N0b3JhZ2VDb250cm9sbGVyXCI7XG5pbXBvcnQgUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJzL1JlYWx0aW1lUmVjb3JkQ29udHJvbGxlclwiO1xuXG5cbi8qKlxuICogQSBEZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAqIEB0eXBlZGVmIHtPYmplY3R9IERlZmF1bHRDb25maWdcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWMgLSBMaXN0IG9mIGludGVyZmFjZSBlbGVtZW50cyB0aGF0IHNob3VsZCBiZSBoaWRkZW4gaW4gcmVjb3JkaW5nIG1vZGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdG9yYWdlRGJOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIEluZGV4ZWREQiBkYXRhYmFzZSB1c2VkIHRvIHNhdmUgcmVjb3Jkc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IHN0b3JhZ2VQbGF5bGlzdHNOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHBsYXlsaXN0cyBzdG9yYWdlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc3RvcmFnZUZyYWdtZW50c05hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZnJhZ21lbnRzIHN0b3JhZ2VcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBtYXhSZWNvcmRNaW51dGVzIC0gTWF4aW11bSByZWNvcmQgZHVyYXRpb24gaW4gbWludXRlc1xuICogQHByb3BlcnR5IHtib29sZWFufSBhbGxvd2VkIC0gRW5hYmxlIHJlY29yZGluZyBmdW5jdGlvbmFsaXR5XG4gKiBAcHJvcGVydHkge251bGwgfCBjYWxsYmFjazxzdHJpbmcgfCBIVE1MRWxlbWVudD59IG5vdEFsbG93ZWRDb250ZW50IC0gVGhpcyBjb250ZW50IHdpbGwgYmUgZGlzcGxheWVkIGlmIHJlY29yZGluZyBub3QgYWxsb3dlZFxuICogQHByb3BlcnR5IHtvYmplY3R9IHJlYWx0aW1lUmVjb3JkIC0gUmVhbHRpbWUgcmVjb3JkaW5nIGNvbmZpZ3VyYXRpb25cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcmVhbHRpbWVSZWNvcmQuYWxsb3dlZCAtIEVuYWJsZSByZWFsdGltZSByZWNvcmRpbmcgZnVuY3Rpb25hbGl0eVxuICogQHByb3BlcnR5IHtib29sZWFufSByZWFsdGltZVJlY29yZC5oaWRlSWZOb3RBbGxvd2VkIC0gSGlkZSByZWFsdGltZSByZWNvcmRpbmcgdGFiIGlmIHJlYWx0aW1lIHJlY29yZGluZyBub3QgYWxsb3dlZFxuICogQHByb3BlcnR5IHtudWxsIHwgY2FsbGJhY2s8c3RyaW5nIHwgSFRNTEVsZW1lbnQ+fSByZWFsdGltZVJlY29yZC5tb2RhbEhlYWRlckNvbnRlbnQgLSBIZWFkZXIgY29udGVudCBvZiB0aGUgcmVhbHRpbWUgcmVjb3JkaW5nIHRhYlxuICogQHByb3BlcnR5IHtudWxsIHwgY2FsbGJhY2s8c3RyaW5nIHwgSFRNTEVsZW1lbnQ+fSByZWFsdGltZVJlY29yZC5tb2RhbEZvb3RlckNvbnRlbnQgLSBGb290ZXIgY29udGVudCBvZiB0aGUgcmVhbHRpbWUgcmVjb3JkaW5nIHRhYlxuICogQHByb3BlcnR5IHtudWxsIHwgY2FsbGJhY2s8c3RyaW5nIHwgSFRNTEVsZW1lbnQ+fSByZWFsdGltZVJlY29yZC5ub3RBbGxvd2VkQ29udGVudCAtIFRoaXMgY29udGVudCB3aWxsIGJlIGRpc3BsYXllZCBpZiByZWFsdGltZSByZWNvcmRpbmcgbm90IGFsbG93ZWRcbiAqIEBwcm9wZXJ0eSB7bnVsbCB8IGNhbGxiYWNrPFByb21pc2U8b2JqZWN0Pj59IHJlYWx0aW1lUmVjb3JkLmdldFJlY29yZE1pbWUgLSBPYmplY3QgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGluY2x1ZGVkIGluIHBsYXlsaXN0IGFuZCBjYW4gYmUgdXNlZCBsYXRlclxuICovXG5cbi8qKlxuICpcbiAqIEB0eXBlIHtEZWZhdWx0Q29uZmlnfVxuICovXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgbGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYzogWyd2anMtcGxheS1jb250cm9sJywgJ3Zqcy1xdWFsaXR5LXNlbGVjdG9yJ10sXG4gIHN0b3JhZ2VEYk5hbWU6ICd2anMtaGxzanMtbHInLFxuICBzdG9yYWdlUGxheWxpc3RzTmFtZTogJ3BsYXlsaXN0cycsXG4gIHN0b3JhZ2VGcmFnbWVudHNOYW1lOiAnZnJhZ21lbnRzJyxcbiAgbWF4UmVjb3JkTWludXRlczogNjAsXG4gIGFsbG93ZWQ6IHRydWUsXG4gIG5vdEFsbG93ZWRDb250ZW50OiBudWxsLFxuICByZWFsdGltZVJlY29yZDoge1xuICAgIGFsbG93ZWQ6IHRydWUsXG4gICAgbW9kYWxIZWFkZXJDb250ZW50OiBudWxsLFxuICAgIG1vZGFsRm9vdGVyQ29udGVudDogbnVsbCxcbiAgICBub3RBbGxvd2VkQ29udGVudDogbnVsbCxcbiAgICBnZXRSZWNvcmRNaW1lOiBudWxsLFxuICB9XG59O1xuXG5jbGFzcyBIbHNKU0xpdmVSZWNvcmRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gICAgdGhpcy5vcHRpb25zID0gdmlkZW9qcy5tZXJnZU9wdGlvbnMoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMuc3RvcmFnZUNvbnRyb2xsZXIgPSBuZXcgU3RvcmFnZUNvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy52aWV3Q29udHJvbGxlciA9IG5ldyBWaWV3Q29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLnJlYWx0aW1lUmVjb3JkQ29udHJvbGxlciA9IG5ldyBSZWFsdGltZVJlY29yZENvbnRyb2xsZXIodGhpcyk7XG5cbiAgICBwbGF5ZXIub24oJ3BsYXlpbmcnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgaWYodGhpcy5zdGF0ZS5pbml0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7aW5pdDogdHJ1ZX0pO1xuICAgIGlmKHRoaXMuY2hlY2tSZXF1aXJlbWVudHMoKSkge1xuICAgICAgdGhpcy5wbGF5ZXIuYWRkQ2xhc3MoJ3Zqcy1obHMtbGl2ZS1yZWNvcmQnKTtcbiAgICAgIHRoaXMucGxheWVyLm9uKCdwYXVzZScsIHRoaXMudmlld0NvbnRyb2xsZXIuYWN0aXZhdGVQcm9ncmVzc01vZGUpO1xuICAgICAgdGhpcy52aWV3Q29udHJvbGxlci5pbml0KCk7XG4gICAgICB0aGlzLnN0b3JhZ2VDb250cm9sbGVyLmluaXQoKTtcbiAgICAgIHRoaXMucmVhbHRpbWVSZWNvcmRDb250cm9sbGVyLmluaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlkZW9qcy5sb2cud2FybignSGxzSlNMaXZlUmVjb3JkUGx1Z2luOiBjYW5ub3QgYmUgaW5pdGlhbGl6ZWQgYmVjYXVzZSBvbmUgb3IgbW9yZSBvZiB0aGUgcmVxdWlyZW1lbnRzIGFyZSBub3QgbWV0LicpO1xuICAgIH1cbiAgfTtcblxuICBjaGVja1JlcXVpcmVtZW50cyA9ICgpID0+IHtcbiAgICBpZighdGhpcy5nZXRIbHNKcygpKSB7XG4gICAgICB2aWRlb2pzLmxvZy53YXJuKCdIbHNKU0xpdmVSZWNvcmRQbHVnaW46IEhMUy5KUyBwbHVnaW4gbm90IGZvdW5kLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLnN0b3JhZ2VDb250cm9sbGVyLmNoZWNrUmVxdWlyZW1lbnRzKCkpIHtcbiAgICAgIHZpZGVvanMubG9nLndhcm4oJ0hsc0pTTGl2ZVJlY29yZFBsdWdpbjogVGhpcyBicm93c2VyIGRvZXNuXFwndCBzdXBwb3J0IEluZGV4ZWREQi4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgZ2V0SGxzSnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyLnRlY2goeyBJV2lsbFVzZVRoaXNJblBsdWdpbjogdHJ1ZSB9KS5zb3VyY2VIYW5kbGVyXy5obHM7XG4gIH07XG5cbiAgc3RhcnRSZWFsdGltZVJlY29yZChsZXZlbElkKSB7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlY29yZEluUHJvY2VzczogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5nZXRIbHNKcygpLmN1cnJlbnRMZXZlbCA9IGxldmVsSWQgKiAxO1xuICAgIHRoaXMudmlld0NvbnRyb2xsZXIuYWN0aXZhdGVSZWNvcmRNb2RlKCk7XG5cbiAgICB0aGlzLnJlYWx0aW1lUmVjb3JkQ29udHJvbGxlci5zdGFydFJlY29yZCgpO1xuICB9XG5cbiAgc3RvcFJlYWx0aW1lUmVjb3JkID0gKCkgPT4ge1xuICAgIHRoaXMucmVhbHRpbWVSZWNvcmRDb250cm9sbGVyLnN0b3BSZWNvcmQoKTtcbiAgICB0aGlzLnZpZXdDb250cm9sbGVyLmFjdGl2ZUxpdmVNb2RlKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICByZWNvcmRJblByb2Nlc3M6IGZhbHNlXG4gICAgfSk7XG4gICAgdGhpcy5nZXRIbHNKcygpLmN1cnJlbnRMZXZlbCA9IC0xO1xuICB9O1xuXG4gIGhhbmRsZVN0YXRlQ2hhbmdlZChlKSB7XG5cbiAgfVxufVxuXG5IbHNKU0xpdmVSZWNvcmRQbHVnaW4uVkVSU0lPTiA9IFZFUlNJT047XG5cbkhsc0pTTGl2ZVJlY29yZFBsdWdpbi5kZWZhdWx0U3RhdGUgPSB7XG4gIHJlY29yZEFsbG93ZWQ6IHRydWUsXG4gIHJlY29yZEluUHJvY2VzczogZmFsc2UsXG4gIGluaXQ6IGZhbHNlXG59O1xuXG52aWRlb2pzLnJlZ2lzdGVyUGx1Z2luKCdobHNKU0xpdmVSZWNvcmQnLCBIbHNKU0xpdmVSZWNvcmRQbHVnaW4pO1xudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnUHJvZ3Jlc3NDb250cm9sSGxzSnMnLCBQcm9ncmVzc0NvbnRyb2xIbHNKcyk7XG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdMaXZlQnV0dG9uSGxzSnMnLCBMaXZlQnV0dG9uSGxzSnMpO1xudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnQ2FjaGVkQnV0dG9uSGxzSnMnLCBDYWNoZWRCdXR0b25IbHNKcyk7XG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdSZWNCdXR0b25IbHNKcycsIFJlY0J1dHRvbkhsc0pzKTtcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ1N0b3BCdXR0b25IbHNKcycsIFN0b3BCdXR0b25IbHNKcyk7XG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdSZWNTdGF0dXNCYXJIbHNKcycsIFJlY1N0YXR1c0Jhckhsc0pzKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIEZJWE1FOiBuZWVkIHJlcGxhY2UgY29sb3IgZnVuY3Rpb25zIGh0dHBzOi8vc2Fzcy1sYW5nLmNvbS9kb2N1bWVudGF0aW9uL21vZHVsZXMjb3RoZXJfY29sb3JfZnVuY3Rpb25zICovXFxuLyogTWF0ZXJpYWwgaWNvbnMgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zL3Y0OC9mbFVoUnE2dHpaY2xRRUotVmRnLUl1aWFEc05jLndvZmYyKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7IH1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIC13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgfVxcblxcbi8qIFJ1bGVzIGZvciBzaXppbmcgdGhlIGljb24uICovXFxuLm1hdGVyaWFsLWljb25zLm1kLTgge1xcbiAgZm9udC1zaXplOiA5cHg7IH1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMubWQtMTAge1xcbiAgZm9udC1zaXplOiAxMHB4OyB9XFxuXFxuLm1hdGVyaWFsLWljb25zLm1kLTEyIHtcXG4gIGZvbnQtc2l6ZTogMTJweDsgfVxcblxcbi5tYXRlcmlhbC1pY29ucy5tZC0xOCB7XFxuICBmb250LXNpemU6IDE4cHg7IH1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMubWQtMjQge1xcbiAgZm9udC1zaXplOiAyNHB4OyB9XFxuXFxuLm1hdGVyaWFsLWljb25zLm1kLTM2IHtcXG4gIGZvbnQtc2l6ZTogMzZweDsgfVxcblxcbi5tYXRlcmlhbC1pY29ucy5tZC00OCB7XFxuICBmb250LXNpemU6IDQ4cHg7IH1cXG5cXG4vKiBSdWxlcyBmb3IgdXNpbmcgaWNvbnMgYXMgYmxhY2sgb24gYSBsaWdodCBiYWNrZ3JvdW5kLiAqL1xcbi5tYXRlcmlhbC1pY29ucy5tZC1kYXJrIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XFxuXFxuLm1hdGVyaWFsLWljb25zLm1kLWRhcmsubWQtaW5hY3RpdmUge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7IH1cXG5cXG4vKiBSdWxlcyBmb3IgdXNpbmcgaWNvbnMgYXMgd2hpdGUgb24gYSBkYXJrIGJhY2tncm91bmQuICovXFxuLm1hdGVyaWFsLWljb25zLm1kLWxpZ2h0IHtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5tYXRlcmlhbC1pY29ucy5tZC1saWdodC5tZC1pbmFjdGl2ZSB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyB9XFxuXFxuLyogRW5kIG1hdGVyaWFsIGljb25zICovXFxuOnJvb3Qge1xcbiAgLS1tYWluLWNvbG9yOiByZWQ7XFxuICAtLWJhc2UtZm9udC1zaXplOiA5O1xcbiAgLS1mb250LXNpemU6IDc7IH1cXG5cXG4udmlkZW8tanMgLnZqcy1obHNqcy1mb3JtLWdyb3VwIHtcXG4gIHBhZGRpbmc6IDVweCAwOyB9XFxuICAudmlkZW8tanMgLnZqcy1obHNqcy1mb3JtLWdyb3VwIC52anMtaGxzanMtZm9ybS1sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cXG4gIC52aWRlby1qcyAudmpzLWhsc2pzLWZvcm0tZ3JvdXAgLnZqcy1obHNqcy1mb3JtLWlucHV0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLnZpZGVvLWpzIC52anMtaGxzanMtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXI6IDAuMDY2NjZlbSBzb2xpZCAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCMzMzRjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDUxLCA2MywgMC43KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7IH1cXG4gIC52aWRlby1qcyAudmpzLWhsc2pzLWJ1dHRvbjpkaXNhYmxlZCwgLnZpZGVvLWpzIC52anMtaGxzanMtYnV0dG9uLmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC42OyB9XFxuXFxuLnZpZGVvLWpzIC52anMtaGxzanMtdmVydGljYWwtdGFicyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpOyB9XFxuXFxuLnZpZGVvLWpzIC52anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYge1xcbiAgd2lkdGg6IDE0MHB4O1xcbiAgZmxleDogMTQwcHggMDtcXG4gIGZsZXgtc2hyaW5rOiAwOyB9XFxuXFxuLnZpZGVvLWpzIC52anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYtZWxlbSB7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG4gIC52aWRlby1qcyAudmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2LWVsZW0uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzsgfVxcbiAgLnZpZGVvLWpzIC52anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYtZWxlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7IH1cXG5cXG4udmlkZW8tanMgLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWJvZHkge1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4OyB9XFxuXFxuLnZpZGVvLWpzIC52anMtaGxzanMtdmVydGljYWwtdGFicy1lbGVtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4OyB9XFxuICAudmlkZW8tanMgLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWVsZW0uYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4udmlkZW8tanMgLnZqcy1obHNqcy1sci1yZWMtc2V0dGluZ3MudmpzLW1vZGFsLWRpYWxvZyAudmpzLW1vZGFsLWRpYWxvZy1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4udmlkZW8tanMgLnZqcy1obHNqcy1sci1yZWMtc2V0dGluZ3MudmpzLW1vZGFsLWRpYWxvZyAudmpzLWhsc2pzLXN0YXJ0LXJlY29yZCB7XFxuICBwYWRkaW5nOiA1cHggMTBweDsgfVxcblxcbi52aWRlby1qcy52anMtaGxzanMtcmVjb3JkLXN0YXJ0ZWQgLnZqcy10ZWNoIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxuICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi52aWRlby1qcyAudmpzLWhsc2pzLWxyLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4udmlkZW8tanMudmpzLWhsc2pzLWxpdmUtcmVjb3JkIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAudmlkZW8tanMudmpzLWhsc2pzLWxpdmUtcmVjb3JkLnZqcy11c2VyLWluYWN0aXZlIC52anMtY29udHJvbC1iYXIge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuXFxuLnZpZGVvLWpzIC52anMtaGxzanMtbHItc3RvcCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4udmlkZW8tanMgLnZqcy1obHNqcy1jb250cm9scy1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IGF1dG87XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7IH1cXG4gIC52aWRlby1qcyAudmpzLWhsc2pzLWNvbnRyb2xzLWhvbGRlciAudmpzLWxpdmUtZGlzcGxheSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLnZpZGVvLWpzIC52anMtaGxzanMtY29udHJvbHMtaG9sZGVyIC52anMtY29udHJvbC52anMtYXQtbGl2ZS1lZGdlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAudmlkZW8tanMgLnZqcy1obHNqcy1jb250cm9scy1ob2xkZXIgLnZqcy1wcm9ncmVzcy1jb250cm9sIC52anMtbG9hZC1wcm9ncmVzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiODM3MDA7IH1cXG4gICAgLnZpZGVvLWpzIC52anMtaGxzanMtY29udHJvbHMtaG9sZGVyIC52anMtcHJvZ3Jlc3MtY29udHJvbCAudmpzLWxvYWQtcHJvZ3Jlc3MgZGl2IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAxNzcsIDEwNiwgMC45NSk7IH1cXG4gIC52aWRlby1qcyAudmpzLWhsc2pzLWNvbnRyb2xzLWhvbGRlciAudmpzLXByb2dyZXNzLWNvbnRyb2w6aG92ZXIgLnZqcy1sb2FkLXByb2dyZXNzIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDhweDsgfVxcbiAgLnZpZGVvLWpzIC52anMtaGxzanMtY29udHJvbHMtaG9sZGVyIC52anMtcHJvZ3Jlc3MtY29udHJvbDpob3ZlciAudmpzLW1vdXNlLWRpc3BsYXkge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4OyB9XFxuXFxuLnZpZGVvLWpzIC52anMtaGxzanMtbHItcmVjLXN0YXR1cy1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAudmlkZW8tanMgLnZqcy1obHNqcy1sci1yZWMtc3RhdHVzLWJhciAudmpzLWhsc2pzLWxyLXJlYy1pbmRpY2F0b3Ige1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDFweDsgfVxcbiAgLnZpZGVvLWpzIC52anMtaGxzanMtbHItcmVjLXN0YXR1cy1iYXIgLnZqcy1obHNqcy1sci1kaXZpZGVyIHtcXG4gICAgcGFkZGluZzogMCAycHg7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJEOlxcXFxwcm9qZWN0c1xcXFxhbHRlbmFfc3RyZWFtXFxcXHZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvc3JjXFxcXHBsdWdpbi5zY3NzXCIsXCJEOlxcXFxwcm9qZWN0c1xcXFxhbHRlbmFfc3RyZWFtXFxcXHZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvc3JjXFxcXHN0eWxlc1xcXFxmb3Jtcy5zY3NzXCIsXCJEOlxcXFxwcm9qZWN0c1xcXFxhbHRlbmFfc3RyZWFtXFxcXHZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvc3JjXFxcXHN0eWxlc1xcXFxidXR0b25zLnNjc3NcIixcIkQ6XFxcXHByb2plY3RzXFxcXGFsdGVuYV9zdHJlYW1cXFxcdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC9zcmNcXFxcc3R5bGVzXFxcXHZlcnRpY2FsLXRhYnMuc2Nzc1wiLFwiRDpcXFxccHJvamVjdHNcXFxcYWx0ZW5hX3N0cmVhbVxcXFx2aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3NyY1xcXFxzdHlsZXNcXFxcbW9kYWxcXFxccmVjLXNldHRpbmdzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMEdBQUE7QUFDQSxtQkFBQTtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMEdBQTBHLEVBQUE7O0FBRzVHO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsbUNBQW1DLEVBQUE7O0FBR3JDLCtCQUFBO0FBQ0E7RUFBdUIsY0FBYyxFQUFBOztBQUNyQztFQUF3QixlQUFlLEVBQUE7O0FBQ3ZDO0VBQXdCLGVBQWUsRUFBQTs7QUFDdkM7RUFBd0IsZUFBZSxFQUFBOztBQUN2QztFQUF3QixlQUFlLEVBQUE7O0FBQ3ZDO0VBQXdCLGVBQWUsRUFBQTs7QUFDdkM7RUFBd0IsZUFBZSxFQUFBOztBQUV2QywwREFBQTtBQUNBO0VBQTBCLDBCQUEwQixFQUFBOztBQUNwRDtFQUFzQywwQkFBMEIsRUFBQTs7QUFFaEUseURBQUE7QUFDQTtFQUEyQixZQUE2QixFQUFBOztBQUN4RDtFQUF1QywrQkFBK0IsRUFBQTs7QUFFdEUsdUJBQUE7QUFFQTtFQUNFLGlCQUFhO0VBQ2IsbUJBQWlCO0VBQ2pCLGNBQVksRUFBQTs7QUFHZDtFQ2pERSxjQUFjLEVBQUE7RURpRGhCO0lDL0NJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUE7RUQ2Q3ZCO0lDekNJLHFCQUFxQixFQUFBOztBRHlDekI7RUVqREUsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtFQUNWLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsdUNBQXVDO0VBQ3ZDLG9CQUFvQjtFQUNwQixvQkFBb0IsRUFBQTtFRjZCdEI7SUUxQkksWUFBWSxFQUFBOztBRjBCaEI7RUdqREUsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFHaEIsb0NBQW9DLEVBQUE7O0FINEN0QztFR3hDRSxZQUFZO0VBQ1osYUFBZTtFQUNmLGNBQWMsRUFBQTs7QUhzQ2hCO0VHbENFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCLEVBQUE7RUhnQzNCO0lHOUJJLHNCQUFzQixFQUFBO0VIOEIxQjtJRzFCSSx5QkFBNEIsRUFBQTs7QUgwQmhDO0VHckJFLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FIb0JmO0VHaEJFLGFBQWE7RUFDYixhQUFhLEVBQUE7RUhlZjtJR2JJLGNBQWMsRUFBQTs7QUhhbEI7RUk5Q0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUo0Q3ZCO0VJeENJLGlCQUFpQixFQUFBOztBSndDckI7RUFRTSwrQkFBK0I7RUFDL0IsNkJBQTZCLEVBQUE7O0FBVG5DO0VBY0ksd0JBQXdCLEVBQUE7O0FBZDVCO0VBa0JJLGNBQWMsRUFBQTtFQWxCbEI7SUFzQlEsVUFBVSxFQUFBOztBQXRCbEI7RUE4QkksZUFBZSxFQUFBOztBQTlCbkI7RUFrQ0ksYUFBYTtFQUNiLFVBQVU7RUFDViwyQkFBMkIsRUFBQTtFQXBDL0I7SUF1Q00sZUFBZSxFQUFBO0VBdkNyQjtJQTRDUSxlQUFlLEVBQUE7RUE1Q3ZCO0lBa0RRLHlCQUFpQyxFQUFBO0lBbER6QztNQW9EVSwwQ0FBMEMsRUFBQTtFQXBEcEQ7SUEwRFUsbUJBQW1CLEVBQUE7RUExRDdCO0lBNkRVLG1CQUFtQixFQUFBOztBQTdEN0I7RUFvRUksYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUJBQWlCO1VBQWpCLGlCQUFpQixFQUFBO0VBdkVyQjtJQTJFTSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUEvRXRCO0lBcUZNLGNBQWMsRUFBQVwiLFwiZmlsZVwiOlwicGx1Z2luLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRklYTUU6IG5lZWQgcmVwbGFjZSBjb2xvciBmdW5jdGlvbnMgaHR0cHM6Ly9zYXNzLWxhbmcuY29tL2RvY3VtZW50YXRpb24vbW9kdWxlcyNvdGhlcl9jb2xvcl9mdW5jdGlvbnMgKi9cXG4vKiBNYXRlcmlhbCBpY29ucyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnMvdjQ4L2ZsVWhScTZ0elpjbFFFSi1WZGctSXVpYURzTmMud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zIHtcXG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxuICAtd2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbi8qIFJ1bGVzIGZvciBzaXppbmcgdGhlIGljb24uICovXFxuLm1hdGVyaWFsLWljb25zLm1kLTggeyBmb250LXNpemU6IDlweDsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC0xMCB7IGZvbnQtc2l6ZTogMTBweDsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC0xMiB7IGZvbnQtc2l6ZTogMTJweDsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC0xOCB7IGZvbnQtc2l6ZTogMThweDsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC0yNCB7IGZvbnQtc2l6ZTogMjRweDsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC0zNiB7IGZvbnQtc2l6ZTogMzZweDsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC00OCB7IGZvbnQtc2l6ZTogNDhweDsgfVxcblxcbi8qIFJ1bGVzIGZvciB1c2luZyBpY29ucyBhcyBibGFjayBvbiBhIGxpZ2h0IGJhY2tncm91bmQuICovXFxuLm1hdGVyaWFsLWljb25zLm1kLWRhcmsgeyBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC1kYXJrLm1kLWluYWN0aXZlIHsgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7IH1cXG5cXG4vKiBSdWxlcyBmb3IgdXNpbmcgaWNvbnMgYXMgd2hpdGUgb24gYSBkYXJrIGJhY2tncm91bmQuICovXFxuLm1hdGVyaWFsLWljb25zLm1kLWxpZ2h0IHsgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7IH1cXG4ubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQubWQtaW5hY3RpdmUgeyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyB9XFxuXFxuLyogRW5kIG1hdGVyaWFsIGljb25zICovXFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWNvbG9yOiByZWQ7XFxuICAtLWJhc2UtZm9udC1zaXplOiA5O1xcbiAgLS1mb250LXNpemU6IDc7XFxufVxcblxcbi52aWRlby1qcyB7XFxuXFxuICBAaW1wb3J0IFxcXCJzdHlsZXMvZm9ybXNcXFwiO1xcbiAgQGltcG9ydCBcXFwic3R5bGVzL2J1dHRvbnNcXFwiO1xcbiAgQGltcG9ydCBcXFwic3R5bGVzL21vZGFsL3JlYy1zZXR0aW5nc1xcXCI7XFxuXFxuICAmLnZqcy1obHNqcy1yZWNvcmQtc3RhcnRlZCB7XFxuICAgIC52anMtdGVjaCB7XFxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnZqcy1obHNqcy1sci1oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAmLnZqcy1obHNqcy1saXZlLXJlY29yZCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgICAmLnZqcy11c2VyLWluYWN0aXZlIHtcXG4gICAgICAudmpzLWNvbnRyb2wtYmFyIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuXFxuXFxuICAudmpzLWhsc2pzLWxyLXN0b3Age1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAudmpzLWhsc2pzLWNvbnRyb2xzLWhvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG5cXG4gICAgLnZqcy1saXZlLWRpc3BsYXkge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAudmpzLWNvbnRyb2wge1xcbiAgICAgICYudmpzLWF0LWxpdmUtZWRnZSB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC52anMtcHJvZ3Jlc3MtY29udHJvbCB7XFxuICAgICAgLnZqcy1sb2FkLXByb2dyZXNzIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODQsIDU1LCAwKTtcXG4gICAgICAgIGRpdiB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDE3NywgMTA2LCAwLjk1KTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICAudmpzLWxvYWQtcHJvZ3Jlc3Mge1xcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLnZqcy1tb3VzZS1kaXNwbGF5IHtcXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC52anMtaGxzanMtbHItcmVjLXN0YXR1cy1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuXFxuICAgIC52anMtaGxzanMtbHItcmVjLWluZGljYXRvciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBjb2xvcjogcmVkO1xcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gICAgfVxcbiAgICAudmpzLWhsc2pzLWxyLXJlY29yZGVkIHtcXG5cXG4gICAgfVxcbiAgICAudmpzLWhsc2pzLWxyLWRpdmlkZXIge1xcbiAgICAgIHBhZGRpbmc6IDAgMnB4O1xcbiAgICB9XFxuICAgIC52anMtaGxzanMtbHItcmVjb3JkLWxlZnQge1xcblxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLnZqcy1obHNqcy1mb3JtLWdyb3VwIHtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgLnZqcy1obHNqcy1mb3JtLWxhYmVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIH1cXG5cXG4gIC52anMtaGxzanMtZm9ybS1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG59XFxuXCIsXCIudmpzLWhsc2pzLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyOiAwLjA2NjY2ZW0gc29saWQgI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQjMzM0Y7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA1MSwgNjMsIDAuNyk7XFxuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcblxcbiAgJjpkaXNhYmxlZCwgJi5kaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gIH1cXG59XFxuXCIsXCIudmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG5cXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MSwgNDEsIDQxLCAwLjgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4udmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2IHtcXG4gIHdpZHRoOiAxNDBweDtcXG4gIGZsZXg6IDE0MHB4IDAgMDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4udmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2LWVsZW0ge1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgJi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgfVxcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgLSAxMCU7XFxuICB9XFxufVxcblxcbi52anMtaGxzanMtdmVydGljYWwtdGFicy1ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWVsZW0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICAmLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgXFxcIi4uL3ZlcnRpY2FsLXRhYnNcXFwiO1xcblxcbi52anMtaGxzanMtbHItcmVjLXNldHRpbmdzLnZqcy1tb2RhbC1kaWFsb2cge1xcbiAgLnZqcy1tb2RhbC1kaWFsb2ctY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnZqcy1obHNqcy1zdGFydC1yZWNvcmQge1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIH1cXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiY29uc3Qgbm9ybWFsaXplID0gKG51bWJlcikgPT4gKG51bWJlciA8IDEwID8gJzAnICsgbnVtYmVyIDogbnVtYmVyKTtcblxuZXhwb3J0IGNvbnN0IHRvRm9ybWF0WW1kSGlzID0gKGRhdGUsIHNlcGFyYXRvcikgPT4ge1xuICByZXR1cm4gW1xuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBub3JtYWxpemUoZGF0ZS5nZXRNb250aCgpICsgMSksXG4gICAgbm9ybWFsaXplKGRhdGUuZ2V0RGF0ZSgpKSxcbiAgICBub3JtYWxpemUoZGF0ZS5nZXRIb3VycygpKSxcbiAgICBub3JtYWxpemUoZGF0ZS5nZXRNaW51dGVzKCkpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldFNlY29uZHMoKSksXG4gIF0uam9pbihzZXBhcmF0b3IpO1xufTtcblxuZXhwb3J0IGNvbnN0IG5vd0luRm9ybWF0WW1kSGlzID0gKHNlcGFyYXRvciA9ICctJykgPT4ge1xuICByZXR1cm4gdG9Gb3JtYXRZbWRIaXMobmV3IERhdGUoKSwgc2VwYXJhdG9yKTtcbn07XG4iLCIvKipcbiAqIEBmaWxlIGZvcm1hdC10aW1lLmpzXG4gKiBAbW9kdWxlIGZvcm1hdC10aW1lXG4gKi9cblxuLyoqXG4gKiBGb3JtYXQgc2Vjb25kcyBhcyBhIHRpbWUgc3RyaW5nLCBIOk1NOlNTIG9yIE06U1MuIFN1cHBseWluZyBhIGd1aWRlIChpblxuICogc2Vjb25kcykgd2lsbCBmb3JjZSBhIG51bWJlciBvZiBsZWFkaW5nIHplcm9zIHRvIGNvdmVyIHRoZSBsZW5ndGggb2YgdGhlXG4gKiBndWlkZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7bnVtYmVyfSBzZWNvbmRzXG4gKiAgICAgICAgIE51bWJlciBvZiBzZWNvbmRzIHRvIGJlIHR1cm5lZCBpbnRvIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBndWlkZVxuICogICAgICAgICBOdW1iZXIgKGluIHNlY29uZHMpIHRvIG1vZGVsIHRoZSBzdHJpbmcgYWZ0ZXJcbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiAgICAgICAgIFRpbWUgZm9ybWF0dGVkIGFzIEg6TU06U1Mgb3IgTTpTU1xuICovXG5jb25zdCBkZWZhdWx0SW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbihzZWNvbmRzLCBndWlkZSkge1xuICBzZWNvbmRzID0gc2Vjb25kcyA8IDAgPyAwIDogc2Vjb25kcztcbiAgbGV0IHMgPSBNYXRoLmZsb29yKHNlY29uZHMgJSA2MCk7XG4gIGxldCBtID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjAgJSA2MCk7XG4gIGxldCBoID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG4gIGNvbnN0IGdtID0gTWF0aC5mbG9vcihndWlkZSAvIDYwICUgNjApO1xuICBjb25zdCBnaCA9IE1hdGguZmxvb3IoZ3VpZGUgLyAzNjAwKTtcblxuICAvLyBoYW5kbGUgaW52YWxpZCB0aW1lc1xuICBpZiAoaXNOYU4oc2Vjb25kcykgfHwgc2Vjb25kcyA9PT0gSW5maW5pdHkpIHtcbiAgICAvLyAnLScgaXMgZmFsc2UgZm9yIGFsbCByZWxhdGlvbmFsIG9wZXJhdG9ycyAoZS5nLiA8LCA+PSkgc28gdGhpcyBzZXR0aW5nXG4gICAgLy8gd2lsbCBhZGQgdGhlIG1pbmltdW0gbnVtYmVyIG9mIGZpZWxkcyBzcGVjaWZpZWQgYnkgdGhlIGd1aWRlXG4gICAgaCA9IG0gPSBzID0gJy0nO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBzaG93IGhvdXJzXG4gIGggPSAoaCA+IDAgfHwgZ2ggPiAwKSA/IGggKyAnOicgOiAnJztcblxuICAvLyBJZiBob3VycyBhcmUgc2hvd2luZywgd2UgbWF5IG5lZWQgdG8gYWRkIGEgbGVhZGluZyB6ZXJvLlxuICAvLyBBbHdheXMgc2hvdyBhdCBsZWFzdCBvbmUgZGlnaXQgb2YgbWludXRlcy5cbiAgbSA9ICgoKGggfHwgZ20gPj0gMTApICYmIG0gPCAxMCkgPyAnMCcgKyBtIDogbSkgKyAnOic7XG5cbiAgLy8gQ2hlY2sgaWYgbGVhZGluZyB6ZXJvIGlzIG5lZWQgZm9yIHNlY29uZHNcbiAgcyA9IChzIDwgMTApID8gJzAnICsgcyA6IHM7XG5cbiAgcmV0dXJuIGggKyBtICsgcztcbn07XG5cbi8vIEludGVybmFsIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24uXG5sZXQgaW1wbGVtZW50YXRpb24gPSBkZWZhdWx0SW1wbGVtZW50YXRpb247XG5cbi8qKlxuICogUmVwbGFjZXMgdGhlIGRlZmF1bHQgZm9ybWF0VGltZSBpbXBsZW1lbnRhdGlvbiB3aXRoIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbUltcGxlbWVudGF0aW9uXG4gKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIHVzZWQgaW4gcGxhY2Ugb2YgdGhlIGRlZmF1bHQgZm9ybWF0VGltZVxuICogICAgICAgIGltcGxlbWVudGF0aW9uLiBXaWxsIHJlY2VpdmUgdGhlIGN1cnJlbnQgdGltZSBpbiBzZWNvbmRzIGFuZCB0aGVcbiAqICAgICAgICBndWlkZSAoaW4gc2Vjb25kcykgYXMgYXJndW1lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0Rm9ybWF0VGltZShjdXN0b21JbXBsZW1lbnRhdGlvbikge1xuICBpbXBsZW1lbnRhdGlvbiA9IGN1c3RvbUltcGxlbWVudGF0aW9uO1xufVxuXG4vKipcbiAqIFJlc2V0cyBmb3JtYXRUaW1lIHRvIHRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGb3JtYXRUaW1lKCkge1xuICBpbXBsZW1lbnRhdGlvbiA9IGRlZmF1bHRJbXBsZW1lbnRhdGlvbjtcbn1cblxuLyoqXG4gKiBEZWxlZ2F0ZXMgdG8gZWl0aGVyIHRoZSBkZWZhdWx0IHRpbWUgZm9ybWF0dGluZyBmdW5jdGlvbiBvciBhIGN1c3RvbVxuICogZnVuY3Rpb24gc3VwcGxpZWQgdmlhIGBzZXRGb3JtYXRUaW1lYC5cbiAqXG4gKiBGb3JtYXRzIHNlY29uZHMgYXMgYSB0aW1lIHN0cmluZyAoSDpNTTpTUyBvciBNOlNTKS4gU3VwcGx5aW5nIGFcbiAqIGd1aWRlIChpbiBzZWNvbmRzKSB3aWxsIGZvcmNlIGEgbnVtYmVyIG9mIGxlYWRpbmcgemVyb3MgdG8gY292ZXIgdGhlXG4gKiBsZW5ndGggb2YgdGhlIGd1aWRlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBleGFtcGxlICBmb3JtYXRUaW1lKDEyNSwgNjAwKSA9PT0gXCIwMjowNVwiXG4gKiBAcGFyYW0gICAge251bWJlcn0gc2Vjb25kc1xuICogICAgICAgICAgIE51bWJlciBvZiBzZWNvbmRzIHRvIGJlIHR1cm5lZCBpbnRvIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtICAgIHtudW1iZXJ9IGd1aWRlXG4gKiAgICAgICAgICAgTnVtYmVyIChpbiBzZWNvbmRzKSB0byBtb2RlbCB0aGUgc3RyaW5nIGFmdGVyXG4gKlxuICogQHJldHVybiAgIHtzdHJpbmd9XG4gKiAgICAgICAgICAgVGltZSBmb3JtYXR0ZWQgYXMgSDpNTTpTUyBvciBNOlNTXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdFRpbWUoc2Vjb25kcywgZ3VpZGUgPSBzZWNvbmRzKSB7XG4gIHJldHVybiBpbXBsZW1lbnRhdGlvbihzZWNvbmRzLCBndWlkZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFRpbWU7XG4iLCJleHBvcnQgY29uc3QgZmFjZVVVSUQgPSAocHJlZml4KSA9PiB7XG4gIHJldHVybiBwcmVmaXggKyAnLScgKyBEYXRlLm5vdygpXG59O1xuIiwiY29uc3QgeyBwZXJmb3JtYW5jZSwgWE1MSHR0cFJlcXVlc3QgfSA9IHdpbmRvdztcblxuY2xhc3MgWGhyTG9hZGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIGlmIChjb25maWcgJiYgY29uZmlnLnhoclNldHVwKSB7XG4gICAgICB0aGlzLnhoclNldHVwID0gY29uZmlnLnhoclNldHVwO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuYWJvcnQoKTtcbiAgICB0aGlzLmxvYWRlciA9IG51bGw7XG4gIH1cblxuICBhYm9ydCAoKSB7XG4gICAgbGV0IGxvYWRlciA9IHRoaXMubG9hZGVyO1xuICAgIGlmIChsb2FkZXIgJiYgbG9hZGVyLnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgIHRoaXMuc3RhdHMuYWJvcnRlZCA9IHRydWU7XG4gICAgICBsb2FkZXIuYWJvcnQoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVxdWVzdFRpbWVvdXQpO1xuICAgIHRoaXMucmVxdWVzdFRpbWVvdXQgPSBudWxsO1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXRyeVRpbWVvdXQpO1xuICAgIHRoaXMucmV0cnlUaW1lb3V0ID0gbnVsbDtcbiAgfVxuXG4gIGxvYWQgKGNvbnRleHQsIGNvbmZpZywgY2FsbGJhY2tzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICB0aGlzLnN0YXRzID0geyB0cmVxdWVzdDogcGVyZm9ybWFuY2Uubm93KCksIHJldHJ5OiAwIH07XG4gICAgdGhpcy5yZXRyeURlbGF5ID0gY29uZmlnLnJldHJ5RGVsYXk7XG4gICAgdGhpcy5sb2FkSW50ZXJuYWwoKTtcbiAgfVxuXG4gIGxvYWRJbnRlcm5hbCAoKSB7XG4gICAgbGV0IHhociwgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICB4aHIgPSB0aGlzLmxvYWRlciA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgbGV0IHN0YXRzID0gdGhpcy5zdGF0cztcbiAgICBzdGF0cy50Zmlyc3QgPSAwO1xuICAgIHN0YXRzLmxvYWRlZCA9IDA7XG4gICAgY29uc3QgeGhyU2V0dXAgPSB0aGlzLnhoclNldHVwO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh4aHJTZXR1cCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHhoclNldHVwKHhociwgY29udGV4dC51cmwpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gZml4IHhoclNldHVwOiAoeGhyLCB1cmwpID0+IHt4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtTGFuZ3VhZ2VcIiwgXCJ0ZXN0XCIpO31cbiAgICAgICAgICAvLyBub3Qgd29ya2luZywgYXMgeGhyLnNldFJlcXVlc3RIZWFkZXIgZXhwZWN0cyB4aHIucmVhZHlTdGF0ZSA9PT0gT1BFTlxuICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBjb250ZXh0LnVybCwgdHJ1ZSk7XG4gICAgICAgICAgeGhyU2V0dXAoeGhyLCBjb250ZXh0LnVybCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgheGhyLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGNvbnRleHQudXJsLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJRTExIHRocm93cyBhbiBleGNlcHRpb24gb24geGhyLm9wZW4gaWYgYXR0ZW1wdGluZyB0byBhY2Nlc3MgYW4gSFRUUCByZXNvdXJjZSBvdmVyIEhUVFBTXG4gICAgICB0aGlzLmNhbGxiYWNrcy5vbkVycm9yKHsgY29kZTogeGhyLnN0YXR1cywgdGV4dDogZS5tZXNzYWdlIH0sIGNvbnRleHQsIHhocik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQucmFuZ2VFbmQpIHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdSYW5nZScsICdieXRlcz0nICsgY29udGV4dC5yYW5nZVN0YXJ0ICsgJy0nICsgKGNvbnRleHQucmFuZ2VFbmQgLSAxKSk7XG4gICAgfVxuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHRoaXMucmVhZHlzdGF0ZWNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHhoci5vbnByb2dyZXNzID0gdGhpcy5sb2FkcHJvZ3Jlc3MuYmluZCh0aGlzKTtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gY29udGV4dC5yZXNwb25zZVR5cGU7XG5cbiAgICAvLyBzZXR1cCB0aW1lb3V0IGJlZm9yZSB3ZSBwZXJmb3JtIHJlcXVlc3RcbiAgICB0aGlzLnJlcXVlc3RUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5sb2FkdGltZW91dC5iaW5kKHRoaXMpLCB0aGlzLmNvbmZpZy50aW1lb3V0KTtcbiAgICB4aHIuc2VuZCgpO1xuICB9XG5cbiAgcmVhZHlzdGF0ZWNoYW5nZSAoZXZlbnQpIHtcbiAgICBsZXQgeGhyID0gZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgIHJlYWR5U3RhdGUgPSB4aHIucmVhZHlTdGF0ZSxcbiAgICAgIHN0YXRzID0gdGhpcy5zdGF0cyxcbiAgICAgIGNvbnRleHQgPSB0aGlzLmNvbnRleHQsXG4gICAgICBjb25maWcgPSB0aGlzLmNvbmZpZztcblxuICAgIC8vIGRvbid0IHByb2NlZWQgaWYgeGhyIGhhcyBiZWVuIGFib3J0ZWRcbiAgICBpZiAoc3RhdHMuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vID49IEhFQURFUlNfUkVDRUlWRURcbiAgICBpZiAocmVhZHlTdGF0ZSA+PSAyKSB7XG4gICAgICAvLyBjbGVhciB4aHIgdGltZW91dCBhbmQgcmVhcm0gaXQgaWYgcmVhZHlTdGF0ZSBsZXNzIHRoYW4gNFxuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJlcXVlc3RUaW1lb3V0KTtcbiAgICAgIGlmIChzdGF0cy50Zmlyc3QgPT09IDApIHtcbiAgICAgICAgc3RhdHMudGZpcnN0ID0gTWF0aC5tYXgocGVyZm9ybWFuY2Uubm93KCksIHN0YXRzLnRyZXF1ZXN0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgbGV0IHN0YXR1cyA9IHhoci5zdGF0dXM7XG4gICAgICAgIC8vIGh0dHAgc3RhdHVzIGJldHdlZW4gMjAwIHRvIDI5OSBhcmUgYWxsIHN1Y2Nlc3NmdWxcbiAgICAgICAgaWYgKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgc3RhdHMudGxvYWQgPSBNYXRoLm1heChzdGF0cy50Zmlyc3QsIHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICAgICAgICBsZXQgZGF0YSwgbGVuO1xuICAgICAgICAgIGlmIChjb250ZXh0LnJlc3BvbnNlVHlwZSA9PT0gJ2FycmF5YnVmZmVyJykge1xuICAgICAgICAgICAgZGF0YSA9IHhoci5yZXNwb25zZTtcbiAgICAgICAgICAgIGxlbiA9IGRhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICBsZW4gPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhdHMubG9hZGVkID0gc3RhdHMudG90YWwgPSBsZW47XG4gICAgICAgICAgbGV0IHJlc3BvbnNlID0geyB1cmw6IHhoci5yZXNwb25zZVVSTCwgZGF0YTogZGF0YSB9O1xuICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uU3VjY2VzcyhyZXNwb25zZSwgc3RhdHMsIGNvbnRleHQsIHhocik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaWYgbWF4IG5iIG9mIHJldHJpZXMgcmVhY2hlZCBvciBpZiBodHRwIHN0YXR1cyBiZXR3ZWVuIDQwMCBhbmQgNDk5IChzdWNoIGVycm9yIGNhbm5vdCBiZSByZWNvdmVyZWQsIHJldHJ5aW5nIGlzIHVzZWxlc3MpLCByZXR1cm4gZXJyb3JcbiAgICAgICAgICBpZiAoc3RhdHMucmV0cnkgPj0gY29uZmlnLm1heFJldHJ5IHx8IChzdGF0dXMgPj0gNDAwICYmIHN0YXR1cyA8IDQ5OSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRXJyb3IoeyBjb2RlOiBzdGF0dXMsIHRleHQ6IHhoci5zdGF0dXNUZXh0IH0sIGNvbnRleHQsIHhocik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFib3J0cyBhbmQgcmVzZXRzIGludGVybmFsIHN0YXRlXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIC8vIHNjaGVkdWxlIHJldHJ5XG4gICAgICAgICAgICB0aGlzLnJldHJ5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMubG9hZEludGVybmFsLmJpbmQodGhpcyksIHRoaXMucmV0cnlEZWxheSk7XG4gICAgICAgICAgICAvLyBzZXQgZXhwb25lbnRpYWwgYmFja29mZlxuICAgICAgICAgICAgdGhpcy5yZXRyeURlbGF5ID0gTWF0aC5taW4oMiAqIHRoaXMucmV0cnlEZWxheSwgY29uZmlnLm1heFJldHJ5RGVsYXkpO1xuICAgICAgICAgICAgc3RhdHMucmV0cnkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJlYWR5U3RhdGUgPj0gMiBBTkQgcmVhZHlTdGF0ZSAhPT00IChyZWFkeVN0YXRlID0gSEVBREVSU19SRUNFSVZFRCB8fCBMT0FESU5HKSByZWFybSB0aW1lb3V0IGFzIHhociBub3QgZmluaXNoZWQgeWV0XG4gICAgICAgIHRoaXMucmVxdWVzdFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmxvYWR0aW1lb3V0LmJpbmQodGhpcyksIGNvbmZpZy50aW1lb3V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsb2FkdGltZW91dCAoKSB7XG4gICAgdGhpcy5jYWxsYmFja3Mub25UaW1lb3V0KHRoaXMuc3RhdHMsIHRoaXMuY29udGV4dCwgbnVsbCk7XG4gIH1cblxuICBsb2FkcHJvZ3Jlc3MgKGV2ZW50KSB7XG4gICAgbGV0IHhociA9IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICBzdGF0cyA9IHRoaXMuc3RhdHM7XG5cbiAgICBzdGF0cy5sb2FkZWQgPSBldmVudC5sb2FkZWQ7XG4gICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgIHN0YXRzLnRvdGFsID0gZXZlbnQudG90YWw7XG4gICAgfVxuXG4gICAgbGV0IG9uUHJvZ3Jlc3MgPSB0aGlzLmNhbGxiYWNrcy5vblByb2dyZXNzO1xuICAgIGlmIChvblByb2dyZXNzKSB7XG4gICAgICAvLyB0aGlyZCBhcmcgaXMgdG8gcHJvdmlkZSBvbiBwcm9ncmVzcyBkYXRhXG4gICAgICBvblByb2dyZXNzKHN0YXRzLCB0aGlzLmNvbnRleHQsIG51bGwsIHhocik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFhockxvYWRlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZpZGVvanNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==