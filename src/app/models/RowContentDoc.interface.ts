import { ContentDoc } from './ContentDoc.interface';
import { ColumnContentDoc } from './ColumnContentDoc.interface';

export interface RowContentDoc extends ContentDoc {
    Content: ColumnContentDoc[]
}