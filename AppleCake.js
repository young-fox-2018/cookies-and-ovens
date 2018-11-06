"use strict"

const Cake = require('./Cake')

class AppleCake extends Cake {
    constructor(name, time) {
        super(name, time)
    }
}

module.exports = AppleCake