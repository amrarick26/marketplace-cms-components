import { CmsAsset } from './CmsAssets.interface';

export interface CmsBackground {
  image?: CmsAsset;
  color?: string | number;
}

export interface CmsCarouselSlideTextConfig {
  title?: string;
  subtitle?: string;
}

export interface CmsCarouselSlideConfig {
  background?: CmsBackground;
  text?: CmsCarouselSlideTextConfig;
}

export interface CmsCarouselOptions {
  arrows?: boolean;
  indicators?: boolean;
  wrap?: boolean;
  interval?: number;
  width?: number | string;
  height?: number | string;
}
