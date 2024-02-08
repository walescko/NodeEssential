import CarroDB from "./model/CarroDB.cjs"

CarroDB.getCarroID(11, function(carro){
    console.log(carro.id + ": " + carro.nome)
})