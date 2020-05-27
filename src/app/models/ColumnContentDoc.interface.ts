import { ContentDoc } from './ContentDoc.interface';

export interface ColumnContentDoc extends ContentDoc {
    Width?: number | BootstrapMediaDefinition
    Padding?: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    Content: ContentDoc[]
}

export type BootstrapBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type BootstrapMediaDefinition = {
    [key in BootstrapBreakpoint]?: number
}