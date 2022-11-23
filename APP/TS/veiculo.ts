import { Direcao } from "./direção";
import { Motor } from "./motor";

export class Veiculo{

    private _motor: Motor;
    private _direção: Direcao;

    public constructor(){
        this._motor = new Motor();
        this._direção =  new Direcao();
    }

    public get motor(): Motor {
        return this._motor 
    }

    public set motor(motor: Motor){
        this._motor = motor;
    }

    public get direcao(): Direcao {
        return this._direção;
    }

    public set direcao(direcao: Direcao) {
        this._direção = direcao;
    }
}