// let filmes = ["Coraline", "Batman", "Scarface"]


// // Posso acessar os elementos pela posição
// // O primeiro elemento começa na posição 0
// console.log(filmes[1])

let numeros = [3, 6]

// .push serve para adicionar ao final
numeros.push(9)

// .length indica a quantidade de elementos do array
console.log(numeros.length)


// Desafio: Imprimir cada numero do array sozinho
for(let index = 0; index < numeros.length; index++){
    console.log("posicao: ", index, " valor: ", numeros[index])
}


// Desafio, aumentar o valor de dentro do array em 5
// Imprimir o array com os valores aumentados

for(let index = 0; index < numeros.length; index++){
    numeros[index] += 5
}

console.log(numeros)