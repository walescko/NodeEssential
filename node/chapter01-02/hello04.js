//console.log com argumentos
//%s String, %d Number, %f Decimal Number, %j JSON, %% mostra o caracter percentual
function testVar(){
    let a = 1
    let b = 2
    let sum = a + b
    let name

    console.log("Olá %s, o resultado da soma é: %d", name, sum) //não foi inicializada a variável name, resultando em undefined
}
testVar()