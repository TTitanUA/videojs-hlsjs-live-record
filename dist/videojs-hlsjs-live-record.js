/*!
 * videojs-hlsjs-live-record
 * Live stream record functionality for VideoJS with hls.js
 * 
 * @version v0.1.0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL0NvbXBvbmVudHMvUmVjU2V0dGluZ3NNb2RhbEhsc0pzLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Db21wb25lbnRzL3JlY1NldHRpbmdzTW9kYWwvQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Db21wb25lbnRzL3JlY1NldHRpbmdzTW9kYWwvUmVhbFRpbWVSZWNvcmRUYWJIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29tcG9uZW50cy9yZWNTZXR0aW5nc01vZGFsL1RhYnNIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29udHJvbGxlcnMvUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Db250cm9sbGVycy9TdG9yYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29udHJvbGxlcnMvVmlld0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL01vZGVscy9GcmFnbWVudC5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vTW9kZWxzL1BsYXlsaXN0LmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9jb21wb25lbnRzL0NhY2hlZEJ1dHRvbkhsc0pzLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9jb21wb25lbnRzL0xpdmVCdXR0b25IbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9Qcm9ncmVzc0NvbnRyb2xIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9SZWNCdXR0b25IbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9SZWNTdGF0dXNCYXJIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9TdG9wQnV0dG9uSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL3BsdWdpbi5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vcGx1Z2luLnNjc3M/YmVlMyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vdXRpbHMvZGF0ZS5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vdXRpbHMvZm9ybWF0LXRpbWUuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL3V0aWxzL3V1aWQuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL3V0aWxzL3hoci1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC9leHRlcm5hbCBcInZpZGVvanNcIiJdLCJuYW1lcyI6WyJWaWRlb0pzTW9kYWxEaWFsb2dDbGFzcyIsInZpZGVvanMiLCJnZXRDb21wb25lbnQiLCJEb20iLCJkb20iLCJkZWZhdWx0T3B0aW9ucyIsIlJlY1NldHRpbmdzTW9kYWxIbHNKcyIsImNvbnN0cnVjdG9yIiwicGxheWVyIiwib3B0aW9ucyIsImNvbnNvbGUiLCJncm91cCIsImxvZyIsImdyb3VwRW5kIiwiYnVpbGRDU1NDbGFzcyIsImNvbnRlbnQiLCJ0YWJzQ29tcG9uZW50IiwiVGFic0hsc0pzIiwicGxheWVyXyIsImVsXyIsInByb3RvdHlwZSIsIm9wdGlvbnNfIiwiT2JqZWN0IiwiYXNzaWduIiwicGF1c2VPbk9wZW4iLCJmaWxsQWx3YXlzIiwidGVtcG9yYXJ5IiwidW5jbG9zZWFibGUiLCJyZWdpc3RlckNvbXBvbmVudCIsIlZpZGVvSnNDb21wb25lbnRDbGFzcyIsIkJhY2tncm91bmRSZWNvcmRUYWJIbHNKcyIsImNyZWF0ZUVsIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiVmlkZW9Kc0J1dHRvbkNsYXNzIiwiVmlkZW9Kc01lbnVDbGFzcyIsIlJlYWxUaW1lUmVjb3JkVGFiSGxzSnMiLCJnZXRRdWFsaXR5TGV2ZWxzIiwiaGxzanMiLCJobHNKU0xpdmVSZWNvcmQiLCJnZXRIbHNKcyIsImxldmVscyIsImN1cnJlbnRMZXZlbCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxhYmVsIiwiaGVpZ2h0IiwidmFsdWUiLCJzZWxlY3RlZCIsInNvcnQiLCJjdXJyZW50IiwibmV4dCIsImVsZW0iLCJhcHBlbmRDaGlsZCIsInJlbmRlckhlYWQiLCJyZW5kZXJRdWFsaXR5U2VsZWN0b3IiLCJyZW5kZXJCdXR0b24iLCJ1dWlkIiwiZmFjZVVVSUQiLCJmb3IiLCJpbm5lclRleHQiLCJxdWFsaXR5U2VsZWN0IiwiaWQiLCJmb3JFYWNoIiwidGV4dCIsImhvbGRlciIsIm9uY2xpY2siLCJoYW5kbGVTdGFydFJlY29yZGluZyIsImJpbmQiLCJzdGFydFJlYWx0aW1lUmVjb3JkIiwidGFic0hvbGRlciIsInJlbmRlck5hdiIsInJlbmRlckJvZHkiLCJuYXZIb2xkZXIiLCJoYW5kbGVDbGljayIsImJvZHlIb2xkZXIiLCJyZWFsdGltZVJlY29yZCIsImVsZW0xIiwiYmFja2dyb3VuZFJlY29yZCIsImVsZW0yIiwiJCQiLCJlbGVtSW5kZXgiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiSGxzIiwid2luZG93IiwiUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyIiwicGx1Z2luIiwicmVzcG9uc2UiLCJzdGF0cyIsImNvbnRleHQiLCJuZXR3b3JrRGV0YWlscyIsImxvYWRlciIsImRlc3Ryb3kiLCJzdG9yYWdlQ29udHJvbGxlciIsInNhdmVGcmFnbWVudCIsImZyYWciLCJkYXRhIiwidGhlbiIsInBsYXlsaXN0IiwiZnJhZ21lbnRTYXZlZCIsInNhdmVQbGF5bGlzdCIsImdyb3VwQ29sbGFwc2VkIiwidG9TdHJpbmciLCJldmVudCIsInJlY29yZFN0YXJ0ZWQiLCJtYW5pZmVzdExpc3RlbmVyIiwibGV2ZWxMaXN0ZW5lciIsImZyYWdtZW50TGlzdGVuZXIiLCJpbml0Iiwib24iLCJFdmVudHMiLCJGUkFHX0xPQURFRCIsImhsc0ZyYWdtZW50TG9hZGVkIiwic3RhcnRSZWNvcmQiLCJzdG9wUmVjb3JkIiwiaW5pdFBsYXlsaXN0IiwibGV2ZWwiLCJYaHJMb2FkZXIiLCJ1cmwiLCJsb2FkZXJDb250ZXh0IiwiYWRkRnJhZ21lbnQiLCJkdXJhdGlvbiIsInJlc3BvbnNlVHlwZSIsInByb2dyZXNzRGF0YSIsImxvYWRlckNvbmZpZyIsInRpbWVvdXQiLCJtYXhSZXRyeSIsInJldHJ5RGVsYXkiLCJtYXhSZXRyeURlbGF5IiwibG9hZGVyQ2FsbGJhY2tzIiwib25TdWNjZXNzIiwiZnJhZ21lbnRMb2FkZWQiLCJsb2FkIiwibGV2ZWxJbmRleCIsIlBsYXlsaXN0TW9kZWwiLCJub3dJbkZvcm1hdFltZEhpcyIsIndpZHRoIiwidGFyZ2V0ZHVyYXRpb24iLCJkZXRhaWxzIiwiREJfVkVSU0lPTiIsIlNUT1JBR0VfV1JJVEVfTU9ERSIsIlNUT1JBR0VfUkVBRF9NT0RFIiwiU3RvcmFnZUNvbnRyb2xsZXIiLCJkYiIsIm9wZW5SZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsInN0b3JhZ2VEYk5hbWUiLCJvbnVwZ3JhZGVuZWVkZWQiLCJyZXN1bHQiLCJjcmVhdGVPYmplY3RTdG9yZSIsInN0b3JhZ2VQbGF5bGlzdHNOYW1lIiwia2V5UGF0aCIsImZyYWdtZW50c1N0b3JhZ2UiLCJzdG9yYWdlRnJhZ21lbnRzTmFtZSIsImNyZWF0ZUluZGV4IiwidW5pcXVlIiwib25zdWNjZXNzIiwiY2hlY2tSZXF1aXJlbWVudHMiLCJmcmFnbWVudCIsInBheWxvYWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRyYW5zYWN0aW9uIiwic3RvcmFnZSIsIm9iamVjdFN0b3JlIiwicmVxdWVzdCIsImFkZCIsIm9uZXJyb3IiLCJwdXQiLCJWaWV3Q29udHJvbGxlciIsImNvbnRyb2xCYXIiLCJnZXRDaGlsZCIsInNwYWNlIiwiYWRkQ2hpbGQiLCJyZW1vdmVEZWZhdWx0Q29udHJvbHMiLCJsaXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjIiwic2VsZWN0b3IiLCJjaGlsZHJlbiIsImZpbHRlciIsImNvbXBvbmVudCIsImhhc0NsYXNzIiwiY2FjaGVkQnV0dG9uQ29tcG9uZW50IiwiY2xpY2tIYW5kbGVyIiwiYWN0aXZlTGl2ZU1vZGUiLCJoaWRlIiwibGl2ZUJ1dHRvbkNvbXBvbmVudCIsImFjdGl2YXRlUHJvZ3Jlc3NNb2RlIiwicmVjQnV0dG9uQ29tcG9uZW50Iiwic2hvd1JlY29yZFNldHRpbmdzIiwic3RvcEJ1dHRvbkNvbXBvbmVudCIsInN0b3BSZWFsdGltZVJlY29yZCIsInJlY1N0YXR1c0JhckNvbXBvbmVudCIsInByb2dyZXNzQ29udHJvbENvbXBvbmVudCIsInJlbW92ZUNoaWxkIiwic2hvd090aGVyQ29udHJvbCIsInNob3dMaXZlQ29udHJvbCIsImhpZGVQcm9ncmVzc0NvbnRyb2wiLCJoaWRlUmVjQ29udHJvbCIsImxpdmVUcmFja2VyIiwic2Vla1RvTGl2ZUVkZ2UiLCJlIiwid2FybiIsIm1lc3NhZ2UiLCJzdGF0ZSIsInJlY29yZEluUHJvY2VzcyIsInNob3dQcm9ncmVzc0NvbnRyb2wiLCJoaWRlTGl2ZUNvbnRyb2wiLCJyZWNTZXR0aW5nc01vZGFsQ29tcG9uZW50IiwiY2xvc2UiLCJoaWRlT3RoZXJDb250cm9sIiwic2hvd1JlY0NvbnRyb2wiLCJ1cGRhdGVSZWNvcmRUaW1lIiwiYSIsInJlY29yZFVwZGF0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzaG93IiwiY2xlYXJJbnRlcnZhbCIsIkZyYWdtZW50TW9kZWwiLCJmcmFnbWVudERhdGEiLCJwbGF5bGlzdElkIiwic3BsaXQiLCJwb3AiLCJzYXZlZCIsImNyZWF0ZVBsYXlsaXN0SGVhZGVyIiwiYWRkUGxheWxpc3RGcmFnbWVudCIsImR1cmFjdGlvbiIsImNyZWF0ZVBsYXlsaXN0Rm9vdGVyIiwicGxheWxpc3REYXRhIiwiZnJhZ21lbnRzIiwicHVzaCIsImpvaW4iLCJDYWNoZWRCdXR0b25IbHNKcyIsInRhZyIsInByb3BzIiwiYXR0cmlidXRlcyIsIm5vbkljb25Db250cm9sIiwiY3JlYXRlQ29udHJvbFRleHRFbCIsImVsIiwiY29udHJvbFRleHRfIiwiY2FsbCIsImFyZ3VtZW50cyIsIkxpdmVCdXR0b25IbHNKcyIsIlZpZGVvSnNQcm9ncmVzc0NvbnRyb2xDb21wb25lbnQiLCJQcm9ncmVzc0NvbnRyb2xIbHNKcyIsIlJlY0J1dHRvbkhsc0pzIiwiUmVjU3RhdHVzQmFySGxzSnMiLCJyZWNvcmRlZEVsXyIsInJlY29yZExlZnRFbF8iLCJ1cGRhdGVSZWNvcmRMZWZ0VGltZSIsInRpbWUiLCJmb3JtYXRUaW1lIiwiZGlzcG9zZSIsIlN0b3BCdXR0b25IbHNKcyIsIlBsdWdpbiIsImdldFBsdWdpbiIsImRlZmF1bHRzIiwiSGxzSlNMaXZlUmVjb3JkUGx1Z2luIiwidmlld0NvbnRyb2xsZXIiLCJyZWFsdGltZVJlY29yZENvbnRyb2xsZXIiLCJ0ZWNoIiwiSVdpbGxVc2VUaGlzSW5QbHVnaW4iLCJzb3VyY2VIYW5kbGVyXyIsImhscyIsInNldFN0YXRlIiwibWVyZ2VPcHRpb25zIiwibGV2ZWxJZCIsImFjdGl2YXRlUmVjb3JkTW9kZSIsImhhbmRsZVN0YXRlQ2hhbmdlZCIsIlZFUlNJT04iLCJkZWZhdWx0U3RhdGUiLCJyZWNvcmRBbGxvd2VkIiwicmVnaXN0ZXJQbHVnaW4iLCJub3JtYWxpemUiLCJudW1iZXIiLCJ0b0Zvcm1hdFltZEhpcyIsImRhdGUiLCJzZXBhcmF0b3IiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJEYXRlIiwiZGVmYXVsdEltcGxlbWVudGF0aW9uIiwic2Vjb25kcyIsImd1aWRlIiwicyIsIk1hdGgiLCJmbG9vciIsIm0iLCJoIiwiZ20iLCJnaCIsImlzTmFOIiwiSW5maW5pdHkiLCJpbXBsZW1lbnRhdGlvbiIsInNldEZvcm1hdFRpbWUiLCJjdXN0b21JbXBsZW1lbnRhdGlvbiIsInJlc2V0Rm9ybWF0VGltZSIsInByZWZpeCIsIm5vdyIsInBlcmZvcm1hbmNlIiwiWE1MSHR0cFJlcXVlc3QiLCJjb25maWciLCJ4aHJTZXR1cCIsImFib3J0IiwicmVhZHlTdGF0ZSIsImFib3J0ZWQiLCJjbGVhclRpbWVvdXQiLCJyZXF1ZXN0VGltZW91dCIsInJldHJ5VGltZW91dCIsImNhbGxiYWNrcyIsInRyZXF1ZXN0IiwicmV0cnkiLCJsb2FkSW50ZXJuYWwiLCJ4aHIiLCJ0Zmlyc3QiLCJsb2FkZWQiLCJvbkVycm9yIiwiY29kZSIsInN0YXR1cyIsInJhbmdlRW5kIiwic2V0UmVxdWVzdEhlYWRlciIsInJhbmdlU3RhcnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeXN0YXRlY2hhbmdlIiwib25wcm9ncmVzcyIsImxvYWRwcm9ncmVzcyIsInNldFRpbWVvdXQiLCJsb2FkdGltZW91dCIsInNlbmQiLCJjdXJyZW50VGFyZ2V0IiwibWF4IiwidGxvYWQiLCJsZW4iLCJieXRlTGVuZ3RoIiwicmVzcG9uc2VUZXh0IiwibGVuZ3RoIiwidG90YWwiLCJyZXNwb25zZVVSTCIsInN0YXR1c1RleHQiLCJtaW4iLCJvblRpbWVvdXQiLCJsZW5ndGhDb21wdXRhYmxlIiwib25Qcm9ncmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLHVCQUF1QixHQUFHQywrQ0FBTyxDQUFDQyxZQUFSLENBQXFCLGFBQXJCLENBQWhDO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRiwrQ0FBTyxDQUFDRyxH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QUFuRDtBQUNEOztBQUVEZ1AsY0FBWSxDQUFFbE8sS0FBRixFQUFTO0FBQ25CLFFBQUlzTixHQUFHLEdBQUd0TixLQUFLLENBQUNzTyxhQUFoQjtBQUFBLFFBQ0VyUCxLQUFLLEdBQUcsS0FBS0EsS0FEZjtBQUdBQSxTQUFLLENBQUN1TyxNQUFOLEdBQWV4TixLQUFLLENBQUN3TixNQUFyQjs7QUFDQSxRQUFJeE4sS0FBSyxDQUFDa1AsZ0JBQVYsRUFBNEI7QUFDMUJqUSxXQUFLLENBQUM0UCxLQUFOLEdBQWM3TyxLQUFLLENBQUM2TyxLQUFwQjtBQUNEOztBQUVELFFBQUlNLFVBQVUsR0FBRyxLQUFLakMsU0FBTCxDQUFlaUMsVUFBaEM7O0FBQ0EsUUFBSUEsVUFBSixFQUFnQjtBQUNkO0FBQ0FBLGdCQUFVLENBQUNsUSxLQUFELEVBQVEsS0FBS0MsT0FBYixFQUFzQixJQUF0QixFQUE0Qm9PLEdBQTVCLENBQVY7QUFDRDtBQUNGOztBQXZKYTs7QUEwSkR4TSx3RUFBZixFOzs7Ozs7Ozs7OztBQzVKQSxzRCIsImZpbGUiOiJ2aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwidmlkZW9qc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmRcIiwgW1widmlkZW9qc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ2aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkXCJdID0gZmFjdG9yeShyZXF1aXJlKFwidmlkZW9qc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1widmlkZW9qcy1obHNqcy1saXZlLXJlY29yZFwiXSA9IGZhY3Rvcnkocm9vdFtcInZpZGVvanNcIl0pO1xufSkoKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKSwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV92aWRlb19qc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wbHVnaW4uanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuaW1wb3J0IFRhYnNIbHNKcyBmcm9tIFwiLi9yZWNTZXR0aW5nc01vZGFsL1RhYnNIbHNKc1wiO1xuXG5jb25zdCBWaWRlb0pzTW9kYWxEaWFsb2dDbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdNb2RhbERpYWxvZycpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5jbGFzcyBSZWNTZXR0aW5nc01vZGFsSGxzSnMgZXh0ZW5kcyBWaWRlb0pzTW9kYWxEaWFsb2dDbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBjb25zb2xlLmdyb3VwKFwiUmVjU2V0dGluZ3NNb2RhbEhsc0pzLmpzOjIwIC0gY29uc3RydWN0b3JcIik7XG4gICAgY29uc29sZS5sb2cocGxheWVyKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGRlZmF1bHQgRE9NIGBjbGFzc05hbWVgLlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqICAgICAgICAgVGhlIERPTSBgY2xhc3NOYW1lYCBmb3IgdGhpcyBvYmplY3QuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIHZlcnNpb24gNS5cbiAgICovXG4gIGJ1aWxkQ1NTQ2xhc3MoKSB7XG4gICAgcmV0dXJuIGB2anMtaGxzanMtbHItcmVjLXNldHRpbmdzICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgbG9jYWxpemVkIGVycm9yIG1lc3NhZ2UgYmFzZWQgb24gdGhlIGBQbGF5ZXJgcyBlcnJvci5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiAgICAgICAgIFRoZSBgUGxheWVyYHMgZXJyb3IgbWVzc2FnZSBsb2NhbGl6ZWQgb3IgYW4gZW1wdHkgc3RyaW5nLlxuICAgKi9cbiAgY29udGVudCgpIHtcbiAgICB0aGlzLnRhYnNDb21wb25lbnQgPSBuZXcgVGFic0hsc0pzKHRoaXMucGxheWVyXywge30pO1xuICAgIHJldHVybiB0aGlzLnRhYnNDb21wb25lbnQuZWxfO1xuICB9XG59XG5cblJlY1NldHRpbmdzTW9kYWxIbHNKcy5wcm90b3R5cGUub3B0aW9uc18gPSBPYmplY3QuYXNzaWduKHt9LCBWaWRlb0pzTW9kYWxEaWFsb2dDbGFzcy5wcm90b3R5cGUub3B0aW9uc18sIHtcbiAgcGF1c2VPbk9wZW46IGZhbHNlLFxuICBmaWxsQWx3YXlzOiBmYWxzZSxcbiAgdGVtcG9yYXJ5OiB0cnVlLFxuICB1bmNsb3NlYWJsZTogZmFsc2Vcbn0pO1xuXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdSZWNTZXR0aW5nc01vZGFsSGxzSnMnLCBSZWNTZXR0aW5nc01vZGFsSGxzSnMpO1xuZXhwb3J0IGRlZmF1bHQgUmVjU2V0dGluZ3NNb2RhbEhsc0pzO1xuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzQ29tcG9uZW50Q2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmNsYXNzIEJhY2tncm91bmRSZWNvcmRUYWJIbHNKcyBleHRlbmRzIFZpZGVvSnNDb21wb25lbnRDbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBjb25zb2xlLmdyb3VwKFwiQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzLmpzOjIwIC0gY29uc3RydWN0b3JcIik7XG4gICAgY29uc29sZS5sb2cocGxheWVyKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKCkge1xuICAgIHJldHVybiBzdXBlci5jcmVhdGVFbChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdGFiLWJhY2tncm91bmQtcmVjb3JkJyxcbiAgICAgICAgaW5uZXJIVE1MOiAnPHA+dmpzLWhsc2pzLXRhYi1iYWNrZ3JvdW5kLXJlY29yZDwvcD4nXG4gICAgICB9LFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzO1xuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuaW1wb3J0IHtmYWNlVVVJRH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V1aWRcIjtcblxuY29uc3QgVmlkZW9Kc0NvbXBvbmVudENsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuY29uc3QgVmlkZW9Kc0J1dHRvbkNsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ01lbnVCdXR0b24nKTtcbmNvbnN0IFZpZGVvSnNNZW51Q2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTWVudScpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5jbGFzcyBSZWFsVGltZVJlY29yZFRhYkhsc0pzIGV4dGVuZHMgVmlkZW9Kc0NvbXBvbmVudENsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gIH1cblxuICBnZXRRdWFsaXR5TGV2ZWxzKCkge1xuICAgIGNvbnN0IGhsc2pzID0gdGhpcy5wbGF5ZXIoKS5obHNKU0xpdmVSZWNvcmQoKS5nZXRIbHNKcygpO1xuICAgIGNvbnN0IGxldmVscyA9IGhsc2pzLmxldmVscyB8fCBbXTtcbiAgICBjb25zdCBjdXJyZW50TGV2ZWwgPSBobHNqcy5jdXJyZW50TGV2ZWwgfHwgMDtcbiAgICByZXR1cm4gbGV2ZWxzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IGl0ZW0uaGVpZ2h0ICsgJ3AnLFxuICAgICAgICB2YWx1ZTogaW5kZXgsXG4gICAgICAgIHNlbGVjdGVkOiBpbmRleCA9PT0gY3VycmVudExldmVsLFxuICAgICAgfVxuICAgICkpLnNvcnQoKGN1cnJlbnQsIG5leHQpID0+IHtcbiAgICAgIGlmICgodHlwZW9mIGN1cnJlbnQgIT09ICdvYmplY3QnKSB8fCAodHlwZW9mIG5leHQgIT09ICdvYmplY3QnKSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudC52YWx1ZSA8IG5leHQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQudmFsdWUgPiBuZXh0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVFbCgpIHtcbiAgICBjb25zdCBlbGVtID0gc3VwZXIuY3JlYXRlRWwoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXRhYi1yZWFsdGltZS1yZWNvcmQnLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckhlYWQoKSk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclF1YWxpdHlTZWxlY3RvcigpKTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyQnV0dG9uKCkpO1xuXG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICByZW5kZXJIZWFkKCkge1xuICAgIHJldHVybiBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGlubmVySFRNTDogXCI8cD5SZWFsLXRpbWUgcmVjb3JkaW5nIGFsbG93cyB5b3UgdG8gcmVjb3JkIGEgZnJhZ21lbnQgb2YgdGhlIHByb2dyYW0geW91IGFyZSB3YXRjaGluZy4gXCIgK1xuICAgICAgICBcIlJlY29yZGluZyB3aWxsIGJlIGRvbmUgdW50aWwgdGhlIHJlY29yZGluZyBzdG9wcywgdGhlIHJlY29yZGluZyB0aW1lIGxpbWl0IGlzIGV4Y2VlZGVkIG9yIHRoZSB0YWIgaXMgY2xvc2VkLlwiICtcbiAgICAgICAgXCJUbyBzdGFydCByZWNvcmRpbmcsIHNlbGVjdCB5b3VyIHByZWZlcnJlZCBxdWFsaXR5IGFuZCBjbGljayA8c3Ryb25nPlxcXCJzdGFydCByZWNvcmRpbmdcXFwiPC9zdHJvbmc+LjwvcD5cIiArXG4gICAgICAgIFwiPHA+WW91ciBjdXJyZW50IHJlY29yZGluZyB0aW1lIGxpbWl0IGlzIDYwIG1pbi48L3A+XCJcbiAgICB9KVxuICB9XG5cblxuICByZW5kZXJRdWFsaXR5U2VsZWN0b3IoKSB7XG4gICAgY29uc3QgZWxlbSA9IERvbS5jcmVhdGVFbChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdGFiLXF1YWxpdHktc2VsZWN0IHZqcy1obHNqcy1mb3JtLWdyb3VwJyxcbiAgICAgIH0sXG4gICAgKTtcbiAgICBjb25zdCB1dWlkID0gZmFjZVVVSUQoJ3Zqcy1obHMtcXVhbGl0eS1zZWxlY3QnKTtcblxuICAgIGVsZW0uYXBwZW5kQ2hpbGQoXG4gICAgICBEb20uY3JlYXRlRWwoJ2xhYmVsJywge1xuICAgICAgICBmb3I6IHV1aWQsXG4gICAgICAgIGlubmVyVGV4dDogJ1F1YWxpdHknLFxuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtZm9ybS1sYWJlbCdcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMucXVhbGl0eVNlbGVjdCA9IERvbS5jcmVhdGVFbCgnc2VsZWN0Jywge1xuICAgICAgaWQ6IHV1aWQsXG4gICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtZm9ybS1pbnB1dCdcbiAgICB9KTtcblxuICAgIGNvbnN0IGxldmVscyA9IHRoaXMuZ2V0UXVhbGl0eUxldmVscygpO1xuXG4gICAgbGV2ZWxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMucXVhbGl0eVNlbGVjdC5hcHBlbmRDaGlsZChcbiAgICAgICAgRG9tLmNyZWF0ZUVsKCdvcHRpb24nLCB7XG4gICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgdGV4dDogaXRlbS5sYWJlbCxcbiAgICAgICAgICBzZWxlY3RlZDogaXRlbS5zZWxlY3RlZFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGlmKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5xdWFsaXR5U2VsZWN0LnZhbHVlID0gaXRlbS52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5xdWFsaXR5U2VsZWN0KTtcblxuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgcmVuZGVyQnV0dG9uKCkge1xuICAgIGNvbnN0IGhvbGRlciA9IERvbS5jcmVhdGVFbChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtZm9ybS1ncm91cCcsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGhvbGRlci5hcHBlbmRDaGlsZChEb20uY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1idXR0b24gdmpzLWhsc2pzLXN0YXJ0LXJlY29yZCcsXG4gICAgICBpbm5lclRleHQ6ICdTdGFydCBSZWNvcmRpbmcnLFxuICAgICAgb25jbGljazogdGhpcy5oYW5kbGVTdGFydFJlY29yZGluZy5iaW5kKHRoaXMpXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIGhvbGRlcjtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0UmVjb3JkaW5nKCkge1xuICAgIHRoaXMucGxheWVyKCkuaGxzSlNMaXZlUmVjb3JkKCkuc3RhcnRSZWFsdGltZVJlY29yZCh0aGlzLnF1YWxpdHlTZWxlY3QudmFsdWUpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhbFRpbWVSZWNvcmRUYWJIbHNKcztcbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcbmltcG9ydCBSZWFsVGltZVJlY29yZFRhYkhsc0pzIGZyb20gXCIuL1JlYWxUaW1lUmVjb3JkVGFiSGxzSnNcIjtcbmltcG9ydCBCYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnMgZnJvbSBcIi4vQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzXCI7XG5cbmNvbnN0IFZpZGVvSnNDb21wb25lbnRDbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuY2xhc3MgVGFic0hsc0pzIGV4dGVuZHMgVmlkZW9Kc0NvbXBvbmVudENsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIGNvbnNvbGUuZ3JvdXAoXCJUYWJzSGxzSnMuanM6MjAgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlRWwoKSB7XG4gICAgY29uc3QgdGFic0hvbGRlciA9IHN1cGVyLmNyZWF0ZUVsKFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzJyxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIHRhYnNIb2xkZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJOYXYoKSk7XG5cbiAgICB0YWJzSG9sZGVyLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyQm9keSgpKTtcblxuICAgIHJldHVybiB0YWJzSG9sZGVyO1xuICB9XG5cblxuICByZW5kZXJOYXYoKSB7XG4gICAgY29uc3QgbmF2SG9sZGVyID0gRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYnXG4gICAgfSk7XG4gICAgY29uc29sZS5ncm91cChcIlRhYnNIbHNKcy5qczo2NiAtIHJlbmRlck5hdlwiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgbmF2SG9sZGVyLmFwcGVuZENoaWxkKFxuICAgICAgRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLW5hdi1lbGVtIGFjdGl2ZScsXG4gICAgICAgIGlubmVySFRNTDogJ1JlYWx0aW1lJyxcbiAgICAgICAgb25jbGljazogKCkgPT4ge3RoaXMuaGFuZGxlQ2xpY2soMCl9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBuYXZIb2xkZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2LWVsZW0nLFxuICAgICAgICBpbm5lckhUTUw6ICdCYWNrZ3JvdW5kJyxcbiAgICAgICAgb25jbGljazogKCkgPT4ge3RoaXMuaGFuZGxlQ2xpY2soMSl9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICByZXR1cm4gbmF2SG9sZGVyO1xuICB9XG5cbiAgcmVuZGVyQm9keSgpIHtcbiAgICBjb25zdCBib2R5SG9sZGVyID0gRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdmVydGljYWwtdGFicy1ib2R5J1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWFsdGltZVJlY29yZCA9IG5ldyBSZWFsVGltZVJlY29yZFRhYkhsc0pzKHRoaXMucGxheWVyXywge30pO1xuICAgIGNvbnN0IGVsZW0xID0gRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdmVydGljYWwtdGFicy1lbGVtIGFjdGl2ZSdcbiAgICB9KTtcbiAgICBlbGVtMS5hcHBlbmRDaGlsZCh0aGlzLnJlYWx0aW1lUmVjb3JkLmVsXyk7XG4gICAgYm9keUhvbGRlci5hcHBlbmRDaGlsZChlbGVtMSk7XG5cbiAgICB0aGlzLmJhY2tncm91bmRSZWNvcmQgPSBuZXcgQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzKHRoaXMucGxheWVyXywge30pO1xuICAgIGNvbnN0IGVsZW0yID0gRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdmVydGljYWwtdGFicy1lbGVtJ1xuICAgIH0pO1xuICAgIGVsZW0yLmFwcGVuZENoaWxkKHRoaXMuYmFja2dyb3VuZFJlY29yZC5lbF8pO1xuICAgIGJvZHlIb2xkZXIuYXBwZW5kQ2hpbGQoZWxlbTIpO1xuXG4gICAgcmV0dXJuIGJvZHlIb2xkZXI7XG4gIH1cblxuICBoYW5kbGVDbGljayhpbmRleCkge1xuICAgIHRoaXMuJCQoJy52anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYtZWxlbScpLmZvckVhY2goKGVsZW0sIGVsZW1JbmRleCkgPT4ge1xuICAgICAgaWYoaW5kZXggPT09IGVsZW1JbmRleCkge1xuICAgICAgICBEb20uYWRkQ2xhc3MoZWxlbSwgJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRG9tLnJlbW92ZUNsYXNzKGVsZW0sICdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLiQkKCcudmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtZWxlbScpLmZvckVhY2goKGVsZW0sIGVsZW1JbmRleCkgPT4ge1xuICAgICAgaWYoaW5kZXggPT09IGVsZW1JbmRleCkge1xuICAgICAgICBEb20uYWRkQ2xhc3MoZWxlbSwgJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRG9tLnJlbW92ZUNsYXNzKGVsZW0sICdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFic0hsc0pzO1xuIiwiaW1wb3J0IHtQbGF5bGlzdE1vZGVsfSBmcm9tIFwiLi4vTW9kZWxzL1BsYXlsaXN0XCI7XG5pbXBvcnQge25vd0luRm9ybWF0WW1kSGlzfSBmcm9tIFwiLi4vdXRpbHMvZGF0ZVwiO1xuaW1wb3J0IFhockxvYWRlciBmcm9tIFwiLi4vdXRpbHMveGhyLWxvYWRlclwiO1xuXG5jb25zdCBIbHMgPSB3aW5kb3cuSGxzO1xuXG5jbGFzcyBSZWFsdGltZVJlY29yZENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihwbHVnaW4pIHtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLm1hbmlmZXN0TGlzdGVuZXIgPSBudWxsO1xuICAgIHRoaXMubGV2ZWxMaXN0ZW5lciA9IG51bGw7XG4gICAgdGhpcy5mcmFnbWVudExpc3RlbmVyID0gbnVsbDtcbiAgICB0aGlzLnJlY29yZFN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMucGxheWxpc3QgPSBudWxsO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBobHNqcyA9IHRoaXMucGx1Z2luLmdldEhsc0pzKCk7XG4gICAgLy8gdGhpcy5tYW5pZmVzdExpc3RlbmVyID0gaGxzanMub24oSGxzLkV2ZW50cy5NQU5JRkVTVF9MT0FERUQsIHRoaXMuaGxzTWFuaWZlc3RMb2FkZWQpO1xuICAgIC8vIHRoaXMubGV2ZWxMaXN0ZW5lciA9IGhsc2pzLm9uKEhscy5FdmVudHMuTEVWRUxfTE9BREVELCB0aGlzLmhsc0xldmVsTG9hZGVkKTtcbiAgICB0aGlzLmZyYWdtZW50TGlzdGVuZXIgPSBobHNqcy5vbihIbHMuRXZlbnRzLkZSQUdfTE9BREVELCB0aGlzLmhsc0ZyYWdtZW50TG9hZGVkKTtcbiAgfVxuXG4gIHN0YXJ0UmVjb3JkKCkge1xuICAgIHRoaXMucGxheWxpc3QgPSBudWxsO1xuICAgIHRoaXMucmVjb3JkU3RhcnRlZCA9IHRydWU7XG4gIH1cblxuICBzdG9wUmVjb3JkKCkge1xuICAgIHRoaXMucmVjb3JkU3RhcnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gaGxzTWFuaWZlc3RMb2FkZWQgPSAoZXZlbnQsIGRhdGEpID0+IHtcbiAgLy8gICBjb25zb2xlLmdyb3VwKFwiUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyLmpzOjI1IC0gaGxzTWFuaWZlc3RMb2FkZWRcIik7XG4gIC8vICAgY29uc29sZS5sb2coZGF0YSk7XG4gIC8vICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAvLyB9O1xuICAvL1xuICAvL1xuICAvLyBobHNMZXZlbExvYWRlZCA9IChldmVudCwgZGF0YSkgPT4ge1xuICAvLyAgIGNvbnNvbGUuZ3JvdXAoXCJSZWFsdGltZVJlY29yZENvbnRyb2xsZXIuanM6MjUgLSBobHNMZXZlbExvYWRlZFwiKTtcbiAgLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gIC8vIH07XG5cbiAgc2F2ZUZyYWdtZW50KGZyYWcpIHtcbiAgICBpZih0aGlzLnBsYXlsaXN0ID09PSBudWxsKSB7XG4gICAgICB0aGlzLmluaXRQbGF5bGlzdChmcmFnLmxldmVsKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnBsYXlsaXN0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZGVyID0gbmV3IFhockxvYWRlcigpO1xuICAgIGNvbnN0IHVybCA9IGZyYWcudXJsO1xuICAgIGNvbnN0IGxvYWRlckNvbnRleHQgPSB7XG4gICAgICB1cmwsXG4gICAgICBmcmFnOiB0aGlzLnBsYXlsaXN0LmFkZEZyYWdtZW50KGZyYWcuZHVyYXRpb24sIHVybCksXG4gICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXG4gICAgICBwcm9ncmVzc0RhdGE6IGZhbHNlLFxuICAgICAgbG9hZGVyXG4gICAgfTtcbiAgICBjb25zdCBsb2FkZXJDb25maWcgPSB7XG4gICAgICB0aW1lb3V0OiA2MCxcbiAgICAgIG1heFJldHJ5OiAwLFxuICAgICAgcmV0cnlEZWxheTogMCxcbiAgICAgIG1heFJldHJ5RGVsYXk6IDNcbiAgICB9O1xuXG4gICAgY29uc3QgbG9hZGVyQ2FsbGJhY2tzID0ge1xuICAgICAgb25TdWNjZXNzOiB0aGlzLmZyYWdtZW50TG9hZGVkLFxuICAgICAgLy8gb25FcnJvcjogdGhpcy5sb2FkZXJyb3IuYmluZCh0aGlzKSxcbiAgICAgIC8vIG9uVGltZW91dDogdGhpcy5sb2FkdGltZW91dC5iaW5kKHRoaXMpLFxuICAgICAgLy8gb25Qcm9ncmVzczogdGhpcy5sb2FkcHJvZ3Jlc3MuYmluZCh0aGlzKVxuICAgIH07XG4gICAgbG9hZGVyLmxvYWQobG9hZGVyQ29udGV4dCwgbG9hZGVyQ29uZmlnLCBsb2FkZXJDYWxsYmFja3MpO1xuICB9XG5cbiAgaW5pdFBsYXlsaXN0KGxldmVsSW5kZXgpIHtcbiAgICBjb25zdCBobHNqcyA9IHRoaXMucGx1Z2luLmdldEhsc0pzKCk7XG4gICAgY29uc3QgbGV2ZWwgPSBobHNqcy5sZXZlbHNbbGV2ZWxJbmRleF07XG4gICAgaWYoIWxldmVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wbGF5bGlzdCA9IG5ldyBQbGF5bGlzdE1vZGVsKHtcbiAgICAgIGlkOiAncmVjb3JkLScgKyBub3dJbkZvcm1hdFltZEhpcygpLFxuICAgICAgd2lkdGg6IGxldmVsLndpZHRoLFxuICAgICAgaGVpZ2h0OiBsZXZlbC5oZWlnaHQsXG4gICAgICB0YXJnZXRkdXJhdGlvbjogbGV2ZWwuZGV0YWlscy50YXJnZXRkdXJhdGlvblxuICAgIH0pO1xuICB9XG5cbiAgZnJhZ21lbnRMb2FkZWQgPSAocmVzcG9uc2UsIHN0YXRzLCBjb250ZXh0LCBuZXR3b3JrRGV0YWlscyA9IG51bGwpID0+IHtcbiAgICBjb250ZXh0LmxvYWRlci5kZXN0cm95KCk7XG4gICAgY29udGV4dC5sb2FkZXIgPSBudWxsO1xuXG4gICAgdGhpcy5wbHVnaW4uc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUZyYWdtZW50KGNvbnRleHQuZnJhZywgcmVzcG9uc2UuZGF0YSwgc3RhdHMpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5wbGF5bGlzdC5mcmFnbWVudFNhdmVkKGNvbnRleHQuZnJhZyk7XG4gICAgICB0aGlzLnBsdWdpbi5zdG9yYWdlQ29udHJvbGxlci5zYXZlUGxheWxpc3QodGhpcy5wbGF5bGlzdCk7XG4gICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKFwiUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyLmpzOjEwNCAtIFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWxpc3QudG9TdHJpbmcoKSk7XG4gICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgaGxzRnJhZ21lbnRMb2FkZWQgPSAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICBpZih0aGlzLnJlY29yZFN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMuc2F2ZUZyYWdtZW50KGRhdGEuZnJhZyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFsdGltZVJlY29yZENvbnRyb2xsZXI7XG4iLCJjb25zdCBEQl9WRVJTSU9OID0gMTtcbmNvbnN0IFNUT1JBR0VfV1JJVEVfTU9ERSA9ICdyZWFkd3JpdGUnO1xuY29uc3QgU1RPUkFHRV9SRUFEX01PREUgPSAncmVhZG9ubHknO1xuXG5jbGFzcyBTdG9yYWdlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHBsdWdpbikge1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMuZGIgPSBudWxsO1xuICB9XG5cblxuICBpbml0KCkge1xuICAgIGNvbnN0IG9wZW5SZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4odGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlRGJOYW1lLCBEQl9WRVJTSU9OKTtcbiAgICBvcGVuUmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRiID0gb3BlblJlcXVlc3QucmVzdWx0O1xuICAgICAgdGhpcy5kYi5jcmVhdGVPYmplY3RTdG9yZSh0aGlzLnBsdWdpbi5vcHRpb25zLnN0b3JhZ2VQbGF5bGlzdHNOYW1lLCB7a2V5UGF0aDogJ2lkJ30pO1xuXG4gICAgICBjb25zdCBmcmFnbWVudHNTdG9yYWdlID0gdGhpcy5kYi5jcmVhdGVPYmplY3RTdG9yZSh0aGlzLnBsdWdpbi5vcHRpb25zLnN0b3JhZ2VGcmFnbWVudHNOYW1lLCB7a2V5UGF0aDogJ3V1aWQnfSk7XG4gICAgICBmcmFnbWVudHNTdG9yYWdlLmNyZWF0ZUluZGV4KCdwbGF5bGlzdElkJywgJ3BsYXlsaXN0SWQnLCB7dW5pcXVlOiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICBvcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRiID0gb3BlblJlcXVlc3QucmVzdWx0O1xuICAgIH07XG4gIH1cblxuICBjaGVja1JlcXVpcmVtZW50cygpIHtcbiAgICByZXR1cm4gJ2luZGV4ZWREQicgaW4gd2luZG93O1xuICB9XG5cbiAgLy9UT0RPOiBuZWVkIHRvIGFkZCBlcnJvciBwcm9jZXNzaW5nXG4gIHNhdmVGcmFnbWVudChmcmFnbWVudCwgcGF5bG9hZCwgc3RhdHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmKHRoaXMuZGIgPT09IG51bGwpIHtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0aGlzLmRiLnRyYW5zYWN0aW9uKHRoaXMucGx1Z2luLm9wdGlvbnMuc3RvcmFnZUZyYWdtZW50c05hbWUsIFNUT1JBR0VfV1JJVEVfTU9ERSk7XG4gICAgICBjb25zdCBzdG9yYWdlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlRnJhZ21lbnRzTmFtZSk7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gc3RvcmFnZS5hZGQoe1xuICAgICAgICAuLi5mcmFnbWVudCxcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgc3RhdHNcbiAgICAgIH0pO1xuXG4gICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwKFwiY2FjaGUtZHJpdmVyLmpzOjE3IC0gc3RvcmUgLSBvbnN1Y2Nlc3NcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3QpO1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICB9O1xuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXAoXCJjYWNoZS1kcml2ZXIuanM6MTcgLSBzdG9yZSAtIG9uZXJyb3JcIik7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybihyZXF1ZXN0KTtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgfTtcbiAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvL1RPRE86IG5lZWQgdG8gYWRkIGVycm9yIHByb2Nlc3NpbmdcbiAgc2F2ZVBsYXlsaXN0KHBsYXlsaXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZih0aGlzLmRiID09PSBudWxsKSB7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdGhpcy5kYi50cmFuc2FjdGlvbih0aGlzLnBsdWdpbi5vcHRpb25zLnN0b3JhZ2VQbGF5bGlzdHNOYW1lLCBTVE9SQUdFX1dSSVRFX01PREUpO1xuICAgICAgY29uc3Qgc3RvcmFnZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXMucGx1Z2luLm9wdGlvbnMuc3RvcmFnZVBsYXlsaXN0c05hbWUpO1xuICAgICAgY29uc3QgcmVxdWVzdCA9IHN0b3JhZ2UucHV0KHBsYXlsaXN0KTtcblxuICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cChcImNhY2hlLWRyaXZlci5qczoxNyAtIHN0b3JlIC0gb25zdWNjZXNzXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0KTtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgfTtcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwKFwiY2FjaGUtZHJpdmVyLmpzOjE3IC0gc3RvcmUgLSBvbmVycm9yXCIpO1xuICAgICAgICAvLyBjb25zb2xlLndhcm4ocmVxdWVzdCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgIH07XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0pO1xuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlQ29udHJvbGxlcjtcbiIsImltcG9ydCBSZWNTZXR0aW5nc01vZGFsSGxzSnMgZnJvbSBcIi4uL0NvbXBvbmVudHMvUmVjU2V0dGluZ3NNb2RhbEhsc0pzXCI7XG5cbmNsYXNzIFZpZXdDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocGx1Z2luKSB7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG5cbiAgICB0aGlzLnJlY0J1dHRvbkNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5zdG9wQnV0dG9uQ29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5wcm9ncmVzc0NvbnRyb2xDb21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMubGl2ZUJ1dHRvbkNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5jYWNoZWRCdXR0b25Db21wb25lbnQgPSBudWxsO1xuXG5cbiAgICB0aGlzLnJlY1NldHRpbmdzTW9kYWxDb21wb25lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5saXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjID0gW107XG4gIH1cblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRyb2xCYXIgPSB0aGlzLnBsdWdpbi5wbGF5ZXIuZ2V0Q2hpbGQoJ0NvbnRyb2xCYXInKTtcbiAgICBjb25zdCBzcGFjZSA9IGNvbnRyb2xCYXIuYWRkQ2hpbGQoJ0NvbXBvbmVudCcsIHt9LCAyKTtcbiAgICBzcGFjZS5hZGRDbGFzcygndmpzLWhsc2pzLWNvbnRyb2xzLWhvbGRlcicpO1xuXG4gICAgdGhpcy5yZW1vdmVEZWZhdWx0Q29udHJvbHMoKTtcblxuICAgIHRoaXMubGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYyA9IHRoaXMucGx1Z2luLm9wdGlvbnMubGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYy5tYXAoKHNlbGVjdG9yKSA9PiB7XG4gICAgICByZXR1cm4gY29udHJvbEJhci5jaGlsZHJlbigpLmZpbHRlcihjb21wb25lbnQgPT4gY29tcG9uZW50Lmhhc0NsYXNzKHNlbGVjdG9yKSlbMF07XG4gICAgfSkuZmlsdGVyKGNvbXBvbmVudCA9PiAhIWNvbXBvbmVudCk7XG5cbiAgICB0aGlzLmNhY2hlZEJ1dHRvbkNvbXBvbmVudCA9IHNwYWNlLmFkZENoaWxkKCdDYWNoZWRCdXR0b25IbHNKcycsIHtcbiAgICAgIGNsaWNrSGFuZGxlcjogdGhpcy5hY3RpdmVMaXZlTW9kZVxuICAgIH0sIDEpO1xuICAgIHRoaXMuY2FjaGVkQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcblxuICAgIHRoaXMubGl2ZUJ1dHRvbkNvbXBvbmVudCA9IGNvbnRyb2xCYXIuYWRkQ2hpbGQoJ0xpdmVCdXR0b25IbHNKcycsIHtcbiAgICAgIGNsaWNrSGFuZGxlcjogdGhpcy5hY3RpdmF0ZVByb2dyZXNzTW9kZVxuICAgIH0sIDIpO1xuICAgIHRoaXMubGl2ZUJ1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG5cbiAgICB0aGlzLnJlY0J1dHRvbkNvbXBvbmVudCA9IHNwYWNlLmFkZENoaWxkKCdSZWNCdXR0b25IbHNKcycsIHtcbiAgICAgIGNsaWNrSGFuZGxlcjogdGhpcy5zaG93UmVjb3JkU2V0dGluZ3NcbiAgICB9LCAxKTtcbiAgICB0aGlzLnJlY0J1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG5cbiAgICB0aGlzLnN0b3BCdXR0b25Db21wb25lbnQgPSBjb250cm9sQmFyLmFkZENoaWxkKCdTdG9wQnV0dG9uSGxzSnMnLCB7XG4gICAgICBjbGlja0hhbmRsZXI6IHRoaXMucGx1Z2luLnN0b3BSZWFsdGltZVJlY29yZFxuICAgIH0sIDEpO1xuICAgIHRoaXMuc3RvcEJ1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG5cbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudCA9IHNwYWNlLmFkZENoaWxkKCdSZWNTdGF0dXNCYXJIbHNKcycsIDEpO1xuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50LmhpZGUoKTtcblxuICAgIHRoaXMucHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50ID0gc3BhY2UuYWRkQ2hpbGQoJ1Byb2dyZXNzQ29udHJvbEhsc0pzJywge30sIDIpO1xuICAgIHRoaXMucHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50LmhpZGUoKTtcblxuICAgIHRoaXMuYWN0aXZlTGl2ZU1vZGUoKTtcbiAgfTtcblxuICByZW1vdmVEZWZhdWx0Q29udHJvbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udHJvbEJhciA9IHRoaXMucGx1Z2luLnBsYXllci5nZXRDaGlsZCgnQ29udHJvbEJhcicpO1xuICAgIGNvbnRyb2xCYXIucmVtb3ZlQ2hpbGQoJ1Byb2dyZXNzQ29udHJvbCcpO1xuICAgIGNvbnRyb2xCYXIucmVtb3ZlQ2hpbGQoJ1NlZWtUb0xpdmUnKTtcbiAgICBjb250cm9sQmFyLnJlbW92ZUNoaWxkKCdMaXZlRGlzcGxheScpO1xuICB9O1xuXG4gIGFjdGl2ZUxpdmVNb2RlID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnNob3dPdGhlckNvbnRyb2woKTtcbiAgICAgIHRoaXMuc2hvd0xpdmVDb250cm9sKCk7XG4gICAgICB0aGlzLmhpZGVQcm9ncmVzc0NvbnRyb2woKTtcbiAgICAgIHRoaXMuaGlkZVJlY0NvbnRyb2woKTtcbiAgICAgIHRoaXMucGx1Z2luLnBsYXllci5saXZlVHJhY2tlci5zZWVrVG9MaXZlRWRnZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMucGx1Z2luLnBsYXllci5sb2cud2FybihlLm1lc3NhZ2UpXG4gICAgfVxuICB9O1xuXG4gIGFjdGl2YXRlUHJvZ3Jlc3NNb2RlID0gKCkgPT4ge1xuICAgIGlmKHRoaXMucGx1Z2luLnN0YXRlLnJlY29yZEluUHJvY2Vzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNob3dPdGhlckNvbnRyb2woKTtcbiAgICB0aGlzLnNob3dQcm9ncmVzc0NvbnRyb2woKTtcbiAgICB0aGlzLmhpZGVMaXZlQ29udHJvbCgpO1xuICAgIHRoaXMuaGlkZVJlY0NvbnRyb2woKTtcbiAgfTtcblxuICBzaG93UmVjb3JkU2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgdGhpcy5yZWNTZXR0aW5nc01vZGFsQ29tcG9uZW50ID0gbmV3IFJlY1NldHRpbmdzTW9kYWxIbHNKcyh0aGlzLnBsdWdpbi5wbGF5ZXIsIHtcblxuICAgIH0pO1xuICAgIHRoaXMucGx1Z2luLnBsYXllci5hZGRDaGlsZCh0aGlzLnJlY1NldHRpbmdzTW9kYWxDb21wb25lbnQpO1xuICAgIHRoaXMucmVjU2V0dGluZ3NNb2RhbENvbXBvbmVudC5vcGVuKCk7XG5cblxuICAgIGNvbnNvbGUuZ3JvdXAoXCJwbHVnaW4uanM6MTA4IC0gc2hvd1JlY29yZFNldHRpbmdzXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAvLyB0aGlzLmFjdGl2YXRlUmVjb3JkTW9kZSgpO1xuICB9O1xuXG4gIGFjdGl2YXRlUmVjb3JkTW9kZSA9ICgpID0+IHtcbiAgICB0aGlzLnJlY1NldHRpbmdzTW9kYWxDb21wb25lbnQuY2xvc2UoKTtcbiAgICB0aGlzLmhpZGVQcm9ncmVzc0NvbnRyb2woKTtcbiAgICB0aGlzLmhpZGVMaXZlQ29udHJvbCgpO1xuICAgIHRoaXMuaGlkZU90aGVyQ29udHJvbCgpO1xuICAgIHRoaXMuc2hvd1JlY0NvbnRyb2woKTtcbiAgfTtcblxuICBzaG93UmVjQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLnBsdWdpbi5wbGF5ZXIuYWRkQ2xhc3MoJ3Zqcy1obHNqcy1yZWNvcmQtc3RhcnRlZCcpO1xuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50LnVwZGF0ZVJlY29yZFRpbWUoMCk7XG4gICAgbGV0IGEgPSAxO1xuICAgIHRoaXMucmVjb3JkVXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudC51cGRhdGVSZWNvcmRUaW1lKGErKyk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICB0aGlzLnN0b3BCdXR0b25Db21wb25lbnQuc2hvdygpO1xuICAgIHRoaXMucmVjU3RhdHVzQmFyQ29tcG9uZW50LnNob3coKTtcbiAgfTtcblxuICBoaWRlUmVjQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLnBsdWdpbi5wbGF5ZXIucmVtb3ZlQ2xhc3MoJ3Zqcy1obHNqcy1yZWNvcmQtc3RhcnRlZCcpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yZWNvcmRVcGRhdGVJbnRlcnZhbCk7XG4gICAgdGhpcy5zdG9wQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudC5oaWRlKCk7XG4gIH07XG5cbiAgc2hvd1Byb2dyZXNzQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLnByb2dyZXNzQ29udHJvbENvbXBvbmVudC5zaG93KCk7XG4gICAgdGhpcy5jYWNoZWRCdXR0b25Db21wb25lbnQuc2hvdygpO1xuICB9O1xuXG4gIGhpZGVQcm9ncmVzc0NvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9ncmVzc0NvbnRyb2xDb21wb25lbnQuaGlkZSgpO1xuICAgIHRoaXMuY2FjaGVkQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcbiAgfTtcblxuICBoaWRlT3RoZXJDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMubGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQuYWRkQ2xhc3MoJ3Zqcy1obHNqcy1sci1oaWRkZW4nKSk7XG4gIH07XG5cbiAgc2hvd090aGVyQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLmxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50LnJlbW92ZUNsYXNzKCd2anMtaGxzanMtbHItaGlkZGVuJykpO1xuICB9O1xuXG5cbiAgc2hvd0xpdmVDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMubGl2ZUJ1dHRvbkNvbXBvbmVudC5zaG93KCk7XG4gICAgdGhpcy5yZWNCdXR0b25Db21wb25lbnQuc2hvdygpO1xuICB9O1xuXG4gIGhpZGVMaXZlQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLmxpdmVCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuICAgIHRoaXMucmVjQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcbiAgfTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3Q29udHJvbGxlcjtcbiIsImltcG9ydCB7ZmFjZVVVSUR9IGZyb20gXCIuLi91dGlscy91dWlkXCI7XG5cbmV4cG9ydCBjbGFzcyBGcmFnbWVudE1vZGVsIHtcbiAgY29uc3RydWN0b3IoZnJhZ21lbnREYXRhKSB7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGZyYWdtZW50RGF0YS5kdXJhdGlvbiB8fCAwO1xuICAgIHRoaXMudXJsID0gZnJhZ21lbnREYXRhLnVybCB8fCAnJztcbiAgICB0aGlzLnBsYXlsaXN0SWQgPSBmcmFnbWVudERhdGEucGxheWxpc3RJZCB8fCAndG1wJztcbiAgICB0aGlzLnV1aWQgPSBmYWNlVVVJRCh0aGlzLnBsYXlsaXN0SWQgKyAnLScgKyB0aGlzLnVybC5zcGxpdCgnLycpLnBvcCgpKTtcbiAgICB0aGlzLnNhdmVkID0gZnJhZ21lbnREYXRhLnNhdmVkIHx8IGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQge0ZyYWdtZW50TW9kZWx9IGZyb20gXCIuL0ZyYWdtZW50XCI7XG5cbmNvbnN0IGNyZWF0ZVBsYXlsaXN0SGVhZGVyID0gKHRhcmdldGR1cmF0aW9uKSA9PiB7XG4gIHJldHVybiBcIiNFWFRNM1VcXG5cIiArXG4gICAgXCIjRVhULVgtVkVSU0lPTjo0XFxuXCIgK1xuICAgIFwiI0VYVC1YLVRBUkdFVERVUkFUSU9OOlwiICsgdGFyZ2V0ZHVyYXRpb24gKyBcIlxcblwiICtcbiAgICBcIiNFWFQtWC1NRURJQS1TRVFVRU5DRTowXFxuXCI7XG59O1xuY29uc3QgYWRkUGxheWxpc3RGcmFnbWVudCA9IChkdXJhY3Rpb24sIHVybCkgPT4ge1xucmV0dXJuIFwiI0VYVElORjpcIiArIGR1cmFjdGlvbiArIFwiLFxcblwiICtcbiAgdXJsICsgXCJcXG5cIjtcbn07XG5jb25zdCBjcmVhdGVQbGF5bGlzdEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIFwiI0VYVC1YLUVORExJU1RcXG5cIjtcbn07XG5cblxuZXhwb3J0IGNsYXNzIFBsYXlsaXN0TW9kZWwge1xuICBjb25zdHJ1Y3RvcihwbGF5bGlzdERhdGEpIHtcbiAgICB0aGlzLmlkID0gcGxheWxpc3REYXRhLmlkIHx8ICcnO1xuICAgIHRoaXMud2lkdGggPSBwbGF5bGlzdERhdGEud2lkdGggfHwgMzg0O1xuICAgIHRoaXMuaGVpZ2h0ID0gcGxheWxpc3REYXRhLmhlaWdodCB8fCAzODQ7XG4gICAgdGhpcy5mcmFnbWVudHMgPSBwbGF5bGlzdERhdGEuZnJhZ21lbnRzIHx8IFtdO1xuICAgIHRoaXMudGFyZ2V0ZHVyYXRpb24gPSBwbGF5bGlzdERhdGEudGFyZ2V0ZHVyYXRpb24gfHwgMDtcbiAgfVxuXG4gIGFkZEZyYWdtZW50KGR1cmF0aW9uLCB1cmwpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IG5ldyBGcmFnbWVudE1vZGVsKHtkdXJhdGlvbiwgdXJsfSk7XG4gICAgdGhpcy5mcmFnbWVudHMucHVzaChmcmFnbWVudCk7XG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9XG5cbiAgZnJhZ21lbnRTYXZlZChmcmFnbWVudCkge1xuICAgIHRoaXMuZnJhZ21lbnRzID0gdGhpcy5mcmFnbWVudHMubWFwKChmcmFnKSA9PiB7XG4gICAgICBpZihmcmFnLnV1aWQgPT09IGZyYWdtZW50LnV1aWQpIHtcbiAgICAgICAgZnJhZy5zYXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZnJhZztcbiAgICB9KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVBsYXlsaXN0SGVhZGVyKHRoaXMudGFyZ2V0ZHVyYXRpb24pICtcbiAgICAgICh0aGlzLmZyYWdtZW50cy5maWx0ZXIoZnJhZ21lbnQgPT4gKGZyYWdtZW50LnNhdmVkKSlcbiAgICAgICAgLm1hcChmcmFnbWVudCA9PiAoYWRkUGxheWxpc3RGcmFnbWVudChmcmFnbWVudC5kdXJhdGlvbiwgZnJhZ21lbnQudXVpZCkpKS5qb2luKCcnKSkgK1xuICAgICAgY3JlYXRlUGxheWxpc3RGb290ZXIoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzQnV0dG9uQ2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY2hlZEJ1dHRvbkhsc0pzIGV4dGVuZHMgVmlkZW9Kc0J1dHRvbkNsYXNzIHtcbiAgXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpKTtcblxuICAgIGNvbnNvbGUuZ3JvdXAoXCJDYWNoZWRCdXR0b25IbHNKcy5qczoyMyAtIGNvbnN0cnVjdG9yXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKHRhZywgcHJvcHMgPSB7fSwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgdGhpcy5ub25JY29uQ29udHJvbCA9IHRydWU7XG5cbiAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgLy8gY2xhc3NOYW1lOiAndmpzLWxpdmUtZGlzcGxheScsXG4gICAgICAvLyBpbm5lckhUTUw6ICdEVlInLFxuICAgICAgY2xhc3NOYW1lOiAndmpzLXNlZWstdG8tbGl2ZS1jb250cm9sJyxcbiAgICAgIGlubmVySFRNTDogJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwidmpzLWljb24tcGxhY2Vob2xkZXJcIj48L3NwYW4+TElWRScsXG4gICAgfSwgcHJvcHMpO1xuXG4gICAgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2FyaWEtbGl2ZSc6ICdPbidcbiAgICB9LCBhdHRyaWJ1dGVzKTtcblxuICAgIHJldHVybiBzdXBlci5jcmVhdGVFbCh0YWcsIHByb3BzLCBhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpIHtcbiAgICB0aGlzLmNvbnRyb2xUZXh0XyA9ICdTdHJlYW0gVHlwZSc7XG4gICAgc3VwZXIuY3JlYXRlQ29udHJvbFRleHRFbChlbCk7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzQnV0dG9uQ2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVCdXR0b25IbHNKcyBleHRlbmRzIFZpZGVvSnNCdXR0b25DbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpKTtcblxuICAgIGNvbnNvbGUuZ3JvdXAoXCJMaXZlQnV0dG9uSGxzSnMuanM6MjUgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gIH1cblxuICBjcmVhdGVFbCh0YWcsIHByb3BzID0ge30sIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIHRoaXMubm9uSWNvbkNvbnRyb2wgPSB0cnVlO1xuXG4gICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1jb250cm9sIHZqcy1zZWVrLXRvLWxpdmUtY29udHJvbCB2anMtYXQtbGl2ZS1lZGdlJyxcbiAgICAgIGlubmVySFRNTDogJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwidmpzLWljb24tcGxhY2Vob2xkZXJcIj48L3NwYW4+TElWRScsXG4gICAgfSwgcHJvcHMpO1xuXG4gICAgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2FyaWEtbGl2ZSc6ICdvZmYnXG4gICAgfSwgYXR0cmlidXRlcyk7XG5cbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlRWwodGFnLCBwcm9wcywgYXR0cmlidXRlcyk7XG4gIH1cblxuICBjcmVhdGVDb250cm9sVGV4dEVsKGVsKSB7XG4gICAgdGhpcy5jb250cm9sVGV4dF8gPSAnU3RyZWFtIFR5cGUnO1xuICAgIHN1cGVyLmNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuY29uc3QgVmlkZW9Kc1Byb2dyZXNzQ29udHJvbENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdQcm9ncmVzc0NvbnRyb2wnKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzc0NvbnRyb2xIbHNKcyBleHRlbmRzIFZpZGVvSnNQcm9ncmVzc0NvbnRyb2xDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuICAgIGNvbnNvbGUuZ3JvdXAoXCJQcm9ncmVzc0NvbnRyb2xIbHNKcy5qczoxMyAtIGNvbnN0cnVjdG9yXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzQnV0dG9uQ2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY0J1dHRvbkhsc0pzIGV4dGVuZHMgVmlkZW9Kc0J1dHRvbkNsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucykpO1xuXG4gICAgY29uc29sZS5ncm91cChcIlJlY0J1dHRvbkhsc0pzLmpzOjI1IC0gY29uc3RydWN0b3JcIik7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICB9XG5cbiAgY3JlYXRlRWwodGFnLCBwcm9wcyA9IHt9LCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICB0aGlzLm5vbkljb25Db250cm9sID0gdHJ1ZTtcblxuICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICd2anMtY29udHJvbCB2anMtc2Vlay10by1saXZlLWNvbnRyb2wnLFxuICAgICAgaW5uZXJIVE1MOiAnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ2anMtaWNvbi1wbGFjZWhvbGRlclwiPjwvc3Bhbj5SRUMnLFxuICAgIH0sIHByb3BzKTtcblxuICAgIGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICdhcmlhLWxpdmUnOiAnT24nXG4gICAgfSwgYXR0cmlidXRlcyk7XG5cbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlRWwodGFnLCBwcm9wcywgYXR0cmlidXRlcyk7XG4gIH1cblxuICBjcmVhdGVDb250cm9sVGV4dEVsKGVsKSB7XG4gICAgdGhpcy5jb250cm9sVGV4dF8gPSAnU3RhcnQgUmVjb3JkJztcbiAgICBzdXBlci5jcmVhdGVDb250cm9sVGV4dEVsKGVsKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5pbXBvcnQgZm9ybWF0VGltZSBmcm9tICcuLi91dGlscy9mb3JtYXQtdGltZSc7XG5cbmNvbnN0IFZpZGVvSnNDb21wb25lbnRDbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjU3RhdHVzQmFySGxzSnMgZXh0ZW5kcyBWaWRlb0pzQ29tcG9uZW50Q2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKSk7XG4gIH1cblxuICBjcmVhdGVFbCgpIHtcbiAgICB0aGlzLm5vbkljb25Db250cm9sID0gdHJ1ZTtcbiAgICBjb25zdCBlbGVtID0gc3VwZXIuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1jb250cm9sIHZqcy1obHNqcy1sci1yZWMtc3RhdHVzLWJhcicsXG4gICAgICBpbm5lckhUTUw6ICc8c3BhbiBjbGFzcz1cInZqcy1obHNqcy1sci1yZWMtaW5kaWNhdG9yXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtZC0xMFwiPmZpYmVyX21hbnVhbF9yZWNvcmQ8L2k+UkVDPC9zcGFuPidcbiAgICB9KTtcblxuXG4gICAgdGhpcy5yZWNvcmRlZEVsXyA9IERvbS5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1sci1yZWNvcmRlZCcsXG4gICAgICBpbm5lclRleHQ6ICctLTotLTotLSdcbiAgICB9LCB7XG4gICAgICAnYXJpYS1saXZlJzogJ29mZicsXG4gICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgfSk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnJlY29yZGVkRWxfKTtcblxuICAgIGVsZW0uYXBwZW5kQ2hpbGQoXG4gICAgICBEb20uY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy1sci1kaXZpZGVyJyxcbiAgICAgICAgaW5uZXJUZXh0OiAnLydcbiAgICAgIH0sIHtcbiAgICAgICAgJ2FyaWEtbGl2ZSc6ICdvZmYnLFxuICAgICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnJlY29yZExlZnRFbF8gPSBEb20uY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtbHItcmVjb3JkLWxlZnQnLFxuICAgICAgaW5uZXJUZXh0OiAnLS06LS06LS0nXG4gICAgfSwge1xuICAgICAgJ2FyaWEtbGl2ZSc6ICdvZmYnLFxuICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgIH0pO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5yZWNvcmRMZWZ0RWxfKTtcblxuICAgIHRoaXMudXBkYXRlUmVjb3JkVGltZSgwKTtcbiAgICB0aGlzLnVwZGF0ZVJlY29yZExlZnRUaW1lKDYwICogNjApO1xuICAgIHJldHVybiBlbGVtO1xuICB9O1xuXG4gIHVwZGF0ZVJlY29yZFRpbWUodGltZSkge1xuICAgIGlmKHRoaXMucmVjb3JkZWRFbF8pIHtcbiAgICAgIHRoaXMucmVjb3JkZWRFbF8uaW5uZXJUZXh0ID0gZm9ybWF0VGltZSh0aW1lKTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlUmVjb3JkTGVmdFRpbWUodGltZSkge1xuICAgIGlmKHRoaXMucmVjb3JkTGVmdEVsXykge1xuICAgICAgdGhpcy5yZWNvcmRMZWZ0RWxfLmlubmVyVGV4dCA9IGZvcm1hdFRpbWUodGltZSk7XG4gICAgfVxuICB9O1xuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5yZWNvcmRlZEVsXyA9IG51bGw7XG4gICAgdGhpcy5yZWNvcmRMZWZ0RWxfID0gbnVsbDtcblxuICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbmNvbnN0IFZpZGVvSnNCdXR0b25DbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcEJ1dHRvbkhsc0pzIGV4dGVuZHMgVmlkZW9Kc0J1dHRvbkNsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucykpO1xuXG4gICAgY29uc29sZS5ncm91cChcIlN0b3BCdXR0b25IbHNKcy5qczoyNSAtIGNvbnN0cnVjdG9yXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKHRhZywgcHJvcHMgPSB7fSwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgdGhpcy5ub25JY29uQ29udHJvbCA9IGZhbHNlO1xuXG4gICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1jb250cm9sIHZqcy1obHNqcy1sci1zdG9wJyxcbiAgICAgIGlubmVySFRNTDogJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5zdG9wPC9pPicsXG4gICAgfSwgcHJvcHMpO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKHRhZywgcHJvcHMsIGF0dHJpYnV0ZXMpO1xuICB9XG5cbiAgY3JlYXRlQ29udHJvbFRleHRFbChlbCkge1xuICAgIHRoaXMuY29udHJvbFRleHRfID0gJ1N0b3AgUmVjb3JkJztcbiAgICBzdXBlci5jcmVhdGVDb250cm9sVGV4dEVsKGVsKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgJy4vcGx1Z2luLnNjc3MnO1xuaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuY29uc3QgUGx1Z2luID0gdmlkZW9qcy5nZXRQbHVnaW4oJ3BsdWdpbicpO1xuaW1wb3J0IHt2ZXJzaW9uIGFzIFZFUlNJT059IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgUHJvZ3Jlc3NDb250cm9sSGxzSnMgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9ncmVzc0NvbnRyb2xIbHNKc1wiO1xuaW1wb3J0IExpdmVCdXR0b25IbHNKcyBmcm9tIFwiLi9jb21wb25lbnRzL0xpdmVCdXR0b25IbHNKc1wiO1xuaW1wb3J0IENhY2hlZEJ1dHRvbkhsc0pzIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FjaGVkQnV0dG9uSGxzSnNcIjtcbmltcG9ydCBSZWNCdXR0b25IbHNKcyBmcm9tIFwiLi9jb21wb25lbnRzL1JlY0J1dHRvbkhsc0pzXCI7XG5pbXBvcnQgU3RvcEJ1dHRvbkhsc0pzIGZyb20gXCIuL2NvbXBvbmVudHMvU3RvcEJ1dHRvbkhsc0pzXCI7XG5pbXBvcnQgUmVjU3RhdHVzQmFySGxzSnMgZnJvbSBcIi4vY29tcG9uZW50cy9SZWNTdGF0dXNCYXJIbHNKc1wiO1xuaW1wb3J0IFZpZXdDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJzL1ZpZXdDb250cm9sbGVyXCI7XG5pbXBvcnQgU3RvcmFnZUNvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvU3RvcmFnZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBSZWFsdGltZVJlY29yZENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyXCI7XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBsaXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjOiBbJ3Zqcy1wbGF5LWNvbnRyb2wnLCAndmpzLXF1YWxpdHktc2VsZWN0b3InXSxcbiAgc3RvcmFnZURiTmFtZTogJ3Zqcy1obHNqcy1scicsXG4gIHN0b3JhZ2VQbGF5bGlzdHNOYW1lOiAncGxheWxpc3RzJyxcbiAgc3RvcmFnZUZyYWdtZW50c05hbWU6ICdmcmFnbWVudHMnLFxufTtcblxuY2xhc3MgSGxzSlNMaXZlUmVjb3JkUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcblxuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy52aWV3Q29udHJvbGxlciA9IG5ldyBWaWV3Q29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLnN0b3JhZ2VDb250cm9sbGVyID0gbmV3IFN0b3JhZ2VDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMucmVhbHRpbWVSZWNvcmRDb250cm9sbGVyID0gbmV3IFJlYWx0aW1lUmVjb3JkQ29udHJvbGxlcih0aGlzKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IHZpZGVvanMubWVyZ2VPcHRpb25zKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHBsYXllci5vbigncmVhZHknLCAoKSA9PiB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgaWYodGhpcy5jaGVja1JlcXVpcmVtZW50cygpKSB7XG4gICAgICB0aGlzLnBsYXllci5hZGRDbGFzcygndmpzLWhscy1saXZlLXJlY29yZCcpO1xuICAgICAgdGhpcy5wbGF5ZXIub24oJ3BhdXNlJywgdGhpcy52aWV3Q29udHJvbGxlci5hY3RpdmF0ZVByb2dyZXNzTW9kZSk7XG4gICAgICB0aGlzLnZpZXdDb250cm9sbGVyLmluaXQoKTtcbiAgICAgIHRoaXMuc3RvcmFnZUNvbnRyb2xsZXIuaW5pdCgpO1xuICAgICAgdGhpcy5yZWFsdGltZVJlY29yZENvbnRyb2xsZXIuaW5pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWRlb2pzLmxvZy53YXJuKCdIbHNKU0xpdmVSZWNvcmRQbHVnaW46IGNhbm5vdCBiZSBpbml0aWFsaXplZCBiZWNhdXNlIG9uZSBvciBtb3JlIG9mIHRoZSByZXF1aXJlbWVudHMgYXJlIG5vdCBtZXQuJyk7XG4gICAgfVxuICB9O1xuXG4gIGNoZWNrUmVxdWlyZW1lbnRzID0gKCkgPT4ge1xuICAgIGlmKCF0aGlzLmdldEhsc0pzKCkpIHtcbiAgICAgIHZpZGVvanMubG9nLndhcm4oJ0hsc0pTTGl2ZVJlY29yZFBsdWdpbjogSExTLkpTIHBsdWdpbiBub3QgZm91bmQuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuc3RvcmFnZUNvbnRyb2xsZXIuY2hlY2tSZXF1aXJlbWVudHMoKSkge1xuICAgICAgdmlkZW9qcy5sb2cud2FybignSGxzSlNMaXZlUmVjb3JkUGx1Z2luOiBUaGlzIGJyb3dzZXIgZG9lc25cXCd0IHN1cHBvcnQgSW5kZXhlZERCLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBnZXRIbHNKcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIudGVjaCh7IElXaWxsVXNlVGhpc0luUGx1Z2luOiB0cnVlIH0pLnNvdXJjZUhhbmRsZXJfLmhscztcbiAgfTtcblxuICBzdGFydFJlYWx0aW1lUmVjb3JkKGxldmVsSWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlY29yZEluUHJvY2VzczogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5nZXRIbHNKcygpLmN1cnJlbnRMZXZlbCA9IGxldmVsSWQgKiAxO1xuICAgIHRoaXMudmlld0NvbnRyb2xsZXIuYWN0aXZhdGVSZWNvcmRNb2RlKCk7XG4gICAgdGhpcy5yZWFsdGltZVJlY29yZENvbnRyb2xsZXIuc3RhcnRSZWNvcmQoKTtcblxuICAgIC8vIGNvbnNvbGUuZ3JvdXAoXCJwbHVnaW4uanM6MjAzIC0gc3RhcnRSZWFsdGltZVJlY29yZFwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAvLyBjb25zb2xlLmxvZyhsZXZlbElkKTtcbiAgICAvLyBjb25zb2xlLmdyb3VwRW5kKCk7XG4gIH1cblxuICBzdG9wUmVhbHRpbWVSZWNvcmQgPSAoKSA9PiB7XG4gICAgdGhpcy5yZWFsdGltZVJlY29yZENvbnRyb2xsZXIuc3RvcFJlY29yZCgpO1xuICAgIHRoaXMudmlld0NvbnRyb2xsZXIuYWN0aXZlTGl2ZU1vZGUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlY29yZEluUHJvY2VzczogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLmdldEhsc0pzKCkuY3VycmVudExldmVsID0gLTE7XG4gIH07XG5cbiAgaGFuZGxlU3RhdGVDaGFuZ2VkKGUpIHtcblxuICB9XG59XG5cbkhsc0pTTGl2ZVJlY29yZFBsdWdpbi5WRVJTSU9OID0gVkVSU0lPTjtcblxuSGxzSlNMaXZlUmVjb3JkUGx1Z2luLmRlZmF1bHRTdGF0ZSA9IHtcbiAgcmVjb3JkQWxsb3dlZDogdHJ1ZSxcbiAgcmVjb3JkSW5Qcm9jZXNzOiBmYWxzZVxufTtcblxudmlkZW9qcy5yZWdpc3RlclBsdWdpbignaGxzSlNMaXZlUmVjb3JkJywgSGxzSlNMaXZlUmVjb3JkUGx1Z2luKTtcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ1Byb2dyZXNzQ29udHJvbEhsc0pzJywgUHJvZ3Jlc3NDb250cm9sSGxzSnMpO1xudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnTGl2ZUJ1dHRvbkhsc0pzJywgTGl2ZUJ1dHRvbkhsc0pzKTtcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ0NhY2hlZEJ1dHRvbkhsc0pzJywgQ2FjaGVkQnV0dG9uSGxzSnMpO1xudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnUmVjQnV0dG9uSGxzSnMnLCBSZWNCdXR0b25IbHNKcyk7XG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdTdG9wQnV0dG9uSGxzSnMnLCBTdG9wQnV0dG9uSGxzSnMpO1xudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnUmVjU3RhdHVzQmFySGxzSnMnLCBSZWNTdGF0dXNCYXJIbHNKcyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCBub3JtYWxpemUgPSAobnVtYmVyKSA9PiAobnVtYmVyIDwgMTAgPyAnMCcgKyBudW1iZXIgOiBudW1iZXIpO1xuXG5leHBvcnQgY29uc3QgdG9Gb3JtYXRZbWRIaXMgPSAoZGF0ZSwgc2VwYXJhdG9yKSA9PiB7XG4gIHJldHVybiBbXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICBub3JtYWxpemUoZGF0ZS5nZXREYXRlKCkpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldEhvdXJzKCkpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldE1pbnV0ZXMoKSksXG4gICAgbm9ybWFsaXplKGRhdGUuZ2V0U2Vjb25kcygpKSxcbiAgXS5qb2luKHNlcGFyYXRvcik7XG59O1xuXG5leHBvcnQgY29uc3Qgbm93SW5Gb3JtYXRZbWRIaXMgPSAoc2VwYXJhdG9yID0gJy0nKSA9PiB7XG4gIHJldHVybiB0b0Zvcm1hdFltZEhpcyhuZXcgRGF0ZSgpLCBzZXBhcmF0b3IpO1xufTtcbiIsIi8qKlxuICogQGZpbGUgZm9ybWF0LXRpbWUuanNcbiAqIEBtb2R1bGUgZm9ybWF0LXRpbWVcbiAqL1xuXG4vKipcbiAqIEZvcm1hdCBzZWNvbmRzIGFzIGEgdGltZSBzdHJpbmcsIEg6TU06U1Mgb3IgTTpTUy4gU3VwcGx5aW5nIGEgZ3VpZGUgKGluXG4gKiBzZWNvbmRzKSB3aWxsIGZvcmNlIGEgbnVtYmVyIG9mIGxlYWRpbmcgemVyb3MgdG8gY292ZXIgdGhlIGxlbmd0aCBvZiB0aGVcbiAqIGd1aWRlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNlY29uZHNcbiAqICAgICAgICAgTnVtYmVyIG9mIHNlY29uZHMgdG8gYmUgdHVybmVkIGludG8gYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGd1aWRlXG4gKiAgICAgICAgIE51bWJlciAoaW4gc2Vjb25kcykgdG8gbW9kZWwgdGhlIHN0cmluZyBhZnRlclxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICAgICAgICAgVGltZSBmb3JtYXR0ZWQgYXMgSDpNTTpTUyBvciBNOlNTXG4gKi9cbmNvbnN0IGRlZmF1bHRJbXBsZW1lbnRhdGlvbiA9IGZ1bmN0aW9uKHNlY29uZHMsIGd1aWRlKSB7XG4gIHNlY29uZHMgPSBzZWNvbmRzIDwgMCA/IDAgOiBzZWNvbmRzO1xuICBsZXQgcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDYwKTtcbiAgbGV0IG0gPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCAlIDYwKTtcbiAgbGV0IGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcbiAgY29uc3QgZ20gPSBNYXRoLmZsb29yKGd1aWRlIC8gNjAgJSA2MCk7XG4gIGNvbnN0IGdoID0gTWF0aC5mbG9vcihndWlkZSAvIDM2MDApO1xuXG4gIC8vIGhhbmRsZSBpbnZhbGlkIHRpbWVzXG4gIGlmIChpc05hTihzZWNvbmRzKSB8fCBzZWNvbmRzID09PSBJbmZpbml0eSkge1xuICAgIC8vICctJyBpcyBmYWxzZSBmb3IgYWxsIHJlbGF0aW9uYWwgb3BlcmF0b3JzIChlLmcuIDwsID49KSBzbyB0aGlzIHNldHRpbmdcbiAgICAvLyB3aWxsIGFkZCB0aGUgbWluaW11bSBudW1iZXIgb2YgZmllbGRzIHNwZWNpZmllZCBieSB0aGUgZ3VpZGVcbiAgICBoID0gbSA9IHMgPSAnLSc7XG4gIH1cblxuICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHNob3cgaG91cnNcbiAgaCA9IChoID4gMCB8fCBnaCA+IDApID8gaCArICc6JyA6ICcnO1xuXG4gIC8vIElmIGhvdXJzIGFyZSBzaG93aW5nLCB3ZSBtYXkgbmVlZCB0byBhZGQgYSBsZWFkaW5nIHplcm8uXG4gIC8vIEFsd2F5cyBzaG93IGF0IGxlYXN0IG9uZSBkaWdpdCBvZiBtaW51dGVzLlxuICBtID0gKCgoaCB8fCBnbSA+PSAxMCkgJiYgbSA8IDEwKSA/ICcwJyArIG0gOiBtKSArICc6JztcblxuICAvLyBDaGVjayBpZiBsZWFkaW5nIHplcm8gaXMgbmVlZCBmb3Igc2Vjb25kc1xuICBzID0gKHMgPCAxMCkgPyAnMCcgKyBzIDogcztcblxuICByZXR1cm4gaCArIG0gKyBzO1xufTtcblxuLy8gSW50ZXJuYWwgcG9pbnRlciB0byB0aGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbi5cbmxldCBpbXBsZW1lbnRhdGlvbiA9IGRlZmF1bHRJbXBsZW1lbnRhdGlvbjtcblxuLyoqXG4gKiBSZXBsYWNlcyB0aGUgZGVmYXVsdCBmb3JtYXRUaW1lIGltcGxlbWVudGF0aW9uIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9tSW1wbGVtZW50YXRpb25cbiAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgdXNlZCBpbiBwbGFjZSBvZiB0aGUgZGVmYXVsdCBmb3JtYXRUaW1lXG4gKiAgICAgICAgaW1wbGVtZW50YXRpb24uIFdpbGwgcmVjZWl2ZSB0aGUgY3VycmVudCB0aW1lIGluIHNlY29uZHMgYW5kIHRoZVxuICogICAgICAgIGd1aWRlIChpbiBzZWNvbmRzKSBhcyBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGb3JtYXRUaW1lKGN1c3RvbUltcGxlbWVudGF0aW9uKSB7XG4gIGltcGxlbWVudGF0aW9uID0gY3VzdG9tSW1wbGVtZW50YXRpb247XG59XG5cbi8qKlxuICogUmVzZXRzIGZvcm1hdFRpbWUgdG8gdGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZvcm1hdFRpbWUoKSB7XG4gIGltcGxlbWVudGF0aW9uID0gZGVmYXVsdEltcGxlbWVudGF0aW9uO1xufVxuXG4vKipcbiAqIERlbGVnYXRlcyB0byBlaXRoZXIgdGhlIGRlZmF1bHQgdGltZSBmb3JtYXR0aW5nIGZ1bmN0aW9uIG9yIGEgY3VzdG9tXG4gKiBmdW5jdGlvbiBzdXBwbGllZCB2aWEgYHNldEZvcm1hdFRpbWVgLlxuICpcbiAqIEZvcm1hdHMgc2Vjb25kcyBhcyBhIHRpbWUgc3RyaW5nIChIOk1NOlNTIG9yIE06U1MpLiBTdXBwbHlpbmcgYVxuICogZ3VpZGUgKGluIHNlY29uZHMpIHdpbGwgZm9yY2UgYSBudW1iZXIgb2YgbGVhZGluZyB6ZXJvcyB0byBjb3ZlciB0aGVcbiAqIGxlbmd0aCBvZiB0aGUgZ3VpZGUuXG4gKlxuICogQHN0YXRpY1xuICogQGV4YW1wbGUgIGZvcm1hdFRpbWUoMTI1LCA2MDApID09PSBcIjAyOjA1XCJcbiAqIEBwYXJhbSAgICB7bnVtYmVyfSBzZWNvbmRzXG4gKiAgICAgICAgICAgTnVtYmVyIG9mIHNlY29uZHMgdG8gYmUgdHVybmVkIGludG8gYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gICAge251bWJlcn0gZ3VpZGVcbiAqICAgICAgICAgICBOdW1iZXIgKGluIHNlY29uZHMpIHRvIG1vZGVsIHRoZSBzdHJpbmcgYWZ0ZXJcbiAqXG4gKiBAcmV0dXJuICAge3N0cmluZ31cbiAqICAgICAgICAgICBUaW1lIGZvcm1hdHRlZCBhcyBIOk1NOlNTIG9yIE06U1NcbiAqL1xuZnVuY3Rpb24gZm9ybWF0VGltZShzZWNvbmRzLCBndWlkZSA9IHNlY29uZHMpIHtcbiAgcmV0dXJuIGltcGxlbWVudGF0aW9uKHNlY29uZHMsIGd1aWRlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0VGltZTtcbiIsImV4cG9ydCBjb25zdCBmYWNlVVVJRCA9IChwcmVmaXgpID0+IHtcbiAgcmV0dXJuIHByZWZpeCArICctJyArIERhdGUubm93KClcbn07XG4iLCJjb25zdCB7IHBlcmZvcm1hbmNlLCBYTUxIdHRwUmVxdWVzdCB9ID0gd2luZG93O1xuXG5jbGFzcyBYaHJMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcueGhyU2V0dXApIHtcbiAgICAgIHRoaXMueGhyU2V0dXAgPSBjb25maWcueGhyU2V0dXA7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5hYm9ydCgpO1xuICAgIHRoaXMubG9hZGVyID0gbnVsbDtcbiAgfVxuXG4gIGFib3J0ICgpIHtcbiAgICBsZXQgbG9hZGVyID0gdGhpcy5sb2FkZXI7XG4gICAgaWYgKGxvYWRlciAmJiBsb2FkZXIucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgdGhpcy5zdGF0cy5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgIGxvYWRlci5hYm9ydCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0VGltZW91dCk7XG4gICAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IG51bGw7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJldHJ5VGltZW91dCk7XG4gICAgdGhpcy5yZXRyeVRpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgbG9hZCAoY29udGV4dCwgY29uZmlnLCBjYWxsYmFja3MpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIHRoaXMuc3RhdHMgPSB7IHRyZXF1ZXN0OiBwZXJmb3JtYW5jZS5ub3coKSwgcmV0cnk6IDAgfTtcbiAgICB0aGlzLnJldHJ5RGVsYXkgPSBjb25maWcucmV0cnlEZWxheTtcbiAgICB0aGlzLmxvYWRJbnRlcm5hbCgpO1xuICB9XG5cbiAgbG9hZEludGVybmFsICgpIHtcbiAgICBsZXQgeGhyLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgIHhociA9IHRoaXMubG9hZGVyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICBsZXQgc3RhdHMgPSB0aGlzLnN0YXRzO1xuICAgIHN0YXRzLnRmaXJzdCA9IDA7XG4gICAgc3RhdHMubG9hZGVkID0gMDtcbiAgICBjb25zdCB4aHJTZXR1cCA9IHRoaXMueGhyU2V0dXA7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKHhoclNldHVwKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgeGhyU2V0dXAoeGhyLCBjb250ZXh0LnVybCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBmaXggeGhyU2V0dXA6ICh4aHIsIHVybCkgPT4ge3hoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1MYW5ndWFnZVwiLCBcInRlc3RcIik7fVxuICAgICAgICAgIC8vIG5vdCB3b3JraW5nLCBhcyB4aHIuc2V0UmVxdWVzdEhlYWRlciBleHBlY3RzIHhoci5yZWFkeVN0YXRlID09PSBPUEVOXG4gICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGNvbnRleHQudXJsLCB0cnVlKTtcbiAgICAgICAgICB4aHJTZXR1cCh4aHIsIGNvbnRleHQudXJsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICB4aHIub3BlbignR0VUJywgY29udGV4dC51cmwsIHRydWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElFMTEgdGhyb3dzIGFuIGV4Y2VwdGlvbiBvbiB4aHIub3BlbiBpZiBhdHRlbXB0aW5nIHRvIGFjY2VzcyBhbiBIVFRQIHJlc291cmNlIG92ZXIgSFRUUFNcbiAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRXJyb3IoeyBjb2RlOiB4aHIuc3RhdHVzLCB0ZXh0OiBlLm1lc3NhZ2UgfSwgY29udGV4dCwgeGhyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5yYW5nZUVuZCkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1JhbmdlJywgJ2J5dGVzPScgKyBjb250ZXh0LnJhbmdlU3RhcnQgKyAnLScgKyAoY29udGV4dC5yYW5nZUVuZCAtIDEpKTtcbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gdGhpcy5yZWFkeXN0YXRlY2hhbmdlLmJpbmQodGhpcyk7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSB0aGlzLmxvYWRwcm9ncmVzcy5iaW5kKHRoaXMpO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSBjb250ZXh0LnJlc3BvbnNlVHlwZTtcblxuICAgIC8vIHNldHVwIHRpbWVvdXQgYmVmb3JlIHdlIHBlcmZvcm0gcmVxdWVzdFxuICAgIHRoaXMucmVxdWVzdFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmxvYWR0aW1lb3V0LmJpbmQodGhpcyksIHRoaXMuY29uZmlnLnRpbWVvdXQpO1xuICAgIHhoci5zZW5kKCk7XG4gIH1cblxuICByZWFkeXN0YXRlY2hhbmdlIChldmVudCkge1xuICAgIGxldCB4aHIgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgcmVhZHlTdGF0ZSA9IHhoci5yZWFkeVN0YXRlLFxuICAgICAgc3RhdHMgPSB0aGlzLnN0YXRzLFxuICAgICAgY29udGV4dCA9IHRoaXMuY29udGV4dCxcbiAgICAgIGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuXG4gICAgLy8gZG9uJ3QgcHJvY2VlZCBpZiB4aHIgaGFzIGJlZW4gYWJvcnRlZFxuICAgIGlmIChzdGF0cy5hYm9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gPj0gSEVBREVSU19SRUNFSVZFRFxuICAgIGlmIChyZWFkeVN0YXRlID49IDIpIHtcbiAgICAgIC8vIGNsZWFyIHhociB0aW1lb3V0IGFuZCByZWFybSBpdCBpZiByZWFkeVN0YXRlIGxlc3MgdGhhbiA0XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVxdWVzdFRpbWVvdXQpO1xuICAgICAgaWYgKHN0YXRzLnRmaXJzdCA9PT0gMCkge1xuICAgICAgICBzdGF0cy50Zmlyc3QgPSBNYXRoLm1heChwZXJmb3JtYW5jZS5ub3coKSwgc3RhdHMudHJlcXVlc3QpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBsZXQgc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICAgICAgLy8gaHR0cCBzdGF0dXMgYmV0d2VlbiAyMDAgdG8gMjk5IGFyZSBhbGwgc3VjY2Vzc2Z1bFxuICAgICAgICBpZiAoc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICBzdGF0cy50bG9hZCA9IE1hdGgubWF4KHN0YXRzLnRmaXJzdCwgcGVyZm9ybWFuY2Uubm93KCkpO1xuICAgICAgICAgIGxldCBkYXRhLCBsZW47XG4gICAgICAgICAgaWYgKGNvbnRleHQucmVzcG9uc2VUeXBlID09PSAnYXJyYXlidWZmZXInKSB7XG4gICAgICAgICAgICBkYXRhID0geGhyLnJlc3BvbnNlO1xuICAgICAgICAgICAgbGVuID0gZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgIGxlbiA9IGRhdGEubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0cy5sb2FkZWQgPSBzdGF0cy50b3RhbCA9IGxlbjtcbiAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB7IHVybDogeGhyLnJlc3BvbnNlVVJMLCBkYXRhOiBkYXRhIH07XG4gICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25TdWNjZXNzKHJlc3BvbnNlLCBzdGF0cywgY29udGV4dCwgeGhyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiBtYXggbmIgb2YgcmV0cmllcyByZWFjaGVkIG9yIGlmIGh0dHAgc3RhdHVzIGJldHdlZW4gNDAwIGFuZCA0OTkgKHN1Y2ggZXJyb3IgY2Fubm90IGJlIHJlY292ZXJlZCwgcmV0cnlpbmcgaXMgdXNlbGVzcyksIHJldHVybiBlcnJvclxuICAgICAgICAgIGlmIChzdGF0cy5yZXRyeSA+PSBjb25maWcubWF4UmV0cnkgfHwgKHN0YXR1cyA+PSA0MDAgJiYgc3RhdHVzIDwgNDk5KSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25FcnJvcih7IGNvZGU6IHN0YXR1cywgdGV4dDogeGhyLnN0YXR1c1RleHQgfSwgY29udGV4dCwgeGhyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWJvcnRzIGFuZCByZXNldHMgaW50ZXJuYWwgc3RhdGVcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgLy8gc2NoZWR1bGUgcmV0cnlcbiAgICAgICAgICAgIHRoaXMucmV0cnlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5sb2FkSW50ZXJuYWwuYmluZCh0aGlzKSwgdGhpcy5yZXRyeURlbGF5KTtcbiAgICAgICAgICAgIC8vIHNldCBleHBvbmVudGlhbCBiYWNrb2ZmXG4gICAgICAgICAgICB0aGlzLnJldHJ5RGVsYXkgPSBNYXRoLm1pbigyICogdGhpcy5yZXRyeURlbGF5LCBjb25maWcubWF4UmV0cnlEZWxheSk7XG4gICAgICAgICAgICBzdGF0cy5yZXRyeSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVhZHlTdGF0ZSA+PSAyIEFORCByZWFkeVN0YXRlICE9PTQgKHJlYWR5U3RhdGUgPSBIRUFERVJTX1JFQ0VJVkVEIHx8IExPQURJTkcpIHJlYXJtIHRpbWVvdXQgYXMgeGhyIG5vdCBmaW5pc2hlZCB5ZXRcbiAgICAgICAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMubG9hZHRpbWVvdXQuYmluZCh0aGlzKSwgY29uZmlnLnRpbWVvdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvYWR0aW1lb3V0ICgpIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5vblRpbWVvdXQodGhpcy5zdGF0cywgdGhpcy5jb250ZXh0LCBudWxsKTtcbiAgfVxuXG4gIGxvYWRwcm9ncmVzcyAoZXZlbnQpIHtcbiAgICBsZXQgeGhyID0gZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgIHN0YXRzID0gdGhpcy5zdGF0cztcblxuICAgIHN0YXRzLmxvYWRlZCA9IGV2ZW50LmxvYWRlZDtcbiAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgc3RhdHMudG90YWwgPSBldmVudC50b3RhbDtcbiAgICB9XG5cbiAgICBsZXQgb25Qcm9ncmVzcyA9IHRoaXMuY2FsbGJhY2tzLm9uUHJvZ3Jlc3M7XG4gICAgaWYgKG9uUHJvZ3Jlc3MpIHtcbiAgICAgIC8vIHRoaXJkIGFyZyBpcyB0byBwcm92aWRlIG9uIHByb2dyZXNzIGRhdGFcbiAgICAgIG9uUHJvZ3Jlc3Moc3RhdHMsIHRoaXMuY29udGV4dCwgbnVsbCwgeGhyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWGhyTG9hZGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3ZpZGVvX2pzX187Il0sInNvdXJjZVJvb3QiOiIifQ==