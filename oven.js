
class Oven {
    static bake(cookie, time) {
        for (let i = 0; i <= time; i += 5) {
            let result = `${cookie.flavor} cookies, ${i} min: `
            if (i < cookie.cookedAt - 5) {
                cookie.status = 'uncooked'
                result += cookie.status
            }
            else if (i > cookie.cookedAt - 10 && i < cookie.cookedAt) {
                cookie.status = 'almost cooked'
                result += cookie.status
            }
            else if (i == cookie.cookedAt) {
                cookie.status = 'cooked'
                result += cookie.status
            }
            else if (i > cookie.cookedAt) {
                cookie.status = 'over cooked'
                result += cookie.status
            }
            console.log(result)
        }
    }
}

module.exports = Oven