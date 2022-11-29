var Situacao;
(function (Situacao) {
    Situacao["EmPreparo"] = "EmPreparo";
    Situacao["Finalizada"] = "Finalizada";
})(Situacao || (Situacao = {}));
var TipoPrato;
(function (TipoPrato) {
    TipoPrato["Sopa"] = "Sopa";
    TipoPrato["Sanduiche"] = "Sanduiche";
    TipoPrato["Rabada"] = "Rabada";
})(TipoPrato || (TipoPrato = {}));
var sanduba = {
    situacao: Situacao.EmPreparo,
    tipo_prato: TipoPrato.Sanduiche
};
console.log(sanduba);
