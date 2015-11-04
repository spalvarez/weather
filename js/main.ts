/// <reference path="jquery.d.ts" />
/// <reference path="weather.ts" />
$(function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			console.log(position.coords.latitude, ' ', position.coords.longitude);
			var weather = new weather.getWeather();
			weather.getCurrentWeatherByLatLong(position.coords.latitude, position.coords.longitude);
		});
	}
})