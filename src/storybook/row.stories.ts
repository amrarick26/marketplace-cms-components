import { moduleMetadata } from '@storybook/angular';
import { RowComponent } from 'src/app/components/row/row.component';
import { ContentContainerComponent } from 'src/app/components/content-container/content-container.component';
import { ContentBlockComponent } from 'src/app/components/content-block/content-block.component';
import { SafeHtmlPipe } from 'src/app/pipes/safe-html.pipe';
import { RowContentDoc } from 'src/app/models/RowContentDoc.interface';
import { ContentDoc } from 'src/app/models/ContentDoc.interface';
import { ColumnComponent } from 'src/app/components/column/column.component';

export default {
    title: 'Row',
    component: RowComponent,
    parameters: {
        component: RowComponent,
    },
    decorators: [
        moduleMetadata({
            declarations: [
                RowComponent,
                ContentContainerComponent,
                ContentBlockComponent,
                SafeHtmlPipe,
                ColumnComponent
            ],
            imports: [],
            providers: [],
            entryComponents: [ContentBlockComponent],
        })
    ]
}



export const BasicExample = () => ({
    template: `
        <div style="padding: 15px">
            <cms-row [content]="content"></cms-row>
        </div>
    `,
    props: {
        content: {
            ComponentName: "RowComponent",
            Content: [
                {
                    ComponentName: "ColumnComponent",
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: "#EF476F"
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "<h2>&zwnj;</h2>",
                        } as ContentDoc
                    ]
                },
                {
                    ComponentName: "ColumnComponent",
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: "#FFD166"
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "<h2>&zwnj;</h2>",
                        } as ContentDoc
                    ]
                },
                {
                    ComponentName: "ColumnComponent",
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: "#06D6A0"
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "<h2>&zwnj;</h2>",
                        } as ContentDoc
                    ]
                },
                {
                    ComponentName: "ColumnComponent",
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: "#2B9EB3"
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "<h2>&zwnj;</h2>",
                        } as ContentDoc
                    ]
                },
            ]
        } as RowContentDoc
    }
});

export const VariedWidths = () => ({
    template: `
        <div style="padding: 15px">
            <cms-row [content]="content"></cms-row>
        </div>
    `,
    props: {
        content: {
            ComponentName: "RowComponent",
            Content: [
                {
                    ComponentName: "ColumnComponent",
                    Width: 2,
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: "#EF476F"
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "<h2>&zwnj;</h2>",
                        } as ContentDoc
                    ]
                },
                {
                    ComponentName: "ColumnComponent",
                    Width: 3,
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: "#FFD166"
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "<h2>&zwnj;</h2>",
                        } as ContentDoc
                    ]
                },
                {
                    ComponentName: "ColumnComponent",
                    Width: 6,
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: "#06D6A0"
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "<h2>&zwnj;</h2>",
                        } as ContentDoc
                    ]
                },
                {
                    ComponentName: "ColumnComponent",
                    Width: 1,
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: "#2B9EB3"
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "<h2>&zwnj;</h2>",
                        } as ContentDoc
                    ]
                },
            ]
        } as RowContentDoc
    }
});

export const Responsive = () => ({
    template: `
        <div style="padding: 15px">
            <cms-row [content]="content"></cms-row>
        </div>
    `,
    props: {
        content: {
            ComponentName: "RowComponent",
            Content: [
                {
                    ComponentName: "ColumnComponent",
                    Width: {
                        xs: 12,
                        sm: 6,
                        md: 3
                    },
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: "#EF476F"
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "<h2>&zwnj;</h2>",
                        } as ContentDoc
                    ]
                },
                {
                    ComponentName: "ColumnComponent",
                    Width: {
                        xs: 12,
                        sm: 6,
                        md: 3
                    },
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: "#FFD166"
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "<h2>&zwnj;</h2>",
                        } as ContentDoc
                    ]
                },
                {
                    ComponentName: "ColumnComponent",
                    Width: {
                        xs: 12,
                        sm: 6,
                        md: 3
                    },
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: "#06D6A0"
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "<h2>&zwnj;</h2>",
                        } as ContentDoc
                    ]
                },
                {
                    ComponentName: "ColumnComponent",
                    Width: {
                        xs: 12,
                        sm: 6,
                        md: 3
                    },
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: "#2B9EB3"
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "<h2>&zwnj;</h2>",
                        } as ContentDoc
                    ]
                },
            ]
        } as RowContentDoc        
    }
});

export const Offset = () => ({
    template: `
        <div style="padding: 15px">
            <cms-row [content]="content"></cms-row>
        </div>
    `,
    props: {
        content: {
            ComponentName: "RowComponent",
            Content: [
                {
                    ComponentName: "ColumnComponent",
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: ""
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "",
                        } as ContentDoc
                    ]
                },
                {
                    ComponentName: "ColumnComponent",
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: "#FFD166"
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "<h2>&zwnj;</h2>",
                        } as ContentDoc
                    ]
                },
                {
                    ComponentName: "ColumnComponent",
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: ""
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "",
                        } as ContentDoc
                    ]
                },
                {
                    ComponentName: "ColumnComponent",
                    Content: [
                        {
                            ComponentName: "ContentBlockComponent",
                            Background: {
                                ImageUrl: null,
                                Color: "#2B9EB3"
                            },
                            DateRange: {
                                StartDate: null,
                                EndDate: null
                            },
                            HorizontalAlignment: "Center",
                            VerticalAlignment: "Middle",
                            TextArea: "<h2>&zwnj;</h2>",
                        } as ContentDoc
                    ]
                },
            ]
        } as RowContentDoc        
    }
});