import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballService } from '../../../services/football.service';

@Component({
  selector: 'app-view-match',
  templateUrl: './view-match.component.html',
  styleUrls: ['./view-match.component.scss'],
})
export class ViewMatchComponent implements OnInit {
  constructor(
    private Football: FootballService,
    private route: ActivatedRoute
  ) {}

  public res;

  //to calculate the minute
  public matchDate;
  public serverDate;
  public minute;

  ngOnInit(): void {
    this.Football.getMatch(this.route.snapshot.paramMap.get('id')).subscribe(
      (data) => {
        this.res = data;
        this.matchDate = this.res.date;

        this.Football.getTime().subscribe(
          (data) => {
            this.serverDate = data;
            let diffMs =
              Date.parse(this.matchDate) - Date.parse(this.serverDate); // milliseconds between match date & server date
            let diffMins = Math.abs(Math.round(diffMs / 60000)); // minutes

            if (this.res.half == 1) this.minute = diffMins;
            else if (this.res.half == 2)
              this.minute = diffMins + this.res.game_time / 2;
            else this.minute = 'Half Time';
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => console.log(error)
    );

    setInterval(() => {
      this.minute++;
    }, 60000);

    let autoRefersh = setInterval(() => {
      if (this.res.status == 'finished' || this.res.status == 'upcoming') {
        clearInterval(autoRefersh);
      } else window.location.reload();
    }, 15000);
  }
}
