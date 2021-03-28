import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ScorerService {
  private baseUrl: string = 'http://localhost:3000/api/scorer';

  constructor(private http: HttpClient) {}

  signup(scorer) {
    return this.http.post(`${this.baseUrl}/register`, scorer);
  }

  login(scorer) {
    return this.http.post(`${this.baseUrl}/login`, scorer);
  }

  forgotpassword(scorer) {
    return this.http.post(`${this.baseUrl}/forgotpassword`, scorer, {
      responseType: 'text',
    });
  }

  changepassword(scorer) {
    return this.http.put(`${this.baseUrl}/changepassword`, scorer, {
      responseType: 'text',
    });
  }

  getScorer(id) {
    return this.http.get(`${this.baseUrl}/getscorer/${id}`);
  }

  getAllScorer() {
    return this.http.get(`${this.baseUrl}/getallscorers`);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
