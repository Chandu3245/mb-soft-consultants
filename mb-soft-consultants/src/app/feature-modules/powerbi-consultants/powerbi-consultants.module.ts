import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowerbiConsultantsRoutingModule } from './powerbi-consultants-routing.module';
import { PowerbiConsultantsComponent } from './components/powerbi-consultants/powerbi-consultants.component';


@NgModule({
  declarations: [PowerbiConsultantsComponent],
  imports: [
    CommonModule,
    PowerbiConsultantsRoutingModule
  ]
})
export class PowerbiConsultantsModule { }
