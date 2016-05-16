import {Component} from "angular2/core";
@Component({
    selector:'toast',
    template:`
    <div *ngIf="(toast && toast.message)">
        <p>{{ toast.title }}</p>
        <p><i></i><span>{{toast.message}}</span></p>
    </div>
    `,
    inputs:['toast']
})

export class ToastComponent{
    private toast
}
