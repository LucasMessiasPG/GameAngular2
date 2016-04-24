import {Component} from "angular2/core";
import {EventEmitter} from "angular2/core";
import {Injectable} from "angular2/core";
import {ChangeDetectorRef} from "angular2/core";
import {ToastService} from "./toast.service";
import {DynamicComponentLoader} from "angular2/core";


@Component({
    selector:'toast',
    template:`
    <input type="text" [(ngModel)]="msg"/>
    <span>{{msg}}</span>
    <div *ngIf="visible" [ngClass]="class">{{msg}}</div>
    `
})

export class ToastComponent{

    private addToastSubscriber;
    private toasterService;
    private dcl;
    private changeDetectorRef;

    constructor(){

    }

    constructor(toasterService: ToastService, dcl: DynamicComponentLoader, changeDetectorRef: ChangeDetectorRef) {
        this.toasterService = toasterService;
        this.dcl = dcl;
        this.changeDetectorRef = changeDetectorRef;
    }

    ngOnInit() {
        this.registerSubscribers();
    }

}