// 三項演算子（ ? : ）

const a = true;
let resultA;

if (a) {
    resultA = "true";
} else {
    resultA = "false";
}
console.log(resultA);


function getResult1() {
    return a === true ? 'true' : 'false';
}

console.log(getResult1());

function getResult2() {
    return a ? 'true' : 'false';
}

console.log(getResult2());

const b = false;
let resultB = b ? 10 : -10;
console.log(resultB);

f