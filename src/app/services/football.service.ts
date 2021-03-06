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

  getMatch(id) {
    return this.http.get(`${this.baseUrl}/getmatch/${id}`);
  }

  createLineup(data) {
    return this.http.put(`${this.baseUrl}/startgame`, data);
  }

  getTime() {
    return this.http.get(`${this.baseUrl}/gettime`);
  }

  //Scoring of the match
  addGoal(data) {
    return this.http.put(`${this.baseUrl}/addgoal`, data);
  }

  undoGoal(data) {
    return this.http.put(`${this.baseUrl}/undogoal`, data);
  }

  addYellowCard(data) {
    return this.http.put(`${this.baseUrl}/addyellowcard`, data);
  }

  addRedCard(data) {
    return this.http.put(`${this.baseUrl}/addredcard`, data);
  }

  substitute(data) {
    return this.http.put(`${this.baseUrl}/substitute`, data);
  }

  halfTime(data) {
    return this.http.put(`${this.baseUrl}/halftime`, data);
  }

  startSecondHalf(data) {
    return this.http.put(`${this.baseUrl}/startsecondhalf`, data);
  }

  finishMatch(data) {
    return this.http.put(`${this.baseUrl}/finish`, data);
  }

  //Methos For Viewers
  getAllMatches() {
    return this.http.get(`${this.baseUrl}/getallmatches`);
  }
}
