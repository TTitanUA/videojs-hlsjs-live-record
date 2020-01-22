const DB_VERSION = 1;
const STORAGE_WRITE_MODE = 'readwrite';
const STORAGE_READ_MODE = 'readonly';

class StorageController {
  constructor(plugin) {
    this.plugin = plugin;
    this.db = null;
  }


  init() {
    const openRequest = indexedDB.open(this.plugin.options.storageDbName, DB_VERSION);
    openRequest.onupgradeneeded = () => {
      this.db = openRequest.result;
      if (!this.db.objectStoreNames.contains(this.options.storagePlaylistsName)) {
        this.db.createObjectStore(this.options.storagePlaylistsName, {keyPath: 'id'});
      }
      if (!this.db.objectStoreNames.contains(this.options.storageFragmentsName)) {
        const fragmentsStorage = this.db.createObjectStore(this.options.storageFragmentsName, {keyPath: 'uuid'});
        fragmentsStorage.createIndex('playlistId', 'playlistId', {unique: false});
      }
    };

    openRequest.onsuccess = () => {
      this.db = openRequest.result;
    };
  }

  checkRequirements() {
    return 'indexedDB' in window;
  }

  //TODO: need to add error processing
  saveFragment(fragment, payload, stats) {
    return new Promise((resolve) => {
      if(this.db === null) {
        resolve(true);
        return;
      }
      const transaction = this.db.transaction(this.plugin.options.storageFragmentsName, STORAGE_WRITE_MODE);
      const storage = transaction.objectStore(this.plugin.options.storageFragmentsName);
      const request = storage.add({
        ...fragment,
        payload,
        stats
      });

      request.onsuccess = function() {
        // console.group("cache-driver.js:17 - store - onsuccess");
        // console.log(request);
        // console.groupEnd();
      };
      request.onerror = function() {
        // console.group("cache-driver.js:17 - store - onerror");
        // console.warn(request);
        // console.groupEnd();
      };
      resolve(true);
    });
  }

  //TODO: need to add error processing
  savePlaylist(playlist) {
    return new Promise((resolve) => {
      if(this.db === null) {
        resolve(true);
        return;
      }
      const transaction = this.db.transaction(this.plugin.options.storagePlaylistsName, STORAGE_WRITE_MODE);
      const storage = transaction.objectStore(this.plugin.options.storagePlaylistsName);
      const request = storage.put(playlist);

      request.onsuccess = function() {
        // console.group("cache-driver.js:17 - store - onsuccess");
        // console.log(request);
        // console.groupEnd();
      };
      request.onerror = function() {
        // console.group("cache-driver.js:17 - store - onerror");
        // console.warn(request);
        // console.groupEnd();
      };
      resolve(true);
    });
  }


}

export default StorageController;
