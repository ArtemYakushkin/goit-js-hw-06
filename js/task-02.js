const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const elements = ingredients.map(options => {
  const liEl = document.createElement('li');
  liEl.className = 'item';
  liEl.textContent = options;
  return liEl;
});

console.log(elements);

ulEl.append(...elements);





