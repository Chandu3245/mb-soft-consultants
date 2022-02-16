import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStringsService {
  appStrings: any;

  constructor() {
    this.appStrings = {
      title: 'MB Soft Consultants',
      home: 'home',
      angular: 'UI Development',
      powerbi: 'Power BI',
      about: 'About'
    }
   }
}
