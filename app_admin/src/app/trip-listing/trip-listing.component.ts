import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
 
/* Previously used to render static data from file:
import {trips} from '../data/trips'; 
*/
// Now using service object to pull data
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {

  //Init empty trip array and message string
  trips: Trip[];
  message: string;
  
  constructor(
    private tripDataService: TripDataService,
    private router: Router
    ) { }

  private addTrip(): void {
    console.log('Inside TripListingCompontent#addTrip');
    this.router.navigate(['add-trip']);
  }

  //component version of getTrips that calls the service object version
  private getTrips(): void{
    console.log('Inside TripListingComponent #getTrips')
    this.message = 'Searching for trips';
    //Service object returns promise so pull data and assign to array
    this.tripDataService.getTrips().then(foundTrips=>{
      this.message = foundTrips.length > 0 ? '' : 'No trips found';
      this.trips = foundTrips;
    });
  }

  ngOnInit(): void {
    this.getTrips();
  }

}
