import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootballComponent } from './football.component';
import { CreateMatchComponent } from './create-match/create-match.component';

const routes: Routes = [
  { path: '', component: FootballComponent },
  { path: 'create', component: CreateMatchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootballRoutingModule {}
