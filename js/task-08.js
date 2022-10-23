// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formEl = document.querySelector('.login-form');
const emailInputEl = document.querySelector('.login-form');
const passwordInputformEl = document.querySelector('.login-form');

const gatherUserInfo = (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    alert('Всі поля треба заповнити!');
    return;
  }

  const userInfo = {
    email: email.value,
    password: password.value,
  };
  console.table(userInfo);
  event.currentTarget.reset();
};

formEl.addEventListener('submit', gatherUserInfo);
