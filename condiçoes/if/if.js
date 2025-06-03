// Desafio 1
{
    let idade = 18

    if (idade >= 18) {
        console.log("Maior de idade")
    }
    if (idade <= 17) {
        console.log("Menor de idade")
    }
}

// Desafio 2

{
    const numero = -10

    if (numero >= 1) {
        console.log("Positivo", numero)
    }
    if (numero < 0) {
        console.log("Negativo", numero)
    }

    if (numero === 0) {
        console.log(" Zero", numero)
    }
}

// Desafio 3
{

    const nota1 = 5
    const nota2 = 7
    const nota3 = 6
    const nota4 = 10
    let res = (nota1 + nota2 + nota3 + nota4) / 4

    if (res >= 7) {
        console.log(`Aprovado!! ${res.toFixed(2)}`)
    }
    if (res > 5 && res <= 6.9) {
        console.log(`Recuperação ${res.toFixed(2)}`)
    }
    if (res < 5) {
        console.log(`Reprovado ${res.toFixed(2)}`)
    }
}


// Desafio 4
{
    let numero = 10
    let resto = 2

    let resltado = numero % resto

    if (resltado == 1) {
        console.log(`Ínpar ${resltado.toFixed(0)}`)
    }
    if (resltado == 0) {
        console.log(`Par ${resltado.toFixed(0)}`)
    }
}

// Desafio 5 

{
    let senha = 12347

    if (senha == 1234) {
        console.log(`Senha correta ${senha}`)
    }
    if (senha != 1234) {
        console.log(`Senha incorreta`)

    }
}

// Desafio 6

{
    let num1 = 10
    let num2 = 1

    if (num1 > num2) {
        console.log(`O numero ${num1} e maior que o ${num2}`)
    }
    if (num2 > num1) {
        console.log(`O numero ${num2} e maior que o ${num1}`)
    }
}

// Desafio 7 

{
    let temperatura = 10

    if (temperatura >= 30) {
        console.log(`Calor, a temperatura esta assima de ${temperatura} GRAUS`)
    }
    if (temperatura >= 15 && temperatura < 30) {
        console.log(`Agradável, a temperatura esta ${temperatura} GRAUS`)
    }
    if (temperatura < 15) {
        console.log(`Frio, a temperatura está ${temperatura} GRAUS`)
    }
}

// Desafio 8

{
    let num1 = 10;
    let num2 = 10;
    let num3 = 23;

    if (
        num1 + num2 > num3 &&
        num1 + num3 > num2 &&
        num2 + num3 > num1
    ) {
        console.log("É um triângulo");
    } else {
        console.log("Não é um triângulo");
    }
}


// Desafio 9

{

    let idade = 16;

    if (idade < 16) {
        console.log("Não vota");
    }

    if ((idade >= 16 && idade < 18) || idade > 70) {
        console.log("Voto opcional");
    }

    if (idade >= 18 && idade <= 70) {
        console.log("Voto obrigatório");
    }

}

// Desafio 10

{
    let ano = 2024;

    if (ano % 4 === 0 && ano % 100 !== 0) {
        console.log("Ano bissexto");
    }

    if (ano % 400 === 0) {
        console.log("Ano bissexto");
    }

    if ((ano % 4 !== 0 || ano % 100 === 0) && ano % 400 !== 0) {
        console.log("Não é bissexto");
    }

}