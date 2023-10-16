import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { DetailLocationComponent } from './detail-location/detail-location.component';
import { LocationsComponent } from './locations.component';


@NgModule({
  declarations: [
    LocationsComponent,
    DetailLocationComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
