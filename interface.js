$(document).ready(function() {
  $('#powersaving-on').attr('class', 'on');

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=b8e52b0f2976114dfb19145fa2184283';
    var units = '&units=metric';
      $.get(url + token + units, function(data) {
        $('#current-temperature').text(data.main.temp);
      })
  }

  displayWeather('London');
    $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();
      displayWeather(city);
    })



  var thermostat = new Thermostat();
  upDateTemperature();

        // html          // Jq   // JS
  $('#temperature-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.downTemp();
    upDateTemperature();
  })

  $('#temperature-up').click(function(){
    thermostat.upTemp();
    upDateTemperature();
  })

  $('#temperature-reset').click(function (){
    thermostat.resetTemp();
    upDateTemperature();
  });

  $('#powersaving-on').click(function (){
    thermostat.powerSaveOn();
    $('#powersaving-on').attr('class', 'on');
    $('#powersaving-off').attr('class', 'off');
    $('#power-saving-status').text('ON');
    upDateTemperature();
  });

  $('#powersaving-off').click(function () {
    thermostat.powerSaveOff();
    $('#powersaving-off').attr('class', 'on');
    $('#powersaving-on').attr('class', 'off');
    $('#power-saving-status').text('OFF');
    upDateTemperature();
  });

  function upDateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());

  }
});
