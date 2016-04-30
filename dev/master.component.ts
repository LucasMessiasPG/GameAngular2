import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {ElementRef} from "angular2/core";
import {LoginComponent} from "./components/login.component";
import {HomeComponent} from "./components/home/home.component";
import {ToastComponent} from "./components/toast/toast.component";

@Component({
    selector:'app',
    template:`
    <div class="scene">
        <router-outlet></router-outlet>
        <toast></toast>
    </div>
    `,
    directives:[ROUTER_DIRECTIVES,ToastComponent]
})

@RouteConfig([
    {path:'/login',name:'Login',component:LoginComponent,useAsDefault: true},
    {path:'/',name:'Home',component:HomeComponent}
])


export class MasterComponent{
    constructor(){
    }
}