
// selcionaElemento()
const selcionaElemento = function () {

    // Visualizando o Dom
    console.log(document)

    // Obter o conteudo da pagina (h1 p main form tags etc)
    console.log(document.title)

    // Selecionando elemento pelo ID
    const elementoID = document.getElementById("guest-2")
    console.log(elementoID)

    // Mostra as propriedades do elemento
    console.dir(elementoID)


    // Selecionando o elemento pela Class
    const elementoClass = document.getElementsByClassName("guest")
    console.log(elementoClass.item(0))
    console.log(elementoClass[1])

    // Seleciona o elemento pela tag
    const elementTag = document.getElementsByTagName("li")
    console.log(elementTag)

    const elementForm = document.getElementsByTagName("form")
    console.log(elementForm)


    // Acessa o lemento pelo querSelector
    // Pelo Id
    const elementoQuery = document.querySelector("#guest-2")
    console.log("Id ", elementoQuery)
    // Pela class
    const elementeSelector = document.querySelector(".guest")
    console.log("Class ", elementeSelector)

}
// manipulandoElementos()


const manipulandoElementos = function () {

    const guet = document.querySelector("#guest-1 span")
    guet.textContent = "Israel"


    console.log(guet.textContent) // Retorna o conteudo visivel e oculto
    console.log(guet.innerHTML)  //  Retorna somento o comteudo visivel
    console.log(guet.innerText) //   Retorna o Html como o texto

    inputErro()

    function inputErro() {
        const input = document.querySelector("#name")
        input.classList.add("input-error")

        const list = document.querySelector("#list")
        // Adiciona a class
        list.classList.add("erro")
        // Removendo a class de estilização
        list.classList.remove("erro")

        // toggle
        // Se modo-escuro estiver presente, ele remove. Se não estiver, ele adiciona. Ou seja, alterna.
        list.classList.toggle("erro")


        // Modificando as propriedade css do elemento.
        const button = document.querySelector("button")
        button.style.backgroundColor = "yellow"
        button.style.color = "black"
    }


}



// Criando elemento com o js
const criandoELementos = function () {

    lista()
    butao()
    elemetos()

    function lista() {
        const guest = document.querySelector("ul")

        const newLi = document.createElement("li")
        newLi.classList.add("guest")

        const newSpan = document.createElement("span")
        newSpan.textContent = "Israel"

        newLi.append(newSpan)
        guest.append(newLi)
    }

    function butao() {
        const form = document.querySelector("form")

        form.style.flexDirection = "column"

        const button = document.createElement("button")
        button.classList.add("button")
        button.textContent = "Remover"

        form.append(button)

    }


    function elemetos() {

        criandoParagrafos()

        const ul = document.querySelector("ul")

        const li = document.createElement("li")
        li.classList.add("guest")

        const span = document.createElement("samp")
        span.textContent = "Adnael"

        li.append(span)
        ul.append(li)

        function criandoParagrafos() {

            const main = document.querySelector("main")

            const p = document.createElement("p")
            p.textContent = "Hoje é um bom dia pra programar"

            main.append(p)
            p.style.color = "#ffff"

        }

    }
}
// criandoELementos()


// Manipulando atributos do input
const manipulandoAtributos = function () {


    /*O atributo booleano disabled, quando presente, torna o elemento não mutável, não passível de foco ou mesmo enviado com o formulário. O usuário não pode editar nem dar foco ao controle, nem aos seus descendentes de controle de formulário */

    const input = document.querySelector("input")
    const button = document.querySelector("button")


    // Disabled
    input.setAttribute("disabled", true)
    button.setAttribute("disabled",  true)

    // Mudando o type
    input.setAttribute("type", "file")

    // remove a tributos
    button.removeAttribute("type", "submit")
   

}

manipulandoAtributos()





