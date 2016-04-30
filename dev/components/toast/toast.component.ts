import {Component, EventEmitter} from "angular2/core";
import {ToastService, Toast} from "./toast.service";

@Component({
    selector:'toast',
    template:`
    <div class="toast" *ngFor="#toast of _toast; #i = index">
        <div *ngIf="toast.msg" (click)="hide(toast)" [ngClass]="toast.class">
            <p>{{ toast.title }}</p>
            <p><i></i><span>{{toast.msg}}</span></p>
        </div>
    </div>
    `
})

export class ToastComponent{

    private _toast: Toast[] = [];
    private msg: String;
    private class;
    private title;
    private timer;
    private _tipos = ['defautl','success','error','warning'];

    constructor(private _toastService: ToastService) {
        this._toastService.toast$.subscribe(toast => this.addToast(toast))
    }

    hide(toast){
        toast.msg = null;
    }

    addToast(toast: Toast){
        this._toast.push(this.setMsg(toast))
    }

    setMsg(toast): Toast{
        if(!toast.msg){
            return null;
        }
        if(!toast.tipo || toast.tipo && this._tipos.indexOf(toast.tipo) < 0){
            toast.tipo = 'default'
        }

        this.class = toast.tipo;

        if(!toast.title){
            toast.title = 'Aviso';
        }
        if(!toast.timer){
            toast.timer = 4000;
        }

        var self = this;
        setTimeout(function(){
            self._toast.splice(self._toast.indexOf(toast),1);

        },toast.timer)

        return toast

    }
}