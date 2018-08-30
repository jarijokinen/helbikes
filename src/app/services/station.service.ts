import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Apollo, gql } from 'apollo-angular-boost';

import { Station } from '../models/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  constructor(private apollo: Apollo) {}

  public getStations(): Observable<any> {
    const STATIONS_QUERY = gql`
      {
        bikeRentalStations {
          name
          lat
          lon
          bikesAvailable
        }
      }
    `;
    return this.apollo
      .watchQuery({ query: STATIONS_QUERY })
      .valueChanges;
  }
}
