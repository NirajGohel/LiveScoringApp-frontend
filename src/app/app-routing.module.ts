import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './modules/scorer/login/login.component';
// import { SignupComponent } from './modules/scorer/signup/signup.component';
// import { DashboardComponent } from './modules/scorer/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'dashboard', component: DashboardComponent },
  {
    path: 'scorer',
    loadChildren: () =>
      import('./modules/scorer/scorer.module').then((m) => m.ScorerModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'football',
    loadChildren: () =>
      import('./modules/football/football.module').then(
        (m) => m.FootballModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
