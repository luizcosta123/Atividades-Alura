console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const São Paulo = `São Paulo`;
// const Rio Janeiro = `Rio Janeiro`;
// const salvador = ``;
// const salvador = ``;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio Janeiro`
)

listaDeDestinos.push(`Curitiba`); // Adiciona um item na lista!

console.log(`Destinos possíveis: ${listaDeDestinos}`);
// ou
console.log(listaDeDestinos); 

listaDeDestinos.splice(1, 1); // Remove um item da lista!
console.log(listaDeDestinos); 

console.log("Imprimindo separadamente: ");

console.log(listaDeDestinos[0], listaDeDestinos[1], listaDeDestinos[2]);       