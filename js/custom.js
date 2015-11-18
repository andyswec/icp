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
  var filterHeight;
  var orderHeight;

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

$(function() {
  var elementPosition = $('#loading-next').offset();
  var working = false;

  $(window).scroll(function() {
    console.log($(window).scrollTop() + " + " + $(window).height() + ' = ' + ($(window).scrollTop() + $(window).height()) + " --- " + elementPosition.top);
    if(!working && $(window).scrollTop() + $(window).height() >= elementPosition.top) {
      working = true;

      setTimeout(function() {
        $('ul#houses li:last-child').remove()

        var items = $('ul#houses li');

        for (var i = 0; i < Math.min(6, items.length); i++) {
          $('ul#houses').append($(items[i]).clone());
        }

        $('ul#houses').append('<li id="loading-next" class="list-group-item col-md-4 col-md-offset-4 text-center"><span class="glyphicon glyphicon-repeat" aria-hidden="true"></span></li>');
        elementPosition = $('#loading-next').offset();

        working = false;
      }, 500);
    }
  });
});