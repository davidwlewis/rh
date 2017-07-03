import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalendarDayComponent, AppointmentDetailComponent]
})
export class CalendarModule { }
