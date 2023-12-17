//A desestruturação no modifica o array original ou objeto original. Ela copia seus itens e os atribui a variáveis
console.log("Array")
console.log("Sem desestrutuação")
const books = ["CSS3", "HTML5", "Javascript", "React", "Node JS"]
console.log(books[0])
console.log(books[3])
console.log("com desestrutuação")
let [css, html5, js, react, node] = books
console.log(css)
console.log(node)

console.log("Object")
console.log("Sem desestruturação")
const books00 = [
    { title: "React", author: "Mauricio Samy Silva"},
    { title: "Node Essential", author: "Ricardo R. Lecheta"},
    { title: "UX Desing", author: "Will Grant"}
    ]
console.log(books00[0])
console.log(books00[2])
console.log(books00[1])

console.log("Com desestruturação")
let [lOne, lTwo, lThree] = books00
console.log(lOne.title)
console.log(lThree.author)