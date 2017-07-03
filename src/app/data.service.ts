import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Client, SearchResponse } from "elasticsearch";
import { BehaviorSubject } from "rxjs";

export class Household {
  public comments : string;
  public address : {
    postcode : number,
    street : string,
    suburb : string,
    publicHousing : boolean
  }
  public adults : number;
  public children : number;
  public $key? :string
}

export class Contact {
  public household : string;
  public name : string;
  public idType : string;
  public idNumber : string;
  public email : string;
  public mobile : string;
  public $key? :string
}

export class Assistance {
  constructor(
    public date : number,
    public household : string,
    public type : string,
    public comment : string,
    public staff : string
  ) {}
  public $key? :string
}

@Injectable()
export class DataService {
  private esc : Client;
  private response : BehaviorSubject<SearchResponse<Contact>> = new BehaviorSubject<SearchResponse<Contact>>(null);

  constructor(public af: AngularFire) {
    this.esc = new Client({
      hosts: [
        {
          host: 'pine-645803.us-east-1.bonsaisearch.net',
          port: '80',
          auth: 'm686cd32:q2e1d3ing1dftk28'
        }
      ]
    });
  }

  private index(type : string, document : Household|Contact) {
    this.esc.create({
      index: 'firebase',
      type: type,
      id: document.$key,
      body: document
    });
  }

  search(term : string) : BehaviorSubject<SearchResponse<Contact>> {
    this.esc.search<Contact>({
      index: 'firebase',
      type: 'contact',
      q: term
    }).then(response => this.response.next(response));
    return this.response;
  }

  getHousehold(key : string) : FirebaseObjectObservable<Household> {
    return this.af.database.object("households/" + key);
  }

  addHousehold(household : Household) : string {
    household.$key = this.af.database.list("households").push(household).key;
    this.index('household', household);
    return household.$key;
  }

  editHousehold(household : Household) {
    this.af.database.object("households/" + household.$key).update(household);
    this.index('household', household);
  }

  getContacts(household : string) : FirebaseListObservable<Contact[]> {
    return this.af.database.list("contacts", { query : {
      orderByChild : "household",
      equalTo : household
    }});
  }

  addContact(contact : Contact) {
    contact.$key = this.af.database.list("contacts").push(contact).key;
    this.index('contact', contact);
    return contact.$key;
  }

  editContact(contact : Contact) {
    this.af.database.object("contacts/" + contact.$key).update(contact);
    this.index('contact', contact);
  }

  getAssistance(household : string) : FirebaseListObservable<Assistance[]> {
    return this.af.database.list("assistance", { query : {
      orderByChild : "household",
      equalTo : household
    }});
  }

  addAssistance(assistance : Assistance) {
    this.af.database.list("assistance").push(assistance);
  }
}
