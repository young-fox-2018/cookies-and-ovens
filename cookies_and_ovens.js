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
const Cookie = require("./Cookie");

class Oven {
    static bake(cookie, time) {
        for (let i = 0; i < cookie.length; i++) {
            console.log(`---------- ${cookie[i].name} ----------`);
            for (let j = 5; j <= time; j += 5) {
                if (j < cookie[i].time) {
                    console.log(`${cookie[i].name}, menit ke ${j} : mentah`);
                }
                if (j === cookie[i].time-5) {
                    console.log(`${cookie[i].name}, menit ke ${j} : hampir matang`);
                }
                if (j === cookie[i].time) {
                    console.log(`${cookie[i].name}, menit ke ${j} : matang`);
                }
                if (j > cookie[i].time) {
                    console.log(`${cookie[i].name}, menit ke ${j} : hangus`);
                }
            }
        }
    }
}
//  data
var kueCoklat = new Cookie('Kue Coklat', 20);
var kueKacang = new Cookie('Kue Kacang', 30);
var kueKeju = new Cookie('Kue Keju', 35);

//  yang mau dimasukkan ke oven
var cookie = [kueCoklat, kueKacang, kueKeju];

Oven.bake(cookie, 40);