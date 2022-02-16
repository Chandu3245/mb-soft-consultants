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
  rightMenuItems: Array<MenuItems> = [];
  appLables: any;

  constructor(public appStringsService: AppStringsService) {
    this.appLables = this.appStringsService.appStrings;
    this.createMenuItems();
    this.createRightMenuItems();
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
      }
    ];
  }

  createRightMenuItems() {
    this.rightMenuItems = [
      {
        label: this.appLables.about,
        route: 'about'
      }
    ]
  }
}
