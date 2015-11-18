$(function() {
  $( "#cena-slider" ).slider({
    range: true,
    min: 0,
    max: 100,
    step: 1,
    values: [ 10, 50 ],
    slide: function( event, ui ) {
      $( "#cena" ).val( nonlinear_cena(ui.values[ 0 ]) + "€ - " + nonlinear_cena(ui.values[ 1 ]) + "€" );
    }
  });

  $( "#cena" ).val( nonlinear_cena($( "#cena-slider" ).slider( "values", 0 )) + "€ - " + nonlinear_cena($( "#cena-slider" ).slider( "values", 1 )) + "€" );
});

function nonlinear_cena(slider_value) {
  var return_value = 0;
  if (slider_value < 25) {
    return_value = slider_value * 1000;
  } else if (slider_value < 50) {
    return_value = 25000 + (slider_value - 25) * 5000;
  } else if (slider_value < 75) {
    return_value = 275000 + (slider_value - 50) * 10000;
  } else {
    return_value = 525000 + (slider_value - 75) * 15000;
  }
  return String(return_value);
}

$(function() {
  $( "#rozloha-slider" ).slider({
    range: true,
    min: 0,
    max: 200,
    step: 5,
    values: [ 50, 100 ],
    slide: function( event, ui ) {
      $( "#rozloha" ).val( nonlinear_rozloha(ui.values[ 0 ]) + "m2 - " + nonlinear_rozloha(ui.values[ 1 ]) + "m2" );
    }
  });

  $( "#rozloha" ).val( nonlinear_rozloha($( "#rozloha-slider" ).slider( "values", 0 )) + "m2 - " + nonlinear_rozloha($( "#rozloha-slider" ).slider( "values", 1 )) + "m2" );
});


function nonlinear_rozloha(slider_value) {
  var return_value = 0;
  if (slider_value <= 100) {
    return_value = slider_value;
  } else {
    return_value = 100 + (slider_value - 100) * 2;
  }
  return String(return_value);
}
