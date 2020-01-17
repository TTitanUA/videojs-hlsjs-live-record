import videojs from 'video.js';

const VideoJsButtonClass = videojs.getComponent('Button');
const Dom = videojs.dom;

const defaultOptions = {};

/**
 * Extend vjs button class for quality button.
 */
export default class LiveButtonHlsJs extends VideoJsButtonClass {

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
      innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>LIVE',
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
