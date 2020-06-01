import { moduleMetadata } from '@storybook/angular';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { HtmlEditorComponent } from 'src/app/components/html-editor/html-editor.component';
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
      imports: [EditorModule, NgbModule],
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
    ocToken: '',
    initialValue: '',
    remoteCss:
      'https://mgrstoragetest.azureedge.net/buyerweb/styles.e94215343d3493186ae1.css'
  }
});

export const ThemeExample = () => ({
  component: HtmlEditorComponent,
  props: {
    ocToken: '',
    initialValue: `
      <h1>h1. Bootstrap heading</h1>
      <h2>h2. Bootstrap heading</h2>
      <h3>h3. Bootstrap heading</h3>
      <h4>h4. Bootstrap heading</h4>
      <h5>h5. Bootstrap heading</h5>
      <h6>h6. Bootstrap heading</h6>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
    `,
    remoteCss:
      'https://mgrstoragetest.azureedge.net/buyerweb/styles.e94215343d3493186ae1.css'
  }
});
