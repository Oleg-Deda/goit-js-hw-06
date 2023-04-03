const validatedInputRef = document.querySelector('#validation-input');

const validatedInputBySymbols = () => {
  if (validatedInputRef.value.length != validatedInputRef.dataset.length) {
    validatedInputRef.classList.remove('valid');
    validatedInputRef.classList.add('invalid');
  } else {
    validatedInputRef.classList.remove('invalid');
    validatedInputRef.classList.add('valid');
  }
};

validatedInputRef.addEventListener('blur', validatedInputBySymbols);
