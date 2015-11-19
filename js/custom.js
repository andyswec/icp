$(function() {
  $( "#cena-slider-kupa" ).slider({
    range: true,
    min: 0,
    max: 100,
    step: 1,
    values: [ 10, 50 ],
    slide: function( event, ui ) {
      $( "#cena" ).val( nonlinear_cena(ui.values[ 0 ]) + "€ - " + nonlinear_cena(ui.values[ 1 ]) + "€" );
    }
  });

  setTimeout(function() {
    $( "#cena" ).val( nonlinear_cena($( "#cena-slider-kupa" ).slider( "values", 0 )) + "€ - " + nonlinear_cena($( "#cena-slider-kupa" ).slider( "values", 1 )) + "€" );
  }, 10);
});

$(function() {
  $( "#cena-slider-prenajom" ).slider({
    range: true,
    min: 0,
    max: 100,
    step: 1,
    values: [ 10, 50 ],
    slide: function( event, ui ) {
      $( "#cena-prenajom" ).val( nonlinear_cena_prenajom(ui.values[ 0 ]) + "€ - " + nonlinear_cena_prenajom(ui.values[ 1 ]) + "€" );
    }
  });

  setTimeout(function() {
    $( "#cena-prenajom" ).val( nonlinear_cena_prenajom($( "#cena-slider-prenajom" ).slider( "values", 0 )) + "€ - " + nonlinear_cena_prenajom($( "#cena-slider-prenajom" ).slider( "values", 1 )) + "€" );
  }, 10);
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

function nonlinear_cena_prenajom(slider_value) {
  var return_value = 30 * slider_value;
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


$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 0){
            $('#go-top-button').stop().animate({
                bottom: '50px'
                }, 500);
        }
        else{
            $('#go-top-button').stop().animate({
               bottom: '-50px'
            }, 500);
        }
    });
    $('#go-top-button').click(function() {
        $('html, body').stop().animate({
           scrollTop: 0
        }, 500, function() {
           $('#go-top-button').stop().animate({
               bottom: '-50px'
           }, 500);
        });
    });
});