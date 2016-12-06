// This file contains functions that use Ajax to request and log data from two different web services. Start by reading over the code and making sure you understand how it works.
// Obtain API keys for both openweathermap.org and timezonedb.com. Specify the values the appropriate API keys in the weatherData and timeData objects, then verify that the Ajax requests complete successfully.
// Next, update the app so the Ajax functionality is in a separate function that uses a callback to run other functions on the data it receives.
// Finally, update your code so the Ajax function itself returns a function, then use it to create a getWeather() and a getTime() function.  

'use strict';

var weatherData = {};
weatherData.apikey = "";
weatherData.url = "http://api.openweathermap.org/data/2.5/weather?q=San Francisco,CA&appid=" + weatherData.apikey;
weatherData.category = "weather";

var timeData = {};
timeData.apikey = "";
timeData.url = "http://api.timezonedb.com/v2/get-time-zone?key=" + timeData.apikey + "&format=json&by=zone&zone=America/Los_Angeles";
timeData.category = "time";

function updateWeather() {
  $.ajax({
      url: weatherData.url,
      // Work with the response
      success: function (r) {
        var degF = (r.main.temp - 273.15) * 1.8 + 32;
        var degFInt = Math.floor(degF);
        console.log("Temperature: " + degFInt + " deg F");
      },
      error: function () {
        console.log("There was an error getting weather data :(");
      }
  });
}

function updateTime() {
  $.ajax({
      url: timeData.url,
      // Work with the response
      success: function (r) {
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date((r.timestamp - r.gmtOffset)*1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        console.log("Time: " + formattedTime);
      },
      error: function () {
        console.log("There was an error getting time data :(");
      }
  })

}

updateWeather();
updateTime();


