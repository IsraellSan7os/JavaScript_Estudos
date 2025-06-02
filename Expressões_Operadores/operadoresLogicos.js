
{
    let email = true
    let password = true

    // AND (E) && 
    // So precisa de um pra ser falso 
    if (email && password) {
        console.log("Vedadeiro")
    } else {
        console.log("Falso")
    }


}
{
    const num = true
    const num2 = false
    // Presica que as duas condições sejão true para que o resultado seja vedadeiro
    if (num && num2) {
        console.log("Verdadeiro")
    } else {
        console.log("Falso")
    }
}

{
    // OR (OU)  ||
    // Precisa que somente uma das condições sejá true para que o resultado seja verdadiro
    const i = true
    const c = false

    if (i || c) {
        console.log("Verdadeiro")
    } else {
        console.log("Falso")
    }

}

{
    // NOT (negação) !
    // Se for vardadeiro ele vai passa pra falso 
    // Se for falso ele vai passa pra vardade
    let n = true
    if (!n) {
        console.log("Verdade")
    } else {
        console.log("Falso")
    }

}