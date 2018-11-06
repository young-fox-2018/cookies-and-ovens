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
    constructor() {
        this.tray = []
    }

    addCookie(cookie) {
        this.tray.push(cookie)
    }

    bake(timer) {
        let time_init = 5
        while (time_init <= timer ) {
            this.tray.forEach(cookie => {
                if (cookie.time - 5 == time_init) {
                    console.log(`Kue ${cookie.constructor.name}, menit ke ${time_init} : hampir matang`)
                }
                else if (time_init < cookie.time) { 
                    console.log(`Kue ${cookie.constructor.name}, menit ke ${time_init} : mentah`)
                } 
                else if (cookie.time == time_init) {
                    console.log(`Kue ${cookie.constructor.name}, menit ke ${time_init} : matang`)
                } else { // gosong
                    console.log(`Kue ${cookie.constructor.name}, menit ke ${time_init} : hangus`)
                }
            });
            time_init += 5
        }

    }

}


class Cookie {
    constructor (time) {
        this.status = 'mentah'
        this.time = time || null
    }
}
class Cokelat extends Cookie {
    constructor() {
        super(20)
    }
}
class Keju extends Cookie {
    constructor() {
        super(30)
    }
}
class Kacang extends Cookie {
    constructor() {
        super(40)
    }
}

let oven = new Oven()
let cokelat = new Cokelat()
let keju = new Keju()

//oven.addCookie(cokelat)
oven.addCookie(keju)
oven.bake(30)