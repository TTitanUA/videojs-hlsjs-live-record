import videojs from 'video.js';
import formatTime from '../utils/format-time';

const VideoJsComponentClass = videojs.getComponent('Component');
const Dom = videojs.dom;

const defaultOptions = {};

/**
 * Extend vjs button class for quality button.
 */
export default class RecStatusBarHlsJs extends VideoJsComponentClass {

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

    elem.appendChild(
      Dom.createEl('span', {
        className: 'vjs-hlsjs-lr-divider',
        innerText: '/'
      }, {
        'aria-live': 'off',
        'role': 'presentation'
      })
    );

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
  };

  updateRecordTime(time) {
    if(this.recordedEl_) {
      this.recordedEl_.innerText = formatTime(time);
    }
  };

  updateRecordLeftTime(time) {
    if(this.recordLeftEl_) {
      this.recordLeftEl_.innerText = formatTime(time);
    }
  };

  dispose() {
    this.recordedEl_ = null;
    this.recordLeftEl_ = null;

    super.dispose();
  }

}
