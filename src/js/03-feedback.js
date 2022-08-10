import { throttle } from 'lodash';

const form = document.querySelector('form');
const email = form.querySelector('input');
const name = form.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(() => {
    const fieldsValue = { email: email.value, name: name.value };
    // console.log(fieldsValue);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(fieldsValue));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log({ email: email.value, name: name.value });
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

// код з конспекта
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageFields = load(LOCALSTORAGE_KEY);
if (storageFields) {
  email.value = storageFields.email;
  name.value = storageFields.name;
}
