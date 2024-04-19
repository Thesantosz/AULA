// Exemplo de entrada


const pessoa = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
 }


 function imprimir(obj){

    const novaPessoa = {
        ...obj ,
        apelidos: ["claiton", 'jjfdd', 'udkjsdjd']

        }
    }
    

    console.log(`Eu sou o ${pessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]} e ${novaPessoa.apelidos[2]}`)





 
imprimir(pessoa)