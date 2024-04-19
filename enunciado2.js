const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
 /*nome: "Juca", 
idade: 3, 
raca: "SRD"*/

console.log(gato)
/*
nome: "Juba", 
	idade: 3, 
	raca: "SRD"
*/

console.log(tartaruga)

/*nome: "jubo", 
	idade: 3, 
	raca: "SRD"*/

    //... significa spread, ele espelha os objetos.