var Cidade = /** @class */ (function () {
    function Cidade(nome) {
        this.nome = nome;
    }
    Object.defineProperty(Cidade.prototype, "getnome", {
        //metodo de retorno
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    return Cidade;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, cidade) {
        this.nome = nome;
        this.cidade = cidade;
    }
    Object.defineProperty(Pessoa.prototype, "getnome", {
        //metodo de retorno
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "setnome", {
        //metodo
        set: function (nome) {
            this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "getcidade", {
        get: function () {
            return this.cidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "setcidade", {
        set: function (nome) {
            this.cidade;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
var Animal = /** @class */ (function () {
    function Animal(nome, dono) {
        this.nome = nome;
        this.dono = dono;
    }
    Object.defineProperty(Animal.prototype, "getnome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "setnome", {
        set: function (nome) {
            this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "getdono", {
        get: function () {
            return this.dono;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "setdono", {
        set: function (dono) {
            this.dono;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var natal = new Cidade("Natal");
var joao = new Pessoa("João", natal);
var toto = new Animal("Totó", joao);
console.log(natal.getnome);
console.log(joao.getnome + joao.getcidade.nome);
console.log(toto.getnome + toto.getdono.nome);
