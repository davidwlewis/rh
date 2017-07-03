import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "@angular/material";
import { Md2Module }  from 'md2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UtilModule } from '../util/util.module'
import { SearchComponent } from './search/search.component';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { HouseholdFormComponent } from './household-form/household-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AssistanceFormComponent } from './assistance-form/assistance-form.component';
import { AssistanceDetailComponent } from './assistance-detail/assistance-detail.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { HouseholdDetailComponent } from './household-detail/household-detail.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { HouseholdViewComponent } from './household-view/household-view.component';
import { HouseholdAddComponent } from './household-add/household-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    Md2Module,
    NgbModule,
    UtilModule
  ],
  declarations: [
    SearchComponent,
    FormDialogComponent,
    HouseholdFormComponent,
    ContactFormComponent,
    AssistanceFormComponent,
    AssistanceDetailComponent,
    ContactDetailComponent,
    HouseholdDetailComponent,
    ContactAddComponent,
    HouseholdViewComponent,
    HouseholdAddComponent
  ],
  entryComponents: [
    HouseholdFormComponent
  ]
})
export class HouseholdsModule { }
