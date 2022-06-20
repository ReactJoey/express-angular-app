import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

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
    // For storing user credentials including token, user name, name, email and password.
    storeUserData(token: string, user: any) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // Clears local storage cache of authToken upon logout.
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
};