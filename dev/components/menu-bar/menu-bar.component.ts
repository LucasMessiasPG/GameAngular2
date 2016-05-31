import {Component} from 'angular2/core'
import {ToastService} from "../toast/toast-list/toast-list.service";

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

export class MenuBarComponent{
    private toast;

    constructor(_toast: ToastService){
        this.toast = _toast;
    }

    toastPop(type){
        this.toast.pop({message:type,type:type})
    }
}