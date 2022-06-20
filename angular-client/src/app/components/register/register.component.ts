import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service'; // import validation
import { AuthService } from '../../services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Angular boilerplate for a component (connects html and styles).
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
});

// Declaring variable types.
export class RegisterComponent implements OnInit {
    username: String;
    name: String;
    email: String;
    password: String;

    // inject ValidateService into constructor to include validation.
    constructor(
        private router: Router,
        private validateService: ValidateService, 
        private authService: AuthService,
        private flashMessage: FlashMessagesModule
        ) { };
    
    ngOnInit() {
    };

    onRegisterSubmit() {
        const user = {
            username: this.username,
            name: this.name,
            email: this.email,
            password: this.password
        };
        console.log('New user '+ this.name +' has registered successfully.'); // for debugging purposes in the console.

        // Error message in console if required fields are missing.
        if(!this.validateService.validateRegister(user)) {
            this.flashMessages.show('Please fill in all fields.', {
                cssClass: 'alert-danger', timeout: 3000
            });
            return false;
        };

        // Error message if email is missing.
        if(!this.validateService.validateEmail(user.email)) {
            this.flashMessages.show('Please enter a valid email address.', {
                cssClass: 'alert-danger', timeout: 3000
            });
            return false;
        };
        // Register User success alert and route to /login
        this.authService.registerUser(user).subscribe(data => {
            if(data.success) {
                this.flashMessages.show('You have registered successfully.', {
                    cssClass: 'alert-success', timeout: 3000,
                    this.router.navigate(['/login'])
                } else {
                    this.flashMessages.show('Error. Not found.', {
                        cssClass: 'alert-danger', timeout: 3000
                        this.router.navigate(['/register'])
                    }
                )});
            };
        });
    };
};