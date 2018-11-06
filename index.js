const Coklat = require('./coklat')
const Keju = require('./keju')
const Kacang = require('./kacang')


let coklat = new Coklat('Coklat')
let keju = new Keju('Keju')
let kacang = new Kacang('Kacang')

console.log('================PROSES MASAK KUE COKLAT================' + '\n')
coklat.bake(50)
console.log('================PROSES MASAK KUE KEJU================' + '\n')
keju.bake(50)
console.log('================PROSES MASAK KUE KACANG================' + '\n')
kacang.bake(50)

