import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {LoginComponent} from "./components/login.component";
import {HomeComponent} from "./components/home/home.component";
import {ToastListComponent} from "./components/toast/toast-list/toast-list.component";

@Component({
    selector:'app',
    template:`
    <div class="scene">
        <router-outlet></router-outlet>
        <toast></toast>
    </div>
    `,
    directives:[ROUTER_DIRECTIVES,ToastListComponent]
})

@RouteConfig([
    {path:'/login',name:'Login',component:LoginComponent,useAsDefault: true},
    {path:'/',name:'Home',component:HomeComponent}
])


export class MasterComponent{
    constructor(){
    }
}