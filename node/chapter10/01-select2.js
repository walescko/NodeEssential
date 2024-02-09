import CarroDB from "./model/CarroDB.cjs"
// const CarroDB = require('./CarroDB.cjs')
let callback = function (carros){
    for (let i = 0; carros.length > i; i++){
        console.log(carros[i].id + ": " + carros[i].nome)
    }
}
CarroDB.getCarros(callback)