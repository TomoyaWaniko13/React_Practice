// function fn(number) {
//     return number * 2;
// }
//
// const arf = number => number * 2;
//
// console.log(arf(2));
//
// const arf2 = number => ({result: number * 2});
//
// console.log(arf2(2));
//


// const array1 = [1, 2, 3, 4];
// array2 =  array1.map(e => e * 2);
// console.log(array2);

// const object = {a: 1, b: 2, c: 3};
//
// for (const objectKey in object) {
//     console.log(`${objectKey}`);
// }


// const array1 = ['a', 'b', 'c'];
//
// for (const string of array1) {
//     console.log(string);
// }

// const numbersArray = [1, 4, 9];
//
// const rootsArray = numbersArray.map((num) => {
//         return Math.sqrt(num);
//     }
// );
// console.log(rootsArray);
//
// const rootsArray2 = numbersArray.map(num => Math.sqrt(num));
// console.log(rootsArray2);


// const numbersArray = [1, 3, 10, 20];
//
// const sum = numbersArray.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })
//
// console.log(sum);

const objectsArray = [{x: 1}, {x: 2}, {x: 3}];
const sum
    = objectsArray.reduce((accumulator, currentObject) => accumulator + currentObject.x,0);
console.log(sum);
