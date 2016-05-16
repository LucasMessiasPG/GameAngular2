import {Component, EventEmitter} from "angular2/core";
import {MapaService, Tile} from "../../mapa.service";
import {PersonagemComponent} from "../../../personagem/personagem.component";
import {Toast, ToastService} from "../../../toast/toast-list/toast-list.service";

@Component({
    selector: 'tile',
    templateUrl:'./app/components/mapa/row/tile/tile.html',
    inputs:['x','y','tile','maxCol'],
    directives:[PersonagemComponent],
    styles:[`
    .selected{
      background-color: rgba(255,0,0,.5);
    }
    `]
})

export class TileComponent{
    private x;
    private y;
    private tile;
    private self: Tile
    private maxCol;
    private effect;
    private _toastService
    private _mapaService
    private _class;
    private tile$
    private selected: boolean = false;

    constructor(toastService: ToastService, mapaService: MapaService){
        if(Math.random() > 0.8) {
            this.effect = true;
        }else {
            this.effect = false;
        }
        this._mapaService = mapaService;
        this.tile$ = new EventEmitter();
        this._toastService = toastService;
    }

    ngOnInit(){
        this.self = {tileX:this.x,tileY:this.y,tile:this.x+'-'+this.y};
        this._mapaService.registerTile(this.self)
    }

    path(){
        console.log(this.x)
        console.log(this.y)
    }

    selectedTile(){
        this._class['selected'] = true;
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
        var _class = 'col-'+this.x+'-'+this.y;
        return _class;
    }

    clickTile(){
        // this._mapaService.move(this.self)
        this._toastService.pop({message:this.x+'-'+this.y,timer:90000});
    }

}