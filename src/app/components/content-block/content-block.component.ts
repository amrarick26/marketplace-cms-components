import { Component, OnInit, Input } from '@angular/core';
import { ContentBlockDoc } from 'src/app/models/ContentBlockDoc.interface';

@Component({
  selector: 'cms-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.scss'],
})
export class ContentBlockComponent implements OnInit {
  @Input() content: ContentBlockDoc;

  constructor() {}

  ngOnInit(): void {
  }
}

