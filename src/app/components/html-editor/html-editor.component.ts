import { Component, OnInit, Input } from '@angular/core';
import { OcTokenService } from '@ordercloud/angular-sdk';

@Component({
  selector: 'cms-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.scss']
})
export class HtmlEditorComponent implements OnInit {
  @Input() ocCookieName: string;
  @Input() remoteCss: string;

  constructor(private ocTokenService: OcTokenService) {}

  ngOnInit(): void {
    this.ocTokenService.SetAccess(
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3IiOiJhbm9uLXRlbXBsYXRlLXVzZXIiLCJjaWQiOiJlOTU1ZDZlYy01OWM4LTQ0NDItOTQ4ZS0xNmNjYzVmZDI3YWUiLCJvcmRlcmlkIjoibXRXUnYtT1lvVXFhekQyRm5yVWpwdyIsInUiOiIxMDIwMjMwIiwidXNydHlwZSI6ImJ1eWVyIiwicm9sZSI6WyJNZUFkZHJlc3NBZG1pbiIsIk1lQWRtaW4iLCJNZUNyZWRpdENhcmRBZG1pbiIsIk1lWHBBZG1pbiIsIlNob3BwZXIiLCJTdXBwbGllclJlYWRlciIsIlN1cHBsaWVyQWRkcmVzc1JlYWRlciIsIlBhc3N3b3JkUmVzZXQiLCJCdXllclJlYWRlciJdLCJpc3MiOiJodHRwczovL2F1dGgub3JkZXJjbG91ZC5pbyIsImF1ZCI6Imh0dHBzOi8vYXBpLm9yZGVyY2xvdWQuaW8iLCJleHAiOjE1OTEyMDQ0MzYsIm5iZiI6MTU5MDU5OTYzNn0.JvRJnjNaYwSlh-4k1Nk6xevT5qLrCcVjvfH56zME6VQ'
    );
  }
}
