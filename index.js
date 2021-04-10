const inputs = document.querySelectorAll('input');
const errorMsg = document.querySelectorAll('span.error');
const form = document.getElementsByTagName('form')[0];

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

form.addEventListener('submit', function (event) {
  if (
    !document.getElementById('mail').validity.valid ||
    !document.getElementById('country').validity.valid ||
    !document.getElementById('zip-code').validity.valid ||
    !document.getElementById('password').validity.valid ||
    !confirmPassword()
  ) {
    alert('Please fill the form');
    event.preventDefault();
  } else {
    alert('You did it');
  }
});

function showError(input, index) {
  console.log(input.id);
  if (input.validity.valueMissing) {
    errorMsg[index].textContent = `${input.name} is missing.`;
  } else if (input.validity.typeMismatch) {
    errorMsg[index].textContent = 'Entered value need to be a valid email';
  } else if (input.validity.tooShort) {
    errorMsg[index].textContent = `${input.name} should be at least 
    ${input.minLength} characters long, you entered ${input.value.length}`;
  } else if (input.validity.rangeOverflow) {
    errorMsg[index].textContent = `Please add a valid ${input.name}`;
  } else if (input.validity.rangeUnderflow) {
    errorMsg[index].textContent = `Please add a valid ${input.name}`;
  }
  errorMsg[index].className = 'error active';
}

function confirmPassword() {
  const input = document.getElementById('password2');
  let index = Array.from(inputs).indexOf(input);

  if (
    input.value != document.getElementById('password').value ||
    input.value == ''
  ) {
    errorMsg[index].textContent = `Password is not the same`;
    errorMsg[index].className = 'error active';
    return false;
  } else {
    return true;
  }
}
