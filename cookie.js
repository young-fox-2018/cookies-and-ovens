class Cookie {
    constructor(flavor) {
        this.flavor = flavor
        this.status = 'uncooked'
    }

    bake(time) {
        for (let i = 0; i <= time; i += 5) {
            let result = `${this.flavor} cookies, ${i} min: `
            if (i < this.cookedAt - 5) {
                this.status = 'uncooked'
                result += this.status
            }
            else if (i > this.cookedAt - 10 && i < this.cookedAt) {
                this.status = 'almost cooked'
                result += this.status
            }
            else if (i == this.cookedAt) {
                this.status = 'cooked'
                result += this.status
            }
            else if (i > this.cookedAt) {
                this.status = 'over cooked'
                result += this.status
            }
            console.log(result)
        }
    }
}

module.exports = Cookie