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

const manupulandoConteudo = function () {
  let input = document.querySelector("#name")

  let btn = document.querySelector(".button")

  input.classList.add("input-error");
  // verifica se a classe existe ela remove se não existe ela adiciona
  input.classList.toggle("btnn")
  // adiciona a classe
  btn.classList.add("btnn")
  // remove a classe
  btn.classList.remove("btnn")

}

const criandoELemneto = function () {
  const ul = document.querySelector("ul")
  const li = document.createElement("li")
  li.classList.add("guest")

  let span = document.createElement("span")
  span.textContent = "Anne Santana"

  li.append(span)
  ul.append(li)
  console.log(li)


  criandoBotao()

  function criandoBotao() {
    const body = document.querySelector("body")
    const div = document.createElement("div")
    const button = document.createElement("button")
    button.classList.add("button-modificado")
    button.textContent = "Butão 2"

    div.append(button)
    body.append(div)

  }

}

criandoELemneto()


