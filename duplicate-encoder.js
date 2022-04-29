// "din"      => "((("
// "recede"   => "()()()"
// "Success"  => ")())())"
// "(( @"     => "))((" 


function duplicateEncode(word) {
    let m = new Map();

    for (let sym of word.toLowerCase()) {
        if (m.has(sym)) {
            m.set(sym, m.get(sym) + 1);
        } else {
            m.set(sym, 1);
        }
    }

    let result = "";
    for (let sym of word.toLowerCase()) {
        result += (m.get(sym) == 1) ? "(" : ")";
    }

    return result;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
