import {FragmentModel} from "./Fragment";

const createPlaylistHeader = (targetduration) => {
  return "#EXTM3U\n" +
    "#EXT-X-VERSION:4\n" +
    "#EXT-X-TARGETDURATION:" + targetduration + "\n" +
    "#EXT-X-MEDIA-SEQUENCE:0\n";
};
const addPlaylistFragment = (duraction, url) => {
return "#EXTINF:" + duraction + ",\n" +
  url + "\n";
};
const createPlaylistFooter = () => {
  return "#EXT-X-ENDLIST\n";
};


export class PlaylistModel {
  constructor(playlistData) {
    this.id = playlistData.id || '';
    this.width = playlistData.width || 384;
    this.height = playlistData.height || 384;
    this.fragments = playlistData.fragments || [];
    this.targetduration = playlistData.targetduration || 0;
  }

  addFragment(duration, url) {
    const fragment = new FragmentModel({duration, url});
    this.fragments.push(fragment);
    return fragment;
  }

  fragmentSaved(fragment) {
    this.fragments = this.fragments.map((frag) => {
      if(frag.uuid === fragment.uuid) {
        frag.saved = true;
      }
      return frag;
    })
  }

  toString() {
    return createPlaylistHeader(this.targetduration) +
      (this.fragments.filter(fragment => (fragment.saved))
        .map(fragment => (addPlaylistFragment(fragment.duration, fragment.uuid))).join('')) +
      createPlaylistFooter();
  }
}
