import { moduleMetadata } from '@storybook/angular';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { HtmlEditorComponent } from 'src/app/components/html-editor/html-editor.component';
import { OrderCloudModule, Configuration } from '@ordercloud/angular-sdk';
import { CookieModule } from 'ngx-cookie';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export default {
  title: 'HTML Editor',
  component: HtmlEditorComponent,
  parameters: {
    component: HtmlEditorComponent
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        EditorModule,
        NgbModule,
        OrderCloudModule.forRoot(() => new Configuration({})),
        CookieModule.forRoot()
      ],
      providers: [
        { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
      ],
      entryComponents: []
    })
  ]
};

export const BasicExample = () => ({
  component: HtmlEditorComponent,
  props: {
    ocCookieName: 'ordercloud.token',
    remoteCss:
      'https://mgrstoragetest.azureedge.net/buyerweb/styles.e94215343d3493186ae1.css'
  }
});
