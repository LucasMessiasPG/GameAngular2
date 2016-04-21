import {Component} from "angular2/core";
import {TileComponent} from "./tile/tile.component";
@Component({
    selector: 'row',
    //template:'',
    templateUrl:'./app/components/mapa/row/row.html',
    directives:[TileComponent],
    inputs:['x','row','maxCol']
})

export class RowComponent{
    private x;
    private maxCol;
    private row;

}