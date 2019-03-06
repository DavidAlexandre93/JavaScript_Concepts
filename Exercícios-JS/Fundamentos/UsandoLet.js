

var numero = 1

// let tem uma declaracao a mais em escopo neste caso com bloco
{
let numero = 2
console.log('dentro =', numero)
}
console.log('fora =', numero)