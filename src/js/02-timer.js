import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const rafs = {
  input: document.querySelector('#datetime-picker'),
  dtnStartTimer: document.querySelector('[data-start]'),
  dayTextContent: document.querySelector('[data-days]'),
  hoursTextContent: document.querySelector('[data-hours]'),
  minutesTextContent: document.querySelector('[data-minutes]'),
  secondsTextContent: document.querySelector('[data-seconds]'),
};

rafs.dtnStartTimer.disabled = true;
let ms = 0;
let IntervId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    clearInterval(IntervId);
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      rafs.dtnStartTimer.disabled = false;
      ms = selectedDates[0].getTime() - new Date().getTime();

      rafs.dtnStartTimer.addEventListener('click', event => {
        IntervId = setInterval(() => {
          ms = ms - 1000;
          if (ms > 0) {
            rafs.dayTextContent.textContent = convertMs(ms)
              .days.toString()
              .padStart(2, '0');

            rafs.hoursTextContent.textContent = convertMs(ms)
              .hours.toString()
              .padStart(2, '0');

            rafs.minutesTextContent.textContent = convertMs(ms)
              .minutes.toString()
              .padStart(2, '0');

            rafs.secondsTextContent.textContent = convertMs(ms)
              .seconds.toString()
              .padStart(2, '0');

            rafs.dtnStartTimer.disabled = true;
          }
          if (ms < 1000) {
            Notiflix.Notify.success('Countdown finished');
            clearInterval(IntervId);
          }
          console.log(`работает отрецательный счетчик `); //Удолить оставил мэнтору для проверки
        }, 1000);
      });
    }
  },
};

flatpickr(rafs.input, options);

// rafs.dtnStartTimer.addEventListener("click", () => {

// })
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function timerSecTest() {
  setInterval(() => {
    const correntTime = new Date();
    console.log(correntTime);
  }, 1000);
}
