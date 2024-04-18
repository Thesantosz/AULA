const professor = {

    nome: 'Vitor' ,
    idade: 27 , 
    cidade: 'são leolpoldo', 
    estado: 'RS', 
    tarefas: ["dar aula" , "responder dúvidas"] , //função
    contarPiada: function() { //método
        console.log('é pa vê ou pa cumê?')
    }
}

console.log(professor.tarefas)

console.log(professor["idade"]) //outro jeito menos utilizada

//ALTERAR VALOR 

professor.nome = "leo" //semelhante ao usado anteriormente
professor["cidade"] = "NH"

console.log(professor.nome)
console.log(professor["cidade"])