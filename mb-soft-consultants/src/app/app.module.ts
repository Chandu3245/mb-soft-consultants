import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AboutComponent } from './core/components/about/about.component';
import { AngularConsultantsModule } from './feature-modules/angular-consultants/angular-consultants.module';
import { PowerbiConsultantsModule } from './feature-modules/powerbi-consultants/powerbi-consultants.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularConsultantsModule,
    PowerbiConsultantsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
