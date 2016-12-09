import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";
import {Logger} from "../../core";
import {AuthRestService} from "../auth/index";

@Injectable()
export class MapService extends AuthRestService {
  protected url: string = "app/shared/map/map.mock.json";
  constructor(
    authHttp: AuthHttp,
    logger: Logger
  ) {
    super(authHttp, logger);
  }

}
