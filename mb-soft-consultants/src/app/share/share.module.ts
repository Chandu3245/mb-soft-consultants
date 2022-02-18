import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { RouterModule } from '@angular/router';
import { IntroSelfComponent } from './components/intro-self/intro-self.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TestimonyComponent } from './components/testimony/testimony.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [SubHeaderComponent, IntroSelfComponent, ExperienceComponent, SkillsComponent, TestimonyComponent, ContactComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SubHeaderComponent, IntroSelfComponent, ExperienceComponent, SkillsComponent, TestimonyComponent, ContactComponent]
})
export class ShareModule { }
