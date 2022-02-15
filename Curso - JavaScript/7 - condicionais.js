console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio Janeiro`
)

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;
const cidade = 1;

console.log(`Destinos possíveis: `);
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comparador maior de idade!");
//     listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//     console.log("Não é maior de idade mas está acompanhada!");
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Não é maior de idade e não está acompanhada!");
// }

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa viagem para " + listaDeDestinos[cidade] + "!");
    listaDeDestinos.splice(cidade, 1); // Remove item
} else {
    console.log("Não é maior de idade e não está acompanhada!");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar!");
}

// console.log("Embarque: ");

// if (temPassagemComprada && )

// console.log(listaDeDestinos);

// console.log("Idade do comprador é maior do que 18 ?: " + (idadeComprador > 18));
// console.log("Idade do comprador é menor do que 18 ?: " + (idadeComprador < 18));
// console.log("Idade do comprador é menor ou igual do que 18 ?: " + (idadeComprador <= 18));
// console.log("Idade do comprador é maior ou igual do que 18 ?: " + (idadeComprador >= 18));
// console.log("Idade do comprador tem 18 ?: " + (idadeComprador == 18));