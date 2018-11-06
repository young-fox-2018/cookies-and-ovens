class Kue {
    constructor (name) {
        this.name = name
        this.waktuMatang = 0
        this.waktuOven = 0
        this.status = 'mentah'
    }
}

module.exports = Kue