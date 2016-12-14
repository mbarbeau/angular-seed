import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ToolsComponent } from './tools.component';
import { ToolsService } from "./tools.service";

import { GeolocationModule } from "./geolocation/geolocation.module";

@NgModule({
    imports: [SharedModule, GeolocationModule],
    declarations: [ToolsComponent],
    exports: [ToolsComponent],
    providers: [ToolsService]
})

export class ToolsModule { }
