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
const Oven = require('./Oven.js');
const Chocolate = require('./Chocolate.js');
const Oatmeal = require('./Oatmeal.js');
const Peanut = require('./Peanut.js');

const choco = new Chocolate('Chocolate Cookie');
const oatmeal = new Oatmeal('Oatmeal Cookie');
const peanut = new Peanut('Peanut Butter Cookie');

Oven.bake(choco, 25);
Oven.bake(oatmeal, 15);
Oven.bake(peanut, 20);