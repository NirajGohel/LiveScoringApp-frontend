import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FootballRoutingModule } from './football-routing.module';
import { FootballComponent } from './football.component';
import { CreateMatchComponent } from './create-match/create-match.component';

@NgModule({
  declarations: [FootballComponent, CreateMatchComponent],
  imports: [
    CommonModule,
    FootballRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [CreateMatchComponent],
})
export class FootballModule {}
