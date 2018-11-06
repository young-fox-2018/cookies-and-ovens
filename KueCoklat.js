const Kue = require('./Kue')

class KueCoklat extends Kue {
    constructor (name) {
        super('Kue Coklat')
        this.waktuMatang = 20
    }
}

module.exports = KueCoklat