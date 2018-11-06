// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
class Kue {
    constructor(name) {
        this.cakeName = name
        this.status = 'mentah'
    }
}

class Cokelat extends Kue {
    constructor(cakeName) {
        super(cakeName)
        this.bakedTime = 20
    }
}
class Kacang extends Kue {
    constructor(cakeName) {
        super(cakeName)
        this.bakedTime = 38
    }
}
class Keju extends Kue {
    constructor(cakeName) {
        super(cakeName)
        this.bakedTime = 50
    }
}
class Oven {
    static plate(dataRoti, time) {
        let count = 0
        for (let i = 0; i < time; i += 5) {
            count++
            console.log(`=================Information Session ${count}`)
            for (let j = 0; j < dataRoti.length; j++) {
                if (i > dataRoti[j].bakedTime - 10 && i < dataRoti[j].bakedTime) dataRoti[j].status = 'Hampir Matang'
                else if (i < dataRoti[j].bakedTime) dataRoti[j].status = 'Mentah'
                else if (i === dataRoti[j].bakedTime) dataRoti[j].status = 'Matang'
                else if (i > dataRoti[j].bakedTime) dataRoti[j].status = 'Gosong'
                console.log(`Roti ${dataRoti[j].cakeName}, menit ke ${i}: ${dataRoti[j].status}`)
            }
            if (i === time) {
                console.log(`======================== finish =========================`)
            } else {
                console.log(`========================        =========================`)
            }
            console.log(``)
        }

    }
}


let cokelat = new Cokelat('Cokelat')
let kacang = new Kacang('Kacang')
let keju = new Keju('Keju')
let dataRoti = [cokelat, kacang, keju]

Oven.plate(dataRoti, 30)