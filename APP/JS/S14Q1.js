var Jogador = /** @class */ (function () {
    function Jogador() {
    }
    Jogador.prototype.mover = function () {
        console.log("[Jogador]: se movendo");
    };
    return Jogador;
}());
var Volante = /** @class */ (function () {
    function Volante() {
    }
    Volante.prototype.mover = function () {
        console.log("[Volante]: se movendo");
    };
    return Volante;
}());
var j = new Jogador;
j.mover;
var v = new Volante;
v.mover;
