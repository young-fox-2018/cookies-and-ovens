const Cookie = require('./cookie')

class Chocolate extends Cookie {
    constructor(flavor) {
        super(flavor)
        this.cookedAt = 20
        this.almostCookedAt = 15
    }
}

module.exports = Chocolate