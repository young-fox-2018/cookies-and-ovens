//  Answer These Questions:

//  1 What are essential classes?
//  - Cookies, Oven 
//  2 What attributes will each class have?
//   # Cookies
//   # - doughy, almost_ready, ready, burned, baking_duration
//   # 
//   # Oven
//   # - start_time, bake_time

//  - What interface will each class provide?
// - How will the classes interact with each other?
//    using .new to create different class object depending on the choice 
//   check the batch whehter is alright to remove

//  - Which classes will inherit from others, if any?
// - Peanut Butter, ChocolateChip, Almond Snow 


// # Your code here
const Cookie = require('./Cookie.js')
const Oven = require('./oven')

const Chocolate = new Cookie("Chocolate cookie",25)
const Peanut = new Cookie("Peanut Butter cookie",20)
const cheese = new Cookie("cheesy cookie",30)


Oven.bake(Chocolate, 20)
Oven.bake(Peanut , 20)
Oven.bake(cheese, 35)


