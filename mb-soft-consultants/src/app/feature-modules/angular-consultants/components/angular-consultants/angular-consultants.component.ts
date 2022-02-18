import { Component, OnInit } from '@angular/core';
import { AppStringsService } from 'src/app/core/services/app-strings.service';
import { MenuItems } from 'src/app/data-models/menu-items.model';

@Component({
  selector: 'app-angular-consultants',
  templateUrl: './angular-consultants.component.html',
  styleUrls: ['./angular-consultants.component.scss']
})
export class AngularConsultantsComponent implements OnInit {

  menuItems: Array<MenuItems> = [];
  appLables: any;

  constructor(public appStringsService: AppStringsService) {
    this.appLables = this.appStringsService.appStrings;
  }
  
  ngOnInit(): void {
    this.createMenuItems();
  }

  createMenuItems() {
    this.menuItems = [
      {
        label: this.appLables.intro,
        route: 'angular-consultants#intro'
      },
      {
        label: this.appLables.experience,
        route: 'angular-consultants#experience'
      },
      {
        label: this.appLables.skills,
        route: 'angular-consultants#skills'
      },
      {
        label: this.appLables.testimony,
        route: 'angular-consultants#testimony'
      },
      {
        label: this.appLables.contact,
        route: 'angular-consultants#contact'
      }
    ];
  }
}
