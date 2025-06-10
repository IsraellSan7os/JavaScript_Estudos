// Visualiza o conteudo do documento.
// console.log(document)


// Otendo o title sa página
console.log(document.title)


// Acessar as propriedades  pelo ID (SELETOR ID)
const guest = document.getElementById("guest-2")
console.log("Pelo ID",guest)


// Mostra as propriedades do objeto.
console.dir(guest)

// Acessar elemento com class (SELECTOR class)
let getSelector = document.getElementsByClassName("guest")
console.log("Pelo Class 0 ", getSelector.item(0)) /*Seleciona o item*/
console.log("Pelo Class 1 ", getSelector.item(1)) /*Seleciona o item*/

// Selecionar lista de elementos pela tag
const tages = window.document.getElementsByTagName("li")
console.log("Pela tegues",tages)

// // retorna o conteudo 
// // console.log(get.textContent)

// Acessa o elemento pelo seletor ID
const queryGeuet = document.querySelector("#guest-1")
console.log("Query selector pela class",guest)

const queryGeuet1 = document.querySelector(".guest")
console.log("Quere selector pelo id", queryGeuet1)


const queryGeuetAll = document.querySelectorAll(".guest")
console.log("Quere selector Retorna todos", queryGeuetAll)