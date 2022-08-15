import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  dtnStartTimer: document.querySelector('[data-start]'),
  dayTextContent: document.querySelector('[data-days]'),
  hoursTextContent: document.querySelector('[data-hours]'),
  minutesTextContent: document.querySelector('[data-minutes]'),
  secondsTextContent: document.querySelector('[data-seconds]'),
};

refs.dtnStartTimer.disabled = true;
let ms = 0;
let IntervId = null;
const TIME = 1000;

const addLeadingZero = value => value.toString().padStart(2, '0');

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
      refs.dtnStartTimer.disabled = false;
      ms = selectedDates[0].getTime() - new Date().getTime();

      refs.dtnStartTimer.addEventListener('click', event => {
        IntervId = setInterval(() => {
          ms = ms - TIME;
          if (ms > 0) {
            refs.dayTextContent.textContent = addLeadingZero(
              convertMs(ms).days
            );
            refs.hoursTextContent.textContent = addLeadingZero(
              convertMs(ms).hours
            );
            refs.minutesTextContent.textContent = addLeadingZero(
              convertMs(ms).minutes
            );
            refs.secondsTextContent.textContent = addLeadingZero(
              convertMs(ms).seconds
            );
            refs.dtnStartTimer.disabled = true;
          }
          if (ms < TIME) {
            Notiflix.Notify.success('Countdown finished');
            clearInterval(IntervId);
          }
        }, TIME);
      });
    }
  },
};

flatpickr(refs.input, options);

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


