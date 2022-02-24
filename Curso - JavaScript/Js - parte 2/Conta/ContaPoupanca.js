// Classe que herda de Conta

import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
    }

    sacar(valor) { // Método sobrescrito (herda, porém com algumas modificações)
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }

}