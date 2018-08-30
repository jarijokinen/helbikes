import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost';

import { StationsComponent } from './components/stations/stations.component';

import { GOOGLE_MAPS_API_KEY } from '../keys';

@NgModule({
  declarations: [
    AppComponent,
    StationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({ apiKey: GOOGLE_MAPS_API_KEY }),
    ApolloBoostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(boost: ApolloBoost) {
    boost.create({ 
      uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql' 
    });
  }
}
