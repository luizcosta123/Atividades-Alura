// Classe que herda de Conta

import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    static numeroDeContas = 0; // Atributo Estático

    /*Construtor*/

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) { // Método sobrescrito (herda, porém com algumas modificações)
        const taxa = 1.1;
        return this._sacar(valor, taxa);
    }

}