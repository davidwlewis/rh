import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateValueAccessorDirective } from './date-value-accessor.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DateValueAccessorDirective],
  exports: [DateValueAccessorDirective]
})
export class UtilModule { }
