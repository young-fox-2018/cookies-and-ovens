const Kue = require('./kue')

class Coklat extends Kue {
    constructor(name) {
        super(name)
        this.hampir = 15
        this.matang = 20
        this.hangus = 25
    }
}

module.exports = Coklat
