$(document).ready(function() {    // as soon as a html page(DOM) is loaded , allow this to run
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
  }









})
