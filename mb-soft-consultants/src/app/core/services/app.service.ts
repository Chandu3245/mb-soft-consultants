import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private router: Router) { }


  routeToUI() {
    this.router.navigate(['angular-consultants']);
  }

  routeToPowerBI() {
    this.router.navigate(['powerbi-consultants']);
  }

  routeToAbout() {
    this.router.navigate(['about']);
  }
}
