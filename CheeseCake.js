"use strict"
const Cake = require('./Cake')

class CheeseCake extends Cake {
    constructor(name, time) {
        super(name, time)
    }
}

module.exports = CheeseCake