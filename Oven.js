"use strict"

class Oven {
    static bake(cake, time) {
        let result = ""

        for (let i = 5; i <= time; i+=5) {
            if (i === cake.bakedTime) {
                cake.status = 'matang'
            } else if (cake.bakedTime - i === 5) {
                cake.status = 'hampir matang'            
            } else if (i - cake.bakedTime === 5) { 
                cake.status =  'hangus'
                
            }
            
            result += `kue ${cake.name}, menit ke ${i} : ${cake.status} \n`       
        }

        return result
    }
}

module.exports = Oven