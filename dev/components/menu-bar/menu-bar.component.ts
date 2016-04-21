import {Component} from 'angular2/core'

@Component({
    selector:'menu-bar',
    templateUrl:'./app/components/menu-bar/menu-bar.html',
    styles:[`
    ul{
        float: right;
        background: red;
        padding: 10px;
        margin: 0 15px;
    }
    `]
})

export class MenuBarComponent{}