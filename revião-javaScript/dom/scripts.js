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


// selcionaElemento()


const manipulandoElementos = function () {

    const guet = document.querySelector("#guest-1 span")
    guet.textContent = "Israel"
    console.log(guet.textContent)


}

manipulandoElementos()


