import {Injectable, EventEmitter} from "angular2/core";
@Injectable()
export class PersonagemService{
    public personagem$ = new EventEmitter();
    constructor(){}
}