import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballComponent } from './volleyball.component';
import { CreateMatchComponent } from './create-match/create-match.component';
import { ScoringMatchComponent } from './scoring-match/scoring-match.component';

const routes: Routes = [
  { path: 'view', component: VolleyballComponent },
  { path: 'create', component: CreateMatchComponent },
  { path: 'scoring/:id', component: ScoringMatchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballRoutingModule {}
