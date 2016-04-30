import {Component} from "angular2/core";
@Component({
    selector:'Login',
    templateUrl:'./app/components/login.html'
})

export class LoginComponent{
    onSubmit(dados){
        console.log(dados)
    }
}