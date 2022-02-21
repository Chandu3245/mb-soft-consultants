import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AngularConsultantsRoutingModule } from './angular-consultants-routing.module';
import { AngularConsultantsComponent } from './components/angular-consultants/angular-consultants.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [AngularConsultantsComponent],
  imports: [
    CommonModule,
    AngularConsultantsRoutingModule,
    ShareModule,
    HttpClientModule
  ]
})
export class AngularConsultantsModule { }
