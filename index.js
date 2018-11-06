const Peanut = require('./peanut')
const Chocolate = require('./chocolate')
const Cheese = require('./cheese')

let peanutCookies = new Peanut('peanut')
let chocolateCookies = new Chocolate('chocolate')
let cheeseCookies = new Cheese('cheese')

let time = 35

console.log('========== PEANUT COOKIES ==========')
peanutCookies.bake(time)
console.log('')
console.log('========= CHOCOLATE COOKIES =========')
chocolateCookies.bake(time)
console.log('')
console.log('========== CHEESE COOKIES ==========')
cheeseCookies.bake(time)