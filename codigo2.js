let comida = ["panqueca", "pizza", "churrasco", "massa", "frango"] //array

console.log(comida)
console.log(`Essas são minhas comidas preferidas: |n${comida.join(`\n`)}`) //imprimiu um em baixo do outro

const readlineSync = require('readline-sync');

const frase = readlineSync.question("Qual sua comida favorita: "); //pergunta

comida[1] = frase //fez a troca  ( coluna 1 , trocou pelo valor)

console.log(comida)