import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, filter, map } from 'rxjs';
import { selectLocation } from 'src/app/state/selectors/locations.selectors';

import { Location } from "src/app/interfaces/apiresponse.interface";

@Component({
  selector: 'app-detail-location',
  templateUrl: './detail-location.component.html',
  styleUrls: ['./detail-location.component.scss']
})
export class DetailLocationComponent {

  location$: Observable<Location> = new Observable();
  id: string;

  constructor(private router: ActivatedRoute, private store: Store ){
    const id = this.router.snapshot.params['id'];
    this.id = id;
  }
  
  ngOnInit(){
    this.getLocations();
  }

  getLocations(){
    this.location$ = this.store.select(selectLocation(this.id)).pipe(
      filter((location): location is Location => location !== undefined),
      map((location: Location) => location as Location)
    )
  }

}
