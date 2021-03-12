import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FootballRoutingModule } from './football-routing.module';
import { FootballComponent } from './football.component';
import { CreateMatchComponent } from './create-match/create-match.component';
import { StartMatchComponent } from './start-match/start-match.component';
import { ScoringMatchComponent } from './scoring-match/scoring-match.component';
import { ViewMatchComponent } from './view-match/view-match.component';

@NgModule({
  declarations: [FootballComponent, CreateMatchComponent, StartMatchComponent, ScoringMatchComponent, ViewMatchComponent],
  imports: [
    CommonModule,
    FootballRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [CreateMatchComponent],
})
export class FootballModule {}
