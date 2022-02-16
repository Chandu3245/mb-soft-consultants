import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularConsultantsComponent } from './components/angular-consultants/angular-consultants.component';


const routes: Routes = [
  { path: '', component: AngularConsultantsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularConsultantsRoutingModule { }
