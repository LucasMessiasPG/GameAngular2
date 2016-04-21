import {Component} from 'angular2/core'
import {BgHomeComponent} from "../bg-home/bg-home.component";

@Component({
    selector:'home',
    templateUrl:'./app/components/home/home.html',
    directives:[BgHomeComponent],
    styles:[`
    img{
        position:absolute;
    }
    .tile > *{fill: #f00}
    .tile {margin: 0px -2px;}
    `]
})

export class HomeComponent{}