import videojs from 'video.js';
import RealTimeRecordTabHlsJs from "./RealTimeRecordTabHlsJs";
import BackgroundRecordTabHlsJs from "./BackgroundRecordTabHlsJs";

const VideoJsComponentClass = videojs.getComponent('Component');
const Dom = videojs.dom;

const defaultOptions = {};

/**
 * Extend vjs button class for quality button.
 */
class TabsHlsJs extends VideoJsComponentClass {

  /**
   * Button constructor.
   *
   * @param {Player} player - videojs player instance
   * @param {Object} options
   */
  constructor(player, options) {
    console.group("TabsHlsJs.js:20 - constructor");
    console.log(player);
    console.groupEnd();
    super(player, options);
  }

  createEl() {
    const tabsHolder = super.createEl(
      'div',
      {
        className: 'vjs-hlsjs-vertical-tabs',
      },
    );

    tabsHolder.appendChild(this.renderNav());

    tabsHolder.appendChild(this.renderBody());

    return tabsHolder;
  }


  renderNav() {
    const navHolder = Dom.createEl('div', {
      className: 'vjs-hlsjs-vertical-tabs-nav'
    });
    console.group("TabsHlsJs.js:66 - renderNav");
    console.log(this);
    console.groupEnd();
    navHolder.appendChild(
      Dom.createEl('div', {
        className: 'vjs-hlsjs-vertical-tabs-nav-elem active',
        innerHTML: 'Realtime',
        onclick: () => {this.handleClick(0)}
      })
    );

    navHolder.appendChild(
      Dom.createEl('div', {
        className: 'vjs-hlsjs-vertical-tabs-nav-elem',
        innerHTML: 'Background',
        onclick: () => {this.handleClick(1)}
      })
    );

    return navHolder;
  }

  renderBody() {
    const bodyHolder = Dom.createEl('div', {
      className: 'vjs-hlsjs-vertical-tabs-body'
    });

    this.realtimeRecord = new RealTimeRecordTabHlsJs(this.player_, {});
    const elem1 = Dom.createEl('div', {
      className: 'vjs-hlsjs-vertical-tabs-elem active'
    });
    elem1.appendChild(this.realtimeRecord.el_);
    bodyHolder.appendChild(elem1);

    this.backgroundRecord = new BackgroundRecordTabHlsJs(this.player_, {});
    const elem2 = Dom.createEl('div', {
      className: 'vjs-hlsjs-vertical-tabs-elem'
    });
    elem2.appendChild(this.backgroundRecord.el_);
    bodyHolder.appendChild(elem2);

    return bodyHolder;
  }

  handleClick(index) {
    this.$$('.vjs-hlsjs-vertical-tabs-nav-elem').forEach((elem, elemIndex) => {
      if(index === elemIndex) {
        Dom.addClass(elem, 'active');
      } else {
        Dom.removeClass(elem, 'active');
      }
    });
    this.$$('.vjs-hlsjs-vertical-tabs-elem').forEach((elem, elemIndex) => {
      if(index === elemIndex) {
        Dom.addClass(elem, 'active');
      } else {
        Dom.removeClass(elem, 'active');
      }
    });
  };
}

export default TabsHlsJs;
