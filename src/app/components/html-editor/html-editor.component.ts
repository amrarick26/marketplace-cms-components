import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cms-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.scss']
})
export class HtmlEditorComponent implements OnInit {
  @Input() ocToken: string;
  @Input() remoteCss: string;
  @Input() initialValue: string;

  constructor() {}

  ngOnInit(): void {}
}
