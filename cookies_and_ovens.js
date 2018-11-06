// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
// Your code here

class Cookies {
    constructor(namaKue, duration) {
        this.namaKue = namaKue
        this.duration = duration
    }
}

class Microwave {
    constructor(name) {
        this.name = name
    }

    static cook(cookie, cookDuration) {
        console.log(`Progress ${this.name}`);
        for (let j = 0; j < cookie.length; j++) {
            for (let i = 0; i < cookDuration; i += 5) {
                if (i < cookie[j].duration-10) {
                    console.log(
                        `${cookie[j].namaKue}, menit ke ${i} : Mentah`
                    );
                } else if (i == cookie[j].duration) {
                    console.log(
                        `${cookie[j].namaKue}, menit ke ${i} : Mateng`
                    );
                } else if (i == cookie[j].duration-5) {
                    console.log(
                        `${cookie[j].namaKue}, menit ke ${i} : Hampir Mateng`
                    );
                } else if (i > cookie[j].duration) {
                    console.log(
                        `${cookie[j].namaKue}, menit ke ${i} : Goshongg`
                    );
                }
            }
        }
    }
}

let kueCoklat = new Cookies("kue coklat", 20)
let kueKacang = new Cookies("kue kacang", 30)
let kueKeju = new Cookies("kue keju", 40)
let arrKue = [kueCoklat, kueKacang, kueKeju]
Microwave.cook(arrKue, 30)






