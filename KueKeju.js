const Kue = require('./Kue')

class KueKeju extends Kue {
    constructor (name) {
        super('Kue Keju')
        this.waktuMatang = 35
    }
}

module.exports = KueKeju