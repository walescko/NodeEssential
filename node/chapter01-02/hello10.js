function sum(a, b){
    return a + b
}

function multiplication(a, b){
    return a * b
}

function execution(function01, a, b){
    return function01(a, b)
}

let resultado = execution(sum, 1, 3)
console.log(resultado)