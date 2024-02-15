const book01 = ["CSS3", "Javascript", "Python"]
const book02 = ["HTML", "Node", "React"]
const price = [70, 30, 90, 110, 10]
let books01 = book01 + book02
console.log(books01)
let books02 = []
books02 = [book01] + [book02]//isso aqui não tem dado o resultado esperado.
console.log(books02)
let books03 = [...book01, ...book02]
console.log(books03)
console.log(books03.length)