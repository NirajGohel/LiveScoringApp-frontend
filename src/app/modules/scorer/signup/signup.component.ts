import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScorerService } from '../../../services/scorer.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private Scorer: ScorerService, private router: Router) {}

  signupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required]),
    mobileno: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  signup() {
    if (
      this.signupForm.valid &&
      this.signupForm.value.password === this.signupForm.value.confirmpassword
    ) {
      this.Scorer.signup(this.signupForm.value).subscribe(
        (data) => {
          this.router.navigate(['/dashboard']);
        },
        (error) => console.log(error)
      );
    } else alert('Password and Confirm password must be same');
  }
}
