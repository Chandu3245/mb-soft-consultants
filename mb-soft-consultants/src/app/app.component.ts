import { Component } from '@angular/core';
import { AppStringsService } from './core/services/app-strings.service';
import { MenuItems } from './data-models/menu-items.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems: Array<MenuItems> = [];
  appLables: any;

  constructor(public appStringsService: AppStringsService) {
    this.appLables = this.appStringsService.appStrings;
    this.createMenuItems();
  }

  createMenuItems() {
    this.menuItems = [
      {
        label: this.appLables.angular,
        route: 'angular-consultants'
      },
      {
        label: this.appLables.powerbi,
        route: 'powerbi-consultants'
      },
      // {
      //   label: this.appLables.about,
      //   route: 'about'
      // }
    ];
  }
}
