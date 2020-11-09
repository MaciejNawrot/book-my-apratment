import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  public get(key: string): any {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }

  public set(key: string, value: any): boolean {
    try {
      const val = typeof value === 'object' ? JSON.stringify(value) : value;
      localStorage.setItem(key, val);
      return true;
    } catch (e) {
      return false;
    }
  }

  public remove(key: string): boolean {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  }

  public clear(): boolean {
    localStorage.clear();
    return true;
  }
}
