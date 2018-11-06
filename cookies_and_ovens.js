// Answer These Questions:
//
// - What are essential classes?
/*  Oven class*/

// - What attributes will each class have?
/*  Cookies: cookies name, cooked_time
*/

// - What interface will each class provide?
/*  cookies will produce name cookies and cooked time
    oven will produce cooking status
*/

// - How will the classes interact with each other?
/*   aggregation*/

// - Which classes will inherit from others, if any?
//
//
// Your code here

class Cookies{
    constructor(name, cooked_time){
        this.name = name
        this.cookedTime = cooked_time //waktu matang
    }  
}

class Oven{
    static bake(cookies, cooking_time){
        for( let i = 0; i < cookies.length; i++){
            console.log("\n"+`-----------${cookies[i].name}-----------`)
            let count = 0
            while( count < cooking_time ){
                count += 5
                if(count > cookies[i].cookedTime){
                    console.log(`${cookies[i].name}, menit ke ${count} : hangus`)
                } else if(count === cookies[i].cookedTime){
                    console.log(`${cookies[i].name}, menit ke ${count} : matang`)
                } else if(count === cookies[i].cookedTime - 5){
                    console.log(`${cookies[i].name}, menit ke ${count} : hampir matang`)
                } else {
                    console.log(`${cookies[i].name}, menit ke ${count} : mentah`)
                }
            }
        }
    }
}

let coklat = new Cookies("Kue coklat",20) // nama kue, cooked time(waktu matang)
let kacang = new Cookies("Kue kacang",30)
let keju = new Cookies("Kue keju",35)

// masak apa??
let cookies = [coklat,kacang,keju] //kue yang mau dimasak disimpan ke array dulu

// lets cook
Oven.bake(cookies,30)