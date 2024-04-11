const readlineSync = require('readline-sync');

let numero 
let soma = 0

while(numero !== 0) {
 
    
 numero = Number(readlineSync.question("Digite um numero de 0 a 10: "))
  soma = soma + numero
}

console.log(soma)