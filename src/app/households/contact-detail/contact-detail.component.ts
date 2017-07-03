import { Component, OnInit, Input } from '@angular/core';
import { Contact } from "../../data.service";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact : Contact;

  constructor() { }

  ngOnInit() {
  }

}
