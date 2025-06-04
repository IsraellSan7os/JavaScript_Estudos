// Tratamento de Exceções
let log

try {
    // Tente ezecutar
    console.log(log)
} catch (error) {
    // Captura o erro e trata
    console.log(error)
}

finally {
    console.log("Fim")

}

let result = 1

try {
    if (result === 0) {
        throw new Error("O valor é igual a zero");
    }
} catch (error) {
    console.log(error.message)
}
finally{
    console.log("Fim")
}