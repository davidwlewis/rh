import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Assistance, DataService } from "../../data.service";

@Component({
  selector: 'app-assistance-form',
  templateUrl: './assistance-form.component.html',
  styleUrls: ['./assistance-form.component.css']
})
export class AssistanceFormComponent implements OnInit {
  @Input()
  private household : string;
  private model : Assistance;

  constructor(private ds : DataService) {}

  ngOnInit() {
    this.model = new Assistance(
      new Date().getTime(),
      this.household,
      "Food",
      "",
      "TODO"
    );
  }

  onSubmit(form : FormGroup) {
    if(form.valid) {
      this.ds.addAssistance(this.model);
    }
  }

}
