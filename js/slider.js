function countdown(dateEnd) {
    let timer, days, hours, minutes, seconds;

    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();

    if (isNaN(dateEnd)) {
        return;
    }

    timer = setInterval(calculate, 1000);

    function calculate() {
        let dateStart = new Date();
        dateStart = new Date(dateStart.getUTCFullYear(),
            dateStart.getUTCMonth(),
            dateStart.getUTCDate(),
            dateStart.getUTCHours(),
            dateStart.getUTCMinutes(),
            dateStart.getUTCSeconds());
        let timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000);

        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minuetsElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");

        if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);
            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);
            seconds = parseInt(timeRemaining);

            daysElement.innerHTML = parseInt(days, 10);
            hoursElement.innerHTML = ("0" + hours).slice(-2);
            minuetsElement.innerHTML = ("0" + minutes).slice(-2);
            secondsElement.innerHTML = ("0" + seconds).slice(-2);
        } else {
            return;
        }
    }
}

countdown('09/22/2022 02:00:00 AM');

new Swiper('.our-partners__slider', {
    loop: true,
    slidesPerView: 7,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

new Swiper('.road-map-content__progress-bar', {
    slidesPerView: 5,
    grabCursor: true,
    loop: false,
    direction: 'horizontal',
    watchSlidesVisibility: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.road-map-content__btn._right',
        prevEl: '.road-map-content__btn._left',
    },
});

new Swiper('.team-content', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.team-content__btn._right',
        prevEl: '.team-content__btn._left',
    },
});

new Swiper('.news__content', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.news__btn._right',
        prevEl: '.news__btn._left',
    },
});

new Swiper('.in-press__content', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.in-press__btn._right',
        prevEl: '.in-press__btn._left',
    },
});