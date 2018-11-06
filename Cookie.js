class Cookie {
    constructor(name, time){
        this._name = name,
        this._cook_time = time,
        this._status = 'mentah'
    }

    set status(status) {
        this._status = status;
    }
    get time () {
        return this._cook_time
    }
    get status () {
        return this._status
    }
    get name () {
        return this._name
    }
}

module.exports = Cookie