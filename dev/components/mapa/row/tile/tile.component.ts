import {Component} from "angular2/core";
import {EventEmitter} from "angular2/core";
import {ToastComponent} from "../../../toast/toast.component";
@Component({
    selector: 'tile',
    templateUrl:'./app/components/mapa/row/tile/tile.html',
    inputs:['x','y','tile','maxCol'],
})

export class TileComponent{
    private x;
    private y;
    private tile;
    private maxCol;
    private effect;
    private transform;
    private toast;

    constructor(){
        if(Math.random() > 0.7) {
            this.effect = true;
        }else {
            this.effect = false;
        }
        this.transform = 'rotateX(32deg) translate('+parseInt((Math.random()*20).toFixed(2))+'px,'+parseInt((Math.random()*20).toFixed(2))+'px)';

    }

    checkFront(){
        if(this.y == this.maxCol) {
            return true;
        }else {
            return false;
        }
    }
    checkLeft(){
        if(this.x == 0) {
            return true;
        }else {
            return false;
        }
    }

    getClass(){
        return 'col-'+this.x+'-'+this.y;
    }

    clickTile(){
        this.toast.success(this.x+' - '+this.y)
    }

}