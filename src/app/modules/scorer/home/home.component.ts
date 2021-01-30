import { Component, OnInit } from '@angular/core';
import { ScorerService } from '../../../services/scorer.service';
import { FootballService } from '../../../services/football.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private Scorer: ScorerService,
    private Football: FootballService
  ) {}

  public username;
  public res;
  public matches;

  ngOnInit(): void {
    this.Scorer.getScorer(localStorage.getItem('id')).subscribe(
      (data) => {
        this.res = data;
        // console.log(data);
        // console.log(this.res.username);
        this.username = this.res.username;
      },
      (error) => console.log(error)
    );

    this.Football.getAllScorerMatches(localStorage.getItem('id')).subscribe(
      (data) => {
        this.matches = data;
        console.log(this.matches);
      },
      (error) => console.log(error)
    );
  }
}
