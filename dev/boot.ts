import {MasterComponent} from './master.component';
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/Rx';
import {bootstrap} from "angular2/platform/browser";

bootstrap(MasterComponent,[
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
]);
