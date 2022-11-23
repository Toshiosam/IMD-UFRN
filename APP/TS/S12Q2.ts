class Computador {
    protected _processador: string;
    protected _memoria: number;

    public constructor (processador: string, memoria: number){
        this._processador = processador;
        this._memoria = memoria;
    }

    public get processador() : string {
        return this._processador;
    }

    public set processador(processador : string) {
        this._processador = processador;
    }
    
    public get memoria() : number {
        return this._memoria;
    }

    public set memoria(memoria : number) {
        this._memoria = memoria;
    }

}

class Laptop extends Computador{
    public _bateria_watts:number; // com valor padrão 0

    constructor(processador: string, memoria: number, bateria:number){
        super (processador,memoria);      
        this._bateria_watts = bateria;
        if (bateria== undefined){
            this._bateria_watts += 0;
        }
    }

    public get bateria() : number {
        return this._bateria_watts;
    }

    public set bateria(bateria : number) {
        this._bateria_watts = bateria;
    }
    
}

class Desktop extends Laptop {
    _cabinete: string; // com o valor padrão "". 

    public constructor(
        
        processador: string, 
        memoria: number, 
        bateria:number,
        cabinete: string,) {

            super (processador, memoria, bateria);
            this._cabinete = cabinete; 
            if (cabinete== undefined){
                this._cabinete = ""
            }
        }

        public get cabinete() : string {
            return this._cabinete;
        }
    
        public set cabinete(cabinete :string) {
            this._cabinete = cabinete;
        }
}

let toshio = new Desktop("amd",1024,220,"modelo azzul");
console.log(`o desktop tem o processador ${toshio.processador}
 e memoria ${toshio.memoria} com bateria na voltagem ${toshio._bateria_watts} 
 e utiliza gabinete ${toshio._cabinete}`);