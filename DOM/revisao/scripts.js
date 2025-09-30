let selectElement = function () {

  // Visualiza o conteúdo da document
  console.log(document)

  // Visualiza o título da página
  console.log(document.title)

  // Acessa o elemnto pelo ID
  const guest = document.getElementById("guest-1")
  console.log(guest)

  // Mostra as propriedades do objeto
  console.dir(guest)

  const guestsByclass = document.getElementsByClassName("guest")
  console.log(guestsByclass[1])
  console.log(guestsByclass.item(0))


  // Acessa os elementos pela tag
  const guestbyTag = document.getElementsByTagName("li")
  console.log(guestbyTag.item(1))

  // seleciona o item pelo query selector id
  const guestID = document.querySelector("#guest-2")
  console.log(guestID)

  // seleciona o item pelo query selector class
  let guestsClass = document.querySelector(".guest")
  console.log(guestsClass)

  // seleciona  todos os itens 
  let guestsAll = document.querySelectorAll(".guest")
  console.log(guestsAll)
}


