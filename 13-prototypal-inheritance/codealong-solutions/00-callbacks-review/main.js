function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function process (num1, num2, callback) {
  var result = callback(num1,num2);
  return result;
}
