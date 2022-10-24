// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const decrementButtonEl = document.querySelector(
  'button[data-action="decrement"]'
);
const valueEl = document.querySelector('#value');
const incrementButtonEl = document.querySelector(
  'button[data-action="increment"]'
);
const decreaseValue = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const increaseValue = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
decrementButtonEl.addEventListener('click', decreaseValue);
incrementButtonEl.addEventListener('click', increaseValue);
