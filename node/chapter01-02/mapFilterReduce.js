//Funções que auxiliam o uso o Arrays
let numbers00 = [1, 2, 3, 4, 5]

//map function
let numbers01 = numbers00.map(n => n*2)
console.log(numbers01)

//filter function
let numbers02 = numbers00.filter(n => n > 2)
console.log(numbers02)

//reduce function
//sem elemento inicial do array informado.
let s = numbers00.reduce((accumulatedValue, n) => accumulatedValue + n*2)
console.log(s)
//com elemento inicial do array informado
s = numbers00.reduce((accumulatedValue, n) => accumulatedValue + n*2, 0)
console.log(s)
