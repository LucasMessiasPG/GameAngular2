import {Component} from 'angular2/core'
import {MenuBarComponent} from "../menu-bar/menu-bar.component";
import {MapaComponent} from "../mapa/mapa.component";

@Component({
    selector:'bg-home',
    templateUrl:'./app/components/bg-home/bg-home.html',
    directives:[MenuBarComponent,MapaComponent],
    styles:[`

    `]
})

export class BgHomeComponent{

    public map = [];
    public tamanho = 10;

    constructor(){
        for(var x = 0;x < this.tamanho; x++){
            var row = x;
            this.map[row] = [];
            for(var y = 0;y < this.tamanho; y++){
                var col = y;
                this.map[row][col] = 1;
            }
        }
        console.log(this.map);
    }

}