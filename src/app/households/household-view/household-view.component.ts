import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Rx';
import { FirebaseObjectObservable, FirebaseListObservable } from "angularfire2";
import { DataService, Household, Contact, Assistance } from "../../data.service";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HouseholdFormComponent } from "../household-form/household-form.component";

@Component({
  selector: 'app-household-view',
  templateUrl: './household-view.component.html',
  styleUrls: ['./household-view.component.css']
})
export class HouseholdViewComponent implements OnInit {
  private key : string;
  private household : FirebaseObjectObservable<Household>;
  private contacts : FirebaseListObservable<Contact[]>;
  private assistance : Observable<Assistance[]>;

  constructor(
    public ds : DataService,
    private ms : NgbModal,
    private route : ActivatedRoute
  ) {}

  ngOnInit() {
    this.key = this.route.snapshot.params['id'];
    this.household = this.ds.getHousehold(this.key);
    this.contacts = this.ds.getContacts(this.key);
    this.assistance = this.ds.getAssistance(this.key).map(arr => arr.sort((a, b) => {return b.date - a.date}));
  }

  editHousehold() {
    const modalRef = this.ms.open(HouseholdFormComponent, {size: "lg"});
    const modalSub = this.household.subscribe(hh => modalRef.componentInstance.household = hh);
    modalSub.add(this.contacts.subscribe(cs => modalRef.componentInstance.contacts = cs));


    modalRef.componentInstance.submit.subscribe(result => {
      modalSub.unsubscribe();
      this.ds.editHousehold(result.household);
      result.contacts.forEach(contact => this.ds.editContact(contact));
      modalRef.dismiss();
    });
  }

  addContact() {
    console.log("TODO");
  }
}
