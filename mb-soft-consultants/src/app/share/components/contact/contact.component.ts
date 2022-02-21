import { Component, Input, OnInit } from '@angular/core';
import { SocialMedia } from 'src/app/data-models/profile.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contact: SocialMedia;
  constructor() { }

  ngOnInit(): void {
  }

}
