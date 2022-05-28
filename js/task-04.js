let valueEl = Number(document.querySelector('#value').textContent);
let counterValue = document.querySelector('#value');
const decrBtn = document.querySelector('#counter').firstElementChild;
const incrBtn = document.querySelector('#counter').lastElementChild;

decrBtn.addEventListener('click', onClickDecrBtn);
incrBtn.addEventListener('click', onClickIncrBtn);

function onClickDecrBtn() {
    valueEl += 1;
    counterValue.innerText = valueEl;
} 

function onClickIncrBtn() {
    valueEl -= 1;
    counterValue.innerText = valueEl;
} 