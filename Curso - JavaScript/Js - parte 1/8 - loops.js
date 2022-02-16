console.log(`\nTrabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio Janeiro`
)
const idadeComprador = 15;
const estaAcompanhada = true;
const destino = "Salvador";
let temPassagemComprada = false;

console.log(`\nDestinos possíveis: \n`);
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada) == true;

let destinoExiste = false;

for(let contador = 0; contador < 3; contador++) {
    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    } else {
        destinoExiste = false;
    }
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa viagem!")
} else {
    console.log("Desculpe!")
}