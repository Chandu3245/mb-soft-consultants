import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppStringsService } from 'src/app/core/services/app-strings.service';
import { MenuItems } from 'src/app/data-models/menu-items.model';
import { Profile } from 'src/app/data-models/profile.model';
import { UiDataService } from '../../services/ui-data.service';

@Component({
  selector: 'app-angular-consultants',
  templateUrl: './angular-consultants.component.html',
  styleUrls: ['./angular-consultants.component.scss']
})
export class AngularConsultantsComponent implements OnInit, OnDestroy {

  menuItems: Array<MenuItems> = [];
  appLables: any;
  uiData$: Observable<Profile>;
  intro: Profile['intro'];
  skills: Profile['skills'];
  contact: Profile['contact'];
  training: Profile['training'];
  subscribe: Subscription;
  constructor(public appStringsService: AppStringsService, private uiDataService: UiDataService) {
    this.appLables = this.appStringsService.appStrings;
  }
  
  ngOnDestroy(): void {
      this.subscribe.unsubscribe();
  }

  ngOnInit(): void {
    this.createMenuItems();
    // this.uiData$ = this.uiDataService.getUIData();
    this.subscribe = this.uiDataService.getUIData().subscribe( data => {
      this.intro = data.intro;
      this.skills = data.skills;
      this.contact = data.contact;
      this.training = data.training;
    });
  }

  createMenuItems() {
    this.menuItems = [
      {
        label: this.appLables.training,
        route: 'angular-consultants#training'
      },
      {
        label: this.appLables.intro,
        route: 'angular-consultants#intro'
      },
      // {
      //   label: this.appLables.experience,
      //   route: 'angular-consultants#experience'
      // },
      {
        label: this.appLables.skills,
        route: 'angular-consultants#skills'
      },
      // {
      //   label: this.appLables.testimony,
      //   route: 'angular-consultants#testimony'
      // },
      {
        label: this.appLables.contact,
        route: 'angular-consultants#contact'
      }
    ];
  }
}
