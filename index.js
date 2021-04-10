const inputs = document.querySelectorAll('input');
const errorMsg = document.querySelectorAll('span.error');
const submitBtn = document.querySelector('button');

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

submitBtn.addEventListener('submit', function (event) {
  inputs.forEach((input) => {
    if (!input.validity.valid) {
      console.log('yay');
      event.preventDefault();
    }
  });
});

/*
  console.log(input.validity.valid);
  event.preventDefault();

  if (!input.validity.valid) {
    alert('ops');
    e.preventDefault();
  }
}); */

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
  let valid = false;

  if (input.value != document.getElementById('password').value) {
    errorMsg[index].textContent = `Password is not the same`;
    errorMsg[index].className = 'error active';
    return (valid = false);
  }
  return (valid = true);
}
