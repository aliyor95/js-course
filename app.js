'use strict';
// let numberOffNews = +prompt('Siz qancha yangilik kordingiz?');
// const personalNewsDB = {
//     count: numberOffNews,
//     news: {},
//     actors: '',
//     genres: [],
//     privat: false,
// };

// let newsName = prompt('Oxirgi korgan yangiliklaringiz'),
//     ball = prompt('Una nechiga baxolagan bolar edingiz');
// personalNewsDB.news[newsName] = ball;
// console.log(personalNewsDB);

// const age = 25;
// if (age < 5) {
//     console.log('norm')
// } else if (age == 25) {
//     console.log('teng')
// } else {
//     console.log('katta')
// }
// age < 5 ? console.log('norm') : age == 24 ? console.log('teng') : console.log('katta');
// switch (age) {
//     case 20:
//         console.log('norm')
//         break
//     case 25:
//         console.log('teng')
//         break
//     default:
//     console.log('default')
// }

// let a = 5
// while (a <= 10) {
//     console.log(a)
//     a++
// }

// do {
//     console.log(a)
//     a++
// } while (
//     a <= 10
// )

// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//         // break
//         continue
//     }
//     console.log(i)
// }


/* Darsga topshiriq:
1) Tsiklni yordamida foydalanuvchiga yangiliklar haqidagi savollarni avtomatlashtirish
2) Foydalanuvchi javobni bo'sh satr sifatida qoldirmasligi uchun shunday qiling,
javobni bekor qilish yoki 50 belgidan uzunroq yangilik nomini kiritish. Agar bu sodir bo'lsa -
foydalanuvchini yana savollarga qaytaring. (Har qanday satrga quyidagicha kirish mumkin
str.length - va uzunligini oling)
3) Shartlardan foydalanib, personalMovieDB.count-ni tekshiring, agar u 10 dan kam bo'lsa - xabarni ko'rsating
"Juda oz sonli yangiliklar o'qilibdi", agar 10 dan 30 gacha bo'lsa - "Siz klassik tomoshabinsiz", agar ko'proq bo'lsa -
- Siz yangilklar ishqibozisiz. Va agar u biron bir variantga mos kelmasa - "Xato yuz berdi"
4) Amaliy mashg'ulot va tsiklni yana ikkita usulda qayta yozing  */

let numberOffNews = +prompt('Siz qancha yangilik kordingiz?');
const personalNewsDB = {
    count: numberOffNews,
    news: {},
    actors: '',
    genres: [],
    privat: false,
};

let newsName = prompt('Oxirgi korgan yangiliklaringiz'),
    ball = prompt('Una nechiga baxolagan bolar edingiz');
personalNewsDB.news[newsName] = ball;
console.log(personalNewsDB);