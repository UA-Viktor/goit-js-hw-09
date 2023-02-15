function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const bodyEl = document.querySelector("body");
const startEl = document.querySelector('[data-start]');
const stopEl = document.querySelector('[data-stop]');

startEl.addEventListener('click', start);
stopEl.addEventListener('click', stop);

let intervalId;
stopEl.setAttribute('disabled', '');

function start() {
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startEl.setAttribute('disabled', '');
  stopEl.removeAttribute('disabled', '');
};

function stop() {
  clearInterval(intervalId);
  stopEl.setAttribute('disabled', '');
  startEl.removeAttribute('disabled', '');
};
