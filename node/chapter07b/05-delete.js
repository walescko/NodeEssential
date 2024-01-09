import CarroDB from "/CarroDB.cjs"

let carro = {id: 31}
CarroDB.delete(carro, function(carro){
    console.log("Carro Deletado: " + carro.id)
})