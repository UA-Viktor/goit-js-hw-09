function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  body: document.querySelector("body"),
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

refs.start.addEventListener('click', start);
refs.stop.addEventListener('click', stop);

let intervalId;
refs.stop.setAttribute('disabled', '');

function start() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  refs.start.setAttribute('disabled', '');
  refs.stop.removeAttribute('disabled', '');
};

function stop() {
  clearInterval(intervalId);
  refs.stop.setAttribute('disabled', '');
  refs.start.removeAttribute('disabled', '');
};
