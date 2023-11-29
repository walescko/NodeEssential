//class and objects
function objects01(){
    let person = Object();
    person.name = "Walescko"
    person.hello = function(){
        return "Hello Pessoa!"
    }
    console.log(person)
    console.log(person.name)
    console.log(person.hello())
}
objects01()

function objects02(){
    let person = {
        name : 'Walescko',
        hello: function (){ return "Hello Pessoa!"}
    }
    console.log(person)
    console.log(person.name)
    console.log(person.hello())
}
objects02()

function Person(){
    this.name = "Walescko"
    this.hello = function(){ return "Hello Pessoa@!"}
}
function objects03(){
    let person = new Person()
    console.log(person)
    console.log(person.name)
    console.log(person.hello())
}
objects03()

class Person01{
    constructor() {
        this.name = "Walescko!"
    }
    hello(){
        return "Hello People!"
    }
}
function objects04(){
    let person = new Person01()
    console.log(person)
    console.log(person.name)
    console.log(person.hello())
}
objects04()