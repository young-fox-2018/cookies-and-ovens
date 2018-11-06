const Kue = require('./kue')

class Kacang extends Kue {
    constructor(name) {
        super(name)
        this.hampir = 20
        this.matang = 30
        this.hangus = 40
    }
}

module.exports = Kacang