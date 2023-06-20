// JavaScript code for form validation & Regular expression pattern for alphanumeric input & Check if the input value matches the pattern
let input = document.getElementById("inputField");
let inputRegex = /^[a-zA-Z0-9]+$/;
input.addEventListener('blur', function(){
  if(!inputRegex.test(input.value)){
    console.log('invalid Input');
  }
})

// Prevent form from submitting
const form = document.getElementById('myForm');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting normally
  console.log('Form submitted');

// Retrieve the input field value
let inputValue = input.value;

// Valid input: display confirmation and submit the form
if (inputRegex.test(inputValue)) {
  displayConfirmationMessage('Valid input');
  form.submit();
} else {
  displayErrorMessage('Invalid input');
}
});


function displayErrorMessage(message) {
const errorMessage = document.createElement('p');
errorMessage.textContent = message;
errorMessage.classList.add('error-message');
form.appendChild(errorMessage);
}

function displayConfirmationMessage(message) {
const confirmationMessage = document.createElement('p');
confirmationMessage.textContent = message;
confirmationMessage.classList.add('confirmation-message');
form.appendChild(confirmationMessage);
}


function displayErrorMessage(message) {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessage.classList.add('error-message');
  form.appendChild(errorMessage);
}

function displayConfirmationMessage(message) {
  const confirmationMessage = document.createElement('p');
  confirmationMessage.textContent = message;
  confirmationMessage.classList.add('confirmation-message');
  form.appendChild(confirmationMessage);
}
// Invalid input: display error message