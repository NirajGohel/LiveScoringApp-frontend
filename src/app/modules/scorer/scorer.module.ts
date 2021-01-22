import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScorerRoutingModule } from './scorer-routing.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, DashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ScorerRoutingModule,
  ],
})
export class ScorerModule {}
