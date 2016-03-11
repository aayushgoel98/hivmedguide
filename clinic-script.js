// $(document).ready(function(){
//   var myZip = 98122;
//
//   (function(){
//     $('#submit').on('click', function(){
//       var searchZip = $('#address').val();
//
//       $.ajax({
//         url: 'https://locator.aids.gov/data?zip=' + searchZip + '&service=clinics',
//         type: 'GET',
//         dataType: 'jsonp',
//         success: function(data){
//           findServices(data);
//         }
//       });
//
//       function findServices(data){
//         var myData = data;
//
//         for(var i = 0; i < 5; i ++){
//           var newName = (myData.services[1].providers[i].title);
//           var newStreet = (myData.services[1].providers[i].streetAddress);
//           var newCity = (myData.services[1].providers[i].locality);
//           var newState = (myData.services[1].providers[i].region);
//           var newZip = (myData.services[1].providers[i].postalCode).substring(0,5);
//           var thisAddress = newStreet + ', ' + newCity + ' ' + newState + ', ';
//           clinicAddresses[i] = newZip;
//           $('.clinic-results').append('<p>' + newName + '<br>' + thisAddress + '<span id = "address' + i + '">' + newZip + '</span></p>');
//         }
//       }
//
//     }); //on submit
//   })(); //iife
//
// });
