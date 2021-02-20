import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FootballService } from '../../../services/football.service';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss'],
})
export class CreateMatchComponent implements OnInit {
  public data;
  team1_players: string[] = [];
  team2_players: string[] = [];
  str;

  constructor(private router: Router, private Football: FootballService) {}

  matchForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    start_time: new FormControl('', [Validators.required]),
    game_time: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    venue: new FormControl('', [Validators.required]),
    no_of_substitutes: new FormControl('', [Validators.required]),
  });

  team1Form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    headcoach: new FormControl('', [Validators.required]),
    player1: new FormControl('', [Validators.required]),
    player2: new FormControl('', [Validators.required]),
    player3: new FormControl('', [Validators.required]),
    player4: new FormControl('', [Validators.required]),
    player5: new FormControl('', [Validators.required]),
    player6: new FormControl('', [Validators.required]),
    player7: new FormControl('', [Validators.required]),
    player8: new FormControl('', [Validators.required]),
    player9: new FormControl('', [Validators.required]),
    player10: new FormControl('', [Validators.required]),
    player11: new FormControl('', [Validators.required]),
    player12: new FormControl('', [Validators.required]),
    player13: new FormControl('', [Validators.required]),
    player14: new FormControl('', [Validators.required]),
    player15: new FormControl('', [Validators.required]),
  });

  team2Form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    headcoach: new FormControl('', [Validators.required]),
    player1: new FormControl('', [Validators.required]),
    player2: new FormControl('', [Validators.required]),
    player3: new FormControl('', [Validators.required]),
    player4: new FormControl('', [Validators.required]),
    player5: new FormControl('', [Validators.required]),
    player6: new FormControl('', [Validators.required]),
    player7: new FormControl('', [Validators.required]),
    player8: new FormControl('', [Validators.required]),
    player9: new FormControl('', [Validators.required]),
    player10: new FormControl('', [Validators.required]),
    player11: new FormControl('', [Validators.required]),
    player12: new FormControl('', [Validators.required]),
    player13: new FormControl('', [Validators.required]),
    player14: new FormControl('', [Validators.required]),
    player15: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  createMatch() {
    this.data = this.matchForm.value;
    this.data.scorer_id = localStorage.getItem('id');

    //Player List of Team 1
    for (let i = 1; i <= 15; i++) {
      this.str = `player${i}`;
      this.team1_players.push(this.team1Form.value[this.str]);
    }

    //Team 1 Information
    this.data.team1 = {
      name: this.team1Form.value.name,
      headcoach: this.team1Form.value.headcoach,
      squad: this.team1_players,
    };

    //Player List of Team 2
    for (let i = 1; i <= 15; i++) {
      this.str = `player${i}`;
      this.team2_players.push(this.team2Form.value[this.str]);
    }

    //Team 2 Information
    this.data.team2 = {
      name: this.team2Form.value.name,
      headcoach: this.team2Form.value.headcoach,
      squad: this.team2_players,
    };

    this.Football.createMatch(this.data).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/scorer/dashboard/home']);
      },
      (error) => console.log(error)
    );
  }
}
