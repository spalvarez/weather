/// <reference path="jquery.d.ts" />
$(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.latitude, ' ', position.coords.longitude);
            var weather = new getWeather();
            weather.getCurrentWeatherByLatLong(position.coords.latitude, position.coords.longitude);
        });
    }
});
var getWeather = (function () {
    function getWeather() {
    }
    getWeather.prototype.getCurrentWeatherByLatLong = function (lat, lon) {
        var weather;
        var urlLoc = 'http://api.openweathermap.org/data/2.5/weather?appid=f9402e85504b0c5500f6f9cd39e19394&lat=' + lat + '&lon=' + lon;
        $.getJSON(urlLoc, function (data) {
            var weather = data;
            alert(JSON.stringify(data));
        });
    };
    getWeather.prototype.getCurrentWeatherByZipCode = function (zipCode) {
        var weather;
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?appid=f9402e85504b0c5500f6f9cd39e19394&zip=' + zipCode + ',us', function (data) {
            var weather = data;
        });
    };
    return getWeather;
})();
//# sourceMappingURL=index.js.map