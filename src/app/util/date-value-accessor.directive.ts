import { Directive, Renderer, ElementRef, forwardRef } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

const DATE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateValueAccessorDirective),
  multi: true
};

@Directive({
  selector: 'input[type=mydate]',
  host: {
    "type": "date",
    "(input)": "input($event.target.valueAsDate)",
    "(blur)": "blur()"
  },
  providers: [DATE_VALUE_ACCESSOR]
})
export class DateValueAccessorDirective implements ControlValueAccessor {
  onChange = (_: any) => {};
  onTouched = () => {};

  constructor(private renderer: Renderer, private elementRef: ElementRef) {}

  blur() {
    this.onTouched();
  }

  input(value : string) {
    console.log(value);
    this.onChange(value);
  }

  registerOnChange(fn: (value: any) => any): void { this.onChange = fn; }

  registerOnTouched(fn: () => any): void { this.onTouched = fn; }

  writeValue(value: any): void {
    this.renderer.setElementProperty(this.elementRef.nativeElement, 'valueAsDate', new Date(value));
  }
}
