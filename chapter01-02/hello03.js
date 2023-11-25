//console.log com argumentos
//%s String, %d Number, %f Decimal Number, %j JSON, %% mostra o caracter percentual
function testVar(){
    let a = 1
    let b = 2
    let sum = a + b
    let name = "Oscar Eca"

    console.log("Olá %s, o resultado da soma é: %d", name, sum)
}
testVar()