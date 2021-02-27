import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  {
    path: 'dashboard',
    redirectTo: 'dashboard/home',
  },
  { path: 'dashboard/home', component: HomeComponent },
  {
    path: 'football',
    loadChildren: () =>
      import('../football/football.module').then((m) => m.FootballModule),
  },
  {
    path: 'volleyball',
    loadChildren: () =>
      import('../volleyball/volleyball.module').then((m) => m.VolleyballModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScorerRoutingModule {}
