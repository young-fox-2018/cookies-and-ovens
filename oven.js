class Oven {
    
   static bake(Cookie , time){
    console.log(`Progress of ${Cookie.Name}`)

        for (let i = 0; i <= time; i+= 5) {

            if (i > Cookie.timeBaked ) {
                console.log(  `${Cookie.Name}, menit ke ${i} : Over Cooked`)

            }else if (i == Cookie.timeBaked) {
                console.log( `${Cookie.Name}, menit ke ${i} : Ready to serve`)

            }else if (i == Cookie.timeBaked - 5) {
                console.log( `${Cookie.Name}, menit ke ${i} : Almost Cook`)

            }else if (i < Cookie.timeBaked) {
                console.log( `${Cookie.Name}, menit ke ${i} : Raw Dough`)

            }
         }
    }
        
    }
        

module.exports = Oven