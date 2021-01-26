import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScorerService } from '../../../services/scorer.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private Scorer: ScorerService, private router: Router) {}
  resetForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),

    //password: new FormControl('', [Validators.required]),
  });

  otpCheckForm = new FormGroup({
    otp: new FormControl('', Validators.required),
  });

  public flag: boolean = false;
  public status: boolean = false;
  public oneTimePassword;
  ngOnInit(): void {}

  forgotPassword() {
    if (this.resetForm.valid) {
      this.flag = true;
      this.Scorer.forgotpassword(this.resetForm.value).subscribe(
        (data) => {
          console.log(data);
          this.oneTimePassword = data;
          localStorage.setItem('email', this.resetForm.value.email);
          console.log(this.oneTimePassword);
        },
        (error) => {
          if (error.status == 404) alert('User does not exists');
        }
      );
    }
  }

  checkOTP() {
    if (this.otpCheckForm.valid) {
      if (this.oneTimePassword == this.otpCheckForm.value.otp) {
        console.log('success');
        this.router.navigate(['/scorer/change-password']);
      } else {
        this.status = true;
        console.log('failure');
      }
    }
  }
}
