import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScorerRoutingModule } from './scorer-routing.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';

import { FootballModule } from '../football/football.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    HomeComponent,
  ],
  imports: [
    ScorerRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FootballModule,
  ],
  exports: [DashboardComponent, HomeComponent],
})
export class ScorerModule {}
