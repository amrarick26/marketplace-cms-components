import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CmsCarouselSlideConfig } from 'src/app/models/CmsCarousel.interface';
import { BgColorDirective } from 'src/app/directives/bg-color.directive';
import { moduleMetadata } from '@storybook/angular';


export default { 
  title: 'Carousel',
  component: CarouselComponent,
  parameters: {
    component: CarouselComponent
  },
  decorators: [
    moduleMetadata({
      declarations: [BgColorDirective],
      imports: [NgbCarouselModule]
    })
  ]
}

const BasicExampleSlides: CmsCarouselSlideConfig[] = [
  {
    text: {
      title: 'First Slide',
    },
    background: {
      image: {
        url: `https://picsum.photos/id/944/1700/500`,
        title: 'A metal bridge in the jungle',
      },
    },
  },
  {
    text: {
      title: 'Second Slide',
      subtitle: 'With a subtitle',
    },
    background: {
      image: {
        url: `https://picsum.photos/id/1011/1700/500`,
        title: 'Woman canoeing',
      },
    },
  },
  {
    text: {
      title: 'Third Slide',
      subtitle: 'Background color instead of image',
    },
    background: {
      color: 'blue',
    },
  },
];


export const BasicExample = () => ({
  component: CarouselComponent,
  props: {
    slides: BasicExampleSlides,
  },
});