$(document).ready(function () {
    Clock.setTime();
    setInterval(function () { Clock.setTime(); }, 5000);
});