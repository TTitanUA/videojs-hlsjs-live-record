import {PlaylistModel} from "../Models/Playlist";
import {nowInFormatYmdHis} from "../utils/date";
import XhrLoader from "../utils/xhr-loader";

const Hls = window.Hls;

class RealtimeRecordController {
  constructor(plugin) {
    this.plugin = plugin;
    this.manifestListener = null;
    this.levelListener = null;
    this.fragmentListener = null;
    this.recordStarted = false;

    this.playlist = null;
  }

  init() {
    const hlsjs = this.plugin.getHlsJs();
    // this.manifestListener = hlsjs.on(Hls.Events.MANIFEST_LOADED, this.hlsManifestLoaded);
    // this.levelListener = hlsjs.on(Hls.Events.LEVEL_LOADED, this.hlsLevelLoaded);
    this.fragmentListener = hlsjs.on(Hls.Events.FRAG_LOADED, this.hlsFragmentLoaded);
  }

  startRecord() {
    this.playlist = null;
    this.recordStarted = true;
  }

  stopRecord() {
    this.recordStarted = false;
  }

  // hlsManifestLoaded = (event, data) => {
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
    if(this.playlist === null) {
      this.initPlaylist(frag.level);
    }

    if(this.playlist === null) {
      return;
    }

    const loader = new XhrLoader();
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
      onSuccess: this.fragmentLoaded,
      // onError: this.loaderror.bind(this),
      // onTimeout: this.loadtimeout.bind(this),
      // onProgress: this.loadprogress.bind(this)
    };
    loader.load(loaderContext, loaderConfig, loaderCallbacks);
  }

  initPlaylist(levelIndex) {
    const hlsjs = this.plugin.getHlsJs();
    const level = hlsjs.levels[levelIndex];
    if(!level) {
      return;
    }

    this.playlist = new PlaylistModel({
      id: 'record-' + nowInFormatYmdHis(),
      width: level.width,
      height: level.height,
      targetduration: level.details.targetduration
    });
  }

  fragmentLoaded = (response, stats, context, networkDetails = null) => {
    context.loader.destroy();
    context.loader = null;

    this.plugin.storageController.saveFragment(context.frag, response.data, stats).then(() => {
      this.playlist.fragmentSaved(context.frag);
      this.plugin.storageController.savePlaylist(this.playlist);
      console.groupCollapsed("RealtimeRecordController.js:104 - ");
      console.log(this.playlist.toString());
      console.groupEnd();
    });
  };

  hlsFragmentLoaded = (event, data) => {
    if(this.recordStarted) {
      this.saveFragment(data.frag);
    }
  };
}

export default RealtimeRecordController;
