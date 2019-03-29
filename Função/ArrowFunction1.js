let dobro = function (a) {
    return 2 * a
}


dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // return esta implcito
console.log(dobro(Math.PI))

let ola = function (){
    return 'Ola'
}
ola = () => 'Olá'
ola = _ => 'Olá' // Possui um param
console.log(ola())

