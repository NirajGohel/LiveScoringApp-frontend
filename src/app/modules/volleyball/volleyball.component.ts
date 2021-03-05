import { Component, OnInit } from '@angular/core';
import { VolleyballService } from '../../services/volleyball.service';

@Component({
  selector: 'app-volleyball',
  templateUrl: './volleyball.component.html',
  styleUrls: ['./volleyball.component.scss'],
})
export class VolleyballComponent implements OnInit {
  constructor(private Volleyball: VolleyballService) {}

  public state = {
    all: true,
    live: false,
    finished: false,
    upcoming: false,
  };

  public matches;

  public flag = 'all';

  ngOnInit(): void {
    this.getAllMatches();
  }

  setState(e) {
    if (e.target.innerText == 'All') {
      this.state.all = true;
      this.state.live = false;
      this.state.finished = false;
      this.state.upcoming = false;
      this.flag = 'all';
    }

    if (e.target.innerText == 'Live') {
      this.state.all = false;
      this.state.live = true;
      this.state.finished = false;
      this.state.upcoming = false;
      this.flag = 'live';
    }

    if (e.target.innerText == 'Finished') {
      this.state.all = false;
      this.state.live = false;
      this.state.finished = true;
      this.state.upcoming = false;
      this.flag = 'finished';
    }

    if (e.target.innerText == 'Upcoming') {
      this.state.all = false;
      this.state.live = false;
      this.state.finished = false;
      this.state.upcoming = true;
      this.flag = 'upcoming';
    }
  }

  getAllMatches() {
    this.Volleyball.getAllMatches().subscribe(
      (data) => {
        this.matches = data;
        console.log(this.matches);
      },
      (error) => console.log(error)
    );
  }

  getLiveMatches() {}
}
