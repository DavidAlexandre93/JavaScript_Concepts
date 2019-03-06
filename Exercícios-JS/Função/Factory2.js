function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 8.1
    }
}

console.log(criarProduto('notebook', 2199.49))
console.log(criarProduto('celular', 1199.49))
console.log(criarProduto('TV', 3199.49))