var latt;
var long;
var currentPosition;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    $('#demo').text('Geolocation is not supported by this browser.');
  }
}

function showPosition(position) {
  latt = position.coords.latitude;
  long = position.coords.longitude;
  initMap(latt, long);
}

function initMap(latt, long) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: latt, lng: long},
  });
  var marker = new google.maps.Marker({
    position: {lat: latt, lng: long},
    map: map,
  });
}
