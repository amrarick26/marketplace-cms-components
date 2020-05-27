import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { ContentBlockComponent } from 'src/app/components/content-block/content-block.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BgColorDirective } from './directives/bg-color.directive';
import { RowComponent } from './components/row/row.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { HtmlEditorComponent } from './components/html-editor/html-editor.component';
import { ColumnComponent } from './components/column/column.component';
import { OrderCloudModule, Configuration } from '@ordercloud/angular-sdk';

import { CookieModule } from 'ngx-cookie';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ContentContainerComponent,
    ContentBlockComponent,
    CarouselComponent,
    BgColorDirective,
    RowComponent,
    SafeHtmlPipe,
    HtmlEditorComponent,
    ColumnComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    EditorModule,
    CookieModule.forRoot(),
    OrderCloudModule.forRoot(() => new Configuration({}))
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
