import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballComponent } from './volleyball.component';
import { CreateMatchComponent } from './create-match/create-match.component';

const routes: Routes = [
  { path: '', component: VolleyballComponent },
  { path: 'create', component: CreateMatchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballRoutingModule {}
