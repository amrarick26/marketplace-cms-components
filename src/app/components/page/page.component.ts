import { Component, OnInit, Input, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { PageContentDoc } from '../../models/PageContentDoc.interface';

/**
 * This component is responsible for dynamically rendering all of the components defined in `Content`
 * as well as setting metadata important for SEO
 */
@Component({
  selector: 'cms-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() content: PageContentDoc;

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: HTMLDocument
  ) { }

  ngOnInit(): void {
    if (!this.shouldShowContent(this.content)) {
      // this is an extra check, but should be handled at a higher level ideally
      return console.warn('Page can not be displayed. Please ensure:\n1. Page is active\n2. Page has content doc urls\n3. Page Url matches path of current url')
    }
    this.setMetaData(this.content);
    this.loadScripts(this.content.HeaderEmbeds, this.content.FooterEmbeds);
  }

  private shouldShowContent(content: PageContentDoc): boolean {
    return Boolean(
      content &&
      content.Active &&
      content.Content
    )
  }

  private setMetaData(content: PageContentDoc) {
    // addTag results in dupes, so we use updateTag instead

    // normal metadata
    this.titleService.setTitle(content.Title);
    this.metaService.updateTag({ property: 'application-name', content: content.SiteUrl })
    this.metaService.updateTag({ property: 'description', content: content.Description })

    // open graph meta data
    this.metaService.updateTag({property: 'og:type', content: 'website'})
    this.metaService.updateTag({property: 'og:title', content: content.Title})
    this.metaService.updateTag({property: 'og:description', content: content.Description})
    this.metaService.updateTag({property: 'og:image', content: content.MetaImageUrl})

    // twitter metadata
    this.metaService.updateTag({ property: 'twitter:card', content: 'summary' })
    this.metaService.updateTag({ property: 'twitter:site', content: content.SiteUrl })
    this.metaService.updateTag({ property: 'twitter:title', content: content.Title })
    this.metaService.updateTag({ property: 'twitter:description', content: content.Description })
    this.metaService.updateTag({property: 'twitter:image', content: content.MetaImageUrl})
  }

  private loadScripts(headerEmbeds, footerEmbeds) {
    this.createScriptTag(headerEmbeds, 'head');
    this.createScriptTag(footerEmbeds, 'body');
  }

  private createScriptTag(content: string, appendTo: string): void {
    // create script
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.textContent = content;

    // append to target element
    const target = this.document.getElementsByTagName(appendTo)[0];
    this.renderer.appendChild(target, script);
  }
}
