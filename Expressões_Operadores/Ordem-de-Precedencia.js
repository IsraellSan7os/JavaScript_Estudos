var let = 2 + 3 * 4
console.log(let)
//  Primeiro a multiplicação depois a soma

var let = (2 + 3) * 4
console.log(let)

// Gruping Operator (Ordem de procendência)
let nota  = (9.5 + 7 + 5) / 3
console.log("Media ", nota.toFixed(2))


let num = 4 + 3 / (4 - 3) + 5 % 2
console.log(num)

// Diferente 

let one = 1 
let two = 2

console.log("Igual a ")
console.log(one == two)
console.log(one == 1)
console.log(one == "1")
// Ele olha não olha pro type mas sim pro comteudo

console.log("Diferente")
console.log(one != two)
console.log(one != 1)
console.log(one != 2)
console.log(two != 2)
console.log(two != "2")
// Ele olha não olha pro type mas sim pro comteudo


// Estritamente Igual e Diferente
// Elel vai olhar tanto por conteudo e tanto pro type
console.log(`Estritamente Igual e Diferente
    
    
    `)
console.log(one === 1)
console.log(one === "1")

console.log(one !== 1)
console.log(one !== "1")
// Veja que nesse exemplo a cima ele compara tanto to type quanto o se ele eh igual
