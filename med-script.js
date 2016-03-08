$(document).ready(function(){
  var gilead = '<a href="https://www.gileadadvancingaccess.com/"><button id="asst-button">here.</button></a>'

  var testMed = {
    name: 'Truvada',
    blurb: 'Truvada is a single pill that contains the following two different HIV medicines: Emtricitabine (brand name: Emtriva). Tenofovir disoproxil fumarate (brand name: Viread).',
    assistanceId: gilead,
  };

  $('#medication-name').text(testMed.name);
  $('#blurb').text(testMed.blurb);

  $('#assistance-link').html(testMed.assistanceId);

  function getGoodRx(){
    var querystring = 'name=Truvada&api_key=c14b6f0700';
    var hash = CryptoJS.HmacSHA256(querystring, 'T0SfZ5jz9mOXxoXvTpMuZw==');
    var base64 = hash.toString(CryptoJS.enc.Base64);
    var urlToGet = 'https://api.goodrx.com/low-price?' + querystring + '&sig=' + base64;
    console.log(urlToGet);
    // $.ajax({
    //   url:

  }

  getGoodRx();

});
