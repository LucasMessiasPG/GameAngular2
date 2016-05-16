import {Component} from "angular2/core";
@Component({
    selector:'personagem',
    template:'<div [style.transform]="transform" class="p1"></div>',
})

export class PersonagemComponent{
    private transform;

    ngOnInit(){
        /*
        0-0 -85px, 105px, -100px
        0-1 -105px, 120px, -100px
        0-2 -130px, 135px, -100px
         */
        this.transform = 'rotate(-'+'10'+'deg) rotateY('+193+'deg)';

    }
}