const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:
//  Создаст отдельный элемент < li >
//  .Обзательно используй метод document.createElement()
//   .Добавит название ингредиента как его текстовое содержимое
//   .Добавит элементу класс item.После чего вставит все < li > за одну операцию в список ul#ingredients.

const ingredientsListEl = document.querySelector('#ingredients');
const ingredientsItemsEl = [];

for (const ingredient of ingredients) {
  const itemEl = document.createElement('li');
  itemEl.textContent = `${ingredient}`;
  itemEl.classList.add('item');
  ingredientsItemsEl.push(itemEl);
}


ingredientsListEl.append(...ingredientsItemsEl);
