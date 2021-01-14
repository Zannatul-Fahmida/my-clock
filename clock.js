const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const progress = document.getElementById('progress');

function showCurrentTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;


    progress.style.width = (sec / 60) * 100 + '%';
}

const currentDate = document.getElementById('currentDate');
const currentMonth = document.getElementById('currentMonth');
const currentYear = document.getElementById('currentYear');

function showCurrentDate() {
    let showDate = new Date();
    let dt = showDate.getDate();
    let mn = showDate.getMonth() + 1;
    let yr = showDate.getFullYear();

    currentDate.textContent = dt;
    currentMonth.textContent = mn;
    currentYear.textContent = yr;
}
setInterval(showCurrentDate);
setInterval(showCurrentTime, 1000);