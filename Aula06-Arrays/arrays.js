const convidado1 = "Matheus";
const convidado2 = "Amanda";

console.log("Lista de convidados:", convidado1,",", convidado2);

const listaDeConvidados = ["Matheus", "Isabelli", "Amanda", "Paula"]; //length 4

console.log("Bia fez aniversário e convidou:", listaDeConvidados);
console.log("Quantos convidados?", listaDeConvidados.length);

// 1. Matheus
// 2. Isabelli
// 3. Amanda
// 4. Paula

console.log("Convidado número 1:", listaDeConvidados [0]);
console.log("Convidado número 4:", listaDeConvidados[listaDeConvidados.length - 1]); //length - 1: não considera o zero.
console.log("Convidado número 3", listaDeConvidados[2]);

const indiceAmanda = listaDeConvidados.indexOf("Amanda");
console.log("Amanda está em qual índice do nosso array?", indiceAmanda);
console.log("Amanda está em qual número da lista?", indiceAmanda + 1); // + 1 : considera o zero na contagem.

const arrayQualquer = ["Beatriz", true, 24, {valor1: 10, valor2: 20}];
console.log(arrayQualquer); //exemplo de qualquer coisa pode estar dentra da array