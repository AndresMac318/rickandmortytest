import { Injectable } from '@angular/core';

import { Apollo, gql } from 'apollo-angular';
import { take, map } from 'rxjs';


const QUERY1 = gql`
  {
    characters {
      results {
        id
        name
        status
        image
        gender
        species
        created
      }
    }
  }
`

const QUERY2 = gql`
  {
    locations {
      results {
        id
        name
        type
        dimension
        created
      }
    }
  }
`

const QUERY3 = gql`
  {
    episodes {
      results {
        id
        name
        episode
        created
      }
    }
  }
`

@Injectable({
  providedIn: 'root'
})
export class DataAPIService {
  
  constructor(private apollo: Apollo) {}

  getCharactersAPI(){
    return this.apollo.watchQuery<any>({
      query: QUERY1
    }).valueChanges.pipe(
      take(1),
      map(({data:{characters:{results}}}) => {
        return results;
      })
    )
  }

  getLocationsAPI(){
    return this.apollo.watchQuery<any>({
      query: QUERY2
    }).valueChanges.pipe(
      take(1),
      map(({data:{locations:{results}}}) => {
        return results;
      })
    )
  }

  getEpisodesAPI(){
    return this.apollo.watchQuery<any>({
      query: QUERY3
    }).valueChanges.pipe(
      take(1),
      map(({data:{episodes:{results}}}) => {
        return results;
      })
    )
  }


}
