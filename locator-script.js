function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.6229, lng: -122.3165},
    zoom: 8
  });
  var geocoder = new google.maps.Geocoder();
  document.getElementById('submit').addEventListener('click', function(){
    geocodeAddress(geocoder, map);
    geocodeOthers(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      console.log('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function geocodeOthers(geocoder, resultsMap){
  for(var i = 0; i < 5; i++){
    // var address = window[clinicAddresses][i];
    // console.log(address);
    var address = '98112';
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
};
