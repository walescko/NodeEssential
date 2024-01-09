import CarroDB from "./CarroDB.cjs"

CarroDB.getCarroID(11, function(carro){
    console.log(carro.id + ": " + carro.nome)
})