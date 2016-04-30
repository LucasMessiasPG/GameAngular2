import {Injectable, EventEmitter} from "angular2/core";
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

export interface Toast{
    msg: String;
    tipo: String;
    timer: Number;
    title: String;
}

@Injectable()
export class ToastService{
    public toast$: EventEmitter<any>;

    constructor() {
        this.toast$ = new EventEmitter();
    }

    pop(toast: Toast) {
        this.toast$.emit(toast)
    }


}