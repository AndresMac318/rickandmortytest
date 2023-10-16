import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes.component';
import { DetailEpisodeComponent } from './detail-episode/detail-episode.component';

const routes: Routes = [
  {
    path: '', component: EpisodesComponent
  },
  {
    path: ':id', component: DetailEpisodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
