module weather {
	export class getWeather {
		getCurrentWeatherByLatLong(lat: number, lon: number) {
			var weather: curWeather;
			var urlLoc: string = 'api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon;
			$.getJSON(urlLoc, parseWeatherData);
			return weather;
		}

		getCurrentWeatherByZipCode(zipCode: number): curWeather {
			var weather: curWeather;
			$.getJSON('api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us', parseWeatherData);
			return weather;
		}
	}

	export interface curWeather {

	}

	function parseWeatherData(data): curWeather {
		var weather: curWeather = data;

		return weather;			
	}
}