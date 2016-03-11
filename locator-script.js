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
//  var clinicAddresses = getList();
  var searchZip = $('#address').val();
  var clinicAddresses = [];

  (function(){
    console.log(searchZip);
    $.ajax({
      url: 'https://locator.aids.gov/data?zip=' + searchZip + '&service=clinics',
      type: 'GET',
      dataType: 'jsonp',
      success: function(data){
        findServices(data);
      }
    });

    function findServices(data){
      var myData = data;
      console.log(myData);

      for(var i = 0; i < 5; i ++){
        var newName = (myData.services[1].providers[i].title);
        var newStreet = (myData.services[1].providers[i].streetAddress);
        var newCity = (myData.services[1].providers[i].locality);
        var newState = (myData.services[1].providers[i].region);
        var newZip = (myData.services[1].providers[i].postalCode).substring(0,5);
        var thisAddress = newStreet + ', ' + newCity + ' ' + newState + ', ';
        clinicAddresses[i] = newZip;
        $('.clinic-results').append('<p>' + newName + '<br>' + thisAddress + '<span id = "address' + i + '">' + newZip + '</span></p>');
        console.log(clinicAddresses);
      }
      returnlist(clinicAddresses);
    }
  })();

  function returnlist(clinicAddresses){
    for(var i = 0; i < 5; i++){
      var address = clinicAddresses[i];
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
  }
}
