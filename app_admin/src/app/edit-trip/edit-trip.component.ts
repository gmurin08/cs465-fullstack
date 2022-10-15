import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  
  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder:FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    //retreive stashed trip id
    let tripCode = localStorage.getItem('tripCode');
    if(!tripCode){
      alert("Something went wrong. Couldn't find trip code");
      this.router.navigate(['']);
      return;
    }

    console.log("EditTripComponent #onInit found tripCode" + tripCode);

    //Initialize form
    this.editForm = this.formBuilder.group({
      id:[],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    })

    this.tripService.getTrip(tripCode)
      .then(data=>{
        console.log(data);
        this.editForm.patchValue(data[0]);
      })
  }

  onSubmit(){
    this.tripService.updateTrip(this.editForm.value)
      .then(data=>{
        console.log(data);
        this.router.navigate(['list-trips'])
      });
  }

}
