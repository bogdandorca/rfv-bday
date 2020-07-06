(function() {
    const updateElements = () => {
        const {days, hours, minutes, seconds} = getRemainingTime();

        const daysEl = document.getElementById('days-time');
        const hoursEl = document.getElementById('hours-time');
        const minutesEl = document.getElementById('minutes-time');
        const secondsEl = document.getElementById('seconds-time');

        daysEl.innerHTML = pad(days);
        hoursEl.innerHTML = pad(hours);
        minutesEl.innerHTML = pad(minutes);
        secondsEl.innerHTML = pad(seconds);
    }

    const pad = time => {
        if (time < 10) {
            return '0' + time;
        }

        return time;
    }

    const getRemainingTime = () => {
        const targetDate = '2020-07-18';

        const total = Date.parse(targetDate) - Date.parse(new Date());
        const seconds = Math.floor( (total/1000) % 60 );
        const minutes = Math.floor( (total/1000/60) % 60 );
        const hours = Math.floor( (total/(1000*60*60)) % 24 ) - 3;
        const days = Math.floor( total/(1000*60*60*24) );

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    updateElements();

    setInterval(() => {
        updateElements();
    }, 1000);
})();