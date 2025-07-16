import { Injectable } from "@angular/core";

@Injectable({  
	providedIn: 'root'  
})  
export class StorageService  {
    constructor() { }

    saveStorage(storageName: string, storageValue: string) {
        localStorage.setItem(storageName, storageValue);
    }

    removeStorage(storageName: string) {
        localStorage.removeItem(storageName);
    }

    getStorage(storageName: string): string {
        return localStorage.getItem(storageName) || '';
    }
}