
class Kue{
    constructor(){
        this._status = "Raw"
    }

    get done(){
        return this._done
    }

    get status(){
        return this._status
    }
    set status(input){
        this._status = input
    }

}

module.exports = Kue