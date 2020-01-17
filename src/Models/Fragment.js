import {faceUUID} from "../utils/uuid";

export class FragmentModel {
  constructor(fragmentData) {
    this.duration = fragmentData.duration || 0;
    this.url = fragmentData.url || '';
    this.playlistId = fragmentData.playlistId || 'tmp';
    this.uuid = faceUUID(this.playlistId + '-' + this.url.split('/').pop());
    this.saved = fragmentData.saved || false;
  }
}
