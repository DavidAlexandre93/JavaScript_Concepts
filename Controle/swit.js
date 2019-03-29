const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
        console.log('Quando de Honra !')
        break
        case 8: case 7:
        console.log('Aprovado !')
        break
        case 6: case 5: case 4:
        console.log('Recuperação !')
        break
        case 3: case 2: case 1: case 0:
        console.log('Aprovado !')
        break
        default:
        console.log('Nota Invalida !')
    }
}
imprimirResultado(10)
imprimirResultado(6.50)
imprimirResultado(3)
imprimirResultado(1)