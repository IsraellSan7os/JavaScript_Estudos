// String 
let username = "Israel"
let number = 123

console.log(username)
console.log(number)

console.log(typeof username)
console.log(typeof number)

// Diferença enter aspas "" e as aspas simples ''
console.log("Ola, eu 'sou uma' string")
console.log('Ola, eu "sou uma" string')  


// crases 
console.log(`Uma string com acentos grasves permite fazer uma formatação 
            com varias linhas "Posso usar aspas duplas" e posso usar 
            aspas simples 'Posso usar aspas simples'
    `)

// Tamplates literals (Templates string, interpolação de string)

let usename = "Israel"
let emial = "israel@gmail.com"

// passar mais de um parâmetro.
console.log(username, emial)


// concatenação de texto
let mensagem = "Ola " + username + " Seu email é " + emial
console.log(mensagem)

// templates literals
let mensagem2 = `Ola ${username} Seu email é ${emial}`