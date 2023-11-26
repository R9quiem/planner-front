import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import { Router } from '@angular/router';
import {catchError, map, Observable, switchMap, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrlReg = 'http://localhost:8080/api/auth/register';
  private apiUrlLog = 'http://localhost:8080/api/auth/login';
  private currentUser: User | null = null;
  constructor(private http: HttpClient) {
  }
  getToken(): string | null {
    return this.currentUser?.token || null;
  }

  register(user: User): Observable<User> {
    return this.http.post<any>(this.apiUrlReg, user).pipe(
      switchMap(() => this.login(user)), // Используем switchMap для перехода к логину после регистрации
      catchError(this.handleError)
    );
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrlLog, user).pipe(
      map(responseUser => {
        this.currentUser = responseUser;
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
