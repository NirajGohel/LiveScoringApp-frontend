import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballComponent } from './volleyball.component';
import { CreateMatchComponent } from './create-match/create-match.component';
import { ScoringMatchComponent } from './scoring-match/scoring-match.component';
import { ViewMatchComponent } from './view-match/view-match.component';

import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  { path: 'view', component: VolleyballComponent },
  { path: 'view/:id', component: ViewMatchComponent },
  { path: 'create', component: CreateMatchComponent, canActivate: [AuthGuard] },
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
export class VolleyballRoutingModule {}
