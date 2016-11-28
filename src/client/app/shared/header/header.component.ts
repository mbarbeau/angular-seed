import { Component } from '@angular/core';

/**
 * This class represents the header component.
 */
@Component({
  moduleId: module.id,
  selector: 'igo-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  protected title: string = "<%= APP_TITLE %>";
  protected version: string = "<%= VERSION %>";

}
