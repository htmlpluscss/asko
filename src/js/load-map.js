CF.loadMap = function (callback) {
    if (typeof ymaps === 'undefined') {
        var script = document.createElement('script');

        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';

        script.onload = function () {
            ymaps.ready(callback);
        };

        document.head.appendChild(script);
    } else {
        ymaps.ready(callback);
    }
};