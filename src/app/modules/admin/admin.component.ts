import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScorerService } from '../.././services/scorer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private Scorer: ScorerService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  login() {
    // if (this.loginForm.valid) {
    //   this.Scorer.login(this.loginForm.value).subscribe(
    //     (data) => {
    //       console.log(data);
    //       console.log(this.loginForm.value);
    //       this.router.navigate(['/dashboard']);
    //     },
    //     (error) => {
    //       if (error.status == 422) alert('Password is incorrect');
    //       if (error.status == 404) alert('User does not exists');
    //     }
    //   );
    // }
  }
}
