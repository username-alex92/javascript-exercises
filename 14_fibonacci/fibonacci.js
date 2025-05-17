const fibonacci = function(num) {
    if (num == 0) return 0;
    if (num < 0) return "OOPS";

    const fibonacciArr = [1, 1];
    for (let i = 2; i <= num; i++) {
        let first = fibonacciArr[i - 2];
        let second = fibonacciArr[i - 1];
        fibonacciArr.push(first + second);
    }

    return fibonacciArr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
