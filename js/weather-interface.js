var Weather = require('./../js/weather.js').weatherModule;
var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

var displayTemp = function(city, tempData) {
  $('.showTemp').text("The temperature in " + city + " is " + tempData + " degrees.");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getHumidity(city, displayHumidity);
    currentWeatherObject.getTemp(city, displayTemp);
  });
});
