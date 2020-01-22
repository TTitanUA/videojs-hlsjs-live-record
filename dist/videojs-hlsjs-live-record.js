/*!
 * videojs-hlsjs-live-record
 * Live stream record functionality for VideoJS with hls.js
 * 
 * @version v0.1.2
 * @author [object Object]
 * @homepage https://github.com/TTitanUA/videojs-hlsjs-live-record#readme
 * @repository https://github.com/TTitanUA/videojs-hlsjs-live-record.git
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("videojs"));
	else if(typeof define === 'function' && define.amd)
		define("videojs-hlsjs-live-record", ["videojs"], factory);
	else if(typeof exports === 'object')
		exports["videojs-hlsjs-live-record"] = factory(require("videojs"));
	else
		root["videojs-hlsjs-live-record"] = factory(root["videojs"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_video_js__) {
return /******/ (function(modules) { // webpackBootstrap
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

// extracted by mini-css-extract-plugin

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

module.exports = __WEBPACK_EXTERNAL_MODULE_video_js__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL0NvbXBvbmVudHMvUmVjU2V0dGluZ3NNb2RhbEhsc0pzLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Db21wb25lbnRzL3JlY1NldHRpbmdzTW9kYWwvQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Db21wb25lbnRzL3JlY1NldHRpbmdzTW9kYWwvUmVhbFRpbWVSZWNvcmRUYWJIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29tcG9uZW50cy9yZWNTZXR0aW5nc01vZGFsL1RhYnNIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29udHJvbGxlcnMvUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Db250cm9sbGVycy9TdG9yYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29udHJvbGxlcnMvVmlld0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL01vZGVscy9GcmFnbWVudC5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vTW9kZWxzL1BsYXlsaXN0LmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9jb21wb25lbnRzL0NhY2hlZEJ1dHRvbkhsc0pzLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9jb21wb25lbnRzL0xpdmVCdXR0b25IbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9Qcm9ncmVzc0NvbnRyb2xIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9SZWNCdXR0b25IbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9SZWNTdGF0dXNCYXJIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9TdG9wQnV0dG9uSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL3BsdWdpbi5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vcGx1Z2luLnNjc3M/YmVlMyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vdXRpbHMvZGF0ZS5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vdXRpbHMvZm9ybWF0LXRpbWUuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL3V0aWxzL3V1aWQuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL3V0aWxzL3hoci1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC9leHRlcm5hbCBcInZpZGVvanNcIiJdLCJuYW1lcyI6WyJWaWRlb0pzTW9kYWxEaWFsb2dDbGFzcyIsInZpZGVvanMiLCJnZXRDb21wb25lbnQiLCJEb20iLCJkb20iLCJkZWZhdWx0T3B0aW9ucyIsIlJlY1NldHRpbmdzTW9kYWxIbHNKcyIsImNvbnN0cnVjdG9yIiwicGxheWVyIiwib3B0aW9ucyIsImJ1aWxkQ1NTQ2xhc3MiLCJjb250ZW50IiwiYWxsb3dlZCIsInRhYnNDb21wb25lbnQiLCJUYWJzSGxzSnMiLCJwbGF5ZXJfIiwiZWxfIiwicmVuZGVyTm90QWxsb3dlZENvbnRlbnQiLCJyZW5kZXJlZEVsXyIsIm5vdEFsbG93ZWRDb250ZW50IiwiY3JlYXRlRWwiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJwcm90b3R5cGUiLCJvcHRpb25zXyIsIk9iamVjdCIsImFzc2lnbiIsInBhdXNlT25PcGVuIiwiZmlsbEFsd2F5cyIsInRlbXBvcmFyeSIsInVuY2xvc2VhYmxlIiwicmVnaXN0ZXJDb21wb25lbnQiLCJWaWRlb0pzQ29tcG9uZW50Q2xhc3MiLCJCYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnMiLCJjb25zb2xlIiwiZ3JvdXAiLCJsb2ciLCJncm91cEVuZCIsIlJlYWxUaW1lUmVjb3JkVGFiSGxzSnMiLCJnZXRRdWFsaXR5TGV2ZWxzIiwiaGxzanMiLCJobHNKU0xpdmVSZWNvcmQiLCJnZXRIbHNKcyIsImxldmVscyIsImN1cnJlbnRMZXZlbCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxhYmVsIiwiaGVpZ2h0IiwidmFsdWUiLCJzZWxlY3RlZCIsInNvcnQiLCJjdXJyZW50IiwibmV4dCIsImVsZW0iLCJyZWFsdGltZVJlY29yZCIsImFwcGVuZENoaWxkIiwicmVuZGVySGVhZCIsInJlbmRlclF1YWxpdHlTZWxlY3RvciIsInJlbmRlckJ1dHRvbiIsInJlbmRlckZvb3RlciIsIm1vZGFsSGVhZGVyQ29udGVudCIsIm1heFJlY29yZE1pbnV0ZXMiLCJtb2RhbEZvb3RlckNvbnRlbnQiLCJ1dWlkIiwiZmFjZVVVSUQiLCJmb3IiLCJpbm5lclRleHQiLCJxdWFsaXR5U2VsZWN0IiwiaWQiLCJmb3JFYWNoIiwidGV4dCIsImhvbGRlciIsIm9uY2xpY2siLCJoYW5kbGVTdGFydFJlY29yZGluZyIsImJpbmQiLCJzdGFydFJlYWx0aW1lUmVjb3JkIiwidGFic0hvbGRlciIsInJlbmRlck5hdiIsInJlbmRlckJvZHkiLCJuYXZIb2xkZXIiLCJoYW5kbGVDbGljayIsImJvZHlIb2xkZXIiLCJlbGVtMSIsImJhY2tncm91bmRSZWNvcmQiLCJlbGVtMiIsIiQkIiwiZWxlbUluZGV4IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIkhscyIsIndpbmRvdyIsImZhY2VNaW1lUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyIiwicGx1Z2luIiwicmVzcG9uc2UiLCJzdGF0cyIsImNvbnRleHQiLCJuZXR3b3JrRGV0YWlscyIsImxvYWRlciIsImRlc3Ryb3kiLCJzdG9yYWdlQ29udHJvbGxlciIsInNhdmVGcmFnbWVudCIsImZyYWciLCJkYXRhIiwidGhlbiIsInBsYXlsaXN0IiwiZnJhZ21lbnRTYXZlZCIsInNhdmVQbGF5bGlzdCIsImV2ZW50IiwicmVjb3JkU3RhcnRlZCIsIm1hbmlmZXN0TGlzdGVuZXIiLCJsZXZlbExpc3RlbmVyIiwiZnJhZ21lbnRMaXN0ZW5lciIsImluaXQiLCJvbiIsIkV2ZW50cyIsIkZSQUdfTE9BREVEIiwiaGxzRnJhZ21lbnRMb2FkZWQiLCJzdGFydFJlY29yZCIsInN0b3BSZWNvcmQiLCJmaW5pc2hlZCIsImluaXRQbGF5bGlzdCIsImxldmVsIiwiWGhyTG9hZGVyIiwidXJsIiwibG9hZGVyQ29udGV4dCIsImFkZEZyYWdtZW50IiwiZHVyYXRpb24iLCJyZXNwb25zZVR5cGUiLCJwcm9ncmVzc0RhdGEiLCJsb2FkZXJDb25maWciLCJ0aW1lb3V0IiwibWF4UmV0cnkiLCJyZXRyeURlbGF5IiwibWF4UmV0cnlEZWxheSIsImxvYWRlckNhbGxiYWNrcyIsIm9uU3VjY2VzcyIsImZyYWdtZW50TG9hZGVkIiwibG9hZCIsImxldmVsSW5kZXgiLCJtaW1lUHJvbWlzZSIsImdldFJlY29yZE1pbWUiLCJQbGF5bGlzdE1vZGVsIiwibm93SW5Gb3JtYXRZbWRIaXMiLCJ3aWR0aCIsInRhcmdldGR1cmF0aW9uIiwiZGV0YWlscyIsIm1pbWUiLCJEQl9WRVJTSU9OIiwiU1RPUkFHRV9XUklURV9NT0RFIiwiU1RPUkFHRV9SRUFEX01PREUiLCJTdG9yYWdlQ29udHJvbGxlciIsImRiIiwib3BlblJlcXVlc3QiLCJpbmRleGVkREIiLCJvcGVuIiwic3RvcmFnZURiTmFtZSIsIm9udXBncmFkZW5lZWRlZCIsInJlc3VsdCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsInN0b3JhZ2VQbGF5bGlzdHNOYW1lIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwic3RvcmFnZUZyYWdtZW50c05hbWUiLCJmcmFnbWVudHNTdG9yYWdlIiwiY3JlYXRlSW5kZXgiLCJ1bmlxdWUiLCJvbnN1Y2Nlc3MiLCJjaGVja1JlcXVpcmVtZW50cyIsImZyYWdtZW50IiwicGF5bG9hZCIsInRyYW5zYWN0aW9uIiwic3RvcmFnZSIsIm9iamVjdFN0b3JlIiwicmVxdWVzdCIsImFkZCIsIm9uZXJyb3IiLCJwdXQiLCJWaWV3Q29udHJvbGxlciIsImNvbnRyb2xCYXIiLCJnZXRDaGlsZCIsInNwYWNlIiwiYWRkQ2hpbGQiLCJyZW1vdmVEZWZhdWx0Q29udHJvbHMiLCJsaXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjIiwic2VsZWN0b3IiLCJjaGlsZHJlbiIsImZpbHRlciIsImNvbXBvbmVudCIsImhhc0NsYXNzIiwiY2FjaGVkQnV0dG9uQ29tcG9uZW50IiwiY2xpY2tIYW5kbGVyIiwiYWN0aXZlTGl2ZU1vZGUiLCJoaWRlIiwibGl2ZUJ1dHRvbkNvbXBvbmVudCIsImFjdGl2YXRlUHJvZ3Jlc3NNb2RlIiwicmVjQnV0dG9uQ29tcG9uZW50Iiwic2hvd1JlY29yZFNldHRpbmdzIiwic3RvcEJ1dHRvbkNvbXBvbmVudCIsInN0b3BSZWFsdGltZVJlY29yZCIsInJlY1N0YXR1c0JhckNvbXBvbmVudCIsInByb2dyZXNzQ29udHJvbENvbXBvbmVudCIsInJlbW92ZUNoaWxkIiwic2hvd090aGVyQ29udHJvbCIsInNob3dMaXZlQ29udHJvbCIsImhpZGVQcm9ncmVzc0NvbnRyb2wiLCJoaWRlUmVjQ29udHJvbCIsImxpdmVUcmFja2VyIiwic2Vla1RvTGl2ZUVkZ2UiLCJlIiwid2FybiIsIm1lc3NhZ2UiLCJzdGF0ZSIsInJlY29yZEluUHJvY2VzcyIsInNob3dQcm9ncmVzc0NvbnRyb2wiLCJoaWRlTGl2ZUNvbnRyb2wiLCJyZWNTZXR0aW5nc01vZGFsQ29tcG9uZW50IiwiY2xvc2UiLCJoaWRlT3RoZXJDb250cm9sIiwic2hvd1JlY0NvbnRyb2wiLCJtYXhSZWNvcmRTZWNvbmRzIiwidXBkYXRlUmVjb3JkTGVmdFRpbWUiLCJ1cGRhdGVSZWNvcmRUaW1lIiwiYSIsInJlY29yZFVwZGF0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzaG93IiwiY2xlYXJJbnRlcnZhbCIsIkZyYWdtZW50TW9kZWwiLCJmcmFnbWVudERhdGEiLCJwbGF5bGlzdElkIiwic3BsaXQiLCJwb3AiLCJzYXZlZCIsImNyZWF0ZVBsYXlsaXN0SGVhZGVyIiwiYWRkUGxheWxpc3RGcmFnbWVudCIsImR1cmFjdGlvbiIsImNyZWF0ZVBsYXlsaXN0Rm9vdGVyIiwicGxheWxpc3REYXRhIiwiZnJhZ21lbnRzIiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsInVwZGF0ZWRBdCIsInJlY0ZpbmlzaGVkIiwicHVzaCIsInRvU3RyaW5nIiwiam9pbiIsIlZpZGVvSnNCdXR0b25DbGFzcyIsIkNhY2hlZEJ1dHRvbkhsc0pzIiwidGFnIiwicHJvcHMiLCJhdHRyaWJ1dGVzIiwibm9uSWNvbkNvbnRyb2wiLCJjcmVhdGVDb250cm9sVGV4dEVsIiwiZWwiLCJjb250cm9sVGV4dF8iLCJjYWxsIiwiYXJndW1lbnRzIiwiTGl2ZUJ1dHRvbkhsc0pzIiwiVmlkZW9Kc1Byb2dyZXNzQ29udHJvbENvbXBvbmVudCIsIlByb2dyZXNzQ29udHJvbEhsc0pzIiwiUmVjQnV0dG9uSGxzSnMiLCJSZWNTdGF0dXNCYXJIbHNKcyIsInJlY29yZGVkRWxfIiwicmVjb3JkTGVmdEVsXyIsInRpbWUiLCJmb3JtYXRUaW1lIiwiZGlzcG9zZSIsIlN0b3BCdXR0b25IbHNKcyIsIlBsdWdpbiIsImdldFBsdWdpbiIsImRlZmF1bHRzIiwiSGxzSlNMaXZlUmVjb3JkUGx1Z2luIiwic2V0U3RhdGUiLCJ2aWV3Q29udHJvbGxlciIsInJlYWx0aW1lUmVjb3JkQ29udHJvbGxlciIsInRlY2giLCJJV2lsbFVzZVRoaXNJblBsdWdpbiIsInNvdXJjZUhhbmRsZXJfIiwiaGxzIiwibWVyZ2VPcHRpb25zIiwibGV2ZWxJZCIsImFjdGl2YXRlUmVjb3JkTW9kZSIsImhhbmRsZVN0YXRlQ2hhbmdlZCIsIlZFUlNJT04iLCJkZWZhdWx0U3RhdGUiLCJyZWNvcmRBbGxvd2VkIiwicmVnaXN0ZXJQbHVnaW4iLCJub3JtYWxpemUiLCJudW1iZXIiLCJ0b0Zvcm1hdFltZEhpcyIsImRhdGUiLCJzZXBhcmF0b3IiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJkZWZhdWx0SW1wbGVtZW50YXRpb24iLCJzZWNvbmRzIiwiZ3VpZGUiLCJzIiwiTWF0aCIsImZsb29yIiwibSIsImgiLCJnbSIsImdoIiwiaXNOYU4iLCJJbmZpbml0eSIsImltcGxlbWVudGF0aW9uIiwic2V0Rm9ybWF0VGltZSIsImN1c3RvbUltcGxlbWVudGF0aW9uIiwicmVzZXRGb3JtYXRUaW1lIiwicHJlZml4IiwicGVyZm9ybWFuY2UiLCJYTUxIdHRwUmVxdWVzdCIsImNvbmZpZyIsInhoclNldHVwIiwiYWJvcnQiLCJyZWFkeVN0YXRlIiwiYWJvcnRlZCIsImNsZWFyVGltZW91dCIsInJlcXVlc3RUaW1lb3V0IiwicmV0cnlUaW1lb3V0IiwiY2FsbGJhY2tzIiwidHJlcXVlc3QiLCJyZXRyeSIsImxvYWRJbnRlcm5hbCIsInhociIsInRmaXJzdCIsImxvYWRlZCIsIm9uRXJyb3IiLCJjb2RlIiwic3RhdHVzIiwicmFuZ2VFbmQiLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmFuZ2VTdGFydCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5c3RhdGVjaGFuZ2UiLCJvbnByb2dyZXNzIiwibG9hZHByb2dyZXNzIiwic2V0VGltZW91dCIsImxvYWR0aW1lb3V0Iiwic2VuZCIsImN1cnJlbnRUYXJnZXQiLCJtYXgiLCJ0bG9hZCIsImxlbiIsImJ5dGVMZW5ndGgiLCJyZXNwb25zZVRleHQiLCJsZW5ndGgiLCJ0b3RhbCIsInJlc3BvbnNlVVJMIiwic3RhdHVzVGV4dCIsIm1pbiIsIm9uVGltZW91dCIsImxlbmd0aENvbXB1dGFibGUiLCJvblByb2dyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFF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d1AsTUFBTSxDQUFDN0wsT0FBdEQsQ0FBdEI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUR1TixhQUFXLEdBQUk7QUFDYixTQUFLbEIsU0FBTCxDQUFlK0IsU0FBZixDQUF5QixLQUFLeFEsS0FBOUIsRUFBcUMsS0FBS0MsT0FBMUMsRUFBbUQsSUFBbkQ7QUFDRDs7QUFFRHdQLGNBQVksQ0FBRTVPLEtBQUYsRUFBUztBQUNuQixRQUFJZ08sR0FBRyxHQUFHaE8sS0FBSyxDQUFDZ1AsYUFBaEI7QUFBQSxRQUNFN1AsS0FBSyxHQUFHLEtBQUtBLEtBRGY7QUFHQUEsU0FBSyxDQUFDK08sTUFBTixHQUFlbE8sS0FBSyxDQUFDa08sTUFBckI7O0FBQ0EsUUFBSWxPLEtBQUssQ0FBQzRQLGdCQUFWLEVBQTRCO0FBQzFCelEsV0FBSyxDQUFDb1EsS0FBTixHQUFjdlAsS0FBSyxDQUFDdVAsS0FBcEI7QUFDRDs7QUFFRCxRQUFJTSxVQUFVLEdBQUcsS0FBS2pDLFNBQUwsQ0FBZWlDLFVBQWhDOztBQUNBLFFBQUlBLFVBQUosRUFBZ0I7QUFDZDtBQUNBQSxnQkFBVSxDQUFDMVEsS0FBRCxFQUFRLEtBQUtDLE9BQWIsRUFBc0IsSUFBdEIsRUFBNEI0TyxHQUE1QixDQUFWO0FBQ0Q7QUFDRjs7QUF2SmE7O0FBMEpEak4sd0VBQWYsRTs7Ozs7Ozs7Ozs7QUM1SkEsc0QiLCJmaWxlIjoidmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInZpZGVvanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ2aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkXCIsIFtcInZpZGVvanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widmlkZW9qcy1obHNqcy1saXZlLXJlY29yZFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInZpZGVvanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmRcIl0gPSBmYWN0b3J5KHJvb3RbXCJ2aWRlb2pzXCJdKTtcbn0pKCh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyksIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdmlkZW9fanNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGx1Z2luLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcbmltcG9ydCBUYWJzSGxzSnMgZnJvbSBcIi4vcmVjU2V0dGluZ3NNb2RhbC9UYWJzSGxzSnNcIjtcblxuY29uc3QgVmlkZW9Kc01vZGFsRGlhbG9nQ2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTW9kYWxEaWFsb2cnKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuY2xhc3MgUmVjU2V0dGluZ3NNb2RhbEhsc0pzIGV4dGVuZHMgVmlkZW9Kc01vZGFsRGlhbG9nQ2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGRlZmF1bHQgRE9NIGBjbGFzc05hbWVgLlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqICAgICAgICAgVGhlIERPTSBgY2xhc3NOYW1lYCBmb3IgdGhpcyBvYmplY3QuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIHZlcnNpb24gNS5cbiAgICovXG4gIGJ1aWxkQ1NTQ2xhc3MoKSB7XG4gICAgcmV0dXJuIGB2anMtaGxzanMtbHItcmVjLXNldHRpbmdzICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgbG9jYWxpemVkIGVycm9yIG1lc3NhZ2UgYmFzZWQgb24gdGhlIGBQbGF5ZXJgcyBlcnJvci5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiAgICAgICAgIFRoZSBgUGxheWVyYHMgZXJyb3IgbWVzc2FnZSBsb2NhbGl6ZWQgb3IgYW4gZW1wdHkgc3RyaW5nLlxuICAgKi9cbiAgY29udGVudCgpIHtcbiAgICBpZih0aGlzLm9wdGlvbnMoKS5hbGxvd2VkKSB7XG4gICAgICB0aGlzLnRhYnNDb21wb25lbnQgPSBuZXcgVGFic0hsc0pzKHRoaXMucGxheWVyXywgdGhpcy5vcHRpb25zKCkpO1xuICAgICAgcmV0dXJuIHRoaXMudGFic0NvbXBvbmVudC5lbF87XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlck5vdEFsbG93ZWRDb250ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyTm90QWxsb3dlZENvbnRlbnQoKSB7XG4gICAgaWYodGhpcy5yZW5kZXJlZEVsXykge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZWRFbF87XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9ICh0aGlzLm9wdGlvbnMoKS5ub3RBbGxvd2VkQ29udGVudCB8fCAoKCkgPT4gKCc8aDI+UmVjb3JkaW5nIG5vdCBhbGxvd2VkPC9oMj4nKSkpKCk7XG5cbiAgICB0aGlzLnJlbmRlcmVkRWxfID0gRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgaW5uZXJIVE1MOiBjb250ZW50LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZWRFbF87XG4gIH1cbn1cblxuUmVjU2V0dGluZ3NNb2RhbEhsc0pzLnByb3RvdHlwZS5vcHRpb25zXyA9IE9iamVjdC5hc3NpZ24oe30sIFZpZGVvSnNNb2RhbERpYWxvZ0NsYXNzLnByb3RvdHlwZS5vcHRpb25zXywge1xuICBwYXVzZU9uT3BlbjogZmFsc2UsXG4gIGZpbGxBbHdheXM6IGZhbHNlLFxuICB0ZW1wb3Jhcnk6IHRydWUsXG4gIHVuY2xvc2VhYmxlOiBmYWxzZVxufSk7XG5cbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ1JlY1NldHRpbmdzTW9kYWxIbHNKcycsIFJlY1NldHRpbmdzTW9kYWxIbHNKcyk7XG5leHBvcnQgZGVmYXVsdCBSZWNTZXR0aW5nc01vZGFsSGxzSnM7XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbmNvbnN0IFZpZGVvSnNDb21wb25lbnRDbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuY2xhc3MgQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzIGV4dGVuZHMgVmlkZW9Kc0NvbXBvbmVudENsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIGNvbnNvbGUuZ3JvdXAoXCJCYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnMuanM6MjAgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlRWwoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy10YWItYmFja2dyb3VuZC1yZWNvcmQnLFxuICAgICAgICBpbm5lckhUTUw6ICc8cD52anMtaGxzanMtdGFiLWJhY2tncm91bmQtcmVjb3JkPC9wPidcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnM7XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5pbXBvcnQge2ZhY2VVVUlEfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXVpZFwiO1xuXG5jb25zdCBWaWRlb0pzQ29tcG9uZW50Q2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5jbGFzcyBSZWFsVGltZVJlY29yZFRhYkhsc0pzIGV4dGVuZHMgVmlkZW9Kc0NvbXBvbmVudENsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gIH1cblxuICBnZXRRdWFsaXR5TGV2ZWxzKCkge1xuICAgIGNvbnN0IGhsc2pzID0gdGhpcy5wbGF5ZXIoKS5obHNKU0xpdmVSZWNvcmQoKS5nZXRIbHNKcygpO1xuICAgIGNvbnN0IGxldmVscyA9IGhsc2pzLmxldmVscyB8fCBbXTtcbiAgICBjb25zdCBjdXJyZW50TGV2ZWwgPSBobHNqcy5jdXJyZW50TGV2ZWwgfHwgMDtcbiAgICByZXR1cm4gbGV2ZWxzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IGl0ZW0uaGVpZ2h0ICsgJ3AnLFxuICAgICAgICB2YWx1ZTogaW5kZXgsXG4gICAgICAgIHNlbGVjdGVkOiBpbmRleCA9PT0gY3VycmVudExldmVsLFxuICAgICAgfVxuICAgICkpLnNvcnQoKGN1cnJlbnQsIG5leHQpID0+IHtcbiAgICAgIGlmICgodHlwZW9mIGN1cnJlbnQgIT09ICdvYmplY3QnKSB8fCAodHlwZW9mIG5leHQgIT09ICdvYmplY3QnKSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudC52YWx1ZSA8IG5leHQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQudmFsdWUgPiBuZXh0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVFbCgpIHtcbiAgICBjb25zdCBlbGVtID0gc3VwZXIuY3JlYXRlRWwoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXRhYi1yZWFsdGltZS1yZWNvcmQnLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgaWYodGhpcy5vcHRpb25zKCkucmVhbHRpbWVSZWNvcmQuYWxsb3dlZCkge1xuICAgICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckhlYWQoKSk7XG4gICAgICBlbGVtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyUXVhbGl0eVNlbGVjdG9yKCkpO1xuICAgICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckJ1dHRvbigpKTtcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJGb290ZXIoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyTm90QWxsb3dlZENvbnRlbnQoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICByZW5kZXJIZWFkKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAodGhpcy5vcHRpb25zKCkucmVhbHRpbWVSZWNvcmQubW9kYWxIZWFkZXJDb250ZW50IHx8ICgoKSA9PiAoXG4gICAgICBcIjxwPlJlYWwtdGltZSByZWNvcmRpbmcgYWxsb3dzIHlvdSB0byByZWNvcmQgYSBmcmFnbWVudCBvZiB0aGUgcHJvZ3JhbSB5b3UgYXJlIHdhdGNoaW5nLiBcIiArXG4gICAgICBcIlJlY29yZGluZyB3aWxsIGJlIGRvbmUgdW50aWwgdGhlIHJlY29yZGluZyBzdG9wcywgdGhlIHJlY29yZGluZyB0aW1lIGxpbWl0IGlzIGV4Y2VlZGVkIG9yIHRoZSB0YWIgaXMgY2xvc2VkLlwiICtcbiAgICAgIFwiVG8gc3RhcnQgcmVjb3JkaW5nLCBzZWxlY3QgeW91ciBwcmVmZXJyZWQgcXVhbGl0eSBhbmQgY2xpY2sgPHN0cm9uZz5cXFwic3RhcnQgcmVjb3JkaW5nXFxcIjwvc3Ryb25nPi48L3A+XCIgK1xuICAgICAgXCI8cD5Zb3VyIGN1cnJlbnQgcmVjb3JkaW5nIHRpbWUgbGltaXQgaXMgXCIgKyB0aGlzLm9wdGlvbnMoKS5tYXhSZWNvcmRNaW51dGVzICsgXCIgbWluLjwvcD5cIlxuICAgICkpKSgpIDtcbiAgICByZXR1cm4gRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBpbm5lckhUTUw6IGNvbnRlbnRcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyRm9vdGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAodGhpcy5vcHRpb25zKCkucmVhbHRpbWVSZWNvcmQubW9kYWxGb290ZXJDb250ZW50IHx8ICgoKSA9PiAoJycpKSkoKSA7XG4gICAgcmV0dXJuIERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgaW5uZXJIVE1MOiBjb250ZW50XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlclF1YWxpdHlTZWxlY3RvcigpIHtcbiAgICBjb25zdCBlbGVtID0gRG9tLmNyZWF0ZUVsKFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy10YWItcXVhbGl0eS1zZWxlY3QgdmpzLWhsc2pzLWZvcm0tZ3JvdXAnLFxuICAgICAgfSxcbiAgICApO1xuICAgIGNvbnN0IHV1aWQgPSBmYWNlVVVJRCgndmpzLWhscy1xdWFsaXR5LXNlbGVjdCcpO1xuXG4gICAgZWxlbS5hcHBlbmRDaGlsZChcbiAgICAgIERvbS5jcmVhdGVFbCgnbGFiZWwnLCB7XG4gICAgICAgIGZvcjogdXVpZCxcbiAgICAgICAgaW5uZXJUZXh0OiAnUXVhbGl0eScsXG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1mb3JtLWxhYmVsJ1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5xdWFsaXR5U2VsZWN0ID0gRG9tLmNyZWF0ZUVsKCdzZWxlY3QnLCB7XG4gICAgICBpZDogdXVpZCxcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1mb3JtLWlucHV0J1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGV2ZWxzID0gdGhpcy5nZXRRdWFsaXR5TGV2ZWxzKCk7XG5cbiAgICBsZXZlbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy5xdWFsaXR5U2VsZWN0LmFwcGVuZENoaWxkKFxuICAgICAgICBEb20uY3JlYXRlRWwoJ29wdGlvbicsIHtcbiAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICB0ZXh0OiBpdGVtLmxhYmVsLFxuICAgICAgICAgIHNlbGVjdGVkOiBpdGVtLnNlbGVjdGVkXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgaWYoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnF1YWxpdHlTZWxlY3QudmFsdWUgPSBpdGVtLnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnF1YWxpdHlTZWxlY3QpO1xuXG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICByZW5kZXJCdXR0b24oKSB7XG4gICAgY29uc3QgaG9sZGVyID0gRG9tLmNyZWF0ZUVsKFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1mb3JtLWdyb3VwJyxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaG9sZGVyLmFwcGVuZENoaWxkKERvbS5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLWJ1dHRvbiB2anMtaGxzanMtc3RhcnQtcmVjb3JkJyxcbiAgICAgIGlubmVyVGV4dDogJ1N0YXJ0IFJlY29yZGluZycsXG4gICAgICBvbmNsaWNrOiB0aGlzLmhhbmRsZVN0YXJ0UmVjb3JkaW5nLmJpbmQodGhpcylcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gaG9sZGVyO1xuICB9XG5cbiAgcmVuZGVyTm90QWxsb3dlZENvbnRlbnQoKSB7XG4gICAgaWYodGhpcy5yZW5kZXJlZEVsXykge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZWRFbF87XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9ICh0aGlzLm9wdGlvbnMoKS5yZWFsdGltZVJlY29yZC5ub3RBbGxvd2VkQ29udGVudCB8fCAoKCkgPT4gKCc8aDI+UmVjb3JkaW5nIG5vdCBhbGxvd2VkPC9oMj4nKSkpKCk7XG5cbiAgICB0aGlzLnJlbmRlcmVkRWxfID0gRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgaW5uZXJIVE1MOiBjb250ZW50LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZWRFbF87XG4gIH1cblxuICBoYW5kbGVTdGFydFJlY29yZGluZygpIHtcbiAgICB0aGlzLnBsYXllcigpLmhsc0pTTGl2ZVJlY29yZCgpLnN0YXJ0UmVhbHRpbWVSZWNvcmQodGhpcy5xdWFsaXR5U2VsZWN0LnZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFsVGltZVJlY29yZFRhYkhsc0pzO1xuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuaW1wb3J0IFJlYWxUaW1lUmVjb3JkVGFiSGxzSnMgZnJvbSBcIi4vUmVhbFRpbWVSZWNvcmRUYWJIbHNKc1wiO1xuaW1wb3J0IEJhY2tncm91bmRSZWNvcmRUYWJIbHNKcyBmcm9tIFwiLi9CYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnNcIjtcblxuY29uc3QgVmlkZW9Kc0NvbXBvbmVudENsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5jbGFzcyBUYWJzSGxzSnMgZXh0ZW5kcyBWaWRlb0pzQ29tcG9uZW50Q2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKCkge1xuICAgIGNvbnN0IHRhYnNIb2xkZXIgPSBzdXBlci5jcmVhdGVFbChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdmVydGljYWwtdGFicycsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICB0YWJzSG9sZGVyLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyTmF2KCkpO1xuXG4gICAgdGFic0hvbGRlci5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckJvZHkoKSk7XG5cbiAgICByZXR1cm4gdGFic0hvbGRlcjtcbiAgfVxuXG5cbiAgcmVuZGVyTmF2KCkge1xuICAgIGNvbnN0IG5hdkhvbGRlciA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2J1xuICAgIH0pO1xuICAgIG5hdkhvbGRlci5hcHBlbmRDaGlsZChcbiAgICAgIERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYtZWxlbSBhY3RpdmUnLFxuICAgICAgICBpbm5lckhUTUw6ICdSZWFsdGltZScsXG4gICAgICAgIG9uY2xpY2s6ICgpID0+IHt0aGlzLmhhbmRsZUNsaWNrKDApfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgbmF2SG9sZGVyLmFwcGVuZENoaWxkKFxuICAgICAgRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLW5hdi1lbGVtJyxcbiAgICAgICAgaW5uZXJIVE1MOiAnQmFja2dyb3VuZCcsXG4gICAgICAgIG9uY2xpY2s6ICgpID0+IHt0aGlzLmhhbmRsZUNsaWNrKDEpfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIG5hdkhvbGRlcjtcbiAgfVxuXG4gIHJlbmRlckJvZHkoKSB7XG4gICAgY29uc3QgYm9keUhvbGRlciA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtYm9keSdcbiAgICB9KTtcblxuICAgIHRoaXMucmVhbHRpbWVSZWNvcmQgPSBuZXcgUmVhbFRpbWVSZWNvcmRUYWJIbHNKcyh0aGlzLnBsYXllcl8sIHRoaXMub3B0aW9ucygpKTtcbiAgICBjb25zdCBlbGVtMSA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtZWxlbSBhY3RpdmUnXG4gICAgfSk7XG4gICAgZWxlbTEuYXBwZW5kQ2hpbGQodGhpcy5yZWFsdGltZVJlY29yZC5lbF8pO1xuICAgIGJvZHlIb2xkZXIuYXBwZW5kQ2hpbGQoZWxlbTEpO1xuXG4gICAgdGhpcy5iYWNrZ3JvdW5kUmVjb3JkID0gbmV3IEJhY2tncm91bmRSZWNvcmRUYWJIbHNKcyh0aGlzLnBsYXllcl8sIHRoaXMub3B0aW9ucygpKTtcbiAgICBjb25zdCBlbGVtMiA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtZWxlbSdcbiAgICB9KTtcbiAgICBlbGVtMi5hcHBlbmRDaGlsZCh0aGlzLmJhY2tncm91bmRSZWNvcmQuZWxfKTtcbiAgICBib2R5SG9sZGVyLmFwcGVuZENoaWxkKGVsZW0yKTtcblxuICAgIHJldHVybiBib2R5SG9sZGVyO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soaW5kZXgpIHtcbiAgICB0aGlzLiQkKCcudmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2LWVsZW0nKS5mb3JFYWNoKChlbGVtLCBlbGVtSW5kZXgpID0+IHtcbiAgICAgIGlmKGluZGV4ID09PSBlbGVtSW5kZXgpIHtcbiAgICAgICAgRG9tLmFkZENsYXNzKGVsZW0sICdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIERvbS5yZW1vdmVDbGFzcyhlbGVtLCAnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy4kJCgnLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWVsZW0nKS5mb3JFYWNoKChlbGVtLCBlbGVtSW5kZXgpID0+IHtcbiAgICAgIGlmKGluZGV4ID09PSBlbGVtSW5kZXgpIHtcbiAgICAgICAgRG9tLmFkZENsYXNzKGVsZW0sICdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIERvbS5yZW1vdmVDbGFzcyhlbGVtLCAnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNIbHNKcztcbiIsImltcG9ydCB7UGxheWxpc3RNb2RlbH0gZnJvbSBcIi4uL01vZGVscy9QbGF5bGlzdFwiO1xuaW1wb3J0IHtub3dJbkZvcm1hdFltZEhpc30gZnJvbSBcIi4uL3V0aWxzL2RhdGVcIjtcbmltcG9ydCBYaHJMb2FkZXIgZnJvbSBcIi4uL3V0aWxzL3hoci1sb2FkZXJcIjtcblxuY29uc3QgSGxzID0gd2luZG93LkhscztcblxuY29uc3QgZmFjZU1pbWVQcm9taXNlID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlKHt9KTtcbiAgfSlcbn07XG5cbmNsYXNzIFJlYWx0aW1lUmVjb3JkQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHBsdWdpbikge1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMubWFuaWZlc3RMaXN0ZW5lciA9IG51bGw7XG4gICAgdGhpcy5sZXZlbExpc3RlbmVyID0gbnVsbDtcbiAgICB0aGlzLmZyYWdtZW50TGlzdGVuZXIgPSBudWxsO1xuICAgIHRoaXMucmVjb3JkU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5wbGF5bGlzdCA9IG51bGw7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IGhsc2pzID0gdGhpcy5wbHVnaW4uZ2V0SGxzSnMoKTtcbiAgICB0aGlzLmZyYWdtZW50TGlzdGVuZXIgPSBobHNqcy5vbihIbHMuRXZlbnRzLkZSQUdfTE9BREVELCB0aGlzLmhsc0ZyYWdtZW50TG9hZGVkKTtcbiAgfVxuXG4gIHN0YXJ0UmVjb3JkKCkge1xuICAgIHRoaXMucGxheWxpc3QgPSBudWxsO1xuICAgIHRoaXMucmVjb3JkU3RhcnRlZCA9IHRydWU7XG4gIH1cblxuICBzdG9wUmVjb3JkKCkge1xuICAgIHRoaXMucmVjb3JkU3RhcnRlZCA9IGZhbHNlO1xuICAgIGlmKHRoaXMucGxheWxpc3QpIHtcbiAgICAgIHRoaXMucGxheWxpc3QuZmluaXNoZWQoKTtcbiAgICAgIHRoaXMucGx1Z2luLnN0b3JhZ2VDb250cm9sbGVyLnNhdmVQbGF5bGlzdCh0aGlzLnBsYXlsaXN0KTtcbiAgICB9XG4gIH1cblxuICBzYXZlRnJhZ21lbnQoZnJhZykge1xuICAgIGlmKHRoaXMucGxheWxpc3QgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuaW5pdFBsYXlsaXN0KGZyYWcubGV2ZWwpO1xuICAgIH1cblxuICAgIGlmKHRoaXMucGxheWxpc3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgWGhyTG9hZGVyKCk7XG4gICAgY29uc3QgdXJsID0gZnJhZy51cmw7XG4gICAgY29uc3QgbG9hZGVyQ29udGV4dCA9IHtcbiAgICAgIHVybCxcbiAgICAgIGZyYWc6IHRoaXMucGxheWxpc3QuYWRkRnJhZ21lbnQoZnJhZy5kdXJhdGlvbiwgdXJsKSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcbiAgICAgIHByb2dyZXNzRGF0YTogZmFsc2UsXG4gICAgICBsb2FkZXJcbiAgICB9O1xuICAgIGNvbnN0IGxvYWRlckNvbmZpZyA9IHtcbiAgICAgIHRpbWVvdXQ6IDYwLFxuICAgICAgbWF4UmV0cnk6IDAsXG4gICAgICByZXRyeURlbGF5OiAwLFxuICAgICAgbWF4UmV0cnlEZWxheTogM1xuICAgIH07XG5cbiAgICBjb25zdCBsb2FkZXJDYWxsYmFja3MgPSB7XG4gICAgICBvblN1Y2Nlc3M6IHRoaXMuZnJhZ21lbnRMb2FkZWQsXG4gICAgfTtcbiAgICBsb2FkZXIubG9hZChsb2FkZXJDb250ZXh0LCBsb2FkZXJDb25maWcsIGxvYWRlckNhbGxiYWNrcyk7XG4gIH1cblxuICBpbml0UGxheWxpc3QobGV2ZWxJbmRleCkge1xuICAgIGNvbnN0IGhsc2pzID0gdGhpcy5wbHVnaW4uZ2V0SGxzSnMoKTtcbiAgICBjb25zdCBsZXZlbCA9IGhsc2pzLmxldmVsc1tsZXZlbEluZGV4XTtcbiAgICBjb25zdCBtaW1lUHJvbWlzZSA9ICh0aGlzLnBsdWdpbi5vcHRpb25zLnJlYWx0aW1lUmVjb3JkLmdldFJlY29yZE1pbWUgfHwgZmFjZU1pbWVQcm9taXNlKSgpO1xuXG4gICAgaWYoIWxldmVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wbGF5bGlzdCA9IG5ldyBQbGF5bGlzdE1vZGVsKHtcbiAgICAgIGlkOiAncmVjb3JkLScgKyBub3dJbkZvcm1hdFltZEhpcygpLFxuICAgICAgd2lkdGg6IGxldmVsLndpZHRoLFxuICAgICAgaGVpZ2h0OiBsZXZlbC5oZWlnaHQsXG4gICAgICB0YXJnZXRkdXJhdGlvbjogbGV2ZWwuZGV0YWlscy50YXJnZXRkdXJhdGlvblxuICAgIH0pO1xuXG4gICAgbWltZVByb21pc2UudGhlbigobWltZSkgPT4ge1xuICAgICAgdGhpcy5wbGF5bGlzdC5taW1lID0gbWltZTtcbiAgICAgIHRoaXMucGx1Z2luLnN0b3JhZ2VDb250cm9sbGVyLnNhdmVQbGF5bGlzdCh0aGlzLnBsYXlsaXN0KTtcbiAgICB9KVxuICB9XG5cbiAgZnJhZ21lbnRMb2FkZWQgPSAocmVzcG9uc2UsIHN0YXRzLCBjb250ZXh0LCBuZXR3b3JrRGV0YWlscyA9IG51bGwpID0+IHtcbiAgICBjb250ZXh0LmxvYWRlci5kZXN0cm95KCk7XG4gICAgY29udGV4dC5sb2FkZXIgPSBudWxsO1xuXG4gICAgdGhpcy5wbHVnaW4uc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUZyYWdtZW50KGNvbnRleHQuZnJhZywgcmVzcG9uc2UuZGF0YSwgc3RhdHMpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5wbGF5bGlzdC5mcmFnbWVudFNhdmVkKGNvbnRleHQuZnJhZyk7XG4gICAgICB0aGlzLnBsdWdpbi5zdG9yYWdlQ29udHJvbGxlci5zYXZlUGxheWxpc3QodGhpcy5wbGF5bGlzdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgaGxzRnJhZ21lbnRMb2FkZWQgPSAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICBpZih0aGlzLnJlY29yZFN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMuc2F2ZUZyYWdtZW50KGRhdGEuZnJhZyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFsdGltZVJlY29yZENvbnRyb2xsZXI7XG4iLCJjb25zdCBEQl9WRVJTSU9OID0gMTtcbmNvbnN0IFNUT1JBR0VfV1JJVEVfTU9ERSA9ICdyZWFkd3JpdGUnO1xuY29uc3QgU1RPUkFHRV9SRUFEX01PREUgPSAncmVhZG9ubHknO1xuXG5jbGFzcyBTdG9yYWdlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHBsdWdpbikge1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMuZGIgPSBudWxsO1xuICB9XG5cblxuICBpbml0KCkge1xuICAgIGNvbnN0IG9wZW5SZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4odGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlRGJOYW1lLCBEQl9WRVJTSU9OKTtcbiAgICBvcGVuUmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRiID0gb3BlblJlcXVlc3QucmVzdWx0O1xuICAgICAgaWYgKCF0aGlzLmRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnModGhpcy5vcHRpb25zLnN0b3JhZ2VQbGF5bGlzdHNOYW1lKSkge1xuICAgICAgICB0aGlzLmRiLmNyZWF0ZU9iamVjdFN0b3JlKHRoaXMub3B0aW9ucy5zdG9yYWdlUGxheWxpc3RzTmFtZSwge2tleVBhdGg6ICdpZCd9KTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKHRoaXMub3B0aW9ucy5zdG9yYWdlRnJhZ21lbnRzTmFtZSkpIHtcbiAgICAgICAgY29uc3QgZnJhZ21lbnRzU3RvcmFnZSA9IHRoaXMuZGIuY3JlYXRlT2JqZWN0U3RvcmUodGhpcy5vcHRpb25zLnN0b3JhZ2VGcmFnbWVudHNOYW1lLCB7a2V5UGF0aDogJ3V1aWQnfSk7XG4gICAgICAgIGZyYWdtZW50c1N0b3JhZ2UuY3JlYXRlSW5kZXgoJ3BsYXlsaXN0SWQnLCAncGxheWxpc3RJZCcsIHt1bmlxdWU6IGZhbHNlfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG9wZW5SZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIHRoaXMuZGIgPSBvcGVuUmVxdWVzdC5yZXN1bHQ7XG4gICAgfTtcbiAgfVxuXG4gIGNoZWNrUmVxdWlyZW1lbnRzKCkge1xuICAgIHJldHVybiAnaW5kZXhlZERCJyBpbiB3aW5kb3c7XG4gIH1cblxuICAvL1RPRE86IG5lZWQgdG8gYWRkIGVycm9yIHByb2Nlc3NpbmdcbiAgc2F2ZUZyYWdtZW50KGZyYWdtZW50LCBwYXlsb2FkLCBzdGF0cykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYodGhpcy5kYiA9PT0gbnVsbCkge1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXMuZGIudHJhbnNhY3Rpb24odGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlRnJhZ21lbnRzTmFtZSwgU1RPUkFHRV9XUklURV9NT0RFKTtcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSh0aGlzLnBsdWdpbi5vcHRpb25zLnN0b3JhZ2VGcmFnbWVudHNOYW1lKTtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yYWdlLmFkZCh7XG4gICAgICAgIC4uLmZyYWdtZW50LFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgICBzdGF0c1xuICAgICAgfSk7XG5cbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXAoXCJjYWNoZS1kcml2ZXIuanM6MTcgLSBzdG9yZSAtIG9uc3VjY2Vzc1wiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgIH07XG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cChcImNhY2hlLWRyaXZlci5qczoxNyAtIHN0b3JlIC0gb25lcnJvclwiKTtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKHJlcXVlc3QpO1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICB9O1xuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vVE9ETzogbmVlZCB0byBhZGQgZXJyb3IgcHJvY2Vzc2luZ1xuICBzYXZlUGxheWxpc3QocGxheWxpc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmKHRoaXMuZGIgPT09IG51bGwpIHtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0aGlzLmRiLnRyYW5zYWN0aW9uKHRoaXMucGx1Z2luLm9wdGlvbnMuc3RvcmFnZVBsYXlsaXN0c05hbWUsIFNUT1JBR0VfV1JJVEVfTU9ERSk7XG4gICAgICBjb25zdCBzdG9yYWdlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlUGxheWxpc3RzTmFtZSk7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gc3RvcmFnZS5wdXQocGxheWxpc3QpO1xuXG4gICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwKFwiY2FjaGUtZHJpdmVyLmpzOjE3IC0gc3RvcmUgLSBvbnN1Y2Nlc3NcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3QpO1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICB9O1xuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXAoXCJjYWNoZS1kcml2ZXIuanM6MTcgLSBzdG9yZSAtIG9uZXJyb3JcIik7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybihyZXF1ZXN0KTtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgfTtcbiAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2VDb250cm9sbGVyO1xuIiwiaW1wb3J0IFJlY1NldHRpbmdzTW9kYWxIbHNKcyBmcm9tIFwiLi4vQ29tcG9uZW50cy9SZWNTZXR0aW5nc01vZGFsSGxzSnNcIjtcblxuY2xhc3MgVmlld0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihwbHVnaW4pIHtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcblxuICAgIHRoaXMucmVjQnV0dG9uQ29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLnN0b3BCdXR0b25Db21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLnByb2dyZXNzQ29udHJvbENvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5saXZlQnV0dG9uQ29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLmNhY2hlZEJ1dHRvbkNvbXBvbmVudCA9IG51bGw7XG5cblxuICAgIHRoaXMucmVjU2V0dGluZ3NNb2RhbENvbXBvbmVudCA9IG51bGw7XG5cbiAgICB0aGlzLmxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWMgPSBbXTtcbiAgfVxuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udHJvbEJhciA9IHRoaXMucGx1Z2luLnBsYXllci5nZXRDaGlsZCgnQ29udHJvbEJhcicpO1xuICAgIGNvbnN0IHNwYWNlID0gY29udHJvbEJhci5hZGRDaGlsZCgnQ29tcG9uZW50Jywge30sIDIpO1xuICAgIHNwYWNlLmFkZENsYXNzKCd2anMtaGxzanMtY29udHJvbHMtaG9sZGVyJyk7XG5cbiAgICB0aGlzLnJlbW92ZURlZmF1bHRDb250cm9scygpO1xuXG4gICAgdGhpcy5saXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjID0gdGhpcy5wbHVnaW4ub3B0aW9ucy5saXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjLm1hcCgoc2VsZWN0b3IpID0+IHtcbiAgICAgIHJldHVybiBjb250cm9sQmFyLmNoaWxkcmVuKCkuZmlsdGVyKGNvbXBvbmVudCA9PiBjb21wb25lbnQuaGFzQ2xhc3Moc2VsZWN0b3IpKVswXTtcbiAgICB9KS5maWx0ZXIoY29tcG9uZW50ID0+ICEhY29tcG9uZW50KTtcblxuICAgIHRoaXMuY2FjaGVkQnV0dG9uQ29tcG9uZW50ID0gc3BhY2UuYWRkQ2hpbGQoJ0NhY2hlZEJ1dHRvbkhsc0pzJywge1xuICAgICAgY2xpY2tIYW5kbGVyOiB0aGlzLmFjdGl2ZUxpdmVNb2RlXG4gICAgfSwgMSk7XG4gICAgdGhpcy5jYWNoZWRCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuXG4gICAgdGhpcy5saXZlQnV0dG9uQ29tcG9uZW50ID0gY29udHJvbEJhci5hZGRDaGlsZCgnTGl2ZUJ1dHRvbkhsc0pzJywge1xuICAgICAgY2xpY2tIYW5kbGVyOiB0aGlzLmFjdGl2YXRlUHJvZ3Jlc3NNb2RlXG4gICAgfSwgMik7XG4gICAgdGhpcy5saXZlQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcblxuICAgIHRoaXMucmVjQnV0dG9uQ29tcG9uZW50ID0gc3BhY2UuYWRkQ2hpbGQoJ1JlY0J1dHRvbkhsc0pzJywge1xuICAgICAgY2xpY2tIYW5kbGVyOiB0aGlzLnNob3dSZWNvcmRTZXR0aW5nc1xuICAgIH0sIDEpO1xuICAgIHRoaXMucmVjQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcblxuICAgIHRoaXMuc3RvcEJ1dHRvbkNvbXBvbmVudCA9IGNvbnRyb2xCYXIuYWRkQ2hpbGQoJ1N0b3BCdXR0b25IbHNKcycsIHtcbiAgICAgIGNsaWNrSGFuZGxlcjogdGhpcy5wbHVnaW4uc3RvcFJlYWx0aW1lUmVjb3JkXG4gICAgfSwgMSk7XG4gICAgdGhpcy5zdG9wQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcblxuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50ID0gc3BhY2UuYWRkQ2hpbGQoJ1JlY1N0YXR1c0Jhckhsc0pzJywgMSk7XG4gICAgdGhpcy5yZWNTdGF0dXNCYXJDb21wb25lbnQuaGlkZSgpO1xuXG4gICAgdGhpcy5wcm9ncmVzc0NvbnRyb2xDb21wb25lbnQgPSBzcGFjZS5hZGRDaGlsZCgnUHJvZ3Jlc3NDb250cm9sSGxzSnMnLCB7fSwgMik7XG4gICAgdGhpcy5wcm9ncmVzc0NvbnRyb2xDb21wb25lbnQuaGlkZSgpO1xuXG4gICAgdGhpcy5hY3RpdmVMaXZlTW9kZSgpO1xuICB9O1xuXG4gIHJlbW92ZURlZmF1bHRDb250cm9scyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250cm9sQmFyID0gdGhpcy5wbHVnaW4ucGxheWVyLmdldENoaWxkKCdDb250cm9sQmFyJyk7XG4gICAgY29udHJvbEJhci5yZW1vdmVDaGlsZCgnUHJvZ3Jlc3NDb250cm9sJyk7XG4gICAgY29udHJvbEJhci5yZW1vdmVDaGlsZCgnU2Vla1RvTGl2ZScpO1xuICAgIGNvbnRyb2xCYXIucmVtb3ZlQ2hpbGQoJ0xpdmVEaXNwbGF5Jyk7XG4gIH07XG5cbiAgYWN0aXZlTGl2ZU1vZGUgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc2hvd090aGVyQ29udHJvbCgpO1xuICAgICAgdGhpcy5zaG93TGl2ZUNvbnRyb2woKTtcbiAgICAgIHRoaXMuaGlkZVByb2dyZXNzQ29udHJvbCgpO1xuICAgICAgdGhpcy5oaWRlUmVjQ29udHJvbCgpO1xuICAgICAgdGhpcy5wbHVnaW4ucGxheWVyLmxpdmVUcmFja2VyLnNlZWtUb0xpdmVFZGdlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5wbHVnaW4ucGxheWVyLmxvZy53YXJuKGUubWVzc2FnZSlcbiAgICB9XG4gIH07XG5cbiAgYWN0aXZhdGVQcm9ncmVzc01vZGUgPSAoKSA9PiB7XG4gICAgaWYodGhpcy5wbHVnaW4uc3RhdGUucmVjb3JkSW5Qcm9jZXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2hvd090aGVyQ29udHJvbCgpO1xuICAgIHRoaXMuc2hvd1Byb2dyZXNzQ29udHJvbCgpO1xuICAgIHRoaXMuaGlkZUxpdmVDb250cm9sKCk7XG4gICAgdGhpcy5oaWRlUmVjQ29udHJvbCgpO1xuICB9O1xuXG4gIHNob3dSZWNvcmRTZXR0aW5ncyA9ICgpID0+IHtcbiAgICB0aGlzLnJlY1NldHRpbmdzTW9kYWxDb21wb25lbnQgPSBuZXcgUmVjU2V0dGluZ3NNb2RhbEhsc0pzKHRoaXMucGx1Z2luLnBsYXllciwgdGhpcy5wbHVnaW4ub3B0aW9ucyk7XG4gICAgdGhpcy5wbHVnaW4ucGxheWVyLmFkZENoaWxkKHRoaXMucmVjU2V0dGluZ3NNb2RhbENvbXBvbmVudCk7XG4gICAgdGhpcy5yZWNTZXR0aW5nc01vZGFsQ29tcG9uZW50Lm9wZW4oKTtcbiAgfTtcblxuICBhY3RpdmF0ZVJlY29yZE1vZGUgPSAoKSA9PiB7XG4gICAgdGhpcy5yZWNTZXR0aW5nc01vZGFsQ29tcG9uZW50LmNsb3NlKCk7XG4gICAgdGhpcy5oaWRlUHJvZ3Jlc3NDb250cm9sKCk7XG4gICAgdGhpcy5oaWRlTGl2ZUNvbnRyb2woKTtcbiAgICB0aGlzLmhpZGVPdGhlckNvbnRyb2woKTtcbiAgICB0aGlzLnNob3dSZWNDb250cm9sKCk7XG4gIH07XG5cbiAgc2hvd1JlY0NvbnRyb2wgPSAoKSA9PiB7XG4gICAgY29uc3QgbWF4UmVjb3JkU2Vjb25kcyA9IHRoaXMucGx1Z2luLm9wdGlvbnMubWF4UmVjb3JkTWludXRlcyAqIDYwO1xuICAgIHRoaXMucGx1Z2luLnBsYXllci5hZGRDbGFzcygndmpzLWhsc2pzLXJlY29yZC1zdGFydGVkJyk7XG4gICAgdGhpcy5yZWNTdGF0dXNCYXJDb21wb25lbnQudXBkYXRlUmVjb3JkTGVmdFRpbWUobWF4UmVjb3JkU2Vjb25kcyk7XG4gICAgdGhpcy5yZWNTdGF0dXNCYXJDb21wb25lbnQudXBkYXRlUmVjb3JkVGltZSgwKTtcbiAgICBsZXQgYSA9IDE7XG4gICAgdGhpcy5yZWNvcmRVcGRhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmKGEgPj0gbWF4UmVjb3JkU2Vjb25kcykge1xuICAgICAgICB0aGlzLnBsdWdpbi5zdG9wUmVhbHRpbWVSZWNvcmQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50LnVwZGF0ZVJlY29yZFRpbWUoYSsrKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuc3RvcEJ1dHRvbkNvbXBvbmVudC5zaG93KCk7XG4gICAgdGhpcy5yZWNTdGF0dXNCYXJDb21wb25lbnQuc2hvdygpO1xuICB9O1xuXG4gIGhpZGVSZWNDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMucGx1Z2luLnBsYXllci5yZW1vdmVDbGFzcygndmpzLWhsc2pzLXJlY29yZC1zdGFydGVkJyk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnJlY29yZFVwZGF0ZUludGVydmFsKTtcbiAgICB0aGlzLnN0b3BCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50LmhpZGUoKTtcbiAgfTtcblxuICBzaG93UHJvZ3Jlc3NDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMucHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50LnNob3coKTtcbiAgICB0aGlzLmNhY2hlZEJ1dHRvbkNvbXBvbmVudC5zaG93KCk7XG4gIH07XG5cbiAgaGlkZVByb2dyZXNzQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLnByb2dyZXNzQ29udHJvbENvbXBvbmVudC5oaWRlKCk7XG4gICAgdGhpcy5jYWNoZWRCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuICB9O1xuXG4gIGhpZGVPdGhlckNvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5saXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudC5hZGRDbGFzcygndmpzLWhsc2pzLWxyLWhpZGRlbicpKTtcbiAgfTtcblxuICBzaG93T3RoZXJDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMubGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQucmVtb3ZlQ2xhc3MoJ3Zqcy1obHNqcy1sci1oaWRkZW4nKSk7XG4gIH07XG5cblxuICBzaG93TGl2ZUNvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5saXZlQnV0dG9uQ29tcG9uZW50LnNob3coKTtcbiAgICB0aGlzLnJlY0J1dHRvbkNvbXBvbmVudC5zaG93KCk7XG4gIH07XG5cbiAgaGlkZUxpdmVDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMubGl2ZUJ1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG4gICAgdGhpcy5yZWNCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuICB9O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdDb250cm9sbGVyO1xuIiwiaW1wb3J0IHtmYWNlVVVJRH0gZnJvbSBcIi4uL3V0aWxzL3V1aWRcIjtcblxuZXhwb3J0IGNsYXNzIEZyYWdtZW50TW9kZWwge1xuICBjb25zdHJ1Y3RvcihmcmFnbWVudERhdGEpIHtcbiAgICB0aGlzLmR1cmF0aW9uID0gZnJhZ21lbnREYXRhLmR1cmF0aW9uIHx8IDA7XG4gICAgdGhpcy51cmwgPSBmcmFnbWVudERhdGEudXJsIHx8ICcnO1xuICAgIHRoaXMucGxheWxpc3RJZCA9IGZyYWdtZW50RGF0YS5wbGF5bGlzdElkIHx8ICd0bXAnO1xuICAgIHRoaXMudXVpZCA9IGZhY2VVVUlEKHRoaXMucGxheWxpc3RJZCArICctJyArIHRoaXMudXJsLnNwbGl0KCcvJykucG9wKCkpO1xuICAgIHRoaXMuc2F2ZWQgPSBmcmFnbWVudERhdGEuc2F2ZWQgfHwgZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7RnJhZ21lbnRNb2RlbH0gZnJvbSBcIi4vRnJhZ21lbnRcIjtcblxuY29uc3QgY3JlYXRlUGxheWxpc3RIZWFkZXIgPSAodGFyZ2V0ZHVyYXRpb24pID0+IHtcbiAgcmV0dXJuIFwiI0VYVE0zVVxcblwiICtcbiAgICBcIiNFWFQtWC1WRVJTSU9OOjRcXG5cIiArXG4gICAgXCIjRVhULVgtVEFSR0VURFVSQVRJT046XCIgKyB0YXJnZXRkdXJhdGlvbiArIFwiXFxuXCIgK1xuICAgIFwiI0VYVC1YLU1FRElBLVNFUVVFTkNFOjBcXG5cIjtcbn07XG5jb25zdCBhZGRQbGF5bGlzdEZyYWdtZW50ID0gKGR1cmFjdGlvbiwgdXJsKSA9PiB7XG5yZXR1cm4gXCIjRVhUSU5GOlwiICsgZHVyYWN0aW9uICsgXCIsXFxuXCIgK1xuICB1cmwgKyBcIlxcblwiO1xufTtcbmNvbnN0IGNyZWF0ZVBsYXlsaXN0Rm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gXCIjRVhULVgtRU5ETElTVFxcblwiO1xufTtcblxuXG5leHBvcnQgY2xhc3MgUGxheWxpc3RNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKHBsYXlsaXN0RGF0YSkge1xuICAgIHRoaXMuaWQgPSBwbGF5bGlzdERhdGEuaWQgfHwgJyc7XG4gICAgdGhpcy53aWR0aCA9IHBsYXlsaXN0RGF0YS53aWR0aCB8fCAzODQ7XG4gICAgdGhpcy5oZWlnaHQgPSBwbGF5bGlzdERhdGEuaGVpZ2h0IHx8IDM4NDtcbiAgICB0aGlzLmZyYWdtZW50cyA9IHBsYXlsaXN0RGF0YS5mcmFnbWVudHMgfHwgW107XG4gICAgdGhpcy50YXJnZXRkdXJhdGlvbiA9IHBsYXlsaXN0RGF0YS50YXJnZXRkdXJhdGlvbiB8fCAwO1xuICAgIHRoaXMubWltZSA9IHBsYXlsaXN0RGF0YS5taW1lIHx8IHt9O1xuICAgIHRoaXMuY3JlYXRlZEF0ID0gcGxheWxpc3REYXRhLmNyZWF0ZWRBdCB8fCBEYXRlLm5vdygpO1xuICAgIHRoaXMudXBkYXRlZEF0ID0gcGxheWxpc3REYXRhLnVwZGF0ZWRBdCB8fCBudWxsO1xuICAgIHRoaXMucmVjRmluaXNoZWQgPSBwbGF5bGlzdERhdGEucmVjRmluaXNoZWQgfHwgZmFsc2U7XG4gIH1cblxuICBhZGRGcmFnbWVudChkdXJhdGlvbiwgdXJsKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRnJhZ21lbnRNb2RlbCh7ZHVyYXRpb24sIHVybH0pO1xuICAgIHRoaXMuZnJhZ21lbnRzLnB1c2goZnJhZ21lbnQpO1xuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfVxuXG4gIGZyYWdtZW50U2F2ZWQoZnJhZ21lbnQpIHtcbiAgICB0aGlzLmZyYWdtZW50cyA9IHRoaXMuZnJhZ21lbnRzLm1hcCgoZnJhZykgPT4ge1xuICAgICAgaWYoZnJhZy51dWlkID09PSBmcmFnbWVudC51dWlkKSB7XG4gICAgICAgIGZyYWcuc2F2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZyYWc7XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZWRBdCA9IERhdGUubm93KCk7XG4gIH1cblxuICBmaW5pc2hlZCgpIHtcbiAgICB0aGlzLnVwZGF0ZWRBdCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5yZWNGaW5pc2hlZCA9IHRydWU7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gY3JlYXRlUGxheWxpc3RIZWFkZXIodGhpcy50YXJnZXRkdXJhdGlvbikgK1xuICAgICAgKHRoaXMuZnJhZ21lbnRzLmZpbHRlcihmcmFnbWVudCA9PiAoZnJhZ21lbnQuc2F2ZWQpKVxuICAgICAgICAubWFwKGZyYWdtZW50ID0+IChhZGRQbGF5bGlzdEZyYWdtZW50KGZyYWdtZW50LmR1cmF0aW9uLCBmcmFnbWVudC51dWlkKSkpLmpvaW4oJycpKSArXG4gICAgICBjcmVhdGVQbGF5bGlzdEZvb3RlcigpO1xuICB9XG59XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbmNvbnN0IFZpZGVvSnNCdXR0b25DbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FjaGVkQnV0dG9uSGxzSnMgZXh0ZW5kcyBWaWRlb0pzQnV0dG9uQ2xhc3Mge1xuICBcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucykpO1xuICB9XG5cbiAgY3JlYXRlRWwodGFnLCBwcm9wcyA9IHt9LCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICB0aGlzLm5vbkljb25Db250cm9sID0gdHJ1ZTtcblxuICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAvLyBjbGFzc05hbWU6ICd2anMtbGl2ZS1kaXNwbGF5JyxcbiAgICAgIC8vIGlubmVySFRNTDogJ0RWUicsXG4gICAgICBjbGFzc05hbWU6ICd2anMtc2Vlay10by1saXZlLWNvbnRyb2wnLFxuICAgICAgaW5uZXJIVE1MOiAnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ2anMtaWNvbi1wbGFjZWhvbGRlclwiPjwvc3Bhbj5MSVZFJyxcbiAgICB9LCBwcm9wcyk7XG5cbiAgICBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYXJpYS1saXZlJzogJ09uJ1xuICAgIH0sIGF0dHJpYnV0ZXMpO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKHRhZywgcHJvcHMsIGF0dHJpYnV0ZXMpO1xuICB9XG5cbiAgY3JlYXRlQ29udHJvbFRleHRFbChlbCkge1xuICAgIHRoaXMuY29udHJvbFRleHRfID0gJ1N0cmVhbSBUeXBlJztcbiAgICBzdXBlci5jcmVhdGVDb250cm9sVGV4dEVsKGVsKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbmNvbnN0IFZpZGVvSnNCdXR0b25DbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZUJ1dHRvbkhsc0pzIGV4dGVuZHMgVmlkZW9Kc0J1dHRvbkNsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucykpO1xuICB9XG5cbiAgY3JlYXRlRWwodGFnLCBwcm9wcyA9IHt9LCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICB0aGlzLm5vbkljb25Db250cm9sID0gdHJ1ZTtcblxuICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICd2anMtY29udHJvbCB2anMtc2Vlay10by1saXZlLWNvbnRyb2wgdmpzLWF0LWxpdmUtZWRnZScsXG4gICAgICBpbm5lckhUTUw6ICc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cInZqcy1pY29uLXBsYWNlaG9sZGVyXCI+PC9zcGFuPkxJVkUnLFxuICAgIH0sIHByb3BzKTtcblxuICAgIGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICdhcmlhLWxpdmUnOiAnb2ZmJ1xuICAgIH0sIGF0dHJpYnV0ZXMpO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKHRhZywgcHJvcHMsIGF0dHJpYnV0ZXMpO1xuICB9XG5cbiAgY3JlYXRlQ29udHJvbFRleHRFbChlbCkge1xuICAgIHRoaXMuY29udHJvbFRleHRfID0gJ1N0cmVhbSBUeXBlJztcbiAgICBzdXBlci5jcmVhdGVDb250cm9sVGV4dEVsKGVsKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbmNvbnN0IFZpZGVvSnNQcm9ncmVzc0NvbnRyb2xDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnUHJvZ3Jlc3NDb250cm9sJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3NDb250cm9sSGxzSnMgZXh0ZW5kcyBWaWRlb0pzUHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzQnV0dG9uQ2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY0J1dHRvbkhsc0pzIGV4dGVuZHMgVmlkZW9Kc0J1dHRvbkNsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucykpO1xuICB9XG5cbiAgY3JlYXRlRWwodGFnLCBwcm9wcyA9IHt9LCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICB0aGlzLm5vbkljb25Db250cm9sID0gdHJ1ZTtcblxuICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICd2anMtY29udHJvbCB2anMtc2Vlay10by1saXZlLWNvbnRyb2wnLFxuICAgICAgaW5uZXJIVE1MOiAnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ2anMtaWNvbi1wbGFjZWhvbGRlclwiPjwvc3Bhbj5SRUMnLFxuICAgIH0sIHByb3BzKTtcblxuICAgIGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICdhcmlhLWxpdmUnOiAnT24nXG4gICAgfSwgYXR0cmlidXRlcyk7XG5cbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlRWwodGFnLCBwcm9wcywgYXR0cmlidXRlcyk7XG4gIH1cblxuICBjcmVhdGVDb250cm9sVGV4dEVsKGVsKSB7XG4gICAgdGhpcy5jb250cm9sVGV4dF8gPSAnU3RhcnQgUmVjb3JkJztcbiAgICBzdXBlci5jcmVhdGVDb250cm9sVGV4dEVsKGVsKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5pbXBvcnQgZm9ybWF0VGltZSBmcm9tICcuLi91dGlscy9mb3JtYXQtdGltZSc7XG5cbmNvbnN0IFZpZGVvSnNDb21wb25lbnRDbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjU3RhdHVzQmFySGxzSnMgZXh0ZW5kcyBWaWRlb0pzQ29tcG9uZW50Q2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKSk7XG4gIH1cblxuICBjcmVhdGVFbCgpIHtcbiAgICB0aGlzLm5vbkljb25Db250cm9sID0gdHJ1ZTtcbiAgICBjb25zdCBlbGVtID0gc3VwZXIuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1jb250cm9sIHZqcy1obHNqcy1sci1yZWMtc3RhdHVzLWJhcicsXG4gICAgICBpbm5lckhUTUw6ICc8c3BhbiBjbGFzcz1cInZqcy1obHNqcy1sci1yZWMtaW5kaWNhdG9yXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtZC0xMFwiPmZpYmVyX21hbnVhbF9yZWNvcmQ8L2k+UkVDPC9zcGFuPidcbiAgICB9KTtcblxuXG4gICAgdGhpcy5yZWNvcmRlZEVsXyA9IERvbS5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1sci1yZWNvcmRlZCcsXG4gICAgICBpbm5lclRleHQ6ICctLTotLTotLSdcbiAgICB9LCB7XG4gICAgICAnYXJpYS1saXZlJzogJ29mZicsXG4gICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgfSk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnJlY29yZGVkRWxfKTtcblxuICAgIGVsZW0uYXBwZW5kQ2hpbGQoXG4gICAgICBEb20uY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1sci1kaXZpZGVyJyxcbiAgICAgICAgaW5uZXJUZXh0OiAnLydcbiAgICAgIH0sIHtcbiAgICAgICAgJ2FyaWEtbGl2ZSc6ICdvZmYnLFxuICAgICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnJlY29yZExlZnRFbF8gPSBEb20uY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtbHItcmVjb3JkLWxlZnQnLFxuICAgICAgaW5uZXJUZXh0OiAnLS06LS06LS0nXG4gICAgfSwge1xuICAgICAgJ2FyaWEtbGl2ZSc6ICdvZmYnLFxuICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgIH0pO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5yZWNvcmRMZWZ0RWxfKTtcblxuICAgIHRoaXMudXBkYXRlUmVjb3JkVGltZSgwKTtcbiAgICB0aGlzLnVwZGF0ZVJlY29yZExlZnRUaW1lKDYwICogNjApO1xuICAgIHJldHVybiBlbGVtO1xuICB9O1xuXG4gIHVwZGF0ZVJlY29yZFRpbWUodGltZSkge1xuICAgIGlmKHRoaXMucmVjb3JkZWRFbF8pIHtcbiAgICAgIHRoaXMucmVjb3JkZWRFbF8uaW5uZXJUZXh0ID0gZm9ybWF0VGltZSh0aW1lKTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlUmVjb3JkTGVmdFRpbWUodGltZSkge1xuICAgIGlmKHRoaXMucmVjb3JkTGVmdEVsXykge1xuICAgICAgdGhpcy5yZWNvcmRMZWZ0RWxfLmlubmVyVGV4dCA9IGZvcm1hdFRpbWUodGltZSk7XG4gICAgfVxuICB9O1xuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5yZWNvcmRlZEVsXyA9IG51bGw7XG4gICAgdGhpcy5yZWNvcmRMZWZ0RWxfID0gbnVsbDtcblxuICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbmNvbnN0IFZpZGVvSnNCdXR0b25DbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcEJ1dHRvbkhsc0pzIGV4dGVuZHMgVmlkZW9Kc0J1dHRvbkNsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucykpO1xuICB9XG5cbiAgY3JlYXRlRWwodGFnLCBwcm9wcyA9IHt9LCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICB0aGlzLm5vbkljb25Db250cm9sID0gZmFsc2U7XG5cbiAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWNvbnRyb2wgdmpzLWhsc2pzLWxyLXN0b3AnLFxuICAgICAgaW5uZXJIVE1MOiAnPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnN0b3A8L2k+JyxcbiAgICB9LCBwcm9wcyk7XG5cbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlRWwodGFnLCBwcm9wcywgYXR0cmlidXRlcyk7XG4gIH1cblxuICBjcmVhdGVDb250cm9sVGV4dEVsKGVsKSB7XG4gICAgdGhpcy5jb250cm9sVGV4dF8gPSAnU3RvcCBSZWNvcmQnO1xuICAgIHN1cGVyLmNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCAnLi9wbHVnaW4uc2Nzcyc7XG5pbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5jb25zdCBQbHVnaW4gPSB2aWRlb2pzLmdldFBsdWdpbigncGx1Z2luJyk7XG5pbXBvcnQge3ZlcnNpb24gYXMgVkVSU0lPTn0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcbmltcG9ydCBQcm9ncmVzc0NvbnRyb2xIbHNKcyBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2dyZXNzQ29udHJvbEhsc0pzXCI7XG5pbXBvcnQgTGl2ZUJ1dHRvbkhsc0pzIGZyb20gXCIuL2NvbXBvbmVudHMvTGl2ZUJ1dHRvbkhsc0pzXCI7XG5pbXBvcnQgQ2FjaGVkQnV0dG9uSGxzSnMgZnJvbSBcIi4vY29tcG9uZW50cy9DYWNoZWRCdXR0b25IbHNKc1wiO1xuaW1wb3J0IFJlY0J1dHRvbkhsc0pzIGZyb20gXCIuL2NvbXBvbmVudHMvUmVjQnV0dG9uSGxzSnNcIjtcbmltcG9ydCBTdG9wQnV0dG9uSGxzSnMgZnJvbSBcIi4vY29tcG9uZW50cy9TdG9wQnV0dG9uSGxzSnNcIjtcbmltcG9ydCBSZWNTdGF0dXNCYXJIbHNKcyBmcm9tIFwiLi9jb21wb25lbnRzL1JlY1N0YXR1c0Jhckhsc0pzXCI7XG5pbXBvcnQgVmlld0NvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvVmlld0NvbnRyb2xsZXJcIjtcbmltcG9ydCBTdG9yYWdlQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVycy9TdG9yYWdlQ29udHJvbGxlclwiO1xuaW1wb3J0IFJlYWx0aW1lUmVjb3JkQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVycy9SZWFsdGltZVJlY29yZENvbnRyb2xsZXJcIjtcblxuXG4vKipcbiAqIEEgRGVmYXVsdCBjb25maWd1cmF0aW9uXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBEZWZhdWx0Q29uZmlnXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBsaXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjIC0gTGlzdCBvZiBpbnRlcmZhY2UgZWxlbWVudHMgdGhhdCBzaG91bGQgYmUgaGlkZGVuIGluIHJlY29yZGluZyBtb2RlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc3RvcmFnZURiTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBJbmRleGVkREIgZGF0YWJhc2UgdXNlZCB0byBzYXZlIHJlY29yZHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdG9yYWdlUGxheWxpc3RzTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwbGF5bGlzdHMgc3RvcmFnZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHN0b3JhZ2VGcmFnbWVudHNOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGZyYWdtZW50cyBzdG9yYWdlXG4gKiBAcHJvcGVydHkge251bWJlcn0gbWF4UmVjb3JkTWludXRlcyAtIE1heGltdW0gcmVjb3JkIGR1cmF0aW9uIGluIG1pbnV0ZXNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWxsb3dlZCAtIEVuYWJsZSByZWNvcmRpbmcgZnVuY3Rpb25hbGl0eVxuICogQHByb3BlcnR5IHtudWxsIHwgY2FsbGJhY2s8c3RyaW5nIHwgSFRNTEVsZW1lbnQ+fSBub3RBbGxvd2VkQ29udGVudCAtIFRoaXMgY29udGVudCB3aWxsIGJlIGRpc3BsYXllZCBpZiByZWNvcmRpbmcgbm90IGFsbG93ZWRcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSByZWFsdGltZVJlY29yZCAtIFJlYWx0aW1lIHJlY29yZGluZyBjb25maWd1cmF0aW9uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHJlYWx0aW1lUmVjb3JkLmFsbG93ZWQgLSBFbmFibGUgcmVhbHRpbWUgcmVjb3JkaW5nIGZ1bmN0aW9uYWxpdHlcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcmVhbHRpbWVSZWNvcmQuaGlkZUlmTm90QWxsb3dlZCAtIEhpZGUgcmVhbHRpbWUgcmVjb3JkaW5nIHRhYiBpZiByZWFsdGltZSByZWNvcmRpbmcgbm90IGFsbG93ZWRcbiAqIEBwcm9wZXJ0eSB7bnVsbCB8IGNhbGxiYWNrPHN0cmluZyB8IEhUTUxFbGVtZW50Pn0gcmVhbHRpbWVSZWNvcmQubW9kYWxIZWFkZXJDb250ZW50IC0gSGVhZGVyIGNvbnRlbnQgb2YgdGhlIHJlYWx0aW1lIHJlY29yZGluZyB0YWJcbiAqIEBwcm9wZXJ0eSB7bnVsbCB8IGNhbGxiYWNrPHN0cmluZyB8IEhUTUxFbGVtZW50Pn0gcmVhbHRpbWVSZWNvcmQubW9kYWxGb290ZXJDb250ZW50IC0gRm9vdGVyIGNvbnRlbnQgb2YgdGhlIHJlYWx0aW1lIHJlY29yZGluZyB0YWJcbiAqIEBwcm9wZXJ0eSB7bnVsbCB8IGNhbGxiYWNrPHN0cmluZyB8IEhUTUxFbGVtZW50Pn0gcmVhbHRpbWVSZWNvcmQubm90QWxsb3dlZENvbnRlbnQgLSBUaGlzIGNvbnRlbnQgd2lsbCBiZSBkaXNwbGF5ZWQgaWYgcmVhbHRpbWUgcmVjb3JkaW5nIG5vdCBhbGxvd2VkXG4gKiBAcHJvcGVydHkge251bGwgfCBjYWxsYmFjazxQcm9taXNlPG9iamVjdD4+fSByZWFsdGltZVJlY29yZC5nZXRSZWNvcmRNaW1lIC0gT2JqZWN0IHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBpbmNsdWRlZCBpbiBwbGF5bGlzdCBhbmQgY2FuIGJlIHVzZWQgbGF0ZXJcbiAqL1xuXG4vKipcbiAqXG4gKiBAdHlwZSB7RGVmYXVsdENvbmZpZ31cbiAqL1xuY29uc3QgZGVmYXVsdHMgPSB7XG4gIGxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWM6IFsndmpzLXBsYXktY29udHJvbCcsICd2anMtcXVhbGl0eS1zZWxlY3RvciddLFxuICBzdG9yYWdlRGJOYW1lOiAndmpzLWhsc2pzLWxyJyxcbiAgc3RvcmFnZVBsYXlsaXN0c05hbWU6ICdwbGF5bGlzdHMnLFxuICBzdG9yYWdlRnJhZ21lbnRzTmFtZTogJ2ZyYWdtZW50cycsXG4gIG1heFJlY29yZE1pbnV0ZXM6IDYwLFxuICBhbGxvd2VkOiB0cnVlLFxuICBub3RBbGxvd2VkQ29udGVudDogbnVsbCxcbiAgcmVhbHRpbWVSZWNvcmQ6IHtcbiAgICBhbGxvd2VkOiB0cnVlLFxuICAgIG1vZGFsSGVhZGVyQ29udGVudDogbnVsbCxcbiAgICBtb2RhbEZvb3RlckNvbnRlbnQ6IG51bGwsXG4gICAgbm90QWxsb3dlZENvbnRlbnQ6IG51bGwsXG4gICAgZ2V0UmVjb3JkTWltZTogbnVsbCxcbiAgfVxufTtcblxuY2xhc3MgSGxzSlNMaXZlUmVjb3JkUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcblxuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9ucyA9IHZpZGVvanMubWVyZ2VPcHRpb25zKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLnN0b3JhZ2VDb250cm9sbGVyID0gbmV3IFN0b3JhZ2VDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMudmlld0NvbnRyb2xsZXIgPSBuZXcgVmlld0NvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy5yZWFsdGltZVJlY29yZENvbnRyb2xsZXIgPSBuZXcgUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgcGxheWVyLm9uKCdwbGF5aW5nJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGlmKHRoaXMuc3RhdGUuaW5pdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe2luaXQ6IHRydWV9KTtcbiAgICBpZih0aGlzLmNoZWNrUmVxdWlyZW1lbnRzKCkpIHtcbiAgICAgIHRoaXMucGxheWVyLmFkZENsYXNzKCd2anMtaGxzLWxpdmUtcmVjb3JkJyk7XG4gICAgICB0aGlzLnBsYXllci5vbigncGF1c2UnLCB0aGlzLnZpZXdDb250cm9sbGVyLmFjdGl2YXRlUHJvZ3Jlc3NNb2RlKTtcbiAgICAgIHRoaXMudmlld0NvbnRyb2xsZXIuaW5pdCgpO1xuICAgICAgdGhpcy5zdG9yYWdlQ29udHJvbGxlci5pbml0KCk7XG4gICAgICB0aGlzLnJlYWx0aW1lUmVjb3JkQ29udHJvbGxlci5pbml0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvanMubG9nLndhcm4oJ0hsc0pTTGl2ZVJlY29yZFBsdWdpbjogY2Fubm90IGJlIGluaXRpYWxpemVkIGJlY2F1c2Ugb25lIG9yIG1vcmUgb2YgdGhlIHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldC4nKTtcbiAgICB9XG4gIH07XG5cbiAgY2hlY2tSZXF1aXJlbWVudHMgPSAoKSA9PiB7XG4gICAgaWYoIXRoaXMuZ2V0SGxzSnMoKSkge1xuICAgICAgdmlkZW9qcy5sb2cud2FybignSGxzSlNMaXZlUmVjb3JkUGx1Z2luOiBITFMuSlMgcGx1Z2luIG5vdCBmb3VuZC4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5zdG9yYWdlQ29udHJvbGxlci5jaGVja1JlcXVpcmVtZW50cygpKSB7XG4gICAgICB2aWRlb2pzLmxvZy53YXJuKCdIbHNKU0xpdmVSZWNvcmRQbHVnaW46IFRoaXMgYnJvd3NlciBkb2VzblxcJ3Qgc3VwcG9ydCBJbmRleGVkREIuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGdldEhsc0pzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnBsYXllci50ZWNoKHsgSVdpbGxVc2VUaGlzSW5QbHVnaW46IHRydWUgfSkuc291cmNlSGFuZGxlcl8uaGxzO1xuICB9O1xuXG4gIHN0YXJ0UmVhbHRpbWVSZWNvcmQobGV2ZWxJZCkge1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICByZWNvcmRJblByb2Nlc3M6IHRydWVcbiAgICB9KTtcblxuICAgIHRoaXMuZ2V0SGxzSnMoKS5jdXJyZW50TGV2ZWwgPSBsZXZlbElkICogMTtcbiAgICB0aGlzLnZpZXdDb250cm9sbGVyLmFjdGl2YXRlUmVjb3JkTW9kZSgpO1xuXG4gICAgdGhpcy5yZWFsdGltZVJlY29yZENvbnRyb2xsZXIuc3RhcnRSZWNvcmQoKTtcbiAgfVxuXG4gIHN0b3BSZWFsdGltZVJlY29yZCA9ICgpID0+IHtcbiAgICB0aGlzLnJlYWx0aW1lUmVjb3JkQ29udHJvbGxlci5zdG9wUmVjb3JkKCk7XG4gICAgdGhpcy52aWV3Q29udHJvbGxlci5hY3RpdmVMaXZlTW9kZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVjb3JkSW5Qcm9jZXNzOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMuZ2V0SGxzSnMoKS5jdXJyZW50TGV2ZWwgPSAtMTtcbiAgfTtcblxuICBoYW5kbGVTdGF0ZUNoYW5nZWQoZSkge1xuXG4gIH1cbn1cblxuSGxzSlNMaXZlUmVjb3JkUGx1Z2luLlZFUlNJT04gPSBWRVJTSU9OO1xuXG5IbHNKU0xpdmVSZWNvcmRQbHVnaW4uZGVmYXVsdFN0YXRlID0ge1xuICByZWNvcmRBbGxvd2VkOiB0cnVlLFxuICByZWNvcmRJblByb2Nlc3M6IGZhbHNlLFxuICBpbml0OiBmYWxzZVxufTtcblxudmlkZW9qcy5yZWdpc3RlclBsdWdpbignaGxzSlNMaXZlUmVjb3JkJywgSGxzSlNMaXZlUmVjb3JkUGx1Z2luKTtcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ1Byb2dyZXNzQ29udHJvbEhsc0pzJywgUHJvZ3Jlc3NDb250cm9sSGxzSnMpO1xudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnTGl2ZUJ1dHRvbkhsc0pzJywgTGl2ZUJ1dHRvbkhsc0pzKTtcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ0NhY2hlZEJ1dHRvbkhsc0pzJywgQ2FjaGVkQnV0dG9uSGxzSnMpO1xudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnUmVjQnV0dG9uSGxzSnMnLCBSZWNCdXR0b25IbHNKcyk7XG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdTdG9wQnV0dG9uSGxzSnMnLCBTdG9wQnV0dG9uSGxzSnMpO1xudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnUmVjU3RhdHVzQmFySGxzSnMnLCBSZWNTdGF0dXNCYXJIbHNKcyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCBub3JtYWxpemUgPSAobnVtYmVyKSA9PiAobnVtYmVyIDwgMTAgPyAnMCcgKyBudW1iZXIgOiBudW1iZXIpO1xuXG5leHBvcnQgY29uc3QgdG9Gb3JtYXRZbWRIaXMgPSAoZGF0ZSwgc2VwYXJhdG9yKSA9PiB7XG4gIHJldHVybiBbXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICBub3JtYWxpemUoZGF0ZS5nZXREYXRlKCkpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldEhvdXJzKCkpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldE1pbnV0ZXMoKSksXG4gICAgbm9ybWFsaXplKGRhdGUuZ2V0U2Vjb25kcygpKSxcbiAgXS5qb2luKHNlcGFyYXRvcik7XG59O1xuXG5leHBvcnQgY29uc3Qgbm93SW5Gb3JtYXRZbWRIaXMgPSAoc2VwYXJhdG9yID0gJy0nKSA9PiB7XG4gIHJldHVybiB0b0Zvcm1hdFltZEhpcyhuZXcgRGF0ZSgpLCBzZXBhcmF0b3IpO1xufTtcbiIsIi8qKlxuICogQGZpbGUgZm9ybWF0LXRpbWUuanNcbiAqIEBtb2R1bGUgZm9ybWF0LXRpbWVcbiAqL1xuXG4vKipcbiAqIEZvcm1hdCBzZWNvbmRzIGFzIGEgdGltZSBzdHJpbmcsIEg6TU06U1Mgb3IgTTpTUy4gU3VwcGx5aW5nIGEgZ3VpZGUgKGluXG4gKiBzZWNvbmRzKSB3aWxsIGZvcmNlIGEgbnVtYmVyIG9mIGxlYWRpbmcgemVyb3MgdG8gY292ZXIgdGhlIGxlbmd0aCBvZiB0aGVcbiAqIGd1aWRlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNlY29uZHNcbiAqICAgICAgICAgTnVtYmVyIG9mIHNlY29uZHMgdG8gYmUgdHVybmVkIGludG8gYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGd1aWRlXG4gKiAgICAgICAgIE51bWJlciAoaW4gc2Vjb25kcykgdG8gbW9kZWwgdGhlIHN0cmluZyBhZnRlclxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICAgICAgICAgVGltZSBmb3JtYXR0ZWQgYXMgSDpNTTpTUyBvciBNOlNTXG4gKi9cbmNvbnN0IGRlZmF1bHRJbXBsZW1lbnRhdGlvbiA9IGZ1bmN0aW9uKHNlY29uZHMsIGd1aWRlKSB7XG4gIHNlY29uZHMgPSBzZWNvbmRzIDwgMCA/IDAgOiBzZWNvbmRzO1xuICBsZXQgcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDYwKTtcbiAgbGV0IG0gPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCAlIDYwKTtcbiAgbGV0IGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcbiAgY29uc3QgZ20gPSBNYXRoLmZsb29yKGd1aWRlIC8gNjAgJSA2MCk7XG4gIGNvbnN0IGdoID0gTWF0aC5mbG9vcihndWlkZSAvIDM2MDApO1xuXG4gIC8vIGhhbmRsZSBpbnZhbGlkIHRpbWVzXG4gIGlmIChpc05hTihzZWNvbmRzKSB8fCBzZWNvbmRzID09PSBJbmZpbml0eSkge1xuICAgIC8vICctJyBpcyBmYWxzZSBmb3IgYWxsIHJlbGF0aW9uYWwgb3BlcmF0b3JzIChlLmcuIDwsID49KSBzbyB0aGlzIHNldHRpbmdcbiAgICAvLyB3aWxsIGFkZCB0aGUgbWluaW11bSBudW1iZXIgb2YgZmllbGRzIHNwZWNpZmllZCBieSB0aGUgZ3VpZGVcbiAgICBoID0gbSA9IHMgPSAnLSc7XG4gIH1cblxuICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHNob3cgaG91cnNcbiAgaCA9IChoID4gMCB8fCBnaCA+IDApID8gaCArICc6JyA6ICcnO1xuXG4gIC8vIElmIGhvdXJzIGFyZSBzaG93aW5nLCB3ZSBtYXkgbmVlZCB0byBhZGQgYSBsZWFkaW5nIHplcm8uXG4gIC8vIEFsd2F5cyBzaG93IGF0IGxlYXN0IG9uZSBkaWdpdCBvZiBtaW51dGVzLlxuICBtID0gKCgoaCB8fCBnbSA+PSAxMCkgJiYgbSA8IDEwKSA/ICcwJyArIG0gOiBtKSArICc6JztcblxuICAvLyBDaGVjayBpZiBsZWFkaW5nIHplcm8gaXMgbmVlZCBmb3Igc2Vjb25kc1xuICBzID0gKHMgPCAxMCkgPyAnMCcgKyBzIDogcztcblxuICByZXR1cm4gaCArIG0gKyBzO1xufTtcblxuLy8gSW50ZXJuYWwgcG9pbnRlciB0byB0aGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbi5cbmxldCBpbXBsZW1lbnRhdGlvbiA9IGRlZmF1bHRJbXBsZW1lbnRhdGlvbjtcblxuLyoqXG4gKiBSZXBsYWNlcyB0aGUgZGVmYXVsdCBmb3JtYXRUaW1lIGltcGxlbWVudGF0aW9uIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9tSW1wbGVtZW50YXRpb25cbiAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgdXNlZCBpbiBwbGFjZSBvZiB0aGUgZGVmYXVsdCBmb3JtYXRUaW1lXG4gKiAgICAgICAgaW1wbGVtZW50YXRpb24uIFdpbGwgcmVjZWl2ZSB0aGUgY3VycmVudCB0aW1lIGluIHNlY29uZHMgYW5kIHRoZVxuICogICAgICAgIGd1aWRlIChpbiBzZWNvbmRzKSBhcyBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGb3JtYXRUaW1lKGN1c3RvbUltcGxlbWVudGF0aW9uKSB7XG4gIGltcGxlbWVudGF0aW9uID0gY3VzdG9tSW1wbGVtZW50YXRpb247XG59XG5cbi8qKlxuICogUmVzZXRzIGZvcm1hdFRpbWUgdG8gdGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZvcm1hdFRpbWUoKSB7XG4gIGltcGxlbWVudGF0aW9uID0gZGVmYXVsdEltcGxlbWVudGF0aW9uO1xufVxuXG4vKipcbiAqIERlbGVnYXRlcyB0byBlaXRoZXIgdGhlIGRlZmF1bHQgdGltZSBmb3JtYXR0aW5nIGZ1bmN0aW9uIG9yIGEgY3VzdG9tXG4gKiBmdW5jdGlvbiBzdXBwbGllZCB2aWEgYHNldEZvcm1hdFRpbWVgLlxuICpcbiAqIEZvcm1hdHMgc2Vjb25kcyBhcyBhIHRpbWUgc3RyaW5nIChIOk1NOlNTIG9yIE06U1MpLiBTdXBwbHlpbmcgYVxuICogZ3VpZGUgKGluIHNlY29uZHMpIHdpbGwgZm9yY2UgYSBudW1iZXIgb2YgbGVhZGluZyB6ZXJvcyB0byBjb3ZlciB0aGVcbiAqIGxlbmd0aCBvZiB0aGUgZ3VpZGUuXG4gKlxuICogQHN0YXRpY1xuICogQGV4YW1wbGUgIGZvcm1hdFRpbWUoMTI1LCA2MDApID09PSBcIjAyOjA1XCJcbiAqIEBwYXJhbSAgICB7bnVtYmVyfSBzZWNvbmRzXG4gKiAgICAgICAgICAgTnVtYmVyIG9mIHNlY29uZHMgdG8gYmUgdHVybmVkIGludG8gYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gICAge251bWJlcn0gZ3VpZGVcbiAqICAgICAgICAgICBOdW1iZXIgKGluIHNlY29uZHMpIHRvIG1vZGVsIHRoZSBzdHJpbmcgYWZ0ZXJcbiAqXG4gKiBAcmV0dXJuICAge3N0cmluZ31cbiAqICAgICAgICAgICBUaW1lIGZvcm1hdHRlZCBhcyBIOk1NOlNTIG9yIE06U1NcbiAqL1xuZnVuY3Rpb24gZm9ybWF0VGltZShzZWNvbmRzLCBndWlkZSA9IHNlY29uZHMpIHtcbiAgcmV0dXJuIGltcGxlbWVudGF0aW9uKHNlY29uZHMsIGd1aWRlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0VGltZTtcbiIsImV4cG9ydCBjb25zdCBmYWNlVVVJRCA9IChwcmVmaXgpID0+IHtcbiAgcmV0dXJuIHByZWZpeCArICctJyArIERhdGUubm93KClcbn07XG4iLCJjb25zdCB7IHBlcmZvcm1hbmNlLCBYTUxIdHRwUmVxdWVzdCB9ID0gd2luZG93O1xuXG5jbGFzcyBYaHJMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcueGhyU2V0dXApIHtcbiAgICAgIHRoaXMueGhyU2V0dXAgPSBjb25maWcueGhyU2V0dXA7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5hYm9ydCgpO1xuICAgIHRoaXMubG9hZGVyID0gbnVsbDtcbiAgfVxuXG4gIGFib3J0ICgpIHtcbiAgICBsZXQgbG9hZGVyID0gdGhpcy5sb2FkZXI7XG4gICAgaWYgKGxvYWRlciAmJiBsb2FkZXIucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgdGhpcy5zdGF0cy5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgIGxvYWRlci5hYm9ydCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0VGltZW91dCk7XG4gICAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IG51bGw7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJldHJ5VGltZW91dCk7XG4gICAgdGhpcy5yZXRyeVRpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgbG9hZCAoY29udGV4dCwgY29uZmlnLCBjYWxsYmFja3MpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIHRoaXMuc3RhdHMgPSB7IHRyZXF1ZXN0OiBwZXJmb3JtYW5jZS5ub3coKSwgcmV0cnk6IDAgfTtcbiAgICB0aGlzLnJldHJ5RGVsYXkgPSBjb25maWcucmV0cnlEZWxheTtcbiAgICB0aGlzLmxvYWRJbnRlcm5hbCgpO1xuICB9XG5cbiAgbG9hZEludGVybmFsICgpIHtcbiAgICBsZXQgeGhyLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgIHhociA9IHRoaXMubG9hZGVyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICBsZXQgc3RhdHMgPSB0aGlzLnN0YXRzO1xuICAgIHN0YXRzLnRmaXJzdCA9IDA7XG4gICAgc3RhdHMubG9hZGVkID0gMDtcbiAgICBjb25zdCB4aHJTZXR1cCA9IHRoaXMueGhyU2V0dXA7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKHhoclNldHVwKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgeGhyU2V0dXAoeGhyLCBjb250ZXh0LnVybCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBmaXggeGhyU2V0dXA6ICh4aHIsIHVybCkgPT4ge3hoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1MYW5ndWFnZVwiLCBcInRlc3RcIik7fVxuICAgICAgICAgIC8vIG5vdCB3b3JraW5nLCBhcyB4aHIuc2V0UmVxdWVzdEhlYWRlciBleHBlY3RzIHhoci5yZWFkeVN0YXRlID09PSBPUEVOXG4gICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGNvbnRleHQudXJsLCB0cnVlKTtcbiAgICAgICAgICB4aHJTZXR1cCh4aHIsIGNvbnRleHQudXJsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICB4aHIub3BlbignR0VUJywgY29udGV4dC51cmwsIHRydWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElFMTEgdGhyb3dzIGFuIGV4Y2VwdGlvbiBvbiB4aHIub3BlbiBpZiBhdHRlbXB0aW5nIHRvIGFjY2VzcyBhbiBIVFRQIHJlc291cmNlIG92ZXIgSFRUUFNcbiAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRXJyb3IoeyBjb2RlOiB4aHIuc3RhdHVzLCB0ZXh0OiBlLm1lc3NhZ2UgfSwgY29udGV4dCwgeGhyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5yYW5nZUVuZCkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1JhbmdlJywgJ2J5dGVzPScgKyBjb250ZXh0LnJhbmdlU3RhcnQgKyAnLScgKyAoY29udGV4dC5yYW5nZUVuZCAtIDEpKTtcbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gdGhpcy5yZWFkeXN0YXRlY2hhbmdlLmJpbmQodGhpcyk7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSB0aGlzLmxvYWRwcm9ncmVzcy5iaW5kKHRoaXMpO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSBjb250ZXh0LnJlc3BvbnNlVHlwZTtcblxuICAgIC8vIHNldHVwIHRpbWVvdXQgYmVmb3JlIHdlIHBlcmZvcm0gcmVxdWVzdFxuICAgIHRoaXMucmVxdWVzdFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmxvYWR0aW1lb3V0LmJpbmQodGhpcyksIHRoaXMuY29uZmlnLnRpbWVvdXQpO1xuICAgIHhoci5zZW5kKCk7XG4gIH1cblxuICByZWFkeXN0YXRlY2hhbmdlIChldmVudCkge1xuICAgIGxldCB4aHIgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgcmVhZHlTdGF0ZSA9IHhoci5yZWFkeVN0YXRlLFxuICAgICAgc3RhdHMgPSB0aGlzLnN0YXRzLFxuICAgICAgY29udGV4dCA9IHRoaXMuY29udGV4dCxcbiAgICAgIGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuXG4gICAgLy8gZG9uJ3QgcHJvY2VlZCBpZiB4aHIgaGFzIGJlZW4gYWJvcnRlZFxuICAgIGlmIChzdGF0cy5hYm9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gPj0gSEVBREVSU19SRUNFSVZFRFxuICAgIGlmIChyZWFkeVN0YXRlID49IDIpIHtcbiAgICAgIC8vIGNsZWFyIHhociB0aW1lb3V0IGFuZCByZWFybSBpdCBpZiByZWFkeVN0YXRlIGxlc3MgdGhhbiA0XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVxdWVzdFRpbWVvdXQpO1xuICAgICAgaWYgKHN0YXRzLnRmaXJzdCA9PT0gMCkge1xuICAgICAgICBzdGF0cy50Zmlyc3QgPSBNYXRoLm1heChwZXJmb3JtYW5jZS5ub3coKSwgc3RhdHMudHJlcXVlc3QpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBsZXQgc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICAgICAgLy8gaHR0cCBzdGF0dXMgYmV0d2VlbiAyMDAgdG8gMjk5IGFyZSBhbGwgc3VjY2Vzc2Z1bFxuICAgICAgICBpZiAoc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICBzdGF0cy50bG9hZCA9IE1hdGgubWF4KHN0YXRzLnRmaXJzdCwgcGVyZm9ybWFuY2Uubm93KCkpO1xuICAgICAgICAgIGxldCBkYXRhLCBsZW47XG4gICAgICAgICAgaWYgKGNvbnRleHQucmVzcG9uc2VUeXBlID09PSAnYXJyYXlidWZmZXInKSB7XG4gICAgICAgICAgICBkYXRhID0geGhyLnJlc3BvbnNlO1xuICAgICAgICAgICAgbGVuID0gZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgIGxlbiA9IGRhdGEubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0cy5sb2FkZWQgPSBzdGF0cy50b3RhbCA9IGxlbjtcbiAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB7IHVybDogeGhyLnJlc3BvbnNlVVJMLCBkYXRhOiBkYXRhIH07XG4gICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25TdWNjZXNzKHJlc3BvbnNlLCBzdGF0cywgY29udGV4dCwgeGhyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiBtYXggbmIgb2YgcmV0cmllcyByZWFjaGVkIG9yIGlmIGh0dHAgc3RhdHVzIGJldHdlZW4gNDAwIGFuZCA0OTkgKHN1Y2ggZXJyb3IgY2Fubm90IGJlIHJlY292ZXJlZCwgcmV0cnlpbmcgaXMgdXNlbGVzcyksIHJldHVybiBlcnJvclxuICAgICAgICAgIGlmIChzdGF0cy5yZXRyeSA+PSBjb25maWcubWF4UmV0cnkgfHwgKHN0YXR1cyA+PSA0MDAgJiYgc3RhdHVzIDwgNDk5KSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25FcnJvcih7IGNvZGU6IHN0YXR1cywgdGV4dDogeGhyLnN0YXR1c1RleHQgfSwgY29udGV4dCwgeGhyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWJvcnRzIGFuZCByZXNldHMgaW50ZXJuYWwgc3RhdGVcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgLy8gc2NoZWR1bGUgcmV0cnlcbiAgICAgICAgICAgIHRoaXMucmV0cnlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5sb2FkSW50ZXJuYWwuYmluZCh0aGlzKSwgdGhpcy5yZXRyeURlbGF5KTtcbiAgICAgICAgICAgIC8vIHNldCBleHBvbmVudGlhbCBiYWNrb2ZmXG4gICAgICAgICAgICB0aGlzLnJldHJ5RGVsYXkgPSBNYXRoLm1pbigyICogdGhpcy5yZXRyeURlbGF5LCBjb25maWcubWF4UmV0cnlEZWxheSk7XG4gICAgICAgICAgICBzdGF0cy5yZXRyeSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVhZHlTdGF0ZSA+PSAyIEFORCByZWFkeVN0YXRlICE9PTQgKHJlYWR5U3RhdGUgPSBIRUFERVJTX1JFQ0VJVkVEIHx8IExPQURJTkcpIHJlYXJtIHRpbWVvdXQgYXMgeGhyIG5vdCBmaW5pc2hlZCB5ZXRcbiAgICAgICAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMubG9hZHRpbWVvdXQuYmluZCh0aGlzKSwgY29uZmlnLnRpbWVvdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvYWR0aW1lb3V0ICgpIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5vblRpbWVvdXQodGhpcy5zdGF0cywgdGhpcy5jb250ZXh0LCBudWxsKTtcbiAgfVxuXG4gIGxvYWRwcm9ncmVzcyAoZXZlbnQpIHtcbiAgICBsZXQgeGhyID0gZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgIHN0YXRzID0gdGhpcy5zdGF0cztcblxuICAgIHN0YXRzLmxvYWRlZCA9IGV2ZW50LmxvYWRlZDtcbiAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgc3RhdHMudG90YWwgPSBldmVudC50b3RhbDtcbiAgICB9XG5cbiAgICBsZXQgb25Qcm9ncmVzcyA9IHRoaXMuY2FsbGJhY2tzLm9uUHJvZ3Jlc3M7XG4gICAgaWYgKG9uUHJvZ3Jlc3MpIHtcbiAgICAgIC8vIHRoaXJkIGFyZyBpcyB0byBwcm92aWRlIG9uIHByb2dyZXNzIGRhdGFcbiAgICAgIG9uUHJvZ3Jlc3Moc3RhdHMsIHRoaXMuY29udGV4dCwgbnVsbCwgeGhyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWGhyTG9hZGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3ZpZGVvX2pzX187Il0sInNvdXJjZVJvb3QiOiIifQ==