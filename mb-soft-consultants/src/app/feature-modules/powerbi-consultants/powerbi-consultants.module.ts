import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowerbiConsultantsRoutingModule } from './powerbi-consultants-routing.module';
import { PowerbiConsultantsComponent } from './components/powerbi-consultants/powerbi-consultants.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [PowerbiConsultantsComponent],
  imports: [
    CommonModule,
    PowerbiConsultantsRoutingModule,
    ShareModule
  ]
})
export class PowerbiConsultantsModule { }
