import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any = {};
  errorMessage: any;
  constructor(private authService: AuthService) { }
  login() {
    this.authService.login(this.user).subscribe(
      response => {

        console.log('Login successful', response);
        // Сброс ошибки при успешной регистрации
        this.errorMessage = null;
      },
      error => {
        console.error('Login failed', error);
        // Отображение ошибки
        this.errorMessage = 'Ошибка входа. Пожалуйста, попробуйте еще раз.';
      }
    );
    this.errorMessage = "Запрос отправляется";
  }
}
