import { ContentDoc } from './ContentDoc.interface';
// import { ContentBlock } from './ContentBlock.interface';

type BootstrapCarouselPauseOption =
  | 'hover'
  | 'mouseenter'
  | 'mouseleave'
  | false;

type BootstrapCarouselRideOption = 'carousel' | false;

interface BootstrapCarouselOptions {
  interval: number;
  keyboard: boolean;
  pause: BootstrapCarouselPauseOption;
  ride: BootstrapCarouselRideOption;
  wrap: boolean;
  touch: boolean;
}

export interface CarouselContentDoc extends ContentDoc {
  options: BootstrapCarouselOptions;
  slides: string[]; //content doc urls
}
