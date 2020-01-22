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

      if (!this.db.objectStoreNames.contains(this.options.storagePlaylistsName)) {
        this.db.createObjectStore(this.options.storagePlaylistsName, {
          keyPath: 'id'
        });
      }

      if (!this.db.objectStoreNames.contains(this.options.storageFragmentsName)) {
        const fragmentsStorage = this.db.createObjectStore(this.options.storageFragmentsName, {
          keyPath: 'uuid'
        });
        fragmentsStorage.createIndex('playlistId', 'playlistId', {
          unique: false
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Db21wb25lbnRzL1JlY1NldHRpbmdzTW9kYWxIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29tcG9uZW50cy9yZWNTZXR0aW5nc01vZGFsL0JhY2tncm91bmRSZWNvcmRUYWJIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29tcG9uZW50cy9yZWNTZXR0aW5nc01vZGFsL1JlYWxUaW1lUmVjb3JkVGFiSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL0NvbXBvbmVudHMvcmVjU2V0dGluZ3NNb2RhbC9UYWJzSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL0NvbnRyb2xsZXJzL1JlYWx0aW1lUmVjb3JkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29udHJvbGxlcnMvU3RvcmFnZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL0NvbnRyb2xsZXJzL1ZpZXdDb250cm9sbGVyLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Nb2RlbHMvRnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL01vZGVscy9QbGF5bGlzdC5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9DYWNoZWRCdXR0b25IbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9MaXZlQnV0dG9uSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL2NvbXBvbmVudHMvUHJvZ3Jlc3NDb250cm9sSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL2NvbXBvbmVudHMvUmVjQnV0dG9uSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL2NvbXBvbmVudHMvUmVjU3RhdHVzQmFySGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL2NvbXBvbmVudHMvU3RvcEJ1dHRvbkhsc0pzLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL3BsdWdpbi5zY3NzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi91dGlscy9kYXRlLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi91dGlscy9mb3JtYXQtdGltZS5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vdXRpbHMvdXVpZC5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vdXRpbHMveGhyLWxvYWRlci5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL2V4dGVybmFsIFwidmlkZW9qc1wiIl0sIm5hbWVzIjpbIlZpZGVvSnNNb2RhbERpYWxvZ0NsYXNzIiwidmlkZW9qcyIsImdldENvbXBvbmVudCIsIkRvbSIsImRvbSIsImRlZmF1bHRPcHRpb25zIiwiUmVjU2V0dGluZ3NNb2RhbEhsc0pzIiwiY29uc3RydWN0b3IiLCJwbGF5ZXIiLCJvcHRpb25zIiwiYnVpbGRDU1NDbGFzcyIsImNvbnRlbnQiLCJhbGxvd2VkIiwidGFic0NvbXBvbmVudCIsIlRhYnNIbHNKcyIsInBsYXllcl8iLCJlbF8iLCJyZW5kZXJOb3RBbGxvd2VkQ29udGVudCIsInJlbmRlcmVkRWxfIiwibm90QWxsb3dlZENvbnRlbnQiLCJjcmVhdGVFbCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsInByb3RvdHlwZSIsIm9wdGlvbnNfIiwiT2JqZWN0IiwiYXNzaWduIiwicGF1c2VPbk9wZW4iLCJmaWxsQWx3YXlzIiwidGVtcG9yYXJ5IiwidW5jbG9zZWFibGUiLCJyZWdpc3RlckNvbXBvbmVudCIsIlZpZGVvSnNDb21wb25lbnRDbGFzcyIsIkJhY2tncm91bmRSZWNvcmRUYWJIbHNKcyIsImNvbnNvbGUiLCJncm91cCIsImxvZyIsImdyb3VwRW5kIiwiUmVhbFRpbWVSZWNvcmRUYWJIbHNKcyIsImdldFF1YWxpdHlMZXZlbHMiLCJobHNqcyIsImhsc0pTTGl2ZVJlY29yZCIsImdldEhsc0pzIiwibGV2ZWxzIiwiY3VycmVudExldmVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGFiZWwiLCJoZWlnaHQiLCJ2YWx1ZSIsInNlbGVjdGVkIiwic29ydCIsImN1cnJlbnQiLCJuZXh0IiwiZWxlbSIsInJlYWx0aW1lUmVjb3JkIiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJIZWFkIiwicmVuZGVyUXVhbGl0eVNlbGVjdG9yIiwicmVuZGVyQnV0dG9uIiwicmVuZGVyRm9vdGVyIiwibW9kYWxIZWFkZXJDb250ZW50IiwibWF4UmVjb3JkTWludXRlcyIsIm1vZGFsRm9vdGVyQ29udGVudCIsInV1aWQiLCJmYWNlVVVJRCIsImZvciIsImlubmVyVGV4dCIsInF1YWxpdHlTZWxlY3QiLCJpZCIsImZvckVhY2giLCJ0ZXh0IiwiaG9sZGVyIiwib25jbGljayIsImhhbmRsZVN0YXJ0UmVjb3JkaW5nIiwiYmluZCIsInN0YXJ0UmVhbHRpbWVSZWNvcmQiLCJ0YWJzSG9sZGVyIiwicmVuZGVyTmF2IiwicmVuZGVyQm9keSIsIm5hdkhvbGRlciIsImhhbmRsZUNsaWNrIiwiYm9keUhvbGRlciIsImVsZW0xIiwiYmFja2dyb3VuZFJlY29yZCIsImVsZW0yIiwiJCQiLCJlbGVtSW5kZXgiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiSGxzIiwid2luZG93IiwiZmFjZU1pbWVQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJSZWFsdGltZVJlY29yZENvbnRyb2xsZXIiLCJwbHVnaW4iLCJyZXNwb25zZSIsInN0YXRzIiwiY29udGV4dCIsIm5ldHdvcmtEZXRhaWxzIiwibG9hZGVyIiwiZGVzdHJveSIsInN0b3JhZ2VDb250cm9sbGVyIiwic2F2ZUZyYWdtZW50IiwiZnJhZyIsImRhdGEiLCJ0aGVuIiwicGxheWxpc3QiLCJmcmFnbWVudFNhdmVkIiwic2F2ZVBsYXlsaXN0IiwiZXZlbnQiLCJyZWNvcmRTdGFydGVkIiwibWFuaWZlc3RMaXN0ZW5lciIsImxldmVsTGlzdGVuZXIiLCJmcmFnbWVudExpc3RlbmVyIiwiaW5pdCIsIm9uIiwiRXZlbnRzIiwiRlJBR19MT0FERUQiLCJobHNGcmFnbWVudExvYWRlZCIsInN0YXJ0UmVjb3JkIiwic3RvcFJlY29yZCIsImZpbmlzaGVkIiwiaW5pdFBsYXlsaXN0IiwibGV2ZWwiLCJYaHJMb2FkZXIiLCJ1cmwiLCJsb2FkZXJDb250ZXh0IiwiYWRkRnJhZ21lbnQiLCJkdXJhdGlvbiIsInJlc3BvbnNlVHlwZSIsInByb2dyZXNzRGF0YSIsImxvYWRlckNvbmZpZyIsInRpbWVvdXQiLCJtYXhSZXRyeSIsInJldHJ5RGVsYXkiLCJtYXhSZXRyeURlbGF5IiwibG9hZGVyQ2FsbGJhY2tzIiwib25TdWNjZXNzIiwiZnJhZ21lbnRMb2FkZWQiLCJsb2FkIiwibGV2ZWxJbmRleCIsIm1pbWVQcm9taXNlIiwiZ2V0UmVjb3JkTWltZSIsIlBsYXlsaXN0TW9kZWwiLCJub3dJbkZvcm1hdFltZEhpcyIsIndpZHRoIiwidGFyZ2V0ZHVyYXRpb24iLCJkZXRhaWxzIiwibWltZSIsIkRCX1ZFUlNJT04iLCJTVE9SQUdFX1dSSVRFX01PREUiLCJTVE9SQUdFX1JFQURfTU9ERSIsIlN0b3JhZ2VDb250cm9sbGVyIiwiZGIiLCJvcGVuUmVxdWVzdCIsImluZGV4ZWREQiIsIm9wZW4iLCJzdG9yYWdlRGJOYW1lIiwib251cGdyYWRlbmVlZGVkIiwicmVzdWx0Iiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwic3RvcmFnZVBsYXlsaXN0c05hbWUiLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJzdG9yYWdlRnJhZ21lbnRzTmFtZSIsImZyYWdtZW50c1N0b3JhZ2UiLCJjcmVhdGVJbmRleCIsInVuaXF1ZSIsIm9uc3VjY2VzcyIsImNoZWNrUmVxdWlyZW1lbnRzIiwiZnJhZ21lbnQiLCJwYXlsb2FkIiwidHJhbnNhY3Rpb24iLCJzdG9yYWdlIiwib2JqZWN0U3RvcmUiLCJyZXF1ZXN0IiwiYWRkIiwib25lcnJvciIsInB1dCIsIlZpZXdDb250cm9sbGVyIiwiY29udHJvbEJhciIsImdldENoaWxkIiwic3BhY2UiLCJhZGRDaGlsZCIsInJlbW92ZURlZmF1bHRDb250cm9scyIsImxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWMiLCJzZWxlY3RvciIsImNoaWxkcmVuIiwiZmlsdGVyIiwiY29tcG9uZW50IiwiaGFzQ2xhc3MiLCJjYWNoZWRCdXR0b25Db21wb25lbnQiLCJjbGlja0hhbmRsZXIiLCJhY3RpdmVMaXZlTW9kZSIsImhpZGUiLCJsaXZlQnV0dG9uQ29tcG9uZW50IiwiYWN0aXZhdGVQcm9ncmVzc01vZGUiLCJyZWNCdXR0b25Db21wb25lbnQiLCJzaG93UmVjb3JkU2V0dGluZ3MiLCJzdG9wQnV0dG9uQ29tcG9uZW50Iiwic3RvcFJlYWx0aW1lUmVjb3JkIiwicmVjU3RhdHVzQmFyQ29tcG9uZW50IiwicHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50IiwicmVtb3ZlQ2hpbGQiLCJzaG93T3RoZXJDb250cm9sIiwic2hvd0xpdmVDb250cm9sIiwiaGlkZVByb2dyZXNzQ29udHJvbCIsImhpZGVSZWNDb250cm9sIiwibGl2ZVRyYWNrZXIiLCJzZWVrVG9MaXZlRWRnZSIsImUiLCJ3YXJuIiwibWVzc2FnZSIsInN0YXRlIiwicmVjb3JkSW5Qcm9jZXNzIiwic2hvd1Byb2dyZXNzQ29udHJvbCIsImhpZGVMaXZlQ29udHJvbCIsInJlY1NldHRpbmdzTW9kYWxDb21wb25lbnQiLCJjbG9zZSIsImhpZGVPdGhlckNvbnRyb2wiLCJzaG93UmVjQ29udHJvbCIsIm1heFJlY29yZFNlY29uZHMiLCJ1cGRhdGVSZWNvcmRMZWZ0VGltZSIsInVwZGF0ZVJlY29yZFRpbWUiLCJhIiwicmVjb3JkVXBkYXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNob3ciLCJjbGVhckludGVydmFsIiwiRnJhZ21lbnRNb2RlbCIsImZyYWdtZW50RGF0YSIsInBsYXlsaXN0SWQiLCJzcGxpdCIsInBvcCIsInNhdmVkIiwiY3JlYXRlUGxheWxpc3RIZWFkZXIiLCJhZGRQbGF5bGlzdEZyYWdtZW50IiwiZHVyYWN0aW9uIiwiY3JlYXRlUGxheWxpc3RGb290ZXIiLCJwbGF5bGlzdERhdGEiLCJmcmFnbWVudHMiLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93IiwidXBkYXRlZEF0IiwicmVjRmluaXNoZWQiLCJwdXNoIiwidG9TdHJpbmciLCJqb2luIiwiVmlkZW9Kc0J1dHRvbkNsYXNzIiwiQ2FjaGVkQnV0dG9uSGxzSnMiLCJ0YWciLCJwcm9wcyIsImF0dHJpYnV0ZXMiLCJub25JY29uQ29udHJvbCIsImNyZWF0ZUNvbnRyb2xUZXh0RWwiLCJlbCIsImNvbnRyb2xUZXh0XyIsImNhbGwiLCJhcmd1bWVudHMiLCJMaXZlQnV0dG9uSGxzSnMiLCJWaWRlb0pzUHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50IiwiUHJvZ3Jlc3NDb250cm9sSGxzSnMiLCJSZWNCdXR0b25IbHNKcyIsIlJlY1N0YXR1c0Jhckhsc0pzIiwicmVjb3JkZWRFbF8iLCJyZWNvcmRMZWZ0RWxfIiwidGltZSIsImZvcm1hdFRpbWUiLCJkaXNwb3NlIiwiU3RvcEJ1dHRvbkhsc0pzIiwiUGx1Z2luIiwiZ2V0UGx1Z2luIiwiZGVmYXVsdHMiLCJIbHNKU0xpdmVSZWNvcmRQbHVnaW4iLCJzZXRTdGF0ZSIsInZpZXdDb250cm9sbGVyIiwicmVhbHRpbWVSZWNvcmRDb250cm9sbGVyIiwidGVjaCIsIklXaWxsVXNlVGhpc0luUGx1Z2luIiwic291cmNlSGFuZGxlcl8iLCJobHMiLCJtZXJnZU9wdGlvbnMiLCJsZXZlbElkIiwiYWN0aXZhdGVSZWNvcmRNb2RlIiwiaGFuZGxlU3RhdGVDaGFuZ2VkIiwiVkVSU0lPTiIsImRlZmF1bHRTdGF0ZSIsInJlY29yZEFsbG93ZWQiLCJyZWdpc3RlclBsdWdpbiIsIm5vcm1hbGl6ZSIsIm51bWJlciIsInRvRm9ybWF0WW1kSGlzIiwiZGF0ZSIsInNlcGFyYXRvciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImRlZmF1bHRJbXBsZW1lbnRhdGlvbiIsInNlY29uZHMiLCJndWlkZSIsInMiLCJNYXRoIiwiZmxvb3IiLCJtIiwiaCIsImdtIiwiZ2giLCJpc05hTiIsIkluZmluaXR5IiwiaW1wbGVtZW50YXRpb24iLCJzZXRGb3JtYXRUaW1lIiwiY3VzdG9tSW1wbGVtZW50YXRpb24iLCJyZXNldEZvcm1hdFRpbWUiLCJwcmVmaXgiLCJwZXJmb3JtYW5jZSIsIlhNTEh0dHBSZXF1ZXN0IiwiY29uZmlnIiwieGhyU2V0dXAiLCJhYm9ydCIsInJlYWR5U3RhdGUiLCJhYm9ydGVkIiwiY2xlYXJUaW1lb3V0IiwicmVxdWVzdFRpbWVvdXQiLCJyZXRyeVRpbWVvdXQiLCJjYWxsYmFja3MiLCJ0cmVxdWVzdCIsInJldHJ5IiwibG9hZEludGVybmFsIiwieGhyIiwidGZpcnN0IiwibG9hZGVkIiwib25FcnJvciIsImNvZGUiLCJzdGF0dXMiLCJyYW5nZUVuZCIsInNldFJlcXVlc3RIZWFkZXIiLCJyYW5nZVN0YXJ0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlzdGF0ZWNoYW5nZSIsIm9ucHJvZ3Jlc3MiLCJsb2FkcHJvZ3Jlc3MiLCJzZXRUaW1lb3V0IiwibG9hZHRpbWVvdXQiLCJzZW5kIiwiY3VycmVudFRhcmdldCIsIm1heCIsInRsb2FkIiwibGVuIiwiYnl0ZUxlbmd0aCIsInJlc3BvbnNlVGV4dCIsImxlbmd0aCIsInRvdGFsIiwicmVzcG9uc2VVUkwiLCJzdGF0dXNUZXh0IiwibWluIiwib25UaW1lb3V0IiwibGVuZ3RoQ29tcHV0YWJsZSIsIm9uUHJvZ3Jlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7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QWYsRTs7Ozs7Ozs7Ozs7QUM1SkEsb0MiLCJmaWxlIjoidmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC5janMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wbHVnaW4uanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tpXSk7XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5pbXBvcnQgVGFic0hsc0pzIGZyb20gXCIuL3JlY1NldHRpbmdzTW9kYWwvVGFic0hsc0pzXCI7XG5cbmNvbnN0IFZpZGVvSnNNb2RhbERpYWxvZ0NsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ01vZGFsRGlhbG9nJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmNsYXNzIFJlY1NldHRpbmdzTW9kYWxIbHNKcyBleHRlbmRzIFZpZGVvSnNNb2RhbERpYWxvZ0NsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIHRoZSBkZWZhdWx0IERPTSBgY2xhc3NOYW1lYC5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiAgICAgICAgIFRoZSBET00gYGNsYXNzTmFtZWAgZm9yIHRoaXMgb2JqZWN0LlxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSB2ZXJzaW9uIDUuXG4gICAqL1xuICBidWlsZENTU0NsYXNzKCkge1xuICAgIHJldHVybiBgdmpzLWhsc2pzLWxyLXJlYy1zZXR0aW5ncyAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGxvY2FsaXplZCBlcnJvciBtZXNzYWdlIGJhc2VkIG9uIHRoZSBgUGxheWVyYHMgZXJyb3IuXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogICAgICAgICBUaGUgYFBsYXllcmBzIGVycm9yIG1lc3NhZ2UgbG9jYWxpemVkIG9yIGFuIGVtcHR5IHN0cmluZy5cbiAgICovXG4gIGNvbnRlbnQoKSB7XG4gICAgaWYodGhpcy5vcHRpb25zKCkuYWxsb3dlZCkge1xuICAgICAgdGhpcy50YWJzQ29tcG9uZW50ID0gbmV3IFRhYnNIbHNKcyh0aGlzLnBsYXllcl8sIHRoaXMub3B0aW9ucygpKTtcbiAgICAgIHJldHVybiB0aGlzLnRhYnNDb21wb25lbnQuZWxfO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJOb3RBbGxvd2VkQ29udGVudCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlck5vdEFsbG93ZWRDb250ZW50KCkge1xuICAgIGlmKHRoaXMucmVuZGVyZWRFbF8pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVkRWxfO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSAodGhpcy5vcHRpb25zKCkubm90QWxsb3dlZENvbnRlbnQgfHwgKCgpID0+ICgnPGgyPlJlY29yZGluZyBub3QgYWxsb3dlZDwvaDI+JykpKSgpO1xuXG4gICAgdGhpcy5yZW5kZXJlZEVsXyA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIGlubmVySFRNTDogY29udGVudCxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLnJlbmRlcmVkRWxfO1xuICB9XG59XG5cblJlY1NldHRpbmdzTW9kYWxIbHNKcy5wcm90b3R5cGUub3B0aW9uc18gPSBPYmplY3QuYXNzaWduKHt9LCBWaWRlb0pzTW9kYWxEaWFsb2dDbGFzcy5wcm90b3R5cGUub3B0aW9uc18sIHtcbiAgcGF1c2VPbk9wZW46IGZhbHNlLFxuICBmaWxsQWx3YXlzOiBmYWxzZSxcbiAgdGVtcG9yYXJ5OiB0cnVlLFxuICB1bmNsb3NlYWJsZTogZmFsc2Vcbn0pO1xuXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdSZWNTZXR0aW5nc01vZGFsSGxzSnMnLCBSZWNTZXR0aW5nc01vZGFsSGxzSnMpO1xuZXhwb3J0IGRlZmF1bHQgUmVjU2V0dGluZ3NNb2RhbEhsc0pzO1xuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzQ29tcG9uZW50Q2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmNsYXNzIEJhY2tncm91bmRSZWNvcmRUYWJIbHNKcyBleHRlbmRzIFZpZGVvSnNDb21wb25lbnRDbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBjb25zb2xlLmdyb3VwKFwiQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzLmpzOjIwIC0gY29uc3RydWN0b3JcIik7XG4gICAgY29uc29sZS5sb2cocGxheWVyKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKCkge1xuICAgIHJldHVybiBzdXBlci5jcmVhdGVFbChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdGFiLWJhY2tncm91bmQtcmVjb3JkJyxcbiAgICAgICAgaW5uZXJIVE1MOiAnPHA+dmpzLWhsc2pzLXRhYi1iYWNrZ3JvdW5kLXJlY29yZDwvcD4nXG4gICAgICB9LFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzO1xuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuaW1wb3J0IHtmYWNlVVVJRH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V1aWRcIjtcblxuY29uc3QgVmlkZW9Kc0NvbXBvbmVudENsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuY2xhc3MgUmVhbFRpbWVSZWNvcmRUYWJIbHNKcyBleHRlbmRzIFZpZGVvSnNDb21wb25lbnRDbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0UXVhbGl0eUxldmVscygpIHtcbiAgICBjb25zdCBobHNqcyA9IHRoaXMucGxheWVyKCkuaGxzSlNMaXZlUmVjb3JkKCkuZ2V0SGxzSnMoKTtcbiAgICBjb25zdCBsZXZlbHMgPSBobHNqcy5sZXZlbHMgfHwgW107XG4gICAgY29uc3QgY3VycmVudExldmVsID0gaGxzanMuY3VycmVudExldmVsIHx8IDA7XG4gICAgcmV0dXJuIGxldmVscy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBpdGVtLmhlaWdodCArICdwJyxcbiAgICAgICAgdmFsdWU6IGluZGV4LFxuICAgICAgICBzZWxlY3RlZDogaW5kZXggPT09IGN1cnJlbnRMZXZlbCxcbiAgICAgIH1cbiAgICApKS5zb3J0KChjdXJyZW50LCBuZXh0KSA9PiB7XG4gICAgICBpZiAoKHR5cGVvZiBjdXJyZW50ICE9PSAnb2JqZWN0JykgfHwgKHR5cGVvZiBuZXh0ICE9PSAnb2JqZWN0JykpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQudmFsdWUgPCBuZXh0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50LnZhbHVlID4gbmV4dC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRWwoKSB7XG4gICAgY29uc3QgZWxlbSA9IHN1cGVyLmNyZWF0ZUVsKFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy10YWItcmVhbHRpbWUtcmVjb3JkJyxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGlmKHRoaXMub3B0aW9ucygpLnJlYWx0aW1lUmVjb3JkLmFsbG93ZWQpIHtcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJIZWFkKCkpO1xuICAgICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclF1YWxpdHlTZWxlY3RvcigpKTtcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJCdXR0b24oKSk7XG4gICAgICBlbGVtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyRm9vdGVyKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlck5vdEFsbG93ZWRDb250ZW50KCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgcmVuZGVySGVhZCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gKHRoaXMub3B0aW9ucygpLnJlYWx0aW1lUmVjb3JkLm1vZGFsSGVhZGVyQ29udGVudCB8fCAoKCkgPT4gKFxuICAgICAgXCI8cD5SZWFsLXRpbWUgcmVjb3JkaW5nIGFsbG93cyB5b3UgdG8gcmVjb3JkIGEgZnJhZ21lbnQgb2YgdGhlIHByb2dyYW0geW91IGFyZSB3YXRjaGluZy4gXCIgK1xuICAgICAgXCJSZWNvcmRpbmcgd2lsbCBiZSBkb25lIHVudGlsIHRoZSByZWNvcmRpbmcgc3RvcHMsIHRoZSByZWNvcmRpbmcgdGltZSBsaW1pdCBpcyBleGNlZWRlZCBvciB0aGUgdGFiIGlzIGNsb3NlZC5cIiArXG4gICAgICBcIlRvIHN0YXJ0IHJlY29yZGluZywgc2VsZWN0IHlvdXIgcHJlZmVycmVkIHF1YWxpdHkgYW5kIGNsaWNrIDxzdHJvbmc+XFxcInN0YXJ0IHJlY29yZGluZ1xcXCI8L3N0cm9uZz4uPC9wPlwiICtcbiAgICAgIFwiPHA+WW91ciBjdXJyZW50IHJlY29yZGluZyB0aW1lIGxpbWl0IGlzIFwiICsgdGhpcy5vcHRpb25zKCkubWF4UmVjb3JkTWludXRlcyArIFwiIG1pbi48L3A+XCJcbiAgICApKSkoKSA7XG4gICAgcmV0dXJuIERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgaW5uZXJIVE1MOiBjb250ZW50XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlckZvb3RlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gKHRoaXMub3B0aW9ucygpLnJlYWx0aW1lUmVjb3JkLm1vZGFsRm9vdGVyQ29udGVudCB8fCAoKCkgPT4gKCcnKSkpKCkgO1xuICAgIHJldHVybiBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGlubmVySFRNTDogY29udGVudFxuICAgIH0pXG4gIH1cblxuICByZW5kZXJRdWFsaXR5U2VsZWN0b3IoKSB7XG4gICAgY29uc3QgZWxlbSA9IERvbS5jcmVhdGVFbChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdGFiLXF1YWxpdHktc2VsZWN0IHZqcy1obHNqcy1mb3JtLWdyb3VwJyxcbiAgICAgIH0sXG4gICAgKTtcbiAgICBjb25zdCB1dWlkID0gZmFjZVVVSUQoJ3Zqcy1obHMtcXVhbGl0eS1zZWxlY3QnKTtcblxuICAgIGVsZW0uYXBwZW5kQ2hpbGQoXG4gICAgICBEb20uY3JlYXRlRWwoJ2xhYmVsJywge1xuICAgICAgICBmb3I6IHV1aWQsXG4gICAgICAgIGlubmVyVGV4dDogJ1F1YWxpdHknLFxuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtZm9ybS1sYWJlbCdcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMucXVhbGl0eVNlbGVjdCA9IERvbS5jcmVhdGVFbCgnc2VsZWN0Jywge1xuICAgICAgaWQ6IHV1aWQsXG4gICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtZm9ybS1pbnB1dCdcbiAgICB9KTtcblxuICAgIGNvbnN0IGxldmVscyA9IHRoaXMuZ2V0UXVhbGl0eUxldmVscygpO1xuXG4gICAgbGV2ZWxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMucXVhbGl0eVNlbGVjdC5hcHBlbmRDaGlsZChcbiAgICAgICAgRG9tLmNyZWF0ZUVsKCdvcHRpb24nLCB7XG4gICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgdGV4dDogaXRlbS5sYWJlbCxcbiAgICAgICAgICBzZWxlY3RlZDogaXRlbS5zZWxlY3RlZFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGlmKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5xdWFsaXR5U2VsZWN0LnZhbHVlID0gaXRlbS52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5xdWFsaXR5U2VsZWN0KTtcblxuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgcmVuZGVyQnV0dG9uKCkge1xuICAgIGNvbnN0IGhvbGRlciA9IERvbS5jcmVhdGVFbChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtZm9ybS1ncm91cCcsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGhvbGRlci5hcHBlbmRDaGlsZChEb20uY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1idXR0b24gdmpzLWhsc2pzLXN0YXJ0LXJlY29yZCcsXG4gICAgICBpbm5lclRleHQ6ICdTdGFydCBSZWNvcmRpbmcnLFxuICAgICAgb25jbGljazogdGhpcy5oYW5kbGVTdGFydFJlY29yZGluZy5iaW5kKHRoaXMpXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIGhvbGRlcjtcbiAgfVxuXG4gIHJlbmRlck5vdEFsbG93ZWRDb250ZW50KCkge1xuICAgIGlmKHRoaXMucmVuZGVyZWRFbF8pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVkRWxfO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSAodGhpcy5vcHRpb25zKCkucmVhbHRpbWVSZWNvcmQubm90QWxsb3dlZENvbnRlbnQgfHwgKCgpID0+ICgnPGgyPlJlY29yZGluZyBub3QgYWxsb3dlZDwvaDI+JykpKSgpO1xuXG4gICAgdGhpcy5yZW5kZXJlZEVsXyA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIGlubmVySFRNTDogY29udGVudCxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLnJlbmRlcmVkRWxfO1xuICB9XG5cbiAgaGFuZGxlU3RhcnRSZWNvcmRpbmcoKSB7XG4gICAgdGhpcy5wbGF5ZXIoKS5obHNKU0xpdmVSZWNvcmQoKS5zdGFydFJlYWx0aW1lUmVjb3JkKHRoaXMucXVhbGl0eVNlbGVjdC52YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhbFRpbWVSZWNvcmRUYWJIbHNKcztcbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcbmltcG9ydCBSZWFsVGltZVJlY29yZFRhYkhsc0pzIGZyb20gXCIuL1JlYWxUaW1lUmVjb3JkVGFiSGxzSnNcIjtcbmltcG9ydCBCYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnMgZnJvbSBcIi4vQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzXCI7XG5cbmNvbnN0IFZpZGVvSnNDb21wb25lbnRDbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuY2xhc3MgVGFic0hsc0pzIGV4dGVuZHMgVmlkZW9Kc0NvbXBvbmVudENsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gIH1cblxuICBjcmVhdGVFbCgpIHtcbiAgICBjb25zdCB0YWJzSG9sZGVyID0gc3VwZXIuY3JlYXRlRWwoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMnLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgdGFic0hvbGRlci5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlck5hdigpKTtcblxuICAgIHRhYnNIb2xkZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJCb2R5KCkpO1xuXG4gICAgcmV0dXJuIHRhYnNIb2xkZXI7XG4gIH1cblxuXG4gIHJlbmRlck5hdigpIHtcbiAgICBjb25zdCBuYXZIb2xkZXIgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLW5hdidcbiAgICB9KTtcbiAgICBuYXZIb2xkZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2LWVsZW0gYWN0aXZlJyxcbiAgICAgICAgaW5uZXJIVE1MOiAnUmVhbHRpbWUnLFxuICAgICAgICBvbmNsaWNrOiAoKSA9PiB7dGhpcy5oYW5kbGVDbGljaygwKX1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIG5hdkhvbGRlci5hcHBlbmRDaGlsZChcbiAgICAgIERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYtZWxlbScsXG4gICAgICAgIGlubmVySFRNTDogJ0JhY2tncm91bmQnLFxuICAgICAgICBvbmNsaWNrOiAoKSA9PiB7dGhpcy5oYW5kbGVDbGljaygxKX1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBuYXZIb2xkZXI7XG4gIH1cblxuICByZW5kZXJCb2R5KCkge1xuICAgIGNvbnN0IGJvZHlIb2xkZXIgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWJvZHknXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlYWx0aW1lUmVjb3JkID0gbmV3IFJlYWxUaW1lUmVjb3JkVGFiSGxzSnModGhpcy5wbGF5ZXJfLCB0aGlzLm9wdGlvbnMoKSk7XG4gICAgY29uc3QgZWxlbTEgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWVsZW0gYWN0aXZlJ1xuICAgIH0pO1xuICAgIGVsZW0xLmFwcGVuZENoaWxkKHRoaXMucmVhbHRpbWVSZWNvcmQuZWxfKTtcbiAgICBib2R5SG9sZGVyLmFwcGVuZENoaWxkKGVsZW0xKTtcblxuICAgIHRoaXMuYmFja2dyb3VuZFJlY29yZCA9IG5ldyBCYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnModGhpcy5wbGF5ZXJfLCB0aGlzLm9wdGlvbnMoKSk7XG4gICAgY29uc3QgZWxlbTIgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWVsZW0nXG4gICAgfSk7XG4gICAgZWxlbTIuYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kUmVjb3JkLmVsXyk7XG4gICAgYm9keUhvbGRlci5hcHBlbmRDaGlsZChlbGVtMik7XG5cbiAgICByZXR1cm4gYm9keUhvbGRlcjtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGluZGV4KSB7XG4gICAgdGhpcy4kJCgnLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLW5hdi1lbGVtJykuZm9yRWFjaCgoZWxlbSwgZWxlbUluZGV4KSA9PiB7XG4gICAgICBpZihpbmRleCA9PT0gZWxlbUluZGV4KSB7XG4gICAgICAgIERvbS5hZGRDbGFzcyhlbGVtLCAnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoZWxlbSwgJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuJCQoJy52anMtaGxzanMtdmVydGljYWwtdGFicy1lbGVtJykuZm9yRWFjaCgoZWxlbSwgZWxlbUluZGV4KSA9PiB7XG4gICAgICBpZihpbmRleCA9PT0gZWxlbUluZGV4KSB7XG4gICAgICAgIERvbS5hZGRDbGFzcyhlbGVtLCAnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoZWxlbSwgJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzSGxzSnM7XG4iLCJpbXBvcnQge1BsYXlsaXN0TW9kZWx9IGZyb20gXCIuLi9Nb2RlbHMvUGxheWxpc3RcIjtcbmltcG9ydCB7bm93SW5Gb3JtYXRZbWRIaXN9IGZyb20gXCIuLi91dGlscy9kYXRlXCI7XG5pbXBvcnQgWGhyTG9hZGVyIGZyb20gXCIuLi91dGlscy94aHItbG9hZGVyXCI7XG5cbmNvbnN0IEhscyA9IHdpbmRvdy5IbHM7XG5cbmNvbnN0IGZhY2VNaW1lUHJvbWlzZSA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZSh7fSk7XG4gIH0pXG59O1xuXG5jbGFzcyBSZWFsdGltZVJlY29yZENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihwbHVnaW4pIHtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLm1hbmlmZXN0TGlzdGVuZXIgPSBudWxsO1xuICAgIHRoaXMubGV2ZWxMaXN0ZW5lciA9IG51bGw7XG4gICAgdGhpcy5mcmFnbWVudExpc3RlbmVyID0gbnVsbDtcbiAgICB0aGlzLnJlY29yZFN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMucGxheWxpc3QgPSBudWxsO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBobHNqcyA9IHRoaXMucGx1Z2luLmdldEhsc0pzKCk7XG4gICAgdGhpcy5mcmFnbWVudExpc3RlbmVyID0gaGxzanMub24oSGxzLkV2ZW50cy5GUkFHX0xPQURFRCwgdGhpcy5obHNGcmFnbWVudExvYWRlZCk7XG4gIH1cblxuICBzdGFydFJlY29yZCgpIHtcbiAgICB0aGlzLnBsYXlsaXN0ID0gbnVsbDtcbiAgICB0aGlzLnJlY29yZFN0YXJ0ZWQgPSB0cnVlO1xuICB9XG5cbiAgc3RvcFJlY29yZCgpIHtcbiAgICB0aGlzLnJlY29yZFN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBpZih0aGlzLnBsYXlsaXN0KSB7XG4gICAgICB0aGlzLnBsYXlsaXN0LmZpbmlzaGVkKCk7XG4gICAgICB0aGlzLnBsdWdpbi5zdG9yYWdlQ29udHJvbGxlci5zYXZlUGxheWxpc3QodGhpcy5wbGF5bGlzdCk7XG4gICAgfVxuICB9XG5cbiAgc2F2ZUZyYWdtZW50KGZyYWcpIHtcbiAgICBpZih0aGlzLnBsYXlsaXN0ID09PSBudWxsKSB7XG4gICAgICB0aGlzLmluaXRQbGF5bGlzdChmcmFnLmxldmVsKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnBsYXlsaXN0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZGVyID0gbmV3IFhockxvYWRlcigpO1xuICAgIGNvbnN0IHVybCA9IGZyYWcudXJsO1xuICAgIGNvbnN0IGxvYWRlckNvbnRleHQgPSB7XG4gICAgICB1cmwsXG4gICAgICBmcmFnOiB0aGlzLnBsYXlsaXN0LmFkZEZyYWdtZW50KGZyYWcuZHVyYXRpb24sIHVybCksXG4gICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXG4gICAgICBwcm9ncmVzc0RhdGE6IGZhbHNlLFxuICAgICAgbG9hZGVyXG4gICAgfTtcbiAgICBjb25zdCBsb2FkZXJDb25maWcgPSB7XG4gICAgICB0aW1lb3V0OiA2MCxcbiAgICAgIG1heFJldHJ5OiAwLFxuICAgICAgcmV0cnlEZWxheTogMCxcbiAgICAgIG1heFJldHJ5RGVsYXk6IDNcbiAgICB9O1xuXG4gICAgY29uc3QgbG9hZGVyQ2FsbGJhY2tzID0ge1xuICAgICAgb25TdWNjZXNzOiB0aGlzLmZyYWdtZW50TG9hZGVkLFxuICAgIH07XG4gICAgbG9hZGVyLmxvYWQobG9hZGVyQ29udGV4dCwgbG9hZGVyQ29uZmlnLCBsb2FkZXJDYWxsYmFja3MpO1xuICB9XG5cbiAgaW5pdFBsYXlsaXN0KGxldmVsSW5kZXgpIHtcbiAgICBjb25zdCBobHNqcyA9IHRoaXMucGx1Z2luLmdldEhsc0pzKCk7XG4gICAgY29uc3QgbGV2ZWwgPSBobHNqcy5sZXZlbHNbbGV2ZWxJbmRleF07XG4gICAgY29uc3QgbWltZVByb21pc2UgPSAodGhpcy5wbHVnaW4ub3B0aW9ucy5yZWFsdGltZVJlY29yZC5nZXRSZWNvcmRNaW1lIHx8IGZhY2VNaW1lUHJvbWlzZSkoKTtcblxuICAgIGlmKCFsZXZlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucGxheWxpc3QgPSBuZXcgUGxheWxpc3RNb2RlbCh7XG4gICAgICBpZDogJ3JlY29yZC0nICsgbm93SW5Gb3JtYXRZbWRIaXMoKSxcbiAgICAgIHdpZHRoOiBsZXZlbC53aWR0aCxcbiAgICAgIGhlaWdodDogbGV2ZWwuaGVpZ2h0LFxuICAgICAgdGFyZ2V0ZHVyYXRpb246IGxldmVsLmRldGFpbHMudGFyZ2V0ZHVyYXRpb25cbiAgICB9KTtcblxuICAgIG1pbWVQcm9taXNlLnRoZW4oKG1pbWUpID0+IHtcbiAgICAgIHRoaXMucGxheWxpc3QubWltZSA9IG1pbWU7XG4gICAgICB0aGlzLnBsdWdpbi5zdG9yYWdlQ29udHJvbGxlci5zYXZlUGxheWxpc3QodGhpcy5wbGF5bGlzdCk7XG4gICAgfSlcbiAgfVxuXG4gIGZyYWdtZW50TG9hZGVkID0gKHJlc3BvbnNlLCBzdGF0cywgY29udGV4dCwgbmV0d29ya0RldGFpbHMgPSBudWxsKSA9PiB7XG4gICAgY29udGV4dC5sb2FkZXIuZGVzdHJveSgpO1xuICAgIGNvbnRleHQubG9hZGVyID0gbnVsbDtcblxuICAgIHRoaXMucGx1Z2luLnN0b3JhZ2VDb250cm9sbGVyLnNhdmVGcmFnbWVudChjb250ZXh0LmZyYWcsIHJlc3BvbnNlLmRhdGEsIHN0YXRzKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucGxheWxpc3QuZnJhZ21lbnRTYXZlZChjb250ZXh0LmZyYWcpO1xuICAgICAgdGhpcy5wbHVnaW4uc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZVBsYXlsaXN0KHRoaXMucGxheWxpc3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIGhsc0ZyYWdtZW50TG9hZGVkID0gKGV2ZW50LCBkYXRhKSA9PiB7XG4gICAgaWYodGhpcy5yZWNvcmRTdGFydGVkKSB7XG4gICAgICB0aGlzLnNhdmVGcmFnbWVudChkYXRhLmZyYWcpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyO1xuIiwiY29uc3QgREJfVkVSU0lPTiA9IDE7XG5jb25zdCBTVE9SQUdFX1dSSVRFX01PREUgPSAncmVhZHdyaXRlJztcbmNvbnN0IFNUT1JBR0VfUkVBRF9NT0RFID0gJ3JlYWRvbmx5JztcblxuY2xhc3MgU3RvcmFnZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihwbHVnaW4pIHtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLmRiID0gbnVsbDtcbiAgfVxuXG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBvcGVuUmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKHRoaXMucGx1Z2luLm9wdGlvbnMuc3RvcmFnZURiTmFtZSwgREJfVkVSU0lPTik7XG4gICAgb3BlblJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuICAgICAgdGhpcy5kYiA9IG9wZW5SZXF1ZXN0LnJlc3VsdDtcbiAgICAgIGlmICghdGhpcy5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKHRoaXMub3B0aW9ucy5zdG9yYWdlUGxheWxpc3RzTmFtZSkpIHtcbiAgICAgICAgdGhpcy5kYi5jcmVhdGVPYmplY3RTdG9yZSh0aGlzLm9wdGlvbnMuc3RvcmFnZVBsYXlsaXN0c05hbWUsIHtrZXlQYXRoOiAnaWQnfSk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyh0aGlzLm9wdGlvbnMuc3RvcmFnZUZyYWdtZW50c05hbWUpKSB7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50c1N0b3JhZ2UgPSB0aGlzLmRiLmNyZWF0ZU9iamVjdFN0b3JlKHRoaXMub3B0aW9ucy5zdG9yYWdlRnJhZ21lbnRzTmFtZSwge2tleVBhdGg6ICd1dWlkJ30pO1xuICAgICAgICBmcmFnbWVudHNTdG9yYWdlLmNyZWF0ZUluZGV4KCdwbGF5bGlzdElkJywgJ3BsYXlsaXN0SWQnLCB7dW5pcXVlOiBmYWxzZX0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBvcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRiID0gb3BlblJlcXVlc3QucmVzdWx0O1xuICAgIH07XG4gIH1cblxuICBjaGVja1JlcXVpcmVtZW50cygpIHtcbiAgICByZXR1cm4gJ2luZGV4ZWREQicgaW4gd2luZG93O1xuICB9XG5cbiAgLy9UT0RPOiBuZWVkIHRvIGFkZCBlcnJvciBwcm9jZXNzaW5nXG4gIHNhdmVGcmFnbWVudChmcmFnbWVudCwgcGF5bG9hZCwgc3RhdHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmKHRoaXMuZGIgPT09IG51bGwpIHtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0aGlzLmRiLnRyYW5zYWN0aW9uKHRoaXMucGx1Z2luLm9wdGlvbnMuc3RvcmFnZUZyYWdtZW50c05hbWUsIFNUT1JBR0VfV1JJVEVfTU9ERSk7XG4gICAgICBjb25zdCBzdG9yYWdlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlRnJhZ21lbnRzTmFtZSk7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gc3RvcmFnZS5hZGQoe1xuICAgICAgICAuLi5mcmFnbWVudCxcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgc3RhdHNcbiAgICAgIH0pO1xuXG4gICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwKFwiY2FjaGUtZHJpdmVyLmpzOjE3IC0gc3RvcmUgLSBvbnN1Y2Nlc3NcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3QpO1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICB9O1xuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXAoXCJjYWNoZS1kcml2ZXIuanM6MTcgLSBzdG9yZSAtIG9uZXJyb3JcIik7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybihyZXF1ZXN0KTtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgfTtcbiAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvL1RPRE86IG5lZWQgdG8gYWRkIGVycm9yIHByb2Nlc3NpbmdcbiAgc2F2ZVBsYXlsaXN0KHBsYXlsaXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZih0aGlzLmRiID09PSBudWxsKSB7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdGhpcy5kYi50cmFuc2FjdGlvbih0aGlzLnBsdWdpbi5vcHRpb25zLnN0b3JhZ2VQbGF5bGlzdHNOYW1lLCBTVE9SQUdFX1dSSVRFX01PREUpO1xuICAgICAgY29uc3Qgc3RvcmFnZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXMucGx1Z2luLm9wdGlvbnMuc3RvcmFnZVBsYXlsaXN0c05hbWUpO1xuICAgICAgY29uc3QgcmVxdWVzdCA9IHN0b3JhZ2UucHV0KHBsYXlsaXN0KTtcblxuICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cChcImNhY2hlLWRyaXZlci5qczoxNyAtIHN0b3JlIC0gb25zdWNjZXNzXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0KTtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgfTtcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwKFwiY2FjaGUtZHJpdmVyLmpzOjE3IC0gc3RvcmUgLSBvbmVycm9yXCIpO1xuICAgICAgICAvLyBjb25zb2xlLndhcm4ocmVxdWVzdCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgIH07XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0pO1xuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlQ29udHJvbGxlcjtcbiIsImltcG9ydCBSZWNTZXR0aW5nc01vZGFsSGxzSnMgZnJvbSBcIi4uL0NvbXBvbmVudHMvUmVjU2V0dGluZ3NNb2RhbEhsc0pzXCI7XG5cbmNsYXNzIFZpZXdDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocGx1Z2luKSB7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG5cbiAgICB0aGlzLnJlY0J1dHRvbkNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5zdG9wQnV0dG9uQ29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5wcm9ncmVzc0NvbnRyb2xDb21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMubGl2ZUJ1dHRvbkNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5jYWNoZWRCdXR0b25Db21wb25lbnQgPSBudWxsO1xuXG5cbiAgICB0aGlzLnJlY1NldHRpbmdzTW9kYWxDb21wb25lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5saXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjID0gW107XG4gIH1cblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRyb2xCYXIgPSB0aGlzLnBsdWdpbi5wbGF5ZXIuZ2V0Q2hpbGQoJ0NvbnRyb2xCYXInKTtcbiAgICBjb25zdCBzcGFjZSA9IGNvbnRyb2xCYXIuYWRkQ2hpbGQoJ0NvbXBvbmVudCcsIHt9LCAyKTtcbiAgICBzcGFjZS5hZGRDbGFzcygndmpzLWhsc2pzLWNvbnRyb2xzLWhvbGRlcicpO1xuXG4gICAgdGhpcy5yZW1vdmVEZWZhdWx0Q29udHJvbHMoKTtcblxuICAgIHRoaXMubGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYyA9IHRoaXMucGx1Z2luLm9wdGlvbnMubGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYy5tYXAoKHNlbGVjdG9yKSA9PiB7XG4gICAgICByZXR1cm4gY29udHJvbEJhci5jaGlsZHJlbigpLmZpbHRlcihjb21wb25lbnQgPT4gY29tcG9uZW50Lmhhc0NsYXNzKHNlbGVjdG9yKSlbMF07XG4gICAgfSkuZmlsdGVyKGNvbXBvbmVudCA9PiAhIWNvbXBvbmVudCk7XG5cbiAgICB0aGlzLmNhY2hlZEJ1dHRvbkNvbXBvbmVudCA9IHNwYWNlLmFkZENoaWxkKCdDYWNoZWRCdXR0b25IbHNKcycsIHtcbiAgICAgIGNsaWNrSGFuZGxlcjogdGhpcy5hY3RpdmVMaXZlTW9kZVxuICAgIH0sIDEpO1xuICAgIHRoaXMuY2FjaGVkQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcblxuICAgIHRoaXMubGl2ZUJ1dHRvbkNvbXBvbmVudCA9IGNvbnRyb2xCYXIuYWRkQ2hpbGQoJ0xpdmVCdXR0b25IbHNKcycsIHtcbiAgICAgIGNsaWNrSGFuZGxlcjogdGhpcy5hY3RpdmF0ZVByb2dyZXNzTW9kZVxuICAgIH0sIDIpO1xuICAgIHRoaXMubGl2ZUJ1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG5cbiAgICB0aGlzLnJlY0J1dHRvbkNvbXBvbmVudCA9IHNwYWNlLmFkZENoaWxkKCdSZWNCdXR0b25IbHNKcycsIHtcbiAgICAgIGNsaWNrSGFuZGxlcjogdGhpcy5zaG93UmVjb3JkU2V0dGluZ3NcbiAgICB9LCAxKTtcbiAgICB0aGlzLnJlY0J1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG5cbiAgICB0aGlzLnN0b3BCdXR0b25Db21wb25lbnQgPSBjb250cm9sQmFyLmFkZENoaWxkKCdTdG9wQnV0dG9uSGxzSnMnLCB7XG4gICAgICBjbGlja0hhbmRsZXI6IHRoaXMucGx1Z2luLnN0b3BSZWFsdGltZVJlY29yZFxuICAgIH0sIDEpO1xuICAgIHRoaXMuc3RvcEJ1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG5cbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudCA9IHNwYWNlLmFkZENoaWxkKCdSZWNTdGF0dXNCYXJIbHNKcycsIDEpO1xuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50LmhpZGUoKTtcblxuICAgIHRoaXMucHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50ID0gc3BhY2UuYWRkQ2hpbGQoJ1Byb2dyZXNzQ29udHJvbEhsc0pzJywge30sIDIpO1xuICAgIHRoaXMucHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50LmhpZGUoKTtcblxuICAgIHRoaXMuYWN0aXZlTGl2ZU1vZGUoKTtcbiAgfTtcblxuICByZW1vdmVEZWZhdWx0Q29udHJvbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udHJvbEJhciA9IHRoaXMucGx1Z2luLnBsYXllci5nZXRDaGlsZCgnQ29udHJvbEJhcicpO1xuICAgIGNvbnRyb2xCYXIucmVtb3ZlQ2hpbGQoJ1Byb2dyZXNzQ29udHJvbCcpO1xuICAgIGNvbnRyb2xCYXIucmVtb3ZlQ2hpbGQoJ1NlZWtUb0xpdmUnKTtcbiAgICBjb250cm9sQmFyLnJlbW92ZUNoaWxkKCdMaXZlRGlzcGxheScpO1xuICB9O1xuXG4gIGFjdGl2ZUxpdmVNb2RlID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnNob3dPdGhlckNvbnRyb2woKTtcbiAgICAgIHRoaXMuc2hvd0xpdmVDb250cm9sKCk7XG4gICAgICB0aGlzLmhpZGVQcm9ncmVzc0NvbnRyb2woKTtcbiAgICAgIHRoaXMuaGlkZVJlY0NvbnRyb2woKTtcbiAgICAgIHRoaXMucGx1Z2luLnBsYXllci5saXZlVHJhY2tlci5zZWVrVG9MaXZlRWRnZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMucGx1Z2luLnBsYXllci5sb2cud2FybihlLm1lc3NhZ2UpXG4gICAgfVxuICB9O1xuXG4gIGFjdGl2YXRlUHJvZ3Jlc3NNb2RlID0gKCkgPT4ge1xuICAgIGlmKHRoaXMucGx1Z2luLnN0YXRlLnJlY29yZEluUHJvY2Vzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNob3dPdGhlckNvbnRyb2woKTtcbiAgICB0aGlzLnNob3dQcm9ncmVzc0NvbnRyb2woKTtcbiAgICB0aGlzLmhpZGVMaXZlQ29udHJvbCgpO1xuICAgIHRoaXMuaGlkZVJlY0NvbnRyb2woKTtcbiAgfTtcblxuICBzaG93UmVjb3JkU2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgdGhpcy5yZWNTZXR0aW5nc01vZGFsQ29tcG9uZW50ID0gbmV3IFJlY1NldHRpbmdzTW9kYWxIbHNKcyh0aGlzLnBsdWdpbi5wbGF5ZXIsIHRoaXMucGx1Z2luLm9wdGlvbnMpO1xuICAgIHRoaXMucGx1Z2luLnBsYXllci5hZGRDaGlsZCh0aGlzLnJlY1NldHRpbmdzTW9kYWxDb21wb25lbnQpO1xuICAgIHRoaXMucmVjU2V0dGluZ3NNb2RhbENvbXBvbmVudC5vcGVuKCk7XG4gIH07XG5cbiAgYWN0aXZhdGVSZWNvcmRNb2RlID0gKCkgPT4ge1xuICAgIHRoaXMucmVjU2V0dGluZ3NNb2RhbENvbXBvbmVudC5jbG9zZSgpO1xuICAgIHRoaXMuaGlkZVByb2dyZXNzQ29udHJvbCgpO1xuICAgIHRoaXMuaGlkZUxpdmVDb250cm9sKCk7XG4gICAgdGhpcy5oaWRlT3RoZXJDb250cm9sKCk7XG4gICAgdGhpcy5zaG93UmVjQ29udHJvbCgpO1xuICB9O1xuXG4gIHNob3dSZWNDb250cm9sID0gKCkgPT4ge1xuICAgIGNvbnN0IG1heFJlY29yZFNlY29uZHMgPSB0aGlzLnBsdWdpbi5vcHRpb25zLm1heFJlY29yZE1pbnV0ZXMgKiA2MDtcbiAgICB0aGlzLnBsdWdpbi5wbGF5ZXIuYWRkQ2xhc3MoJ3Zqcy1obHNqcy1yZWNvcmQtc3RhcnRlZCcpO1xuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50LnVwZGF0ZVJlY29yZExlZnRUaW1lKG1heFJlY29yZFNlY29uZHMpO1xuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50LnVwZGF0ZVJlY29yZFRpbWUoMCk7XG4gICAgbGV0IGEgPSAxO1xuICAgIHRoaXMucmVjb3JkVXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZihhID49IG1heFJlY29yZFNlY29uZHMpIHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc3RvcFJlYWx0aW1lUmVjb3JkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudC51cGRhdGVSZWNvcmRUaW1lKGErKyk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICB0aGlzLnN0b3BCdXR0b25Db21wb25lbnQuc2hvdygpO1xuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50LnNob3coKTtcbiAgfTtcblxuICBoaWRlUmVjQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLnBsdWdpbi5wbGF5ZXIucmVtb3ZlQ2xhc3MoJ3Zqcy1obHNqcy1yZWNvcmQtc3RhcnRlZCcpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yZWNvcmRVcGRhdGVJbnRlcnZhbCk7XG4gICAgdGhpcy5zdG9wQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudC5oaWRlKCk7XG4gIH07XG5cbiAgc2hvd1Byb2dyZXNzQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLnByb2dyZXNzQ29udHJvbENvbXBvbmVudC5zaG93KCk7XG4gICAgdGhpcy5jYWNoZWRCdXR0b25Db21wb25lbnQuc2hvdygpO1xuICB9O1xuXG4gIGhpZGVQcm9ncmVzc0NvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9ncmVzc0NvbnRyb2xDb21wb25lbnQuaGlkZSgpO1xuICAgIHRoaXMuY2FjaGVkQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcbiAgfTtcblxuICBoaWRlT3RoZXJDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMubGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQuYWRkQ2xhc3MoJ3Zqcy1obHNqcy1sci1oaWRkZW4nKSk7XG4gIH07XG5cbiAgc2hvd090aGVyQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLmxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50LnJlbW92ZUNsYXNzKCd2anMtaGxzanMtbHItaGlkZGVuJykpO1xuICB9O1xuXG5cbiAgc2hvd0xpdmVDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMubGl2ZUJ1dHRvbkNvbXBvbmVudC5zaG93KCk7XG4gICAgdGhpcy5yZWNCdXR0b25Db21wb25lbnQuc2hvdygpO1xuICB9O1xuXG4gIGhpZGVMaXZlQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLmxpdmVCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuICAgIHRoaXMucmVjQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcbiAgfTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3Q29udHJvbGxlcjtcbiIsImltcG9ydCB7ZmFjZVVVSUR9IGZyb20gXCIuLi91dGlscy91dWlkXCI7XG5cbmV4cG9ydCBjbGFzcyBGcmFnbWVudE1vZGVsIHtcbiAgY29uc3RydWN0b3IoZnJhZ21lbnREYXRhKSB7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGZyYWdtZW50RGF0YS5kdXJhdGlvbiB8fCAwO1xuICAgIHRoaXMudXJsID0gZnJhZ21lbnREYXRhLnVybCB8fCAnJztcbiAgICB0aGlzLnBsYXlsaXN0SWQgPSBmcmFnbWVudERhdGEucGxheWxpc3RJZCB8fCAndG1wJztcbiAgICB0aGlzLnV1aWQgPSBmYWNlVVVJRCh0aGlzLnBsYXlsaXN0SWQgKyAnLScgKyB0aGlzLnVybC5zcGxpdCgnLycpLnBvcCgpKTtcbiAgICB0aGlzLnNhdmVkID0gZnJhZ21lbnREYXRhLnNhdmVkIHx8IGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQge0ZyYWdtZW50TW9kZWx9IGZyb20gXCIuL0ZyYWdtZW50XCI7XG5cbmNvbnN0IGNyZWF0ZVBsYXlsaXN0SGVhZGVyID0gKHRhcmdldGR1cmF0aW9uKSA9PiB7XG4gIHJldHVybiBcIiNFWFRNM1VcXG5cIiArXG4gICAgXCIjRVhULVgtVkVSU0lPTjo0XFxuXCIgK1xuICAgIFwiI0VYVC1YLVRBUkdFVERVUkFUSU9OOlwiICsgdGFyZ2V0ZHVyYXRpb24gKyBcIlxcblwiICtcbiAgICBcIiNFWFQtWC1NRURJQS1TRVFVRU5DRTowXFxuXCI7XG59O1xuY29uc3QgYWRkUGxheWxpc3RGcmFnbWVudCA9IChkdXJhY3Rpb24sIHVybCkgPT4ge1xucmV0dXJuIFwiI0VYVElORjpcIiArIGR1cmFjdGlvbiArIFwiLFxcblwiICtcbiAgdXJsICsgXCJcXG5cIjtcbn07XG5jb25zdCBjcmVhdGVQbGF5bGlzdEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIFwiI0VYVC1YLUVORExJU1RcXG5cIjtcbn07XG5cblxuZXhwb3J0IGNsYXNzIFBsYXlsaXN0TW9kZWwge1xuICBjb25zdHJ1Y3RvcihwbGF5bGlzdERhdGEpIHtcbiAgICB0aGlzLmlkID0gcGxheWxpc3REYXRhLmlkIHx8ICcnO1xuICAgIHRoaXMud2lkdGggPSBwbGF5bGlzdERhdGEud2lkdGggfHwgMzg0O1xuICAgIHRoaXMuaGVpZ2h0ID0gcGxheWxpc3REYXRhLmhlaWdodCB8fCAzODQ7XG4gICAgdGhpcy5mcmFnbWVudHMgPSBwbGF5bGlzdERhdGEuZnJhZ21lbnRzIHx8IFtdO1xuICAgIHRoaXMudGFyZ2V0ZHVyYXRpb24gPSBwbGF5bGlzdERhdGEudGFyZ2V0ZHVyYXRpb24gfHwgMDtcbiAgICB0aGlzLm1pbWUgPSBwbGF5bGlzdERhdGEubWltZSB8fCB7fTtcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IHBsYXlsaXN0RGF0YS5jcmVhdGVkQXQgfHwgRGF0ZS5ub3coKTtcbiAgICB0aGlzLnVwZGF0ZWRBdCA9IHBsYXlsaXN0RGF0YS51cGRhdGVkQXQgfHwgbnVsbDtcbiAgICB0aGlzLnJlY0ZpbmlzaGVkID0gcGxheWxpc3REYXRhLnJlY0ZpbmlzaGVkIHx8IGZhbHNlO1xuICB9XG5cbiAgYWRkRnJhZ21lbnQoZHVyYXRpb24sIHVybCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gbmV3IEZyYWdtZW50TW9kZWwoe2R1cmF0aW9uLCB1cmx9KTtcbiAgICB0aGlzLmZyYWdtZW50cy5wdXNoKGZyYWdtZW50KTtcbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH1cblxuICBmcmFnbWVudFNhdmVkKGZyYWdtZW50KSB7XG4gICAgdGhpcy5mcmFnbWVudHMgPSB0aGlzLmZyYWdtZW50cy5tYXAoKGZyYWcpID0+IHtcbiAgICAgIGlmKGZyYWcudXVpZCA9PT0gZnJhZ21lbnQudXVpZCkge1xuICAgICAgICBmcmFnLnNhdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcmFnO1xuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVkQXQgPSBEYXRlLm5vdygpO1xuICB9XG5cbiAgZmluaXNoZWQoKSB7XG4gICAgdGhpcy51cGRhdGVkQXQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMucmVjRmluaXNoZWQgPSB0cnVlO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVBsYXlsaXN0SGVhZGVyKHRoaXMudGFyZ2V0ZHVyYXRpb24pICtcbiAgICAgICh0aGlzLmZyYWdtZW50cy5maWx0ZXIoZnJhZ21lbnQgPT4gKGZyYWdtZW50LnNhdmVkKSlcbiAgICAgICAgLm1hcChmcmFnbWVudCA9PiAoYWRkUGxheWxpc3RGcmFnbWVudChmcmFnbWVudC5kdXJhdGlvbiwgZnJhZ21lbnQudXVpZCkpKS5qb2luKCcnKSkgK1xuICAgICAgY3JlYXRlUGxheWxpc3RGb290ZXIoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzQnV0dG9uQ2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY2hlZEJ1dHRvbkhsc0pzIGV4dGVuZHMgVmlkZW9Kc0J1dHRvbkNsYXNzIHtcbiAgXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKHRhZywgcHJvcHMgPSB7fSwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgdGhpcy5ub25JY29uQ29udHJvbCA9IHRydWU7XG5cbiAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgLy8gY2xhc3NOYW1lOiAndmpzLWxpdmUtZGlzcGxheScsXG4gICAgICAvLyBpbm5lckhUTUw6ICdEVlInLFxuICAgICAgY2xhc3NOYW1lOiAndmpzLXNlZWstdG8tbGl2ZS1jb250cm9sJyxcbiAgICAgIGlubmVySFRNTDogJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwidmpzLWljb24tcGxhY2Vob2xkZXJcIj48L3NwYW4+TElWRScsXG4gICAgfSwgcHJvcHMpO1xuXG4gICAgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2FyaWEtbGl2ZSc6ICdPbidcbiAgICB9LCBhdHRyaWJ1dGVzKTtcblxuICAgIHJldHVybiBzdXBlci5jcmVhdGVFbCh0YWcsIHByb3BzLCBhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpIHtcbiAgICB0aGlzLmNvbnRyb2xUZXh0XyA9ICdTdHJlYW0gVHlwZSc7XG4gICAgc3VwZXIuY3JlYXRlQ29udHJvbFRleHRFbChlbCk7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzQnV0dG9uQ2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVCdXR0b25IbHNKcyBleHRlbmRzIFZpZGVvSnNCdXR0b25DbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKHRhZywgcHJvcHMgPSB7fSwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgdGhpcy5ub25JY29uQ29udHJvbCA9IHRydWU7XG5cbiAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWNvbnRyb2wgdmpzLXNlZWstdG8tbGl2ZS1jb250cm9sIHZqcy1hdC1saXZlLWVkZ2UnLFxuICAgICAgaW5uZXJIVE1MOiAnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ2anMtaWNvbi1wbGFjZWhvbGRlclwiPjwvc3Bhbj5MSVZFJyxcbiAgICB9LCBwcm9wcyk7XG5cbiAgICBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYXJpYS1saXZlJzogJ29mZidcbiAgICB9LCBhdHRyaWJ1dGVzKTtcblxuICAgIHJldHVybiBzdXBlci5jcmVhdGVFbCh0YWcsIHByb3BzLCBhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpIHtcbiAgICB0aGlzLmNvbnRyb2xUZXh0XyA9ICdTdHJlYW0gVHlwZSc7XG4gICAgc3VwZXIuY3JlYXRlQ29udHJvbFRleHRFbChlbCk7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzUHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ1Byb2dyZXNzQ29udHJvbCcpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQ29udHJvbEhsc0pzIGV4dGVuZHMgVmlkZW9Kc1Byb2dyZXNzQ29udHJvbENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gIH1cbn1cbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuY29uc3QgVmlkZW9Kc0J1dHRvbkNsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNCdXR0b25IbHNKcyBleHRlbmRzIFZpZGVvSnNCdXR0b25DbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKHRhZywgcHJvcHMgPSB7fSwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgdGhpcy5ub25JY29uQ29udHJvbCA9IHRydWU7XG5cbiAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWNvbnRyb2wgdmpzLXNlZWstdG8tbGl2ZS1jb250cm9sJyxcbiAgICAgIGlubmVySFRNTDogJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwidmpzLWljb24tcGxhY2Vob2xkZXJcIj48L3NwYW4+UkVDJyxcbiAgICB9LCBwcm9wcyk7XG5cbiAgICBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYXJpYS1saXZlJzogJ09uJ1xuICAgIH0sIGF0dHJpYnV0ZXMpO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKHRhZywgcHJvcHMsIGF0dHJpYnV0ZXMpO1xuICB9XG5cbiAgY3JlYXRlQ29udHJvbFRleHRFbChlbCkge1xuICAgIHRoaXMuY29udHJvbFRleHRfID0gJ1N0YXJ0IFJlY29yZCc7XG4gICAgc3VwZXIuY3JlYXRlQ29udHJvbFRleHRFbChlbCk7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuaW1wb3J0IGZvcm1hdFRpbWUgZnJvbSAnLi4vdXRpbHMvZm9ybWF0LXRpbWUnO1xuXG5jb25zdCBWaWRlb0pzQ29tcG9uZW50Q2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY1N0YXR1c0Jhckhsc0pzIGV4dGVuZHMgVmlkZW9Kc0NvbXBvbmVudENsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucykpO1xuICB9XG5cbiAgY3JlYXRlRWwoKSB7XG4gICAgdGhpcy5ub25JY29uQ29udHJvbCA9IHRydWU7XG4gICAgY29uc3QgZWxlbSA9IHN1cGVyLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICd2anMtY29udHJvbCB2anMtaGxzanMtbHItcmVjLXN0YXR1cy1iYXInLFxuICAgICAgaW5uZXJIVE1MOiAnPHNwYW4gY2xhc3M9XCJ2anMtaGxzanMtbHItcmVjLWluZGljYXRvclwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbWQtMTBcIj5maWJlcl9tYW51YWxfcmVjb3JkPC9pPlJFQzwvc3Bhbj4nXG4gICAgfSk7XG5cblxuICAgIHRoaXMucmVjb3JkZWRFbF8gPSBEb20uY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtbHItcmVjb3JkZWQnLFxuICAgICAgaW5uZXJUZXh0OiAnLS06LS06LS0nXG4gICAgfSwge1xuICAgICAgJ2FyaWEtbGl2ZSc6ICdvZmYnLFxuICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgIH0pO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5yZWNvcmRlZEVsXyk7XG5cbiAgICBlbGVtLmFwcGVuZENoaWxkKFxuICAgICAgRG9tLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtbHItZGl2aWRlcicsXG4gICAgICAgIGlubmVyVGV4dDogJy8nXG4gICAgICB9LCB7XG4gICAgICAgICdhcmlhLWxpdmUnOiAnb2ZmJyxcbiAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5yZWNvcmRMZWZ0RWxfID0gRG9tLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLWxyLXJlY29yZC1sZWZ0JyxcbiAgICAgIGlubmVyVGV4dDogJy0tOi0tOi0tJ1xuICAgIH0sIHtcbiAgICAgICdhcmlhLWxpdmUnOiAnb2ZmJyxcbiAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcbiAgICB9KTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKHRoaXMucmVjb3JkTGVmdEVsXyk7XG5cbiAgICB0aGlzLnVwZGF0ZVJlY29yZFRpbWUoMCk7XG4gICAgdGhpcy51cGRhdGVSZWNvcmRMZWZ0VGltZSg2MCAqIDYwKTtcbiAgICByZXR1cm4gZWxlbTtcbiAgfTtcblxuICB1cGRhdGVSZWNvcmRUaW1lKHRpbWUpIHtcbiAgICBpZih0aGlzLnJlY29yZGVkRWxfKSB7XG4gICAgICB0aGlzLnJlY29yZGVkRWxfLmlubmVyVGV4dCA9IGZvcm1hdFRpbWUodGltZSk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZVJlY29yZExlZnRUaW1lKHRpbWUpIHtcbiAgICBpZih0aGlzLnJlY29yZExlZnRFbF8pIHtcbiAgICAgIHRoaXMucmVjb3JkTGVmdEVsXy5pbm5lclRleHQgPSBmb3JtYXRUaW1lKHRpbWUpO1xuICAgIH1cbiAgfTtcblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMucmVjb3JkZWRFbF8gPSBudWxsO1xuICAgIHRoaXMucmVjb3JkTGVmdEVsXyA9IG51bGw7XG5cbiAgICBzdXBlci5kaXNwb3NlKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzQnV0dG9uQ2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3BCdXR0b25IbHNKcyBleHRlbmRzIFZpZGVvSnNCdXR0b25DbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKHRhZywgcHJvcHMgPSB7fSwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgdGhpcy5ub25JY29uQ29udHJvbCA9IGZhbHNlO1xuXG4gICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1jb250cm9sIHZqcy1obHNqcy1sci1zdG9wJyxcbiAgICAgIGlubmVySFRNTDogJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5zdG9wPC9pPicsXG4gICAgfSwgcHJvcHMpO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKHRhZywgcHJvcHMsIGF0dHJpYnV0ZXMpO1xuICB9XG5cbiAgY3JlYXRlQ29udHJvbFRleHRFbChlbCkge1xuICAgIHRoaXMuY29udHJvbFRleHRfID0gJ1N0b3AgUmVjb3JkJztcbiAgICBzdXBlci5jcmVhdGVDb250cm9sVGV4dEVsKGVsKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgJy4vcGx1Z2luLnNjc3MnO1xuaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuY29uc3QgUGx1Z2luID0gdmlkZW9qcy5nZXRQbHVnaW4oJ3BsdWdpbicpO1xuaW1wb3J0IHt2ZXJzaW9uIGFzIFZFUlNJT059IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgUHJvZ3Jlc3NDb250cm9sSGxzSnMgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9ncmVzc0NvbnRyb2xIbHNKc1wiO1xuaW1wb3J0IExpdmVCdXR0b25IbHNKcyBmcm9tIFwiLi9jb21wb25lbnRzL0xpdmVCdXR0b25IbHNKc1wiO1xuaW1wb3J0IENhY2hlZEJ1dHRvbkhsc0pzIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FjaGVkQnV0dG9uSGxzSnNcIjtcbmltcG9ydCBSZWNCdXR0b25IbHNKcyBmcm9tIFwiLi9jb21wb25lbnRzL1JlY0J1dHRvbkhsc0pzXCI7XG5pbXBvcnQgU3RvcEJ1dHRvbkhsc0pzIGZyb20gXCIuL2NvbXBvbmVudHMvU3RvcEJ1dHRvbkhsc0pzXCI7XG5pbXBvcnQgUmVjU3RhdHVzQmFySGxzSnMgZnJvbSBcIi4vY29tcG9uZW50cy9SZWNTdGF0dXNCYXJIbHNKc1wiO1xuaW1wb3J0IFZpZXdDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJzL1ZpZXdDb250cm9sbGVyXCI7XG5pbXBvcnQgU3RvcmFnZUNvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvU3RvcmFnZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBSZWFsdGltZVJlY29yZENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyXCI7XG5cblxuLyoqXG4gKiBBIERlZmF1bHQgY29uZmlndXJhdGlvblxuICogQHR5cGVkZWYge09iamVjdH0gRGVmYXVsdENvbmZpZ1xuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gbGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYyAtIExpc3Qgb2YgaW50ZXJmYWNlIGVsZW1lbnRzIHRoYXQgc2hvdWxkIGJlIGhpZGRlbiBpbiByZWNvcmRpbmcgbW9kZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHN0b3JhZ2VEYk5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgSW5kZXhlZERCIGRhdGFiYXNlIHVzZWQgdG8gc2F2ZSByZWNvcmRzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc3RvcmFnZVBsYXlsaXN0c05hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcGxheWxpc3RzIHN0b3JhZ2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdG9yYWdlRnJhZ21lbnRzTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBmcmFnbWVudHMgc3RvcmFnZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IG1heFJlY29yZE1pbnV0ZXMgLSBNYXhpbXVtIHJlY29yZCBkdXJhdGlvbiBpbiBtaW51dGVzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGFsbG93ZWQgLSBFbmFibGUgcmVjb3JkaW5nIGZ1bmN0aW9uYWxpdHlcbiAqIEBwcm9wZXJ0eSB7bnVsbCB8IGNhbGxiYWNrPHN0cmluZyB8IEhUTUxFbGVtZW50Pn0gbm90QWxsb3dlZENvbnRlbnQgLSBUaGlzIGNvbnRlbnQgd2lsbCBiZSBkaXNwbGF5ZWQgaWYgcmVjb3JkaW5nIG5vdCBhbGxvd2VkXG4gKiBAcHJvcGVydHkge29iamVjdH0gcmVhbHRpbWVSZWNvcmQgLSBSZWFsdGltZSByZWNvcmRpbmcgY29uZmlndXJhdGlvblxuICogQHByb3BlcnR5IHtib29sZWFufSByZWFsdGltZVJlY29yZC5hbGxvd2VkIC0gRW5hYmxlIHJlYWx0aW1lIHJlY29yZGluZyBmdW5jdGlvbmFsaXR5XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHJlYWx0aW1lUmVjb3JkLmhpZGVJZk5vdEFsbG93ZWQgLSBIaWRlIHJlYWx0aW1lIHJlY29yZGluZyB0YWIgaWYgcmVhbHRpbWUgcmVjb3JkaW5nIG5vdCBhbGxvd2VkXG4gKiBAcHJvcGVydHkge251bGwgfCBjYWxsYmFjazxzdHJpbmcgfCBIVE1MRWxlbWVudD59IHJlYWx0aW1lUmVjb3JkLm1vZGFsSGVhZGVyQ29udGVudCAtIEhlYWRlciBjb250ZW50IG9mIHRoZSByZWFsdGltZSByZWNvcmRpbmcgdGFiXG4gKiBAcHJvcGVydHkge251bGwgfCBjYWxsYmFjazxzdHJpbmcgfCBIVE1MRWxlbWVudD59IHJlYWx0aW1lUmVjb3JkLm1vZGFsRm9vdGVyQ29udGVudCAtIEZvb3RlciBjb250ZW50IG9mIHRoZSByZWFsdGltZSByZWNvcmRpbmcgdGFiXG4gKiBAcHJvcGVydHkge251bGwgfCBjYWxsYmFjazxzdHJpbmcgfCBIVE1MRWxlbWVudD59IHJlYWx0aW1lUmVjb3JkLm5vdEFsbG93ZWRDb250ZW50IC0gVGhpcyBjb250ZW50IHdpbGwgYmUgZGlzcGxheWVkIGlmIHJlYWx0aW1lIHJlY29yZGluZyBub3QgYWxsb3dlZFxuICogQHByb3BlcnR5IHtudWxsIHwgY2FsbGJhY2s8UHJvbWlzZTxvYmplY3Q+Pn0gcmVhbHRpbWVSZWNvcmQuZ2V0UmVjb3JkTWltZSAtIE9iamVjdCByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgaW5jbHVkZWQgaW4gcGxheWxpc3QgYW5kIGNhbiBiZSB1c2VkIGxhdGVyXG4gKi9cblxuLyoqXG4gKlxuICogQHR5cGUge0RlZmF1bHRDb25maWd9XG4gKi9cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBsaXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjOiBbJ3Zqcy1wbGF5LWNvbnRyb2wnLCAndmpzLXF1YWxpdHktc2VsZWN0b3InXSxcbiAgc3RvcmFnZURiTmFtZTogJ3Zqcy1obHNqcy1scicsXG4gIHN0b3JhZ2VQbGF5bGlzdHNOYW1lOiAncGxheWxpc3RzJyxcbiAgc3RvcmFnZUZyYWdtZW50c05hbWU6ICdmcmFnbWVudHMnLFxuICBtYXhSZWNvcmRNaW51dGVzOiA2MCxcbiAgYWxsb3dlZDogdHJ1ZSxcbiAgbm90QWxsb3dlZENvbnRlbnQ6IG51bGwsXG4gIHJlYWx0aW1lUmVjb3JkOiB7XG4gICAgYWxsb3dlZDogdHJ1ZSxcbiAgICBtb2RhbEhlYWRlckNvbnRlbnQ6IG51bGwsXG4gICAgbW9kYWxGb290ZXJDb250ZW50OiBudWxsLFxuICAgIG5vdEFsbG93ZWRDb250ZW50OiBudWxsLFxuICAgIGdldFJlY29yZE1pbWU6IG51bGwsXG4gIH1cbn07XG5cbmNsYXNzIEhsc0pTTGl2ZVJlY29yZFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG5cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcbiAgICB0aGlzLm9wdGlvbnMgPSB2aWRlb2pzLm1lcmdlT3B0aW9ucyhkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5zdG9yYWdlQ29udHJvbGxlciA9IG5ldyBTdG9yYWdlQ29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLnZpZXdDb250cm9sbGVyID0gbmV3IFZpZXdDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMucmVhbHRpbWVSZWNvcmRDb250cm9sbGVyID0gbmV3IFJlYWx0aW1lUmVjb3JkQ29udHJvbGxlcih0aGlzKTtcblxuICAgIHBsYXllci5vbigncGxheWluZycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICBpZih0aGlzLnN0YXRlLmluaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtpbml0OiB0cnVlfSk7XG4gICAgaWYodGhpcy5jaGVja1JlcXVpcmVtZW50cygpKSB7XG4gICAgICB0aGlzLnBsYXllci5hZGRDbGFzcygndmpzLWhscy1saXZlLXJlY29yZCcpO1xuICAgICAgdGhpcy5wbGF5ZXIub24oJ3BhdXNlJywgdGhpcy52aWV3Q29udHJvbGxlci5hY3RpdmF0ZVByb2dyZXNzTW9kZSk7XG4gICAgICB0aGlzLnZpZXdDb250cm9sbGVyLmluaXQoKTtcbiAgICAgIHRoaXMuc3RvcmFnZUNvbnRyb2xsZXIuaW5pdCgpO1xuICAgICAgdGhpcy5yZWFsdGltZVJlY29yZENvbnRyb2xsZXIuaW5pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWRlb2pzLmxvZy53YXJuKCdIbHNKU0xpdmVSZWNvcmRQbHVnaW46IGNhbm5vdCBiZSBpbml0aWFsaXplZCBiZWNhdXNlIG9uZSBvciBtb3JlIG9mIHRoZSByZXF1aXJlbWVudHMgYXJlIG5vdCBtZXQuJyk7XG4gICAgfVxuICB9O1xuXG4gIGNoZWNrUmVxdWlyZW1lbnRzID0gKCkgPT4ge1xuICAgIGlmKCF0aGlzLmdldEhsc0pzKCkpIHtcbiAgICAgIHZpZGVvanMubG9nLndhcm4oJ0hsc0pTTGl2ZVJlY29yZFBsdWdpbjogSExTLkpTIHBsdWdpbiBub3QgZm91bmQuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuc3RvcmFnZUNvbnRyb2xsZXIuY2hlY2tSZXF1aXJlbWVudHMoKSkge1xuICAgICAgdmlkZW9qcy5sb2cud2FybignSGxzSlNMaXZlUmVjb3JkUGx1Z2luOiBUaGlzIGJyb3dzZXIgZG9lc25cXCd0IHN1cHBvcnQgSW5kZXhlZERCLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBnZXRIbHNKcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIudGVjaCh7IElXaWxsVXNlVGhpc0luUGx1Z2luOiB0cnVlIH0pLnNvdXJjZUhhbmRsZXJfLmhscztcbiAgfTtcblxuICBzdGFydFJlYWx0aW1lUmVjb3JkKGxldmVsSWQpIHtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVjb3JkSW5Qcm9jZXNzOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmdldEhsc0pzKCkuY3VycmVudExldmVsID0gbGV2ZWxJZCAqIDE7XG4gICAgdGhpcy52aWV3Q29udHJvbGxlci5hY3RpdmF0ZVJlY29yZE1vZGUoKTtcblxuICAgIHRoaXMucmVhbHRpbWVSZWNvcmRDb250cm9sbGVyLnN0YXJ0UmVjb3JkKCk7XG4gIH1cblxuICBzdG9wUmVhbHRpbWVSZWNvcmQgPSAoKSA9PiB7XG4gICAgdGhpcy5yZWFsdGltZVJlY29yZENvbnRyb2xsZXIuc3RvcFJlY29yZCgpO1xuICAgIHRoaXMudmlld0NvbnRyb2xsZXIuYWN0aXZlTGl2ZU1vZGUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlY29yZEluUHJvY2VzczogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLmdldEhsc0pzKCkuY3VycmVudExldmVsID0gLTE7XG4gIH07XG5cbiAgaGFuZGxlU3RhdGVDaGFuZ2VkKGUpIHtcblxuICB9XG59XG5cbkhsc0pTTGl2ZVJlY29yZFBsdWdpbi5WRVJTSU9OID0gVkVSU0lPTjtcblxuSGxzSlNMaXZlUmVjb3JkUGx1Z2luLmRlZmF1bHRTdGF0ZSA9IHtcbiAgcmVjb3JkQWxsb3dlZDogdHJ1ZSxcbiAgcmVjb3JkSW5Qcm9jZXNzOiBmYWxzZSxcbiAgaW5pdDogZmFsc2Vcbn07XG5cbnZpZGVvanMucmVnaXN0ZXJQbHVnaW4oJ2hsc0pTTGl2ZVJlY29yZCcsIEhsc0pTTGl2ZVJlY29yZFBsdWdpbik7XG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdQcm9ncmVzc0NvbnRyb2xIbHNKcycsIFByb2dyZXNzQ29udHJvbEhsc0pzKTtcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ0xpdmVCdXR0b25IbHNKcycsIExpdmVCdXR0b25IbHNKcyk7XG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdDYWNoZWRCdXR0b25IbHNKcycsIENhY2hlZEJ1dHRvbkhsc0pzKTtcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ1JlY0J1dHRvbkhsc0pzJywgUmVjQnV0dG9uSGxzSnMpO1xudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnU3RvcEJ1dHRvbkhsc0pzJywgU3RvcEJ1dHRvbkhsc0pzKTtcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ1JlY1N0YXR1c0Jhckhsc0pzJywgUmVjU3RhdHVzQmFySGxzSnMpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogRklYTUU6IG5lZWQgcmVwbGFjZSBjb2xvciBmdW5jdGlvbnMgaHR0cHM6Ly9zYXNzLWxhbmcuY29tL2RvY3VtZW50YXRpb24vbW9kdWxlcyNvdGhlcl9jb2xvcl9mdW5jdGlvbnMgKi9cXG4vKiBNYXRlcmlhbCBpY29ucyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnMvdjQ4L2ZsVWhScTZ0elpjbFFFSi1WZGctSXVpYURzTmMud29mZjIpIGZvcm1hdChcXFwid29mZjJcXFwiKTsgfVxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbiAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyB9XFxuXFxuLyogUnVsZXMgZm9yIHNpemluZyB0aGUgaWNvbi4gKi9cXG4ubWF0ZXJpYWwtaWNvbnMubWQtOCB7XFxuICBmb250LXNpemU6IDlweDsgfVxcblxcbi5tYXRlcmlhbC1pY29ucy5tZC0xMCB7XFxuICBmb250LXNpemU6IDEwcHg7IH1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMubWQtMTIge1xcbiAgZm9udC1zaXplOiAxMnB4OyB9XFxuXFxuLm1hdGVyaWFsLWljb25zLm1kLTE4IHtcXG4gIGZvbnQtc2l6ZTogMThweDsgfVxcblxcbi5tYXRlcmlhbC1pY29ucy5tZC0yNCB7XFxuICBmb250LXNpemU6IDI0cHg7IH1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMubWQtMzYge1xcbiAgZm9udC1zaXplOiAzNnB4OyB9XFxuXFxuLm1hdGVyaWFsLWljb25zLm1kLTQ4IHtcXG4gIGZvbnQtc2l6ZTogNDhweDsgfVxcblxcbi8qIFJ1bGVzIGZvciB1c2luZyBpY29ucyBhcyBibGFjayBvbiBhIGxpZ2h0IGJhY2tncm91bmQuICovXFxuLm1hdGVyaWFsLWljb25zLm1kLWRhcmsge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMubWQtZGFyay5tZC1pbmFjdGl2ZSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsgfVxcblxcbi8qIFJ1bGVzIGZvciB1c2luZyBpY29ucyBhcyB3aGl0ZSBvbiBhIGRhcmsgYmFja2dyb3VuZC4gKi9cXG4ubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQge1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLm1hdGVyaWFsLWljb25zLm1kLWxpZ2h0Lm1kLWluYWN0aXZlIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IH1cXG5cXG4vKiBFbmQgbWF0ZXJpYWwgaWNvbnMgKi9cXG46cm9vdCB7XFxuICAtLW1haW4tY29sb3I6IHJlZDtcXG4gIC0tYmFzZS1mb250LXNpemU6IDk7XFxuICAtLWZvbnQtc2l6ZTogNzsgfVxcblxcbi52aWRlby1qcyAudmpzLWhsc2pzLWZvcm0tZ3JvdXAge1xcbiAgcGFkZGluZzogNXB4IDA7IH1cXG4gIC52aWRlby1qcyAudmpzLWhsc2pzLWZvcm0tZ3JvdXAgLnZqcy1obHNqcy1mb3JtLWxhYmVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDsgfVxcbiAgLnZpZGVvLWpzIC52anMtaGxzanMtZm9ybS1ncm91cCAudmpzLWhsc2pzLWZvcm0taW5wdXQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4udmlkZW8tanMgLnZqcy1obHNqcy1idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlcjogMC4wNjY2NmVtIHNvbGlkICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkIzMzNGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgNTEsIDYzLCAwLjcpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zczsgfVxcbiAgLnZpZGVvLWpzIC52anMtaGxzanMtYnV0dG9uOmRpc2FibGVkLCAudmlkZW8tanMgLnZqcy1obHNqcy1idXR0b24uZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjY7IH1cXG5cXG4udmlkZW8tanMgLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7IH1cXG5cXG4udmlkZW8tanMgLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLW5hdiB7XFxuICB3aWR0aDogMTQwcHg7XFxuICBmbGV4OiAxNDBweCAwO1xcbiAgZmxleC1zaHJpbms6IDA7IH1cXG5cXG4udmlkZW8tanMgLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLW5hdi1lbGVtIHtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcbiAgLnZpZGVvLWpzIC52anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYtZWxlbS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOyB9XFxuICAudmlkZW8tanMgLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLW5hdi1lbGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTsgfVxcblxcbi52aWRlby1qcyAudmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtYm9keSB7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7IH1cXG5cXG4udmlkZW8tanMgLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWVsZW0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7IH1cXG4gIC52aWRlby1qcyAudmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtZWxlbS5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi52aWRlby1qcyAudmpzLWhsc2pzLWxyLXJlYy1zZXR0aW5ncy52anMtbW9kYWwtZGlhbG9nIC52anMtbW9kYWwtZGlhbG9nLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi52aWRlby1qcyAudmpzLWhsc2pzLWxyLXJlYy1zZXR0aW5ncy52anMtbW9kYWwtZGlhbG9nIC52anMtaGxzanMtc3RhcnQtcmVjb3JkIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4OyB9XFxuXFxuLnZpZGVvLWpzLnZqcy1obHNqcy1yZWNvcmQtc3RhcnRlZCAudmpzLXRlY2gge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLnZpZGVvLWpzIC52anMtaGxzanMtbHItaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi52aWRlby1qcy52anMtaGxzanMtbGl2ZS1yZWNvcmQge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC52aWRlby1qcy52anMtaGxzanMtbGl2ZS1yZWNvcmQudmpzLXVzZXItaW5hY3RpdmUgLnZqcy1jb250cm9sLWJhciB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG5cXG4udmlkZW8tanMgLnZqcy1obHNqcy1sci1zdG9wIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi52aWRlby1qcyAudmpzLWhsc2pzLWNvbnRyb2xzLWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogYXV0bztcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsgfVxcbiAgLnZpZGVvLWpzIC52anMtaGxzanMtY29udHJvbHMtaG9sZGVyIC52anMtbGl2ZS1kaXNwbGF5IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAudmlkZW8tanMgLnZqcy1obHNqcy1jb250cm9scy1ob2xkZXIgLnZqcy1jb250cm9sLnZqcy1hdC1saXZlLWVkZ2Uge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC52aWRlby1qcyAudmpzLWhsc2pzLWNvbnRyb2xzLWhvbGRlciAudmpzLXByb2dyZXNzLWNvbnRyb2wgLnZqcy1sb2FkLXByb2dyZXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4MzcwMDsgfVxcbiAgICAudmlkZW8tanMgLnZqcy1obHNqcy1jb250cm9scy1ob2xkZXIgLnZqcy1wcm9ncmVzcy1jb250cm9sIC52anMtbG9hZC1wcm9ncmVzcyBkaXYge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDE3NywgMTA2LCAwLjk1KTsgfVxcbiAgLnZpZGVvLWpzIC52anMtaGxzanMtY29udHJvbHMtaG9sZGVyIC52anMtcHJvZ3Jlc3MtY29udHJvbDpob3ZlciAudmpzLWxvYWQtcHJvZ3Jlc3Mge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4OyB9XFxuICAudmlkZW8tanMgLnZqcy1obHNqcy1jb250cm9scy1ob2xkZXIgLnZqcy1wcm9ncmVzcy1jb250cm9sOmhvdmVyIC52anMtbW91c2UtZGlzcGxheSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7IH1cXG5cXG4udmlkZW8tanMgLnZqcy1obHNqcy1sci1yZWMtc3RhdHVzLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gIC52aWRlby1qcyAudmpzLWhsc2pzLWxyLXJlYy1zdGF0dXMtYmFyIC52anMtaGxzanMtbHItcmVjLWluZGljYXRvciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMXB4OyB9XFxuICAudmlkZW8tanMgLnZqcy1obHNqcy1sci1yZWMtc3RhdHVzLWJhciAudmpzLWhsc2pzLWxyLWRpdmlkZXIge1xcbiAgICBwYWRkaW5nOiAwIDJweDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkQ6XFxcXHByb2plY3RzXFxcXGFsdGVuYV9zdHJlYW1cXFxcdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC9zcmNcXFxccGx1Z2luLnNjc3NcIixcIkQ6XFxcXHByb2plY3RzXFxcXGFsdGVuYV9zdHJlYW1cXFxcdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC9zcmNcXFxcc3R5bGVzXFxcXGZvcm1zLnNjc3NcIixcIkQ6XFxcXHByb2plY3RzXFxcXGFsdGVuYV9zdHJlYW1cXFxcdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC9zcmNcXFxcc3R5bGVzXFxcXGJ1dHRvbnMuc2Nzc1wiLFwiRDpcXFxccHJvamVjdHNcXFxcYWx0ZW5hX3N0cmVhbVxcXFx2aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3NyY1xcXFxzdHlsZXNcXFxcdmVydGljYWwtdGFicy5zY3NzXCIsXCJEOlxcXFxwcm9qZWN0c1xcXFxhbHRlbmFfc3RyZWFtXFxcXHZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvc3JjXFxcXHN0eWxlc1xcXFxtb2RhbFxcXFxyZWMtc2V0dGluZ3Muc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwR0FBQTtBQUNBLG1CQUFBO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwR0FBMEcsRUFBQTs7QUFHNUc7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFDQUFxQztFQUNyQyxtQ0FBbUMsRUFBQTs7QUFHckMsK0JBQUE7QUFDQTtFQUF1QixjQUFjLEVBQUE7O0FBQ3JDO0VBQXdCLGVBQWUsRUFBQTs7QUFDdkM7RUFBd0IsZUFBZSxFQUFBOztBQUN2QztFQUF3QixlQUFlLEVBQUE7O0FBQ3ZDO0VBQXdCLGVBQWUsRUFBQTs7QUFDdkM7RUFBd0IsZUFBZSxFQUFBOztBQUN2QztFQUF3QixlQUFlLEVBQUE7O0FBRXZDLDBEQUFBO0FBQ0E7RUFBMEIsMEJBQTBCLEVBQUE7O0FBQ3BEO0VBQXNDLDBCQUEwQixFQUFBOztBQUVoRSx5REFBQTtBQUNBO0VBQTJCLFlBQTZCLEVBQUE7O0FBQ3hEO0VBQXVDLCtCQUErQixFQUFBOztBQUV0RSx1QkFBQTtBQUVBO0VBQ0UsaUJBQWE7RUFDYixtQkFBaUI7RUFDakIsY0FBWSxFQUFBOztBQUdkO0VDakRFLGNBQWMsRUFBQTtFRGlEaEI7SUMvQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTtFRDZDdkI7SUN6Q0kscUJBQXFCLEVBQUE7O0FEeUN6QjtFRWpERSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6Qix1Q0FBdUM7RUFDdkMsb0JBQW9CO0VBQ3BCLG9CQUFvQixFQUFBO0VGNkJ0QjtJRTFCSSxZQUFZLEVBQUE7O0FGMEJoQjtFR2pERSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUdoQixvQ0FBb0MsRUFBQTs7QUg0Q3RDO0VHeENFLFlBQVk7RUFDWixhQUFlO0VBQ2YsY0FBYyxFQUFBOztBSHNDaEI7RUdsQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUIsRUFBQTtFSGdDM0I7SUc5Qkksc0JBQXNCLEVBQUE7RUg4QjFCO0lHMUJJLHlCQUE0QixFQUFBOztBSDBCaEM7RUdyQkUsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTs7QUhvQmY7RUdoQkUsYUFBYTtFQUNiLGFBQWEsRUFBQTtFSGVmO0lHYkksY0FBYyxFQUFBOztBSGFsQjtFSTlDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBSjRDdkI7RUl4Q0ksaUJBQWlCLEVBQUE7O0FKd0NyQjtFQVFNLCtCQUErQjtFQUMvQiw2QkFBNkIsRUFBQTs7QUFUbkM7RUFjSSx3QkFBd0IsRUFBQTs7QUFkNUI7RUFrQkksY0FBYyxFQUFBO0VBbEJsQjtJQXNCUSxVQUFVLEVBQUE7O0FBdEJsQjtFQThCSSxlQUFlLEVBQUE7O0FBOUJuQjtFQWtDSSxhQUFhO0VBQ2IsVUFBVTtFQUNWLDJCQUEyQixFQUFBO0VBcEMvQjtJQXVDTSxlQUFlLEVBQUE7RUF2Q3JCO0lBNENRLGVBQWUsRUFBQTtFQTVDdkI7SUFrRFEseUJBQWlDLEVBQUE7SUFsRHpDO01Bb0RVLDBDQUEwQyxFQUFBO0VBcERwRDtJQTBEVSxtQkFBbUIsRUFBQTtFQTFEN0I7SUE2RFUsbUJBQW1CLEVBQUE7O0FBN0Q3QjtFQW9FSSxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5QkFBaUI7VUFBakIsaUJBQWlCLEVBQUE7RUF2RXJCO0lBMkVNLGFBQWE7SUFDYixVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQS9FdEI7SUFxRk0sY0FBYyxFQUFBXCIsXCJmaWxlXCI6XCJwbHVnaW4uc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBGSVhNRTogbmVlZCByZXBsYWNlIGNvbG9yIGZ1bmN0aW9ucyBodHRwczovL3Nhc3MtbGFuZy5jb20vZG9jdW1lbnRhdGlvbi9tb2R1bGVzI290aGVyX2NvbG9yX2Z1bmN0aW9ucyAqL1xcbi8qIE1hdGVyaWFsIGljb25zICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29ucy92NDgvZmxVaFJxNnR6WmNsUUVKLVZkZy1JdWlhRHNOYy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIC13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLyogUnVsZXMgZm9yIHNpemluZyB0aGUgaWNvbi4gKi9cXG4ubWF0ZXJpYWwtaWNvbnMubWQtOCB7IGZvbnQtc2l6ZTogOXB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTEwIHsgZm9udC1zaXplOiAxMHB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTEyIHsgZm9udC1zaXplOiAxMnB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTE4IHsgZm9udC1zaXplOiAxOHB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTI0IHsgZm9udC1zaXplOiAyNHB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTM2IHsgZm9udC1zaXplOiAzNnB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTQ4IHsgZm9udC1zaXplOiA0OHB4OyB9XFxuXFxuLyogUnVsZXMgZm9yIHVzaW5nIGljb25zIGFzIGJsYWNrIG9uIGEgbGlnaHQgYmFja2dyb3VuZC4gKi9cXG4ubWF0ZXJpYWwtaWNvbnMubWQtZGFyayB7IGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLWRhcmsubWQtaW5hY3RpdmUgeyBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsgfVxcblxcbi8qIFJ1bGVzIGZvciB1c2luZyBpY29ucyBhcyB3aGl0ZSBvbiBhIGRhcmsgYmFja2dyb3VuZC4gKi9cXG4ubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQgeyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC1saWdodC5tZC1pbmFjdGl2ZSB7IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IH1cXG5cXG4vKiBFbmQgbWF0ZXJpYWwgaWNvbnMgKi9cXG5cXG46cm9vdCB7XFxuICAtLW1haW4tY29sb3I6IHJlZDtcXG4gIC0tYmFzZS1mb250LXNpemU6IDk7XFxuICAtLWZvbnQtc2l6ZTogNztcXG59XFxuXFxuLnZpZGVvLWpzIHtcXG5cXG4gIEBpbXBvcnQgXFxcInN0eWxlcy9mb3Jtc1xcXCI7XFxuICBAaW1wb3J0IFxcXCJzdHlsZXMvYnV0dG9uc1xcXCI7XFxuICBAaW1wb3J0IFxcXCJzdHlsZXMvbW9kYWwvcmVjLXNldHRpbmdzXFxcIjtcXG5cXG4gICYudmpzLWhsc2pzLXJlY29yZC1zdGFydGVkIHtcXG4gICAgLnZqcy10ZWNoIHtcXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICB9XFxuXFxuICAudmpzLWhsc2pzLWxyLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gICYudmpzLWhsc2pzLWxpdmUtcmVjb3JkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgICYudmpzLXVzZXItaW5hY3RpdmUge1xcbiAgICAgIC52anMtY29udHJvbC1iYXIge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG5cXG5cXG4gIC52anMtaGxzanMtbHItc3RvcCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC52anMtaGxzanMtY29udHJvbHMtaG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcblxcbiAgICAudmpzLWxpdmUtZGlzcGxheSB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC52anMtY29udHJvbCB7XFxuICAgICAgJi52anMtYXQtbGl2ZS1lZGdlIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnZqcy1wcm9ncmVzcy1jb250cm9sIHtcXG4gICAgICAudmpzLWxvYWQtcHJvZ3Jlc3Mge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NCwgNTUsIDApO1xcbiAgICAgICAgZGl2IHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMTc3LCAxMDYsIDAuOTUpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIC52anMtbG9hZC1wcm9ncmVzcyB7XFxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICAgICAgICB9XFxuICAgICAgICAudmpzLW1vdXNlLWRpc3BsYXkge1xcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLnZqcy1obHNqcy1sci1yZWMtc3RhdHVzLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG5cXG4gICAgLnZqcy1obHNqcy1sci1yZWMtaW5kaWNhdG9yIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgICBtYXJnaW4tbGVmdDogMXB4O1xcbiAgICB9XFxuICAgIC52anMtaGxzanMtbHItcmVjb3JkZWQge1xcblxcbiAgICB9XFxuICAgIC52anMtaGxzanMtbHItZGl2aWRlciB7XFxuICAgICAgcGFkZGluZzogMCAycHg7XFxuICAgIH1cXG4gICAgLnZqcy1obHNqcy1sci1yZWNvcmQtbGVmdCB7XFxuXFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIudmpzLWhsc2pzLWZvcm0tZ3JvdXAge1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICAudmpzLWhsc2pzLWZvcm0tbGFiZWwge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgfVxcblxcbiAgLnZqcy1obHNqcy1mb3JtLWlucHV0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcbn1cXG5cIixcIi52anMtaGxzanMtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXI6IDAuMDY2NjZlbSBzb2xpZCAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCMzMzRjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDUxLCA2MywgMC43KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuXFxuICAmOmRpc2FibGVkLCAmLmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgfVxcbn1cXG5cIixcIi52anMtaGxzanMtdmVydGljYWwtdGFicyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcblxcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQxLCA0MSwgNDEsIDAuOCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi52anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYge1xcbiAgd2lkdGg6IDE0MHB4O1xcbiAgZmxleDogMTQwcHggMCAwO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi52anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYtZWxlbSB7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAmLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICB9XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAtIDEwJTtcXG4gIH1cXG59XFxuXFxuLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWJvZHkge1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4udmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtZWxlbSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gICYuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCBcXFwiLi4vdmVydGljYWwtdGFic1xcXCI7XFxuXFxuLnZqcy1obHNqcy1sci1yZWMtc2V0dGluZ3MudmpzLW1vZGFsLWRpYWxvZyB7XFxuICAudmpzLW1vZGFsLWRpYWxvZy1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAudmpzLWhsc2pzLXN0YXJ0LXJlY29yZCB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgfVxcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJjb25zdCBub3JtYWxpemUgPSAobnVtYmVyKSA9PiAobnVtYmVyIDwgMTAgPyAnMCcgKyBudW1iZXIgOiBudW1iZXIpO1xuXG5leHBvcnQgY29uc3QgdG9Gb3JtYXRZbWRIaXMgPSAoZGF0ZSwgc2VwYXJhdG9yKSA9PiB7XG4gIHJldHVybiBbXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICBub3JtYWxpemUoZGF0ZS5nZXREYXRlKCkpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldEhvdXJzKCkpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldE1pbnV0ZXMoKSksXG4gICAgbm9ybWFsaXplKGRhdGUuZ2V0U2Vjb25kcygpKSxcbiAgXS5qb2luKHNlcGFyYXRvcik7XG59O1xuXG5leHBvcnQgY29uc3Qgbm93SW5Gb3JtYXRZbWRIaXMgPSAoc2VwYXJhdG9yID0gJy0nKSA9PiB7XG4gIHJldHVybiB0b0Zvcm1hdFltZEhpcyhuZXcgRGF0ZSgpLCBzZXBhcmF0b3IpO1xufTtcbiIsIi8qKlxuICogQGZpbGUgZm9ybWF0LXRpbWUuanNcbiAqIEBtb2R1bGUgZm9ybWF0LXRpbWVcbiAqL1xuXG4vKipcbiAqIEZvcm1hdCBzZWNvbmRzIGFzIGEgdGltZSBzdHJpbmcsIEg6TU06U1Mgb3IgTTpTUy4gU3VwcGx5aW5nIGEgZ3VpZGUgKGluXG4gKiBzZWNvbmRzKSB3aWxsIGZvcmNlIGEgbnVtYmVyIG9mIGxlYWRpbmcgemVyb3MgdG8gY292ZXIgdGhlIGxlbmd0aCBvZiB0aGVcbiAqIGd1aWRlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNlY29uZHNcbiAqICAgICAgICAgTnVtYmVyIG9mIHNlY29uZHMgdG8gYmUgdHVybmVkIGludG8gYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGd1aWRlXG4gKiAgICAgICAgIE51bWJlciAoaW4gc2Vjb25kcykgdG8gbW9kZWwgdGhlIHN0cmluZyBhZnRlclxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICAgICAgICAgVGltZSBmb3JtYXR0ZWQgYXMgSDpNTTpTUyBvciBNOlNTXG4gKi9cbmNvbnN0IGRlZmF1bHRJbXBsZW1lbnRhdGlvbiA9IGZ1bmN0aW9uKHNlY29uZHMsIGd1aWRlKSB7XG4gIHNlY29uZHMgPSBzZWNvbmRzIDwgMCA/IDAgOiBzZWNvbmRzO1xuICBsZXQgcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDYwKTtcbiAgbGV0IG0gPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCAlIDYwKTtcbiAgbGV0IGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcbiAgY29uc3QgZ20gPSBNYXRoLmZsb29yKGd1aWRlIC8gNjAgJSA2MCk7XG4gIGNvbnN0IGdoID0gTWF0aC5mbG9vcihndWlkZSAvIDM2MDApO1xuXG4gIC8vIGhhbmRsZSBpbnZhbGlkIHRpbWVzXG4gIGlmIChpc05hTihzZWNvbmRzKSB8fCBzZWNvbmRzID09PSBJbmZpbml0eSkge1xuICAgIC8vICctJyBpcyBmYWxzZSBmb3IgYWxsIHJlbGF0aW9uYWwgb3BlcmF0b3JzIChlLmcuIDwsID49KSBzbyB0aGlzIHNldHRpbmdcbiAgICAvLyB3aWxsIGFkZCB0aGUgbWluaW11bSBudW1iZXIgb2YgZmllbGRzIHNwZWNpZmllZCBieSB0aGUgZ3VpZGVcbiAgICBoID0gbSA9IHMgPSAnLSc7XG4gIH1cblxuICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHNob3cgaG91cnNcbiAgaCA9IChoID4gMCB8fCBnaCA+IDApID8gaCArICc6JyA6ICcnO1xuXG4gIC8vIElmIGhvdXJzIGFyZSBzaG93aW5nLCB3ZSBtYXkgbmVlZCB0byBhZGQgYSBsZWFkaW5nIHplcm8uXG4gIC8vIEFsd2F5cyBzaG93IGF0IGxlYXN0IG9uZSBkaWdpdCBvZiBtaW51dGVzLlxuICBtID0gKCgoaCB8fCBnbSA+PSAxMCkgJiYgbSA8IDEwKSA/ICcwJyArIG0gOiBtKSArICc6JztcblxuICAvLyBDaGVjayBpZiBsZWFkaW5nIHplcm8gaXMgbmVlZCBmb3Igc2Vjb25kc1xuICBzID0gKHMgPCAxMCkgPyAnMCcgKyBzIDogcztcblxuICByZXR1cm4gaCArIG0gKyBzO1xufTtcblxuLy8gSW50ZXJuYWwgcG9pbnRlciB0byB0aGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbi5cbmxldCBpbXBsZW1lbnRhdGlvbiA9IGRlZmF1bHRJbXBsZW1lbnRhdGlvbjtcblxuLyoqXG4gKiBSZXBsYWNlcyB0aGUgZGVmYXVsdCBmb3JtYXRUaW1lIGltcGxlbWVudGF0aW9uIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9tSW1wbGVtZW50YXRpb25cbiAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgdXNlZCBpbiBwbGFjZSBvZiB0aGUgZGVmYXVsdCBmb3JtYXRUaW1lXG4gKiAgICAgICAgaW1wbGVtZW50YXRpb24uIFdpbGwgcmVjZWl2ZSB0aGUgY3VycmVudCB0aW1lIGluIHNlY29uZHMgYW5kIHRoZVxuICogICAgICAgIGd1aWRlIChpbiBzZWNvbmRzKSBhcyBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGb3JtYXRUaW1lKGN1c3RvbUltcGxlbWVudGF0aW9uKSB7XG4gIGltcGxlbWVudGF0aW9uID0gY3VzdG9tSW1wbGVtZW50YXRpb247XG59XG5cbi8qKlxuICogUmVzZXRzIGZvcm1hdFRpbWUgdG8gdGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZvcm1hdFRpbWUoKSB7XG4gIGltcGxlbWVudGF0aW9uID0gZGVmYXVsdEltcGxlbWVudGF0aW9uO1xufVxuXG4vKipcbiAqIERlbGVnYXRlcyB0byBlaXRoZXIgdGhlIGRlZmF1bHQgdGltZSBmb3JtYXR0aW5nIGZ1bmN0aW9uIG9yIGEgY3VzdG9tXG4gKiBmdW5jdGlvbiBzdXBwbGllZCB2aWEgYHNldEZvcm1hdFRpbWVgLlxuICpcbiAqIEZvcm1hdHMgc2Vjb25kcyBhcyBhIHRpbWUgc3RyaW5nIChIOk1NOlNTIG9yIE06U1MpLiBTdXBwbHlpbmcgYVxuICogZ3VpZGUgKGluIHNlY29uZHMpIHdpbGwgZm9yY2UgYSBudW1iZXIgb2YgbGVhZGluZyB6ZXJvcyB0byBjb3ZlciB0aGVcbiAqIGxlbmd0aCBvZiB0aGUgZ3VpZGUuXG4gKlxuICogQHN0YXRpY1xuICogQGV4YW1wbGUgIGZvcm1hdFRpbWUoMTI1LCA2MDApID09PSBcIjAyOjA1XCJcbiAqIEBwYXJhbSAgICB7bnVtYmVyfSBzZWNvbmRzXG4gKiAgICAgICAgICAgTnVtYmVyIG9mIHNlY29uZHMgdG8gYmUgdHVybmVkIGludG8gYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gICAge251bWJlcn0gZ3VpZGVcbiAqICAgICAgICAgICBOdW1iZXIgKGluIHNlY29uZHMpIHRvIG1vZGVsIHRoZSBzdHJpbmcgYWZ0ZXJcbiAqXG4gKiBAcmV0dXJuICAge3N0cmluZ31cbiAqICAgICAgICAgICBUaW1lIGZvcm1hdHRlZCBhcyBIOk1NOlNTIG9yIE06U1NcbiAqL1xuZnVuY3Rpb24gZm9ybWF0VGltZShzZWNvbmRzLCBndWlkZSA9IHNlY29uZHMpIHtcbiAgcmV0dXJuIGltcGxlbWVudGF0aW9uKHNlY29uZHMsIGd1aWRlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0VGltZTtcbiIsImV4cG9ydCBjb25zdCBmYWNlVVVJRCA9IChwcmVmaXgpID0+IHtcbiAgcmV0dXJuIHByZWZpeCArICctJyArIERhdGUubm93KClcbn07XG4iLCJjb25zdCB7IHBlcmZvcm1hbmNlLCBYTUxIdHRwUmVxdWVzdCB9ID0gd2luZG93O1xuXG5jbGFzcyBYaHJMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcueGhyU2V0dXApIHtcbiAgICAgIHRoaXMueGhyU2V0dXAgPSBjb25maWcueGhyU2V0dXA7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5hYm9ydCgpO1xuICAgIHRoaXMubG9hZGVyID0gbnVsbDtcbiAgfVxuXG4gIGFib3J0ICgpIHtcbiAgICBsZXQgbG9hZGVyID0gdGhpcy5sb2FkZXI7XG4gICAgaWYgKGxvYWRlciAmJiBsb2FkZXIucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgdGhpcy5zdGF0cy5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgIGxvYWRlci5hYm9ydCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0VGltZW91dCk7XG4gICAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IG51bGw7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJldHJ5VGltZW91dCk7XG4gICAgdGhpcy5yZXRyeVRpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgbG9hZCAoY29udGV4dCwgY29uZmlnLCBjYWxsYmFja3MpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIHRoaXMuc3RhdHMgPSB7IHRyZXF1ZXN0OiBwZXJmb3JtYW5jZS5ub3coKSwgcmV0cnk6IDAgfTtcbiAgICB0aGlzLnJldHJ5RGVsYXkgPSBjb25maWcucmV0cnlEZWxheTtcbiAgICB0aGlzLmxvYWRJbnRlcm5hbCgpO1xuICB9XG5cbiAgbG9hZEludGVybmFsICgpIHtcbiAgICBsZXQgeGhyLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgIHhociA9IHRoaXMubG9hZGVyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICBsZXQgc3RhdHMgPSB0aGlzLnN0YXRzO1xuICAgIHN0YXRzLnRmaXJzdCA9IDA7XG4gICAgc3RhdHMubG9hZGVkID0gMDtcbiAgICBjb25zdCB4aHJTZXR1cCA9IHRoaXMueGhyU2V0dXA7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKHhoclNldHVwKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgeGhyU2V0dXAoeGhyLCBjb250ZXh0LnVybCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBmaXggeGhyU2V0dXA6ICh4aHIsIHVybCkgPT4ge3hoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1MYW5ndWFnZVwiLCBcInRlc3RcIik7fVxuICAgICAgICAgIC8vIG5vdCB3b3JraW5nLCBhcyB4aHIuc2V0UmVxdWVzdEhlYWRlciBleHBlY3RzIHhoci5yZWFkeVN0YXRlID09PSBPUEVOXG4gICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGNvbnRleHQudXJsLCB0cnVlKTtcbiAgICAgICAgICB4aHJTZXR1cCh4aHIsIGNvbnRleHQudXJsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICB4aHIub3BlbignR0VUJywgY29udGV4dC51cmwsIHRydWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElFMTEgdGhyb3dzIGFuIGV4Y2VwdGlvbiBvbiB4aHIub3BlbiBpZiBhdHRlbXB0aW5nIHRvIGFjY2VzcyBhbiBIVFRQIHJlc291cmNlIG92ZXIgSFRUUFNcbiAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRXJyb3IoeyBjb2RlOiB4aHIuc3RhdHVzLCB0ZXh0OiBlLm1lc3NhZ2UgfSwgY29udGV4dCwgeGhyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5yYW5nZUVuZCkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1JhbmdlJywgJ2J5dGVzPScgKyBjb250ZXh0LnJhbmdlU3RhcnQgKyAnLScgKyAoY29udGV4dC5yYW5nZUVuZCAtIDEpKTtcbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gdGhpcy5yZWFkeXN0YXRlY2hhbmdlLmJpbmQodGhpcyk7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSB0aGlzLmxvYWRwcm9ncmVzcy5iaW5kKHRoaXMpO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSBjb250ZXh0LnJlc3BvbnNlVHlwZTtcblxuICAgIC8vIHNldHVwIHRpbWVvdXQgYmVmb3JlIHdlIHBlcmZvcm0gcmVxdWVzdFxuICAgIHRoaXMucmVxdWVzdFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmxvYWR0aW1lb3V0LmJpbmQodGhpcyksIHRoaXMuY29uZmlnLnRpbWVvdXQpO1xuICAgIHhoci5zZW5kKCk7XG4gIH1cblxuICByZWFkeXN0YXRlY2hhbmdlIChldmVudCkge1xuICAgIGxldCB4aHIgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgcmVhZHlTdGF0ZSA9IHhoci5yZWFkeVN0YXRlLFxuICAgICAgc3RhdHMgPSB0aGlzLnN0YXRzLFxuICAgICAgY29udGV4dCA9IHRoaXMuY29udGV4dCxcbiAgICAgIGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuXG4gICAgLy8gZG9uJ3QgcHJvY2VlZCBpZiB4aHIgaGFzIGJlZW4gYWJvcnRlZFxuICAgIGlmIChzdGF0cy5hYm9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gPj0gSEVBREVSU19SRUNFSVZFRFxuICAgIGlmIChyZWFkeVN0YXRlID49IDIpIHtcbiAgICAgIC8vIGNsZWFyIHhociB0aW1lb3V0IGFuZCByZWFybSBpdCBpZiByZWFkeVN0YXRlIGxlc3MgdGhhbiA0XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVxdWVzdFRpbWVvdXQpO1xuICAgICAgaWYgKHN0YXRzLnRmaXJzdCA9PT0gMCkge1xuICAgICAgICBzdGF0cy50Zmlyc3QgPSBNYXRoLm1heChwZXJmb3JtYW5jZS5ub3coKSwgc3RhdHMudHJlcXVlc3QpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBsZXQgc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICAgICAgLy8gaHR0cCBzdGF0dXMgYmV0d2VlbiAyMDAgdG8gMjk5IGFyZSBhbGwgc3VjY2Vzc2Z1bFxuICAgICAgICBpZiAoc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICBzdGF0cy50bG9hZCA9IE1hdGgubWF4KHN0YXRzLnRmaXJzdCwgcGVyZm9ybWFuY2Uubm93KCkpO1xuICAgICAgICAgIGxldCBkYXRhLCBsZW47XG4gICAgICAgICAgaWYgKGNvbnRleHQucmVzcG9uc2VUeXBlID09PSAnYXJyYXlidWZmZXInKSB7XG4gICAgICAgICAgICBkYXRhID0geGhyLnJlc3BvbnNlO1xuICAgICAgICAgICAgbGVuID0gZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgIGxlbiA9IGRhdGEubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0cy5sb2FkZWQgPSBzdGF0cy50b3RhbCA9IGxlbjtcbiAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB7IHVybDogeGhyLnJlc3BvbnNlVVJMLCBkYXRhOiBkYXRhIH07XG4gICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25TdWNjZXNzKHJlc3BvbnNlLCBzdGF0cywgY29udGV4dCwgeGhyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiBtYXggbmIgb2YgcmV0cmllcyByZWFjaGVkIG9yIGlmIGh0dHAgc3RhdHVzIGJldHdlZW4gNDAwIGFuZCA0OTkgKHN1Y2ggZXJyb3IgY2Fubm90IGJlIHJlY292ZXJlZCwgcmV0cnlpbmcgaXMgdXNlbGVzcyksIHJldHVybiBlcnJvclxuICAgICAgICAgIGlmIChzdGF0cy5yZXRyeSA+PSBjb25maWcubWF4UmV0cnkgfHwgKHN0YXR1cyA+PSA0MDAgJiYgc3RhdHVzIDwgNDk5KSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25FcnJvcih7IGNvZGU6IHN0YXR1cywgdGV4dDogeGhyLnN0YXR1c1RleHQgfSwgY29udGV4dCwgeGhyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWJvcnRzIGFuZCByZXNldHMgaW50ZXJuYWwgc3RhdGVcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgLy8gc2NoZWR1bGUgcmV0cnlcbiAgICAgICAgICAgIHRoaXMucmV0cnlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5sb2FkSW50ZXJuYWwuYmluZCh0aGlzKSwgdGhpcy5yZXRyeURlbGF5KTtcbiAgICAgICAgICAgIC8vIHNldCBleHBvbmVudGlhbCBiYWNrb2ZmXG4gICAgICAgICAgICB0aGlzLnJldHJ5RGVsYXkgPSBNYXRoLm1pbigyICogdGhpcy5yZXRyeURlbGF5LCBjb25maWcubWF4UmV0cnlEZWxheSk7XG4gICAgICAgICAgICBzdGF0cy5yZXRyeSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVhZHlTdGF0ZSA+PSAyIEFORCByZWFkeVN0YXRlICE9PTQgKHJlYWR5U3RhdGUgPSBIRUFERVJTX1JFQ0VJVkVEIHx8IExPQURJTkcpIHJlYXJtIHRpbWVvdXQgYXMgeGhyIG5vdCBmaW5pc2hlZCB5ZXRcbiAgICAgICAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMubG9hZHRpbWVvdXQuYmluZCh0aGlzKSwgY29uZmlnLnRpbWVvdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvYWR0aW1lb3V0ICgpIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5vblRpbWVvdXQodGhpcy5zdGF0cywgdGhpcy5jb250ZXh0LCBudWxsKTtcbiAgfVxuXG4gIGxvYWRwcm9ncmVzcyAoZXZlbnQpIHtcbiAgICBsZXQgeGhyID0gZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgIHN0YXRzID0gdGhpcy5zdGF0cztcblxuICAgIHN0YXRzLmxvYWRlZCA9IGV2ZW50LmxvYWRlZDtcbiAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgc3RhdHMudG90YWwgPSBldmVudC50b3RhbDtcbiAgICB9XG5cbiAgICBsZXQgb25Qcm9ncmVzcyA9IHRoaXMuY2FsbGJhY2tzLm9uUHJvZ3Jlc3M7XG4gICAgaWYgKG9uUHJvZ3Jlc3MpIHtcbiAgICAgIC8vIHRoaXJkIGFyZyBpcyB0byBwcm92aWRlIG9uIHByb2dyZXNzIGRhdGFcbiAgICAgIG9uUHJvZ3Jlc3Moc3RhdHMsIHRoaXMuY29udGV4dCwgbnVsbCwgeGhyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWGhyTG9hZGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmlkZW9qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9