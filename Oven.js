class Oven {
    static bake(cookie, time) {

        console.log(`Let's bake ${cookie.name}`)
        let timer = 0;
        do {
            if (cookie.time - timer === 5) {
                cookie.status = 'hampir matang'
            }
            if (cookie.time === timer) {
                cookie.status = 'matang'
            }
            if (timer > cookie.time) {
                cookie.status = 'hangus'
            }
            console.log(`${timer} minutes baking ${cookie.name}: ${cookie.status}`);

            timer += 5;
        } while (timer <= time);
    }
}

module.exports = Oven;