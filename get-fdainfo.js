$(document).ready(function(){

  var transferMed = readCookie('myMed').toString();
  var thisMed = '';

  if(transferMed === '' || transferMed === null){
    thisMed = 'Truvada';
  }
  else {
    thisMed = transferMed;
  }

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

  // adverse events iife
  (function(){
    $.ajax({
      url: 'https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:"' + thisMed + '"&count=patient.reaction.reactionmeddrapt.exact',
      type: 'GET',
      crossOrigin: true,
      dataType: 'json',
      success: function(data){
        adverseData(data);
      }
    });

    function adverseData(data){
      var thisData = $.map(data, function(el){return el});

      for(var i = 1; i <= 25; i++){
        $('.med-adverse-events').append('<div class="adverse-div"><p>' + thisData[i].term.toLowerCase() + ':<br>' + thisData[i].count + '</p></div>');
      }
    }
  })();

  //

});
