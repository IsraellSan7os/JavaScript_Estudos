// Opredores aritimeticos

// Soma
function soma() {
    let soma1 = 20
    let soma2 = 10
    const res = soma1 + soma2
    console.log("SOMA")
    console.log(`A soma de entre o numero ${soma1} e o numero ${soma2} e igual a ${res}.`)

}

// Subtração
function subtrair() {
    let subtracao1 = 300
    let subtracao2 = 100
    const resultado = subtracao1 - subtracao2

    console.log(`SUBTRAÇÃO`)
    console.log(`Ao subtrair o numero ${subtracao1} menos ${subtracao2}, o resultado é ${resultado}.`)
}

// Multiplicação
function multiplicacao(){
    let multiplicacao1 = 2
    let multiplicacao2 = 30
    const resultado = multiplicacao2 * multiplicacao1
    
    console.log(`MULTIPLICAÇÃO`)
    console.log(`Ao multiplicar do numero, ${multiplicacao1} vezes o numero ${multiplicacao2}, o resulado é ${resultado}. `)
}

// Divisão
function divisao(){
    let divisao1 = 100
    let divisao2 = 3
    const resultado = divisao1 / divisao2
    console.log(`DIVISÃO`)
    console.log(`A divisão do numero ${divisao1} pelo numero ${divisao2} é igual a ${resultado.toFixed(2)}`)
}
// Resto da divisão
function restoDivisao(){
    let resto = 31
    let restoDivisor = 2
    const resltado = resto % restoDivisor
    console.log(`RESTO DA DIVISÃO`)
    console.log(`O numero ${resto} dividido pelo numero ${restoDivisor} é igual a resto  ${resltado}.`)    
    console.log("Se caso o resto da divisão for igual a 0, significa que o nuemero é par")
    console.log("Se caso o resto da divisão for igual a 1, significa que o nuemero é impar.")

}

// Potenciação
function potenciacao(){
    let potencia1 = 2
    let potencia2 = 5
    const resultado = potencia1 ** potencia2
    console.log(`POTENCIAÇÃO`)
    console.log(`O numero ${potencia1} elevado a ${potencia2} é igual a ${resultado}`) 
}




soma()
subtrair()
multiplicacao()
divisao()
restoDivisao()
potenciacao()

