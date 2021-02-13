import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  private baseUrl: string = 'http://localhost:3000/api/scoring/football';

  constructor(private http: HttpClient) {}

  createMatch(data) {
    return this.http.post(`${this.baseUrl}/initiate`, data);
  }

  getAllScorerMatches(id) {
    return this.http.get(`${this.baseUrl}/getmatchesByscorer/${id}`);
  }

  deleteMatch(id) {
    return this.http.delete(`${this.baseUrl}/deletematch/${id}`, {
      responseType: 'text',
    });
  }
}
