import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ToolsComponent } from './tools.component';
import { ToolsService } from "./tools.service";

import { OutilsExtModule } from "../../extensions/outilsExt";

@NgModule({
    imports: [SharedModule, OutilsExtModule],
    declarations: [ToolsComponent],
    exports: [ToolsComponent],
    providers: [ToolsService]
})

export class ToolsModule { }
