// Classe Abstrata

export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error("Você não de veria instânciar um objeto do tipo Conta diretamente")
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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

    /*Métodos*/

    sacar(valor) { // Método Abstrato
        throw new Error("O método Sacar da conta é abstrato")
    }

    _sacar(valor, taxa) { // Método Privado
        const valorSacado = taxa * valor;

        if(this._saldo >= valorSacado) { // this
            this._saldo -= valorSacado;
            return valorSacado; // Retorna o valor (se printar a função);
        }

        return 0;
    }

    depositar(valor) { // Método
        this._saldo += valor; // Só executa se não entrar na condição acima;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}