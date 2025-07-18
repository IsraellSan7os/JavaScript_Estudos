

var nome = ""
var anoFrabricasao = ""
var modelo = ""

function carro(nome, anoFrabricasao, modelo) {

    console.log("Nome ", nome)
    console.log("Ano de fabriçaão ", anoFrabricasao)
    console.log("Modelo ", modelo)

}

carro("Corola", "2010", "rxl")


var numero1 = ""
var numero2 = ""

function soma(numero1, numero2) {
    console.log("Numero 1: ", numero1)
    console.log("Numero 2: ", numero2)

    const soma = numero1 + numero2

    console.log(`A soma entre ${numero1} e numero ${numero2} e ${soma}`)
}

soma(10, 20)


//  usando o retorno

function calculo(a = "", b = "", c = "") {
    var res = a + (b - 20) / c

    return res
}

let result = calculo(10, 30, 20 )
console.log("O valor usado é ", result)



function numeroPar(numero){
    var res = numero % 2

    if (res == 0) {
        return "É par"
    } else {
        return "É ímpar"
    }
    
}

let resultado = numeroPar(11)
console.log(resultado)
