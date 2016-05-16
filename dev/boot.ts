import {MasterComponent} from './master.component';
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/share';
import {bootstrap} from "angular2/platform/browser";
import {MapaService} from "./components/mapa/mapa.service";
import {ToastService} from "./components/toast/toast-list/toast-list.service";

bootstrap(MasterComponent,[
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    ToastService,
    MapaService
]);
