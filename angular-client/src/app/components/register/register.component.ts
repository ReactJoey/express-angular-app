import { Component, OnInit } from '@angular/core';

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

    constructor() { };
    
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
    };
};