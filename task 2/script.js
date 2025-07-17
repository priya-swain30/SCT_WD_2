const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

let expression = "";

// Update display
const updateDisplay = (value) => {
  display.value = value;
};

// Handle button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value !== undefined) {
      expression += value;
      updateDisplay(expression);
    }
  });
});

// Handle clear
clear.addEventListener("click", () => {
  expression = "";
  updateDisplay("");
});

// Handle equals
equals.addEventListener("click", () => {
  try {
    const result = eval(expression);
    updateDisplay(result);
    expression = result.toString();
  } catch {
    updateDisplay("Error");
    expression = "";
  }
});

// Handle keyboard input
document.addEventListener("keydown", (e) => {
  const validKeys = "0123456789.+-*/";
  if (validKeys.includes(e.key)) {
    expression += e.key;
    updateDisplay(expression);
  } else if (e.key === "Enter") {
    try {
      const result = eval(expression);
      updateDisplay(result);
      expression = result.toString();
    } catch {
      updateDisplay("Error");
      expression = "";
    }
  } else if (e.key === "Backspace") {
    expression = expression.slice(0, -1);
    updateDisplay(expression);
  } else if (e.key === "Escape") {
    expression = "";
    updateDisplay("");
  }
});