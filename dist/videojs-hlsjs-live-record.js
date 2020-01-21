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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL0NvbXBvbmVudHMvUmVjU2V0dGluZ3NNb2RhbEhsc0pzLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Db21wb25lbnRzL3JlY1NldHRpbmdzTW9kYWwvQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Db21wb25lbnRzL3JlY1NldHRpbmdzTW9kYWwvUmVhbFRpbWVSZWNvcmRUYWJIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29tcG9uZW50cy9yZWNTZXR0aW5nc01vZGFsL1RhYnNIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29udHJvbGxlcnMvUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Db250cm9sbGVycy9TdG9yYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29udHJvbGxlcnMvVmlld0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL01vZGVscy9GcmFnbWVudC5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vTW9kZWxzL1BsYXlsaXN0LmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9jb21wb25lbnRzL0NhY2hlZEJ1dHRvbkhsc0pzLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9jb21wb25lbnRzL0xpdmVCdXR0b25IbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9Qcm9ncmVzc0NvbnRyb2xIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9SZWNCdXR0b25IbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9SZWNTdGF0dXNCYXJIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9TdG9wQnV0dG9uSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL3BsdWdpbi5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vcGx1Z2luLnNjc3M/YmVlMyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vdXRpbHMvZGF0ZS5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vdXRpbHMvZm9ybWF0LXRpbWUuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL3V0aWxzL3V1aWQuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL3V0aWxzL3hoci1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC9leHRlcm5hbCBcInZpZGVvanNcIiJdLCJuYW1lcyI6WyJWaWRlb0pzTW9kYWxEaWFsb2dDbGFzcyIsInZpZGVvanMiLCJnZXRDb21wb25lbnQiLCJEb20iLCJkb20iLCJkZWZhdWx0T3B0aW9ucyIsIlJlY1NldHRpbmdzTW9kYWxIbHNKcyIsImNvbnN0cnVjdG9yIiwicGxheWVyIiwib3B0aW9ucyIsImJ1aWxkQ1NTQ2xhc3MiLCJjb250ZW50IiwiYWxsb3dlZCIsInRhYnNDb21wb25lbnQiLCJUYWJzSGxzSnMiLCJwbGF5ZXJfIiwiZWxfIiwicmVuZGVyTm90QWxsb3dlZENvbnRlbnQiLCJyZW5kZXJlZEVsXyIsIm5vdEFsbG93ZWRDb250ZW50IiwiY3JlYXRlRWwiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJwcm90b3R5cGUiLCJvcHRpb25zXyIsIk9iamVjdCIsImFzc2lnbiIsInBhdXNlT25PcGVuIiwiZmlsbEFsd2F5cyIsInRlbXBvcmFyeSIsInVuY2xvc2VhYmxlIiwicmVnaXN0ZXJDb21wb25lbnQiLCJWaWRlb0pzQ29tcG9uZW50Q2xhc3MiLCJCYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnMiLCJjb25zb2xlIiwiZ3JvdXAiLCJsb2ciLCJncm91cEVuZCIsIlJlYWxUaW1lUmVjb3JkVGFiSGxzSnMiLCJnZXRRdWFsaXR5TGV2ZWxzIiwiaGxzanMiLCJobHNKU0xpdmVSZWNvcmQiLCJnZXRIbHNKcyIsImxldmVscyIsImN1cnJlbnRMZXZlbCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxhYmVsIiwiaGVpZ2h0IiwidmFsdWUiLCJzZWxlY3RlZCIsInNvcnQiLCJjdXJyZW50IiwibmV4dCIsImVsZW0iLCJyZWFsdGltZVJlY29yZCIsImFwcGVuZENoaWxkIiwicmVuZGVySGVhZCIsInJlbmRlclF1YWxpdHlTZWxlY3RvciIsInJlbmRlckJ1dHRvbiIsInJlbmRlckZvb3RlciIsIm1vZGFsSGVhZGVyQ29udGVudCIsIm1heFJlY29yZE1pbnV0ZXMiLCJtb2RhbEZvb3RlckNvbnRlbnQiLCJ1dWlkIiwiZmFjZVVVSUQiLCJmb3IiLCJpbm5lclRleHQiLCJxdWFsaXR5U2VsZWN0IiwiaWQiLCJmb3JFYWNoIiwidGV4dCIsImhvbGRlciIsIm9uY2xpY2siLCJoYW5kbGVTdGFydFJlY29yZGluZyIsImJpbmQiLCJzdGFydFJlYWx0aW1lUmVjb3JkIiwidGFic0hvbGRlciIsInJlbmRlck5hdiIsInJlbmRlckJvZHkiLCJuYXZIb2xkZXIiLCJoYW5kbGVDbGljayIsImJvZHlIb2xkZXIiLCJlbGVtMSIsImJhY2tncm91bmRSZWNvcmQiLCJlbGVtMiIsIiQkIiwiZWxlbUluZGV4IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIkhscyIsIndpbmRvdyIsImZhY2VNaW1lUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyIiwicGx1Z2luIiwicmVzcG9uc2UiLCJzdGF0cyIsImNvbnRleHQiLCJuZXR3b3JrRGV0YWlscyIsImxvYWRlciIsImRlc3Ryb3kiLCJzdG9yYWdlQ29udHJvbGxlciIsInNhdmVGcmFnbWVudCIsImZyYWciLCJkYXRhIiwidGhlbiIsInBsYXlsaXN0IiwiZnJhZ21lbnRTYXZlZCIsInNhdmVQbGF5bGlzdCIsImV2ZW50IiwicmVjb3JkU3RhcnRlZCIsIm1hbmlmZXN0TGlzdGVuZXIiLCJsZXZlbExpc3RlbmVyIiwiZnJhZ21lbnRMaXN0ZW5lciIsImluaXQiLCJvbiIsIkV2ZW50cyIsIkZSQUdfTE9BREVEIiwiaGxzRnJhZ21lbnRMb2FkZWQiLCJzdGFydFJlY29yZCIsInN0b3BSZWNvcmQiLCJmaW5pc2hlZCIsImluaXRQbGF5bGlzdCIsImxldmVsIiwiWGhyTG9hZGVyIiwidXJsIiwibG9hZGVyQ29udGV4dCIsImFkZEZyYWdtZW50IiwiZHVyYXRpb24iLCJyZXNwb25zZVR5cGUiLCJwcm9ncmVzc0RhdGEiLCJsb2FkZXJDb25maWciLCJ0aW1lb3V0IiwibWF4UmV0cnkiLCJyZXRyeURlbGF5IiwibWF4UmV0cnlEZWxheSIsImxvYWRlckNhbGxiYWNrcyIsIm9uU3VjY2VzcyIsImZyYWdtZW50TG9hZGVkIiwibG9hZCIsImxldmVsSW5kZXgiLCJtaW1lUHJvbWlzZSIsImdldFJlY29yZE1pbWUiLCJQbGF5bGlzdE1vZGVsIiwibm93SW5Gb3JtYXRZbWRIaXMiLCJ3aWR0aCIsInRhcmdldGR1cmF0aW9uIiwiZGV0YWlscyIsIm1pbWUiLCJEQl9WRVJTSU9OIiwiU1RPUkFHRV9XUklURV9NT0RFIiwiU1RPUkFHRV9SRUFEX01PREUiLCJTdG9yYWdlQ29udHJvbGxlciIsImRiIiwib3BlblJlcXVlc3QiLCJpbmRleGVkREIiLCJvcGVuIiwic3RvcmFnZURiTmFtZSIsIm9udXBncmFkZW5lZWRlZCIsInJlc3VsdCIsImNyZWF0ZU9iamVjdFN0b3JlIiwic3RvcmFnZVBsYXlsaXN0c05hbWUiLCJrZXlQYXRoIiwiZnJhZ21lbnRzU3RvcmFnZSIsInN0b3JhZ2VGcmFnbWVudHNOYW1lIiwiY3JlYXRlSW5kZXgiLCJ1bmlxdWUiLCJvbnN1Y2Nlc3MiLCJjaGVja1JlcXVpcmVtZW50cyIsImZyYWdtZW50IiwicGF5bG9hZCIsInRyYW5zYWN0aW9uIiwic3RvcmFnZSIsIm9iamVjdFN0b3JlIiwicmVxdWVzdCIsImFkZCIsIm9uZXJyb3IiLCJwdXQiLCJWaWV3Q29udHJvbGxlciIsImNvbnRyb2xCYXIiLCJnZXRDaGlsZCIsInNwYWNlIiwiYWRkQ2hpbGQiLCJyZW1vdmVEZWZhdWx0Q29udHJvbHMiLCJsaXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjIiwic2VsZWN0b3IiLCJjaGlsZHJlbiIsImZpbHRlciIsImNvbXBvbmVudCIsImhhc0NsYXNzIiwiY2FjaGVkQnV0dG9uQ29tcG9uZW50IiwiY2xpY2tIYW5kbGVyIiwiYWN0aXZlTGl2ZU1vZGUiLCJoaWRlIiwibGl2ZUJ1dHRvbkNvbXBvbmVudCIsImFjdGl2YXRlUHJvZ3Jlc3NNb2RlIiwicmVjQnV0dG9uQ29tcG9uZW50Iiwic2hvd1JlY29yZFNldHRpbmdzIiwic3RvcEJ1dHRvbkNvbXBvbmVudCIsInN0b3BSZWFsdGltZVJlY29yZCIsInJlY1N0YXR1c0JhckNvbXBvbmVudCIsInByb2dyZXNzQ29udHJvbENvbXBvbmVudCIsInJlbW92ZUNoaWxkIiwic2hvd090aGVyQ29udHJvbCIsInNob3dMaXZlQ29udHJvbCIsImhpZGVQcm9ncmVzc0NvbnRyb2wiLCJoaWRlUmVjQ29udHJvbCIsImxpdmVUcmFja2VyIiwic2Vla1RvTGl2ZUVkZ2UiLCJlIiwid2FybiIsIm1lc3NhZ2UiLCJzdGF0ZSIsInJlY29yZEluUHJvY2VzcyIsInNob3dQcm9ncmVzc0NvbnRyb2wiLCJoaWRlTGl2ZUNvbnRyb2wiLCJyZWNTZXR0aW5nc01vZGFsQ29tcG9uZW50IiwiY2xvc2UiLCJoaWRlT3RoZXJDb250cm9sIiwic2hvd1JlY0NvbnRyb2wiLCJtYXhSZWNvcmRTZWNvbmRzIiwidXBkYXRlUmVjb3JkTGVmdFRpbWUiLCJ1cGRhdGVSZWNvcmRUaW1lIiwiYSIsInJlY29yZFVwZGF0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzaG93IiwiY2xlYXJJbnRlcnZhbCIsIkZyYWdtZW50TW9kZWwiLCJmcmFnbWVudERhdGEiLCJwbGF5bGlzdElkIiwic3BsaXQiLCJwb3AiLCJzYXZlZCIsImNyZWF0ZVBsYXlsaXN0SGVhZGVyIiwiYWRkUGxheWxpc3RGcmFnbWVudCIsImR1cmFjdGlvbiIsImNyZWF0ZVBsYXlsaXN0Rm9vdGVyIiwicGxheWxpc3REYXRhIiwiZnJhZ21lbnRzIiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsInVwZGF0ZWRBdCIsInJlY0ZpbmlzaGVkIiwicHVzaCIsInRvU3RyaW5nIiwiam9pbiIsIlZpZGVvSnNCdXR0b25DbGFzcyIsIkNhY2hlZEJ1dHRvbkhsc0pzIiwidGFnIiwicHJvcHMiLCJhdHRyaWJ1dGVzIiwibm9uSWNvbkNvbnRyb2wiLCJjcmVhdGVDb250cm9sVGV4dEVsIiwiZWwiLCJjb250cm9sVGV4dF8iLCJjYWxsIiwiYXJndW1lbnRzIiwiTGl2ZUJ1dHRvbkhsc0pzIiwiVmlkZW9Kc1Byb2dyZXNzQ29udHJvbENvbXBvbmVudCIsIlByb2dyZXNzQ29udHJvbEhsc0pzIiwiUmVjQnV0dG9uSGxzSnMiLCJSZWNTdGF0dXNCYXJIbHNKcyIsInJlY29yZGVkRWxfIiwicmVjb3JkTGVmdEVsXyIsInRpbWUiLCJmb3JtYXRUaW1lIiwiZGlzcG9zZSIsIlN0b3BCdXR0b25IbHNKcyIsIlBsdWdpbiIsImdldFBsdWdpbiIsImRlZmF1bHRzIiwiSGxzSlNMaXZlUmVjb3JkUGx1Z2luIiwic2V0U3RhdGUiLCJ2aWV3Q29udHJvbGxlciIsInJlYWx0aW1lUmVjb3JkQ29udHJvbGxlciIsInRlY2giLCJJV2lsbFVzZVRoaXNJblBsdWdpbiIsInNvdXJjZUhhbmRsZXJfIiwiaGxzIiwibWVyZ2VPcHRpb25zIiwibGV2ZWxJZCIsImFjdGl2YXRlUmVjb3JkTW9kZSIsImhhbmRsZVN0YXRlQ2hhbmdlZCIsIlZFUlNJT04iLCJkZWZhdWx0U3RhdGUiLCJyZWNvcmRBbGxvd2VkIiwicmVnaXN0ZXJQbHVnaW4iLCJub3JtYWxpemUiLCJudW1iZXIiLCJ0b0Zvcm1hdFltZEhpcyIsImRhdGUiLCJzZXBhcmF0b3IiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJkZWZhdWx0SW1wbGVtZW50YXRpb24iLCJzZWNvbmRzIiwiZ3VpZGUiLCJzIiwiTWF0aCIsImZsb29yIiwibSIsImgiLCJnbSIsImdoIiwiaXNOYU4iLCJJbmZpbml0eSIsImltcGxlbWVudGF0aW9uIiwic2V0Rm9ybWF0VGltZSIsImN1c3RvbUltcGxlbWVudGF0aW9uIiwicmVzZXRGb3JtYXRUaW1lIiwicHJlZml4IiwicGVyZm9ybWFuY2UiLCJYTUxIdHRwUmVxdWVzdCIsImNvbmZpZyIsInhoclNldHVwIiwiYWJvcnQiLCJyZWFkeVN0YXRlIiwiYWJvcnRlZCIsImNsZWFyVGltZW91dCIsInJlcXVlc3RUaW1lb3V0IiwicmV0cnlUaW1lb3V0IiwiY2FsbGJhY2tzIiwidHJlcXVlc3QiLCJyZXRyeSIsImxvYWRJbnRlcm5hbCIsInhociIsInRmaXJzdCIsImxvYWRlZCIsIm9uRXJyb3IiLCJjb2RlIiwic3RhdHVzIiwicmFuZ2VFbmQiLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmFuZ2VTdGFydCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5c3RhdGVjaGFuZ2UiLCJvbnByb2dyZXNzIiwibG9hZHByb2dyZXNzIiwic2V0VGltZW91dCIsImxvYWR0aW1lb3V0Iiwic2VuZCIsImN1cnJlbnRUYXJnZXQiLCJtYXgiLCJ0bG9hZCIsImxlbiIsImJ5dGVMZW5ndGgiLCJyZXNwb25zZVRleHQiLCJsZW5ndGgiLCJ0b3RhbCIsInJlc3BvbnNlVVJMIiwic3RhdHVzVGV4dCIsIm1pbiIsIm9uVGltZW91dCIsImxlbmd0aENvbXB1dGFibGUiLCJvblByb2dyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7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YUFBaEI7QUFBQSxRQUNFM1AsS0FBSyxHQUFHLEtBQUtBLEtBRGY7QUFHQUEsU0FBSyxDQUFDNk8sTUFBTixHQUFlaE8sS0FBSyxDQUFDZ08sTUFBckI7O0FBQ0EsUUFBSWhPLEtBQUssQ0FBQzBQLGdCQUFWLEVBQTRCO0FBQzFCdlEsV0FBSyxDQUFDa1EsS0FBTixHQUFjclAsS0FBSyxDQUFDcVAsS0FBcEI7QUFDRDs7QUFFRCxRQUFJTSxVQUFVLEdBQUcsS0FBS2pDLFNBQUwsQ0FBZWlDLFVBQWhDOztBQUNBLFFBQUlBLFVBQUosRUFBZ0I7QUFDZDtBQUNBQSxnQkFBVSxDQUFDeFEsS0FBRCxFQUFRLEtBQUtDLE9BQWIsRUFBc0IsSUFBdEIsRUFBNEIwTyxHQUE1QixDQUFWO0FBQ0Q7QUFDRjs7QUF2SmE7O0FBMEpEL00sd0VBQWYsRTs7Ozs7Ozs7Ozs7QUM1SkEsc0QiLCJmaWxlIjoidmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInZpZGVvanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ2aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkXCIsIFtcInZpZGVvanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widmlkZW9qcy1obHNqcy1saXZlLXJlY29yZFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInZpZGVvanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmRcIl0gPSBmYWN0b3J5KHJvb3RbXCJ2aWRlb2pzXCJdKTtcbn0pKCh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyksIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdmlkZW9fanNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGx1Z2luLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcbmltcG9ydCBUYWJzSGxzSnMgZnJvbSBcIi4vcmVjU2V0dGluZ3NNb2RhbC9UYWJzSGxzSnNcIjtcblxuY29uc3QgVmlkZW9Kc01vZGFsRGlhbG9nQ2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTW9kYWxEaWFsb2cnKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuY2xhc3MgUmVjU2V0dGluZ3NNb2RhbEhsc0pzIGV4dGVuZHMgVmlkZW9Kc01vZGFsRGlhbG9nQ2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGRlZmF1bHQgRE9NIGBjbGFzc05hbWVgLlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqICAgICAgICAgVGhlIERPTSBgY2xhc3NOYW1lYCBmb3IgdGhpcyBvYmplY3QuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIHZlcnNpb24gNS5cbiAgICovXG4gIGJ1aWxkQ1NTQ2xhc3MoKSB7XG4gICAgcmV0dXJuIGB2anMtaGxzanMtbHItcmVjLXNldHRpbmdzICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgbG9jYWxpemVkIGVycm9yIG1lc3NhZ2UgYmFzZWQgb24gdGhlIGBQbGF5ZXJgcyBlcnJvci5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiAgICAgICAgIFRoZSBgUGxheWVyYHMgZXJyb3IgbWVzc2FnZSBsb2NhbGl6ZWQgb3IgYW4gZW1wdHkgc3RyaW5nLlxuICAgKi9cbiAgY29udGVudCgpIHtcbiAgICBpZih0aGlzLm9wdGlvbnMoKS5hbGxvd2VkKSB7XG4gICAgICB0aGlzLnRhYnNDb21wb25lbnQgPSBuZXcgVGFic0hsc0pzKHRoaXMucGxheWVyXywgdGhpcy5vcHRpb25zKCkpO1xuICAgICAgcmV0dXJuIHRoaXMudGFic0NvbXBvbmVudC5lbF87XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlck5vdEFsbG93ZWRDb250ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyTm90QWxsb3dlZENvbnRlbnQoKSB7XG4gICAgaWYodGhpcy5yZW5kZXJlZEVsXykge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZWRFbF87XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9ICh0aGlzLm9wdGlvbnMoKS5ub3RBbGxvd2VkQ29udGVudCB8fCAoKCkgPT4gKCc8aDI+UmVjb3JkaW5nIG5vdCBhbGxvd2VkPC9oMj4nKSkpKCk7XG5cbiAgICB0aGlzLnJlbmRlcmVkRWxfID0gRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgaW5uZXJIVE1MOiBjb250ZW50LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZWRFbF87XG4gIH1cbn1cblxuUmVjU2V0dGluZ3NNb2RhbEhsc0pzLnByb3RvdHlwZS5vcHRpb25zXyA9IE9iamVjdC5hc3NpZ24oe30sIFZpZGVvSnNNb2RhbERpYWxvZ0NsYXNzLnByb3RvdHlwZS5vcHRpb25zXywge1xuICBwYXVzZU9uT3BlbjogZmFsc2UsXG4gIGZpbGxBbHdheXM6IGZhbHNlLFxuICB0ZW1wb3Jhcnk6IHRydWUsXG4gIHVuY2xvc2VhYmxlOiBmYWxzZVxufSk7XG5cbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ1JlY1NldHRpbmdzTW9kYWxIbHNKcycsIFJlY1NldHRpbmdzTW9kYWxIbHNKcyk7XG5leHBvcnQgZGVmYXVsdCBSZWNTZXR0aW5nc01vZGFsSGxzSnM7XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbmNvbnN0IFZpZGVvSnNDb21wb25lbnRDbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuY2xhc3MgQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzIGV4dGVuZHMgVmlkZW9Kc0NvbXBvbmVudENsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIGNvbnNvbGUuZ3JvdXAoXCJCYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnMuanM6MjAgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlRWwoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy10YWItYmFja2dyb3VuZC1yZWNvcmQnLFxuICAgICAgICBpbm5lckhUTUw6ICc8cD52anMtaGxzanMtdGFiLWJhY2tncm91bmQtcmVjb3JkPC9wPidcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnM7XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5pbXBvcnQge2ZhY2VVVUlEfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXVpZFwiO1xuXG5jb25zdCBWaWRlb0pzQ29tcG9uZW50Q2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5jbGFzcyBSZWFsVGltZVJlY29yZFRhYkhsc0pzIGV4dGVuZHMgVmlkZW9Kc0NvbXBvbmVudENsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gIH1cblxuICBnZXRRdWFsaXR5TGV2ZWxzKCkge1xuICAgIGNvbnN0IGhsc2pzID0gdGhpcy5wbGF5ZXIoKS5obHNKU0xpdmVSZWNvcmQoKS5nZXRIbHNKcygpO1xuICAgIGNvbnN0IGxldmVscyA9IGhsc2pzLmxldmVscyB8fCBbXTtcbiAgICBjb25zdCBjdXJyZW50TGV2ZWwgPSBobHNqcy5jdXJyZW50TGV2ZWwgfHwgMDtcbiAgICByZXR1cm4gbGV2ZWxzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IGl0ZW0uaGVpZ2h0ICsgJ3AnLFxuICAgICAgICB2YWx1ZTogaW5kZXgsXG4gICAgICAgIHNlbGVjdGVkOiBpbmRleCA9PT0gY3VycmVudExldmVsLFxuICAgICAgfVxuICAgICkpLnNvcnQoKGN1cnJlbnQsIG5leHQpID0+IHtcbiAgICAgIGlmICgodHlwZW9mIGN1cnJlbnQgIT09ICdvYmplY3QnKSB8fCAodHlwZW9mIG5leHQgIT09ICdvYmplY3QnKSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudC52YWx1ZSA8IG5leHQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQudmFsdWUgPiBuZXh0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVFbCgpIHtcbiAgICBjb25zdCBlbGVtID0gc3VwZXIuY3JlYXRlRWwoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXRhYi1yZWFsdGltZS1yZWNvcmQnLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgaWYodGhpcy5vcHRpb25zKCkucmVhbHRpbWVSZWNvcmQuYWxsb3dlZCkge1xuICAgICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckhlYWQoKSk7XG4gICAgICBlbGVtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyUXVhbGl0eVNlbGVjdG9yKCkpO1xuICAgICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckJ1dHRvbigpKTtcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJGb290ZXIoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyTm90QWxsb3dlZENvbnRlbnQoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICByZW5kZXJIZWFkKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAodGhpcy5vcHRpb25zKCkucmVhbHRpbWVSZWNvcmQubW9kYWxIZWFkZXJDb250ZW50IHx8ICgoKSA9PiAoXG4gICAgICBcIjxwPlJlYWwtdGltZSByZWNvcmRpbmcgYWxsb3dzIHlvdSB0byByZWNvcmQgYSBmcmFnbWVudCBvZiB0aGUgcHJvZ3JhbSB5b3UgYXJlIHdhdGNoaW5nLiBcIiArXG4gICAgICBcIlJlY29yZGluZyB3aWxsIGJlIGRvbmUgdW50aWwgdGhlIHJlY29yZGluZyBzdG9wcywgdGhlIHJlY29yZGluZyB0aW1lIGxpbWl0IGlzIGV4Y2VlZGVkIG9yIHRoZSB0YWIgaXMgY2xvc2VkLlwiICtcbiAgICAgIFwiVG8gc3RhcnQgcmVjb3JkaW5nLCBzZWxlY3QgeW91ciBwcmVmZXJyZWQgcXVhbGl0eSBhbmQgY2xpY2sgPHN0cm9uZz5cXFwic3RhcnQgcmVjb3JkaW5nXFxcIjwvc3Ryb25nPi48L3A+XCIgK1xuICAgICAgXCI8cD5Zb3VyIGN1cnJlbnQgcmVjb3JkaW5nIHRpbWUgbGltaXQgaXMgXCIgKyB0aGlzLm9wdGlvbnMoKS5tYXhSZWNvcmRNaW51dGVzICsgXCIgbWluLjwvcD5cIlxuICAgICkpKSgpIDtcbiAgICByZXR1cm4gRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBpbm5lckhUTUw6IGNvbnRlbnRcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyRm9vdGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAodGhpcy5vcHRpb25zKCkucmVhbHRpbWVSZWNvcmQubW9kYWxGb290ZXJDb250ZW50IHx8ICgoKSA9PiAoJycpKSkoKSA7XG4gICAgcmV0dXJuIERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgaW5uZXJIVE1MOiBjb250ZW50XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlclF1YWxpdHlTZWxlY3RvcigpIHtcbiAgICBjb25zdCBlbGVtID0gRG9tLmNyZWF0ZUVsKFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy10YWItcXVhbGl0eS1zZWxlY3QgdmpzLWhsc2pzLWZvcm0tZ3JvdXAnLFxuICAgICAgfSxcbiAgICApO1xuICAgIGNvbnN0IHV1aWQgPSBmYWNlVVVJRCgndmpzLWhscy1xdWFsaXR5LXNlbGVjdCcpO1xuXG4gICAgZWxlbS5hcHBlbmRDaGlsZChcbiAgICAgIERvbS5jcmVhdGVFbCgnbGFiZWwnLCB7XG4gICAgICAgIGZvcjogdXVpZCxcbiAgICAgICAgaW5uZXJUZXh0OiAnUXVhbGl0eScsXG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1mb3JtLWxhYmVsJ1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5xdWFsaXR5U2VsZWN0ID0gRG9tLmNyZWF0ZUVsKCdzZWxlY3QnLCB7XG4gICAgICBpZDogdXVpZCxcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1mb3JtLWlucHV0J1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGV2ZWxzID0gdGhpcy5nZXRRdWFsaXR5TGV2ZWxzKCk7XG5cbiAgICBsZXZlbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy5xdWFsaXR5U2VsZWN0LmFwcGVuZENoaWxkKFxuICAgICAgICBEb20uY3JlYXRlRWwoJ29wdGlvbicsIHtcbiAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICB0ZXh0OiBpdGVtLmxhYmVsLFxuICAgICAgICAgIHNlbGVjdGVkOiBpdGVtLnNlbGVjdGVkXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgaWYoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnF1YWxpdHlTZWxlY3QudmFsdWUgPSBpdGVtLnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnF1YWxpdHlTZWxlY3QpO1xuXG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICByZW5kZXJCdXR0b24oKSB7XG4gICAgY29uc3QgaG9sZGVyID0gRG9tLmNyZWF0ZUVsKFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1mb3JtLWdyb3VwJyxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaG9sZGVyLmFwcGVuZENoaWxkKERvbS5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLWJ1dHRvbiB2anMtaGxzanMtc3RhcnQtcmVjb3JkJyxcbiAgICAgIGlubmVyVGV4dDogJ1N0YXJ0IFJlY29yZGluZycsXG4gICAgICBvbmNsaWNrOiB0aGlzLmhhbmRsZVN0YXJ0UmVjb3JkaW5nLmJpbmQodGhpcylcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gaG9sZGVyO1xuICB9XG5cbiAgcmVuZGVyTm90QWxsb3dlZENvbnRlbnQoKSB7XG4gICAgaWYodGhpcy5yZW5kZXJlZEVsXykge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZWRFbF87XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9ICh0aGlzLm9wdGlvbnMoKS5yZWFsdGltZVJlY29yZC5ub3RBbGxvd2VkQ29udGVudCB8fCAoKCkgPT4gKCc8aDI+UmVjb3JkaW5nIG5vdCBhbGxvd2VkPC9oMj4nKSkpKCk7XG5cbiAgICB0aGlzLnJlbmRlcmVkRWxfID0gRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgaW5uZXJIVE1MOiBjb250ZW50LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZWRFbF87XG4gIH1cblxuICBoYW5kbGVTdGFydFJlY29yZGluZygpIHtcbiAgICB0aGlzLnBsYXllcigpLmhsc0pTTGl2ZVJlY29yZCgpLnN0YXJ0UmVhbHRpbWVSZWNvcmQodGhpcy5xdWFsaXR5U2VsZWN0LnZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFsVGltZVJlY29yZFRhYkhsc0pzO1xuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuaW1wb3J0IFJlYWxUaW1lUmVjb3JkVGFiSGxzSnMgZnJvbSBcIi4vUmVhbFRpbWVSZWNvcmRUYWJIbHNKc1wiO1xuaW1wb3J0IEJhY2tncm91bmRSZWNvcmRUYWJIbHNKcyBmcm9tIFwiLi9CYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnNcIjtcblxuY29uc3QgVmlkZW9Kc0NvbXBvbmVudENsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5jbGFzcyBUYWJzSGxzSnMgZXh0ZW5kcyBWaWRlb0pzQ29tcG9uZW50Q2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKCkge1xuICAgIGNvbnN0IHRhYnNIb2xkZXIgPSBzdXBlci5jcmVhdGVFbChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdmVydGljYWwtdGFicycsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICB0YWJzSG9sZGVyLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyTmF2KCkpO1xuXG4gICAgdGFic0hvbGRlci5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckJvZHkoKSk7XG5cbiAgICByZXR1cm4gdGFic0hvbGRlcjtcbiAgfVxuXG5cbiAgcmVuZGVyTmF2KCkge1xuICAgIGNvbnN0IG5hdkhvbGRlciA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2J1xuICAgIH0pO1xuICAgIG5hdkhvbGRlci5hcHBlbmRDaGlsZChcbiAgICAgIERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYtZWxlbSBhY3RpdmUnLFxuICAgICAgICBpbm5lckhUTUw6ICdSZWFsdGltZScsXG4gICAgICAgIG9uY2xpY2s6ICgpID0+IHt0aGlzLmhhbmRsZUNsaWNrKDApfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgbmF2SG9sZGVyLmFwcGVuZENoaWxkKFxuICAgICAgRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLW5hdi1lbGVtJyxcbiAgICAgICAgaW5uZXJIVE1MOiAnQmFja2dyb3VuZCcsXG4gICAgICAgIG9uY2xpY2s6ICgpID0+IHt0aGlzLmhhbmRsZUNsaWNrKDEpfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIG5hdkhvbGRlcjtcbiAgfVxuXG4gIHJlbmRlckJvZHkoKSB7XG4gICAgY29uc3QgYm9keUhvbGRlciA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtYm9keSdcbiAgICB9KTtcblxuICAgIHRoaXMucmVhbHRpbWVSZWNvcmQgPSBuZXcgUmVhbFRpbWVSZWNvcmRUYWJIbHNKcyh0aGlzLnBsYXllcl8sIHRoaXMub3B0aW9ucygpKTtcbiAgICBjb25zdCBlbGVtMSA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtZWxlbSBhY3RpdmUnXG4gICAgfSk7XG4gICAgZWxlbTEuYXBwZW5kQ2hpbGQodGhpcy5yZWFsdGltZVJlY29yZC5lbF8pO1xuICAgIGJvZHlIb2xkZXIuYXBwZW5kQ2hpbGQoZWxlbTEpO1xuXG4gICAgdGhpcy5iYWNrZ3JvdW5kUmVjb3JkID0gbmV3IEJhY2tncm91bmRSZWNvcmRUYWJIbHNKcyh0aGlzLnBsYXllcl8sIHRoaXMub3B0aW9ucygpKTtcbiAgICBjb25zdCBlbGVtMiA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtZWxlbSdcbiAgICB9KTtcbiAgICBlbGVtMi5hcHBlbmRDaGlsZCh0aGlzLmJhY2tncm91bmRSZWNvcmQuZWxfKTtcbiAgICBib2R5SG9sZGVyLmFwcGVuZENoaWxkKGVsZW0yKTtcblxuICAgIHJldHVybiBib2R5SG9sZGVyO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soaW5kZXgpIHtcbiAgICB0aGlzLiQkKCcudmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2LWVsZW0nKS5mb3JFYWNoKChlbGVtLCBlbGVtSW5kZXgpID0+IHtcbiAgICAgIGlmKGluZGV4ID09PSBlbGVtSW5kZXgpIHtcbiAgICAgICAgRG9tLmFkZENsYXNzKGVsZW0sICdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIERvbS5yZW1vdmVDbGFzcyhlbGVtLCAnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy4kJCgnLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWVsZW0nKS5mb3JFYWNoKChlbGVtLCBlbGVtSW5kZXgpID0+IHtcbiAgICAgIGlmKGluZGV4ID09PSBlbGVtSW5kZXgpIHtcbiAgICAgICAgRG9tLmFkZENsYXNzKGVsZW0sICdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIERvbS5yZW1vdmVDbGFzcyhlbGVtLCAnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNIbHNKcztcbiIsImltcG9ydCB7UGxheWxpc3RNb2RlbH0gZnJvbSBcIi4uL01vZGVscy9QbGF5bGlzdFwiO1xuaW1wb3J0IHtub3dJbkZvcm1hdFltZEhpc30gZnJvbSBcIi4uL3V0aWxzL2RhdGVcIjtcbmltcG9ydCBYaHJMb2FkZXIgZnJvbSBcIi4uL3V0aWxzL3hoci1sb2FkZXJcIjtcblxuY29uc3QgSGxzID0gd2luZG93LkhscztcblxuY29uc3QgZmFjZU1pbWVQcm9taXNlID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlKHt9KTtcbiAgfSlcbn07XG5cbmNsYXNzIFJlYWx0aW1lUmVjb3JkQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHBsdWdpbikge1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMubWFuaWZlc3RMaXN0ZW5lciA9IG51bGw7XG4gICAgdGhpcy5sZXZlbExpc3RlbmVyID0gbnVsbDtcbiAgICB0aGlzLmZyYWdtZW50TGlzdGVuZXIgPSBudWxsO1xuICAgIHRoaXMucmVjb3JkU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5wbGF5bGlzdCA9IG51bGw7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IGhsc2pzID0gdGhpcy5wbHVnaW4uZ2V0SGxzSnMoKTtcbiAgICB0aGlzLmZyYWdtZW50TGlzdGVuZXIgPSBobHNqcy5vbihIbHMuRXZlbnRzLkZSQUdfTE9BREVELCB0aGlzLmhsc0ZyYWdtZW50TG9hZGVkKTtcbiAgfVxuXG4gIHN0YXJ0UmVjb3JkKCkge1xuICAgIHRoaXMucGxheWxpc3QgPSBudWxsO1xuICAgIHRoaXMucmVjb3JkU3RhcnRlZCA9IHRydWU7XG4gIH1cblxuICBzdG9wUmVjb3JkKCkge1xuICAgIHRoaXMucmVjb3JkU3RhcnRlZCA9IGZhbHNlO1xuICAgIGlmKHRoaXMucGxheWxpc3QpIHtcbiAgICAgIHRoaXMucGxheWxpc3QuZmluaXNoZWQoKTtcbiAgICAgIHRoaXMucGx1Z2luLnN0b3JhZ2VDb250cm9sbGVyLnNhdmVQbGF5bGlzdCh0aGlzLnBsYXlsaXN0KTtcbiAgICB9XG4gIH1cblxuICBzYXZlRnJhZ21lbnQoZnJhZykge1xuICAgIGlmKHRoaXMucGxheWxpc3QgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuaW5pdFBsYXlsaXN0KGZyYWcubGV2ZWwpO1xuICAgIH1cblxuICAgIGlmKHRoaXMucGxheWxpc3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgWGhyTG9hZGVyKCk7XG4gICAgY29uc3QgdXJsID0gZnJhZy51cmw7XG4gICAgY29uc3QgbG9hZGVyQ29udGV4dCA9IHtcbiAgICAgIHVybCxcbiAgICAgIGZyYWc6IHRoaXMucGxheWxpc3QuYWRkRnJhZ21lbnQoZnJhZy5kdXJhdGlvbiwgdXJsKSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcbiAgICAgIHByb2dyZXNzRGF0YTogZmFsc2UsXG4gICAgICBsb2FkZXJcbiAgICB9O1xuICAgIGNvbnN0IGxvYWRlckNvbmZpZyA9IHtcbiAgICAgIHRpbWVvdXQ6IDYwLFxuICAgICAgbWF4UmV0cnk6IDAsXG4gICAgICByZXRyeURlbGF5OiAwLFxuICAgICAgbWF4UmV0cnlEZWxheTogM1xuICAgIH07XG5cbiAgICBjb25zdCBsb2FkZXJDYWxsYmFja3MgPSB7XG4gICAgICBvblN1Y2Nlc3M6IHRoaXMuZnJhZ21lbnRMb2FkZWQsXG4gICAgfTtcbiAgICBsb2FkZXIubG9hZChsb2FkZXJDb250ZXh0LCBsb2FkZXJDb25maWcsIGxvYWRlckNhbGxiYWNrcyk7XG4gIH1cblxuICBpbml0UGxheWxpc3QobGV2ZWxJbmRleCkge1xuICAgIGNvbnN0IGhsc2pzID0gdGhpcy5wbHVnaW4uZ2V0SGxzSnMoKTtcbiAgICBjb25zdCBsZXZlbCA9IGhsc2pzLmxldmVsc1tsZXZlbEluZGV4XTtcbiAgICBjb25zdCBtaW1lUHJvbWlzZSA9ICh0aGlzLnBsdWdpbi5vcHRpb25zLnJlYWx0aW1lUmVjb3JkLmdldFJlY29yZE1pbWUgfHwgZmFjZU1pbWVQcm9taXNlKSgpO1xuXG4gICAgaWYoIWxldmVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wbGF5bGlzdCA9IG5ldyBQbGF5bGlzdE1vZGVsKHtcbiAgICAgIGlkOiAncmVjb3JkLScgKyBub3dJbkZvcm1hdFltZEhpcygpLFxuICAgICAgd2lkdGg6IGxldmVsLndpZHRoLFxuICAgICAgaGVpZ2h0OiBsZXZlbC5oZWlnaHQsXG4gICAgICB0YXJnZXRkdXJhdGlvbjogbGV2ZWwuZGV0YWlscy50YXJnZXRkdXJhdGlvblxuICAgIH0pO1xuXG4gICAgbWltZVByb21pc2UudGhlbigobWltZSkgPT4ge1xuICAgICAgdGhpcy5wbGF5bGlzdC5taW1lID0gbWltZTtcbiAgICAgIHRoaXMucGx1Z2luLnN0b3JhZ2VDb250cm9sbGVyLnNhdmVQbGF5bGlzdCh0aGlzLnBsYXlsaXN0KTtcbiAgICB9KVxuICB9XG5cbiAgZnJhZ21lbnRMb2FkZWQgPSAocmVzcG9uc2UsIHN0YXRzLCBjb250ZXh0LCBuZXR3b3JrRGV0YWlscyA9IG51bGwpID0+IHtcbiAgICBjb250ZXh0LmxvYWRlci5kZXN0cm95KCk7XG4gICAgY29udGV4dC5sb2FkZXIgPSBudWxsO1xuXG4gICAgdGhpcy5wbHVnaW4uc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUZyYWdtZW50KGNvbnRleHQuZnJhZywgcmVzcG9uc2UuZGF0YSwgc3RhdHMpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5wbGF5bGlzdC5mcmFnbWVudFNhdmVkKGNvbnRleHQuZnJhZyk7XG4gICAgICB0aGlzLnBsdWdpbi5zdG9yYWdlQ29udHJvbGxlci5zYXZlUGxheWxpc3QodGhpcy5wbGF5bGlzdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgaGxzRnJhZ21lbnRMb2FkZWQgPSAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICBpZih0aGlzLnJlY29yZFN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMuc2F2ZUZyYWdtZW50KGRhdGEuZnJhZyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFsdGltZVJlY29yZENvbnRyb2xsZXI7XG4iLCJjb25zdCBEQl9WRVJTSU9OID0gMTtcbmNvbnN0IFNUT1JBR0VfV1JJVEVfTU9ERSA9ICdyZWFkd3JpdGUnO1xuY29uc3QgU1RPUkFHRV9SRUFEX01PREUgPSAncmVhZG9ubHknO1xuXG5jbGFzcyBTdG9yYWdlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHBsdWdpbikge1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMuZGIgPSBudWxsO1xuICB9XG5cblxuICBpbml0KCkge1xuICAgIGNvbnN0IG9wZW5SZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4odGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlRGJOYW1lLCBEQl9WRVJTSU9OKTtcbiAgICBvcGVuUmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRiID0gb3BlblJlcXVlc3QucmVzdWx0O1xuICAgICAgdGhpcy5kYi5jcmVhdGVPYmplY3RTdG9yZSh0aGlzLnBsdWdpbi5vcHRpb25zLnN0b3JhZ2VQbGF5bGlzdHNOYW1lLCB7a2V5UGF0aDogJ2lkJ30pO1xuXG4gICAgICBjb25zdCBmcmFnbWVudHNTdG9yYWdlID0gdGhpcy5kYi5jcmVhdGVPYmplY3RTdG9yZSh0aGlzLnBsdWdpbi5vcHRpb25zLnN0b3JhZ2VGcmFnbWVudHNOYW1lLCB7a2V5UGF0aDogJ3V1aWQnfSk7XG4gICAgICBmcmFnbWVudHNTdG9yYWdlLmNyZWF0ZUluZGV4KCdwbGF5bGlzdElkJywgJ3BsYXlsaXN0SWQnLCB7dW5pcXVlOiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICBvcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRiID0gb3BlblJlcXVlc3QucmVzdWx0O1xuICAgIH07XG4gIH1cblxuICBjaGVja1JlcXVpcmVtZW50cygpIHtcbiAgICByZXR1cm4gJ2luZGV4ZWREQicgaW4gd2luZG93O1xuICB9XG5cbiAgLy9UT0RPOiBuZWVkIHRvIGFkZCBlcnJvciBwcm9jZXNzaW5nXG4gIHNhdmVGcmFnbWVudChmcmFnbWVudCwgcGF5bG9hZCwgc3RhdHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmKHRoaXMuZGIgPT09IG51bGwpIHtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0aGlzLmRiLnRyYW5zYWN0aW9uKHRoaXMucGx1Z2luLm9wdGlvbnMuc3RvcmFnZUZyYWdtZW50c05hbWUsIFNUT1JBR0VfV1JJVEVfTU9ERSk7XG4gICAgICBjb25zdCBzdG9yYWdlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlRnJhZ21lbnRzTmFtZSk7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gc3RvcmFnZS5hZGQoe1xuICAgICAgICAuLi5mcmFnbWVudCxcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgc3RhdHNcbiAgICAgIH0pO1xuXG4gICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwKFwiY2FjaGUtZHJpdmVyLmpzOjE3IC0gc3RvcmUgLSBvbnN1Y2Nlc3NcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3QpO1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICB9O1xuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXAoXCJjYWNoZS1kcml2ZXIuanM6MTcgLSBzdG9yZSAtIG9uZXJyb3JcIik7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybihyZXF1ZXN0KTtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgfTtcbiAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvL1RPRE86IG5lZWQgdG8gYWRkIGVycm9yIHByb2Nlc3NpbmdcbiAgc2F2ZVBsYXlsaXN0KHBsYXlsaXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZih0aGlzLmRiID09PSBudWxsKSB7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdGhpcy5kYi50cmFuc2FjdGlvbih0aGlzLnBsdWdpbi5vcHRpb25zLnN0b3JhZ2VQbGF5bGlzdHNOYW1lLCBTVE9SQUdFX1dSSVRFX01PREUpO1xuICAgICAgY29uc3Qgc3RvcmFnZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXMucGx1Z2luLm9wdGlvbnMuc3RvcmFnZVBsYXlsaXN0c05hbWUpO1xuICAgICAgY29uc3QgcmVxdWVzdCA9IHN0b3JhZ2UucHV0KHBsYXlsaXN0KTtcblxuICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cChcImNhY2hlLWRyaXZlci5qczoxNyAtIHN0b3JlIC0gb25zdWNjZXNzXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0KTtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgfTtcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwKFwiY2FjaGUtZHJpdmVyLmpzOjE3IC0gc3RvcmUgLSBvbmVycm9yXCIpO1xuICAgICAgICAvLyBjb25zb2xlLndhcm4ocmVxdWVzdCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgIH07XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0pO1xuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlQ29udHJvbGxlcjtcbiIsImltcG9ydCBSZWNTZXR0aW5nc01vZGFsSGxzSnMgZnJvbSBcIi4uL0NvbXBvbmVudHMvUmVjU2V0dGluZ3NNb2RhbEhsc0pzXCI7XG5cbmNsYXNzIFZpZXdDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocGx1Z2luKSB7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG5cbiAgICB0aGlzLnJlY0J1dHRvbkNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5zdG9wQnV0dG9uQ29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5wcm9ncmVzc0NvbnRyb2xDb21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMubGl2ZUJ1dHRvbkNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5jYWNoZWRCdXR0b25Db21wb25lbnQgPSBudWxsO1xuXG5cbiAgICB0aGlzLnJlY1NldHRpbmdzTW9kYWxDb21wb25lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5saXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjID0gW107XG4gIH1cblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRyb2xCYXIgPSB0aGlzLnBsdWdpbi5wbGF5ZXIuZ2V0Q2hpbGQoJ0NvbnRyb2xCYXInKTtcbiAgICBjb25zdCBzcGFjZSA9IGNvbnRyb2xCYXIuYWRkQ2hpbGQoJ0NvbXBvbmVudCcsIHt9LCAyKTtcbiAgICBzcGFjZS5hZGRDbGFzcygndmpzLWhsc2pzLWNvbnRyb2xzLWhvbGRlcicpO1xuXG4gICAgdGhpcy5yZW1vdmVEZWZhdWx0Q29udHJvbHMoKTtcblxuICAgIHRoaXMubGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYyA9IHRoaXMucGx1Z2luLm9wdGlvbnMubGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYy5tYXAoKHNlbGVjdG9yKSA9PiB7XG4gICAgICByZXR1cm4gY29udHJvbEJhci5jaGlsZHJlbigpLmZpbHRlcihjb21wb25lbnQgPT4gY29tcG9uZW50Lmhhc0NsYXNzKHNlbGVjdG9yKSlbMF07XG4gICAgfSkuZmlsdGVyKGNvbXBvbmVudCA9PiAhIWNvbXBvbmVudCk7XG5cbiAgICB0aGlzLmNhY2hlZEJ1dHRvbkNvbXBvbmVudCA9IHNwYWNlLmFkZENoaWxkKCdDYWNoZWRCdXR0b25IbHNKcycsIHtcbiAgICAgIGNsaWNrSGFuZGxlcjogdGhpcy5hY3RpdmVMaXZlTW9kZVxuICAgIH0sIDEpO1xuICAgIHRoaXMuY2FjaGVkQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcblxuICAgIHRoaXMubGl2ZUJ1dHRvbkNvbXBvbmVudCA9IGNvbnRyb2xCYXIuYWRkQ2hpbGQoJ0xpdmVCdXR0b25IbHNKcycsIHtcbiAgICAgIGNsaWNrSGFuZGxlcjogdGhpcy5hY3RpdmF0ZVByb2dyZXNzTW9kZVxuICAgIH0sIDIpO1xuICAgIHRoaXMubGl2ZUJ1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG5cbiAgICB0aGlzLnJlY0J1dHRvbkNvbXBvbmVudCA9IHNwYWNlLmFkZENoaWxkKCdSZWNCdXR0b25IbHNKcycsIHtcbiAgICAgIGNsaWNrSGFuZGxlcjogdGhpcy5zaG93UmVjb3JkU2V0dGluZ3NcbiAgICB9LCAxKTtcbiAgICB0aGlzLnJlY0J1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG5cbiAgICB0aGlzLnN0b3BCdXR0b25Db21wb25lbnQgPSBjb250cm9sQmFyLmFkZENoaWxkKCdTdG9wQnV0dG9uSGxzSnMnLCB7XG4gICAgICBjbGlja0hhbmRsZXI6IHRoaXMucGx1Z2luLnN0b3BSZWFsdGltZVJlY29yZFxuICAgIH0sIDEpO1xuICAgIHRoaXMuc3RvcEJ1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG5cbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudCA9IHNwYWNlLmFkZENoaWxkKCdSZWNTdGF0dXNCYXJIbHNKcycsIDEpO1xuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50LmhpZGUoKTtcblxuICAgIHRoaXMucHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50ID0gc3BhY2UuYWRkQ2hpbGQoJ1Byb2dyZXNzQ29udHJvbEhsc0pzJywge30sIDIpO1xuICAgIHRoaXMucHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50LmhpZGUoKTtcblxuICAgIHRoaXMuYWN0aXZlTGl2ZU1vZGUoKTtcbiAgfTtcblxuICByZW1vdmVEZWZhdWx0Q29udHJvbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udHJvbEJhciA9IHRoaXMucGx1Z2luLnBsYXllci5nZXRDaGlsZCgnQ29udHJvbEJhcicpO1xuICAgIGNvbnRyb2xCYXIucmVtb3ZlQ2hpbGQoJ1Byb2dyZXNzQ29udHJvbCcpO1xuICAgIGNvbnRyb2xCYXIucmVtb3ZlQ2hpbGQoJ1NlZWtUb0xpdmUnKTtcbiAgICBjb250cm9sQmFyLnJlbW92ZUNoaWxkKCdMaXZlRGlzcGxheScpO1xuICB9O1xuXG4gIGFjdGl2ZUxpdmVNb2RlID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnNob3dPdGhlckNvbnRyb2woKTtcbiAgICAgIHRoaXMuc2hvd0xpdmVDb250cm9sKCk7XG4gICAgICB0aGlzLmhpZGVQcm9ncmVzc0NvbnRyb2woKTtcbiAgICAgIHRoaXMuaGlkZVJlY0NvbnRyb2woKTtcbiAgICAgIHRoaXMucGx1Z2luLnBsYXllci5saXZlVHJhY2tlci5zZWVrVG9MaXZlRWRnZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMucGx1Z2luLnBsYXllci5sb2cud2FybihlLm1lc3NhZ2UpXG4gICAgfVxuICB9O1xuXG4gIGFjdGl2YXRlUHJvZ3Jlc3NNb2RlID0gKCkgPT4ge1xuICAgIGlmKHRoaXMucGx1Z2luLnN0YXRlLnJlY29yZEluUHJvY2Vzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNob3dPdGhlckNvbnRyb2woKTtcbiAgICB0aGlzLnNob3dQcm9ncmVzc0NvbnRyb2woKTtcbiAgICB0aGlzLmhpZGVMaXZlQ29udHJvbCgpO1xuICAgIHRoaXMuaGlkZVJlY0NvbnRyb2woKTtcbiAgfTtcblxuICBzaG93UmVjb3JkU2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgdGhpcy5yZWNTZXR0aW5nc01vZGFsQ29tcG9uZW50ID0gbmV3IFJlY1NldHRpbmdzTW9kYWxIbHNKcyh0aGlzLnBsdWdpbi5wbGF5ZXIsIHRoaXMucGx1Z2luLm9wdGlvbnMpO1xuICAgIHRoaXMucGx1Z2luLnBsYXllci5hZGRDaGlsZCh0aGlzLnJlY1NldHRpbmdzTW9kYWxDb21wb25lbnQpO1xuICAgIHRoaXMucmVjU2V0dGluZ3NNb2RhbENvbXBvbmVudC5vcGVuKCk7XG4gIH07XG5cbiAgYWN0aXZhdGVSZWNvcmRNb2RlID0gKCkgPT4ge1xuICAgIHRoaXMucmVjU2V0dGluZ3NNb2RhbENvbXBvbmVudC5jbG9zZSgpO1xuICAgIHRoaXMuaGlkZVByb2dyZXNzQ29udHJvbCgpO1xuICAgIHRoaXMuaGlkZUxpdmVDb250cm9sKCk7XG4gICAgdGhpcy5oaWRlT3RoZXJDb250cm9sKCk7XG4gICAgdGhpcy5zaG93UmVjQ29udHJvbCgpO1xuICB9O1xuXG4gIHNob3dSZWNDb250cm9sID0gKCkgPT4ge1xuICAgIGNvbnN0IG1heFJlY29yZFNlY29uZHMgPSB0aGlzLnBsdWdpbi5vcHRpb25zLm1heFJlY29yZE1pbnV0ZXMgKiA2MDtcbiAgICB0aGlzLnBsdWdpbi5wbGF5ZXIuYWRkQ2xhc3MoJ3Zqcy1obHNqcy1yZWNvcmQtc3RhcnRlZCcpO1xuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50LnVwZGF0ZVJlY29yZExlZnRUaW1lKG1heFJlY29yZFNlY29uZHMpO1xuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50LnVwZGF0ZVJlY29yZFRpbWUoMCk7XG4gICAgbGV0IGEgPSAxO1xuICAgIHRoaXMucmVjb3JkVXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZihhID49IG1heFJlY29yZFNlY29uZHMpIHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc3RvcFJlYWx0aW1lUmVjb3JkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudC51cGRhdGVSZWNvcmRUaW1lKGErKyk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICB0aGlzLnN0b3BCdXR0b25Db21wb25lbnQuc2hvdygpO1xuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50LnNob3coKTtcbiAgfTtcblxuICBoaWRlUmVjQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLnBsdWdpbi5wbGF5ZXIucmVtb3ZlQ2xhc3MoJ3Zqcy1obHNqcy1yZWNvcmQtc3RhcnRlZCcpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yZWNvcmRVcGRhdGVJbnRlcnZhbCk7XG4gICAgdGhpcy5zdG9wQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudC5oaWRlKCk7XG4gIH07XG5cbiAgc2hvd1Byb2dyZXNzQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLnByb2dyZXNzQ29udHJvbENvbXBvbmVudC5zaG93KCk7XG4gICAgdGhpcy5jYWNoZWRCdXR0b25Db21wb25lbnQuc2hvdygpO1xuICB9O1xuXG4gIGhpZGVQcm9ncmVzc0NvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9ncmVzc0NvbnRyb2xDb21wb25lbnQuaGlkZSgpO1xuICAgIHRoaXMuY2FjaGVkQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcbiAgfTtcblxuICBoaWRlT3RoZXJDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMubGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQuYWRkQ2xhc3MoJ3Zqcy1obHNqcy1sci1oaWRkZW4nKSk7XG4gIH07XG5cbiAgc2hvd090aGVyQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLmxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50LnJlbW92ZUNsYXNzKCd2anMtaGxzanMtbHItaGlkZGVuJykpO1xuICB9O1xuXG5cbiAgc2hvd0xpdmVDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMubGl2ZUJ1dHRvbkNvbXBvbmVudC5zaG93KCk7XG4gICAgdGhpcy5yZWNCdXR0b25Db21wb25lbnQuc2hvdygpO1xuICB9O1xuXG4gIGhpZGVMaXZlQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLmxpdmVCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuICAgIHRoaXMucmVjQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcbiAgfTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3Q29udHJvbGxlcjtcbiIsImltcG9ydCB7ZmFjZVVVSUR9IGZyb20gXCIuLi91dGlscy91dWlkXCI7XG5cbmV4cG9ydCBjbGFzcyBGcmFnbWVudE1vZGVsIHtcbiAgY29uc3RydWN0b3IoZnJhZ21lbnREYXRhKSB7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGZyYWdtZW50RGF0YS5kdXJhdGlvbiB8fCAwO1xuICAgIHRoaXMudXJsID0gZnJhZ21lbnREYXRhLnVybCB8fCAnJztcbiAgICB0aGlzLnBsYXlsaXN0SWQgPSBmcmFnbWVudERhdGEucGxheWxpc3RJZCB8fCAndG1wJztcbiAgICB0aGlzLnV1aWQgPSBmYWNlVVVJRCh0aGlzLnBsYXlsaXN0SWQgKyAnLScgKyB0aGlzLnVybC5zcGxpdCgnLycpLnBvcCgpKTtcbiAgICB0aGlzLnNhdmVkID0gZnJhZ21lbnREYXRhLnNhdmVkIHx8IGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQge0ZyYWdtZW50TW9kZWx9IGZyb20gXCIuL0ZyYWdtZW50XCI7XG5cbmNvbnN0IGNyZWF0ZVBsYXlsaXN0SGVhZGVyID0gKHRhcmdldGR1cmF0aW9uKSA9PiB7XG4gIHJldHVybiBcIiNFWFRNM1VcXG5cIiArXG4gICAgXCIjRVhULVgtVkVSU0lPTjo0XFxuXCIgK1xuICAgIFwiI0VYVC1YLVRBUkdFVERVUkFUSU9OOlwiICsgdGFyZ2V0ZHVyYXRpb24gKyBcIlxcblwiICtcbiAgICBcIiNFWFQtWC1NRURJQS1TRVFVRU5DRTowXFxuXCI7XG59O1xuY29uc3QgYWRkUGxheWxpc3RGcmFnbWVudCA9IChkdXJhY3Rpb24sIHVybCkgPT4ge1xucmV0dXJuIFwiI0VYVElORjpcIiArIGR1cmFjdGlvbiArIFwiLFxcblwiICtcbiAgdXJsICsgXCJcXG5cIjtcbn07XG5jb25zdCBjcmVhdGVQbGF5bGlzdEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIFwiI0VYVC1YLUVORExJU1RcXG5cIjtcbn07XG5cblxuZXhwb3J0IGNsYXNzIFBsYXlsaXN0TW9kZWwge1xuICBjb25zdHJ1Y3RvcihwbGF5bGlzdERhdGEpIHtcbiAgICB0aGlzLmlkID0gcGxheWxpc3REYXRhLmlkIHx8ICcnO1xuICAgIHRoaXMud2lkdGggPSBwbGF5bGlzdERhdGEud2lkdGggfHwgMzg0O1xuICAgIHRoaXMuaGVpZ2h0ID0gcGxheWxpc3REYXRhLmhlaWdodCB8fCAzODQ7XG4gICAgdGhpcy5mcmFnbWVudHMgPSBwbGF5bGlzdERhdGEuZnJhZ21lbnRzIHx8IFtdO1xuICAgIHRoaXMudGFyZ2V0ZHVyYXRpb24gPSBwbGF5bGlzdERhdGEudGFyZ2V0ZHVyYXRpb24gfHwgMDtcbiAgICB0aGlzLm1pbWUgPSBwbGF5bGlzdERhdGEubWltZSB8fCB7fTtcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IHBsYXlsaXN0RGF0YS5jcmVhdGVkQXQgfHwgRGF0ZS5ub3coKTtcbiAgICB0aGlzLnVwZGF0ZWRBdCA9IHBsYXlsaXN0RGF0YS51cGRhdGVkQXQgfHwgbnVsbDtcbiAgICB0aGlzLnJlY0ZpbmlzaGVkID0gcGxheWxpc3REYXRhLnJlY0ZpbmlzaGVkIHx8IGZhbHNlO1xuICB9XG5cbiAgYWRkRnJhZ21lbnQoZHVyYXRpb24sIHVybCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gbmV3IEZyYWdtZW50TW9kZWwoe2R1cmF0aW9uLCB1cmx9KTtcbiAgICB0aGlzLmZyYWdtZW50cy5wdXNoKGZyYWdtZW50KTtcbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH1cblxuICBmcmFnbWVudFNhdmVkKGZyYWdtZW50KSB7XG4gICAgdGhpcy5mcmFnbWVudHMgPSB0aGlzLmZyYWdtZW50cy5tYXAoKGZyYWcpID0+IHtcbiAgICAgIGlmKGZyYWcudXVpZCA9PT0gZnJhZ21lbnQudXVpZCkge1xuICAgICAgICBmcmFnLnNhdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcmFnO1xuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVkQXQgPSBEYXRlLm5vdygpO1xuICB9XG5cbiAgZmluaXNoZWQoKSB7XG4gICAgdGhpcy51cGRhdGVkQXQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMucmVjRmluaXNoZWQgPSB0cnVlO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVBsYXlsaXN0SGVhZGVyKHRoaXMudGFyZ2V0ZHVyYXRpb24pICtcbiAgICAgICh0aGlzLmZyYWdtZW50cy5maWx0ZXIoZnJhZ21lbnQgPT4gKGZyYWdtZW50LnNhdmVkKSlcbiAgICAgICAgLm1hcChmcmFnbWVudCA9PiAoYWRkUGxheWxpc3RGcmFnbWVudChmcmFnbWVudC5kdXJhdGlvbiwgZnJhZ21lbnQudXVpZCkpKS5qb2luKCcnKSkgK1xuICAgICAgY3JlYXRlUGxheWxpc3RGb290ZXIoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzQnV0dG9uQ2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY2hlZEJ1dHRvbkhsc0pzIGV4dGVuZHMgVmlkZW9Kc0J1dHRvbkNsYXNzIHtcbiAgXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKHRhZywgcHJvcHMgPSB7fSwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgdGhpcy5ub25JY29uQ29udHJvbCA9IHRydWU7XG5cbiAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgLy8gY2xhc3NOYW1lOiAndmpzLWxpdmUtZGlzcGxheScsXG4gICAgICAvLyBpbm5lckhUTUw6ICdEVlInLFxuICAgICAgY2xhc3NOYW1lOiAndmpzLXNlZWstdG8tbGl2ZS1jb250cm9sJyxcbiAgICAgIGlubmVySFRNTDogJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwidmpzLWljb24tcGxhY2Vob2xkZXJcIj48L3NwYW4+TElWRScsXG4gICAgfSwgcHJvcHMpO1xuXG4gICAgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2FyaWEtbGl2ZSc6ICdPbidcbiAgICB9LCBhdHRyaWJ1dGVzKTtcblxuICAgIHJldHVybiBzdXBlci5jcmVhdGVFbCh0YWcsIHByb3BzLCBhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpIHtcbiAgICB0aGlzLmNvbnRyb2xUZXh0XyA9ICdTdHJlYW0gVHlwZSc7XG4gICAgc3VwZXIuY3JlYXRlQ29udHJvbFRleHRFbChlbCk7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzQnV0dG9uQ2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVCdXR0b25IbHNKcyBleHRlbmRzIFZpZGVvSnNCdXR0b25DbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKHRhZywgcHJvcHMgPSB7fSwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgdGhpcy5ub25JY29uQ29udHJvbCA9IHRydWU7XG5cbiAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWNvbnRyb2wgdmpzLXNlZWstdG8tbGl2ZS1jb250cm9sIHZqcy1hdC1saXZlLWVkZ2UnLFxuICAgICAgaW5uZXJIVE1MOiAnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ2anMtaWNvbi1wbGFjZWhvbGRlclwiPjwvc3Bhbj5MSVZFJyxcbiAgICB9LCBwcm9wcyk7XG5cbiAgICBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYXJpYS1saXZlJzogJ29mZidcbiAgICB9LCBhdHRyaWJ1dGVzKTtcblxuICAgIHJldHVybiBzdXBlci5jcmVhdGVFbCh0YWcsIHByb3BzLCBhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpIHtcbiAgICB0aGlzLmNvbnRyb2xUZXh0XyA9ICdTdHJlYW0gVHlwZSc7XG4gICAgc3VwZXIuY3JlYXRlQ29udHJvbFRleHRFbChlbCk7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzUHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ1Byb2dyZXNzQ29udHJvbCcpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQ29udHJvbEhsc0pzIGV4dGVuZHMgVmlkZW9Kc1Byb2dyZXNzQ29udHJvbENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gIH1cbn1cbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuY29uc3QgVmlkZW9Kc0J1dHRvbkNsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNCdXR0b25IbHNKcyBleHRlbmRzIFZpZGVvSnNCdXR0b25DbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKHRhZywgcHJvcHMgPSB7fSwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgdGhpcy5ub25JY29uQ29udHJvbCA9IHRydWU7XG5cbiAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWNvbnRyb2wgdmpzLXNlZWstdG8tbGl2ZS1jb250cm9sJyxcbiAgICAgIGlubmVySFRNTDogJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwidmpzLWljb24tcGxhY2Vob2xkZXJcIj48L3NwYW4+UkVDJyxcbiAgICB9LCBwcm9wcyk7XG5cbiAgICBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYXJpYS1saXZlJzogJ09uJ1xuICAgIH0sIGF0dHJpYnV0ZXMpO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKHRhZywgcHJvcHMsIGF0dHJpYnV0ZXMpO1xuICB9XG5cbiAgY3JlYXRlQ29udHJvbFRleHRFbChlbCkge1xuICAgIHRoaXMuY29udHJvbFRleHRfID0gJ1N0YXJ0IFJlY29yZCc7XG4gICAgc3VwZXIuY3JlYXRlQ29udHJvbFRleHRFbChlbCk7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuaW1wb3J0IGZvcm1hdFRpbWUgZnJvbSAnLi4vdXRpbHMvZm9ybWF0LXRpbWUnO1xuXG5jb25zdCBWaWRlb0pzQ29tcG9uZW50Q2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY1N0YXR1c0Jhckhsc0pzIGV4dGVuZHMgVmlkZW9Kc0NvbXBvbmVudENsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucykpO1xuICB9XG5cbiAgY3JlYXRlRWwoKSB7XG4gICAgdGhpcy5ub25JY29uQ29udHJvbCA9IHRydWU7XG4gICAgY29uc3QgZWxlbSA9IHN1cGVyLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICd2anMtY29udHJvbCB2anMtaGxzanMtbHItcmVjLXN0YXR1cy1iYXInLFxuICAgICAgaW5uZXJIVE1MOiAnPHNwYW4gY2xhc3M9XCJ2anMtaGxzanMtbHItcmVjLWluZGljYXRvclwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbWQtMTBcIj5maWJlcl9tYW51YWxfcmVjb3JkPC9pPlJFQzwvc3Bhbj4nXG4gICAgfSk7XG5cblxuICAgIHRoaXMucmVjb3JkZWRFbF8gPSBEb20uY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtbHItcmVjb3JkZWQnLFxuICAgICAgaW5uZXJUZXh0OiAnLS06LS06LS0nXG4gICAgfSwge1xuICAgICAgJ2FyaWEtbGl2ZSc6ICdvZmYnLFxuICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgIH0pO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5yZWNvcmRlZEVsXyk7XG5cbiAgICBlbGVtLmFwcGVuZENoaWxkKFxuICAgICAgRG9tLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtbHItZGl2aWRlcicsXG4gICAgICAgIGlubmVyVGV4dDogJy8nXG4gICAgICB9LCB7XG4gICAgICAgICdhcmlhLWxpdmUnOiAnb2ZmJyxcbiAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5yZWNvcmRMZWZ0RWxfID0gRG9tLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLWxyLXJlY29yZC1sZWZ0JyxcbiAgICAgIGlubmVyVGV4dDogJy0tOi0tOi0tJ1xuICAgIH0sIHtcbiAgICAgICdhcmlhLWxpdmUnOiAnb2ZmJyxcbiAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcbiAgICB9KTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKHRoaXMucmVjb3JkTGVmdEVsXyk7XG5cbiAgICB0aGlzLnVwZGF0ZVJlY29yZFRpbWUoMCk7XG4gICAgdGhpcy51cGRhdGVSZWNvcmRMZWZ0VGltZSg2MCAqIDYwKTtcbiAgICByZXR1cm4gZWxlbTtcbiAgfTtcblxuICB1cGRhdGVSZWNvcmRUaW1lKHRpbWUpIHtcbiAgICBpZih0aGlzLnJlY29yZGVkRWxfKSB7XG4gICAgICB0aGlzLnJlY29yZGVkRWxfLmlubmVyVGV4dCA9IGZvcm1hdFRpbWUodGltZSk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZVJlY29yZExlZnRUaW1lKHRpbWUpIHtcbiAgICBpZih0aGlzLnJlY29yZExlZnRFbF8pIHtcbiAgICAgIHRoaXMucmVjb3JkTGVmdEVsXy5pbm5lclRleHQgPSBmb3JtYXRUaW1lKHRpbWUpO1xuICAgIH1cbiAgfTtcblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMucmVjb3JkZWRFbF8gPSBudWxsO1xuICAgIHRoaXMucmVjb3JkTGVmdEVsXyA9IG51bGw7XG5cbiAgICBzdXBlci5kaXNwb3NlKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzQnV0dG9uQ2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3BCdXR0b25IbHNKcyBleHRlbmRzIFZpZGVvSnNCdXR0b25DbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKHRhZywgcHJvcHMgPSB7fSwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgdGhpcy5ub25JY29uQ29udHJvbCA9IGZhbHNlO1xuXG4gICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1jb250cm9sIHZqcy1obHNqcy1sci1zdG9wJyxcbiAgICAgIGlubmVySFRNTDogJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5zdG9wPC9pPicsXG4gICAgfSwgcHJvcHMpO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKHRhZywgcHJvcHMsIGF0dHJpYnV0ZXMpO1xuICB9XG5cbiAgY3JlYXRlQ29udHJvbFRleHRFbChlbCkge1xuICAgIHRoaXMuY29udHJvbFRleHRfID0gJ1N0b3AgUmVjb3JkJztcbiAgICBzdXBlci5jcmVhdGVDb250cm9sVGV4dEVsKGVsKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgJy4vcGx1Z2luLnNjc3MnO1xuaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuY29uc3QgUGx1Z2luID0gdmlkZW9qcy5nZXRQbHVnaW4oJ3BsdWdpbicpO1xuaW1wb3J0IHt2ZXJzaW9uIGFzIFZFUlNJT059IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgUHJvZ3Jlc3NDb250cm9sSGxzSnMgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9ncmVzc0NvbnRyb2xIbHNKc1wiO1xuaW1wb3J0IExpdmVCdXR0b25IbHNKcyBmcm9tIFwiLi9jb21wb25lbnRzL0xpdmVCdXR0b25IbHNKc1wiO1xuaW1wb3J0IENhY2hlZEJ1dHRvbkhsc0pzIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FjaGVkQnV0dG9uSGxzSnNcIjtcbmltcG9ydCBSZWNCdXR0b25IbHNKcyBmcm9tIFwiLi9jb21wb25lbnRzL1JlY0J1dHRvbkhsc0pzXCI7XG5pbXBvcnQgU3RvcEJ1dHRvbkhsc0pzIGZyb20gXCIuL2NvbXBvbmVudHMvU3RvcEJ1dHRvbkhsc0pzXCI7XG5pbXBvcnQgUmVjU3RhdHVzQmFySGxzSnMgZnJvbSBcIi4vY29tcG9uZW50cy9SZWNTdGF0dXNCYXJIbHNKc1wiO1xuaW1wb3J0IFZpZXdDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJzL1ZpZXdDb250cm9sbGVyXCI7XG5pbXBvcnQgU3RvcmFnZUNvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvU3RvcmFnZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBSZWFsdGltZVJlY29yZENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyXCI7XG5cblxuLyoqXG4gKiBBIERlZmF1bHQgY29uZmlndXJhdGlvblxuICogQHR5cGVkZWYge09iamVjdH0gRGVmYXVsdENvbmZpZ1xuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gbGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYyAtIExpc3Qgb2YgaW50ZXJmYWNlIGVsZW1lbnRzIHRoYXQgc2hvdWxkIGJlIGhpZGRlbiBpbiByZWNvcmRpbmcgbW9kZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHN0b3JhZ2VEYk5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgSW5kZXhlZERCIGRhdGFiYXNlIHVzZWQgdG8gc2F2ZSByZWNvcmRzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc3RvcmFnZVBsYXlsaXN0c05hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcGxheWxpc3RzIHN0b3JhZ2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdG9yYWdlRnJhZ21lbnRzTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBmcmFnbWVudHMgc3RvcmFnZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IG1heFJlY29yZE1pbnV0ZXMgLSBNYXhpbXVtIHJlY29yZCBkdXJhdGlvbiBpbiBtaW51dGVzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGFsbG93ZWQgLSBFbmFibGUgcmVjb3JkaW5nIGZ1bmN0aW9uYWxpdHlcbiAqIEBwcm9wZXJ0eSB7bnVsbCB8IGNhbGxiYWNrPHN0cmluZyB8IEhUTUxFbGVtZW50Pn0gbm90QWxsb3dlZENvbnRlbnQgLSBUaGlzIGNvbnRlbnQgd2lsbCBiZSBkaXNwbGF5ZWQgaWYgcmVjb3JkaW5nIG5vdCBhbGxvd2VkXG4gKiBAcHJvcGVydHkge29iamVjdH0gcmVhbHRpbWVSZWNvcmQgLSBSZWFsdGltZSByZWNvcmRpbmcgY29uZmlndXJhdGlvblxuICogQHByb3BlcnR5IHtib29sZWFufSByZWFsdGltZVJlY29yZC5hbGxvd2VkIC0gRW5hYmxlIHJlYWx0aW1lIHJlY29yZGluZyBmdW5jdGlvbmFsaXR5XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHJlYWx0aW1lUmVjb3JkLmhpZGVJZk5vdEFsbG93ZWQgLSBIaWRlIHJlYWx0aW1lIHJlY29yZGluZyB0YWIgaWYgcmVhbHRpbWUgcmVjb3JkaW5nIG5vdCBhbGxvd2VkXG4gKiBAcHJvcGVydHkge251bGwgfCBjYWxsYmFjazxzdHJpbmcgfCBIVE1MRWxlbWVudD59IHJlYWx0aW1lUmVjb3JkLm1vZGFsSGVhZGVyQ29udGVudCAtIEhlYWRlciBjb250ZW50IG9mIHRoZSByZWFsdGltZSByZWNvcmRpbmcgdGFiXG4gKiBAcHJvcGVydHkge251bGwgfCBjYWxsYmFjazxzdHJpbmcgfCBIVE1MRWxlbWVudD59IHJlYWx0aW1lUmVjb3JkLm1vZGFsRm9vdGVyQ29udGVudCAtIEZvb3RlciBjb250ZW50IG9mIHRoZSByZWFsdGltZSByZWNvcmRpbmcgdGFiXG4gKiBAcHJvcGVydHkge251bGwgfCBjYWxsYmFjazxzdHJpbmcgfCBIVE1MRWxlbWVudD59IHJlYWx0aW1lUmVjb3JkLm5vdEFsbG93ZWRDb250ZW50IC0gVGhpcyBjb250ZW50IHdpbGwgYmUgZGlzcGxheWVkIGlmIHJlYWx0aW1lIHJlY29yZGluZyBub3QgYWxsb3dlZFxuICogQHByb3BlcnR5IHtudWxsIHwgY2FsbGJhY2s8UHJvbWlzZTxvYmplY3Q+Pn0gcmVhbHRpbWVSZWNvcmQuZ2V0UmVjb3JkTWltZSAtIE9iamVjdCByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgaW5jbHVkZWQgaW4gcGxheWxpc3QgYW5kIGNhbiBiZSB1c2VkIGxhdGVyXG4gKi9cblxuLyoqXG4gKlxuICogQHR5cGUge0RlZmF1bHRDb25maWd9XG4gKi9cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBsaXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjOiBbJ3Zqcy1wbGF5LWNvbnRyb2wnLCAndmpzLXF1YWxpdHktc2VsZWN0b3InXSxcbiAgc3RvcmFnZURiTmFtZTogJ3Zqcy1obHNqcy1scicsXG4gIHN0b3JhZ2VQbGF5bGlzdHNOYW1lOiAncGxheWxpc3RzJyxcbiAgc3RvcmFnZUZyYWdtZW50c05hbWU6ICdmcmFnbWVudHMnLFxuICBtYXhSZWNvcmRNaW51dGVzOiA2MCxcbiAgYWxsb3dlZDogdHJ1ZSxcbiAgbm90QWxsb3dlZENvbnRlbnQ6IG51bGwsXG4gIHJlYWx0aW1lUmVjb3JkOiB7XG4gICAgYWxsb3dlZDogdHJ1ZSxcbiAgICBtb2RhbEhlYWRlckNvbnRlbnQ6IG51bGwsXG4gICAgbW9kYWxGb290ZXJDb250ZW50OiBudWxsLFxuICAgIG5vdEFsbG93ZWRDb250ZW50OiBudWxsLFxuICAgIGdldFJlY29yZE1pbWU6IG51bGwsXG4gIH1cbn07XG5cbmNsYXNzIEhsc0pTTGl2ZVJlY29yZFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG5cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcbiAgICB0aGlzLm9wdGlvbnMgPSB2aWRlb2pzLm1lcmdlT3B0aW9ucyhkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5zdG9yYWdlQ29udHJvbGxlciA9IG5ldyBTdG9yYWdlQ29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLnZpZXdDb250cm9sbGVyID0gbmV3IFZpZXdDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMucmVhbHRpbWVSZWNvcmRDb250cm9sbGVyID0gbmV3IFJlYWx0aW1lUmVjb3JkQ29udHJvbGxlcih0aGlzKTtcblxuICAgIHBsYXllci5vbigncGxheWluZycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICBpZih0aGlzLnN0YXRlLmluaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtpbml0OiB0cnVlfSk7XG4gICAgaWYodGhpcy5jaGVja1JlcXVpcmVtZW50cygpKSB7XG4gICAgICB0aGlzLnBsYXllci5hZGRDbGFzcygndmpzLWhscy1saXZlLXJlY29yZCcpO1xuICAgICAgdGhpcy5wbGF5ZXIub24oJ3BhdXNlJywgdGhpcy52aWV3Q29udHJvbGxlci5hY3RpdmF0ZVByb2dyZXNzTW9kZSk7XG4gICAgICB0aGlzLnZpZXdDb250cm9sbGVyLmluaXQoKTtcbiAgICAgIHRoaXMuc3RvcmFnZUNvbnRyb2xsZXIuaW5pdCgpO1xuICAgICAgdGhpcy5yZWFsdGltZVJlY29yZENvbnRyb2xsZXIuaW5pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWRlb2pzLmxvZy53YXJuKCdIbHNKU0xpdmVSZWNvcmRQbHVnaW46IGNhbm5vdCBiZSBpbml0aWFsaXplZCBiZWNhdXNlIG9uZSBvciBtb3JlIG9mIHRoZSByZXF1aXJlbWVudHMgYXJlIG5vdCBtZXQuJyk7XG4gICAgfVxuICB9O1xuXG4gIGNoZWNrUmVxdWlyZW1lbnRzID0gKCkgPT4ge1xuICAgIGlmKCF0aGlzLmdldEhsc0pzKCkpIHtcbiAgICAgIHZpZGVvanMubG9nLndhcm4oJ0hsc0pTTGl2ZVJlY29yZFBsdWdpbjogSExTLkpTIHBsdWdpbiBub3QgZm91bmQuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuc3RvcmFnZUNvbnRyb2xsZXIuY2hlY2tSZXF1aXJlbWVudHMoKSkge1xuICAgICAgdmlkZW9qcy5sb2cud2FybignSGxzSlNMaXZlUmVjb3JkUGx1Z2luOiBUaGlzIGJyb3dzZXIgZG9lc25cXCd0IHN1cHBvcnQgSW5kZXhlZERCLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBnZXRIbHNKcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIudGVjaCh7IElXaWxsVXNlVGhpc0luUGx1Z2luOiB0cnVlIH0pLnNvdXJjZUhhbmRsZXJfLmhscztcbiAgfTtcblxuICBzdGFydFJlYWx0aW1lUmVjb3JkKGxldmVsSWQpIHtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVjb3JkSW5Qcm9jZXNzOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmdldEhsc0pzKCkuY3VycmVudExldmVsID0gbGV2ZWxJZCAqIDE7XG4gICAgdGhpcy52aWV3Q29udHJvbGxlci5hY3RpdmF0ZVJlY29yZE1vZGUoKTtcblxuICAgIHRoaXMucmVhbHRpbWVSZWNvcmRDb250cm9sbGVyLnN0YXJ0UmVjb3JkKCk7XG4gIH1cblxuICBzdG9wUmVhbHRpbWVSZWNvcmQgPSAoKSA9PiB7XG4gICAgdGhpcy5yZWFsdGltZVJlY29yZENvbnRyb2xsZXIuc3RvcFJlY29yZCgpO1xuICAgIHRoaXMudmlld0NvbnRyb2xsZXIuYWN0aXZlTGl2ZU1vZGUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlY29yZEluUHJvY2VzczogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLmdldEhsc0pzKCkuY3VycmVudExldmVsID0gLTE7XG4gIH07XG5cbiAgaGFuZGxlU3RhdGVDaGFuZ2VkKGUpIHtcblxuICB9XG59XG5cbkhsc0pTTGl2ZVJlY29yZFBsdWdpbi5WRVJTSU9OID0gVkVSU0lPTjtcblxuSGxzSlNMaXZlUmVjb3JkUGx1Z2luLmRlZmF1bHRTdGF0ZSA9IHtcbiAgcmVjb3JkQWxsb3dlZDogdHJ1ZSxcbiAgcmVjb3JkSW5Qcm9jZXNzOiBmYWxzZSxcbiAgaW5pdDogZmFsc2Vcbn07XG5cbnZpZGVvanMucmVnaXN0ZXJQbHVnaW4oJ2hsc0pTTGl2ZVJlY29yZCcsIEhsc0pTTGl2ZVJlY29yZFBsdWdpbik7XG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdQcm9ncmVzc0NvbnRyb2xIbHNKcycsIFByb2dyZXNzQ29udHJvbEhsc0pzKTtcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ0xpdmVCdXR0b25IbHNKcycsIExpdmVCdXR0b25IbHNKcyk7XG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdDYWNoZWRCdXR0b25IbHNKcycsIENhY2hlZEJ1dHRvbkhsc0pzKTtcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ1JlY0J1dHRvbkhsc0pzJywgUmVjQnV0dG9uSGxzSnMpO1xudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnU3RvcEJ1dHRvbkhsc0pzJywgU3RvcEJ1dHRvbkhsc0pzKTtcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ1JlY1N0YXR1c0Jhckhsc0pzJywgUmVjU3RhdHVzQmFySGxzSnMpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3Qgbm9ybWFsaXplID0gKG51bWJlcikgPT4gKG51bWJlciA8IDEwID8gJzAnICsgbnVtYmVyIDogbnVtYmVyKTtcblxuZXhwb3J0IGNvbnN0IHRvRm9ybWF0WW1kSGlzID0gKGRhdGUsIHNlcGFyYXRvcikgPT4ge1xuICByZXR1cm4gW1xuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBub3JtYWxpemUoZGF0ZS5nZXRNb250aCgpICsgMSksXG4gICAgbm9ybWFsaXplKGRhdGUuZ2V0RGF0ZSgpKSxcbiAgICBub3JtYWxpemUoZGF0ZS5nZXRIb3VycygpKSxcbiAgICBub3JtYWxpemUoZGF0ZS5nZXRNaW51dGVzKCkpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldFNlY29uZHMoKSksXG4gIF0uam9pbihzZXBhcmF0b3IpO1xufTtcblxuZXhwb3J0IGNvbnN0IG5vd0luRm9ybWF0WW1kSGlzID0gKHNlcGFyYXRvciA9ICctJykgPT4ge1xuICByZXR1cm4gdG9Gb3JtYXRZbWRIaXMobmV3IERhdGUoKSwgc2VwYXJhdG9yKTtcbn07XG4iLCIvKipcbiAqIEBmaWxlIGZvcm1hdC10aW1lLmpzXG4gKiBAbW9kdWxlIGZvcm1hdC10aW1lXG4gKi9cblxuLyoqXG4gKiBGb3JtYXQgc2Vjb25kcyBhcyBhIHRpbWUgc3RyaW5nLCBIOk1NOlNTIG9yIE06U1MuIFN1cHBseWluZyBhIGd1aWRlIChpblxuICogc2Vjb25kcykgd2lsbCBmb3JjZSBhIG51bWJlciBvZiBsZWFkaW5nIHplcm9zIHRvIGNvdmVyIHRoZSBsZW5ndGggb2YgdGhlXG4gKiBndWlkZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7bnVtYmVyfSBzZWNvbmRzXG4gKiAgICAgICAgIE51bWJlciBvZiBzZWNvbmRzIHRvIGJlIHR1cm5lZCBpbnRvIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBndWlkZVxuICogICAgICAgICBOdW1iZXIgKGluIHNlY29uZHMpIHRvIG1vZGVsIHRoZSBzdHJpbmcgYWZ0ZXJcbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiAgICAgICAgIFRpbWUgZm9ybWF0dGVkIGFzIEg6TU06U1Mgb3IgTTpTU1xuICovXG5jb25zdCBkZWZhdWx0SW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbihzZWNvbmRzLCBndWlkZSkge1xuICBzZWNvbmRzID0gc2Vjb25kcyA8IDAgPyAwIDogc2Vjb25kcztcbiAgbGV0IHMgPSBNYXRoLmZsb29yKHNlY29uZHMgJSA2MCk7XG4gIGxldCBtID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjAgJSA2MCk7XG4gIGxldCBoID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG4gIGNvbnN0IGdtID0gTWF0aC5mbG9vcihndWlkZSAvIDYwICUgNjApO1xuICBjb25zdCBnaCA9IE1hdGguZmxvb3IoZ3VpZGUgLyAzNjAwKTtcblxuICAvLyBoYW5kbGUgaW52YWxpZCB0aW1lc1xuICBpZiAoaXNOYU4oc2Vjb25kcykgfHwgc2Vjb25kcyA9PT0gSW5maW5pdHkpIHtcbiAgICAvLyAnLScgaXMgZmFsc2UgZm9yIGFsbCByZWxhdGlvbmFsIG9wZXJhdG9ycyAoZS5nLiA8LCA+PSkgc28gdGhpcyBzZXR0aW5nXG4gICAgLy8gd2lsbCBhZGQgdGhlIG1pbmltdW0gbnVtYmVyIG9mIGZpZWxkcyBzcGVjaWZpZWQgYnkgdGhlIGd1aWRlXG4gICAgaCA9IG0gPSBzID0gJy0nO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBzaG93IGhvdXJzXG4gIGggPSAoaCA+IDAgfHwgZ2ggPiAwKSA/IGggKyAnOicgOiAnJztcblxuICAvLyBJZiBob3VycyBhcmUgc2hvd2luZywgd2UgbWF5IG5lZWQgdG8gYWRkIGEgbGVhZGluZyB6ZXJvLlxuICAvLyBBbHdheXMgc2hvdyBhdCBsZWFzdCBvbmUgZGlnaXQgb2YgbWludXRlcy5cbiAgbSA9ICgoKGggfHwgZ20gPj0gMTApICYmIG0gPCAxMCkgPyAnMCcgKyBtIDogbSkgKyAnOic7XG5cbiAgLy8gQ2hlY2sgaWYgbGVhZGluZyB6ZXJvIGlzIG5lZWQgZm9yIHNlY29uZHNcbiAgcyA9IChzIDwgMTApID8gJzAnICsgcyA6IHM7XG5cbiAgcmV0dXJuIGggKyBtICsgcztcbn07XG5cbi8vIEludGVybmFsIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24uXG5sZXQgaW1wbGVtZW50YXRpb24gPSBkZWZhdWx0SW1wbGVtZW50YXRpb247XG5cbi8qKlxuICogUmVwbGFjZXMgdGhlIGRlZmF1bHQgZm9ybWF0VGltZSBpbXBsZW1lbnRhdGlvbiB3aXRoIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbUltcGxlbWVudGF0aW9uXG4gKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIHVzZWQgaW4gcGxhY2Ugb2YgdGhlIGRlZmF1bHQgZm9ybWF0VGltZVxuICogICAgICAgIGltcGxlbWVudGF0aW9uLiBXaWxsIHJlY2VpdmUgdGhlIGN1cnJlbnQgdGltZSBpbiBzZWNvbmRzIGFuZCB0aGVcbiAqICAgICAgICBndWlkZSAoaW4gc2Vjb25kcykgYXMgYXJndW1lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0Rm9ybWF0VGltZShjdXN0b21JbXBsZW1lbnRhdGlvbikge1xuICBpbXBsZW1lbnRhdGlvbiA9IGN1c3RvbUltcGxlbWVudGF0aW9uO1xufVxuXG4vKipcbiAqIFJlc2V0cyBmb3JtYXRUaW1lIHRvIHRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGb3JtYXRUaW1lKCkge1xuICBpbXBsZW1lbnRhdGlvbiA9IGRlZmF1bHRJbXBsZW1lbnRhdGlvbjtcbn1cblxuLyoqXG4gKiBEZWxlZ2F0ZXMgdG8gZWl0aGVyIHRoZSBkZWZhdWx0IHRpbWUgZm9ybWF0dGluZyBmdW5jdGlvbiBvciBhIGN1c3RvbVxuICogZnVuY3Rpb24gc3VwcGxpZWQgdmlhIGBzZXRGb3JtYXRUaW1lYC5cbiAqXG4gKiBGb3JtYXRzIHNlY29uZHMgYXMgYSB0aW1lIHN0cmluZyAoSDpNTTpTUyBvciBNOlNTKS4gU3VwcGx5aW5nIGFcbiAqIGd1aWRlIChpbiBzZWNvbmRzKSB3aWxsIGZvcmNlIGEgbnVtYmVyIG9mIGxlYWRpbmcgemVyb3MgdG8gY292ZXIgdGhlXG4gKiBsZW5ndGggb2YgdGhlIGd1aWRlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBleGFtcGxlICBmb3JtYXRUaW1lKDEyNSwgNjAwKSA9PT0gXCIwMjowNVwiXG4gKiBAcGFyYW0gICAge251bWJlcn0gc2Vjb25kc1xuICogICAgICAgICAgIE51bWJlciBvZiBzZWNvbmRzIHRvIGJlIHR1cm5lZCBpbnRvIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtICAgIHtudW1iZXJ9IGd1aWRlXG4gKiAgICAgICAgICAgTnVtYmVyIChpbiBzZWNvbmRzKSB0byBtb2RlbCB0aGUgc3RyaW5nIGFmdGVyXG4gKlxuICogQHJldHVybiAgIHtzdHJpbmd9XG4gKiAgICAgICAgICAgVGltZSBmb3JtYXR0ZWQgYXMgSDpNTTpTUyBvciBNOlNTXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdFRpbWUoc2Vjb25kcywgZ3VpZGUgPSBzZWNvbmRzKSB7XG4gIHJldHVybiBpbXBsZW1lbnRhdGlvbihzZWNvbmRzLCBndWlkZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFRpbWU7XG4iLCJleHBvcnQgY29uc3QgZmFjZVVVSUQgPSAocHJlZml4KSA9PiB7XG4gIHJldHVybiBwcmVmaXggKyAnLScgKyBEYXRlLm5vdygpXG59O1xuIiwiY29uc3QgeyBwZXJmb3JtYW5jZSwgWE1MSHR0cFJlcXVlc3QgfSA9IHdpbmRvdztcblxuY2xhc3MgWGhyTG9hZGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIGlmIChjb25maWcgJiYgY29uZmlnLnhoclNldHVwKSB7XG4gICAgICB0aGlzLnhoclNldHVwID0gY29uZmlnLnhoclNldHVwO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuYWJvcnQoKTtcbiAgICB0aGlzLmxvYWRlciA9IG51bGw7XG4gIH1cblxuICBhYm9ydCAoKSB7XG4gICAgbGV0IGxvYWRlciA9IHRoaXMubG9hZGVyO1xuICAgIGlmIChsb2FkZXIgJiYgbG9hZGVyLnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgIHRoaXMuc3RhdHMuYWJvcnRlZCA9IHRydWU7XG4gICAgICBsb2FkZXIuYWJvcnQoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVxdWVzdFRpbWVvdXQpO1xuICAgIHRoaXMucmVxdWVzdFRpbWVvdXQgPSBudWxsO1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXRyeVRpbWVvdXQpO1xuICAgIHRoaXMucmV0cnlUaW1lb3V0ID0gbnVsbDtcbiAgfVxuXG4gIGxvYWQgKGNvbnRleHQsIGNvbmZpZywgY2FsbGJhY2tzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICB0aGlzLnN0YXRzID0geyB0cmVxdWVzdDogcGVyZm9ybWFuY2Uubm93KCksIHJldHJ5OiAwIH07XG4gICAgdGhpcy5yZXRyeURlbGF5ID0gY29uZmlnLnJldHJ5RGVsYXk7XG4gICAgdGhpcy5sb2FkSW50ZXJuYWwoKTtcbiAgfVxuXG4gIGxvYWRJbnRlcm5hbCAoKSB7XG4gICAgbGV0IHhociwgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICB4aHIgPSB0aGlzLmxvYWRlciA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgbGV0IHN0YXRzID0gdGhpcy5zdGF0cztcbiAgICBzdGF0cy50Zmlyc3QgPSAwO1xuICAgIHN0YXRzLmxvYWRlZCA9IDA7XG4gICAgY29uc3QgeGhyU2V0dXAgPSB0aGlzLnhoclNldHVwO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh4aHJTZXR1cCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHhoclNldHVwKHhociwgY29udGV4dC51cmwpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gZml4IHhoclNldHVwOiAoeGhyLCB1cmwpID0+IHt4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtTGFuZ3VhZ2VcIiwgXCJ0ZXN0XCIpO31cbiAgICAgICAgICAvLyBub3Qgd29ya2luZywgYXMgeGhyLnNldFJlcXVlc3RIZWFkZXIgZXhwZWN0cyB4aHIucmVhZHlTdGF0ZSA9PT0gT1BFTlxuICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBjb250ZXh0LnVybCwgdHJ1ZSk7XG4gICAgICAgICAgeGhyU2V0dXAoeGhyLCBjb250ZXh0LnVybCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgheGhyLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGNvbnRleHQudXJsLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJRTExIHRocm93cyBhbiBleGNlcHRpb24gb24geGhyLm9wZW4gaWYgYXR0ZW1wdGluZyB0byBhY2Nlc3MgYW4gSFRUUCByZXNvdXJjZSBvdmVyIEhUVFBTXG4gICAgICB0aGlzLmNhbGxiYWNrcy5vbkVycm9yKHsgY29kZTogeGhyLnN0YXR1cywgdGV4dDogZS5tZXNzYWdlIH0sIGNvbnRleHQsIHhocik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQucmFuZ2VFbmQpIHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdSYW5nZScsICdieXRlcz0nICsgY29udGV4dC5yYW5nZVN0YXJ0ICsgJy0nICsgKGNvbnRleHQucmFuZ2VFbmQgLSAxKSk7XG4gICAgfVxuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHRoaXMucmVhZHlzdGF0ZWNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHhoci5vbnByb2dyZXNzID0gdGhpcy5sb2FkcHJvZ3Jlc3MuYmluZCh0aGlzKTtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gY29udGV4dC5yZXNwb25zZVR5cGU7XG5cbiAgICAvLyBzZXR1cCB0aW1lb3V0IGJlZm9yZSB3ZSBwZXJmb3JtIHJlcXVlc3RcbiAgICB0aGlzLnJlcXVlc3RUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5sb2FkdGltZW91dC5iaW5kKHRoaXMpLCB0aGlzLmNvbmZpZy50aW1lb3V0KTtcbiAgICB4aHIuc2VuZCgpO1xuICB9XG5cbiAgcmVhZHlzdGF0ZWNoYW5nZSAoZXZlbnQpIHtcbiAgICBsZXQgeGhyID0gZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgIHJlYWR5U3RhdGUgPSB4aHIucmVhZHlTdGF0ZSxcbiAgICAgIHN0YXRzID0gdGhpcy5zdGF0cyxcbiAgICAgIGNvbnRleHQgPSB0aGlzLmNvbnRleHQsXG4gICAgICBjb25maWcgPSB0aGlzLmNvbmZpZztcblxuICAgIC8vIGRvbid0IHByb2NlZWQgaWYgeGhyIGhhcyBiZWVuIGFib3J0ZWRcbiAgICBpZiAoc3RhdHMuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vID49IEhFQURFUlNfUkVDRUlWRURcbiAgICBpZiAocmVhZHlTdGF0ZSA+PSAyKSB7XG4gICAgICAvLyBjbGVhciB4aHIgdGltZW91dCBhbmQgcmVhcm0gaXQgaWYgcmVhZHlTdGF0ZSBsZXNzIHRoYW4gNFxuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJlcXVlc3RUaW1lb3V0KTtcbiAgICAgIGlmIChzdGF0cy50Zmlyc3QgPT09IDApIHtcbiAgICAgICAgc3RhdHMudGZpcnN0ID0gTWF0aC5tYXgocGVyZm9ybWFuY2Uubm93KCksIHN0YXRzLnRyZXF1ZXN0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgbGV0IHN0YXR1cyA9IHhoci5zdGF0dXM7XG4gICAgICAgIC8vIGh0dHAgc3RhdHVzIGJldHdlZW4gMjAwIHRvIDI5OSBhcmUgYWxsIHN1Y2Nlc3NmdWxcbiAgICAgICAgaWYgKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgc3RhdHMudGxvYWQgPSBNYXRoLm1heChzdGF0cy50Zmlyc3QsIHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICAgICAgICBsZXQgZGF0YSwgbGVuO1xuICAgICAgICAgIGlmIChjb250ZXh0LnJlc3BvbnNlVHlwZSA9PT0gJ2FycmF5YnVmZmVyJykge1xuICAgICAgICAgICAgZGF0YSA9IHhoci5yZXNwb25zZTtcbiAgICAgICAgICAgIGxlbiA9IGRhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICBsZW4gPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhdHMubG9hZGVkID0gc3RhdHMudG90YWwgPSBsZW47XG4gICAgICAgICAgbGV0IHJlc3BvbnNlID0geyB1cmw6IHhoci5yZXNwb25zZVVSTCwgZGF0YTogZGF0YSB9O1xuICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uU3VjY2VzcyhyZXNwb25zZSwgc3RhdHMsIGNvbnRleHQsIHhocik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaWYgbWF4IG5iIG9mIHJldHJpZXMgcmVhY2hlZCBvciBpZiBodHRwIHN0YXR1cyBiZXR3ZWVuIDQwMCBhbmQgNDk5IChzdWNoIGVycm9yIGNhbm5vdCBiZSByZWNvdmVyZWQsIHJldHJ5aW5nIGlzIHVzZWxlc3MpLCByZXR1cm4gZXJyb3JcbiAgICAgICAgICBpZiAoc3RhdHMucmV0cnkgPj0gY29uZmlnLm1heFJldHJ5IHx8IChzdGF0dXMgPj0gNDAwICYmIHN0YXR1cyA8IDQ5OSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRXJyb3IoeyBjb2RlOiBzdGF0dXMsIHRleHQ6IHhoci5zdGF0dXNUZXh0IH0sIGNvbnRleHQsIHhocik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFib3J0cyBhbmQgcmVzZXRzIGludGVybmFsIHN0YXRlXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIC8vIHNjaGVkdWxlIHJldHJ5XG4gICAgICAgICAgICB0aGlzLnJldHJ5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMubG9hZEludGVybmFsLmJpbmQodGhpcyksIHRoaXMucmV0cnlEZWxheSk7XG4gICAgICAgICAgICAvLyBzZXQgZXhwb25lbnRpYWwgYmFja29mZlxuICAgICAgICAgICAgdGhpcy5yZXRyeURlbGF5ID0gTWF0aC5taW4oMiAqIHRoaXMucmV0cnlEZWxheSwgY29uZmlnLm1heFJldHJ5RGVsYXkpO1xuICAgICAgICAgICAgc3RhdHMucmV0cnkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJlYWR5U3RhdGUgPj0gMiBBTkQgcmVhZHlTdGF0ZSAhPT00IChyZWFkeVN0YXRlID0gSEVBREVSU19SRUNFSVZFRCB8fCBMT0FESU5HKSByZWFybSB0aW1lb3V0IGFzIHhociBub3QgZmluaXNoZWQgeWV0XG4gICAgICAgIHRoaXMucmVxdWVzdFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmxvYWR0aW1lb3V0LmJpbmQodGhpcyksIGNvbmZpZy50aW1lb3V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsb2FkdGltZW91dCAoKSB7XG4gICAgdGhpcy5jYWxsYmFja3Mub25UaW1lb3V0KHRoaXMuc3RhdHMsIHRoaXMuY29udGV4dCwgbnVsbCk7XG4gIH1cblxuICBsb2FkcHJvZ3Jlc3MgKGV2ZW50KSB7XG4gICAgbGV0IHhociA9IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICBzdGF0cyA9IHRoaXMuc3RhdHM7XG5cbiAgICBzdGF0cy5sb2FkZWQgPSBldmVudC5sb2FkZWQ7XG4gICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgIHN0YXRzLnRvdGFsID0gZXZlbnQudG90YWw7XG4gICAgfVxuXG4gICAgbGV0IG9uUHJvZ3Jlc3MgPSB0aGlzLmNhbGxiYWNrcy5vblByb2dyZXNzO1xuICAgIGlmIChvblByb2dyZXNzKSB7XG4gICAgICAvLyB0aGlyZCBhcmcgaXMgdG8gcHJvdmlkZSBvbiBwcm9ncmVzcyBkYXRhXG4gICAgICBvblByb2dyZXNzKHN0YXRzLCB0aGlzLmNvbnRleHQsIG51bGwsIHhocik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFhockxvYWRlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV92aWRlb19qc19fOyJdLCJzb3VyY2VSb290IjoiIn0=