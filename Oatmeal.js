const Cookie = require('./Cookie.js');

class Oatmeal extends Cookie {
    constructor(name) {
        super(name, 15)
    }
}

module.exports = Oatmeal