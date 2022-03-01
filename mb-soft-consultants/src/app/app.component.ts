import { Component } from '@angular/core';
import { AppStringsService } from './core/services/app-strings.service';
import { MenuItems } from './data-models/menu-items.model';
import { Router, NavigationEnd } from '@angular/router';
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems: Array<MenuItems> = [];
  appLables: any;

  constructor(public appStringsService: AppStringsService, private router: Router) {
    this.appLables = this.appStringsService.appStrings;
    this.createMenuItems();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-RX31XYL65C',
          {
            'page_path': event.urlAfterRedirects
          }
        );
      }
    })
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
