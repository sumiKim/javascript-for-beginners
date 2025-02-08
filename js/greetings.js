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
  settingLogin(username);
}

function paintGreetings(username) {
  greeting.innerText = `👋🏻 Hello ${username} 😁`;
}

function settingLogin(savedUsername) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  homeView.classList.remove(HIDDEN_CLASSNAME);
  quote.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

function changeView() {
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
  } else {
    settingLogin(savedUsername);
  }
}

changeView();
