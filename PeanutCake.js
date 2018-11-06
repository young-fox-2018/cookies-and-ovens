"use strict"
const Cake = require('./Cake')

class PeanutCake extends Cake {
    constructor(name, time) {
        super(name, time)
    }
}

module.exports = PeanutCake