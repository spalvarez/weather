/// <reference path="jquery.d.ts" />
$(function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			console.log(position.coords.latitude, ' ', position.coords.longitude);
			var weather = new getWeather();
			weather.getCurrentWeatherByLatLong(position.coords.latitude, position.coords.longitude);
		});
	}
})

class getWeather {
	getCurrentWeatherByLatLong(lat: number, lon: number) {
		var weather: curWeather;
		var urlLoc: string = 'http://api.openweathermap.org/data/2.5/weather?appid=f9402e85504b0c5500f6f9cd39e19394&lat=' + lat + '&lon=' + lon;
		$.getJSON(urlLoc, function(data) {
			var weather: curWeather = data;
			alert(JSON.stringify(data));
			
		});
	}

	getCurrentWeatherByZipCode(zipCode: number) {
		var weather: curWeather;
		$.getJSON('http://api.openweathermap.org/data/2.5/weather?appid=f9402e85504b0c5500f6f9cd39e19394&zip=' + zipCode + ',us', function (data) {
			var weather: curWeather = data;
		});
	}
}

interface curWeather {

}
