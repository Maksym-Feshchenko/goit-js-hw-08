import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const feedbackKey = 'feedback-form-state';

const saveStateToLocalStorage = throttle(() => {
const state = {
email: emailInput.value,
message: messageInput.value,
};
localStorage.setItem(feedbackKey, JSON.stringify(state));
}, 500);

if (localStorage.getItem(feedbackKey)) {
const savedState = JSON.parse(localStorage.getItem(feedbackKey));
emailInput.value = savedState.email;
messageInput.value = savedState.message;
}

form.addEventListener('input', saveStateToLocalStorage);

form.addEventListener('submit', (event) => {
event.preventDefault();
const state = {
email: emailInput.value,
message: messageInput.value,
};
localStorage.setItem(feedbackKey, JSON.stringify(state));
console.log(state);
emailInput.value = '';
messageInput.value = '';
localStorage.removeItem(feedbackKey);
});