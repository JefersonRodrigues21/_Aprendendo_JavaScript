const fichaDaBia = {
    nome: "Beatriz",
    idade: 24,
    profissão: "programadora",
    temFilhos: false,
};
console.log("Ficha da Bia: ", fichaDaBia);

console.log('Nome: ' + fichaDaBia.nome);

fichaDaBia.carro = "Yaris";

console.log("Ficha da Bia", fichaDaBia);

delete fichaDaBia.carro;

console.log("Ficha da Bia", fichaDaBia);