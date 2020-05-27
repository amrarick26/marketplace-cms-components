import { PageComponent } from '../app/components/page/page.component';
import { ContentContainerComponent } from '../app/components/content-container/content-container.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';
import { ContentBlockComponent } from '../app/components/content-block/content-block.component';
import { SafeHtmlPipe } from 'src/app/pipes/safe-html.pipe';
import { moduleMetadata } from '@storybook/angular';
import { PageContentDoc } from 'src/app/models/PageContentDoc.interface';

export default {
  title: 'Page',
  component: PageComponent,
  parameters: {
    component: PageComponent
  },
  decorators: [
    moduleMetadata({
      declarations: [
        ContentContainerComponent,
        ContentBlockComponent,
        SafeHtmlPipe
      ],
      imports: [HttpClientModule],
      providers: [HttpClient, Meta, Title, Renderer2],
      entryComponents: [ContentBlockComponent]
    })
  ]
}

const BasicExamplePage: PageContentDoc = {
  ComponentName: 'PageComponent',
  SiteUrl: 'https://music-resell-store.com',
  Url: '/page1',
  Title: 'FAQ',
  Description: 'Frequently Asked Questions',
  MetaImageUrl: 'https://www.superoffice.com/globalassets/blog/2016/10/how-to-build-faq-section.jpg',
  DateLastUpdated: '2020-05-15T03:55:03.021Z',
  Active: true,
  Content: [
    {
      'ComponentName': 'ContentBlockComponent',
      'TextArea': `
      <div class="container">
        <p style="max-width: 500px;">
          You can right click to inspect the html to see the metadata that are set. Its easier if you click 'Open canvas in a new tab' (top right).
          You should see the following metadata set for this component:
        </p>
        <table class="table table-striped">
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>Title</td>
            <td>FAQ</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Frequently Asked Questions</td>
          </tr>
          <tr>
            <td>Image</td>
            <td>https://www.superoffice.com/globalassets/blog/2016/10/how-to-build-faq-section.jpg/<td>
          </tr>
        </table>
      </div>
      `,
    },
  ],
  HeaderEmbeds: '',
  FooterEmbeds: '',
  NavTitle: null
}

export const BasicExample = () => ({
  component: PageComponent,
  props: {
    content: BasicExamplePage
  },
});