function mensagem() {
    console.log("Olá. É bom ter você aqui!")
}

mensagem()


function message(username) {
    console.log("Olá", username)
}

message("Israel")
message("Anne")
message("Santana")

function soma(a, b) {
    console.log(`A soma entre os numero ${a} + ${b} é igual a `, a + b)
}

soma(10,20)
soma(30 ,20)


function form(name = "", lastname = "", emial = "", tel = ""){
    console.log("Nome: ",name)
    console.log("Sobrenome: ", lastname)
    console.log("email: ", emial)
    console.log("telefone: ",tel)
}

form("Isral","santos", "ysraellsanos@gamil.com", "000000000")

function sum(a,b) {
    let result = a + b

    

    return result

}

let res = sum (30, 30)
console.log(res)

console.log(sum(6,8))
console.log(sum(10,8))

function subt(a, e, i, o, u) {
    let res = a - e /(i * o) + u

    return res
}


let resposta = subt (20, 10, 2, 4, 20 )
console.log(resposta)
