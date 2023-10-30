import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrlRegistration = 'http://localhost:8080/api/auth/registration';
  private apiUrlLogin = 'http://localhost:8080/api/auth/login';
  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<any> {
    return this.http.post(this.apiUrlRegistration, user);
  }
}
