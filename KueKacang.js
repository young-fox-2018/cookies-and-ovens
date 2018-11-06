const Kue = require('./Kue')

class KueKacang extends Kue {
    constructor (name) {
        super('Kue Kacang')
        this.waktuMatang = 30
    }
}

module.exports = KueKacang