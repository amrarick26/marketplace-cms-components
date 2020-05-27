import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import Color from 'color';

@Directive({
  selector: '[cmsBgColor]',
})
export class BgColorDirective implements OnInit {
  @Input() cmsBgColor?: string;
  el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    if (this.cmsBgColor) {
      try {
        const color = new Color(this.cmsBgColor);
        this.el.nativeElement.style.backgroundColor = color.hex();
      } catch (ex) {
        console.log(ex);
        throw ex;
      }
    }
  }
}
