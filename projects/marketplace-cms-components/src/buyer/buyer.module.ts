import { NgModule, ModuleWithProviders } from '@angular/core';
import { CmsSharedModule } from '../shared/shared.module';
import { CmsSectionTemplateRendererComponent } from './components/section-template-renderer/section-template-renderer.component';

const declarations = [CmsSectionTemplateRendererComponent]

@NgModule({
  declarations: [
    CmsSectionTemplateRendererComponent
  ],
  imports: [
    CmsSharedModule.forRoot()
  ],
  exports: declarations
})
export class CmsBuyerModule {
  /**
   * forRoot lets us define providers as singletons so that there is exactly one instance
   * without this, there could be multiple instances of one service on lazy loaded modules :(
   */
  static forRoot(): ModuleWithProviders<CmsBuyerModule> {
    return {
      ngModule: CmsBuyerModule,
      providers: []
    }
  }
}
