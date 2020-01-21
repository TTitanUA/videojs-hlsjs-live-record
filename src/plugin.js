import './plugin.scss';
import videojs from 'video.js';
const Plugin = videojs.getPlugin('plugin');
import {version as VERSION} from '../package.json';
import ProgressControlHlsJs from "./components/ProgressControlHlsJs";
import LiveButtonHlsJs from "./components/LiveButtonHlsJs";
import CachedButtonHlsJs from "./components/CachedButtonHlsJs";
import RecButtonHlsJs from "./components/RecButtonHlsJs";
import StopButtonHlsJs from "./components/StopButtonHlsJs";
import RecStatusBarHlsJs from "./components/RecStatusBarHlsJs";
import ViewController from "./Controllers/ViewController";
import StorageController from "./Controllers/StorageController";
import RealtimeRecordController from "./Controllers/RealtimeRecordController";


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
    getRecordMime: null,
  }
};

class HlsJSLiveRecordPlugin extends Plugin {

  constructor(player, options) {
    super(player, options);
    this.options = videojs.mergeOptions(defaults, options);
    this.storageController = new StorageController(this);
    this.viewController = new ViewController(this);
    this.realtimeRecordController = new RealtimeRecordController(this);

    player.on('playing', () => {
      this.init();
    });
  }

  init = () => {
    if(this.state.init) {
      return;
    }

    this.setState({init: true});
    if(this.checkRequirements()) {
      this.player.addClass('vjs-hls-live-record');
      this.player.on('pause', this.viewController.activateProgressMode);
      this.viewController.init();
      this.storageController.init();
      this.realtimeRecordController.init();
    } else {
      videojs.log.warn('HlsJSLiveRecordPlugin: cannot be initialized because one or more of the requirements are not met.');
    }
  };

  checkRequirements = () => {
    if(!this.getHlsJs()) {
      videojs.log.warn('HlsJSLiveRecordPlugin: HLS.JS plugin not found.');
      return false;
    }

    if(!this.storageController.checkRequirements()) {
      videojs.log.warn('HlsJSLiveRecordPlugin: This browser doesn\'t support IndexedDB.');
      return false;
    }
    return true;
  };

  getHlsJs = () => {
    return this.player.tech({ IWillUseThisInPlugin: true }).sourceHandler_.hls;
  };

  startRealtimeRecord(levelId) {

    this.setState({
      recordInProcess: true
    });

    this.getHlsJs().currentLevel = levelId * 1;
    this.viewController.activateRecordMode();

    this.realtimeRecordController.startRecord();
  }

  stopRealtimeRecord = () => {
    this.realtimeRecordController.stopRecord();
    this.viewController.activeLiveMode();
    this.setState({
      recordInProcess: false
    });
    this.getHlsJs().currentLevel = -1;
  };

  handleStateChanged(e) {

  }
}

HlsJSLiveRecordPlugin.VERSION = VERSION;

HlsJSLiveRecordPlugin.defaultState = {
  recordAllowed: true,
  recordInProcess: false,
  init: false
};

videojs.registerPlugin('hlsJSLiveRecord', HlsJSLiveRecordPlugin);
videojs.registerComponent('ProgressControlHlsJs', ProgressControlHlsJs);
videojs.registerComponent('LiveButtonHlsJs', LiveButtonHlsJs);
videojs.registerComponent('CachedButtonHlsJs', CachedButtonHlsJs);
videojs.registerComponent('RecButtonHlsJs', RecButtonHlsJs);
videojs.registerComponent('StopButtonHlsJs', StopButtonHlsJs);
videojs.registerComponent('RecStatusBarHlsJs', RecStatusBarHlsJs);
