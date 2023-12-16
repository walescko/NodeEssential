let books00 = [ "CSS3", "Javascript", "Python", "HTML", "Node", "React" ]
console.log(books00)
console.log(books00.length)
console.log("map()")
let books01 = books00.map((book) => "Livro " + book)
let books02 = books00.map((book, index) => "Livro " + index + " " + book)

console.log(books00)
console.log(books01)
console.log(books02)

const books03 = [
    {title: "Construindo sites com HTML", author: "Mauricio Samy Silva"},
    {title: "Web Scraping com Python", author: "Ryan Mitchell"},
    {title: "CSS3", author: "Mauricio Samy Silva"}
]

let books04 = books03.map((book) => "Livro: " + book.title)
let books05 = books03.map((book) => "Autor: " + book.author)

console.log(books03)
console.log(books04)
console.log(books05)

