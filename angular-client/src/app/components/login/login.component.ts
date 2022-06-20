import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String | undefined;
  password: String | undefined;
  
  // Inject AuthService, Router and FlashMessages into constructor.
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessages: FlashMessagesModule
  ) { };

  ngOnInit(): void {
  };

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };
    this.authService.authenticateUser(user).subscribe(data => {
      console.log(data);
    });
  }
};
