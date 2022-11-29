var Pet = /** @class */ (function () {
    function Pet(nome) {
        this.nome = nome;
        this.nome = nome;
    }
    return Pet;
}());
var Livro = /** @class */ (function () {
    function Livro(nome) {
        this.nome = nome;
        this.nome = nome;
    }
    return Livro;
}());
var Colecao = /** @class */ (function () {
    function Colecao() {
        this.lista = [];
    }
    Colecao.prototype.adicionar = function (elemento) {
        this.lista.push(elemento);
    };
    Colecao.prototype.mostrarTodos = function () {
        for (var _i = 0, _a = this.lista; _i < _a.length; _i++) {
            var elemento = _a[_i];
            console.log(elemento);
        }
    };
    return Colecao;
}());
var meusLivrosPrediletos = new Colecao();
var animais = new Colecao();
var dom_quixote = new Livro("Dom Quixote");
var a_divina_comedia = new Livro("A Divina Comédia");
meusLivrosPrediletos.adicionar(dom_quixote);
meusLivrosPrediletos.adicionar(a_divina_comedia);
var toto = new Pet("Totó");
var fofo = new Pet("Fofo");
animais.adicionar(toto);
animais.adicionar(fofo);
meusLivrosPrediletos.mostrarTodos();
animais.mostrarTodos();
