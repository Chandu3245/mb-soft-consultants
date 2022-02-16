import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./core/components/about/about.component";
import { HomeComponent } from "./core/components/home/home.component";
import { PageNotFoundComponent } from "./core/components/page-not-found/page-not-found.component";


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'angular-consultants', loadChildren: () => import('./feature-modules/angular-consultants/angular-consultants.module').then(m => m.AngularConsultantsModule) },
    { path: 'powerbi-consultants', loadChildren: () => import('./feature-modules/powerbi-consultants/powerbi-consultants.module').then(m => m.PowerbiConsultantsModule) },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}