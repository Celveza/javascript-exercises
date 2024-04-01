const removeFromArray = function(array, ...para) {
    return array.filter(item => !para.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
