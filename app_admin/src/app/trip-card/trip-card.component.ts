import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
