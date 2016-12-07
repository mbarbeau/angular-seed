import { Component } from '@angular/core';
import { AuthService} from "../auth/index";

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

  constructor(public auth: AuthService) { }

  private get userName() {
    if (!this.auth.isAuthenticated) {
      return "";
    }
    return this.auth.decodeToken().nom;
  }
}
