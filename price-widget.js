$(document).ready(function(){

  // vars go here
//  var thisMed = readCookie('myMed').toString();
var thisMed = 'Truvada';
  var mykey = config.MY_KEY;
  var secretkey = config.SECRET_KEY;

  //functions go here
  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  function getGoodRx(){
    var querystring = 'name=' + thisMed + '&api_key=' + mykey;
    var hash = CryptoJS.HmacSHA256(querystring, secretkey);
    var base64 = hash.toString(CryptoJS.enc.Base64);
    var urlToGet = 'https://api.goodrx.com/compare-price?' + querystring + '&sig=' + base64;

    console.log(urlToGet);

    // ajax request not working, suspect goodrx can't do frontend requests
    // awaiting guidelines on requesting from proxy

    /*
    $.ajax({
      url: urlToGet,
      type: 'GET',
      crossDomain: true,
     dataType: 'jsonp',
      headers: {
        'Access-Control-Allow-Origin' : '*'
      },
      success: function(data){
        getMedPriceInfo(data);
      },
      error: function(xhr, status){
        console.log('error ', xhr, status);
      }
    });
    */
  }

  /*
  function getMedPriceInfo(data){
    var medData = $.map(data, function(el) { return el; });
    medData2 = medData;
    console.log(medData2);
    console.log(medData);
  }

  getGoodRx();
  */

});
