import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularConsultantsRoutingModule } from './angular-consultants-routing.module';
import { AngularConsultantsComponent } from './components/angular-consultants/angular-consultants.component';


@NgModule({
  declarations: [AngularConsultantsComponent],
  imports: [
    CommonModule,
    AngularConsultantsRoutingModule
  ]
})
export class AngularConsultantsModule { }
