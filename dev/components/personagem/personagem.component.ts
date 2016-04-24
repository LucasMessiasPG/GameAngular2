import {Component} from "angular2/core";
@Component({
    selector:'personagem',
    template:'<div [style.transform]="transform" class="p1"></div>',
    inputs:['posicao']
})

export class PersonagemComponent{
    private posicao;
    private transform;

    ngOnInit(){
        /*
        0-0 -85px, 105px, -100px
        0-1 -105px, 120px, -100px
        0-2 -130px, 135px, -100px
         */
        this.transform = 'rotate(-'+'10'+'deg) rotateY('+193+'deg) translate3d(-'+(85 + (20*this.posicao.y))+'px,'+(105 + (15*this.posicao.y))+'px,-'+(100-(2*this.posicao.y))+'px)'

    }
}