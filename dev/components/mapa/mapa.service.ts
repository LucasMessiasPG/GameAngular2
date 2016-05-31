import {EventEmitter, Injectable} from "angular2/core";

@Injectable()
export class MapaService{
    public move$
    public char = null;
    public map;
    private tiles = [];
    private fullTiles = [];

    constructor(){
        this.move$ = new EventEmitter();
    }

    registerTile(fullTile,tile){
        this.tiles.push(tile);
        this.fullTiles.push(fullTile);
        let count = (this.map.length -1);
        if(tile.x == count && tile.y == count){
            let start = {
                x:parseInt(Math.random() * (count / 2) + ''),
                y:parseInt(Math.random() * (count / 2) + '')
            }
            let indexTile = 0
            for(var i in this.tiles){
                if(this.tiles[i].y == start.y && this.tiles[i].x == start.x){
                    indexTile = +i;
                    break;
                }
            }
            for(let i = 0;i<(count*2);i++){
                if(Math.random() > 0.5){
                    indexTile = indexTile + 1;
                    if(indexTile > 0 && indexTile < (count * count)) {
                        this.fullTiles[indexTile].class.next('stone')
                    }
                }else{
                    indexTile = indexTile + count;
                    if(indexTile > 0 && indexTile < (count * count)) {
                        this.fullTiles[indexTile].class.next('stone')
                    }
                }
            }
        }
    }

    move(tile){
        let search = this.tiles.indexOf(tile)
        this.fullTiles[search].move.next(true);
        if(this.char != null){
            let search = this.tiles.indexOf(this.char)
            this.fullTiles[search].move.next(false)
        }
        this.char = tile;
    }

}