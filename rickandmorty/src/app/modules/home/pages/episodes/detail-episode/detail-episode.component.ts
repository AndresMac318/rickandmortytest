import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, filter, map } from 'rxjs';
import { Episode } from 'src/app/interfaces/apiresponse.interface';
import { selectEpisode } from 'src/app/state/selectors/episodes.selectors';

@Component({
  selector: 'app-detail-episode',
  templateUrl: './detail-episode.component.html',
  styleUrls: ['./detail-episode.component.scss']
})
export class DetailEpisodeComponent {

  episode$: Observable<Episode> = new Observable();
  id: string;

  constructor(private router: ActivatedRoute, private store: Store ){
    const id = this.router.snapshot.params['id'];
    this.id = id;
  }
  
  ngOnInit(){
    this.getEpisodes();
  }

  getEpisodes(){
    this.episode$ = this.store.select(selectEpisode(this.id)).pipe(
      filter((episode): episode is Episode => episode !== undefined),
      map((episode: Episode) => episode as Episode)
    )
  }

}
