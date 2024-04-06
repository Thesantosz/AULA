const readlineSync = require('readline-sync');

const pergunta1 = readlineSync.question("Qual seu nome? ");
const pergunta2 = readlineSync.question("Qual seu email? ")

console.log("O e-mail ", pergunta1, "foi cadastrado com sucesso. Seja bem-vinda(o), ", pergunta2, "!")