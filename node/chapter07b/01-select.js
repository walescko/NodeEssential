const CarroDB = require('./CarroDB.js')
CarroDB.getCarros(function (carros){
    for (let i = 0; carros.length > i; i++){
        console.log(carros[i] + ": " + carros[i].nome)
    }
})