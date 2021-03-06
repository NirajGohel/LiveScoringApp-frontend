import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootballComponent } from './football.component';
import { CreateMatchComponent } from './create-match/create-match.component';
import { StartMatchComponent } from './start-match/start-match.component';
import { ScoringMatchComponent } from './scoring-match/scoring-match.component';
import { ViewMatchComponent } from './view-match/view-match.component';

import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  { path: 'view', component: FootballComponent },
  { path: 'view/:id', component: ViewMatchComponent },
  { path: 'create', component: CreateMatchComponent, canActivate: [AuthGuard] },
  {
    path: 'start/:id',
    component: StartMatchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'scoring/:id',
    component: ScoringMatchComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootballRoutingModule {}
