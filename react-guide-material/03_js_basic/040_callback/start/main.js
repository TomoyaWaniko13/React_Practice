function print(callbackFunction) {
    const result = callbackFunction();
    console.log(result);
}

function multiplyBy2(number) {
    return number * 2;
}

print(function () {
    return multiplyBy2(20);
});