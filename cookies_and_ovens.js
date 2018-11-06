// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?

class Cookie{
    constructor(){
        this.name = ""
        this.time = 0
    }
}

class Chocolate extends Cookie{
    constructor(){
        super()
        this.name = "Kue cokelat"
        this.time = 20
    }
}

class Peanut extends Cookie{
    constructor(){
        super()
        this.name = "Kue kacang"
        this.time = 30
    }
}

class Cheese extends Cookie{
    constructor(){
        super()
        this.name = "Kue keju"
        this.time = 35
    }
}

class Oven{
    constructor(cookie, time){
        this.cookie = cookie
        this.bake = time
        this.start = 5
        this.repeat = time/5
    }

    baking(){
        if(this.cookie === "chocolate"){
            var newBatch = new Chocolate()
        }else if(this.cookie === "peanut"){
            var newBatch = new Peanut()
        }else if(this.cookie === "cheese"){
            var newBatch = new Cheese()
        }

        for(let i = 0; i < this.repeat; i++){
            if(this.start < newBatch.time-5){
                console.log(`${newBatch.name}, menit ke ${this.start} : mentah`)
            }else if(this.start >= newBatch.time-5 && this.start < newBatch.time){
                console.log(`${newBatch.name}, menit ke ${this.start} : hampir matang`)
            }else if(this.start === newBatch.time){
                console.log(`${newBatch.name}, menit ke ${this.start} : matang`)
            }else if(this.start > newBatch.time){
                console.log(`${newBatch.name}, menit ke ${this.start} : hangus`)
            }
    
            this.start = this.start + 5
        }
    }
}

let newChoco = new Oven("chocolate", 25)
newChoco.baking()

let newCheese = new Oven("cheese", 55)
newCheese.baking()

let newPeanut = new Oven("peanut", 35)
newPeanut.baking()