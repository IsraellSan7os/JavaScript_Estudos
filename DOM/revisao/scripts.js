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

const manipulandoAtributos = function () {
  const input = document.querySelector("#name")

  // Atualizar um atributo
  input.setAttribute("disabled", true) // desabilita o input
  input.removeAttribute("disabled", false) // habilita o input

  input.setAttribute("type", "Date") // altera o tipo do input


}

const eventos = function () {
  window.addEventListener("load", function () {
    console.log("A página foi carregada!!")
  })

  window.addEventListener("click", function (event) {
    event.preventDefault()
    //  retorna o elemento que disparou o evento
    // console.log(event.target)
    // retorna o texto do elemento
    // console.log(event.target.textContent)
  })

  let ul = document.querySelector("ul")
  ul.addEventListener("scroll", (e) => {
    console.log(e)
 
    if (ul.scrollTop >200) {
      console.log("Chegou ao final")

      ul.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

  })

  const button = document.querySelector("button")

  button.addEventListener("click", (e) => {
    console.log("Clicou no botão")
    // ELe so funciona o ultimo evento adicionado
  })

  button.onclick = function(){
    console.log("Clicou no botão 1")
  }


}

eventos()