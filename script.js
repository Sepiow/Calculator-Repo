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
  if (display.value === "88224646") {
    display.value = "Konami Code"; // clear the display
  } else {
    try {
      display.value = eval(display.value); // sabi ng eval aun na ung sa js code na nag cocompute tas ung display value ung nasa text box
    } catch (e) {
      display.value = "Error"; // If an error occurs, display "Error" on the screen
    }
  }
}

function clearError(value) {
  if (display.value === "789987") {
    display.value = "Secret Code"; // clear the display
  }
}
