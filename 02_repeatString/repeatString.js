const repeatString = function( word, repeat ) {
    let repeated = "";
    for (let i = 0; i < repeat; ++i) {
       repeated += word;
    }
    if (repeat < 0){
        return "ERROR";
    }
    return repeated;
};
console.log(repeatString("hey",0))
// Do not edit below this line
module.exports = repeatString;
