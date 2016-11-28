import { NgModule } from '@angular/core';
import { CoreModule}   from '../../core/index';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule }            from './auth-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import {provideAuth} from 'angular2-jwt/angular2-jwt';

@NgModule({
    imports: [CoreModule, AuthRoutingModule],
    declarations: [AuthComponent],
    providers: [
      AuthService,
      AuthGuard,
      provideAuth({
        headerName: "Authorization",
        headerPrefix: "",
        tokenName: "id_token_igo",
        tokenGetter: (() => localStorage.getItem("id_token_igo")),
        noJwtError: true
      })
    ],
    exports: [AuthComponent]
})

export class AuthModule {}
