import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PowerbiConsultantsComponent } from './components/powerbi-consultants/powerbi-consultants.component';


const routes: Routes = [
  { path: '', component: PowerbiConsultantsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowerbiConsultantsRoutingModule { }
