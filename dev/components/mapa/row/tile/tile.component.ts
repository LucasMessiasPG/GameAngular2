import {Component, EventEmitter} from "angular2/core";
import {MapaService} from "../../mapa.service";
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
    private baasicTile;
    private maxCol;
    private effect;
    private _toastService
    private _mapaService
    private _class = [];
    private tile$
    private class$
    private personagem;

    constructor(toastService: ToastService, mapaService: MapaService){
        if(Math.random() > 0.8) {
            this.effect = true;
        }else {
            this.effect = false;
        }
        this._mapaService = mapaService;
        this.tile$ = new EventEmitter();
        this.class$ = new EventEmitter();
        this._toastService = toastService;
    }

    ngOnInit(){
        let fullTile = {x:this.x,y:this.y,type:1,move:this.tile$,class:this.class$};
        this.baasicTile = {x:this.x,y:this.y};
        this._mapaService.registerTile(fullTile,this.baasicTile)
        this.setClass('grass')
        this.tile$.subscribe(move => (move)?this.addChar():this.removeChar());
        this.class$.subscribe(_class => this.setClass(_class));
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

    addChar(){
        this.personagem = {user:1};
        this.effect = false;
    }

    removeChar(){
        this.personagem = null;
    }

    clickTile(){
        this._mapaService.move(this.baasicTile)
    }

    private setClass(newClass) {
        let _class = 'col-'+this.x+'-'+this.y;
        this._class = [];
        this._class.push(_class);
        this._class.push(newClass);

    }
}