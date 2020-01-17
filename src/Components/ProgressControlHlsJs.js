import videojs from 'video.js';

const VideoJsProgressControlComponent = videojs.getComponent('ProgressControl');
const Dom = videojs.dom;


/**
 * Extend vjs button class for quality button.
 */
export default class ProgressControlHlsJs extends VideoJsProgressControlComponent {
  constructor(player, options) {
    super(player, options);
    console.group("ProgressControlHlsJs.js:13 - constructor");
    console.log(this);
    console.groupEnd();
  }
}
