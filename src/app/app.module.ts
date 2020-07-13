import 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { AppComponent } from './app.component';
import { HtmlEditorComponent } from './components/html-editor/html-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageEditorComponent } from './components/page-editor/page-editor.component';
import { AssetPickerComponent } from './components/asset-picker/asset-picker.component';
import { CarouselEditorComponent } from './components/carousel-editor/carousel-editor.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionPickerComponent } from './components/section-picker/section-picker.component';
import { SectionTemplateRendererComponent } from './components/section-template-renderer/section-template-renderer.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { AssetUpdateComponent } from './components/asset-update/asset-update.component';
import { AssetUploadComponent } from './components/asset-upload/asset-upload.component';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { SectionDateSettingsComponent } from './components/section-date-settings/section-date-settings.component';
import { AssetSearchComponent } from './components/asset-search/asset-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlEditorComponent,
    PageEditorComponent,
    AssetPickerComponent,
    CarouselEditorComponent,
    ConfirmModalComponent,
    SectionPickerComponent,
    SectionTemplateRendererComponent,
    SafeHtmlPipe,
    AssetListComponent,
    AssetUpdateComponent,
    AssetUploadComponent,
    DragAndDropDirective,
    SectionDateSettingsComponent,
    AssetSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    EditorModule,
    NgbModalModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  entryComponents: [
    ConfirmModalComponent,
    AssetPickerComponent,
    CarouselEditorComponent,
    SectionPickerComponent,
    SectionDateSettingsComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
