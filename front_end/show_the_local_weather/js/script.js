// http://api.jquery.com/jquery.getjson/#jsonp

window.onload = function() {
  $.getJSON("http://ipinfo.io/?callback=?", function(response) {
    var cityName = response.city;
    var regionName = response.region;
    var countryCode = response.country;
    console.log(cityName, regionName, countryCode);
    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var apiKey = "&APPID=cae9e4ee1cebeade6f1a8aacd089cba0";
    var apiURL = api + regionName + apiKey;

  $.getJSON(apiURL)
  .done(update)
  .fail(handleErr);

  function update(responseWeather) {
    var weather = responseWeather.weather[0];
    var temp = responseWeather.main;

    $('#currentLocation').prepend('<p> </p>');
    $('#currentLocation').html(regionName+', '+countryCode);

    $('#currentTemp').prepend('<p> </p>');
    var celsius = Math.floor(+temp.temp - 273.15);
    var fahrenheit = Math.floor(((+temp.temp)*(9/5))-459.67);
    $('#currentTemp').html(celsius+" °C");

    $("#currentTemp").click(function(){
      $(this).html($(this).html() == celsius+ " °C" ? fahrenheit+ " °F" :celsius+ " °C");
    });

    document.getElementById('description').title = weather['description'];

    if(weather['main']=='Clouds'){
      var cloudsHtml = '<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>'
      $('#currentWeatherIcon').append(cloudsHtml);

    }else if (weather['main']=='Rain') {
      var fewRainHtml = '<div class="icon sun-shower"><div class="cloud"></div><div class="sun"><div class="rays"></div></div><div class="rain"></div></div>'
      $('#currentWeatherIcon').append(fewRainHtml);

    }else if (weather['main']=='Clear') {
      var sunHtml = '<div class="icon sunny"><div class="sun"><div class="rays"></div></div></div>'
      $('#currentWeatherIcon').append(sunHtml);

    }else if (weather['main']=='Atmosphere') {
      var cloudsHtml = '<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>'
      $('#currentWeatherIcon').append(cloudsHtml);

    }else if (weather['main']=='Snow') {
      var snowHtml = '<div class="icon flurries"><div class="cloud"></div><div class="snow"><div class="flake"></div><div class="flake"></div></div></div>'
      $('#currentWeatherIcon').append(snowHtml);

    }else if (weather['main']=='Thunderstorm') {
      var thunderHtml = '<div class="icon thunder-storm"><div class="cloud"></div><div class="lightning"><div class="bolt"></div><div class="bolt"></div></div></div>'
      $('#currentWeatherIcon').append(thunderHtml);

    }else if (weather['main']=='Extreme') {
      var rainHtml = '<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>'
      $('#currentWeatherIcon').append(rainHtml);

    }else if (weather['main']=='Drizzle') {
      var rainHtml = '<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>'
      $('#currentWeatherIcon').append(rainHtml);
    }
  }

  function handleErr(jqxhr, textStatus, err) {
    alert("Request Failed: " + textStatus + ", " + err +":Please refresh page");
  }

}).fail(function handleErr(jqxhr, textStatus, err) {
    alert("Request Failed: " + textStatus + ", " + err +":Please refresh page");
  });
};
