import { Component, OnInit } from '@angular/core';
import { Contact, DataService } from "../../data.service";
import { SearchResponse } from "elasticsearch";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private response;

  constructor(private ds : DataService) {}


  ngOnInit() {

  }

  getSortedHits(response) {
    return response ? response.hits.hits.sort((a, b) => (a._score - b._score)) : null;
  }

  search(term) {
    console.log(term);
    this.response = this.ds.search(term);
  }
}
