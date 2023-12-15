//Esta função recebe outra funcão como parametro
function execute00(function00, a , b){
    return function00(a, b)
}

let resultado = execute00(function (a,b) {return a + b}, 1, 3)
console.log(resultado)

//pag32 2 - outra forma de escrever
function execute01(function01, a, b){
    return function01(a, b)
}
let function01 = function (a, b){ return a + b }
let resultado01 = execute01(function01, 1, 4)
console.log(resultado01)