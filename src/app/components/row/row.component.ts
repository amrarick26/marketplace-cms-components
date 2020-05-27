import { Component, OnInit, Input } from '@angular/core';
import { RowContentDoc } from 'src/app/models/RowContentDoc.interface';

/**
 * Build layouts of all shapes and sizes with this row/column system built on top of Bootstrap
 * 
 * - 12 column layout
 * - 5 default breakpoints for responsive layouts
 *    - `xs` (phone)
 *    - `sm` (large phone)
 *    - `md` (tablet)
 *    - `lg` (desktop)
 *    - `xl` (large desktop)
 */
@Component({
  selector: 'cms-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  host: {'class': 'row'}
})
export class RowComponent implements OnInit {
  @Input() content: RowContentDoc;

  constructor() { }

  ngOnInit(): void {
  }
}
