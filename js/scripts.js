//business logic
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
function remainder(number1, number2) {
  return number1 % number2;
}
function square(number) {
  return number * number;
}
function celsiusToFahrenheit(number) {
  return (number * 9) / 5 + 32 + " F";
}
function fahrenheitToCelsius(number) {
  return ((number - 32) * 5) / 9 + " C";
}

//ui logic
$(document).ready(function () {
  $("#numEntry").submit(function (e) {
    e.preventDefault();
    const number1 = parseInt($("#num1").val());
    const number2 = parseInt($("#num2").val());
    const operator = $(document.activeElement)[0].id;

    if(operator === "add") {
      const result = add(number1, number2);
      $("#result").text(result);
      $("#display").show();
    } else if (operator === "sub") {
      const result = subtract(number1, number2);
      $("#result").text(result);
      $("#display").show();
    } else if (operator === 'mult') {
      const result = multiply(number1, number2);
      $("#result").text(result);
      $("#display").show();
    } else {
      const result = divide(number1, number2);
      $("#result").text(result);
      $("#display").show();
    }

    
  });
});
