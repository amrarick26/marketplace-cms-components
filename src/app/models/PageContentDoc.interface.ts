import { ContentDoc } from './ContentDoc.interface';

export interface PageContentDoc extends ContentDoc {
    Url: string;
    SiteUrl: string;
    Title: string;
    Description: string;
    MetaImageUrl: string;
    DateLastUpdated: string;
    Active: boolean;
    Content: any[];
    HeaderEmbeds?: string
    FooterEmbeds?: string
    NavTitle?: string;
}