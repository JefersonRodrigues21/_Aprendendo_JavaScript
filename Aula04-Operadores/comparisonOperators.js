console.log("-----------------------------------------------------------");
const idadeBia = 24;  //operadores de comparação
const idadeMatheus = 25;

console.log("Bia é mais velha que Matheus? ", idadeBia > idadeMatheus);
console.log("Matheus é mais velho que Matheus? ", idadeMatheus > idadeBia);

console.log("Bia é mais nova que Matheus? ", idadeBia < idadeMatheus)
console.log("Bia tem idade igual OU  menor do que a idade de Matheus? ", idadeBia <= idadeMatheus);

const maioridade = 18;

console.log("Bia é maior de idade? ", idadeBia >= maioridade)
console.log("-----------------------------------------------------------");

const x = 10;
const y = 20;
const z = "10";

console.log("O número " + x + " é igual ao número " + y, x === y); // operador de igualdade estrita, compara nº com nº.

console.log("O número " + x + " é igual ao número " + z, x == y); // operador de igualdade frouxa, compara nº com strings.

console.log("O número " + x + " é diferente do número " + y, x !== y);

console.log("O númeto " + x + "è diferente do número " + z, x !== z); // estrito de desigualdade.

console.log("O númeto " + x + "è diferente do número " + z, x != z); // frouxo de desigualdade.

// Sempre optem pelos operadores ESTRITOS ao falar de igualdade e desiguladade