class Kue {
    constructor(name) {
        this.name = name
    }
}

class KueCoklat extends Kue {
    constructor(name) {
        super(name)
        this.cooked = 20
    }
}
class KueKacang extends Kue {
    constructor(name) {
        super(name)
        this.cooked = 30
    }
}
class KueKeju extends Kue {
    constructor(name) {
        super(name)
        this.cooked = 35
    }
}
class Oven {
    constructor() {
        this.trays = []
    }

    addCookie(kue) {
        this.trays.push(kue)
    }

    bake(timer) {
        for (let i = 0; i < this.trays.length; i++) {
            for (let j = 5; j < timer; j += 5) {
                let output = `${this.trays[i].name} `
                if (j <= this.trays[i].cooked - 10) {
                    output += `menit ke: ${j}. status: mentah`
                }
                else if (j <= this.trays[i].cooked - 5) {
                    output += `menit ke: ${j}. status: hampir matang`
                }
                else if (j === this.trays[i].cooked) {
                    output += `menit ke: ${j}. status: matang`
                }
                else if (j >= this.trays[i].cooked + 5) {
                    output += `menit ke: ${j}. status: hangus`
                }
                console.log(output)
            }
        }
    }


}

// let kue1 = new Oven().bake(new KueCoklat('kue coklat'), 40)

let coklat = new KueCoklat('kue coklat')
let keju = new KueKeju('kue keju')
let oven = new Oven()
oven.addCookie(coklat)
oven.addCookie(keju)

oven.bake(30)
