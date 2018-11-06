const Cookie = require('./Cookie.js');

class Peanut extends Cookie {
    constructor(name) {
        super(name, 25)
    }
}

module.exports = Peanut