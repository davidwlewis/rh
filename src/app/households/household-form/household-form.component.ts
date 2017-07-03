import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Household, Contact, DataService } from "../../data.service";

@Component({
  selector: 'app-household-form',
  templateUrl: './household-form.component.html',
  styleUrls: ['./household-form.component.css']
})
export class HouseholdFormComponent implements OnInit {
  @Input() private household : Household;
  @Input() private contacts : Contact[];

  @Output() public submit : EventEmitter<{household : Household, contacts: Contact[]}> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onSubmit() {
    this.submit.emit({
      household: this.household,
      contacts: this.contacts
    });

  }
}
