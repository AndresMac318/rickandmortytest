import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, catchError, of } from 'rxjs';
import { Episode } from 'src/app/interfaces/apiresponse.interface';
import { DataAPIService } from 'src/app/services/data-api.service';
import { EpisodesApiActions } from 'src/app/state/actions/episodes.actions';
import { searchEpisodes, selectEpisodesState } from 'src/app/state/selectors/episodes.selectors';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {

  episodes$: Observable<any> = new Observable();
  episodesTemp$: Observable<any> = new Observable();

  constructor(private dataApiSvc: DataAPIService, private store: Store<Episode[]>, private router: Router ){}
  
  ngOnInit(): void {
    this.dataApiSvc.getEpisodesAPI()
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
    .subscribe((resp: Episode[]) => {
      this.store.dispatch(EpisodesApiActions.retrievedEpisodesList({episodes: resp}))
    });

    this.episodes$ = this.store.select(selectEpisodesState);
    this.episodesTemp$ = this.store.select(selectEpisodesState);;
  }

  buscar(termino: string){
    if (termino.length === 0) {
      this.episodes$ = this.episodesTemp$;
      return;
    }
    this.episodes$ = this.store.select(searchEpisodes(termino));
  }

  goDetail(id: string){
    this.router.navigateByUrl(`/episode/${id}`);
  }

}
