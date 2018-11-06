class Oven {
    static cook (tray, time) {
        let timerReport = 5
        while (time > 0) {
            for ( let i = 0; i < tray.length; i++ ) {
                tray[i].waktuOven += timerReport
                
                if ( tray[i].waktuOven > (tray[i].waktuMatang/2) && tray[i].waktuOven < tray[i].waktuMatang ) {
                    tray[i].status = 'hampir matang'
                } else if ( tray[i].waktuOven == tray[i].waktuMatang ) {
                    tray[i].status = 'matang'
                } else if ( tray[i].waktuOven > tray[i].waktuMatang ) {
                    tray[i].status = 'hangus'
                }

                console.log(`${tray[i].name}, menit ke ${tray[i].waktuOven} : ${tray[i].status}`)

            }

            time -= timerReport
        }

    }
}

module.exports = Oven