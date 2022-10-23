const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const changeOutputName = () =>
  (nameOutputRef.textContent = nameInputRef.value
    ? nameInputRef.value
    : 'Anonymous');

nameInputRef.addEventListener('input', changeOutputName);
