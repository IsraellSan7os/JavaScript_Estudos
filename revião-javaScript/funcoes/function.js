

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

let result = calculo(10, 30, 20)
console.log("O valor usado é ", result)



function numeroPar(numero) {
    var res = numero % 2

    if (res == 0) {
        return "É par"
    } else {
        return "É ímpar"
    }

}

let resultado = numeroPar(11)
console.log(resultado)




function carros(nomeCarro, modeloCarro, ano, placa, anoAtual) {
    let tempoUso = anoAtual - ano;

    if (tempoUso >= 20) {
        return `O carro ${nomeCarro} modelo ${modeloCarro} de placa ${placa} tem ${tempoUso} anos de uso e é antigo.`;
    } else {
        return `O carro ${nomeCarro} modelo ${modeloCarro} de placa ${placa} tem ${tempoUso} anos de uso e ainda é novo.`;
    }
}

const resultadoCarro = carros("Corolla", "RLX", 2000, "1234-00AC", 2025);

console.log("Informações do carro:", resultadoCarro);



function showMessage(num, num1){

    let n = num + num1

    return `A soma entre ${num}  e ${num1} e ${n}`
}

let resposta = showMessage(10,23)
console.log(resposta)


function semana(saldoConta, Pagamento, fatura, deposito, saque){

    let extratoConta = saldoConta - fatura
       
    console.log`Pagamento realizado ${extratoConta}`
    
    if (saque > saldoConta ) {
        return `Valor insuficiente ${saldoConta} disponivel`
    } else {
        return `Saque realizado com suscesso Saldo atual de ${saldoConta}`
    }
    

    
  
        
        
    
}

let resultadoSema = semana("4000", "3000", "200", "150", "400")
console.log(resultadoSema)