const convertToCelsius = function(degrees) {
  const result = (degrees - 32) * 5 / 9;

  if (Number.isInteger(result)) {
    return result;
  }

  return Number(result.toFixed(1));
};

const convertToFahrenheit = function(degrees) {
  const result = (degrees * 9 / 5) + 32;

  if (Number.isInteger(result)) {
    return result;
  }

  return Number(result.toFixed(1));
};

console.log(typeof convertToCelsius(-100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
