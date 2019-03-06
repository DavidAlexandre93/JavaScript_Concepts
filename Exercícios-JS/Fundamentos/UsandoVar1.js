
// Escopo onde a variavel é acessada global
{{{{ var sera = 'Sera???' }}}}
console.log(sera)

// Escopo de funcao onde a variavel não é acessada
function teste() {
    var local = 123
}
teste()
console.log(local)
