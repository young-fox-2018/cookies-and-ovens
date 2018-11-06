const Peanut = require('./peanut')
const Chocolate = require('./chocolate')
const Cheese = require('./cheese')
const Oven = require('./oven')

let peanutCookies = new Peanut('peanut')
let chocolateCookies = new Chocolate('chocolate')
let cheeseCookies = new Cheese('cheese')

let time = 35

console.log('========== PEANUT COOKIES ==========')
Oven.bake(peanutCookies, time)
console.log('')
console.log('========= CHOCOLATE COOKIES =========')
Oven.bake(chocolateCookies, time)
console.log('')
console.log('========== CHEESE COOKIES ==========')
Oven.bake(cheeseCookies, time)