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

const defaults = {
  listOfControlsHiddenOnRec: ['vjs-play-control', 'vjs-quality-selector'],
  storageDbName: 'vjs-hlsjs-lr',
  storagePlaylistsName: 'playlists',
  storageFragmentsName: 'fragments',
};

class HlsJSLiveRecordPlugin extends Plugin {

  constructor(player, options) {
    super(player, options);

    this.viewController = new ViewController(this);
    this.storageController = new StorageController(this);
    this.realtimeRecordController = new RealtimeRecordController(this);

    this.options = videojs.mergeOptions(defaults, options);

    player.on('ready', () => {
      this.init();
    });
  }

  init = () => {
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

    // console.group("plugin.js:203 - startRealtimeRecord");
    // console.log(this);
    // console.log(levelId);
    // console.groupEnd();
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
  recordInProcess: false
};

videojs.registerPlugin('hlsJSLiveRecord', HlsJSLiveRecordPlugin);
videojs.registerComponent('ProgressControlHlsJs', ProgressControlHlsJs);
videojs.registerComponent('LiveButtonHlsJs', LiveButtonHlsJs);
videojs.registerComponent('CachedButtonHlsJs', CachedButtonHlsJs);
videojs.registerComponent('RecButtonHlsJs', RecButtonHlsJs);
videojs.registerComponent('StopButtonHlsJs', StopButtonHlsJs);
videojs.registerComponent('RecStatusBarHlsJs', RecStatusBarHlsJs);
