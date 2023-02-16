import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const myInput     = document.querySelector("input#datetime-picker");

const dataDays    = document.querySelector('.value[data-days]');
const dataHours   = document.querySelector('.value[data-hours]');
const dataMinutes = document.querySelector('.value[data-minutes]');
const dataSeconds = document.querySelector('.value[data-seconds]');

const startButton = document.querySelector('button[data-start]');
startButton.setAttribute('disabled', '')

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

        const selectedTime = new Date(selectedDates).getTime();  // выбранные дата
        const currentTime = Date.now();                          // текущая дата
        const deltaTime = selectedTime - currentTime;            // разница

        if (deltaTime < 0) {
            // если дата выбрана меньше текущей
            // alert('Please choose a date in the future');
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            // активируем кнопку
            startButton.removeAttribute('disabled', '');
        }

        startButton.addEventListener('click', startTimer);

        function startTimer() {
            const runTime = new Timer();
            runTime.start(selectedTime);
        };
    },
};

flatpickr(myInput, options);

class Timer {
    constructor() {
    }
    
    start(selectedTime) {
        const cycle = setInterval(() => {
            const currentTime = Date.now();                 // текущая дата
            const deltaTime = selectedTime - currentTime;   // разница
            const timeConvert = this.convertMs(deltaTime);  // объект со временем после конвертации 

            if (deltaTime < 0) {
                clearInterval(cycle);                       // если разница меньше - останавливаем цикл
            } else {
                updateDate(timeConvert);                    // обновляем дисплей
            }
        }, 1000);
    }

    convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour   = minute * 60;
        const day    = hour * 24;
        
        const days    = Math.floor(ms / day);
        const hours   = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
        
        return { days, hours, minutes, seconds };
    }
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function updateDate({ days, hours, minutes, seconds }) {
    dataDays.textContent    = addLeadingZero(days);
    dataHours.textContent   = addLeadingZero(hours);
    dataMinutes.textContent = addLeadingZero(minutes);
    dataSeconds.textContent = addLeadingZero(seconds);
};