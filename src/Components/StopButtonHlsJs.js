import videojs from 'video.js';

const VideoJsButtonClass = videojs.getComponent('Button');
const Dom = videojs.dom;

const defaultOptions = {};

/**
 * Extend vjs button class for quality button.
 */
export default class StopButtonHlsJs extends VideoJsButtonClass {

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
      innerHTML: '<i class="material-icons">stop</i>',
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
