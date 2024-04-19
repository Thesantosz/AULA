const readlineSync = require('readline-sync')

function perguntas(informaçoes){

    let pergunta1 = question.readlineSync("Qual seu nome? ")
    let pergunta2 = question.readlineSync("Qual sua idade? ")
        let pergunta3 = question.readlineSync("Qual sua profissão? ")

        

    const informaçoes = {

        nome: pergunta1 , 
        idade: pergunta2 , 
        profissão: pergunta3
    }

console.log(informaçoes)
}

perguntas(perguta1, pergunta2, pergunta3)