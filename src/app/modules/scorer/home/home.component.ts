import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScorerService } from '../../../services/scorer.service';
import { FootballService } from '../../../services/football.service';
import { VolleyballService } from '../../../services/volleyball.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private Scorer: ScorerService,
    private Football: FootballService,
    private Volleyball: VolleyballService,
    private router: Router
  ) {}

  public username;
  public res;

  public fbmatches;
  public fbcount = 0;
  public fblivecount = 0;
  public vblivecount = 0;

  public vbmatches;
  public vbcount = 0;

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
          if (m.status == 'upcoming') this.fbcount++;
          if (m.status == 'live') this.fblivecount++;
        }
      },
      (error) => console.log(error)
    );

    this.Volleyball.getAllScorerMatches(localStorage.getItem('id')).subscribe(
      (data) => {
        this.vbmatches = data;

        for (let m of this.vbmatches) {
          if (m.status == 'not_started') this.vbcount++;
          if (m.status == 'live') this.vblivecount++;
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

  deleteVolleyball(id) {
    this.Volleyball.deleteMatch(id).subscribe(
      () => {
        window.location.reload();
        alert(`Match deleted successfuly`);
      },
      (error) => console.log(error)
    );
  }

  startVolleyball(id) {
    const data = {
      _id: id,
    };

    this.Volleyball.startMatch(data).subscribe(
      (data) => {
        this.router.navigate([`/volleyball/scoring/${id}`]);
      },
      (error) => console.log(error)
    );
  }
}
