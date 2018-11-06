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

const Kue = require('./Kue')

class Coklat extends Kue{
    constructor(){
        super()
        this._done = 20
    }
}

class Kacang extends Kue{
    constructor(){
        super()
        this._done = 30
    }
}

class Keju extends Kue{
    constructor(){
        super()
        this._done = 35
    }
}

module.exports ={
    Coklat: Coklat,
    Kacang: Kacang,
    Keju: Keju
}