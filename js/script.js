"use strict";

//const answer = [];
//console.log(typeof(answer));

//const gg = 'привет';

//console.log(`https://someurl.com/${gg}/5`);

/* const isCdeck = true,
    ischeck = false; */

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: true
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних посмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    } 
    
}
 
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('мало посмотрели');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('молодец');
    } else if (personalMovieDB.count >= 30) {
        console.log('кросс');
    } else {
        console.log('ошибка');
    }
}

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.privat);


function writeYourGenres () {
   for (let i = 1; i < 4; i++) {
    //    const genre = prompt(`ваш любимый жанр ${i}`);
    //    personalMovieDB.geners[i - 1] = genre;

        personalMovieDB.geners[i - 1] = prompt(`ваш любимый жанр ${i}`);
   }
}

writeYourGenres();

console.log(personalMovieDB);

/* let i = 0; */

/* do {
    const a = prompt('Один из последних посмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    } else {
    i--;
    }   
}while (let i = 0; i < 2; i++); */

/* while (let i = 0; i < 2; i++) */

/* while (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних посмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    } else {
        i--;
    } 
} */



/* console.log(personalMovieDB); */

/* personalMovieDB.movies[isMovieOne] = isNumberOne; */


    /* personalMovieDB.movies[isMovieOne] = isNumberOne;
    personalMovieDB.movies[isMovieTwo] = isNumberTwo;

console.log(personalMovieDB);

console.log(!3 && 0);

console.log( NaN || 2 || undefined );

console.log( 5 === 5 && 3 > 1 || 5);

for (let i = 5; i < 11; i++) {
    console.log(i);
}

for (let i = 20; i>9; i--) {
    if (i === 12) {
        break;
    }
    console.log(i);
}

 
let i = 2;
while (i <= 16) {
    i++;
    if ( i % 2 === 0) {
        continue;
    }
    console.log(i);
} 


for (let i = 2; i <11; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let num = 5;
    let gg = [num];
    for (let i = 6; i < 11; i++) {
        one++;
        gg[one];
        console.log(gg);
    }
     */

    // function sayHello(Антон) {
    //     return console.log(Антон);
    // }

    // sayHello("Привет Антон!");

    

    // function returnNeighboringNumbers(num) {
    //     const i = [num - 1, num, num + 1];
    //     console.log(i);
    //     return;
      
    // }

    // returnNeighboringNumbers(5);

    