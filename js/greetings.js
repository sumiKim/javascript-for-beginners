import { onGeoOk, onGeoError } from './weather.js';

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

const greeting = document.querySelector('#greeting');
const homeView = document.querySelector('#home-view');
const quote = document.querySelector('#quote');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `👋🏻 Hello ${username} 😁`;
}

function changeView() {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  homeView.classList.remove(HIDDEN_CLASSNAME);
  quote.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  changeView();
  paintGreetings(savedUsername);
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}
