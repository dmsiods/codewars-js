// Given a string made of digits[0 - 9], return a string where each digit is repeated a number of times equals to its value. 


function explode(s) {
    let result = "";

    for (let sym of s) {
        result += sym.repeat(Number(sym));
    }

    return result;
    // return s.split("").map((e) => e.repeat(+e)).join("");
}


const tests = [
    ["312", "333122"],
    ["102269", "12222666666999999999"],
    ["0", ""],
    ["000", ""],
    ["123", "122333"]
];

for (const [input, expected] of tests) {
    // explode(JSON.stringify(input), () => assert.strictEqual(explode(input), expected));
    console.log(explode(input));
}

