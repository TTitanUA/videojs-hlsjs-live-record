import videojs from 'video.js';

const VideoJsButtonClass = videojs.getComponent('Button');
const Dom = videojs.dom;

const defaultOptions = {};

/**
 * Extend vjs button class for quality button.
 */
export default class CachedButtonHlsJs extends VideoJsButtonClass {
  

  /**
   * Button constructor.
   *
   * @param {Player} player - videojs player instance
   * @param {Object} options
   */
  constructor(player, options) {
    super(player, Object.assign(defaultOptions, options));

    console.group("CachedButtonHlsJs.js:23 - constructor");
    console.log(this);
    console.groupEnd();
  }

  createEl(tag, props = {}, attributes = {}) {
    this.nonIconControl = true;

    props = Object.assign({
      // className: 'vjs-live-display',
      // innerHTML: 'DVR',
      className: 'vjs-seek-to-live-control',
      innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>LIVE',
    }, props);

    attributes = Object.assign({
      'aria-live': 'On'
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
