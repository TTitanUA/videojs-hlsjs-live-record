import RecSettingsModalHlsJs from "../Components/RecSettingsModalHlsJs";

class ViewController {
  constructor(plugin) {
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

  init = () => {
    const controlBar = this.plugin.player.getChild('ControlBar');
    const space = controlBar.addChild('Component', {}, 2);
    space.addClass('vjs-hlsjs-controls-holder');

    this.removeDefaultControls();

    this.listOfControlsHiddenOnRec = this.plugin.options.listOfControlsHiddenOnRec.map((selector) => {
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
  };

  removeDefaultControls = () => {
    const controlBar = this.plugin.player.getChild('ControlBar');
    controlBar.removeChild('ProgressControl');
    controlBar.removeChild('SeekToLive');
    controlBar.removeChild('LiveDisplay');
  };

  activeLiveMode = () => {
    try {
      this.showOtherControl();
      this.showLiveControl();
      this.hideProgressControl();
      this.hideRecControl();
      this.plugin.player.liveTracker.seekToLiveEdge();
    } catch (e) {
      this.plugin.player.log.warn(e.message)
    }
  };

  activateProgressMode = () => {
    if(this.plugin.state.recordInProcess) {
      return;
    }
    this.showOtherControl();
    this.showProgressControl();
    this.hideLiveControl();
    this.hideRecControl();
  };

  showRecordSettings = () => {
    this.recSettingsModalComponent = new RecSettingsModalHlsJs(this.plugin.player, {

    });
    this.plugin.player.addChild(this.recSettingsModalComponent);
    this.recSettingsModalComponent.open();


    console.group("plugin.js:108 - showRecordSettings");
    console.log(this);
    console.groupEnd();
    // this.activateRecordMode();
  };

  activateRecordMode = () => {
    this.recSettingsModalComponent.close();
    this.hideProgressControl();
    this.hideLiveControl();
    this.hideOtherControl();
    this.showRecControl();
  };

  showRecControl = () => {
    this.plugin.player.addClass('vjs-hlsjs-record-started');
    this.recStatusBarComponent.updateRecordTime(0);
    let a = 1;
    this.recordUpdateInterval = setInterval(() => {
      this.recStatusBarComponent.updateRecordTime(a++);
    }, 1000);

    this.stopButtonComponent.show();
    this.recStatusBarComponent.show();
  };

  hideRecControl = () => {
    this.plugin.player.removeClass('vjs-hlsjs-record-started');
    clearInterval(this.recordUpdateInterval);
    this.stopButtonComponent.hide();
    this.recStatusBarComponent.hide();
  };

  showProgressControl = () => {
    this.progressControlComponent.show();
    this.cachedButtonComponent.show();
  };

  hideProgressControl = () => {
    this.progressControlComponent.hide();
    this.cachedButtonComponent.hide();
  };

  hideOtherControl = () => {
    this.listOfControlsHiddenOnRec.forEach(component => component.addClass('vjs-hlsjs-lr-hidden'));
  };

  showOtherControl = () => {
    this.listOfControlsHiddenOnRec.forEach(component => component.removeClass('vjs-hlsjs-lr-hidden'));
  };


  showLiveControl = () => {
    this.liveButtonComponent.show();
    this.recButtonComponent.show();
  };

  hideLiveControl = () => {
    this.liveButtonComponent.hide();
    this.recButtonComponent.hide();
  };

}

export default ViewController;
