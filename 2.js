
//crie uma variavel que vai referenciar a biblioteca
const readlineSync = require('readline-sync');

// Fazendo perguntas e armazenando as respostas
const frase = readlineSync.question("Escreva uma frase-  ");
let novafrase = frase.replaceAll("o", "i")

console.log(frase.toUpperCase())
console.log(novafrase)
console.log(frase.length)



// Exibindo as respostas
console.log();
