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


const Oven = require('./oven.js')
const Cookie = require('./cookie.js')

const coklat = new Cookie("Chocolate cake", 20)
const kacang = new Cookie("Peanut cake", 15)
const keju = new Cookie("Cheese cake", 25)

Oven.bake(coklat, 30)
Oven.bake(kacang , 15)
Oven.bake(keju , 20)
