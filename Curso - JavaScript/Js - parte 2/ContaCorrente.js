

import { Cliente } from "./Cliente.js";

export class ContaCorrente {

    /*Atributos*/
    static numeroDeContas = 0; // Atributo Estático

    agencia; // Atributo Público

    _cliente; // Atributo Privado "#" / "_"
    _saldo = 0; // Atributo Privado "#" / "_"

    /*Get e Set*/

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) { // Só entra no laço se o novo valor for uma instância de Cliente
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    /*Construtor*/

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    /*Métodos*/

    sacar(valor) { // Método
        if(this._saldo >= valor) { // this
            this._saldo -= valor;
            return valor; // Retorna o valor (se printar a função);
        }
    }

    depositar(valor) { // Método
        if(valor <= 0) {
            return; // Sai do método
        }

        this._saldo += valor; // Só executa se não entrar na condição acima;
    }

    transferir(valor, conta) {
        conta.cidade = "São Paulo"; // Cria um atributo cidade pelo método
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}