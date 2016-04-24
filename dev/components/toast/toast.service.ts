import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
@Injectable()
export class ToastService{
    addToast;
    private _addToast: Observable<any>;

    constructor(){
        this.addToast = new Observable(observer => this._addToast = observer).share();
    }

    pop(type: string , title?: string, body?: string) {
        let toast = typeof type === 'string' ? { type: type, title: title, body: body } : type;


        this._addToast.next(toast);
        return toast;
    }
}