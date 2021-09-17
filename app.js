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

// let numberOffNews = +prompt('Siz qancha yangilik kordingiz?');
// const personalNewsDB = {
//     count: numberOffNews,
//     news: {},
//     actors: '',
//     genres: [],
//     privat: false,
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Oxirgi korgan yangiliklaringiz'),
//         b = prompt('Una nechiga baxolagan bolar edingiz');

//     if (a != null && b != null && a != '' && b != '' && b != '' && a.length < 50) {
//         personalNewsDB.news[a] = b;
//         console.log('tayyor');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalNewsDB.count < 10) {
//     console.log('juda oz sonli yangiliklar oqilibdi');
// } else if (personalNewsDB.count > 10 && personalNewsDB.count < 30) {
//     console.log('siz klassik tomoshabinsiz');
// } else if (personalNewsDB.count >= 30) {
//     console.log('siz yangiliklar ishqibozisiz');
// } else {
//     console.log('xato yuz berdi');
// }

// console.log(personalNewsDB);

// news('axe')
// function news(axe) {
//     console.log(axe)
// }

// const fun = function() {
//     console.log(10)
// }
// fun()

// const arrNumber = (a, b) => a + b;
// const plus = arrNumber(10, 5);
// console.log(plus);

// const book = {
//     name: 'Atomic Habits',
//     author: 'James Clear',
//     year: 2018,
//   }
//   console.log(book["author"])

// function playFootbal(player, callback) {
//     console.log(`Name of player ${player}`)
//     callback()
// }

// function goals() {
//     console.log('His shot 100 goals')
// }

// playFootbal('MoSalah', goals)
// function playFootball(player, callback) {
//     console.log(`Name of player ${player}`)
//     callback()
// }

// playFootball('MoSalah', function() {
//     console.log('His shot 100 goals')
// })

// const yozuv = '12px';
// console.log(parseInt(yozuv));

// let numberOfNews;

// function startProject() {
//     numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");

//     while (numberOfNews == '' || numberOfNews == null || isNaN(numberOfNews)) {
//         numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");
//     }
// }
// startProject();

// const personalNewsDB = {
//     count: numberOfNews,
//     news: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// function rememberNews() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Oxirgi ko'rgan yangiliklarizdan biri?"),
//             b = prompt("Unga qancha baho bergan bo'lar edingiz?");

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalNewsDB.news[a] = b;
//             console.log('tayyor');
//         } else {
//             console.log('Error');
//             i--;
//         }
//     }
// }

// rememberNews();

// function showPesonalLevel() {
//     if (personalNewsDB.count < 10) {
//         console.log("Juda oz sonli yangiliklar o'qilibdi");
//     } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
//         console.log('Siz klassik tomoshabinsiz');
//     } else if (personalNewsDB.count >= 30) {
//         console.log('Siz yangilklar ishqibozisiz');
//     } else {
//         console.log('Xato yuz berdi');
//     }
// }
// showPesonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalNewsDB);
//     }
// }
// showMyDB(personalNewsDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalNewsDB.genres[i - 1] = prompt(`Sizning sevimli janringiz nomeri ${i}`);
//     }
// }
// writeYourGenres();

let numberOfNews;
function startProject() {
    numberOfNews = +prompt('Siz qancha yangilik kordingiz?');
    while (numberOfNews == '' || numberOfNews == null || isNaN(numberOfNews)) {
        numberOfNews = +prompt('Siz qancha yangilik kordingiz');
    }
}
startProject();
const personalNewsDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    gengres: [],
    privat: false,
};

function rememberNews() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Oxirigi korgan yangliklaringizdan biri?'),
            b = prompt('Unga qancah baho berasiz?');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalNewsDB.news[a] = b;
            console.log('Tayyor');
            i--;
        }
    }
}
rememberNews();
function showPersonalLevel() {
    if (personalNewsDB.count < 10) {
        console.log('Juda oz sonli yangliklar oqilibdi');
    } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
        console.log('Siz klassik tomoshabinsiz');
    } else if (personalNewsDB.count >= 30) {
        console.log('Siz yangiliklar ishqibozisiz');
    } else {
        console.log('Xato yuz berdi');
    }
}
showPersonalLevel();
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalNewsDB);
    }
}
showMyDB(personalNewsDB.privat);
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalNewsDB.gengres[i - 1] = prompt(`Sizning sevimli janringiz nomeri ${i}`);
    }
}
writeYourGenres();
