import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, catchError, of } from 'rxjs';
import { Location } from 'src/app/interfaces/apiresponse.interface';
import { DataAPIService } from 'src/app/services/data-api.service';
import { LocationsApiActions } from 'src/app/state/actions/locations.actions';
import { searchLocations, selectLocationsState } from 'src/app/state/selectors/locations.selectors';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations$: Observable<any> = new Observable();
  locationsTemp$: Observable<any> = new Observable();

  constructor(private dataApiSvc: DataAPIService, private store: Store<Location[]>, private router: Router ){}

  ngOnInit(): void {
    this.dataApiSvc.getLocationsAPI()
    .pipe(
      catchError(error => {
        console.error('Ha ocurrido un error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Ocurrio un error en la consulta!',
          text: `${error}`,
        });
        return of([]);
      })
    )
    .subscribe((resp: Location[]) => {
      this.store.dispatch(LocationsApiActions.retrievedLocationsList({locations: resp}))
    });

    this.locations$ = this.store.select(selectLocationsState);
    this.locationsTemp$ = this.store.select(selectLocationsState);
  }

  buscar(termino: string){
    if (termino.length === 0) {
      this.locations$ = this.locationsTemp$;
      return;
    }
    this.locations$ = this.store.select(searchLocations(termino));
  }

  goDetail(id: string){
    this.router.navigateByUrl(`/location/${id}`);
  }

}
