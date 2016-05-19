import {Component} from "angular2/core";
@Component({
    selector:'personagem',
    template:'<div class="personagem"></div>',
    inputs:['char'],
    styles:[`
        .personagem{
            position: absolute;
            background-image: url(app/src/img/p.png);
            top: -50px;
            height: 50px;
            width: 40px;
            background-size: 300px;
            background-position-y: 5px;
            transform: rotateY(-20deg) translateX(-10px);
        }
        
    `]
})

export class PersonagemComponent{
    private char;

    constructor(){}

    ngOnInit(){
        console.log(this.char)
    }
}