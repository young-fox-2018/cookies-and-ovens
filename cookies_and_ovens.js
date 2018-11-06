
class Kue {
    constructor(cakesName) {
        this._cakesName = cakesName
        this._status = "mentah"
    }
}
class Coklat extends Kue {
    constructor(cakesName) {
        super(cakesName)
        this._timeLimit = 20
    }
}
class Kacang extends Kue {
    constructor(cakesName) {
        super(cakesName)
        this._timeLimit = 30
    }
}

class Keju extends Kue {
    constructor(cakesName) {
        super(cakesName)
        this._timeLimit = 35
    }
}

class Oven {
    static plate(dataRoti, waktu) {
        let count = 0
        for (let i = 0; i <= waktu; i += 5) {
            count++
            console.log(`========= Information Session ${count} ==========`);
            for (let j = 0; j < dataRoti.length; j++) {
                if (i > dataRoti[j]._timeLimit - 10 && i < dataRoti[j]._timeLimit) dataRoti[j]._status = "Hampir Matang"
                else if (i < dataRoti[j]._timeLimit) dataRoti[j]._status = "Mentah"
                else if (i === dataRoti[j]._timeLimit) dataRoti[j]._status = "Matang"
                else if (i > dataRoti[j]._timeLimit) dataRoti[j]._status = "Roti Hangus"
                console.log(`Roti ${dataRoti[j]._cakesName}, menit ke ${[i]} : ${dataRoti[j]._status}`);
            }
            if (i === waktu) {
                console.log(`=============      Finis      =============`);
            }
            else {
                console.log(`=============               ==============`);
            }
            console.log(``);
        }
    }

}

let coklat = new Coklat('Coklat')
let kacang = new Kacang('Kacang')
let keju = new Keju('Keju  ')
let dataRoti = [coklat, kacang, keju]

Oven.plate(dataRoti, 30)
