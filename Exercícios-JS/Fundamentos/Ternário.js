const resultado = nota  => nota >= 7 ? 'Aprovado' : 'Reprovado' 

console.log(resultado(7.1))
console.log(resultado(6.7))

let a = 3
global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando incorretamente variavel sem var e let
abc = 3 // Não faça isso em casa !!!
console.log(global.abc)