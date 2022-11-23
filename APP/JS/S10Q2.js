var ContaCorrente = /** @class */ (function () {
    function ContaCorrente() {
    }
    ContaCorrente.prototype.SetNome = function (nome) {
        this.nome_correntista = nome;
    };
    ContaCorrente.prototype.SetCpf = function (Cpf) {
        this.cpf_correntista = Cpf;
    };
    ContaCorrente.prototype.SetSaldo = function (valor) {
        this.saldo = valor;
    };
    ContaCorrente.prototype.Depositar = function (valor) {
        this.saldo += valor;
    };
    ContaCorrente.prototype.Sacar = function (valor) {
        this.saldo -= valor;
    };
    ContaCorrente.prototype.Mostrar_informacao = function () {
        console.log(this.nome_correntista, this.cpf_correntista, this.saldo);
    };
    return ContaCorrente;
}());
var c = new ContaCorrente();
c.SetNome("lucas Toshio");
c.SetCpf("xxx.xxx.xxx-xx");
c.SetSaldo(1200.00);
c.Depositar(200);
c.Sacar(100);
c.Mostrar_informacao();
