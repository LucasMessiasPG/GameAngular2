import {Component} from "angular2/core";
import {RowComponent} from "./row/row.component";
@Component({
    selector: 'mapa',
    templateUrl: 'app/components/mapa/mapa.html',
    directives:[RowComponent],
    inputs:['map'],
    styles:[`
    row{
        display: block;
    }
    tile{
        display: block;
    }
    `]
})
export class MapaComponent{
    public map;
}