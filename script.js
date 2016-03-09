$(document).ready(function(){

  var isToggled = false;

  var NRTImedications = {
    medClass : 'NRTIs',
    'Ziagen' : 'abacavir, cbacavir sulfate, ABC',
    'Videx, Videx EC' : 'didanosine, delayed-release didanosine, dideoxyinosine, enteric-coated didanosine, ddI, ddI EC',
    'Emtriva' : 'emtricitabine (FTC)',
    'Epivir' : 'lamivudine (3TC)',
    'Zerit' : 'stavudine (d4T)',
    'Vilread' : 'tenofovir disoproxil fumarate (tenofovir DF, TDF)',
    'Retrovir' : 'zidovudine, azidothymidine, AZT, ZDV'
  }

  var NNRTImedications = {
    medClass : 'NNRTIs',
    'Rescriptor' : 'delavirdine (delavirdine mesylate, DLV)',
    'Sustiva' : 'efavirenz (EEV)',
    'Intelence' : 'etravirine (ETR)',
    'Viramune, Viramune XR' : 'nevirapine (extended-release nevirapine, NVP)',
    'Edurant' : 'rilpivirine (rilpivirine hydrochloride, RPV)'
  }

  var PImedications = {
    medClass : 'PIs',
    'Reyataz' : 'atazanavir (atazanavir sulfate, ATV)',
    'Prezista' : 'darunavir (darunavir ethanolate, DRV)',
    'Lexiva' : 'fosamprenavir (fosamprenavir calcium, FOS-APV, FPV)',
    'Crixivan' : 'indinavir, indinavir sulfate, IDV',
    'Viracept' : 'nelfinavir, nelfinavir mesylate, NFV',
    'Norvir' : 'ritonavir (RTV)',
    'Invirase' : 'saquinavir (saquinavir mesylate, SQV)',
    'Aptivus' : 'tipranavir (TPV)'
  }

  var FImedications = {
    medClass : 'FIs',
    'Fuzeon' : 'enfuviritide (T-20)'
  }

  var EImedications = {
    medClass : 'EIs',
    'Selzentry' : 'maraviroc (MVC)'
  }

  var IImedications = {
    medClass : 'IIs',
    'Tivicay' : 'dolutegravir (DTG)',
    'Vitekta' : 'elvitegravir (EVG)',
    'Isentress' : 'raltegravir (raltegravir potassium, RAL)'
  }

  var PEmedications = {
    medClass : 'PEs',
    'Tybost' : 'cobicistat (COBI)'
  }

  var Combomedications = {
    medClass : 'combos',
    'Epzicom' : 'abacavir and lamivudine',
    'Triumeq' : 'abacavir, dolutegravir and lamivudine',
    'Trizivir' : 'abacavir, lamivudine and zidovudine',
    'Evotaz' : 'atazanavir and cobicistat',
    'Prezcobix' : 'darunavir and cobicistat',
    'Atripla' : 'efavirenz, emtricitabine, and tenofovir disoproxil fumarate',
    'Genvoya' : 'elvitegravir, cobicistat, emtricitabine and tenofovir alafenamide fumarate',
    'Stribild' : 'elvitegravir, cobicistat, emtricitabine and tenofovir disoproxil fumarate',
    'Complera' : 'emtricitabine, rilpivirine and tenofovir disoproxil fumarate',
    'Truvada' : 'emtricitabine and tenofovir disoproxil fumarate',
    'Combivir' : 'lamivudine and zidovudine',
    'Kaletra' : 'lopinavir and ritonavir'
  }

  var allMedGroups = [
    NRTImedications, NNRTImedications, PImedications, FImedications, EImedications, IImedications, PEmedications, Combomedications
  ]

  var allMeds = [];

  for (var i = 0; i < allMedGroups.length; i++){
    var temp = allMedGroups[i].keys();
/*    var temp = $.map(allMedGroups[i], function(el){return el});
    console.log(temp);
    allMeds.push(temp); */
  }
  console.log(allMeds);

  console.log(autocompleteSource);

  $(function(){
    $('#search-box').autocomplete({
      source: allMedGroups;
    });
  });
*/
  $('.medCats').click(function(){
    var curParent = $(event.target).parent().attr('id');
    var curDiv = '#' + curParent;
    isToggled = !isToggled;
    console.log(isToggled);

    $('.medCat').not(curDiv).fadeToggle(100);
    $('.filler').fadeToggle(100);
    $('.heading').fadeToggle(100);
    $('.search').fadeToggle(100);
    $('#click-for-full').toggle();

    if(isToggled){
      for(var i = 0; i < allMedGroups.length; i++){
        if (allMedGroups[i].medClass === curParent){
          $.each(allMedGroups[i], function(key, value){
            $('.meds-list').append('<p id = ' + key + '>'+ key + value +'</p>');
          });
          $('#medClass').remove();
        }
      }
    }
    else {
      $('.meds-list').empty();
    }
//    var putHere = $('.meds-list');

/*
    $(curDiv).animate({
      left: '+=100',
    }, 5000, function(){
      console.log('animation done');
   }); //medCats button animate function
*/

  }); //medCats button click function

}); //doc.ready
