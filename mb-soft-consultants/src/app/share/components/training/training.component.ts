import { Component, Input, OnInit } from '@angular/core';
import { Training } from 'src/app/data-models/profile.model';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  @Input() training: Training;
  constructor() { }

  ngOnInit(): void {
  }

}
