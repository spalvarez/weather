var weather;
(function (weather_1) {
    var getWeather = (function () {
        function getWeather() {
        }
        getWeather.prototype.getCurrentWeatherByLatLong = function (lat, lon) {
            var weather;
            var urlLoc = 'api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon;
            $.getJSON(urlLoc, parseWeatherData);
            return weather;
        };
        getWeather.prototype.getCurrentWeatherByZipCode = function (zipCode) {
            var weather;
            $.getJSON('api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us', parseWeatherData);
            return weather;
        };
        return getWeather;
    })();
    weather_1.getWeather = getWeather;
    function parseWeatherData(data) {
        var weather = data;
        return weather;
    }
})(weather || (weather = {}));
/// <reference path="jquery.d.ts" />
/// <reference path="weather.ts" />
$(function () {
    console.log('Getting location...');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.latitude, ' ', position.coords.longitude);
            var weather = new weather.getWeather();
            weather.getCurrentWeatherByLatLong(position.coords.latitude, position.coords.longitude);
        });
    }
});
