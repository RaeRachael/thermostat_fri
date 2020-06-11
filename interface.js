$(document).ready(function() {    // as soon as a html page(DOM) is loaded , allow this to run

  // $('#current-city').change(function() {
  //   var city = $('#current-city').val();
  //   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b8e52b0f2976114dfb19145fa2184283&units=metric', function(data) {
  //     $('#current-temperature').text(data.main.temp)
  //   })
  // })

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
      $('#power-saving-status').text('ON');
      upDateTemperature();
  });

  $('#powersaving-off').click(function () {
    thermostat.powerSaveOff();
      $('#power-saving-status').text('OFF');
      upDateTemperature();
  });

  function upDateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());

    // if (thermostat.energyUsage() === 'low-usage') {
    //   $('#temperature').css('color', 'green');
    // }
    // else if (thermostat.energyUsage() === 'medium-usage') {
    //   $('#temperature').css('color', 'black');
    // }
    // else
    //   $('#temperature').css('color', 'red');
  }



});
