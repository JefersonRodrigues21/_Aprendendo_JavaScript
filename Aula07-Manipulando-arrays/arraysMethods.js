const listaDeConvidados = ["Matheus", "Izabelli", "Amanda", "Paula"];

// Push, Pop, Shift, Unshift


listaDeConvidados.pop(); //REMOVE último item da array.
listaDeConvidados.push("Leonardo"); //ADICIONA no fim da lista.
listaDeConvidados.unshift("Beatriz"); //ADICIONA como 1º da array.
listaDeConvidados.shift(); //REMOVE 1º item da lista.

console.log(listaDeConvidados);
console.log("Paula está na lista? ", listaDeConvidados.includes("Paula")); // Responde se item está INCLUSO na lista