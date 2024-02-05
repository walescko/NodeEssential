import CarroDB from "./CarroDB.cjs"

let carro = {nome: "My Car", tipo: "jabiraca"}
CarroDB.save(carro, function (carro){
    console.log("Carro Salvo: " + carro.id + ": " + carro.nome)
})