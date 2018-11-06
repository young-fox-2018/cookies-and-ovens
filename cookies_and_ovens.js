// Answer These Questions:
//
// - What are essential classes?
//!  Cookies class
// - What attributes will each class have?
//!  Name of cookies, ingridients, and estimate time
// - What interface will each class provide?
//!  -
// - How will the classes interact with each other?
//!  -
// - Which classes will inherit from others, if any?
//!  -
//
//
// Your code here

class KueCoklat {
    constructor (estimatedTime) {
    this.name = 'Kue Coklat'
    this.estimatedTime = estimatedTime
    }

}

class KueKacang {
    constructor (estimatedTime) {
    this.name = 'Kue Kacang'
    this.estimatedTime = estimatedTime
    }
}

class KueKeju {
    constructor (estimatedTime) {
    this.name = 'Kue Keju'
    this.estimatedTime = estimatedTime
    }
}

class Oven {
    static bake(tray, cookTime) {
        
        for(let i = 0; i < tray.length; i++) {
            let counter = 0
        console.log(`==================== ${tray[i].name} ======================`)
        while(counter !== cookTime) {
            counter += 5
            if(counter > tray[i].estimatedTime) {
                console.log(`${tray[i].name}, menit ke ${counter} : hangus`)
            } else if(counter === tray[i].estimatedTime) {
                console.log(`${tray[i].name}, menit ke ${counter} : matang`)
            } else if(counter >= tray[i].estimatedTime-10) {
                console.log(`${tray[i].name}, menit ke ${counter} : hampir matang`)
            } else if(counter < tray[i].estimatedTime-15) {
                console.log(`${tray[i].name}, menit ke ${counter} : mentah`)
            }
        }

       }
    }
}

let Kue_Coklat = new KueCoklat(20)
let Kue_Kacang = new KueKacang(25)
let Kue_Keju = new KueKeju(35)

let tray = [Kue_Coklat, Kue_Kacang, Kue_Keju]

Oven.bake(tray, 30)