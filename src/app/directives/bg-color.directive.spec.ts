import { BgColorDirective } from './bg-color.directive';
import { ElementRef } from '@angular/core';

describe('BgColorDirective', () => {
  it('should create an instance', () => {
    const directive = new BgColorDirective(new ElementRef('div'));
    expect(directive).toBeTruthy();
  });
});
