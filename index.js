const inputs = document.querySelectorAll('input');
const errorMsg = document.querySelectorAll('span.error');

inputs.forEach((input) =>
  input.addEventListener('input', function (event) {
    validateInput(event, input);
  })
);

function validateInput(event, input) {
  let index = Array.from(inputs).indexOf(input);
  if (input.validity.valid) {
    errorMsg[index].textContent = '';
    errorMsg[index].className = 'error';
  } else {
    showError(input, index);
  }
}

function showError(input, index) {
  if (input.validity.valueMissing) {
    errorMsg[index].textContent = `${input.name} is missing.`;
  } else if (input.validity.typeMismatch) {
    errorMsg[index].textContent = 'Entered value need to be a valid email';
  } else if (input.validity.tooShort) {
    errorMsg[index].textContent = `${input.name} should be at least 
    ${input.minLength} characters long, you entered ${input.value.length}`;
    //how to check the min and max error
    // hot to revalidate password
} 

/*

if (input.validity.valid) {
  console.log(Array.from(inputs).indexOf(this));
  emailError.textContent = '';
  emailError.className = 'error';
} else {
  // showError();
}

*/
