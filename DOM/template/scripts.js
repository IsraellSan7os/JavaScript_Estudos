function seleciona() {

    // Visualiza o conteudo do documento.
    console.log(document)


    // Otendo o title sa página
    console.log(document.title)


    // Acessar as propriedades  pelo ID (SELETOR ID)
    const guest = document.getElementById("guest-2")
    console.log("Pelo ID", guest)


    // Mostra as propriedades do objeto.
    console.dir(guest)

    // Acessar elemento com class (SELECTOR class)
    let getSelector = document.getElementsByClassName("guest")
    console.log("Pelo Class 0 ", getSelector.item(0)) /*Seleciona o item*/
    console.log("Pelo Class 1 ", getSelector.item(1)) /*Seleciona o item*/

    // Selecionar lista de elementos pela tag
    const tages = window.document.getElementsByTagName("li")
    console.log("Pela tegues", tages)

    // // retorna o conteudo 
    // // console.log(get.textContent)

    // Acessa o elemento pelo Queryseletor ID
    const queryGeuet = document.querySelector("#guest-1")
    console.log("QuerySelector pela ID", guest)

    const queryGeuet1 = document.querySelector(".guest")
    console.log("QuerySelector pelo Class", queryGeuet1)


    const queryGeuetAll = document.querySelectorAll(".guest")
    console.log("Quere selector Retorna todos", queryGeuetAll)
}
seleciona()


function retorna() {

    // Ao colocar o span dizemos que queremao usar apenas o conteudo dela, e a não a lista inteira com todo o comteúdo
    let retorna = document.querySelector("#guest-1 span")
    console.log(retorna.textContent) /*Retorna o centeúdo como texto */

    // Munda o comteúdo e atribue um novo valor
    retorna.textContent = "Anne"


    let formas = document.querySelector("#guest-1")
    console.log(formas.textContent) // Retorna o conteúdo visível e culto
    console.log(formas.innerText) //Retorna somente o conteudo visível
    console.log(formas.innerHTML) // Retorna o HTML como texto
}


function alterandoEstilos() {

    const input = document.querySelector("#name")

    // Adicionando estilo atravez do script
    input.classList.add("input-error")

    // remove a class de estilo somento a class css e não o elamento html
    input.classList.remove("input-error")


}

function propriedade() {
    const button = document.querySelector("button")
    button.style.backgroundColor = "red"
    button.innerText = "Conectar"
}

function criandoElemento() {
    // Seleciona a <ul>
    const pegaElemento = document.querySelector("ul");

    // Cria o <li>
    const newGuest = document.createElement("li");
    newGuest.classList.add("guest");

    // Cria o <span> com o nome
    const guestContent = document.createElement("span");
    guestContent.textContent = "Sabrina";

    // Adiciona o <span> dentro do <li>
    newGuest.append(guestContent);

    // Adiciona o <li> dentro da <ul>
    pegaElemento.appendChild(newGuest);
}

criandoElemento();

function addNome() {
    // Pega o elemento do html
    const newUL = document.querySelector("ul")

    // criando elemento
    let newLi = document.createElement("li")
    newLi.classList.add("guest")
    let newSpan = document.createElement("span")
    newSpan.textContent = "João"

    let newSp = document.createElement("span")
    newSp.classList.add("guest")
    newSp.innerText = "Israel"

    let newTI = document.createElement("span")
    newTI.classList.add("guest")
    newTI.innerText = "Vitoria"


    // Adiciona dentro do li
    newLi.append(newSpan, newSp, newTI)


    // Adiciona a li dentro da ul
    newUL.prepend(newLi)
    // newUL.prepend(newSp)

    console.log(newUL)


}


// Eventos

function eventos() {
    // Ecento de clique
    const clique = document.querySelector("button")

    clique.addEventListener("click", function (event) {
        event.preventDefault
        console.log(clique)
        window.alert("Você clicou no botão")
    })

    const ul = document.querySelector("ul")

    ul.addEventListener("scroll", () => {
        if (ul.scrollTop > 300) {
            ul.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    })

}

// eventos()

function eventKeydow() {
    // Evento de imput

    const input = document.querySelector("input")

    /* Evento de KeyDow - Quando uma tecla é precionada
                        - Ele pega todas as teclas que são precionadas

       Evento de Keypress - Quando uma tecla é precionada 
    */

    input.addEventListener("keypress", function (event) {

        console.log(event.key)


    })

    input.addEventListener("keydown", function (event) {

        console.log(event.key)


    })

    input.onchange = () => {
        // 

        console.log("O Input saio")
    }


}
// eventKeydow()


// Manipulando valor do input
function regexr() {

    const input = document.querySelector("input")
    const fomr = document.querySelector("form")

    input.addEventListener("input", () => {

        const value = input.value

        const regex = /\D+/g

        // Retorna o padrão da string
        console.log(value.match(regex))


        const isValid = regex.test(value)
        console.log(isValid)
    })
    

}

regexr()




