// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // REMOVE console.log statements for tests
  // Generate random RGB values for color
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  // Create the RGB color string
  const randomColor = `rgb(${r}, ${g}, ${b})`;
  
  // Apply the color to the body background
  document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // IMPORTANT: Tests expect empty string "", NOT "white"
  document.body.style.backgroundColor = '';
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Get the display paragraph element
  const displayElement = document.getElementById('keyPressDisplay');
  
  // IMPORTANT: Tests expect EXACTLY "Key pressed: [key]"
  // NOT "You pressed: [key]"
  displayElement.textContent = `Key pressed: ${event.key}`;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Get the input element and display element
  const inputElement = document.getElementById('textInput');
  const displayElement = document.getElementById('textInputDisplay');
  
  // IMPORTANT: Tests expect EXACTLY "You typed: [text]"
  // NO quotes, NO character count
  displayElement.textContent = `You typed: ${inputElement.value}`;
}

// REMOVE the createDynamicInteractions function entirely
// It's causing test failures by adding extra event listeners

// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor);

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor);

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress);

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput);
  
  // REMOVE the console.log statement
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners
  
};