import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Introduction } from 'src/app/data-models/profile.model';

@Component({
  selector: 'app-intro-self',
  templateUrl: './intro-self.component.html',
  styleUrls: ['./intro-self.component.scss']
})
export class IntroSelfComponent implements OnInit, OnChanges {

  @Input() intro: Introduction;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      // console.log(changes)
  }

}
