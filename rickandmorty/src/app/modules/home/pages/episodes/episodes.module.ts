import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { DetailEpisodeComponent } from './detail-episode/detail-episode.component';


@NgModule({
  declarations: [
    EpisodesComponent,
    DetailEpisodeComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule { }
