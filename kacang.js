const Kue = require('./kue')

 class Kacang extends Kue {
    constructor(varian) {
        super(varian)
        this.matang = 30
        this.hampirMatang = 25
    }
}
 module.exports = Kacang