function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
  textValueColor: document.querySelector('.text-color'),
};
let IntervId = null;
let activ =
  'btn-active btn-primary-active btn-secondary-active btn-primary-active';
let notActiv = 'btn btn-primary btn-secondary btn-primary';

refs.btnStart.addEventListener('click', onStartClick);
refs.btnStop.addEventListener('click', onStopClick);

function onStartClick(event) {
  event.target.disabled = true;
  refs.btnStop.disabled = false;
  refs.btnStart.className = activ;
  refs.btnStop.className = notActiv;

  IntervId = setInterval(() => {
    let virColor = getRandomHexColor();
    refs.body.style.backgroundColor = virColor;
    refs.textValueColor.textContent = virColor;
  }, 1000);
}

function onStopClick(event) {
  event.target.disabled = true;
  refs.btnStart.disabled = false;
  clearInterval(IntervId);

  refs.btnStop.className = activ;
  refs.btnStart.className = notActiv;
}
