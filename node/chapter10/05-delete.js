import CarroDB from "./model/CarroDB.cjs"

let carro = {id: 32}
CarroDB.delete(carro, function(carro){
    console.log("Carro Deletado: " + carro.id)
})