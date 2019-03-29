const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
// Declarando duas funcoes Number
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

// Declaracao de constantes
const avaliacao1 = 9.871
const avaliacao2 = 6.871

// Processamento da equacao
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// Para imprimir a media fixada em 2 casas decimais
console.log(media.toFixed(2))

// Para imprimir um numero binário
console.log(media.toString(2))

// Imprimir o tipo da variavel 
console.log(typeof media)

// Imprimir o tipo como Funcao
console.log(typeof Number)