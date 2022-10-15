import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }
    
  ngOnInit() {
    if (this.isLoggedIn()){
      this.router.navigate(['list-trips'])
    }
  }

  public isLoggedIn(): boolean{
    return this.authenticationService.isLoggedIn();
  }
}
