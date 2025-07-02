function calculate(operator) {
  const num1 = parseFloat(document.getElementById("input1").value);
  const num2 = parseFloat(document.getElementById("input2").value);
  const resultDisplay = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultDisplay.textContent = "Please enter valid numbers.";
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        resultDisplay.textContent = "Cannot divide by zero.";
        return;
      }
      result = num1 / num2;
      break;
    default:
      resultDisplay.textContent = "Unknown operation.";
      return;
  }

  resultDisplay.textContent = `Result: ${result}`;
}
