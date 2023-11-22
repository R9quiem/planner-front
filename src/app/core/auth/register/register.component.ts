import { Component } from '@angular/core';
import {User} from "../models/user";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {};
  errorMessage: any;
  constructor(private authService: AuthService) { }
  register() {
    this.authService.register(this.user).subscribe(
      response => {

        console.log('Registration successful', response);
        // Сброс ошибки при успешной регистрации
        this.errorMessage = null;
      },
      error => {
        console.error('Registration failed', error);
        // Отображение ошибки
        this.errorMessage = 'Ошибка регистрации. Пожалуйста, попробуйте еще раз.';
      }
    );
    this.errorMessage = "Запрос отправляется";
  }
}
