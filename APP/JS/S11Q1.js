var Mesa_DeJantar = /** @class */ (function () {
    function Mesa_DeJantar(material, lugares, preco) {
        this.material = material;
        if (lugares == undefined) {
            this.lugares = 4;
        }
        else {
            this.lugares = lugares;
        }
        if (preco == undefined) {
            this.preco = 0;
        }
        else {
            this.preco = preco;
        }
    }
    Mesa_DeJantar.prototype.Detalhar = function () {
        console.log("o material do jantar \u00E9 ".concat(this.material, ", a mesa possui ").concat(this.lugares, " lugares, com valor total de ").concat(this.preco));
    };
    return Mesa_DeJantar;
}());
var mesa1 = new Mesa_DeJantar("Metal", 8, 100);
var mesa2 = new Mesa_DeJantar("Madeira", 6);
var mesa3 = new Mesa_DeJantar("Vidro");
mesa1.Detalhar();
mesa2.Detalhar();
mesa3.Detalhar();
