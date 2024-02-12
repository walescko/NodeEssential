const CarroDB = require('./model/carroDB.js')

function teste(){
    CarroDB.getCarros(function(error, carros){
        console.log(JSON.stringify(carros))
    })
}