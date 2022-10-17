// business logic
function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
let addResult = ('The addition of your numbers equals ' + add(number1, number2) + '.');
let subtractResult = ('The subtraction of your numbers equals ' + subtract(number1, number2) + '.');
let multiplyResult = ('The multiplication of your numbers equals ' + multiply(number1, number2) + '.');
let divideResult = ('The division of your numbers equals ' + divide(number1, number2) + '.');
window.alert(addResult + subtractResult + multiplyResult + divideResult);