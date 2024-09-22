const idadeMaria = 16;
const maioridade = 18;

if (idadeMaria >= 18) {
    console.log("Maria pode dirigir");
}   else {
    const anosFaltantes = maioridade - idadeMaria;
    console.log("Maria NÃO pode dirigir.");
    console.log(`Faltam ${anosFaltantes} anos para Maria poder dirigir.`);
}

//operadores ternários --- outro exemplo de escrever.
//idadeMaria >= maioridade 
//? console.log("Maria pode dirigir")
//: console.log("Maria não pode dirigir.");

console.log("-----------------------------------------");

const idadePessoa = 90;
// 0 a 12 anos -> criança
// 13 a 17 anos -> adolescente
// 18 a 25 -> jovem adulto
// 26 a 60 -> adulto
// mais que 61 anos -> idoso

if (idadePessoa >= 0 && idadePessoa <= 12) {
    console.log("Infância");
} else if (idadePessoa >= 13 && idadePessoa <= 17) {
    console.log("Adolescência");
} else if (idadePessoa >= 18 && idadePessoa <= 25) {
    console.log("Jovem Adulto");
} else if ((idadePessoa >= 26 && idadePessoa <= 60)) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

console.log("-----------------------------------------");
const x = 20;

if (x % 2 === 0) {
    console.log(`O número ${x} é par`);
}

if (x % 5 === 0) {
    console.log(`O número ${x} é múltiplo de 5`);
}

console.log("----------------------------------------");

const diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana){
    case 0:
        nomeDoDia = "Domingo";
    break;
    case 1:
        nomeDoDia = "segunda-feira";
    break;
    case 2:
        nomeDoDia = "Terça-feira";
    break;
    case 3:
        nomeDoDia = "Quarta-feira";
    break;
    case 4:
        nomeDoDia = "Quinta-feira";
    break;
    case 5:
        nomeDoDia = "Sexta-feira";
    break;
    case 6:
        nomeDoDia = "Sábado";
    break;
}
console.log("O dia da semana é " + nomeDoDia + ".");