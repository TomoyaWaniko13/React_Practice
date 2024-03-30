function fn(number) {
    return number * 2;
}

const arf = (number) => number * 2;

console.log(arf(2));

const arf2 = number => ({result: number * 2});

console.log(arf2(2));