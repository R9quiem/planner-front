import { Component } from '@angular/core';
import {User} from "../../models/user";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = { username: '', email: '', password: '', token: '' };
  errorMessage: any;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }
  register() {
    this.isLoading = true;
    this.authService.register(this.user).subscribe(
      response => {
        console.log('Registration successful', response);
        this.errorMessage = null;
        this.isLoading = false;
        this.router.navigate(['/main']);
      },
      error => {
        console.error('Registration failed', error);
        this.errorMessage = 'Ошибка регистрации. Пожалуйста, попробуйте еще раз.';
        this.isLoading = false;
      }
    );
  }
}
