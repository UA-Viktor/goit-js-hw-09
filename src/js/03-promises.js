import Notiflix from 'notiflix';
Notiflix.Notify.init({ width: '350px', useIcon: false });

const KEY = 'first-step-amount';

const data = {};

const refs = {
  form:        document.querySelector('form'),
  delayFirst:  document.querySelector('input[name=delay]'),
  delayStep:   document.querySelector('input[name=step]'),
  delayAmount: document.querySelector('input[name=amount]'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onInput);

getDatalocalStorage();

function onFormSubmit(e) {
  e.preventDefault();
  onStart();
  e.target.reset();
  localStorage.removeItem(KEY);
}

function onInput(e) {
  data[e.target.name] = e.target.value;
  localStorage.setItem(KEY, JSON.stringify(data));
}

function getDatalocalStorage() {
    if (!localStorage.getItem(KEY)) {
        return;
    };

    try {
      const savedData = JSON.parse(localStorage.getItem(KEY));
      refs.delayFirst.value = savedData.delay;
      refs.delayStep.value = savedData.step;
      refs.delayAmount.value = savedData.amount;
    } catch (error) {
      Notiflix.Notify.failure(`❌ Не получилось получить данные`);
    };
};


function onStart() {

  const dataLocal = JSON.parse(localStorage.getItem(KEY));
  let delay    = Number(dataLocal.delay);
  const step   = Number(dataLocal.step);
  const amount = Number(dataLocal.amount);

  for (let position = 1; position <= amount; position++) {

      createPromise(position, delay)
        .then(onSuccess)
        .catch(onError);
    
    delay += step;
  }
};

function onSuccess({ position, delay }){
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
};

function onError({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
    
  })
};