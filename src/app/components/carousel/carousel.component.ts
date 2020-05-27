import { Component, OnInit, Input } from '@angular/core';
import {
  CmsCarouselOptions,
  CmsCarouselSlideConfig,
} from 'src/app/models/CmsCarousel.interface';

export const CMS_CAROUSEL_DEFAULT_OPTIONS: CmsCarouselOptions = {
  arrows: true,
  indicators: true,
  wrap: true,
  interval: 5000,
};

@Component({
  selector: 'cms-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() slides: CmsCarouselSlideConfig[];
  @Input() options?: CmsCarouselOptions;

  constructor() {}

  ngOnInit(): void {
    this.options = { ...CMS_CAROUSEL_DEFAULT_OPTIONS, ...this.options };
  }
}
