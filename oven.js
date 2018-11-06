class Oven {
    static bake(arr, time) {
        for (let i = 0; i < time; i++) {
            for (let j = 0; j < arr.length; j++) {
                let cookie = arr[j]
                if (i < cookie.cookedAt - 5) {
                    cookie.status = 'uncooked'
                }
                else if (i > cookie.cookedAt - 10 && i < cookie.cookedAt) {
                    cookie.status = 'almost cooked'
                }
                else if (i == cookie.cookedAt) {
                    cookie.status = 'cooked'
                }
                else if (i > cookie.cookedAt) {
                    cookie.status = 'over cooked'
                }  
                console.log(`${cookie.flavor} cookies, at ${i} min: ${cookie.status}`)           
            }
            console.log(' ')
        }
    }
}

module.exports = Oven