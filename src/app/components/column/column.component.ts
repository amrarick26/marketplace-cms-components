import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ColumnContentDoc, BootstrapMediaDefinition } from 'src/app/models/ColumnContentDoc.interface';

@Component({
  selector: 'cms-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() content: ColumnContentDoc;
  @HostBinding('class') 
  get getColumnClass(){
    const widthClasses = this.getWidthClasses();
    const paddingClasses = this.getPaddingClasses();

    return [...widthClasses, ...paddingClasses].join(' ');
  };

  constructor() { }

  ngOnInit(): void {
  }

  getWidthClasses() {
    const definition = this.content.Width;
    if(!definition) {
      return ['col'];
    }
    if(typeof definition === 'number') {
      return [`col-${definition}`];
    }
    let classNames: string[] = []
    for(const breakpoint in definition){
      const columnWidth = definition[breakpoint];
      let className = `col-${breakpoint}-${columnWidth}`
      if(breakpoint === 'xs') {
        // there isn't actually an xs in bootstrap
        className = `col-${columnWidth}`
      }
      classNames.push(className)
    }
    return classNames;
  }

  getPaddingClasses() {
    const padding = this.content.Padding;
    if(padding === null || padding === undefined) {
      return [];
    }
    return [`p-${padding}`]
  }
}
