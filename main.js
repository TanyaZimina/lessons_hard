//через if
let ruWeekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let enWeekDays = ['mon', 'tu', 'we', 'th', 'fr', 'sat', 'sun'];


let ifVariant = function(lang) {
    if (lang === "ru") return ruWeekDays;
    if (lang === "en") return enWeekDays;
};


console.log(ifVariant('ru'));
console.log(ifVariant('en'));

//через switch-case 

let swVariant = function(lang) {
    switch(lang){
        case 'ru': return ruWeekDays;
        case 'en': return enWeekDays;
    }
}

console.log(swVariant('ru'));
console.log(swVariant('en'));

//через многомерный массив без ифов и switch.

let arrVariant = function(lang){
    let array = {
        'ru': ruWeekDays,
        'en': enWeekDays
    }
    return array[lang];
}
console.log(arrVariant('ru'));
console.log(arrVariant('en'));
