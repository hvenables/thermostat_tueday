var thermostat = new Thermostat;

var showTemp = function() {
  var colourefficent = thermostat.efficency();
  $('#temp').text(thermostat.temperature)
  .css({
    color: colourefficent,
  });
};

$(document).ready(function() {
  showTemp();

  $('#tempUp').click(function() {
    thermostat.upTemp();
    showTemp();
  });

  $('#tempDown').click(function() {
    thermostat.downTemp();
    showTemp();
  });

  $('#myCheckbox').change(function() {
    if (thermostat.maxTemp === 25) {
      thermostat.powerSaving(false);
    } else {
      thermostat.powerSaving(true);
      if (thermostat.temperature > 25) {
        thermostat.temperature = 25;
        showTemp();
      }
    }
  });

  $('#reset').click(function() {
    thermostat.resetTemp();
    showTemp();
  });

  var urlCity = window.location.search.replace('?city=', '').replace('&Submit=Submit', '') || 'london';
  var weathertemp;
  var weathername;

  $.ajax('http://api.openweathermap.org/data/2.5/find?q=' + urlCity + '&units=metric', {
    success: function(data) {
      weathertemp = Math.floor(data.list[0].main.temp) + '°C  ';
      weathername = data.list[0].name;
      var lati = data.list[0].coord.lat;
      var long = data.list[0].coord.lon;
      $('#weather').html(weathertemp + weathername);
    },
  });

});
