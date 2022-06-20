import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
// Injected everything needed into the constructor
  constructor(
      private authService: AuthService,
      private router: Router,
      private flashMessage: FlashMessagesModule
    ) { }

  ngOnInit(): void {
  }

  // Added logout and success message
  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You have logged out successfully!', {
      cssClass: 'alert-success', timeout: 3000
    });
    // Takes user back to login page after logout
    this.router.nagivate(['/login']);
    return false;
  };

}
