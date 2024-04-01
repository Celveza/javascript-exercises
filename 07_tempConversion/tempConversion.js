const convertToCelsius = function(fahr) {
  let celsius = (fahr - 32) * (5/9);
  if (celsius === 0){
    return celsius;
  }

  else {
    return parseFloat(celsius.toFixed(1));
  }
};

const convertToFahrenheit = function(celsius) {
  let fahr = celsius * (9/5) + 32;

  if (fahr === 0) {
    return fahr;
  }
  else {
    return parseFloat(fahr.toFixed(1));
  }
};

console.log(convertToCelsius(100))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
