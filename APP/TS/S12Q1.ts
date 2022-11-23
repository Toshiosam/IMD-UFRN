class Cidade {
    constructor(public readonly nome: string) {
    }
    //metodo de retorno
    public get getnome(): string {
    return this.nome;
    }
    }
 
class Pessoa {
    constructor(public nome: string, public cidade: Cidade) {
    }
    //metodo de retorno
    public get getnome(): string {
    return this.nome;
    }
    //metodo
    public set setnome(nome: string) {
    this.nome;
    }
    public get getcidade(): Cidade {
    return this.cidade;
    }
    public set setcidade(nome: string) {
    this.cidade;
    }
    }

class Animal {
    constructor(public nome: string, public dono: Pessoa) {
    }
    public get getnome(): string {
    return this.nome;
    }
    public set setnome(nome: string) {
    this.nome;
    }
    public get getdono(): Pessoa {
    return this.dono;
    }
    public set setdono(dono: Pessoa){
    this.dono;
    }
    }
    const natal = new Cidade("Natal");
    const joao = new Pessoa("João", natal);
    const toto = new Animal("Totó", joao);
    console.log(natal.getnome);
    console.log(joao.getnome + joao.getcidade.nome);
    console.log(toto.getnome + toto.getdono.nome);
    