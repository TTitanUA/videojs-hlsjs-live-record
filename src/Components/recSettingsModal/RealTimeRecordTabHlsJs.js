import videojs from 'video.js';
import {faceUUID} from "../../utils/uuid";

const VideoJsComponentClass = videojs.getComponent('Component');
const VideoJsButtonClass = videojs.getComponent('MenuButton');
const VideoJsMenuClass = videojs.getComponent('Menu');
const Dom = videojs.dom;

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
    return levels.map((item, index) => (
      {
        label: item.height + 'p',
        value: index,
        selected: index === currentLevel,
      }
    )).sort((current, next) => {
      if ((typeof current !== 'object') || (typeof next !== 'object')) {
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
    const elem = super.createEl(
      'div',
      {
        className: 'vjs-hlsjs-tab-realtime-record',
      },
    );

    elem.appendChild(this.renderHead());
    elem.appendChild(this.renderQualitySelector());
    elem.appendChild(this.renderButton());

    return elem;
  }

  renderHead() {
    return Dom.createEl('div', {
      innerHTML: "<p>Real-time recording allows you to record a fragment of the program you are watching. " +
        "Recording will be done until the recording stops, the recording time limit is exceeded or the tab is closed." +
        "To start recording, select your preferred quality and click <strong>\"start recording\"</strong>.</p>" +
        "<p>Your current recording time limit is 60 min.</p>"
    })
  }


  renderQualitySelector() {
    const elem = Dom.createEl(
      'div',
      {
        className: 'vjs-hlsjs-tab-quality-select vjs-hlsjs-form-group',
      },
    );
    const uuid = faceUUID('vjs-hls-quality-select');

    elem.appendChild(
      Dom.createEl('label', {
        for: uuid,
        innerText: 'Quality',
        className: 'vjs-hlsjs-form-label'
      })
    );

    this.qualitySelect = Dom.createEl('select', {
      id: uuid,
      className: 'vjs-hlsjs-form-input'
    });

    const levels = this.getQualityLevels();

    levels.forEach((item) => {
      this.qualitySelect.appendChild(
        Dom.createEl('option', {
          value: item.value,
          text: item.label,
          selected: item.selected
        })
      );
      if(item.selected) {
        this.qualitySelect.value = item.value;
      }
    });

    elem.appendChild(this.qualitySelect);

    return elem;
  }

  renderButton() {
    const holder = Dom.createEl(
      'div',
      {
        className: 'vjs-hlsjs-form-group',
      }
    );

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

export default RealTimeRecordTabHlsJs;
