$(function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 100,
    step: 1,
    values: [ 10, 50 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( nonlinear(ui.values[ 0 ]) + "€ - " + nonlinear(ui.values[ 1 ]) + "€" );
    }
  });
  
  $( "#amount" ).val( nonlinear($( "#slider-range" ).slider( "values", 0 )) + "€ - " + nonlinear($( "#slider-range" ).slider( "values", 1 )) + "€" );
});

function nonlinear(slider_value) {
  var return_value = 0;
  if (slider_value < 10) {
    return_value = (slider_value / 10) * 50000;
  } else if (slider_value <= 90) {
    return_value = 50000 + (slider_value - 10) / 80 * 50000;
  } else {
    return_value = 200000 + (slider_value - 90) / 10 * 800000;
  }
  return String(return_value);
}

$(function() {

  setTimeout(function() {
    filterHeight = $('#filter').outerHeight(false);
    orderHeight = $('.section#order').outerHeight(false);
    console.log(filterHeight);
    console.log(orderHeight)
  }, 10);

  var elementPosition = $('#filter').offset();
  console.log(elementPosition);

  $(window).scroll(function() {
    if($(window).scrollTop() >= elementPosition.top){
      $('#filter').css({position: 'fixed', top: 0});
      $('#order').css({position: 'fixed', top: filterHeight});
      $('.section#list').css('margin-top', filterHeight + orderHeight);
    }
    else {
      $('.section#filter').css('position','static');
      $('.section#order').css('position','static');
      $('.section#list').css('margin-top', 0);
    }
  });
});