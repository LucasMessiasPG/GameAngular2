import {Component} from "angular2/core";
import {ToastService} from "../../../toast/toast.service";

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
    private _toastService

    constructor(toastService: ToastService){
        if(Math.random() > 0.8) {
            this.effect = true;
        }else {
            this.effect = false;
        }
        this._toastService = toastService;
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
        this._toastService.pop({msg:this.x+' - '+this.y,tipo:'success'});
    }

}