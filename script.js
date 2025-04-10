// Get the value dun sa box
const display = document.getElementById("display");

// adds kung ano ang pinindot na button sa display
function append(value) {
  display.value += value; // pakita yung value sa display
}

// clear display / empty button
function clearDisplay() {
  display.value = "";
}

// Del function to remove last number
function backspace() {
  display.value = display.value.slice(0, -1); // slice function
}

// Function to evaluate the mathematical expression entered in the display
function calculate() {
  try {
    display.value = eval(display.value); // Use JavaScript's eval() to evaluate the expression
  } catch (e) {
    display.value = "Error"; // If an error occurs, display "Error" on the screen
  }
}
