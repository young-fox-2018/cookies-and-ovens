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
    }
    bake(kue, timer) {
        for (let i = 5; i < timer; i += 5) {
            let output = ''
            if (i <= kue.cooked - 10) {
                output = `menit ke: ${i}. status: mentah`
            }
            else if (i <= kue.cooked - 5) {
                output = `menit ke: ${i}. status: hampir matang`
            }
            else if (i === kue.cooked) {
                output = `menit ke: ${i}. status: matang`
            }
            else if (i >= kue.cooked + 5) {
                output = `menit ke: ${i}. status: hangus`
            }
            console.log(output)
        }
    }

}

let kue1 = new Oven().bake(new KueCoklat('kue coklat'), 40)
