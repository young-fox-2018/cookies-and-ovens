const Kue = require('./kue')

 class Keju extends Kue {
    constructor(varian) {
        super(varian)
        this.matang = 35
        this.hampirMatang = 30
    }
}
 module.exports = Keju