//console.log com argumentos
//%s String, %d Number, %f Decimal Number, %j JSON, %% mostra o caracter percentual
function testVar() {
    let a = 1
    let b = 2
    let sum = a + b
    let name01

    console.log("Teste com variável não inicializado")
    if (name01 == undefined) {
        console.log("Teste 1) O nome não foi inicializado!")
    }
    if (typeof (name01) == "undefined") {
        console.log("Teste 2: O nome não foi inicializado.")
    }
    console.log("O tipo do nome é %s e o topo da soma é %s", typeof(name01), typeof(sum))
    console.log("Hello World %s, o resultado da soma é: %d", name01, sum, "que", "legal")
}

testVar()