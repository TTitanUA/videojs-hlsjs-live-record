import videojs from 'video.js';

const VideoJsComponentClass = videojs.getComponent('Component');
const Dom = videojs.dom;

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
    return super.createEl(
      'div',
      {
        className: 'vjs-hlsjs-tab-background-record',
        innerHTML: '<p>vjs-hlsjs-tab-background-record</p>'
      },
    );
  }
}

export default BackgroundRecordTabHlsJs;
