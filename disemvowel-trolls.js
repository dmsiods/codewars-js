// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
    return (str || "").replace(/[aeiou]/gi, "");
}


console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
console.log(disemvowel("What are you, a communist?"));



function replacer(match, p1, p2, p3, offset, string) {
    // p1 - не цифры, p2 - цифры, p3 - не буквы и не цифры
    return [p1, p2, p3].join(' - ');
}
let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
// / ([^\d]*)   (\d*)    ([^\w]*) /
console.log(newString);


let re = /яблоки/gi;
let str = 'Яблоки круглые и яблоки сочные.';
let newstr = str.replace(re, 'апельсины');
console.log(newstr); // апельсины круглые и апельсины сочные.


// Ночь перед Рождеством, Xmas - сокращение для Christmas
str = 'Twas the night before Xmas...';
newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr); // Twas the night before Christmas...


re = /([А-ЯЁа-яё]+)\s([А-ЯЁа-яё]+)/;
str = 'Джон Смит';
newstr = str.replace(re, '$2, $1');
console.log(newstr); // Смит, Джон



function replacer(match) {
    return `-${match.toLowerCase()}`;
}

re = /[A-Z]/g;
str = 'borderTopJJpOpOp';
newstr = str.replace(re, replacer);
console.log(newstr);


function f2c(x) {
    function convert(str, p1, offset, s) {
        return ((p1 - 32) * 5 / 9).toFixed(3) + 'C';
    }
    let s = String(x);
    let test = /(\d+(?:\.\d*)?)F\b/g;
    return s.replace(test, convert);
}

console.log(f2c('212.002F'))



str = 'x-xxx-xx-x-';
let retArr = [];

str.replace(/(x_*)|(-)/g, function (match, p1, p2) {
    if (p1) { retArr.push({ on: true, length: p1.length }); }
    if (p2) { retArr.push({ on: false, length: 1 }); }
});

console.log(retArr);



