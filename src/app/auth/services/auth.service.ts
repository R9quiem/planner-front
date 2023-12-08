import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import { Router } from '@angular/router';
import {BehaviorSubject, catchError, map, Observable, switchMap, tap} from "rxjs";
import {ServiceTokenStorage} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrlReg = 'http://localhost:8080/api/auth/register';
  private apiUrlLog = 'http://localhost:8080/api/auth/login';
  currentUser: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  constructor(private http: HttpClient, private serviceTokenStorage: ServiceTokenStorage) {
  }
  public getToken(): string | null {
    return this.serviceTokenStorage.getToken();
  }
  public getUsername(): string {
    return this.serviceTokenStorage.getUsername();
  }

  register(user: User): Observable<User> {
    return this.http.post<any>(this.apiUrlReg, user).pipe(
      switchMap(response => {
        return this.login(user);
      }),
      catchError(this.handleError)
    );
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrlLog, user).pipe(
      map(responseUser => {
        if (responseUser.token) {
          this.serviceTokenStorage.saveToken(responseUser.token);
          this.serviceTokenStorage.saveUsername(responseUser.username);
          this.currentUser.next(this.serviceTokenStorage.getUsername())
        }
        return responseUser;
      }),
      catchError(this.handleError)
    );
  }
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;
  }
}
