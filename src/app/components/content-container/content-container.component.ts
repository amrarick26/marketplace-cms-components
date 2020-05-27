import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type, OnDestroy, AfterViewInit } from '@angular/core';
import { ContentBlockDoc } from 'src/app/models/ContentBlockDoc.interface';

@Component({
  selector: 'cms-content-container',
  template: '<ng-template #container></ng-template>',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnDestroy, AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef
  @Input() content: ContentBlockDoc;
  alive = true;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderComponent(this.content.ComponentName, this.content);
    })
  }

  ngOnDestroy() {
    // unsubscribe when component is destroyed to prevent memory leak
    this.alive = false;
  }

  renderComponent(componentName: string, content: any): void {
    // dynamically renders component
    const factories = Array.from(this.resolver['_factories'].keys());
    const factoryClass = <Type<any>>factories.find((x: any) => x.name === componentName);
    const factory = this.resolver.resolveComponentFactory(factoryClass);
    const componentRef = this.container.createComponent(factory);

    // add content to component instance
    componentRef.instance.content = content;
  }
}
