let estoqueAtual = 200

let vendasDia = 70

estoqueAtual -= vendasDia

estoqueAtual += 10

let produtosPorCaixa = 15

let estoqueExtra = estoqueAtual % produtosPorCaixa

console.log(estoqueAtual, estoqueExtra)
