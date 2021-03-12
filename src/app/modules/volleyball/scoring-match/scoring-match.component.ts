import { Component, OnInit } from '@angular/core';
import { VolleyballService } from '../../../services/volleyball.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scoring-match',
  templateUrl: './scoring-match.component.html',
  styleUrls: ['./scoring-match.component.scss'],
})
export class ScoringMatchComponent implements OnInit {
  constructor(
    private Volleyball: VolleyballService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public res;

  public btnNewSet = true;
  public btnUndoPoint = true;
  public btnAddPoint = false;

  ngOnInit(): void {
    this.Volleyball.getMatch(this.route.snapshot.paramMap.get('id')).subscribe(
      (data) => {
        this.res = data;

        if (
          this.res.score.team1.points[
            this.res.score.team1.set + this.res.score.team2.set
          ] > 0 ||
          this.res.score.team2.points[
            this.res.score.team1.set + this.res.score.team2.set
          ] > 0
        )
          this.btnUndoPoint = false;

        let index = this.res.score.team1.set + this.res.score.team2.set;

        if (
          (this.res.score.team1.points[index] >= 25 &&
            this.res.score.team1.points[index] -
              this.res.score.team2.points[index] >=
              2) ||
          (this.res.score.team2.points[index] >= 25 &&
            this.res.score.team2.points[index] -
              this.res.score.team1.points[index] >=
              2)
        )
          this.btnNewSet = false;

        if (this.res.status == 'finished') this.btnAddPoint = true;
      },
      (error) => console.log(error)
    );
  }

  finishSet() {
    let team;

    if (
      this.res.score.team1.points[
        this.res.score.team1.set + this.res.score.team2.set
      ] >
      this.res.score.team2.points[
        this.res.score.team1.set + this.res.score.team2.set
      ]
    )
      team = this.res.team1.name;
    else team = this.res.team2.name;

    const data = {
      _id: this.route.snapshot.paramMap.get('id'),
      teamname: team,
    };

    this.Volleyball.finishSet(data).subscribe(
      () => {
        window.location.reload();
      },
      (error) => console.log(error)
    );
  }

  undoPoint() {
    const data = {
      _id: this.route.snapshot.paramMap.get('id'),
    };

    this.Volleyball.undoPoint(data).subscribe(
      (data) => window.location.reload(),
      (error) => console.log(error)
    );
  }

  addPoint(teamname) {
    const data = {
      _id: this.route.snapshot.paramMap.get('id'),
      teamname: teamname,
    };

    this.Volleyball.addPoint(data).subscribe(
      (data) => window.location.reload(),
      (error) => console.log(error)
    );
  }

  finishMatch() {
    const data = {
      _id: this.route.snapshot.paramMap.get('id'),
    };

    this.Volleyball.finishMatch(data).subscribe(
      () => this.router.navigate(['/scorer/dashboard/home']),
      (error) => {
        console.log(error);
      }
    );
  }
}
