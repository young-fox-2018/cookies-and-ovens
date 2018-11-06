const Kue = require('./kue')

 class Coklat extends Kue {
    constructor(varian) {
        super(varian)
        this.matang = 20
        this.hampirMatang = 15
    }
}
 module.exports = Coklat 