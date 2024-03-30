const array = [10, 20, 30, 40];
const newArray = [];

// for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i] * 2);
// }
// console.log(newArray);

const newArray2 = array.map(n => n * 2);
console.log(newArray2);

const newArray3 = array.filter(n => n > 10);
console.log(newArray3);