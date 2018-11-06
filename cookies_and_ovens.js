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

class Oven {
  static bake(cookie, baketime) {
    for (var i = 0; i <= baketime; i+=5) {
      for (var j = 0; j < cookie.length; j++) {
        let status = ""
        if (i < cookie[j].baketime) {
          status = "mentah"
        }
        else if (i === cookie[j].baketime) {
          status = "matang"
        }
        else if (i > cookie[j].baketime) {
          status = "hangus"
        }
        console.log(`${cookie[j].name}, menit ke ${i} : ${status}`);
      }
    }
  }
}

class Cookie {
  constructor(name, baketime) {
    this.name = name
    this.baketime = baketime
  }
}

let kuecoklat = new Cookie("kue coklat", 20)
let kuekeju = new Cookie("kue keju", 25)
let kuebakpao = new Cookie("kue bakpao", 10)

let cookie = [kuecoklat, kuekeju, kuebakpao]

Oven.bake(cookie, 30)
