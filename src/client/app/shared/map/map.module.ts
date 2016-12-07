import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { MapComponent } from './map.component';

@NgModule({
    imports: [SharedModule],
    declarations: [MapComponent],
    exports: [MapComponent]
})

export class MapModule { }
