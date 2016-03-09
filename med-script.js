$(document).ready(function(){

  var thisMed = readCookie('myMed').toString();

  var gilead = '<a href="https://www.gileadadvancingaccess.com/"><button id="asst-button">here.</button></a>'

  var testMed = {
    name: 'Truvada',
    blurb: 'Truvada is a single pill that contains the following two different HIV medicines: Emtricitabine (brand name: Emtriva). Tenofovir disoproxil fumarate (brand name: Viread).',
    assistanceId: gilead,
  };

  $('#medication-name').text(testMed.name);
  $('#blurb').text(testMed.blurb);
  $('#assistance-link').html(testMed.assistanceId);

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
    var mykey = config.MY_KEY;
    var secretkey = config.SECRET_KEY;
    var querystring = 'name=Truvada&api_key=' + mykey;
    var hash = CryptoJS.HmacSHA256(querystring, secretkey);
    var base64 = hash.toString(CryptoJS.enc.Base64);
    var urlToGet = 'https://api.goodrx.com/low-price?' + querystring + '&sig=' + base64;
//    console.log(urlToGet);
    // $.ajax({
    //   url:

  }

  getGoodRx();

});
