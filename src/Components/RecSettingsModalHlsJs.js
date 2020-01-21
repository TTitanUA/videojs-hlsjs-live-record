import videojs from 'video.js';
import TabsHlsJs from "./recSettingsModal/TabsHlsJs";

const VideoJsModalDialogClass = videojs.getComponent('ModalDialog');
const Dom = videojs.dom;

const defaultOptions = {};

/**
 * Extend vjs button class for quality button.
 */
class RecSettingsModalHlsJs extends VideoJsModalDialogClass {

  /**
   * Button constructor.
   *
   * @param {Player} player - videojs player instance
   * @param {Object} options
   */
  constructor(player, options) {
    super(player, options);
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   *
   * @deprecated Since version 5.
   */
  buildCSSClass() {
    return `vjs-hlsjs-lr-rec-settings ${super.buildCSSClass()}`;
  }

  /**
   * Gets the localized error message based on the `Player`s error.
   *
   * @return {string}
   *         The `Player`s error message localized or an empty string.
   */
  content() {
    if(this.options().allowed) {
      this.tabsComponent = new TabsHlsJs(this.player_, this.options());
      return this.tabsComponent.el_;
    } else {
      return this.renderNotAllowedContent();
    }
  }

  renderNotAllowedContent() {
    if(this.renderedEl_) {
      return this.renderedEl_;
    }

    const content = (this.options().notAllowedContent || (() => ('<h2>Recording not allowed</h2>')))();

    this.renderedEl_ = Dom.createEl('div', {
      className: '',
      innerHTML: content,
    });

    return this.renderedEl_;
  }
}

RecSettingsModalHlsJs.prototype.options_ = Object.assign({}, VideoJsModalDialogClass.prototype.options_, {
  pauseOnOpen: false,
  fillAlways: false,
  temporary: true,
  uncloseable: false
});

videojs.registerComponent('RecSettingsModalHlsJs', RecSettingsModalHlsJs);
export default RecSettingsModalHlsJs;
