const Cookie = require('./cookie')

class Peanut extends Cookie {
    constructor(flavor) {
        super(flavor)
        this.cookedAt = 30
        this.almostCookedAt = 25
    }
}

module.exports = Peanut