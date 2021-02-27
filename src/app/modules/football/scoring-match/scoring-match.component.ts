import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FootballService } from '../../../services/football.service';

@Component({
  selector: 'app-scoring-match',
  templateUrl: './scoring-match.component.html',
  styleUrls: ['./scoring-match.component.scss'],
})
export class ScoringMatchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Football: FootballService
  ) {}

  public res;

  //to calculate the minute
  public matchDate;
  public serverDate;
  public minute;

  //score of both the teams
  public team1_score = 0;
  public team2_score = 0;

  //States - basic operations
  public btnSubmit: boolean = true;
  public btnUndoGoal: boolean = true;
  public dTeamSelection: boolean = true;
  public dPlayerSelection: boolean = true;
  public tMinute: boolean = true;

  //to display names in dropdown - basic opearation
  public players;

  //default value for basic opearation
  public defaultTeam = {
    name: 'Select Opearation',
    value: '0',
  };

  public defaultPlayer = {
    name: 'Select Player',
    value: '0',
  };

  public min;

  //basic opearation - add goal
  private scorer;
  private time;
  private opearation;

  //same for both the teams
  private playername;
  private teamname;

  //basic opearation - add yellow card
  private yellowCardPlayer;

  //States - substitution
  public btnSubs: boolean = true;
  public dPlayerSelection_Subs: boolean = true;
  public dSubsSelection_Subs: boolean = true;
  public tMinute_Subs: boolean = true;

  //to display names in dropdown - basic opearation
  public players_subs;
  public subs;

  //default value for substitution
  public defaultPlayer_Subs = {
    name: 'Select Player To Substitute',
    value: '0',
  };

  public defaultSubstitution_Subs = {
    name: 'Select Player From Bench',
    value: '0',
  };

  public min_subs;

  private teamname_subs;
  private in;
  private out;

  //display purpose
  public t1_goals;
  public t2_goals;

  ngOnInit(): void {
    this.Football.getMatch(this.route.snapshot.paramMap.get('id')).subscribe(
      (data) => {
        this.res = data;
        this.matchDate = this.res.date;

        this.team1_score = this.res.score.team1.goal;
        this.team2_score = this.res.score.team2.goal;

        this.t1_goals = [
          {
            time: this.res.score.team1.times,
            scorer: this.res.score.team1.scorer,
          },
        ];

        this.t2_goals = [
          {
            time: this.res.score.team2.times,
            scorer: this.res.score.team2.scorer,
          },
        ];

        console.log(this.t1_goals);
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

        if (this.res.score.team1.goal > 0 || this.res.score.team2.goal > 0)
          this.btnUndoGoal = false;
      },
      (error) => {
        console.log(error);
      }
    );

    setInterval(() => {
      this.minute++;
    }, 60000);
  }

  //Reset the states - basic operation
  doReset() {
    this.defaultTeam.value = '0';
    this.defaultPlayer.value = '0';
    this.min = null;

    this.dTeamSelection = true;
    this.dPlayerSelection = true;
    this.tMinute = true;

    this.btnSubmit = true;
  }

  //Basic Operations
  onOperationChange($event) {
    this.opearation =
      $event.target.options[$event.target.options.selectedIndex].value;

    this.dTeamSelection = false;
  }

  onChangeTeam($event) {
    let team = $event.target.options[$event.target.options.selectedIndex].value;
    if (team == 1) {
      this.players = this.res.team1.playing11;
      this.teamname = this.res.team1.name;
    } else {
      this.players = this.res.team2.playing11;
      this.teamname = this.res.team2.name;
    }
    this.dPlayerSelection = false;
  }

  onPlayerChange($event) {
    if ($event.target.options[$event.target.options.selectedIndex].value != 0) {
      this.playername =
        $event.target.options[$event.target.options.selectedIndex].value;

      if (this.res.team1.playing11.includes(this.playername))
        this.teamname = this.res.team1.name;
      else this.teamname = this.res.team2.name;

      this.btnSubmit = false;
    }
  }

  onSubmit() {
    //Add goal
    if (this.opearation == 1) {
      const data = {
        _id: this.route.snapshot.paramMap.get('id'),
        scorer: this.scorer,
        time: this.time,
        teamname: this.teamname,
      };

      this.Football.addGoal(data).subscribe(
        () => {
          this.doReset();
          this.btnUndoGoal = false;

          if (this.teamname == this.res.team1.name) this.team1_score++;
          else this.team2_score++;

          window.location.reload();
        },
        (error) => console.log(error)
      );
    }

    //Add yellow card
    if (this.opearation == 2) {
      const data = {
        _id: this.route.snapshot.paramMap.get('id'),
        player: this.yellowCardPlayer,
        time: this.time,
        teamname: this.teamname,
      };

      console.log(data);
    }
  }

  addGoal() {
    const data = {
      _id: this.route.snapshot.paramMap.get('id'),
      scorer: this.playername,
      time: this.minute,
      teamname: this.teamname,
    };

    this.Football.addGoal(data).subscribe(
      () => {
        this.doReset();
        this.btnUndoGoal = false;

        if (this.teamname == this.res.team1.name) this.team1_score++;
        else this.team2_score++;

        window.location.reload();
      },
      (error) => console.log(error)
    );
  }

  addYellowCard() {
    const data = {
      _id: this.route.snapshot.paramMap.get('id'),
      player: this.playername,
      time: this.minute,
      teamname: this.teamname,
    };

    this.Football.addYellowCard(data).subscribe(
      () => {
        window.location.reload();
      },
      (error) => console.log(error)
    );
  }

  addRedCard() {
    const data = {
      _id: this.route.snapshot.paramMap.get('id'),
      player: this.playername,
      time: this.minute,
      teamname: this.teamname,
    };

    this.Football.addRedCard(data).subscribe(
      () => {
        window.location.reload();
      },
      (error) => console.log(error)
    );
  }

  undoGoal() {
    let decision = confirm('Do you want to remove last added goal?');
    if (decision) {
      let data = {
        id: this.route.snapshot.paramMap.get('id'),
      };

      this.Football.undoGoal(data).subscribe(
        () => {
          window.location.reload();
        },
        (error) => console.log(error)
      );
    }
  }

  //Substitution
  onChangeTeam_Subs($event) {
    let team = $event.target.options[$event.target.options.selectedIndex].value;
    if (team == 1) {
      this.players_subs = this.res.team1.playing11;
      this.teamname_subs = this.res.team1.name;
      this.subs = this.res.team1.substitutes;
    } else {
      this.players_subs = this.res.team2.playing11;
      this.teamname_subs = this.res.team2.name;
      this.subs = this.res.team2.substitutes;
    }
    this.dPlayerSelection_Subs = false;
  }

  onChangePlayer_Subs($event) {
    this.out = $event.target.options[$event.target.options.selectedIndex].value;
    this.dSubsSelection_Subs = false;
  }

  onChangeSubstitution_Subs($event) {
    this.in = $event.target.options[$event.target.options.selectedIndex].value;
    this.btnSubs = false;
  }

  onSubmit_Subs() {
    const data = {
      _id: this.route.snapshot.paramMap.get('id'),
      teamname: this.teamname_subs,
      in: this.in,
      out: this.out,
      time: this.minute,
    };

    this.Football.substitute(data).subscribe(
      () => {
        window.location.reload();
      },
      (error) => console.log(error)
    );
  }

  halfTime() {
    const data = {
      _id: this.route.snapshot.paramMap.get('id'),
    };

    this.Football.halfTime(data).subscribe(
      () => {
        alert('1');
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  startSecondHalf() {
    const data = {
      _id: this.route.snapshot.paramMap.get('id'),
    };

    this.Football.startSecondHalf(data).subscribe(
      () => window.location.reload(),
      (error) => {
        console.log(error);
      }
    );
  }

  finishMatch() {
    const data = {
      _id: this.route.snapshot.paramMap.get('id'),
    };

    this.Football.finishMatch(data).subscribe(
      () => this.router.navigate(['/scorer/dashboard/home']),
      (error) => {
        console.log(error);
      }
    );
  }
}
