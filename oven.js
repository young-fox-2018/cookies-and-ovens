

class Oven {
  static bake(cookie , time) {
    console.log(`Progress of ${cookie._name}`)
    
    for (let i = 0; i <= time; i+= 5) {
      if (i > cookie._cookedTime ) {
        console.log( ` ${cookie._name}, menit ke ${i} : Wah Gosong`)
      }else if (i == cookie._cookedTime) {
        console.log(` ${cookie._name}, menit ke ${i} : Matang`)
      }else if (i == cookie._cookedTime - 5) {
        console.log(` ${cookie._name}, menit ke ${i} : Hampir Matang`)
      }else if (i < cookie._cookedTime) {
        console.log(` ${cookie._name}, menit ke ${i} : Mentah`)

      }
    }
  }
}

module.exports = Oven