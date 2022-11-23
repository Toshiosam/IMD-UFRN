var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Computador = /** @class */ (function () {
    function Computador(processador, memoria) {
        this._processador = processador;
        this._memoria = memoria;
    }
    Object.defineProperty(Computador.prototype, "processador", {
        get: function () {
            return this._processador;
        },
        set: function (processador) {
            this._processador = processador;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "memoria", {
        get: function () {
            return this._memoria;
        },
        set: function (memoria) {
            this._memoria = memoria;
        },
        enumerable: false,
        configurable: true
    });
    return Computador;
}());
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop(processador, memoria, bateria) {
        var _this = _super.call(this, processador, memoria) || this;
        _this._bateria_watts = bateria;
        if (bateria == undefined) {
            _this._bateria_watts += 0;
        }
        return _this;
    }
    Object.defineProperty(Laptop.prototype, "bateria", {
        get: function () {
            return this._bateria_watts;
        },
        set: function (bateria) {
            this._bateria_watts = bateria;
        },
        enumerable: false,
        configurable: true
    });
    return Laptop;
}(Computador));
var Desktop = /** @class */ (function (_super) {
    __extends(Desktop, _super);
    function Desktop(processador, memoria, bateria, cabinete) {
        var _this = _super.call(this, processador, memoria, bateria) || this;
        _this._cabinete = cabinete;
        if (cabinete == undefined) {
            _this._cabinete = "";
        }
        return _this;
    }
    Object.defineProperty(Desktop.prototype, "cabinete", {
        get: function () {
            return this._cabinete;
        },
        set: function (cabinete) {
            this._cabinete = cabinete;
        },
        enumerable: false,
        configurable: true
    });
    return Desktop;
}(Laptop));
var toshio = new Desktop("amd", 1024, 220, "modelo azzul");
console.log("o desktop tem o processador ".concat(toshio.processador, "\n e memoria ").concat(toshio.memoria, " com bateria na voltagem ").concat(toshio._bateria_watts, " \n e utiliza gabinete ").concat(toshio._cabinete));
