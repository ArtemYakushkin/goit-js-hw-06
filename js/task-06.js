const inputEl = document.querySelector('#validation-input');
const lengthInput = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onChangeColor);

function onChangeColor() {
    if (inputEl.value.length == lengthInput) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}