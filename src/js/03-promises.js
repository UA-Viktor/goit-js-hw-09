import Notiflix from 'notiflix';
Notiflix.Notify.init({ width: '350px', useIcon: false });


const refs = {
  delayFirst:  document.querySelector('input[name=delay]'),
  delayStep:   document.querySelector('input[name=step]'),
  delayAmount: document.querySelector('input[name=amount]'),
  createBtn:   document.querySelector('button'),
}

refs.delayFirst.addEventListener('input', delayFirstUpdate);
refs.delayStep.addEventListener('input', delayStepUpdate);
refs.delayAmount.addEventListener('input', delayAmountUpdate);
refs.createBtn.addEventListener('click', onStart);

function delayFirstUpdate(e) {
  const delayFirstData = e.target.value;
  console.log(delayFirstData);
}

function delayStepUpdate(e) {
  const delayStepData = e.target.value;
  console.log(delayStepData);
}

function delayAmountUpdate(e) {
  const delayAmountData = e.target.value;
  console.log(delayAmountData);
}

function onStart() {
  

  
}





function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve("Success! Value passed to resolve function");
      } else {
        reject("Error! Error passed to reject function");
      }
    }, delay);
  })
};

createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
  }); 

  createPromise(4, 3500)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
  }); 
