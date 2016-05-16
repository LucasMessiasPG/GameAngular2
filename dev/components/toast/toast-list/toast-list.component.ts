import {Component} from "angular2/core";
import {Toast, ToastService} from "./toast-list.service";
import {ToastComponent} from "../toast-component/toast.component";
@Component({
    selector:'toast-list',
    templateUrl:'../app/components/toast/toast-list/toast-list.html',
    directives:[ToastComponent
    ]
})

export class ToastListComponent{
    private _toast;
    private _tipos = ['defautl','success','error','warning'];

    constructor(private _toastService: ToastService) {
        this._toastService.toast$.subscribe(toast => this.addToast(toast))
    }


    addToast(toast: Toast){
        var _toast = this.setMsg(toast);
        let contain = false
        if(this._toast && this._toast.length > 0) {
            for (var i in this._toast) {
                if (this._toast[i].message ==  _toast.message) {
                    contain = true;
                }
            }
            if(contain == false)
                this._toast.push(_toast);
        }else{
            this._toast = [];
            this._toast.push(_toast);
        }
    }

    setMsg(toast): Toast{
        if(!toast.message){
            return null;
        }
        if(!toast.tipo || toast.tipo && this._tipos.indexOf(toast.tipo) < 0){
            toast.tipo = 'default'
        }

        toast.class = toast.tipo;

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

    close(toast){
        this._toast.splice(this._toast.indexOf(toast),1)
    }
}