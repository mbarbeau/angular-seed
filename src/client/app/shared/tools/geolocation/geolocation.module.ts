import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { GeolocationComponent } from './geolocation.component';

@NgModule({
    imports: [SharedModule],
    declarations: [GeolocationComponent],
    exports: [GeolocationComponent]
})

export class GeolocationModule { }
