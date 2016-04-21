import {Component} from "angular2/core";
@Component({
    selector: 'tile',
    templateUrl:'./app/components/mapa/row/tile/tile.html',
    inputs:['x','y','tile','maxCol']
})

export class TileComponent{
    private x;
    private y;
    private tile;
    private maxCol;

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

    clickTile(){
        console.log(this.x)
        console.log(this.y)
    }

}