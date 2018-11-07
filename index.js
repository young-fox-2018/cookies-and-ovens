const Coklat = require('./coklat')
const Keju = require('./keju')
const Kacang = require('./kacang')
const Oven = require('./oven')


let coklat = new Coklat('Coklat')
let keju = new Keju('Keju')
let kacang = new Kacang('Kacang')

console.log('================PROSES MASAK KUE COKLAT================' + '\n')
Oven.bake(coklat, 50)
console.log('================PROSES MASAK KUE KEJU================' + '\n')
Oven.bake(keju, 50)
console.log('================PROSES MASAK KUE KACANG================' + '\n')
Oven.bake(kacang, 50)

