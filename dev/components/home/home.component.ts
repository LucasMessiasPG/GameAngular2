import {Component} from 'angular2/core'
import {BgHomeComponent} from "../bg-home/bg-home.component";

@Component({
    selector:'home',
    templateUrl:'./app/components/home/home.html',
    directives:[BgHomeComponent]
})

export class HomeComponent{}