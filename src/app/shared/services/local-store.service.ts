import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  private ls = window.localStorage;

  constructor() {}

  public setItem(token, value) {
    value = JSON.stringify(value);
    this.ls.setItem(token, value);
    
    return true;
  }

  public getItem(token) {
    const value = this.ls.getItem(token);
    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }

  public clear() {
    this.ls.clear();
  }
}
