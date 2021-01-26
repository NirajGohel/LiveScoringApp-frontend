import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScorerService } from '../../../services/scorer.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  constructor(private Scorer: ScorerService, private router: Router) {}

  changePasswordForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  public temp;

  changePassword() {
    this.temp = {
      email: localStorage.getItem('email'),
      password: this.changePasswordForm.value.password,
      confirmpassword: this.changePasswordForm.value.confirmpassword,
    };
    console.log(this.temp);
    if (
      this.changePasswordForm.valid &&
      this.changePasswordForm.value.password ===
        this.changePasswordForm.value.confirmpassword
    ) {
      this.Scorer.changepassword(this.temp).subscribe(
        (data) => {
          console.log('Success');
          console.log(this.changePasswordForm.value);
          localStorage.removeItem('email');
          this.router.navigate(['/scorer/login']);
        },
        (error) => console.log(error)
      );
    } else alert('Password and Confirm Password must be same !');
  }
}
