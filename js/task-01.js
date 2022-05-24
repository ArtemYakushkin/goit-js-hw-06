const ulEl = document.querySelector('ul#categories');
const numberOfCategories = ulEl.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const liEl = ulEl.children;

for (let i = 0; i < liEl.length; i++) {
  const childrenOfLi = liEl[i].children;
  const textContent = childrenOfLi[0].textContent;
  console.log("Category: ", textContent);
  const countOfChild = childrenOfLi[1].children.length;
  console.log("Elements: ", countOfChild);
}