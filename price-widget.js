$(document).ready(function(){

  // vars go here
  var thisMed = readCookie('myMed').toString();
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

    $.ajax({
      url: urlToGet,
      dataType: 'json',
      type: 'GET',
      success: function(data){
        getMedPriceInfo(data);
      }
    });


});
