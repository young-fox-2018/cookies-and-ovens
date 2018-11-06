class Oven {
    static bake(cookie, time) {

        console.log(`Let's bake ${cookie.name}`)
        let timer = 0;
        do {
            if (cookie.time - timer === 5) {
                cookie.status = 'almost done'
            } else if (cookie.time === timer) {
                cookie.status = 'baked'
            } else if (timer > cookie.time) {
                cookie.status = 'burnt'
            }
            console.log(`${timer} minutes baking ${cookie.name}: ${cookie.status}`);

            timer += 5;
        } while (timer <= time);
    }
}

module.exports = Oven;