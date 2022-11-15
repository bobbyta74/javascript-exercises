const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	for (let i of array) {
    sum += i;
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for (let i of array) {
    product *= i;
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let product = 1;
	for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
