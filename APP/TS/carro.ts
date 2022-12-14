export class Carro{

    modelo: string;
    _cor: string;
    placa: string;
    numPortas: number;

    constructor(modelo:string, cor:string, placa?:string, numPortas?:number){
        this.modelo = modelo;
        this.cor = cor;
        this.placa = placa;
        this.numPortas = numPortas;

        if(numPortas != undefined) {
        this.numPortas = numPortas;
        }else {
            this.numPortas = 2;
        } 
        
    }

    get cor(): string{
        return this._cor;
    }

    set cor(cor: string){
        this._cor = cor;
    }

}
