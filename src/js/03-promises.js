import Notiflix from 'notiflix';
const refs = {
  formBtnStartTimer: document.querySelector('button'),
  firstDelay: document.querySelector("[name='delay']"),
  delayStep: document.querySelector("[name='step']"),
  amount: document.querySelector("[name='amount']"),
};

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      shouldResolve
        ? resolve({ position, delay })
        : reject({ position, delay });
    }, delay);
  });
  return promise;
}

refs.formBtnStartTimer.addEventListener('click', event => {
  event.preventDefault();

  for (let i = 0; i < refs.amount.value; i++) {
    createPromise(i, +refs.firstDelay.value + +refs.delayStep.value * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});
