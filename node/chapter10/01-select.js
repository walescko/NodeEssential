import CarroDB from "./model/CarroDB.cjs"
// const CarroDB = require('CarroDB.cjs')
CarroDB.getCarros(function (carros){
    for (let i = 0; carros.length > i; i++){
        console.log(carros[i] + ": " + carros[i].nome)
    }
})