import { NgModule, ModuleWithProviders } from '@angular/core';

import { CoreModule } from "../core";

import { NameListService } from './name-list/index';

import { AuthModule } from './auth/index';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CoreModule, AuthModule],
  declarations: [],
  exports: [CoreModule, AuthModule]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}
