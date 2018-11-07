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
class Cookies {
    constructor(timeCook) {
        this.timeCook = timeCook
        this.status = 'mentah'
        this.name = ''
    }
} 

class Choco extends Cookies {
    constructor(){
        super()
        this.timeCook = 20
        this.name = 'cokelat'
    }
}

class Peanut extends Cookies {
    constructor(){
        super()
        this.timeCook = 30
        this.name = 'kacang'
    }
}
class Cheese extends Cookies {
    constructor(){
        super()
        this.timeCook = 35
        this.name = 'keju'
    }
}

class Oven {
    static bake(typeCake,timeOven){
        let time = 0
        while(time <= timeOven) {
            time += 5
            if(time <= 10) {
                typeCake.status = 'mentah'
            }else if(time >= 15 && time < 20) {
                typeCake.status = 'hampir matang'
            }else if(time >= 20 && time < 25) {
                typeCake.status = 'matang'
            }else{
                typeCake.status = 'hangus'
            }
            console.log(`Kue ${typeCake.name}, menit ke ${time} : ${typeCake.status}`)
            
        }
    }
}

let choco = new Choco()
Oven.bake(choco, 25)

