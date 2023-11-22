import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {catchError, map, Observable, switchMap, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrlReg = 'http://localhost:8080/api/auth/register';
  private apiUrlLog = 'http://localhost:8080/api/auth/login';
  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<any>(this.apiUrlReg, user).pipe(
      switchMap(() => this.login(user)),
      catchError(this.handleError)
    );
  }
  login(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrlLog, user).pipe(
      tap((responseUser: User) => {
        // При успешном входе присваиваем токен к пользователю
        user.token = responseUser.token;
        console.log(user.token)
      }),
      catchError(this.handleError)
    );
  }
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;
  }
}
