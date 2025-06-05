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


// JSDoccomentario da documentação

/**
 * Authenticates the user
 * @param {String} email user email.
 * @param {password} password more than 6 characteres.
 * @return {Number} user id 
 */
function signIn(email = "", password = "") {

    console.log("Email: ", email)
    console.log("Senha: ", password)

    return 1

}

console.log(signIn("ysraellsanos@gmail.com", "1234565"))


/**
 * 
 * @param {String} name 
 * @param {String} lastName 
 * @param {email} email
 * @param {string} city
 * @param {password} Senha 

 */
function form(name = "", lastName = "", email = "", city = "", Senha){
    console.log(name, lastName, email, city)

    return ("Loguin feito com sucesso")
}


console.log(form("Israel", "santos", "ysaraellsanosss@gamail.com", "Valentim Gentil", 1234))
console.log(form("Anne", "santana", "annesantana@gamail.com", "Tobias Barreto", 12345))

//  Função de callback

function execute(taskName, callback) {
    console.log("Executnado a tarefa", taskName)
    
    ranning()
}

function ranning(){
    console.log("Tarefa finalizada..")

}

execute("Dowload do arquivo...", ranning)

