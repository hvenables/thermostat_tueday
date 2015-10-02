var thermostat = new Thermostat;
// var efficency;

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
});

// window.document.getElementById('up').addEventListener('click', function() {
//   thermostat.upTemp;
//   thermostat.temperature;
// });
