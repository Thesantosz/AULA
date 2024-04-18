const filme = {

    nome: "Porco Aranha" ,
    direção: "Erbert Richards" , 
    anoDeLançamento: 1965 , 
    visto: "Nao" , 
    personagens: [
        {autor: "Cleiton Rasta" , personagem: "Chaves"} , 
        {autor: "Claudinete", personagem: "Chapolin"} , 
        {autor: "Jorginho de Pindamongaba", personagem: "Pelé"} , 
        {autor: "Jacinto Aquino", personagem: "Cleriton"}
    ]
}

filme.personagens[0].autor = "Xuxa"
console.log(filme)