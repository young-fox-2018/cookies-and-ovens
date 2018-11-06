const Peanut = require('./peanut')
const Chocolate = require('./chocolate')
const Cheese = require('./cheese')
const Oven = require('./oven')

let peanutCookies = new Peanut('peanut')
let chocolateCookies = new Chocolate('chocolate')
let cheeseCookies = new Cheese('cheese')

let arr = [peanutCookies, chocolateCookies, cheeseCookies]

Oven.bake(arr, 35)