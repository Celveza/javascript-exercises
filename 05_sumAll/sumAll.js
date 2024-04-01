const sumAll = function(min, max) {
    let sum = 0;
    if (min > max) {
        let reverse = min;
        min = max;
        max = reverse;
    }
    if (((min || max) < 0) || !Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR"
    }
    for (let i = min; i <= max; ++i) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
