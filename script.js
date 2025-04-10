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
  display.value = display.value.slice(0, -1); // slice function ng js
}

// ung eval js code na talaga na nag cacalculate nung nasa textbox
function calculate() {
  try {
    display.value = eval(display.value); // sabi ng eval aun na ung sa js code na nag cocompute tas ung display value ung nasa text box
  } catch (e) {
    display.value = "Error"; // If an error occurs, display "Error" on the screen
  }
}

// function ng pang clear on any button press when error is shown

function clearError(value) {
  if (display.value === "Error") {
    display.value = ""; // clear the display
  }
  display.value += value; // lalagay ung new button press
}
