import {Component} from "angular2/core";
import {RowComponent} from "./row/row.component";
import {MapaService} from "./mapa.service";
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
    private map;
    
    constructor(private _mapaService: MapaService){
        
    }
    
    ngOnInit(){
        this._mapaService.map = this.map;
    }
}
