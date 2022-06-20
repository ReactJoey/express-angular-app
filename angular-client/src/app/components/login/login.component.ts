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
  
  // Inject AuthService, Router and Flash Messages into constructor.
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesModule
  ) { };

  ngOnInit(): void {
  };

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };
    // If/Else to throw error for failure or to redirect to dashboard with success message if successful.
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now signed in.', {
          cssClass: 'alert-success', timeout: 5000
       });
       this.router.navigate(['dashboard']);
      } else {
      this.flashMessage.show(data.message, {
         cssClass: 'alert-danger', timeout: 5000
      });
      this.router.navigate(['login']);
    };
  });
};
