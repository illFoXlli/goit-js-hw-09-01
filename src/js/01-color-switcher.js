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

refs.btnStart.addEventListener('click', onStartClick);
refs.btnStop.addEventListener('click', onStopClick);
// refs.body.addEventListener("click", onBodyClick); // это если идти сложным путем. Ну удолять на память.
function onStartClick(event) {
  event.target.disabled = 'true';
  refs.btnStop.disabled = false;

  refs.btnStart.className =
    'btn-active btn-primary-active btn-secondary-active btn-primary-active';
  refs.btnStop.className = 'btn btn-primary btn-secondary btn-primary';
  refs.textValueColor.textContent = getRandomHexColor();

  IntervId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    refs.textValueColor.textContent = getRandomHexColor();
    console.log(`работает замена цвета `); //Удолить оставил мэнтору для проверки
  }, 1000);
}

function onStopClick(event) {
  event.target.disabled = 'true';
  refs.btnStart.disabled = false;
  clearInterval(IntervId);

  refs.btnStop.className =
    'btn-active btn-primary-active btn-secondary-active btn-primary-active';
  refs.btnStart.className = 'btn btn-primary btn-secondary btn-primary';

  console.log(`Interval with id  has stopped!`); // удолить. Оставил мэнтору для проверки
}

// НЕ УДОЛЯТЬ
// ------------------------------------------------------------
// простой способ замены disabled

//  function onStartClick(event) {
//     event.target.disabled = 'true';
//     refs.btnStop.disabled = false;
// }

// function onStopClick(event) {
//     event.target.disabled = 'true';
//     refs.btnStart.disabled = false;
// }
// ---------------------------------------------------------
// способ чуть сложнее
//
// function onBodyClick(event) {
//   if (event.target.nodeName === 'BUTTON') {
//     if (event.target.textContent === 'Start') {
//       event.target.disabled = 'true';
//       refs.btnStop.disabled = false;
//     }
//     if (event.target.textContent === 'Stop') {
//       event.target.disabled = 'true';
//       refs.btnStart.disabled = false;
//     }
//   }
// }
