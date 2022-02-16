console.log("Atribuição de Variáveis");

let primeiroNome = "Luiz"; // "let" Pode variar e "const" não.
const sobrenome = "Afonso";
const idade = 20;

console.log("Nome: " + primeiroNome + " " + sobrenome);
console.log("Idade: " + idade);
console.log(`Meu primeiroNome é ${primeiroNome} ${sobrenome}`);

primeiroNome += " " + sobrenome;
console.log(primeiroNome);

primeiroNome = 2;
console.log(primeiroNome);




