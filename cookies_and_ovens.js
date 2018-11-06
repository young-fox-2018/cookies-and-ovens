// Answer These Questions:
//
// - What are essential classes?
    // ## cookies class, in this class that will receive 2 parameters

// - What attributes will each class have?
// ## estimated time and type of the Cookies
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class Cookies {
    constructor(name, time) {
        this.name = name
        this.time = time
    }
}

class Oven {
    static bake(name, time) {
        for(let i = 0; i < name.length; i++){
            // console.log(name[i])
            console.log("~~~~~~~~~~~~~~~~~");
            for(let j = 5; j < time; j+=5) {
                if(j < time) {
                    console.log(`${name[i]}. menit ke ${j}: mentah`)
                } else if (j === time-5) {
                    console.log(`${name[i]}. menit ke ${j}: hampit matang`)
                } else if (j === time) {
                    console.log(`${name[i]}. menit ke ${j}: metang`)
                } else {
                    console.log(`${name[i]}. menit ke ${j}: hangus`)
                }
            }
        }
    }
}

const muffins = new Cookies("Muffins", 20);
const chips = new Cookies("Chocolate chips", 20);
const crackers = new Cookies("Crackers", 20);

let treats = ["Muffins", "Chocolate chips", "crackers"];
Oven.bake(treats, 30);
