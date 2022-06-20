import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
    user: any;
    authToken: any | undefined;
    constructor(private http: HttpClient) { };

    registerUser(user: { username: String; name: String; email: String; password: String; }) {
        authToken: String;
        user: String;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers}).map((response: { json: () => any; }) => response.json());
    };

    authenticateUser(user: { username: String | undefined; password: String | undefined; }) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/auth', user, { headers: headers })
            .map((response: { json: () => any; }) => response.json());
    };

    getProfile() {
        let headers = new HttpHeaders();
        this.loadToken(); // to authenticate
        headers.append('Authorization', this.authToken); // to add token to authorization header
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(response => response.json());
    };

    // Load token from local storage
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    };

    // For storing user credentials including token, user name, name, email and password.
    storeUserData(token: string, user: any) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };

    loggedIn() {
        return tokenNotExpired();
    };

    // Clears local storage cache of authToken upon logout.
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
};
