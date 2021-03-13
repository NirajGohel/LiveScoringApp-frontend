import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl: string = 'http://localhost:3000/api/admin';

  constructor(private http: HttpClient) {}

  login(admin) {
    return this.http.post(`${this.baseUrl}/login`, admin);
  }

  scorerVerification(data) {
    return this.http.put(`${this.baseUrl}/scorerverification`, data);
  }
}
