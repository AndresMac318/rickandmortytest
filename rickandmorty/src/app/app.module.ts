import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { charactersReducer } from './state/reducers/characters.reducers';
import { locationsReducer } from './state/reducers/locations.reducers';
import { episodesReducer } from './state/reducers/episodes.reducers';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { EpisodesComponent } from './views/episodes/episodes.component';
import { CharactersComponent } from './views/characters/characters.component';
import { DetailComponent } from './views/characters/detail/detail.component';
import { LocationsComponent } from './views/locations/locations.component';
import { LocationDetailComponent } from './views/locations/location-detail/location-detail.component';
import { EpisodeDetailComponent } from './views/episodes/episode-detail/episode-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CharactersComponent,
    LocationsComponent,
    LocationDetailComponent,
    DetailComponent,
    EpisodesComponent,
    EpisodeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      characters: charactersReducer,
      locations: locationsReducer,
      episodes: episodesReducer,
    }),
    GraphQLModule,
    StoreDevtoolsModule.instrument({ name: 'TEST' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
