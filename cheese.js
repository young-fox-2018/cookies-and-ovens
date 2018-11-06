const Cookie = require('./cookie')

class Cheese extends Cookie {
    constructor(flavor) {
        super(flavor)
        this.cookedAt = 35
        this.almostCookedAt = 30
    }
}

module.exports = Cheese