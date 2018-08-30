import { Component, OnInit } from '@angular/core';

import { Station } from '../../models/station';
import { StationService } from '../../services/station.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  private stations: Station[];
  lat: number = 60.171350;
  lon: number = 24.941337;
  zoom: number = 16;

  constructor(private stationService: StationService) {}

  ngOnInit() {
    this.getStations();
  }

  private getStations(): void {
    this.stationService.getStations().subscribe(result =>
      this.stations = result.data && result.data.bikeRentalStations
    );
  }
}
