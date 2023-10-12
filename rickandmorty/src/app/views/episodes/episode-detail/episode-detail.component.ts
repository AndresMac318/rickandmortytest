import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, filter, map } from 'rxjs';

import { selectEpisode } from 'src/app/state/selectors/episodes.selectors';
import { Episode } from 'src/app/interfaces/apiresponse.interface';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent {

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
