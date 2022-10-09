import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router'
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  /*
  Calls trip data from parent component
  '../trip-listing/trip-listing.component.html'
  */
  @Input('trip') trip: any;
  constructor( 
    private router: Router,
    private tripService: TripDataService) { }

  ngOnInit(): void{
  }

  private editTrip(trip:Trip): void{
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip'])
  }

  private deleteTrip(tripCode:string): void{
    console.log("clicked delete on code " + tripCode)
    this.tripService.deleteTrip(tripCode)
      .then(data=>{
        console.log(data);
      });
      window.location.reload()
  }

}
