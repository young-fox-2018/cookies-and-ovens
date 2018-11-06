'use strict'

const CheeseCake = require('./CheeseCake')
const AppleCake = require('./AppleCake')
const PeanutCake = require('./PeanutCake')
const Oven = require('./Oven')


let cheeseCake = new CheeseCake('cheese cake', 30)
let appleCake = new AppleCake('apple cake', 40)
let peanutCake = new PeanutCake('peanut cake', 50)

console.log(Oven.bake(cheeseCake, 50))
console.log(Oven.bake(appleCake, 50))
console.log(Oven.bake(peanutCake, 50))