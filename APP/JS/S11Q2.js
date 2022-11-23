var Estudantes = /** @class */ (function () {
    function Estudantes(id, nome, credit) {
        this.id = id;
        this.nome = nome;
        this.credit = credit;
    }
    Estudantes.prototype.Depositar = function (valor) {
        if (valor <= 0) {
            valor = 1;
        }
        this.credit += valor;
    };
    Estudantes.prototype.Sacar = function (valor) {
        if (valor <= 0) {
            valor = 1;
            this.credit -= valor;
        }
    };
    Estudantes.prototype.Detalhar = function () {
        console.log("O id do estudante \u00E9 ".concat(this.id, ", o nome do estudante \u00E9 ").concat(this.nome, " e possui ").concat(this.credit, "creditos"));
    };
    return Estudantes;
}());
var estud1 = new Estudantes("01", "toshio", 100);
estud1.Depositar(100);
estud1.Sacar(0);
estud1.Detalhar();
var estud2 = new Estudantes("02", "lucas", 150);
estud2.Depositar(200);
estud2.Sacar(50);
estud2.Detalhar();
