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

  $.ajax({
    url: 'http://aidsinfo.nih.gov/api/drugs/272',
    type: 'GET',
    crossOrigin: true,
    dataType: 'jsonp',
    success: function(data){
      collectData(data);
    }
  });

  function collectData(data){
    var thisData = $.map(data, function(el){return el});
    console.log(thisData);
  }

});
