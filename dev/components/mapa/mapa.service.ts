import {EventEmitter, Injectable} from "angular2/core";

@Injectable()
export class MapaService{
    public move$
    private tiles: Tile[] = [];

    constructor(){
        this.move$ = new EventEmitter();
    }

    registerTile(tile: Tile){
        this.tiles.push(tile);
    }

    move(tile: Tile){
        console.log(tile)
    }

}

export interface Moviment{
    to: string;
    toX: number;
    toY: number;
    path: Tile[];
    countMove: number;
}

export interface Tile{
    tile: string;
    tileX: number;
    tileY: number;
}