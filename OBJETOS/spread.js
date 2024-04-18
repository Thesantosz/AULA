const usuario = {

    nome: "prof" , 
    idade: 25 , 
    email: "prof@senacrs.br" , 
    cidade: "SP"
}

const novoUsuario = {

    ...usuario, 
    nome: "joao" ,
    idade: 28
}

console.log(novoUsuario)