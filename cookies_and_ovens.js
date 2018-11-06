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

const Kacang = require('./kacang')
const Coklat = require('./coklat')
const Keju = require('./keju')
const Oven = require('./oven')

let KueKacang = new Kacang('kacang')
let KueCoklat = new Coklat('coklat')
let KueKeju = new Keju('keju')
let arr = [KueKacang, KueCoklat, KueKeju]
Oven.bake(arr, 35)