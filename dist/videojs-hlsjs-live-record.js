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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL0NvbXBvbmVudHMvUmVjU2V0dGluZ3NNb2RhbEhsc0pzLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Db21wb25lbnRzL3JlY1NldHRpbmdzTW9kYWwvQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Db21wb25lbnRzL3JlY1NldHRpbmdzTW9kYWwvUmVhbFRpbWVSZWNvcmRUYWJIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29tcG9uZW50cy9yZWNTZXR0aW5nc01vZGFsL1RhYnNIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29udHJvbGxlcnMvUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9Db250cm9sbGVycy9TdG9yYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vQ29udHJvbGxlcnMvVmlld0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL01vZGVscy9GcmFnbWVudC5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vTW9kZWxzL1BsYXlsaXN0LmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9jb21wb25lbnRzL0NhY2hlZEJ1dHRvbkhsc0pzLmpzIiwid2VicGFjazovL3ZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmQvLi9jb21wb25lbnRzL0xpdmVCdXR0b25IbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9Qcm9ncmVzc0NvbnRyb2xIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9SZWNCdXR0b25IbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9SZWNTdGF0dXNCYXJIbHNKcy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vY29tcG9uZW50cy9TdG9wQnV0dG9uSGxzSnMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL3BsdWdpbi5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vcGx1Z2luLnNjc3M/YmVlMyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vdXRpbHMvZGF0ZS5qcyIsIndlYnBhY2s6Ly92aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkLy4vdXRpbHMvZm9ybWF0LXRpbWUuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL3V0aWxzL3V1aWQuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC8uL3V0aWxzL3hoci1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC9leHRlcm5hbCBcInZpZGVvanNcIiJdLCJuYW1lcyI6WyJWaWRlb0pzTW9kYWxEaWFsb2dDbGFzcyIsInZpZGVvanMiLCJnZXRDb21wb25lbnQiLCJEb20iLCJkb20iLCJkZWZhdWx0T3B0aW9ucyIsIlJlY1NldHRpbmdzTW9kYWxIbHNKcyIsImNvbnN0cnVjdG9yIiwicGxheWVyIiwib3B0aW9ucyIsImNvbnNvbGUiLCJncm91cCIsImxvZyIsImdyb3VwRW5kIiwiYnVpbGRDU1NDbGFzcyIsImNvbnRlbnQiLCJ0YWJzQ29tcG9uZW50IiwiVGFic0hsc0pzIiwicGxheWVyXyIsImVsXyIsInByb3RvdHlwZSIsIm9wdGlvbnNfIiwiT2JqZWN0IiwiYXNzaWduIiwicGF1c2VPbk9wZW4iLCJmaWxsQWx3YXlzIiwidGVtcG9yYXJ5IiwidW5jbG9zZWFibGUiLCJyZWdpc3RlckNvbXBvbmVudCIsIlZpZGVvSnNDb21wb25lbnRDbGFzcyIsIkJhY2tncm91bmRSZWNvcmRUYWJIbHNKcyIsImNyZWF0ZUVsIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiVmlkZW9Kc0J1dHRvbkNsYXNzIiwiVmlkZW9Kc01lbnVDbGFzcyIsIlJlYWxUaW1lUmVjb3JkVGFiSGxzSnMiLCJnZXRRdWFsaXR5TGV2ZWxzIiwiaGxzanMiLCJobHNKU0xpdmVSZWNvcmQiLCJnZXRIbHNKcyIsImxldmVscyIsImN1cnJlbnRMZXZlbCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxhYmVsIiwiaGVpZ2h0IiwidmFsdWUiLCJzZWxlY3RlZCIsInNvcnQiLCJjdXJyZW50IiwibmV4dCIsImVsZW0iLCJhcHBlbmRDaGlsZCIsInJlbmRlckhlYWQiLCJyZW5kZXJRdWFsaXR5U2VsZWN0b3IiLCJyZW5kZXJCdXR0b24iLCJ1dWlkIiwiZmFjZVVVSUQiLCJmb3IiLCJpbm5lclRleHQiLCJxdWFsaXR5U2VsZWN0IiwiaWQiLCJmb3JFYWNoIiwidGV4dCIsImhvbGRlciIsIm9uY2xpY2siLCJoYW5kbGVTdGFydFJlY29yZGluZyIsImJpbmQiLCJzdGFydFJlYWx0aW1lUmVjb3JkIiwidGFic0hvbGRlciIsInJlbmRlck5hdiIsInJlbmRlckJvZHkiLCJuYXZIb2xkZXIiLCJoYW5kbGVDbGljayIsImJvZHlIb2xkZXIiLCJyZWFsdGltZVJlY29yZCIsImVsZW0xIiwiYmFja2dyb3VuZFJlY29yZCIsImVsZW0yIiwiJCQiLCJlbGVtSW5kZXgiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiSGxzIiwid2luZG93IiwiUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyIiwicGx1Z2luIiwicmVzcG9uc2UiLCJzdGF0cyIsImNvbnRleHQiLCJuZXR3b3JrRGV0YWlscyIsImxvYWRlciIsImRlc3Ryb3kiLCJzdG9yYWdlQ29udHJvbGxlciIsInNhdmVGcmFnbWVudCIsImZyYWciLCJkYXRhIiwidGhlbiIsInBsYXlsaXN0IiwiZnJhZ21lbnRTYXZlZCIsInNhdmVQbGF5bGlzdCIsImdyb3VwQ29sbGFwc2VkIiwidG9TdHJpbmciLCJldmVudCIsInJlY29yZFN0YXJ0ZWQiLCJtYW5pZmVzdExpc3RlbmVyIiwibGV2ZWxMaXN0ZW5lciIsImZyYWdtZW50TGlzdGVuZXIiLCJpbml0Iiwib24iLCJFdmVudHMiLCJGUkFHX0xPQURFRCIsImhsc0ZyYWdtZW50TG9hZGVkIiwic3RhcnRSZWNvcmQiLCJzdG9wUmVjb3JkIiwiaW5pdFBsYXlsaXN0IiwibGV2ZWwiLCJYaHJMb2FkZXIiLCJ1cmwiLCJsb2FkZXJDb250ZXh0IiwiYWRkRnJhZ21lbnQiLCJkdXJhdGlvbiIsInJlc3BvbnNlVHlwZSIsInByb2dyZXNzRGF0YSIsImxvYWRlckNvbmZpZyIsInRpbWVvdXQiLCJtYXhSZXRyeSIsInJldHJ5RGVsYXkiLCJtYXhSZXRyeURlbGF5IiwibG9hZGVyQ2FsbGJhY2tzIiwib25TdWNjZXNzIiwiZnJhZ21lbnRMb2FkZWQiLCJsb2FkIiwibGV2ZWxJbmRleCIsIlBsYXlsaXN0TW9kZWwiLCJub3dJbkZvcm1hdFltZEhpcyIsIndpZHRoIiwidGFyZ2V0ZHVyYXRpb24iLCJkZXRhaWxzIiwiREJfVkVSU0lPTiIsIlNUT1JBR0VfV1JJVEVfTU9ERSIsIlNUT1JBR0VfUkVBRF9NT0RFIiwiU3RvcmFnZUNvbnRyb2xsZXIiLCJkYiIsIm9wZW5SZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsInN0b3JhZ2VEYk5hbWUiLCJvbnVwZ3JhZGVuZWVkZWQiLCJyZXN1bHQiLCJjcmVhdGVPYmplY3RTdG9yZSIsInN0b3JhZ2VQbGF5bGlzdHNOYW1lIiwia2V5UGF0aCIsImZyYWdtZW50c1N0b3JhZ2UiLCJzdG9yYWdlRnJhZ21lbnRzTmFtZSIsImNyZWF0ZUluZGV4IiwidW5pcXVlIiwib25zdWNjZXNzIiwiY2hlY2tSZXF1aXJlbWVudHMiLCJmcmFnbWVudCIsInBheWxvYWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRyYW5zYWN0aW9uIiwic3RvcmFnZSIsIm9iamVjdFN0b3JlIiwicmVxdWVzdCIsImFkZCIsIm9uZXJyb3IiLCJwdXQiLCJWaWV3Q29udHJvbGxlciIsImNvbnRyb2xCYXIiLCJnZXRDaGlsZCIsInNwYWNlIiwiYWRkQ2hpbGQiLCJyZW1vdmVEZWZhdWx0Q29udHJvbHMiLCJsaXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjIiwic2VsZWN0b3IiLCJjaGlsZHJlbiIsImZpbHRlciIsImNvbXBvbmVudCIsImhhc0NsYXNzIiwiY2FjaGVkQnV0dG9uQ29tcG9uZW50IiwiY2xpY2tIYW5kbGVyIiwiYWN0aXZlTGl2ZU1vZGUiLCJoaWRlIiwibGl2ZUJ1dHRvbkNvbXBvbmVudCIsImFjdGl2YXRlUHJvZ3Jlc3NNb2RlIiwicmVjQnV0dG9uQ29tcG9uZW50Iiwic2hvd1JlY29yZFNldHRpbmdzIiwic3RvcEJ1dHRvbkNvbXBvbmVudCIsInN0b3BSZWFsdGltZVJlY29yZCIsInJlY1N0YXR1c0JhckNvbXBvbmVudCIsInByb2dyZXNzQ29udHJvbENvbXBvbmVudCIsInJlbW92ZUNoaWxkIiwic2hvd090aGVyQ29udHJvbCIsInNob3dMaXZlQ29udHJvbCIsImhpZGVQcm9ncmVzc0NvbnRyb2wiLCJoaWRlUmVjQ29udHJvbCIsImxpdmVUcmFja2VyIiwic2Vla1RvTGl2ZUVkZ2UiLCJlIiwid2FybiIsIm1lc3NhZ2UiLCJzdGF0ZSIsInJlY29yZEluUHJvY2VzcyIsInNob3dQcm9ncmVzc0NvbnRyb2wiLCJoaWRlTGl2ZUNvbnRyb2wiLCJyZWNTZXR0aW5nc01vZGFsQ29tcG9uZW50IiwiY2xvc2UiLCJoaWRlT3RoZXJDb250cm9sIiwic2hvd1JlY0NvbnRyb2wiLCJ1cGRhdGVSZWNvcmRUaW1lIiwiYSIsInJlY29yZFVwZGF0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzaG93IiwiY2xlYXJJbnRlcnZhbCIsIkZyYWdtZW50TW9kZWwiLCJmcmFnbWVudERhdGEiLCJwbGF5bGlzdElkIiwic3BsaXQiLCJwb3AiLCJzYXZlZCIsImNyZWF0ZVBsYXlsaXN0SGVhZGVyIiwiYWRkUGxheWxpc3RGcmFnbWVudCIsImR1cmFjdGlvbiIsImNyZWF0ZVBsYXlsaXN0Rm9vdGVyIiwicGxheWxpc3REYXRhIiwiZnJhZ21lbnRzIiwicHVzaCIsImpvaW4iLCJDYWNoZWRCdXR0b25IbHNKcyIsInRhZyIsInByb3BzIiwiYXR0cmlidXRlcyIsIm5vbkljb25Db250cm9sIiwiY3JlYXRlQ29udHJvbFRleHRFbCIsImVsIiwiY29udHJvbFRleHRfIiwiY2FsbCIsImFyZ3VtZW50cyIsIkxpdmVCdXR0b25IbHNKcyIsIlZpZGVvSnNQcm9ncmVzc0NvbnRyb2xDb21wb25lbnQiLCJQcm9ncmVzc0NvbnRyb2xIbHNKcyIsIlJlY0J1dHRvbkhsc0pzIiwiUmVjU3RhdHVzQmFySGxzSnMiLCJyZWNvcmRlZEVsXyIsInJlY29yZExlZnRFbF8iLCJ1cGRhdGVSZWNvcmRMZWZ0VGltZSIsInRpbWUiLCJmb3JtYXRUaW1lIiwiZGlzcG9zZSIsIlN0b3BCdXR0b25IbHNKcyIsIlBsdWdpbiIsImdldFBsdWdpbiIsImRlZmF1bHRzIiwiSGxzSlNMaXZlUmVjb3JkUGx1Z2luIiwic2V0U3RhdGUiLCJ2aWV3Q29udHJvbGxlciIsInJlYWx0aW1lUmVjb3JkQ29udHJvbGxlciIsInRlY2giLCJJV2lsbFVzZVRoaXNJblBsdWdpbiIsInNvdXJjZUhhbmRsZXJfIiwiaGxzIiwibWVyZ2VPcHRpb25zIiwibGV2ZWxJZCIsImFjdGl2YXRlUmVjb3JkTW9kZSIsImhhbmRsZVN0YXRlQ2hhbmdlZCIsIlZFUlNJT04iLCJkZWZhdWx0U3RhdGUiLCJyZWNvcmRBbGxvd2VkIiwicmVnaXN0ZXJQbHVnaW4iLCJub3JtYWxpemUiLCJudW1iZXIiLCJ0b0Zvcm1hdFltZEhpcyIsImRhdGUiLCJzZXBhcmF0b3IiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJEYXRlIiwiZGVmYXVsdEltcGxlbWVudGF0aW9uIiwic2Vjb25kcyIsImd1aWRlIiwicyIsIk1hdGgiLCJmbG9vciIsIm0iLCJoIiwiZ20iLCJnaCIsImlzTmFOIiwiSW5maW5pdHkiLCJpbXBsZW1lbnRhdGlvbiIsInNldEZvcm1hdFRpbWUiLCJjdXN0b21JbXBsZW1lbnRhdGlvbiIsInJlc2V0Rm9ybWF0VGltZSIsInByZWZpeCIsIm5vdyIsInBlcmZvcm1hbmNlIiwiWE1MSHR0cFJlcXVlc3QiLCJjb25maWciLCJ4aHJTZXR1cCIsImFib3J0IiwicmVhZHlTdGF0ZSIsImFib3J0ZWQiLCJjbGVhclRpbWVvdXQiLCJyZXF1ZXN0VGltZW91dCIsInJldHJ5VGltZW91dCIsImNhbGxiYWNrcyIsInRyZXF1ZXN0IiwicmV0cnkiLCJsb2FkSW50ZXJuYWwiLCJ4aHIiLCJ0Zmlyc3QiLCJsb2FkZWQiLCJvbkVycm9yIiwiY29kZSIsInN0YXR1cyIsInJhbmdlRW5kIiwic2V0UmVxdWVzdEhlYWRlciIsInJhbmdlU3RhcnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeXN0YXRlY2hhbmdlIiwib25wcm9ncmVzcyIsImxvYWRwcm9ncmVzcyIsInNldFRpbWVvdXQiLCJsb2FkdGltZW91dCIsInNlbmQiLCJjdXJyZW50VGFyZ2V0IiwibWF4IiwidGxvYWQiLCJsZW4iLCJieXRlTGVuZ3RoIiwicmVzcG9uc2VUZXh0IiwibGVuZ3RoIiwidG90YWwiLCJyZXNwb25zZVVSTCIsInN0YXR1c1RleHQiLCJtaW4iLCJvblRpbWVvdXQiLCJsZW5ndGhDb21wdXRhYmxlIiwib25Qcm9ncmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLHVCQUF1QixHQUFHQywrQ0FBTyxDQUFDQyxZQUFSLENBQXFCLGFBQXJCLENBQWhDO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRiwrQ0FBTyxDQUFDRyxH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TSxDQUFDcEwsT0FBdEQsQ0FBdEI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ4TSxhQUFXLEdBQUk7QUFDYixTQUFLbEIsU0FBTCxDQUFlK0IsU0FBZixDQUF5QixLQUFLaFEsS0FBOUIsRUFBcUMsS0FBS0MsT0FBMUMsRUFBbUQsSUFBbkQ7QUFDRDs7QUFFRGdQLGNBQVksQ0FBRWxPLEtBQUYsRUFBUztBQUNuQixRQUFJc04sR0FBRyxHQUFHdE4sS0FBSyxDQUFDc08sYUFBaEI7QUFBQSxRQUNFclAsS0FBSyxHQUFHLEtBQUtBLEtBRGY7QUFHQUEsU0FBSyxDQUFDdU8sTUFBTixHQUFleE4sS0FBSyxDQUFDd04sTUFBckI7O0FBQ0EsUUFBSXhOLEtBQUssQ0FBQ2tQLGdCQUFWLEVBQTRCO0FBQzFCalEsV0FBSyxDQUFDNFAsS0FBTixHQUFjN08sS0FBSyxDQUFDNk8sS0FBcEI7QUFDRDs7QUFFRCxRQUFJTSxVQUFVLEdBQUcsS0FBS2pDLFNBQUwsQ0FBZWlDLFVBQWhDOztBQUNBLFFBQUlBLFVBQUosRUFBZ0I7QUFDZDtBQUNBQSxnQkFBVSxDQUFDbFEsS0FBRCxFQUFRLEtBQUtDLE9BQWIsRUFBc0IsSUFBdEIsRUFBNEJvTyxHQUE1QixDQUFWO0FBQ0Q7QUFDRjs7QUF2SmE7O0FBMEpEeE0sd0VBQWYsRTs7Ozs7Ozs7Ozs7QUM1SkEsc0QiLCJmaWxlIjoidmlkZW9qcy1obHNqcy1saXZlLXJlY29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInZpZGVvanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ2aWRlb2pzLWhsc2pzLWxpdmUtcmVjb3JkXCIsIFtcInZpZGVvanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widmlkZW9qcy1obHNqcy1saXZlLXJlY29yZFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInZpZGVvanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInZpZGVvanMtaGxzanMtbGl2ZS1yZWNvcmRcIl0gPSBmYWN0b3J5KHJvb3RbXCJ2aWRlb2pzXCJdKTtcbn0pKCh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyksIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdmlkZW9fanNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGx1Z2luLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcbmltcG9ydCBUYWJzSGxzSnMgZnJvbSBcIi4vcmVjU2V0dGluZ3NNb2RhbC9UYWJzSGxzSnNcIjtcblxuY29uc3QgVmlkZW9Kc01vZGFsRGlhbG9nQ2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTW9kYWxEaWFsb2cnKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuY2xhc3MgUmVjU2V0dGluZ3NNb2RhbEhsc0pzIGV4dGVuZHMgVmlkZW9Kc01vZGFsRGlhbG9nQ2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgY29uc29sZS5ncm91cChcIlJlY1NldHRpbmdzTW9kYWxIbHNKcy5qczoyMCAtIGNvbnN0cnVjdG9yXCIpO1xuICAgIGNvbnNvbGUubG9nKHBsYXllcik7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIHRoZSBkZWZhdWx0IERPTSBgY2xhc3NOYW1lYC5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiAgICAgICAgIFRoZSBET00gYGNsYXNzTmFtZWAgZm9yIHRoaXMgb2JqZWN0LlxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSB2ZXJzaW9uIDUuXG4gICAqL1xuICBidWlsZENTU0NsYXNzKCkge1xuICAgIHJldHVybiBgdmpzLWhsc2pzLWxyLXJlYy1zZXR0aW5ncyAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGxvY2FsaXplZCBlcnJvciBtZXNzYWdlIGJhc2VkIG9uIHRoZSBgUGxheWVyYHMgZXJyb3IuXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogICAgICAgICBUaGUgYFBsYXllcmBzIGVycm9yIG1lc3NhZ2UgbG9jYWxpemVkIG9yIGFuIGVtcHR5IHN0cmluZy5cbiAgICovXG4gIGNvbnRlbnQoKSB7XG4gICAgdGhpcy50YWJzQ29tcG9uZW50ID0gbmV3IFRhYnNIbHNKcyh0aGlzLnBsYXllcl8sIHt9KTtcbiAgICByZXR1cm4gdGhpcy50YWJzQ29tcG9uZW50LmVsXztcbiAgfVxufVxuXG5SZWNTZXR0aW5nc01vZGFsSGxzSnMucHJvdG90eXBlLm9wdGlvbnNfID0gT2JqZWN0LmFzc2lnbih7fSwgVmlkZW9Kc01vZGFsRGlhbG9nQ2xhc3MucHJvdG90eXBlLm9wdGlvbnNfLCB7XG4gIHBhdXNlT25PcGVuOiBmYWxzZSxcbiAgZmlsbEFsd2F5czogZmFsc2UsXG4gIHRlbXBvcmFyeTogdHJ1ZSxcbiAgdW5jbG9zZWFibGU6IGZhbHNlXG59KTtcblxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnUmVjU2V0dGluZ3NNb2RhbEhsc0pzJywgUmVjU2V0dGluZ3NNb2RhbEhsc0pzKTtcbmV4cG9ydCBkZWZhdWx0IFJlY1NldHRpbmdzTW9kYWxIbHNKcztcbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuY29uc3QgVmlkZW9Kc0NvbXBvbmVudENsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5jbGFzcyBCYWNrZ3JvdW5kUmVjb3JkVGFiSGxzSnMgZXh0ZW5kcyBWaWRlb0pzQ29tcG9uZW50Q2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgY29uc29sZS5ncm91cChcIkJhY2tncm91bmRSZWNvcmRUYWJIbHNKcy5qczoyMCAtIGNvbnN0cnVjdG9yXCIpO1xuICAgIGNvbnNvbGUubG9nKHBsYXllcik7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gIH1cblxuICBjcmVhdGVFbCgpIHtcbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlRWwoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXRhYi1iYWNrZ3JvdW5kLXJlY29yZCcsXG4gICAgICAgIGlubmVySFRNTDogJzxwPnZqcy1obHNqcy10YWItYmFja2dyb3VuZC1yZWNvcmQ8L3A+J1xuICAgICAgfSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmRSZWNvcmRUYWJIbHNKcztcbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcbmltcG9ydCB7ZmFjZVVVSUR9IGZyb20gXCIuLi8uLi91dGlscy91dWlkXCI7XG5cbmNvbnN0IFZpZGVvSnNDb21wb25lbnRDbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcbmNvbnN0IFZpZGVvSnNCdXR0b25DbGFzcyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdNZW51QnV0dG9uJyk7XG5jb25zdCBWaWRlb0pzTWVudUNsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ01lbnUnKTtcbmNvbnN0IERvbSA9IHZpZGVvanMuZG9tO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuY2xhc3MgUmVhbFRpbWVSZWNvcmRUYWJIbHNKcyBleHRlbmRzIFZpZGVvSnNDb21wb25lbnRDbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0UXVhbGl0eUxldmVscygpIHtcbiAgICBjb25zdCBobHNqcyA9IHRoaXMucGxheWVyKCkuaGxzSlNMaXZlUmVjb3JkKCkuZ2V0SGxzSnMoKTtcbiAgICBjb25zdCBsZXZlbHMgPSBobHNqcy5sZXZlbHMgfHwgW107XG4gICAgY29uc3QgY3VycmVudExldmVsID0gaGxzanMuY3VycmVudExldmVsIHx8IDA7XG4gICAgcmV0dXJuIGxldmVscy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBpdGVtLmhlaWdodCArICdwJyxcbiAgICAgICAgdmFsdWU6IGluZGV4LFxuICAgICAgICBzZWxlY3RlZDogaW5kZXggPT09IGN1cnJlbnRMZXZlbCxcbiAgICAgIH1cbiAgICApKS5zb3J0KChjdXJyZW50LCBuZXh0KSA9PiB7XG4gICAgICBpZiAoKHR5cGVvZiBjdXJyZW50ICE9PSAnb2JqZWN0JykgfHwgKHR5cGVvZiBuZXh0ICE9PSAnb2JqZWN0JykpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQudmFsdWUgPCBuZXh0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50LnZhbHVlID4gbmV4dC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRWwoKSB7XG4gICAgY29uc3QgZWxlbSA9IHN1cGVyLmNyZWF0ZUVsKFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy10YWItcmVhbHRpbWUtcmVjb3JkJyxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJIZWFkKCkpO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJRdWFsaXR5U2VsZWN0b3IoKSk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckJ1dHRvbigpKTtcblxuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgcmVuZGVySGVhZCgpIHtcbiAgICByZXR1cm4gRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBpbm5lckhUTUw6IFwiPHA+UmVhbC10aW1lIHJlY29yZGluZyBhbGxvd3MgeW91IHRvIHJlY29yZCBhIGZyYWdtZW50IG9mIHRoZSBwcm9ncmFtIHlvdSBhcmUgd2F0Y2hpbmcuIFwiICtcbiAgICAgICAgXCJSZWNvcmRpbmcgd2lsbCBiZSBkb25lIHVudGlsIHRoZSByZWNvcmRpbmcgc3RvcHMsIHRoZSByZWNvcmRpbmcgdGltZSBsaW1pdCBpcyBleGNlZWRlZCBvciB0aGUgdGFiIGlzIGNsb3NlZC5cIiArXG4gICAgICAgIFwiVG8gc3RhcnQgcmVjb3JkaW5nLCBzZWxlY3QgeW91ciBwcmVmZXJyZWQgcXVhbGl0eSBhbmQgY2xpY2sgPHN0cm9uZz5cXFwic3RhcnQgcmVjb3JkaW5nXFxcIjwvc3Ryb25nPi48L3A+XCIgK1xuICAgICAgICBcIjxwPllvdXIgY3VycmVudCByZWNvcmRpbmcgdGltZSBsaW1pdCBpcyA2MCBtaW4uPC9wPlwiXG4gICAgfSlcbiAgfVxuXG5cbiAgcmVuZGVyUXVhbGl0eVNlbGVjdG9yKCkge1xuICAgIGNvbnN0IGVsZW0gPSBEb20uY3JlYXRlRWwoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXRhYi1xdWFsaXR5LXNlbGVjdCB2anMtaGxzanMtZm9ybS1ncm91cCcsXG4gICAgICB9LFxuICAgICk7XG4gICAgY29uc3QgdXVpZCA9IGZhY2VVVUlEKCd2anMtaGxzLXF1YWxpdHktc2VsZWN0Jyk7XG5cbiAgICBlbGVtLmFwcGVuZENoaWxkKFxuICAgICAgRG9tLmNyZWF0ZUVsKCdsYWJlbCcsIHtcbiAgICAgICAgZm9yOiB1dWlkLFxuICAgICAgICBpbm5lclRleHQ6ICdRdWFsaXR5JyxcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLWZvcm0tbGFiZWwnXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnF1YWxpdHlTZWxlY3QgPSBEb20uY3JlYXRlRWwoJ3NlbGVjdCcsIHtcbiAgICAgIGlkOiB1dWlkLFxuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLWZvcm0taW5wdXQnXG4gICAgfSk7XG5cbiAgICBjb25zdCBsZXZlbHMgPSB0aGlzLmdldFF1YWxpdHlMZXZlbHMoKTtcblxuICAgIGxldmVscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLnF1YWxpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoXG4gICAgICAgIERvbS5jcmVhdGVFbCgnb3B0aW9uJywge1xuICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxuICAgICAgICAgIHRleHQ6IGl0ZW0ubGFiZWwsXG4gICAgICAgICAgc2VsZWN0ZWQ6IGl0ZW0uc2VsZWN0ZWRcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBpZihpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMucXVhbGl0eVNlbGVjdC52YWx1ZSA9IGl0ZW0udmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBlbGVtLmFwcGVuZENoaWxkKHRoaXMucXVhbGl0eVNlbGVjdCk7XG5cbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHJlbmRlckJ1dHRvbigpIHtcbiAgICBjb25zdCBob2xkZXIgPSBEb20uY3JlYXRlRWwoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLWZvcm0tZ3JvdXAnLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBob2xkZXIuYXBwZW5kQ2hpbGQoRG9tLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtYnV0dG9uIHZqcy1obHNqcy1zdGFydC1yZWNvcmQnLFxuICAgICAgaW5uZXJUZXh0OiAnU3RhcnQgUmVjb3JkaW5nJyxcbiAgICAgIG9uY2xpY2s6IHRoaXMuaGFuZGxlU3RhcnRSZWNvcmRpbmcuYmluZCh0aGlzKVxuICAgIH0pKTtcblxuICAgIHJldHVybiBob2xkZXI7XG4gIH1cblxuICBoYW5kbGVTdGFydFJlY29yZGluZygpIHtcbiAgICB0aGlzLnBsYXllcigpLmhsc0pTTGl2ZVJlY29yZCgpLnN0YXJ0UmVhbHRpbWVSZWNvcmQodGhpcy5xdWFsaXR5U2VsZWN0LnZhbHVlKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWxUaW1lUmVjb3JkVGFiSGxzSnM7XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5pbXBvcnQgUmVhbFRpbWVSZWNvcmRUYWJIbHNKcyBmcm9tIFwiLi9SZWFsVGltZVJlY29yZFRhYkhsc0pzXCI7XG5pbXBvcnQgQmFja2dyb3VuZFJlY29yZFRhYkhsc0pzIGZyb20gXCIuL0JhY2tncm91bmRSZWNvcmRUYWJIbHNKc1wiO1xuXG5jb25zdCBWaWRlb0pzQ29tcG9uZW50Q2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmNsYXNzIFRhYnNIbHNKcyBleHRlbmRzIFZpZGVvSnNDb21wb25lbnRDbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBjb25zb2xlLmdyb3VwKFwiVGFic0hsc0pzLmpzOjIwIC0gY29uc3RydWN0b3JcIik7XG4gICAgY29uc29sZS5sb2cocGxheWVyKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKCkge1xuICAgIGNvbnN0IHRhYnNIb2xkZXIgPSBzdXBlci5jcmVhdGVFbChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdmVydGljYWwtdGFicycsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICB0YWJzSG9sZGVyLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyTmF2KCkpO1xuXG4gICAgdGFic0hvbGRlci5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckJvZHkoKSk7XG5cbiAgICByZXR1cm4gdGFic0hvbGRlcjtcbiAgfVxuXG5cbiAgcmVuZGVyTmF2KCkge1xuICAgIGNvbnN0IG5hdkhvbGRlciA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2J1xuICAgIH0pO1xuICAgIGNvbnNvbGUuZ3JvdXAoXCJUYWJzSGxzSnMuanM6NjYgLSByZW5kZXJOYXZcIik7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgIG5hdkhvbGRlci5hcHBlbmRDaGlsZChcbiAgICAgIERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtdmVydGljYWwtdGFicy1uYXYtZWxlbSBhY3RpdmUnLFxuICAgICAgICBpbm5lckhUTUw6ICdSZWFsdGltZScsXG4gICAgICAgIG9uY2xpY2s6ICgpID0+IHt0aGlzLmhhbmRsZUNsaWNrKDApfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgbmF2SG9sZGVyLmFwcGVuZENoaWxkKFxuICAgICAgRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1obHNqcy12ZXJ0aWNhbC10YWJzLW5hdi1lbGVtJyxcbiAgICAgICAgaW5uZXJIVE1MOiAnQmFja2dyb3VuZCcsXG4gICAgICAgIG9uY2xpY2s6ICgpID0+IHt0aGlzLmhhbmRsZUNsaWNrKDEpfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIG5hdkhvbGRlcjtcbiAgfVxuXG4gIHJlbmRlckJvZHkoKSB7XG4gICAgY29uc3QgYm9keUhvbGRlciA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtYm9keSdcbiAgICB9KTtcblxuICAgIHRoaXMucmVhbHRpbWVSZWNvcmQgPSBuZXcgUmVhbFRpbWVSZWNvcmRUYWJIbHNKcyh0aGlzLnBsYXllcl8sIHt9KTtcbiAgICBjb25zdCBlbGVtMSA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtZWxlbSBhY3RpdmUnXG4gICAgfSk7XG4gICAgZWxlbTEuYXBwZW5kQ2hpbGQodGhpcy5yZWFsdGltZVJlY29yZC5lbF8pO1xuICAgIGJvZHlIb2xkZXIuYXBwZW5kQ2hpbGQoZWxlbTEpO1xuXG4gICAgdGhpcy5iYWNrZ3JvdW5kUmVjb3JkID0gbmV3IEJhY2tncm91bmRSZWNvcmRUYWJIbHNKcyh0aGlzLnBsYXllcl8sIHt9KTtcbiAgICBjb25zdCBlbGVtMiA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtZWxlbSdcbiAgICB9KTtcbiAgICBlbGVtMi5hcHBlbmRDaGlsZCh0aGlzLmJhY2tncm91bmRSZWNvcmQuZWxfKTtcbiAgICBib2R5SG9sZGVyLmFwcGVuZENoaWxkKGVsZW0yKTtcblxuICAgIHJldHVybiBib2R5SG9sZGVyO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soaW5kZXgpIHtcbiAgICB0aGlzLiQkKCcudmpzLWhsc2pzLXZlcnRpY2FsLXRhYnMtbmF2LWVsZW0nKS5mb3JFYWNoKChlbGVtLCBlbGVtSW5kZXgpID0+IHtcbiAgICAgIGlmKGluZGV4ID09PSBlbGVtSW5kZXgpIHtcbiAgICAgICAgRG9tLmFkZENsYXNzKGVsZW0sICdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIERvbS5yZW1vdmVDbGFzcyhlbGVtLCAnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy4kJCgnLnZqcy1obHNqcy12ZXJ0aWNhbC10YWJzLWVsZW0nKS5mb3JFYWNoKChlbGVtLCBlbGVtSW5kZXgpID0+IHtcbiAgICAgIGlmKGluZGV4ID09PSBlbGVtSW5kZXgpIHtcbiAgICAgICAgRG9tLmFkZENsYXNzKGVsZW0sICdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIERvbS5yZW1vdmVDbGFzcyhlbGVtLCAnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNIbHNKcztcbiIsImltcG9ydCB7UGxheWxpc3RNb2RlbH0gZnJvbSBcIi4uL01vZGVscy9QbGF5bGlzdFwiO1xuaW1wb3J0IHtub3dJbkZvcm1hdFltZEhpc30gZnJvbSBcIi4uL3V0aWxzL2RhdGVcIjtcbmltcG9ydCBYaHJMb2FkZXIgZnJvbSBcIi4uL3V0aWxzL3hoci1sb2FkZXJcIjtcblxuY29uc3QgSGxzID0gd2luZG93LkhscztcblxuY2xhc3MgUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocGx1Z2luKSB7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgdGhpcy5tYW5pZmVzdExpc3RlbmVyID0gbnVsbDtcbiAgICB0aGlzLmxldmVsTGlzdGVuZXIgPSBudWxsO1xuICAgIHRoaXMuZnJhZ21lbnRMaXN0ZW5lciA9IG51bGw7XG4gICAgdGhpcy5yZWNvcmRTdGFydGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnBsYXlsaXN0ID0gbnVsbDtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgaGxzanMgPSB0aGlzLnBsdWdpbi5nZXRIbHNKcygpO1xuICAgIC8vIHRoaXMubWFuaWZlc3RMaXN0ZW5lciA9IGhsc2pzLm9uKEhscy5FdmVudHMuTUFOSUZFU1RfTE9BREVELCB0aGlzLmhsc01hbmlmZXN0TG9hZGVkKTtcbiAgICAvLyB0aGlzLmxldmVsTGlzdGVuZXIgPSBobHNqcy5vbihIbHMuRXZlbnRzLkxFVkVMX0xPQURFRCwgdGhpcy5obHNMZXZlbExvYWRlZCk7XG4gICAgdGhpcy5mcmFnbWVudExpc3RlbmVyID0gaGxzanMub24oSGxzLkV2ZW50cy5GUkFHX0xPQURFRCwgdGhpcy5obHNGcmFnbWVudExvYWRlZCk7XG4gIH1cblxuICBzdGFydFJlY29yZCgpIHtcbiAgICB0aGlzLnBsYXlsaXN0ID0gbnVsbDtcbiAgICB0aGlzLnJlY29yZFN0YXJ0ZWQgPSB0cnVlO1xuICB9XG5cbiAgc3RvcFJlY29yZCgpIHtcbiAgICB0aGlzLnJlY29yZFN0YXJ0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIGhsc01hbmlmZXN0TG9hZGVkID0gKGV2ZW50LCBkYXRhKSA9PiB7XG4gIC8vICAgY29uc29sZS5ncm91cChcIlJlYWx0aW1lUmVjb3JkQ29udHJvbGxlci5qczoyNSAtIGhsc01hbmlmZXN0TG9hZGVkXCIpO1xuICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAvLyAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgLy8gfTtcbiAgLy9cbiAgLy9cbiAgLy8gaGxzTGV2ZWxMb2FkZWQgPSAoZXZlbnQsIGRhdGEpID0+IHtcbiAgLy8gICBjb25zb2xlLmdyb3VwKFwiUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyLmpzOjI1IC0gaGxzTGV2ZWxMb2FkZWRcIik7XG4gIC8vICAgY29uc29sZS5sb2coZGF0YSk7XG4gIC8vICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAvLyB9O1xuXG4gIHNhdmVGcmFnbWVudChmcmFnKSB7XG4gICAgaWYodGhpcy5wbGF5bGlzdCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5pbml0UGxheWxpc3QoZnJhZy5sZXZlbCk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5wbGF5bGlzdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBYaHJMb2FkZXIoKTtcbiAgICBjb25zdCB1cmwgPSBmcmFnLnVybDtcbiAgICBjb25zdCBsb2FkZXJDb250ZXh0ID0ge1xuICAgICAgdXJsLFxuICAgICAgZnJhZzogdGhpcy5wbGF5bGlzdC5hZGRGcmFnbWVudChmcmFnLmR1cmF0aW9uLCB1cmwpLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxuICAgICAgcHJvZ3Jlc3NEYXRhOiBmYWxzZSxcbiAgICAgIGxvYWRlclxuICAgIH07XG4gICAgY29uc3QgbG9hZGVyQ29uZmlnID0ge1xuICAgICAgdGltZW91dDogNjAsXG4gICAgICBtYXhSZXRyeTogMCxcbiAgICAgIHJldHJ5RGVsYXk6IDAsXG4gICAgICBtYXhSZXRyeURlbGF5OiAzXG4gICAgfTtcblxuICAgIGNvbnN0IGxvYWRlckNhbGxiYWNrcyA9IHtcbiAgICAgIG9uU3VjY2VzczogdGhpcy5mcmFnbWVudExvYWRlZCxcbiAgICAgIC8vIG9uRXJyb3I6IHRoaXMubG9hZGVycm9yLmJpbmQodGhpcyksXG4gICAgICAvLyBvblRpbWVvdXQ6IHRoaXMubG9hZHRpbWVvdXQuYmluZCh0aGlzKSxcbiAgICAgIC8vIG9uUHJvZ3Jlc3M6IHRoaXMubG9hZHByb2dyZXNzLmJpbmQodGhpcylcbiAgICB9O1xuICAgIGxvYWRlci5sb2FkKGxvYWRlckNvbnRleHQsIGxvYWRlckNvbmZpZywgbG9hZGVyQ2FsbGJhY2tzKTtcbiAgfVxuXG4gIGluaXRQbGF5bGlzdChsZXZlbEluZGV4KSB7XG4gICAgY29uc3QgaGxzanMgPSB0aGlzLnBsdWdpbi5nZXRIbHNKcygpO1xuICAgIGNvbnN0IGxldmVsID0gaGxzanMubGV2ZWxzW2xldmVsSW5kZXhdO1xuICAgIGlmKCFsZXZlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucGxheWxpc3QgPSBuZXcgUGxheWxpc3RNb2RlbCh7XG4gICAgICBpZDogJ3JlY29yZC0nICsgbm93SW5Gb3JtYXRZbWRIaXMoKSxcbiAgICAgIHdpZHRoOiBsZXZlbC53aWR0aCxcbiAgICAgIGhlaWdodDogbGV2ZWwuaGVpZ2h0LFxuICAgICAgdGFyZ2V0ZHVyYXRpb246IGxldmVsLmRldGFpbHMudGFyZ2V0ZHVyYXRpb25cbiAgICB9KTtcbiAgfVxuXG4gIGZyYWdtZW50TG9hZGVkID0gKHJlc3BvbnNlLCBzdGF0cywgY29udGV4dCwgbmV0d29ya0RldGFpbHMgPSBudWxsKSA9PiB7XG4gICAgY29udGV4dC5sb2FkZXIuZGVzdHJveSgpO1xuICAgIGNvbnRleHQubG9hZGVyID0gbnVsbDtcblxuICAgIHRoaXMucGx1Z2luLnN0b3JhZ2VDb250cm9sbGVyLnNhdmVGcmFnbWVudChjb250ZXh0LmZyYWcsIHJlc3BvbnNlLmRhdGEsIHN0YXRzKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucGxheWxpc3QuZnJhZ21lbnRTYXZlZChjb250ZXh0LmZyYWcpO1xuICAgICAgdGhpcy5wbHVnaW4uc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZVBsYXlsaXN0KHRoaXMucGxheWxpc3QpO1xuICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZChcIlJlYWx0aW1lUmVjb3JkQ29udHJvbGxlci5qczoxMDQgLSBcIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXlsaXN0LnRvU3RyaW5nKCkpO1xuICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGhsc0ZyYWdtZW50TG9hZGVkID0gKGV2ZW50LCBkYXRhKSA9PiB7XG4gICAgaWYodGhpcy5yZWNvcmRTdGFydGVkKSB7XG4gICAgICB0aGlzLnNhdmVGcmFnbWVudChkYXRhLmZyYWcpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyO1xuIiwiY29uc3QgREJfVkVSU0lPTiA9IDE7XG5jb25zdCBTVE9SQUdFX1dSSVRFX01PREUgPSAncmVhZHdyaXRlJztcbmNvbnN0IFNUT1JBR0VfUkVBRF9NT0RFID0gJ3JlYWRvbmx5JztcblxuY2xhc3MgU3RvcmFnZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihwbHVnaW4pIHtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLmRiID0gbnVsbDtcbiAgfVxuXG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBvcGVuUmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKHRoaXMucGx1Z2luLm9wdGlvbnMuc3RvcmFnZURiTmFtZSwgREJfVkVSU0lPTik7XG4gICAgb3BlblJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuICAgICAgdGhpcy5kYiA9IG9wZW5SZXF1ZXN0LnJlc3VsdDtcbiAgICAgIHRoaXMuZGIuY3JlYXRlT2JqZWN0U3RvcmUodGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlUGxheWxpc3RzTmFtZSwge2tleVBhdGg6ICdpZCd9KTtcblxuICAgICAgY29uc3QgZnJhZ21lbnRzU3RvcmFnZSA9IHRoaXMuZGIuY3JlYXRlT2JqZWN0U3RvcmUodGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlRnJhZ21lbnRzTmFtZSwge2tleVBhdGg6ICd1dWlkJ30pO1xuICAgICAgZnJhZ21lbnRzU3RvcmFnZS5jcmVhdGVJbmRleCgncGxheWxpc3RJZCcsICdwbGF5bGlzdElkJywge3VuaXF1ZTogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgdGhpcy5kYiA9IG9wZW5SZXF1ZXN0LnJlc3VsdDtcbiAgICB9O1xuICB9XG5cbiAgY2hlY2tSZXF1aXJlbWVudHMoKSB7XG4gICAgcmV0dXJuICdpbmRleGVkREInIGluIHdpbmRvdztcbiAgfVxuXG4gIC8vVE9ETzogbmVlZCB0byBhZGQgZXJyb3IgcHJvY2Vzc2luZ1xuICBzYXZlRnJhZ21lbnQoZnJhZ21lbnQsIHBheWxvYWQsIHN0YXRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZih0aGlzLmRiID09PSBudWxsKSB7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdGhpcy5kYi50cmFuc2FjdGlvbih0aGlzLnBsdWdpbi5vcHRpb25zLnN0b3JhZ2VGcmFnbWVudHNOYW1lLCBTVE9SQUdFX1dSSVRFX01PREUpO1xuICAgICAgY29uc3Qgc3RvcmFnZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXMucGx1Z2luLm9wdGlvbnMuc3RvcmFnZUZyYWdtZW50c05hbWUpO1xuICAgICAgY29uc3QgcmVxdWVzdCA9IHN0b3JhZ2UuYWRkKHtcbiAgICAgICAgLi4uZnJhZ21lbnQsXG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIHN0YXRzXG4gICAgICB9KTtcblxuICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cChcImNhY2hlLWRyaXZlci5qczoxNyAtIHN0b3JlIC0gb25zdWNjZXNzXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0KTtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgfTtcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwKFwiY2FjaGUtZHJpdmVyLmpzOjE3IC0gc3RvcmUgLSBvbmVycm9yXCIpO1xuICAgICAgICAvLyBjb25zb2xlLndhcm4ocmVxdWVzdCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgIH07XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy9UT0RPOiBuZWVkIHRvIGFkZCBlcnJvciBwcm9jZXNzaW5nXG4gIHNhdmVQbGF5bGlzdChwbGF5bGlzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYodGhpcy5kYiA9PT0gbnVsbCkge1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXMuZGIudHJhbnNhY3Rpb24odGhpcy5wbHVnaW4ub3B0aW9ucy5zdG9yYWdlUGxheWxpc3RzTmFtZSwgU1RPUkFHRV9XUklURV9NT0RFKTtcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSh0aGlzLnBsdWdpbi5vcHRpb25zLnN0b3JhZ2VQbGF5bGlzdHNOYW1lKTtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yYWdlLnB1dChwbGF5bGlzdCk7XG5cbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXAoXCJjYWNoZS1kcml2ZXIuanM6MTcgLSBzdG9yZSAtIG9uc3VjY2Vzc1wiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgIH07XG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY29uc29sZS5ncm91cChcImNhY2hlLWRyaXZlci5qczoxNyAtIHN0b3JlIC0gb25lcnJvclwiKTtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKHJlcXVlc3QpO1xuICAgICAgICAvLyBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICB9O1xuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgUmVjU2V0dGluZ3NNb2RhbEhsc0pzIGZyb20gXCIuLi9Db21wb25lbnRzL1JlY1NldHRpbmdzTW9kYWxIbHNKc1wiO1xuXG5jbGFzcyBWaWV3Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHBsdWdpbikge1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuXG4gICAgdGhpcy5yZWNCdXR0b25Db21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMuc3RvcEJ1dHRvbkNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5yZWNTdGF0dXNCYXJDb21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMucHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLmxpdmVCdXR0b25Db21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMuY2FjaGVkQnV0dG9uQ29tcG9uZW50ID0gbnVsbDtcblxuXG4gICAgdGhpcy5yZWNTZXR0aW5nc01vZGFsQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHRoaXMubGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYyA9IFtdO1xuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250cm9sQmFyID0gdGhpcy5wbHVnaW4ucGxheWVyLmdldENoaWxkKCdDb250cm9sQmFyJyk7XG4gICAgY29uc3Qgc3BhY2UgPSBjb250cm9sQmFyLmFkZENoaWxkKCdDb21wb25lbnQnLCB7fSwgMik7XG4gICAgc3BhY2UuYWRkQ2xhc3MoJ3Zqcy1obHNqcy1jb250cm9scy1ob2xkZXInKTtcblxuICAgIHRoaXMucmVtb3ZlRGVmYXVsdENvbnRyb2xzKCk7XG5cbiAgICB0aGlzLmxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWMgPSB0aGlzLnBsdWdpbi5vcHRpb25zLmxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWMubWFwKChzZWxlY3RvcikgPT4ge1xuICAgICAgcmV0dXJuIGNvbnRyb2xCYXIuY2hpbGRyZW4oKS5maWx0ZXIoY29tcG9uZW50ID0+IGNvbXBvbmVudC5oYXNDbGFzcyhzZWxlY3RvcikpWzBdO1xuICAgIH0pLmZpbHRlcihjb21wb25lbnQgPT4gISFjb21wb25lbnQpO1xuXG4gICAgdGhpcy5jYWNoZWRCdXR0b25Db21wb25lbnQgPSBzcGFjZS5hZGRDaGlsZCgnQ2FjaGVkQnV0dG9uSGxzSnMnLCB7XG4gICAgICBjbGlja0hhbmRsZXI6IHRoaXMuYWN0aXZlTGl2ZU1vZGVcbiAgICB9LCAxKTtcbiAgICB0aGlzLmNhY2hlZEJ1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG5cbiAgICB0aGlzLmxpdmVCdXR0b25Db21wb25lbnQgPSBjb250cm9sQmFyLmFkZENoaWxkKCdMaXZlQnV0dG9uSGxzSnMnLCB7XG4gICAgICBjbGlja0hhbmRsZXI6IHRoaXMuYWN0aXZhdGVQcm9ncmVzc01vZGVcbiAgICB9LCAyKTtcbiAgICB0aGlzLmxpdmVCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuXG4gICAgdGhpcy5yZWNCdXR0b25Db21wb25lbnQgPSBzcGFjZS5hZGRDaGlsZCgnUmVjQnV0dG9uSGxzSnMnLCB7XG4gICAgICBjbGlja0hhbmRsZXI6IHRoaXMuc2hvd1JlY29yZFNldHRpbmdzXG4gICAgfSwgMSk7XG4gICAgdGhpcy5yZWNCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuXG4gICAgdGhpcy5zdG9wQnV0dG9uQ29tcG9uZW50ID0gY29udHJvbEJhci5hZGRDaGlsZCgnU3RvcEJ1dHRvbkhsc0pzJywge1xuICAgICAgY2xpY2tIYW5kbGVyOiB0aGlzLnBsdWdpbi5zdG9wUmVhbHRpbWVSZWNvcmRcbiAgICB9LCAxKTtcbiAgICB0aGlzLnN0b3BCdXR0b25Db21wb25lbnQuaGlkZSgpO1xuXG4gICAgdGhpcy5yZWNTdGF0dXNCYXJDb21wb25lbnQgPSBzcGFjZS5hZGRDaGlsZCgnUmVjU3RhdHVzQmFySGxzSnMnLCAxKTtcbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudC5oaWRlKCk7XG5cbiAgICB0aGlzLnByb2dyZXNzQ29udHJvbENvbXBvbmVudCA9IHNwYWNlLmFkZENoaWxkKCdQcm9ncmVzc0NvbnRyb2xIbHNKcycsIHt9LCAyKTtcbiAgICB0aGlzLnByb2dyZXNzQ29udHJvbENvbXBvbmVudC5oaWRlKCk7XG5cbiAgICB0aGlzLmFjdGl2ZUxpdmVNb2RlKCk7XG4gIH07XG5cbiAgcmVtb3ZlRGVmYXVsdENvbnRyb2xzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRyb2xCYXIgPSB0aGlzLnBsdWdpbi5wbGF5ZXIuZ2V0Q2hpbGQoJ0NvbnRyb2xCYXInKTtcbiAgICBjb250cm9sQmFyLnJlbW92ZUNoaWxkKCdQcm9ncmVzc0NvbnRyb2wnKTtcbiAgICBjb250cm9sQmFyLnJlbW92ZUNoaWxkKCdTZWVrVG9MaXZlJyk7XG4gICAgY29udHJvbEJhci5yZW1vdmVDaGlsZCgnTGl2ZURpc3BsYXknKTtcbiAgfTtcblxuICBhY3RpdmVMaXZlTW9kZSA9ICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zaG93T3RoZXJDb250cm9sKCk7XG4gICAgICB0aGlzLnNob3dMaXZlQ29udHJvbCgpO1xuICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3NDb250cm9sKCk7XG4gICAgICB0aGlzLmhpZGVSZWNDb250cm9sKCk7XG4gICAgICB0aGlzLnBsdWdpbi5wbGF5ZXIubGl2ZVRyYWNrZXIuc2Vla1RvTGl2ZUVkZ2UoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnBsdWdpbi5wbGF5ZXIubG9nLndhcm4oZS5tZXNzYWdlKVxuICAgIH1cbiAgfTtcblxuICBhY3RpdmF0ZVByb2dyZXNzTW9kZSA9ICgpID0+IHtcbiAgICBpZih0aGlzLnBsdWdpbi5zdGF0ZS5yZWNvcmRJblByb2Nlc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zaG93T3RoZXJDb250cm9sKCk7XG4gICAgdGhpcy5zaG93UHJvZ3Jlc3NDb250cm9sKCk7XG4gICAgdGhpcy5oaWRlTGl2ZUNvbnRyb2woKTtcbiAgICB0aGlzLmhpZGVSZWNDb250cm9sKCk7XG4gIH07XG5cbiAgc2hvd1JlY29yZFNldHRpbmdzID0gKCkgPT4ge1xuICAgIHRoaXMucmVjU2V0dGluZ3NNb2RhbENvbXBvbmVudCA9IG5ldyBSZWNTZXR0aW5nc01vZGFsSGxzSnModGhpcy5wbHVnaW4ucGxheWVyLCB7XG5cbiAgICB9KTtcbiAgICB0aGlzLnBsdWdpbi5wbGF5ZXIuYWRkQ2hpbGQodGhpcy5yZWNTZXR0aW5nc01vZGFsQ29tcG9uZW50KTtcbiAgICB0aGlzLnJlY1NldHRpbmdzTW9kYWxDb21wb25lbnQub3BlbigpO1xuXG5cbiAgICBjb25zb2xlLmdyb3VwKFwicGx1Z2luLmpzOjEwOCAtIHNob3dSZWNvcmRTZXR0aW5nc1wiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgLy8gdGhpcy5hY3RpdmF0ZVJlY29yZE1vZGUoKTtcbiAgfTtcblxuICBhY3RpdmF0ZVJlY29yZE1vZGUgPSAoKSA9PiB7XG4gICAgdGhpcy5yZWNTZXR0aW5nc01vZGFsQ29tcG9uZW50LmNsb3NlKCk7XG4gICAgdGhpcy5oaWRlUHJvZ3Jlc3NDb250cm9sKCk7XG4gICAgdGhpcy5oaWRlTGl2ZUNvbnRyb2woKTtcbiAgICB0aGlzLmhpZGVPdGhlckNvbnRyb2woKTtcbiAgICB0aGlzLnNob3dSZWNDb250cm9sKCk7XG4gIH07XG5cbiAgc2hvd1JlY0NvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5wbHVnaW4ucGxheWVyLmFkZENsYXNzKCd2anMtaGxzanMtcmVjb3JkLXN0YXJ0ZWQnKTtcbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudC51cGRhdGVSZWNvcmRUaW1lKDApO1xuICAgIGxldCBhID0gMTtcbiAgICB0aGlzLnJlY29yZFVwZGF0ZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5yZWNTdGF0dXNCYXJDb21wb25lbnQudXBkYXRlUmVjb3JkVGltZShhKyspO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5zdG9wQnV0dG9uQ29tcG9uZW50LnNob3coKTtcbiAgICB0aGlzLnJlY1N0YXR1c0JhckNvbXBvbmVudC5zaG93KCk7XG4gIH07XG5cbiAgaGlkZVJlY0NvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5wbHVnaW4ucGxheWVyLnJlbW92ZUNsYXNzKCd2anMtaGxzanMtcmVjb3JkLXN0YXJ0ZWQnKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMucmVjb3JkVXBkYXRlSW50ZXJ2YWwpO1xuICAgIHRoaXMuc3RvcEJ1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG4gICAgdGhpcy5yZWNTdGF0dXNCYXJDb21wb25lbnQuaGlkZSgpO1xuICB9O1xuXG4gIHNob3dQcm9ncmVzc0NvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9ncmVzc0NvbnRyb2xDb21wb25lbnQuc2hvdygpO1xuICAgIHRoaXMuY2FjaGVkQnV0dG9uQ29tcG9uZW50LnNob3coKTtcbiAgfTtcblxuICBoaWRlUHJvZ3Jlc3NDb250cm9sID0gKCkgPT4ge1xuICAgIHRoaXMucHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50LmhpZGUoKTtcbiAgICB0aGlzLmNhY2hlZEJ1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG4gIH07XG5cbiAgaGlkZU90aGVyQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLmxpc3RPZkNvbnRyb2xzSGlkZGVuT25SZWMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50LmFkZENsYXNzKCd2anMtaGxzanMtbHItaGlkZGVuJykpO1xuICB9O1xuXG4gIHNob3dPdGhlckNvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5saXN0T2ZDb250cm9sc0hpZGRlbk9uUmVjLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudC5yZW1vdmVDbGFzcygndmpzLWhsc2pzLWxyLWhpZGRlbicpKTtcbiAgfTtcblxuXG4gIHNob3dMaXZlQ29udHJvbCA9ICgpID0+IHtcbiAgICB0aGlzLmxpdmVCdXR0b25Db21wb25lbnQuc2hvdygpO1xuICAgIHRoaXMucmVjQnV0dG9uQ29tcG9uZW50LnNob3coKTtcbiAgfTtcblxuICBoaWRlTGl2ZUNvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5saXZlQnV0dG9uQ29tcG9uZW50LmhpZGUoKTtcbiAgICB0aGlzLnJlY0J1dHRvbkNvbXBvbmVudC5oaWRlKCk7XG4gIH07XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld0NvbnRyb2xsZXI7XG4iLCJpbXBvcnQge2ZhY2VVVUlEfSBmcm9tIFwiLi4vdXRpbHMvdXVpZFwiO1xuXG5leHBvcnQgY2xhc3MgRnJhZ21lbnRNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKGZyYWdtZW50RGF0YSkge1xuICAgIHRoaXMuZHVyYXRpb24gPSBmcmFnbWVudERhdGEuZHVyYXRpb24gfHwgMDtcbiAgICB0aGlzLnVybCA9IGZyYWdtZW50RGF0YS51cmwgfHwgJyc7XG4gICAgdGhpcy5wbGF5bGlzdElkID0gZnJhZ21lbnREYXRhLnBsYXlsaXN0SWQgfHwgJ3RtcCc7XG4gICAgdGhpcy51dWlkID0gZmFjZVVVSUQodGhpcy5wbGF5bGlzdElkICsgJy0nICsgdGhpcy51cmwuc3BsaXQoJy8nKS5wb3AoKSk7XG4gICAgdGhpcy5zYXZlZCA9IGZyYWdtZW50RGF0YS5zYXZlZCB8fCBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtGcmFnbWVudE1vZGVsfSBmcm9tIFwiLi9GcmFnbWVudFwiO1xuXG5jb25zdCBjcmVhdGVQbGF5bGlzdEhlYWRlciA9ICh0YXJnZXRkdXJhdGlvbikgPT4ge1xuICByZXR1cm4gXCIjRVhUTTNVXFxuXCIgK1xuICAgIFwiI0VYVC1YLVZFUlNJT046NFxcblwiICtcbiAgICBcIiNFWFQtWC1UQVJHRVREVVJBVElPTjpcIiArIHRhcmdldGR1cmF0aW9uICsgXCJcXG5cIiArXG4gICAgXCIjRVhULVgtTUVESUEtU0VRVUVOQ0U6MFxcblwiO1xufTtcbmNvbnN0IGFkZFBsYXlsaXN0RnJhZ21lbnQgPSAoZHVyYWN0aW9uLCB1cmwpID0+IHtcbnJldHVybiBcIiNFWFRJTkY6XCIgKyBkdXJhY3Rpb24gKyBcIixcXG5cIiArXG4gIHVybCArIFwiXFxuXCI7XG59O1xuY29uc3QgY3JlYXRlUGxheWxpc3RGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiBcIiNFWFQtWC1FTkRMSVNUXFxuXCI7XG59O1xuXG5cbmV4cG9ydCBjbGFzcyBQbGF5bGlzdE1vZGVsIHtcbiAgY29uc3RydWN0b3IocGxheWxpc3REYXRhKSB7XG4gICAgdGhpcy5pZCA9IHBsYXlsaXN0RGF0YS5pZCB8fCAnJztcbiAgICB0aGlzLndpZHRoID0gcGxheWxpc3REYXRhLndpZHRoIHx8IDM4NDtcbiAgICB0aGlzLmhlaWdodCA9IHBsYXlsaXN0RGF0YS5oZWlnaHQgfHwgMzg0O1xuICAgIHRoaXMuZnJhZ21lbnRzID0gcGxheWxpc3REYXRhLmZyYWdtZW50cyB8fCBbXTtcbiAgICB0aGlzLnRhcmdldGR1cmF0aW9uID0gcGxheWxpc3REYXRhLnRhcmdldGR1cmF0aW9uIHx8IDA7XG4gIH1cblxuICBhZGRGcmFnbWVudChkdXJhdGlvbiwgdXJsKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRnJhZ21lbnRNb2RlbCh7ZHVyYXRpb24sIHVybH0pO1xuICAgIHRoaXMuZnJhZ21lbnRzLnB1c2goZnJhZ21lbnQpO1xuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfVxuXG4gIGZyYWdtZW50U2F2ZWQoZnJhZ21lbnQpIHtcbiAgICB0aGlzLmZyYWdtZW50cyA9IHRoaXMuZnJhZ21lbnRzLm1hcCgoZnJhZykgPT4ge1xuICAgICAgaWYoZnJhZy51dWlkID09PSBmcmFnbWVudC51dWlkKSB7XG4gICAgICAgIGZyYWcuc2F2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZyYWc7XG4gICAgfSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBjcmVhdGVQbGF5bGlzdEhlYWRlcih0aGlzLnRhcmdldGR1cmF0aW9uKSArXG4gICAgICAodGhpcy5mcmFnbWVudHMuZmlsdGVyKGZyYWdtZW50ID0+IChmcmFnbWVudC5zYXZlZCkpXG4gICAgICAgIC5tYXAoZnJhZ21lbnQgPT4gKGFkZFBsYXlsaXN0RnJhZ21lbnQoZnJhZ21lbnQuZHVyYXRpb24sIGZyYWdtZW50LnV1aWQpKSkuam9pbignJykpICtcbiAgICAgIGNyZWF0ZVBsYXlsaXN0Rm9vdGVyKCk7XG4gIH1cbn1cbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuY29uc3QgVmlkZW9Kc0J1dHRvbkNsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWNoZWRCdXR0b25IbHNKcyBleHRlbmRzIFZpZGVvSnNCdXR0b25DbGFzcyB7XG4gIFxuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKSk7XG5cbiAgICBjb25zb2xlLmdyb3VwKFwiQ2FjaGVkQnV0dG9uSGxzSnMuanM6MjMgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gIH1cblxuICBjcmVhdGVFbCh0YWcsIHByb3BzID0ge30sIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIHRoaXMubm9uSWNvbkNvbnRyb2wgPSB0cnVlO1xuXG4gICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIC8vIGNsYXNzTmFtZTogJ3Zqcy1saXZlLWRpc3BsYXknLFxuICAgICAgLy8gaW5uZXJIVE1MOiAnRFZSJyxcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1zZWVrLXRvLWxpdmUtY29udHJvbCcsXG4gICAgICBpbm5lckhUTUw6ICc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cInZqcy1pY29uLXBsYWNlaG9sZGVyXCI+PC9zcGFuPkxJVkUnLFxuICAgIH0sIHByb3BzKTtcblxuICAgIGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICdhcmlhLWxpdmUnOiAnT24nXG4gICAgfSwgYXR0cmlidXRlcyk7XG5cbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlRWwodGFnLCBwcm9wcywgYXR0cmlidXRlcyk7XG4gIH1cblxuICBjcmVhdGVDb250cm9sVGV4dEVsKGVsKSB7XG4gICAgdGhpcy5jb250cm9sVGV4dF8gPSAnU3RyZWFtIFR5cGUnO1xuICAgIHN1cGVyLmNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuY29uc3QgVmlkZW9Kc0J1dHRvbkNsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlQnV0dG9uSGxzSnMgZXh0ZW5kcyBWaWRlb0pzQnV0dG9uQ2xhc3Mge1xuXG4gIC8qKlxuICAgKiBCdXR0b24gY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSB2aWRlb2pzIHBsYXllciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKSk7XG5cbiAgICBjb25zb2xlLmdyb3VwKFwiTGl2ZUJ1dHRvbkhsc0pzLmpzOjI1IC0gY29uc3RydWN0b3JcIik7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICB9XG5cbiAgY3JlYXRlRWwodGFnLCBwcm9wcyA9IHt9LCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICB0aGlzLm5vbkljb25Db250cm9sID0gdHJ1ZTtcblxuICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICd2anMtY29udHJvbCB2anMtc2Vlay10by1saXZlLWNvbnRyb2wgdmpzLWF0LWxpdmUtZWRnZScsXG4gICAgICBpbm5lckhUTUw6ICc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cInZqcy1pY29uLXBsYWNlaG9sZGVyXCI+PC9zcGFuPkxJVkUnLFxuICAgIH0sIHByb3BzKTtcblxuICAgIGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICdhcmlhLWxpdmUnOiAnb2ZmJ1xuICAgIH0sIGF0dHJpYnV0ZXMpO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKHRhZywgcHJvcHMsIGF0dHJpYnV0ZXMpO1xuICB9XG5cbiAgY3JlYXRlQ29udHJvbFRleHRFbChlbCkge1xuICAgIHRoaXMuY29udHJvbFRleHRfID0gJ1N0cmVhbSBUeXBlJztcbiAgICBzdXBlci5jcmVhdGVDb250cm9sVGV4dEVsKGVsKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3B0aW9uc18uY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbmNvbnN0IFZpZGVvSnNQcm9ncmVzc0NvbnRyb2xDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnUHJvZ3Jlc3NDb250cm9sJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuXG4vKipcbiAqIEV4dGVuZCB2anMgYnV0dG9uIGNsYXNzIGZvciBxdWFsaXR5IGJ1dHRvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3NDb250cm9sSGxzSnMgZXh0ZW5kcyBWaWRlb0pzUHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcbiAgICBjb25zb2xlLmdyb3VwKFwiUHJvZ3Jlc3NDb250cm9sSGxzSnMuanM6MTMgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gIH1cbn1cbiIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuY29uc3QgVmlkZW9Kc0J1dHRvbkNsYXNzID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xuY29uc3QgRG9tID0gdmlkZW9qcy5kb207XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRXh0ZW5kIHZqcyBidXR0b24gY2xhc3MgZm9yIHF1YWxpdHkgYnV0dG9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNCdXR0b25IbHNKcyBleHRlbmRzIFZpZGVvSnNCdXR0b25DbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpKTtcblxuICAgIGNvbnNvbGUuZ3JvdXAoXCJSZWNCdXR0b25IbHNKcy5qczoyNSAtIGNvbnN0cnVjdG9yXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgfVxuXG4gIGNyZWF0ZUVsKHRhZywgcHJvcHMgPSB7fSwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgdGhpcy5ub25JY29uQ29udHJvbCA9IHRydWU7XG5cbiAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWNvbnRyb2wgdmpzLXNlZWstdG8tbGl2ZS1jb250cm9sJyxcbiAgICAgIGlubmVySFRNTDogJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwidmpzLWljb24tcGxhY2Vob2xkZXJcIj48L3NwYW4+UkVDJyxcbiAgICB9LCBwcm9wcyk7XG5cbiAgICBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYXJpYS1saXZlJzogJ09uJ1xuICAgIH0sIGF0dHJpYnV0ZXMpO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKHRhZywgcHJvcHMsIGF0dHJpYnV0ZXMpO1xuICB9XG5cbiAgY3JlYXRlQ29udHJvbFRleHRFbChlbCkge1xuICAgIHRoaXMuY29udHJvbFRleHRfID0gJ1N0YXJ0IFJlY29yZCc7XG4gICAgc3VwZXIuY3JlYXRlQ29udHJvbFRleHRFbChlbCk7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuaW1wb3J0IGZvcm1hdFRpbWUgZnJvbSAnLi4vdXRpbHMvZm9ybWF0LXRpbWUnO1xuXG5jb25zdCBWaWRlb0pzQ29tcG9uZW50Q2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY1N0YXR1c0Jhckhsc0pzIGV4dGVuZHMgVmlkZW9Kc0NvbXBvbmVudENsYXNzIHtcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gdmlkZW9qcyBwbGF5ZXIgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucykpO1xuICB9XG5cbiAgY3JlYXRlRWwoKSB7XG4gICAgdGhpcy5ub25JY29uQ29udHJvbCA9IHRydWU7XG4gICAgY29uc3QgZWxlbSA9IHN1cGVyLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICd2anMtY29udHJvbCB2anMtaGxzanMtbHItcmVjLXN0YXR1cy1iYXInLFxuICAgICAgaW5uZXJIVE1MOiAnPHNwYW4gY2xhc3M9XCJ2anMtaGxzanMtbHItcmVjLWluZGljYXRvclwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbWQtMTBcIj5maWJlcl9tYW51YWxfcmVjb3JkPC9pPlJFQzwvc3Bhbj4nXG4gICAgfSk7XG5cblxuICAgIHRoaXMucmVjb3JkZWRFbF8gPSBEb20uY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtbHItcmVjb3JkZWQnLFxuICAgICAgaW5uZXJUZXh0OiAnLS06LS06LS0nXG4gICAgfSwge1xuICAgICAgJ2FyaWEtbGl2ZSc6ICdvZmYnLFxuICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgIH0pO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQodGhpcy5yZWNvcmRlZEVsXyk7XG5cbiAgICBlbGVtLmFwcGVuZENoaWxkKFxuICAgICAgRG9tLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtaGxzanMtbHItZGl2aWRlcicsXG4gICAgICAgIGlubmVyVGV4dDogJy8nXG4gICAgICB9LCB7XG4gICAgICAgICdhcmlhLWxpdmUnOiAnb2ZmJyxcbiAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5yZWNvcmRMZWZ0RWxfID0gRG9tLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgY2xhc3NOYW1lOiAndmpzLWhsc2pzLWxyLXJlY29yZC1sZWZ0JyxcbiAgICAgIGlubmVyVGV4dDogJy0tOi0tOi0tJ1xuICAgIH0sIHtcbiAgICAgICdhcmlhLWxpdmUnOiAnb2ZmJyxcbiAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcbiAgICB9KTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKHRoaXMucmVjb3JkTGVmdEVsXyk7XG5cbiAgICB0aGlzLnVwZGF0ZVJlY29yZFRpbWUoMCk7XG4gICAgdGhpcy51cGRhdGVSZWNvcmRMZWZ0VGltZSg2MCAqIDYwKTtcbiAgICByZXR1cm4gZWxlbTtcbiAgfTtcblxuICB1cGRhdGVSZWNvcmRUaW1lKHRpbWUpIHtcbiAgICBpZih0aGlzLnJlY29yZGVkRWxfKSB7XG4gICAgICB0aGlzLnJlY29yZGVkRWxfLmlubmVyVGV4dCA9IGZvcm1hdFRpbWUodGltZSk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZVJlY29yZExlZnRUaW1lKHRpbWUpIHtcbiAgICBpZih0aGlzLnJlY29yZExlZnRFbF8pIHtcbiAgICAgIHRoaXMucmVjb3JkTGVmdEVsXy5pbm5lclRleHQgPSBmb3JtYXRUaW1lKHRpbWUpO1xuICAgIH1cbiAgfTtcblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMucmVjb3JkZWRFbF8gPSBudWxsO1xuICAgIHRoaXMucmVjb3JkTGVmdEVsXyA9IG51bGw7XG5cbiAgICBzdXBlci5kaXNwb3NlKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBWaWRlb0pzQnV0dG9uQ2xhc3MgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XG5jb25zdCBEb20gPSB2aWRlb2pzLmRvbTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBFeHRlbmQgdmpzIGJ1dHRvbiBjbGFzcyBmb3IgcXVhbGl0eSBidXR0b24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3BCdXR0b25IbHNKcyBleHRlbmRzIFZpZGVvSnNCdXR0b25DbGFzcyB7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIHZpZGVvanMgcGxheWVyIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpKTtcblxuICAgIGNvbnNvbGUuZ3JvdXAoXCJTdG9wQnV0dG9uSGxzSnMuanM6MjUgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gIH1cblxuICBjcmVhdGVFbCh0YWcsIHByb3BzID0ge30sIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIHRoaXMubm9uSWNvbkNvbnRyb2wgPSBmYWxzZTtcblxuICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICd2anMtY29udHJvbCB2anMtaGxzanMtbHItc3RvcCcsXG4gICAgICBpbm5lckhUTUw6ICc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c3RvcDwvaT4nLFxuICAgIH0sIHByb3BzKTtcblxuICAgIHJldHVybiBzdXBlci5jcmVhdGVFbCh0YWcsIHByb3BzLCBhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2xUZXh0RWwoZWwpIHtcbiAgICB0aGlzLmNvbnRyb2xUZXh0XyA9ICdTdG9wIFJlY29yZCc7XG4gICAgc3VwZXIuY3JlYXRlQ29udHJvbFRleHRFbChlbCk7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnNfLmNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vcHRpb25zXy5jbGlja0hhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0ICcuL3BsdWdpbi5zY3NzJztcbmltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcbmNvbnN0IFBsdWdpbiA9IHZpZGVvanMuZ2V0UGx1Z2luKCdwbHVnaW4nKTtcbmltcG9ydCB7dmVyc2lvbiBhcyBWRVJTSU9OfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IFByb2dyZXNzQ29udHJvbEhsc0pzIGZyb20gXCIuL2NvbXBvbmVudHMvUHJvZ3Jlc3NDb250cm9sSGxzSnNcIjtcbmltcG9ydCBMaXZlQnV0dG9uSGxzSnMgZnJvbSBcIi4vY29tcG9uZW50cy9MaXZlQnV0dG9uSGxzSnNcIjtcbmltcG9ydCBDYWNoZWRCdXR0b25IbHNKcyBmcm9tIFwiLi9jb21wb25lbnRzL0NhY2hlZEJ1dHRvbkhsc0pzXCI7XG5pbXBvcnQgUmVjQnV0dG9uSGxzSnMgZnJvbSBcIi4vY29tcG9uZW50cy9SZWNCdXR0b25IbHNKc1wiO1xuaW1wb3J0IFN0b3BCdXR0b25IbHNKcyBmcm9tIFwiLi9jb21wb25lbnRzL1N0b3BCdXR0b25IbHNKc1wiO1xuaW1wb3J0IFJlY1N0YXR1c0Jhckhsc0pzIGZyb20gXCIuL2NvbXBvbmVudHMvUmVjU3RhdHVzQmFySGxzSnNcIjtcbmltcG9ydCBWaWV3Q29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVycy9WaWV3Q29udHJvbGxlclwiO1xuaW1wb3J0IFN0b3JhZ2VDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJzL1N0b3JhZ2VDb250cm9sbGVyXCI7XG5pbXBvcnQgUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJzL1JlYWx0aW1lUmVjb3JkQ29udHJvbGxlclwiO1xuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgbGlzdE9mQ29udHJvbHNIaWRkZW5PblJlYzogWyd2anMtcGxheS1jb250cm9sJywgJ3Zqcy1xdWFsaXR5LXNlbGVjdG9yJ10sXG4gIHN0b3JhZ2VEYk5hbWU6ICd2anMtaGxzanMtbHInLFxuICBzdG9yYWdlUGxheWxpc3RzTmFtZTogJ3BsYXlsaXN0cycsXG4gIHN0b3JhZ2VGcmFnbWVudHNOYW1lOiAnZnJhZ21lbnRzJyxcbn07XG5cbmNsYXNzIEhsc0pTTGl2ZVJlY29yZFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG5cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IHZpZGVvanMubWVyZ2VPcHRpb25zKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLnN0b3JhZ2VDb250cm9sbGVyID0gbmV3IFN0b3JhZ2VDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMudmlld0NvbnRyb2xsZXIgPSBuZXcgVmlld0NvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy5yZWFsdGltZVJlY29yZENvbnRyb2xsZXIgPSBuZXcgUmVhbHRpbWVSZWNvcmRDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgcGxheWVyLm9uKCdwbGF5aW5nJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGlmKHRoaXMuc3RhdGUuaW5pdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe2luaXQ6IHRydWV9KTtcbiAgICBpZih0aGlzLmNoZWNrUmVxdWlyZW1lbnRzKCkpIHtcbiAgICAgIHRoaXMucGxheWVyLmFkZENsYXNzKCd2anMtaGxzLWxpdmUtcmVjb3JkJyk7XG4gICAgICB0aGlzLnBsYXllci5vbigncGF1c2UnLCB0aGlzLnZpZXdDb250cm9sbGVyLmFjdGl2YXRlUHJvZ3Jlc3NNb2RlKTtcbiAgICAgIHRoaXMudmlld0NvbnRyb2xsZXIuaW5pdCgpO1xuICAgICAgdGhpcy5zdG9yYWdlQ29udHJvbGxlci5pbml0KCk7XG4gICAgICB0aGlzLnJlYWx0aW1lUmVjb3JkQ29udHJvbGxlci5pbml0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvanMubG9nLndhcm4oJ0hsc0pTTGl2ZVJlY29yZFBsdWdpbjogY2Fubm90IGJlIGluaXRpYWxpemVkIGJlY2F1c2Ugb25lIG9yIG1vcmUgb2YgdGhlIHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldC4nKTtcbiAgICB9XG4gIH07XG5cbiAgY2hlY2tSZXF1aXJlbWVudHMgPSAoKSA9PiB7XG4gICAgaWYoIXRoaXMuZ2V0SGxzSnMoKSkge1xuICAgICAgdmlkZW9qcy5sb2cud2FybignSGxzSlNMaXZlUmVjb3JkUGx1Z2luOiBITFMuSlMgcGx1Z2luIG5vdCBmb3VuZC4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5zdG9yYWdlQ29udHJvbGxlci5jaGVja1JlcXVpcmVtZW50cygpKSB7XG4gICAgICB2aWRlb2pzLmxvZy53YXJuKCdIbHNKU0xpdmVSZWNvcmRQbHVnaW46IFRoaXMgYnJvd3NlciBkb2VzblxcJ3Qgc3VwcG9ydCBJbmRleGVkREIuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGdldEhsc0pzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnBsYXllci50ZWNoKHsgSVdpbGxVc2VUaGlzSW5QbHVnaW46IHRydWUgfSkuc291cmNlSGFuZGxlcl8uaGxzO1xuICB9O1xuXG4gIHN0YXJ0UmVhbHRpbWVSZWNvcmQobGV2ZWxJZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVjb3JkSW5Qcm9jZXNzOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmdldEhsc0pzKCkuY3VycmVudExldmVsID0gbGV2ZWxJZCAqIDE7XG4gICAgdGhpcy52aWV3Q29udHJvbGxlci5hY3RpdmF0ZVJlY29yZE1vZGUoKTtcbiAgICB0aGlzLnJlYWx0aW1lUmVjb3JkQ29udHJvbGxlci5zdGFydFJlY29yZCgpO1xuXG4gICAgLy8gY29uc29sZS5ncm91cChcInBsdWdpbi5qczoyMDMgLSBzdGFydFJlYWx0aW1lUmVjb3JkXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIC8vIGNvbnNvbGUubG9nKGxldmVsSWQpO1xuICAgIC8vIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgfVxuXG4gIHN0b3BSZWFsdGltZVJlY29yZCA9ICgpID0+IHtcbiAgICB0aGlzLnJlYWx0aW1lUmVjb3JkQ29udHJvbGxlci5zdG9wUmVjb3JkKCk7XG4gICAgdGhpcy52aWV3Q29udHJvbGxlci5hY3RpdmVMaXZlTW9kZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVjb3JkSW5Qcm9jZXNzOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMuZ2V0SGxzSnMoKS5jdXJyZW50TGV2ZWwgPSAtMTtcbiAgfTtcblxuICBoYW5kbGVTdGF0ZUNoYW5nZWQoZSkge1xuXG4gIH1cbn1cblxuSGxzSlNMaXZlUmVjb3JkUGx1Z2luLlZFUlNJT04gPSBWRVJTSU9OO1xuXG5IbHNKU0xpdmVSZWNvcmRQbHVnaW4uZGVmYXVsdFN0YXRlID0ge1xuICByZWNvcmRBbGxvd2VkOiB0cnVlLFxuICByZWNvcmRJblByb2Nlc3M6IGZhbHNlLFxuICBpbml0OiBmYWxzZVxufTtcblxudmlkZW9qcy5yZWdpc3RlclBsdWdpbignaGxzSlNMaXZlUmVjb3JkJywgSGxzSlNMaXZlUmVjb3JkUGx1Z2luKTtcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ1Byb2dyZXNzQ29udHJvbEhsc0pzJywgUHJvZ3Jlc3NDb250cm9sSGxzSnMpO1xudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnTGl2ZUJ1dHRvbkhsc0pzJywgTGl2ZUJ1dHRvbkhsc0pzKTtcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ0NhY2hlZEJ1dHRvbkhsc0pzJywgQ2FjaGVkQnV0dG9uSGxzSnMpO1xudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnUmVjQnV0dG9uSGxzSnMnLCBSZWNCdXR0b25IbHNKcyk7XG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdTdG9wQnV0dG9uSGxzSnMnLCBTdG9wQnV0dG9uSGxzSnMpO1xudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnUmVjU3RhdHVzQmFySGxzSnMnLCBSZWNTdGF0dXNCYXJIbHNKcyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCBub3JtYWxpemUgPSAobnVtYmVyKSA9PiAobnVtYmVyIDwgMTAgPyAnMCcgKyBudW1iZXIgOiBudW1iZXIpO1xuXG5leHBvcnQgY29uc3QgdG9Gb3JtYXRZbWRIaXMgPSAoZGF0ZSwgc2VwYXJhdG9yKSA9PiB7XG4gIHJldHVybiBbXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICBub3JtYWxpemUoZGF0ZS5nZXREYXRlKCkpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldEhvdXJzKCkpLFxuICAgIG5vcm1hbGl6ZShkYXRlLmdldE1pbnV0ZXMoKSksXG4gICAgbm9ybWFsaXplKGRhdGUuZ2V0U2Vjb25kcygpKSxcbiAgXS5qb2luKHNlcGFyYXRvcik7XG59O1xuXG5leHBvcnQgY29uc3Qgbm93SW5Gb3JtYXRZbWRIaXMgPSAoc2VwYXJhdG9yID0gJy0nKSA9PiB7XG4gIHJldHVybiB0b0Zvcm1hdFltZEhpcyhuZXcgRGF0ZSgpLCBzZXBhcmF0b3IpO1xufTtcbiIsIi8qKlxuICogQGZpbGUgZm9ybWF0LXRpbWUuanNcbiAqIEBtb2R1bGUgZm9ybWF0LXRpbWVcbiAqL1xuXG4vKipcbiAqIEZvcm1hdCBzZWNvbmRzIGFzIGEgdGltZSBzdHJpbmcsIEg6TU06U1Mgb3IgTTpTUy4gU3VwcGx5aW5nIGEgZ3VpZGUgKGluXG4gKiBzZWNvbmRzKSB3aWxsIGZvcmNlIGEgbnVtYmVyIG9mIGxlYWRpbmcgemVyb3MgdG8gY292ZXIgdGhlIGxlbmd0aCBvZiB0aGVcbiAqIGd1aWRlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNlY29uZHNcbiAqICAgICAgICAgTnVtYmVyIG9mIHNlY29uZHMgdG8gYmUgdHVybmVkIGludG8gYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGd1aWRlXG4gKiAgICAgICAgIE51bWJlciAoaW4gc2Vjb25kcykgdG8gbW9kZWwgdGhlIHN0cmluZyBhZnRlclxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICAgICAgICAgVGltZSBmb3JtYXR0ZWQgYXMgSDpNTTpTUyBvciBNOlNTXG4gKi9cbmNvbnN0IGRlZmF1bHRJbXBsZW1lbnRhdGlvbiA9IGZ1bmN0aW9uKHNlY29uZHMsIGd1aWRlKSB7XG4gIHNlY29uZHMgPSBzZWNvbmRzIDwgMCA/IDAgOiBzZWNvbmRzO1xuICBsZXQgcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDYwKTtcbiAgbGV0IG0gPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCAlIDYwKTtcbiAgbGV0IGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcbiAgY29uc3QgZ20gPSBNYXRoLmZsb29yKGd1aWRlIC8gNjAgJSA2MCk7XG4gIGNvbnN0IGdoID0gTWF0aC5mbG9vcihndWlkZSAvIDM2MDApO1xuXG4gIC8vIGhhbmRsZSBpbnZhbGlkIHRpbWVzXG4gIGlmIChpc05hTihzZWNvbmRzKSB8fCBzZWNvbmRzID09PSBJbmZpbml0eSkge1xuICAgIC8vICctJyBpcyBmYWxzZSBmb3IgYWxsIHJlbGF0aW9uYWwgb3BlcmF0b3JzIChlLmcuIDwsID49KSBzbyB0aGlzIHNldHRpbmdcbiAgICAvLyB3aWxsIGFkZCB0aGUgbWluaW11bSBudW1iZXIgb2YgZmllbGRzIHNwZWNpZmllZCBieSB0aGUgZ3VpZGVcbiAgICBoID0gbSA9IHMgPSAnLSc7XG4gIH1cblxuICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHNob3cgaG91cnNcbiAgaCA9IChoID4gMCB8fCBnaCA+IDApID8gaCArICc6JyA6ICcnO1xuXG4gIC8vIElmIGhvdXJzIGFyZSBzaG93aW5nLCB3ZSBtYXkgbmVlZCB0byBhZGQgYSBsZWFkaW5nIHplcm8uXG4gIC8vIEFsd2F5cyBzaG93IGF0IGxlYXN0IG9uZSBkaWdpdCBvZiBtaW51dGVzLlxuICBtID0gKCgoaCB8fCBnbSA+PSAxMCkgJiYgbSA8IDEwKSA/ICcwJyArIG0gOiBtKSArICc6JztcblxuICAvLyBDaGVjayBpZiBsZWFkaW5nIHplcm8gaXMgbmVlZCBmb3Igc2Vjb25kc1xuICBzID0gKHMgPCAxMCkgPyAnMCcgKyBzIDogcztcblxuICByZXR1cm4gaCArIG0gKyBzO1xufTtcblxuLy8gSW50ZXJuYWwgcG9pbnRlciB0byB0aGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbi5cbmxldCBpbXBsZW1lbnRhdGlvbiA9IGRlZmF1bHRJbXBsZW1lbnRhdGlvbjtcblxuLyoqXG4gKiBSZXBsYWNlcyB0aGUgZGVmYXVsdCBmb3JtYXRUaW1lIGltcGxlbWVudGF0aW9uIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9tSW1wbGVtZW50YXRpb25cbiAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgdXNlZCBpbiBwbGFjZSBvZiB0aGUgZGVmYXVsdCBmb3JtYXRUaW1lXG4gKiAgICAgICAgaW1wbGVtZW50YXRpb24uIFdpbGwgcmVjZWl2ZSB0aGUgY3VycmVudCB0aW1lIGluIHNlY29uZHMgYW5kIHRoZVxuICogICAgICAgIGd1aWRlIChpbiBzZWNvbmRzKSBhcyBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGb3JtYXRUaW1lKGN1c3RvbUltcGxlbWVudGF0aW9uKSB7XG4gIGltcGxlbWVudGF0aW9uID0gY3VzdG9tSW1wbGVtZW50YXRpb247XG59XG5cbi8qKlxuICogUmVzZXRzIGZvcm1hdFRpbWUgdG8gdGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZvcm1hdFRpbWUoKSB7XG4gIGltcGxlbWVudGF0aW9uID0gZGVmYXVsdEltcGxlbWVudGF0aW9uO1xufVxuXG4vKipcbiAqIERlbGVnYXRlcyB0byBlaXRoZXIgdGhlIGRlZmF1bHQgdGltZSBmb3JtYXR0aW5nIGZ1bmN0aW9uIG9yIGEgY3VzdG9tXG4gKiBmdW5jdGlvbiBzdXBwbGllZCB2aWEgYHNldEZvcm1hdFRpbWVgLlxuICpcbiAqIEZvcm1hdHMgc2Vjb25kcyBhcyBhIHRpbWUgc3RyaW5nIChIOk1NOlNTIG9yIE06U1MpLiBTdXBwbHlpbmcgYVxuICogZ3VpZGUgKGluIHNlY29uZHMpIHdpbGwgZm9yY2UgYSBudW1iZXIgb2YgbGVhZGluZyB6ZXJvcyB0byBjb3ZlciB0aGVcbiAqIGxlbmd0aCBvZiB0aGUgZ3VpZGUuXG4gKlxuICogQHN0YXRpY1xuICogQGV4YW1wbGUgIGZvcm1hdFRpbWUoMTI1LCA2MDApID09PSBcIjAyOjA1XCJcbiAqIEBwYXJhbSAgICB7bnVtYmVyfSBzZWNvbmRzXG4gKiAgICAgICAgICAgTnVtYmVyIG9mIHNlY29uZHMgdG8gYmUgdHVybmVkIGludG8gYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gICAge251bWJlcn0gZ3VpZGVcbiAqICAgICAgICAgICBOdW1iZXIgKGluIHNlY29uZHMpIHRvIG1vZGVsIHRoZSBzdHJpbmcgYWZ0ZXJcbiAqXG4gKiBAcmV0dXJuICAge3N0cmluZ31cbiAqICAgICAgICAgICBUaW1lIGZvcm1hdHRlZCBhcyBIOk1NOlNTIG9yIE06U1NcbiAqL1xuZnVuY3Rpb24gZm9ybWF0VGltZShzZWNvbmRzLCBndWlkZSA9IHNlY29uZHMpIHtcbiAgcmV0dXJuIGltcGxlbWVudGF0aW9uKHNlY29uZHMsIGd1aWRlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0VGltZTtcbiIsImV4cG9ydCBjb25zdCBmYWNlVVVJRCA9IChwcmVmaXgpID0+IHtcbiAgcmV0dXJuIHByZWZpeCArICctJyArIERhdGUubm93KClcbn07XG4iLCJjb25zdCB7IHBlcmZvcm1hbmNlLCBYTUxIdHRwUmVxdWVzdCB9ID0gd2luZG93O1xuXG5jbGFzcyBYaHJMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcueGhyU2V0dXApIHtcbiAgICAgIHRoaXMueGhyU2V0dXAgPSBjb25maWcueGhyU2V0dXA7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5hYm9ydCgpO1xuICAgIHRoaXMubG9hZGVyID0gbnVsbDtcbiAgfVxuXG4gIGFib3J0ICgpIHtcbiAgICBsZXQgbG9hZGVyID0gdGhpcy5sb2FkZXI7XG4gICAgaWYgKGxvYWRlciAmJiBsb2FkZXIucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgdGhpcy5zdGF0cy5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgIGxvYWRlci5hYm9ydCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0VGltZW91dCk7XG4gICAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IG51bGw7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJldHJ5VGltZW91dCk7XG4gICAgdGhpcy5yZXRyeVRpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgbG9hZCAoY29udGV4dCwgY29uZmlnLCBjYWxsYmFja3MpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIHRoaXMuc3RhdHMgPSB7IHRyZXF1ZXN0OiBwZXJmb3JtYW5jZS5ub3coKSwgcmV0cnk6IDAgfTtcbiAgICB0aGlzLnJldHJ5RGVsYXkgPSBjb25maWcucmV0cnlEZWxheTtcbiAgICB0aGlzLmxvYWRJbnRlcm5hbCgpO1xuICB9XG5cbiAgbG9hZEludGVybmFsICgpIHtcbiAgICBsZXQgeGhyLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgIHhociA9IHRoaXMubG9hZGVyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICBsZXQgc3RhdHMgPSB0aGlzLnN0YXRzO1xuICAgIHN0YXRzLnRmaXJzdCA9IDA7XG4gICAgc3RhdHMubG9hZGVkID0gMDtcbiAgICBjb25zdCB4aHJTZXR1cCA9IHRoaXMueGhyU2V0dXA7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKHhoclNldHVwKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgeGhyU2V0dXAoeGhyLCBjb250ZXh0LnVybCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBmaXggeGhyU2V0dXA6ICh4aHIsIHVybCkgPT4ge3hoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1MYW5ndWFnZVwiLCBcInRlc3RcIik7fVxuICAgICAgICAgIC8vIG5vdCB3b3JraW5nLCBhcyB4aHIuc2V0UmVxdWVzdEhlYWRlciBleHBlY3RzIHhoci5yZWFkeVN0YXRlID09PSBPUEVOXG4gICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGNvbnRleHQudXJsLCB0cnVlKTtcbiAgICAgICAgICB4aHJTZXR1cCh4aHIsIGNvbnRleHQudXJsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICB4aHIub3BlbignR0VUJywgY29udGV4dC51cmwsIHRydWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElFMTEgdGhyb3dzIGFuIGV4Y2VwdGlvbiBvbiB4aHIub3BlbiBpZiBhdHRlbXB0aW5nIHRvIGFjY2VzcyBhbiBIVFRQIHJlc291cmNlIG92ZXIgSFRUUFNcbiAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRXJyb3IoeyBjb2RlOiB4aHIuc3RhdHVzLCB0ZXh0OiBlLm1lc3NhZ2UgfSwgY29udGV4dCwgeGhyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5yYW5nZUVuZCkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1JhbmdlJywgJ2J5dGVzPScgKyBjb250ZXh0LnJhbmdlU3RhcnQgKyAnLScgKyAoY29udGV4dC5yYW5nZUVuZCAtIDEpKTtcbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gdGhpcy5yZWFkeXN0YXRlY2hhbmdlLmJpbmQodGhpcyk7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSB0aGlzLmxvYWRwcm9ncmVzcy5iaW5kKHRoaXMpO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSBjb250ZXh0LnJlc3BvbnNlVHlwZTtcblxuICAgIC8vIHNldHVwIHRpbWVvdXQgYmVmb3JlIHdlIHBlcmZvcm0gcmVxdWVzdFxuICAgIHRoaXMucmVxdWVzdFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmxvYWR0aW1lb3V0LmJpbmQodGhpcyksIHRoaXMuY29uZmlnLnRpbWVvdXQpO1xuICAgIHhoci5zZW5kKCk7XG4gIH1cblxuICByZWFkeXN0YXRlY2hhbmdlIChldmVudCkge1xuICAgIGxldCB4aHIgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgcmVhZHlTdGF0ZSA9IHhoci5yZWFkeVN0YXRlLFxuICAgICAgc3RhdHMgPSB0aGlzLnN0YXRzLFxuICAgICAgY29udGV4dCA9IHRoaXMuY29udGV4dCxcbiAgICAgIGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuXG4gICAgLy8gZG9uJ3QgcHJvY2VlZCBpZiB4aHIgaGFzIGJlZW4gYWJvcnRlZFxuICAgIGlmIChzdGF0cy5hYm9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gPj0gSEVBREVSU19SRUNFSVZFRFxuICAgIGlmIChyZWFkeVN0YXRlID49IDIpIHtcbiAgICAgIC8vIGNsZWFyIHhociB0aW1lb3V0IGFuZCByZWFybSBpdCBpZiByZWFkeVN0YXRlIGxlc3MgdGhhbiA0XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVxdWVzdFRpbWVvdXQpO1xuICAgICAgaWYgKHN0YXRzLnRmaXJzdCA9PT0gMCkge1xuICAgICAgICBzdGF0cy50Zmlyc3QgPSBNYXRoLm1heChwZXJmb3JtYW5jZS5ub3coKSwgc3RhdHMudHJlcXVlc3QpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBsZXQgc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICAgICAgLy8gaHR0cCBzdGF0dXMgYmV0d2VlbiAyMDAgdG8gMjk5IGFyZSBhbGwgc3VjY2Vzc2Z1bFxuICAgICAgICBpZiAoc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICBzdGF0cy50bG9hZCA9IE1hdGgubWF4KHN0YXRzLnRmaXJzdCwgcGVyZm9ybWFuY2Uubm93KCkpO1xuICAgICAgICAgIGxldCBkYXRhLCBsZW47XG4gICAgICAgICAgaWYgKGNvbnRleHQucmVzcG9uc2VUeXBlID09PSAnYXJyYXlidWZmZXInKSB7XG4gICAgICAgICAgICBkYXRhID0geGhyLnJlc3BvbnNlO1xuICAgICAgICAgICAgbGVuID0gZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgIGxlbiA9IGRhdGEubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0cy5sb2FkZWQgPSBzdGF0cy50b3RhbCA9IGxlbjtcbiAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB7IHVybDogeGhyLnJlc3BvbnNlVVJMLCBkYXRhOiBkYXRhIH07XG4gICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25TdWNjZXNzKHJlc3BvbnNlLCBzdGF0cywgY29udGV4dCwgeGhyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiBtYXggbmIgb2YgcmV0cmllcyByZWFjaGVkIG9yIGlmIGh0dHAgc3RhdHVzIGJldHdlZW4gNDAwIGFuZCA0OTkgKHN1Y2ggZXJyb3IgY2Fubm90IGJlIHJlY292ZXJlZCwgcmV0cnlpbmcgaXMgdXNlbGVzcyksIHJldHVybiBlcnJvclxuICAgICAgICAgIGlmIChzdGF0cy5yZXRyeSA+PSBjb25maWcubWF4UmV0cnkgfHwgKHN0YXR1cyA+PSA0MDAgJiYgc3RhdHVzIDwgNDk5KSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25FcnJvcih7IGNvZGU6IHN0YXR1cywgdGV4dDogeGhyLnN0YXR1c1RleHQgfSwgY29udGV4dCwgeGhyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWJvcnRzIGFuZCByZXNldHMgaW50ZXJuYWwgc3RhdGVcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgLy8gc2NoZWR1bGUgcmV0cnlcbiAgICAgICAgICAgIHRoaXMucmV0cnlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5sb2FkSW50ZXJuYWwuYmluZCh0aGlzKSwgdGhpcy5yZXRyeURlbGF5KTtcbiAgICAgICAgICAgIC8vIHNldCBleHBvbmVudGlhbCBiYWNrb2ZmXG4gICAgICAgICAgICB0aGlzLnJldHJ5RGVsYXkgPSBNYXRoLm1pbigyICogdGhpcy5yZXRyeURlbGF5LCBjb25maWcubWF4UmV0cnlEZWxheSk7XG4gICAgICAgICAgICBzdGF0cy5yZXRyeSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVhZHlTdGF0ZSA+PSAyIEFORCByZWFkeVN0YXRlICE9PTQgKHJlYWR5U3RhdGUgPSBIRUFERVJTX1JFQ0VJVkVEIHx8IExPQURJTkcpIHJlYXJtIHRpbWVvdXQgYXMgeGhyIG5vdCBmaW5pc2hlZCB5ZXRcbiAgICAgICAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMubG9hZHRpbWVvdXQuYmluZCh0aGlzKSwgY29uZmlnLnRpbWVvdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvYWR0aW1lb3V0ICgpIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5vblRpbWVvdXQodGhpcy5zdGF0cywgdGhpcy5jb250ZXh0LCBudWxsKTtcbiAgfVxuXG4gIGxvYWRwcm9ncmVzcyAoZXZlbnQpIHtcbiAgICBsZXQgeGhyID0gZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgIHN0YXRzID0gdGhpcy5zdGF0cztcblxuICAgIHN0YXRzLmxvYWRlZCA9IGV2ZW50LmxvYWRlZDtcbiAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgc3RhdHMudG90YWwgPSBldmVudC50b3RhbDtcbiAgICB9XG5cbiAgICBsZXQgb25Qcm9ncmVzcyA9IHRoaXMuY2FsbGJhY2tzLm9uUHJvZ3Jlc3M7XG4gICAgaWYgKG9uUHJvZ3Jlc3MpIHtcbiAgICAgIC8vIHRoaXJkIGFyZyBpcyB0byBwcm92aWRlIG9uIHByb2dyZXNzIGRhdGFcbiAgICAgIG9uUHJvZ3Jlc3Moc3RhdHMsIHRoaXMuY29udGV4dCwgbnVsbCwgeGhyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWGhyTG9hZGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3ZpZGVvX2pzX187Il0sInNvdXJjZVJvb3QiOiIifQ==