import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`localhost:abc.php/users`);
    }

    register(user) {
        return this.http.post(`localhost:abc.php/users`, user);
    }
}