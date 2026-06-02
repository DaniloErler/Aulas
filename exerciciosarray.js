// Exercicio 10

let frutas = ["Uva", "Maça", "Laranja", "Açai", "Melancia"]

for(let pos = 0; pos < frutas.length; pos++){
    console.log(frutas[pos])
}

// Exercicio 11

let numeros = [5,2,4,6,8]
let soma = 0

for(let pos = 0 ; pos < numeros.length; pos++){
    soma += numeros[pos]
    console.log(soma)
}

// Exercicio 12

let valores = [1, 35, 20, 48, 12]
let maior = 0
for(let pos = 0; pos < valores.length; pos++){
    if(valores[pos] > maior){
        maior = valores[pos]
    }
}

console.log(maior)