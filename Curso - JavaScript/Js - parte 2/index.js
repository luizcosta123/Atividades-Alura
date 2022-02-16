

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309, 123123123); // Novo objeto (intância da classe)

const contaCorrente1 = new ContaCorrente(1001, cliente1);

// const contaCorrente1 = new ContaCorrente(); // Novo objeto (intância da classe)
// contaCorrente1.cliente = new Cliente();
// contaCorrente1.cliente.nome = "Ricardo";
// contaCorrente1.agencia = 1001;
// contaCorrente1.cliente.cpf = 11122233309;
// contaCorrente1.cliente.rg = 123123123;

const cliente2 = new Cliente("Alice", 33344455509, null); // Novo objeto (intância da classe)

const contaCorrente2 = new ContaCorrente(1002, cliente2); // Novo objeto (intância da classe)

// const contaCorrente2 = new ContaCorrente(); // Novo objeto (intância da classe)
// contaCorrente2.cliente = new Cliente();
// contaCorrente2.cliente.nome = "Alice";
// contaCorrente2.agencia = 1002;
// contaCorrente2.cliente.cpf = 33344455509;
// contaCorrente2.cliente.rg = null;

contaCorrente1.depositar(500);

contaCorrente1.transferir(300, contaCorrente2);

console.log("Numero de contas cridas: ", ContaCorrente.numeroDeContas);

console.log(cliente1);
console.log(cliente2);

console.log(contaCorrente1);
console.log(contaCorrente2);