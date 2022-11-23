"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
var dire__o_1 = require("./dire\u00E7\u00E3o");
var motor_1 = require("./motor");
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this._motor = new motor_1.Motor();
        this._direção = new dire__o_1.Direcao();
    }
    Object.defineProperty(Veiculo.prototype, "motor", {
        get: function () {
            return this._motor;
        },
        set: function (motor) {
            this._motor = motor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculo.prototype, "direcao", {
        get: function () {
            return this._direção;
        },
        set: function (direcao) {
            this._direção = direcao;
        },
        enumerable: false,
        configurable: true
    });
    return Veiculo;
}());
exports.Veiculo = Veiculo;
