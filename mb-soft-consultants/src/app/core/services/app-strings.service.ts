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
      about: 'About',
      intro: 'Introduction',
      experience: 'Experience',
      skills: 'Skills',
      testimony: 'Testimony',
      contact: 'Contact',
      achievements: 'Achievements',
      training: "Trainings"
    }
   }
}
