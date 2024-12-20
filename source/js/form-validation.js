const nameInput = document.querySelector('#name');
const formItemName = document.querySelector('.form__item--name');
const formItemPhone = document.querySelector('.form__item--phone');
const phoneInput = document.querySelector('#phone');
const form = document.querySelector('.form__sending');
const formButton = document.querySelector('.form__sending .form__button');

function validateName() {
  const namePattern = /^[a-zA-Zа-яА-ЯёЁ]+$/;
  if (!namePattern.test(nameInput.value)) {
    nameInput.classList.add('error');
    insertTextNotification(formItemName, 'Пожалуйста, введите только буквы');
    return false;
  }
  nameInput.classList.remove('error');
  return true;
}

function validatePhone() {
  const phonePattern = /^\+\d+$/;
  if (!phonePattern.test(phoneInput.value)) {
    phoneInput.classList.add('error');
    insertTextNotification(formItemPhone, 'Пожалуйста, введите в формате +78001234567 в поле Телефон');
    return false;
  }
  phoneInput.classList.remove('error');
  return true;
}

function insertTextNotification(el, text) {
  const existingNotification = el.querySelector('p');
  if (existingNotification) {
    existingNotification.remove();
  }

  const notitficationElement = document.createElement('p');
  notitficationElement.textContent = text;
  el.appendChild(notitficationElement);
}

export function validateForm() {

  formButton.addEventListener('click', (e) => {
    e.preventDefault();
    const isValid = validateName() && validatePhone();
    if (isValid) {
      form.submit();
    }
  });
}
