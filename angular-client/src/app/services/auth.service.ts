import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    registerUser(user: { username: String; name: String; email: String; password: String; }) {
        throw new Error('Method not implemented.');
    }
    authToken: String;
    user: String;

    constructor(private http: HttpClient) { };

    registerUser(user) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers})
            .map(response => response.json());
    };

    authenticateUser(user) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/auth', user, { headers: headers })
            .map(response => response.json());
    };
};
