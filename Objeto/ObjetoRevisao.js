// Coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 890000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereço: {
            logradouro: 'Rua ABC',
            numero: 123

        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }],
    calcularValorSeguro: function(){
        //.......
    }
}

carro.proprietario.endereço.numero = 1000
carro['proprietario'] ['endereço']['logradouro']
console.log(carro)

