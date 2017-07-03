import { Component, OnInit, Input } from '@angular/core';
import { Assistance } from "../../data.service";

@Component({
  selector: 'app-assistance-detail',
  templateUrl: './assistance-detail.component.html',
  styleUrls: ['./assistance-detail.component.css']
})
export class AssistanceDetailComponent implements OnInit {
  @Input() assistance : Assistance;
  constructor() { }

  ngOnInit() {
  }

}
