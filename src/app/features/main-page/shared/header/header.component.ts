import {Component, Input} from '@angular/core';
import {AuthService} from "../../../../auth/services/auth.service";
import {User} from "../../../../auth/models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  username: string | null ='';

  constructor(private authService: AuthService) {
  }
  ngOnInit() {
    this.username = this.authService.getUsername();
  }
}
