import { Component, OnInit } from '@angular/core';
import { Contact, Household, DataService } from "../../data.service";

@Component({
  selector: 'app-household-add',
  templateUrl: './household-add.component.html',
  styleUrls: ['./household-add.component.css']
})
export class HouseholdAddComponent implements OnInit {
  private household : Household = new Household();
  private contacts : Contact[] = [new Contact()];

  constructor(private ds : DataService) {
    this.household.address = { street: "test", suburb: null, postcode: null, publicHousing: false }
  }

  ngOnInit() {

  }

  onSubmit(data) {
    const key = this.ds.addHousehold(data.household);
    data.contacts.forEach(contact => {
      contact.household = key;
      this.ds.addContact(contact);
    });
  }

}
