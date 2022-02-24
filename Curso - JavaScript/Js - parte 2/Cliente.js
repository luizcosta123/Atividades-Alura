

export class Cliente {

    /*Atributos*/

    nome; // Atributo Público
    _cpf; // Atributo Privado
    _rg; // Atributo Privado

    /*Get e Set*/
    
    get cpf() {
        return this._cpf;
    }

    get rg() {
        return this._rg
    }

    /*Construtor*/
    
    constructor(nome, cpf, rg) {
        this.nome = nome;
        this._cpf = cpf;
        this._rg = rg;
    }
}