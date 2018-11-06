const{ Kacang, Keju, Coklat} = require('./cookies_and_ovens')
const fs = require("fs")
const orderFile = fs.readFileSync('Orderan.txt', 'utf8').split("\n")

class Oven{
    static baking(cake, bakingTime){
        for (let i = 0 ; i <= bakingTime; i+= 5) {
            if (i === cake.done) {
                cake.status = 'DONE!'
            }
            else if(i > cake._done){
                cake.status = "*BURNT*"
            }
            console.log(`Kue ${cake.constructor.name} , menit ke ${i} : ${cake.status}`)
        }
    }
    




    // static order(list){
    //     let res = []
    //     for(let iOrder = 0 ; iOrder < list.length ; iOrder++){
    //         if(list[iOrder] === "Kue Coklat"){
    //             res.push(new Coklat())
    //         }
    //         else if(list[iOrder] === "Kue Kacang"){
    //             res.push(new Kacang())
    //         }
    //         else if(list[iOrder] === "Kue Keju"){
    //             res.push(new Keju())
    //         }
    //     }
    //     return res
    // }
    // wait(){
    //     this.bakingTime += 5
    //     if(this.bakingTime > this.done){
    //         this.status = "hangus"
    //     }
    //     else if(this.bakingTime === this.done){
    //         this.status = "matang"
    //     }
    // }

}

Oven.baking(new Coklat(), 30)
console.log("=================================")
Oven.baking(new Kacang(), 50)
