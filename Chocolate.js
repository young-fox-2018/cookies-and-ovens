const Cookie = require('./Cookie.js');

class Chocolate extends Cookie {
    constructor(name) {
        super(name, 20)
    }
}

module.exports = Chocolate