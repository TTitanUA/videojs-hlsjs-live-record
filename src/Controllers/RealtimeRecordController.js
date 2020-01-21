import {PlaylistModel} from "../Models/Playlist";
import {nowInFormatYmdHis} from "../utils/date";
import XhrLoader from "../utils/xhr-loader";

const Hls = window.Hls;

const faceMimePromise = () => {
  return new Promise((resolve) => {
    resolve({});
  })
};

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
    this.fragmentListener = hlsjs.on(Hls.Events.FRAG_LOADED, this.hlsFragmentLoaded);
  }

  startRecord() {
    this.playlist = null;
    this.recordStarted = true;
  }

  stopRecord() {
    this.recordStarted = false;
    if(this.playlist) {
      this.playlist.finished();
      this.plugin.storageController.savePlaylist(this.playlist);
    }
  }

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
    };
    loader.load(loaderContext, loaderConfig, loaderCallbacks);
  }

  initPlaylist(levelIndex) {
    const hlsjs = this.plugin.getHlsJs();
    const level = hlsjs.levels[levelIndex];
    const mimePromise = (this.plugin.options.realtimeRecord.getRecordMime || faceMimePromise)();

    if(!level) {
      return;
    }

    this.playlist = new PlaylistModel({
      id: 'record-' + nowInFormatYmdHis(),
      width: level.width,
      height: level.height,
      targetduration: level.details.targetduration
    });

    mimePromise.then((mime) => {
      this.playlist.mime = mime;
      this.plugin.storageController.savePlaylist(this.playlist);
    })
  }

  fragmentLoaded = (response, stats, context, networkDetails = null) => {
    context.loader.destroy();
    context.loader = null;

    this.plugin.storageController.saveFragment(context.frag, response.data, stats).then(() => {
      this.playlist.fragmentSaved(context.frag);
      this.plugin.storageController.savePlaylist(this.playlist);
    });
  };

  hlsFragmentLoaded = (event, data) => {
    if(this.recordStarted) {
      this.saveFragment(data.frag);
    }
  };
}

export default RealtimeRecordController;
