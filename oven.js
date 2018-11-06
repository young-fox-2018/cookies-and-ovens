class Oven {
    static bake(arr, time) {
        for (let i = 0; i < time; i+=5) {
            for (let j = 0; j < arr.length; j++) {
                let cookie = arr[j]
                if (i < cookie.matang - 5) {
                    cookie.status = 'mentah'
                }
                else if (i > cookie.matang - 10 && i < cookie.matang) {
                    cookie.status = 'hampir matang'
                }
                else if (i == cookie.matang) {
                    cookie.status = 'matang'
                }
                else if (i > cookie.matang) {
                    cookie.status = 'hangus'
                }  
                console.log(`Kue ${cookie.varian}, at ${i} min: ${cookie.status}`)           
            }
            console.log(' ')
        }
    }
}
 module.exports = Oven