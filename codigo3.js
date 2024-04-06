/*a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array no console

d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

e) Remova da lista o item de índice que o usuário escolheu.

f) Imprima o array no console*/

let listaDeTarefas = []

const readlineSync = require('readline-sync')

let tarefa1 = readlineSync.question("Qual sua tarefa 1? ")
let tarefa2 = readlineSync.question("Qual sua tarefa 2? ")
let tarefa3 = readlineSync.question("Qual sua tarefa 3? ")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log( listaDeTarefas)

const readlineSync1 = require('readline-sync')

let pergunta1 = readlineSync.question('Qual o numero da tarefa voce ja realizou? ')

listaDeTarefas.splice(pergunta1, 1)

console.log(listaDeTarefas)