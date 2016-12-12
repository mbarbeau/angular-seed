import {Injectable} from "@angular/core";
import {Headers, Response} from "@angular/http";
import {AuthHttp} from "angular2-jwt";
import { Observable } from 'rxjs/Observable';

import {Logger} from "../../core";
import {AuthRestService} from "../auth/index";

import { FormatInputIgo } from "./layers/formatInputIgo";

@Injectable()
export class MapService extends AuthRestService {
  protected url: string = "";
  constructor(
    authHttp: AuthHttp,
    logger: Logger
  ) {
    super(authHttp, logger);
  }

  public getView(id?: string): Observable<{}> {
    let myHeader = new Headers();
    myHeader.append("Content-Type", "application/json");

    return this.authHttp.get("app/shared/map/view.mock.json", {
      headers: myHeader
    }).map((res: Response) => res.json())
      .do(this.handleEyeball)
      .catch(this.handleError);
  }

  public getLayers(id?: string): Observable<{}> {
    let myHeader = new Headers();
    myHeader.append("Content-Type", "application/json");

    return this.authHttp.get("app/shared/map/layers.mock.json", {
      headers: myHeader
    }).map((res: Response) => new FormatInputIgo().readLayers(res.json().layers))
      .do(this.handleEyeball)
      .catch(this.handleError);
  }

}
