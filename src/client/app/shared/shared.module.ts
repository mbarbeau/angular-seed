import { NgModule, ModuleWithProviders } from '@angular/core';

import { CoreModule } from "../core";

import { HeaderComponent } from './header/index';
import { NavbarComponent } from './navbar/index';
import { NameListService } from './name-list/index';

import { AuthModule } from './auth/auth.module';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CoreModule, AuthModule],
  declarations: [HeaderComponent, NavbarComponent],
  exports: [CoreModule, AuthModule, HeaderComponent, NavbarComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}
