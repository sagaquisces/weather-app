var apiKey = require('./../.env').apiKey;

function Weather(){
}

Weather.prototype.getHumidity = function(city, displayHumidity) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayHumidity(city, response.main.humidity);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

Weather.prototype.getTemp = function(city, displayTemp) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayTemp(city, response.main.temp);
  }).fail(function(error) {
    $('.showTemp').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;
