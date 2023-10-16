import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations.component';
import { DetailLocationComponent } from './detail-location/detail-location.component';

const routes: Routes = [
  {
    path: '', component: LocationsComponent
  },
  {
    path: ':id', component: DetailLocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
