import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { username: '', email: '', password: '', token: '' }; // Используем более конкретные типы
  errorMessage: string | null = null;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.isLoading = true;
    this.authService.login(this.user).subscribe(
      response => {
        console.log('Login successful', response);
        this.errorMessage = null;
        this.isLoading = false;
        this.router.navigate(['/main']);
      },
      error => {
        console.error('Login failed', error);
        this.errorMessage = 'Ошибка входа. Пожалуйста, попробуйте еще раз.';
        this.isLoading = false;
      }
    );
  }
}
