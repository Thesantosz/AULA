
const pessoa = {

    nome: "Cleiton Rasta" , 
    idade: 16 , 
    GêneroMusicalPreferido: "Funk"
}

function objeto(OBJ){ //OBJ recebe as propriedades do objeto do novaPessoa

    const novaPessoa = {

        ...OBJ , 
        comidaFavorita: ["maçã", "goiaba", "pizza"] , 
        amigo: {

            nome: "Cleiton" ,
            idade: 18
        }
        }


console.log("O nome da pessoa é", pessoa.nome, "e suas comidas preferidas são", novaPessoa.comidaFavorita[0],"," ,  novaPessoa.comidaFavorita[1], "e",
 novaPessoa.comidaFavorita[2], ". Seu melhor amigo é se chama", novaPessoa.amigo.nome, ", e tem ", novaPessoa.amigo.idade, ".")


    }

    objeto(pessoa) 