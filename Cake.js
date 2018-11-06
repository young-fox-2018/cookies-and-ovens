"use strict"

class Cake {
    constructor(name, time) {
        this.name = name
        this._status = 'mentah'
        this._bakedTime = time
    }

    get status() {
        return this._status
    }

    set status(input) {
        this._status = input
    }

    get bakedTime() {
        return this._bakedTime
    }

    set bakedTime(input) {
        this._bakedTime = input
    }
}

module.exports = Cake