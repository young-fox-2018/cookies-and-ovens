
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
}



module.exports = Kue