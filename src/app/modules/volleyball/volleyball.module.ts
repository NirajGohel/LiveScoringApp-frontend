import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { VolleyballRoutingModule } from './volleyball-routing.module';
import { VolleyballComponent } from './volleyball.component';
import { CreateMatchComponent } from './create-match/create-match.component';
import { ScoringMatchComponent } from './scoring-match/scoring-match.component';
import { ViewMatchComponent } from './view-match/view-match.component';

@NgModule({
  declarations: [VolleyballComponent, CreateMatchComponent, ScoringMatchComponent, ViewMatchComponent],
  imports: [
    CommonModule,
    VolleyballRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class VolleyballModule {}
