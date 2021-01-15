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
    return this.http.post(`${this.baseUrl}/login`, scorer, {
      responseType: 'text',
    });
  }
}
