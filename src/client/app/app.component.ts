import { Component } from '@angular/core';
import { Config } from './core/index';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'igo-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
