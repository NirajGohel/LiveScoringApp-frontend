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
          localStorage.setItem('id', this.res.scorer._id);
          localStorage.setItem('token', this.res.token);
          this.router.navigate(['/scorer/dashboard']);
        },
        (error) => {
          if (error.status == 422) alert('Password is incorrect');
          if (error.status == 404) alert('User does not exists');
          if (error.status == 425)
            alert(
              'You will be able to login once admin  will approve your request'
            );
        }
      );
    }
  }
}
