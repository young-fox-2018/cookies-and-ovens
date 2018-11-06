
class Kue {
    constructor(name, hampir, matang, hangus, status) {
        this._name = name
        this._hampir = hampir
        this._matang = matang
        this._hangus = hangus
        this._status = status || 'mentah'
    }
    get name() {
        return this._name
    }
    get hampir() {
        return this._hampir
    }
    set hampir(input) {
        this._hampir = input
    }
    get matang() {
        return this._matang
    }
    set matang(input) {
        this._matang = input
    }
    get hangus() {
        return this._hangus
    }
    set hangus(input) {
        this._hangus = input
    }
    get status() {
        return this._status
    }
    set status(input) {
        this._status = input
    }
    bake(limit) {
        for (let i = 0; i <= limit; i += 5) {
            let result = `Kue ${this.name}, menit ke ${i} :`
            if (i < this.hampir) {
                this.status = 'mentah'
                result += `${this.status}`
            } else if (i >= this.hampir && i < this.matang) {
                this.status = 'hampir matang'
                result += `${this.status}`
            } else if (i >= this.matang && i < this.hangus) {
                this.status = 'matang'
                result += `${this.status}`
            } else {
                this.status = 'hangus'
                result += `${this.status}`
            }
            console.log(result)
        }

    }
}



module.exports = Kue