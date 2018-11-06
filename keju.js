const Kue = require('./kue')

class Keju extends Kue {
    constructor(name) {
        super(name)
        this.hampir = 25
        this.matang = 35
        this.hangus = 40
    }
}

module.exports = Keju