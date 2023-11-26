function testArray(){
    let numbers = [1, 3, 5]
    numbers.push(7)
    numbers.push(9)
    console.log("Percorrendo um array com for tradicional.")
    for (let i = 0; numbers.length > i; i++){
        console.log(numbers[i])
    }
    console.log("Percorrendo um array for i in array.")
    for (let i in numbers){
        console.log(numbers[i])
    }
    console.log("Percorrendo um array com a função map.")
    numbers.map(n => {console.log(n)})
}

testArray()