import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScorerRoutingModule } from './scorer-routing.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, DashboardComponent, ForgotPasswordComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ScorerRoutingModule,
  ],
})
export class ScorerModule {}
