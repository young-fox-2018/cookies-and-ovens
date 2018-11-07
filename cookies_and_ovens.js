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

class Oven {
    static bake(cake, time){
        for (let i = 0 ; i <= time; i+= 5) {
            if (i === cake.done) {
                cake.status = 'MATANG'
            }
            else if(i > cake._done){
                cake.status = "HANGUS"
            }
            console.log(`Kue ${cake.constructor.name}, menit ke ${i} : ${cake.status}`)
        }
    }
}

class Cake{
    constructor(){
        this._status = 'MENTAH'
    }

    get done(){
        return this._done
    }

    get status(){
        return this._status
    }
    set status(input){
        this._status = input
    }

}

class Coklat extends Cake{
    constructor(){
        super()
        this._done = 20
    }
}

class Kacang extends Cake{
    constructor(){
        super()
        this._done = 30
    }
}

class Keju extends Cake{
    constructor(){
        super()
        this._done = 35
    }
}

Oven.bake(new Coklat(), 15)
console.log("=================================")
Oven.bake(new Kacang(), 30)
console.log("=================================")
Oven.bake(new Keju(), 40)