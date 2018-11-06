
// Answer These Questions:
//
// - What are essential classes?
// All of cookies type class, parent Cookie class, Oven class
// - What attributes will each class have?
// name, waktuMakan, waktuOven, status
// - What interface will each class provide?
// name, waktuOven and status when cook method run
// - How will the classes interact with each other?
// with static class named cook in Oven class 
// - Which classes will inherit from others, if any?
//  KueKeju, KueKacang & KueCoklat class is inherit from Kue class
//
// Your code here


const KueCoklat = require('./KueCoklat')
const KueKacang = require('./KueKacang')
const KueKeju = require('./KueKeju')
const Oven = require('./Oven')

let kue_coklat = new KueCoklat()
let kue_kacang = new KueKacang()
let kue_keju = new KueKeju()
// array tray oven

let tray = [kue_coklat, kue_kacang, kue_keju]

// bakarr

Oven.cook(tray, 30)
