const fibonacci = function(n) {
    if (n < 1) {
        return "OOPS";
    }
    let fibonacci = [1, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
    }
    return fibonacci[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
