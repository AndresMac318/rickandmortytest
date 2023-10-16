import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'location',
    component: HomeComponent,
    loadChildren: () => import('./pages/locations/locations.module').then(m => m.LocationsModule)
  },
  {
    path: 'episode',
    component: HomeComponent,
    loadChildren: () => import('./pages/episodes/episodes.module').then(m => m.EpisodesModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
