import { Component, OnInit, Input} from '@angular/core';
import { DataService, Household } from '../../data.service';

@Component({
  selector: 'app-household-detail',
  templateUrl: './household-detail.component.html',
  styleUrls: ['./household-detail.component.css']
})
export class HouseholdDetailComponent implements OnInit {
  @Input() household : Household;

  constructor() { }

  ngOnInit() {
  }

}
