import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FootballService } from '../../../services/football.service';

@Component({
  selector: 'app-start-match',
  templateUrl: './start-match.component.html',
  styleUrls: ['./start-match.component.scss'],
})
export class StartMatchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Football: FootballService
  ) {}

  public res;
  public team1_squad: string[] = [];
  public team2_squad: string[] = [];

  public isDisabled: boolean = true; //Submit button property

  ngOnInit(): void {
    this.Football.getMatch(this.route.snapshot.paramMap.get('id')).subscribe(
      (data) => {
        this.res = data;
        this.team1_squad = this.res.team1.squad;
        this.team2_squad = this.res.team2.squad;
      },
      (error) => {
        alert('Match not found');
        this.router.navigate(['/scorer/dashboard']);
      }
    );
  }

  public team1_playing11: string[] = [];
  public team1_substitutes: string[] = [];
  public team1_count: number = 0; //Number of player selected for team 1

  public team2_playing11: string[] = [];
  public team2_substitutes: string[] = [];
  public team2_count: number = 0; //Number of player selected for team 2

  public data;

  //Create array of playing-11 for team 1
  onChangeTeam1(name, checked) {
    if (checked) {
      this.team1_playing11.push(name);
      this.team1_count++;
    } else {
      let index = this.team1_playing11.indexOf(name);

      if (index > -1) {
        this.team1_playing11.splice(index, 1);
        this.team1_count--;
      }
    }

    this.toggleButton();
  }

  //Create array of playing-11 for team 2
  onChangeTeam2(name, checked) {
    if (checked) {
      this.team2_playing11.push(name);
      this.team2_count++;
    } else {
      let index = this.team2_playing11.indexOf(name);

      if (index > -1) {
        this.team2_playing11.splice(index, 1);
        this.team2_count--;
      }
    }
    this.toggleButton();
  }

  //Set the disabled property of submit button
  toggleButton() {
    if (this.team1_count == 11 && this.team2_count == 11)
      this.isDisabled = false;
    else this.isDisabled = true;
  }

  //Submit button
  onSubmit() {
    for (let name of this.team1_squad) {
      if (!this.team1_playing11.includes(name))
        this.team1_substitutes.push(name);
    }

    for (let name of this.team2_squad) {
      if (!this.team2_playing11.includes(name))
        this.team2_substitutes.push(name);
    }

    this.data = {
      _id: this.route.snapshot.paramMap.get('id'),
      team1_playing11: this.team1_playing11,
      team1_substitutes: this.team1_substitutes,

      team2_playing11: this.team2_playing11,
      team2_substitutes: this.team2_substitutes,
    };

    console.log(this.data);

    this.Football.createLineup(this.data).subscribe(
      () => {
        console.log('success');
        this.router.navigate([
          `/football/scoring/${this.route.snapshot.paramMap.get('id')}`,
        ]);
      },
      (error) => console.log(error)
    );
  }
}
