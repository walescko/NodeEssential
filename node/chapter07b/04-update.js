import CarroDB from "./CarroDB.cjs"

let carro = { id:31, nome: "MY Car JABiraca", tipo: "jabiraca esportivo"}
CarroDB.update(carro, function(carro){
    console.log("Carro atualizado: " + carro.id + ": " +carro.nome)
})
