import { Component, Input, OnInit } from '@angular/core';
import { Skills } from 'src/app/data-models/profile.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skills: Skills;
  constructor() { }

  ngOnInit(): void {
  }

}
