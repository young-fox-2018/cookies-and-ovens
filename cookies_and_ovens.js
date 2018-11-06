// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class Cookies {
    constructor(namaKue, duration) {
        this.namaKue = namaKue
        this.duration = duration
    }
}

class Microwave{
    constructor(name) {
        this.name = name
    }

    cook(){
        console.log(`Progress ${this.name}`);
        
        for (let i = 0; i < this.name.duration+10; i+=5) {
            if (i < 20) {
                console.log(
                    `${this.name.namaKue}, menit ke ${i} : Mentah`
                );
            } else if (i == 20) {
                console.log(
                    `${this.name.namaKue}, menit ke ${i} : Mateng`
                );
            } else if (i == 15) {
                console.log(
                    `${this.name.namaKue}, menit ke ${i} : Hampir Mateng`
                );
            } else if (i > 20) {
                console.log(
                    `${this.name.namaKue}, menit ke ${i} : Goshongg`
                );
            }
        }
    }
}

let kueCoklat = new Cookies("kue coklat", 20)
let kueKacang = new Cookies("kue kacang", 30)
let kueKeju = new Cookies("kue keju", 40)

let make_kueCoklat = new Microwave(kueCoklat)
let make_kueKacang = new Microwave(kueKacang)
let make_kueKeju = new Microwave(kueKeju)

make_kueCoklat.cook()
make_kueKacang.cook()
make_kueKeju.cook()



