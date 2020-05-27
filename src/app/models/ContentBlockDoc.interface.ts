import { ContentDoc } from './ContentDoc.interface';

export interface ContentBlockDoc extends ContentDoc {
    Background: Background;
    DateRange: DateRange;
    HorizontalAlignment: 'Left' | 'Center' | 'Right';
    VerticalAlignment: 'Top' | 'Middle' | 'Bottom';
    Button?: ContentButton;
    TextArea: string;
}

interface Background {
    ImageUrl: string; // assetID
    Color: string;
}

interface DateRange {
    StartDate?: Date;
    EndDate?: Date;
}

interface ContentButton {
    Text: string;
    Link: string;
    Color: string;
    Outlined: boolean;
    Variant: boolean;
}