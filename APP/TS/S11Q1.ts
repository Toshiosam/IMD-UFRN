class Mesa_DeJantar {
    public material: string;
    public lugares:number;
    public preco: number;

    public constructor (material:string, lugares?:number, preco?:number){
        this.material = material;
       
        if(lugares == undefined){
            this.lugares =  4;
        }else{
            this.lugares = lugares;
        }

        if (preco == undefined){
            this.preco = 0;
        }else {
            this.preco = preco;
        }

    }

    Detalhar(){
        console.log(`o material do jantar é ${this.material}, a mesa possui ${this.lugares} lugares, com valor total de ${this.preco}`);
    }

}
let mesa1 = new Mesa_DeJantar("Metal", 8, 100);
let mesa2 = new Mesa_DeJantar("Madeira", 6);
let mesa3 = new Mesa_DeJantar("Vidro");

mesa1.Detalhar();
mesa2.Detalhar();
mesa3.Detalhar();