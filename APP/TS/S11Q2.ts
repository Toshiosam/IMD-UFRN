class Estudantes {
    readonly id:string;
    public   nome:string;
    private  credit: number;

        public constructor(id:string, nome: string, credit:number){
        this.id = id;
        this.nome = nome;
        this.credit = credit;
        }

    Depositar(valor:number): void {
        if (valor <= 0 ){
            valor = 1;
        }
        this.credit += valor ;
    }

    Sacar(valor:number): void {
       if (valor <= 0) {
        valor = 1;
        this.credit -= valor;
       }
      
    }

    Detalhar():void{
        console.log(`O id do estudante é ${this.id}, o nome do estudante é ${this.nome} e possui ${this.credit}creditos`)
    }
    
    

}
let estud1 = new Estudantes("01","toshio",100);
estud1.Depositar(100);
estud1.Sacar(0);
estud1.Detalhar();
let estud2 = new Estudantes("02","lucas",150);
estud2.Depositar(200);
estud2.Sacar(50);
estud2.Detalhar();

