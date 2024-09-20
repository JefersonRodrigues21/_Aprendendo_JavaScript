const idadeMaria = 16;
const maioridade = 18;

if (idadeMaria >= 18) {
    console.log("Maria pode dirigir");
}   else {
    const anosFaltantes = maioridade - idadeMaria;
    console.log("Maria NÃO pode dirigir.");
    console.log(`Faltam ${anosFaltantes} anos para Maria poder dirigir.`);
}