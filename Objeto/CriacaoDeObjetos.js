// usando a notacao literal
const obj1 = {}
console.log(obj1)

//object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)


// Funcao construtora
function Produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 015)
const p2  = new Produto('Notebook', 2998, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


function criarFuncionario(nome, salarioBase, faltas){ 
    return{
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas)

        }
    }
}
    const f1 = criarFuncionario('Joao', 7999, 4)
    const f2 = criarFuncionario('Maria', 11000, 1)
    console.log(f1.getSalario(), f2.getSalario())


//Objecto create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//UM funcao famosa retorna objeto
const formJS = JSON.parse('{"info": "Sou um JSON"')
console.log(FromJSON.info)
