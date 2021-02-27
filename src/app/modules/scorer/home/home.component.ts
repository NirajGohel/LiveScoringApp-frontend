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
  public fbmatches;
  public fbcount = 0;

  ngOnInit(): void {
    this.Scorer.getScorer(localStorage.getItem('id')).subscribe(
      (data) => {
        this.res = data;
        this.username = this.res.username;
      },
      (error) => console.log(error)
    );

    this.Football.getAllScorerMatches(localStorage.getItem('id')).subscribe(
      (data) => {
        this.fbmatches = data;

        for (let m of this.fbmatches) {
          if (m.status == 'not_started') this.fbcount++;
        }
      },
      (error) => console.log(error)
    );
  }

  delete(id) {
    this.Football.deleteMatch(id).subscribe(
      () => {
        window.location.reload();
        alert(`Match deleted successfuly`);
      },
      (error) => console.log(error)
    );
  }
}