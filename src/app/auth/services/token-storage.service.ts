import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USERNAME_KEY = 'auth-username';

@Injectable({
  providedIn: 'root'
})
export class ServiceTokenStorage {
  constructor() {
  }

  public saveToken(token: any): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  }

  public setToken(key: string, token: any): void {
    window.localStorage.removeItem(key);
    window.localStorage.setItem(key, JSON.stringify(token));
  }

  public getToken(): string {
    return JSON.parse(<string> window.localStorage.getItem(TOKEN_KEY));
  }

  public saveUsername(username: string ): void {
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.setItem(USERNAME_KEY, JSON.stringify(username));
  }

  public getUsername(): string {
    return JSON.parse(<string> localStorage.getItem(USERNAME_KEY));
  }

  logOut(): void {
    window.localStorage.clear();
    window.location.reload();
  }
}
