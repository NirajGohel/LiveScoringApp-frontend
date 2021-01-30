import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScorerService } from '../../../services/scorer.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private Scorer: ScorerService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  res;

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      this.Scorer.login(this.loginForm.value).subscribe(
        (data) => {
          this.res = data;
          console.log(data);
          console.log(this.res.scorer._id);
          localStorage.setItem('id', this.res.scorer._id);
          this.router.navigate(['/scorer/dashboard']);
        },
        (error) => {
          if (error.status == 422) alert('Password is incorrect');
          if (error.status == 404) alert('User does not exists');
        }
      );
    }
  }
}
