import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootballComponent } from './football.component';
import { CreateMatchComponent } from './create-match/create-match.component';
import { StartMatchComponent } from './start-match/start-match.component';
import { ScoringMatchComponent } from './scoring-match/scoring-match.component';

const routes: Routes = [
  { path: '', component: FootballComponent },
  { path: 'create', component: CreateMatchComponent },
  { path: 'start/:id', component: StartMatchComponent },
  { path: 'scoring/:id', component: ScoringMatchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootballRoutingModule {}
