import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppStringsService } from 'src/app/core/services/app-strings.service';
import { MenuItems } from 'src/app/data-models/menu-items.model';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit, OnChanges {

  @Input() menuItems: Array<MenuItems> = [];
  appLables: any;

  constructor(public appStringsService: AppStringsService) {
    this.appLables = this.appStringsService.appStrings;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }
}
