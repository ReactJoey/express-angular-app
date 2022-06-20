import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'; // import validation
import { FlashMessageService } from 'angular2-flash-messages';

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
    constructor(private validateService: ValidateService, private flashMessage: FlashMessageService) { };
    
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
            this.flashMessage.show('Please fill in all fields.', {
                cssClass: 'alert-danger', timeout: 3000
            });
            return false;
        };

        // Error message if email is missing.
        if(!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please enter a valid email address.', {
                cssClass: 'alert-danger', timeout: 3000
            });
            return false;
        };
    };
};