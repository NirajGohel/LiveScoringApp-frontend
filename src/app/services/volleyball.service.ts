import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VolleyballService {
  private baseUrl: string = 'http://localhost:3000/api/scoring/volleyball';

  constructor(private http: HttpClient) {}

  createMatch(data) {
    return this.http.post(`${this.baseUrl}/initiate`, data);
  }

  deleteMatch(id) {
    return this.http.delete(`${this.baseUrl}/deletematch/${id}`, {
      responseType: 'text',
    });
  }

  getMatch(id) {
    return this.http.get(`${this.baseUrl}/getmatch/${id}`);
  }

  getAllScorerMatches(id) {
    return this.http.get(`${this.baseUrl}/getmatchesByscorer/${id}`);
  }
}
