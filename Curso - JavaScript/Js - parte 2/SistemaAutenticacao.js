// Ser autenticavel significa ter o método autenticar

// Duck type

export class SistemaAutenticacao {

    static login(autenticavel, senha) {
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false; // true or false
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function; // Verifica se esta chave (autenticar) existe dentro do objeto (autenticavel)
    }

}