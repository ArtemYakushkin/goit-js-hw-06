let counterValue = 0;
const valueEl = document.querySelector('#value');
const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');

incrBtn.addEventListener('click', onIncrNumber);
decrBtn.addEventListener('click', onDecrNumber);

function onIncrNumber() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

function onDecrNumber() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}