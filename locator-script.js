$(document).ready(function(){
  var myZip = 98122;

  console.log('script loaded');

  $.ajax({
    url: 'https://locator.aids.gov/data?zip=98122&service=clinics',
    type: 'GET',
    dataType: 'jsonp',
    success: function(data){
      findServices(data);
    }
  });

  function findServices(data){
    var myData = data;
    console.log(myData);

    myData.services[1].providers

  }

  var lat = '';
  var lng = '';
  var address = 98122;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      lat = results[0].geometry.location.lat();
      lng = results[0].geometry.location.lng();
    });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
  log('Latitude: ' + lat + ' Logitude: ' + lng);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });

});
