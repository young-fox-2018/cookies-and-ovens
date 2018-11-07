
class Oven {
    static bake(cookieType, time) {
        for (let i = 0; i <= time; i += 5) {
            let result = `Kue ${cookieType.name}, menit ke ${i} :`
            if (i < cookieType.hampir) {
                cookieType.status = 'mentah'
                result += `${cookieType.status}`
            } else if (i >= cookieType.hampir && i < cookieType.matang) {
                cookieType.status = 'hampir matang'
                result += `${cookieType.status}`
            } else if (i >= cookieType.matang && i < cookieType.hangus) {
                cookieType.status = 'matang'
                result += `${cookieType.status}`
            } else {
                cookieType.status = 'hangus'
                result += `${cookieType.status}`
            }
            console.log(result)
        }
    }
}

module.exports = Oven