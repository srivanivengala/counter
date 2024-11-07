// Get references to the counter and button elements
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const resetButton = document.getElementById('resetButton');


// Initialize the counter value
let count = 0;

// Add click event listener to the increment button
incrementButton.addEventListener('click', function() {
  count++;  // Increment the counter
  counterElement.textContent = count;  // Update the displayed count
  counterElement.style.color = 'aqua';  // Ensure counter text is black
});

// Add click event listener to the decrement button
decrementButton.addEventListener('click', function() {
  count--;  // Decrement the counter
  counterElement.textContent = count;  // Update the displayed count
  counterElement.style.color = 'aqua';  // Ensure counter text is black
});

resetButton.addEventListener('click', function() {
  count = 0;  // Reset the counter to 0
  counterElement.textContent = count;  // Update the displayed count
  counterElement.style.color = 'aqua';  // Ensure counter text is black
});