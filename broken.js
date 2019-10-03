
    $('.search').click(function(){
      var inputCheck = true;
      $('input').each(function() {
          if(!$(this).val()){
            Swal.fire(
              'Error!',
              'You need to fill in all of the sections',
              'error'
            );
             inputCheck = false;
          }
      });

      if (inputCheck === true) {
        $('#options').fadeOut(1000);
        $('#sections').fadeOut(1000);
        $('.search').fadeOut(1000);
        $('#results').delay(1000).queue(function(next){
          $('#results').removeClass('hidden');
          $('#filter').removeClass('hidden');
          next();
        });
      };

    });

});



// function that shows the accommodation options
var guestSelect;
var totalCost;
  $('.search').click(function(){
      var location = $('#location').val();
      guestSelect = parseInt($('#guestSelect').val());
      // $("#locationName").html(location);
      // $("#stayTime").html(`Your stay is from ${d1} till ${d2}`);
      // $("#nights").html(dateDiff);

    for (var i = 0; i < accommodationOptions.length; i++){
      if (location.length === 0) {
          console.log('need to input');
      } else if (accommodationOptions[i] === 0){
          console.log('Sorry! There is nothing avaliable, please try again');
      } else {
          $('#filter').empty();
            for (var a = 0; a < accommodationOptions.length; a++) {
                 if ((location === accommodationOptions[a].location) && (dateDiff >= accommodationOptions[a].minNight && dateDiff <= accommodationOptions[a].maxNight) && (guestSelect >= accommodationOptions[a].minPeople && guestSelect <= accommodationOptions[a].maxPeople)){
                  $('#filter').append(
                    `<div class="col-12 col-sm-6 col-md-4 mb-3 text-center">
                        <div class="card">
                          <img src="images/thumbnails/${accommodationOptions[a].image}" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${accommodationOptions[a].title}</h5>
                                <p class="card-text">${accommodationOptions[a].description}</p>
                                <p class="card-text">$${accommodationOptions[a].cost} / per night</p>
                                <div id="booking" class="btn btn-primary" onclick="booking(${accommodationOptions[a].id})"> Make a booking </div>
                            </div>
                        </div>
                    </div>`
                    );
                } else {
                    $('#filter').html(
                  "<h2> Sorry there are no accommodation options that match your request </h2>"
                )
                }

            }
        }
    }
  })




var adding = '';
var nightCost
var totalCostMeal

function booking(accommodationID) {
  for (var j = 0; j < accommodationOptions.length; j++) {
    if (accommodationOptions[j].id === accommodationID) {
      selectedAccommodation = accommodationOptions[j];
      break;
    }
  }
  nightCost = selectedAccommodation.cost;
  console.log(nightCost);
  totalCost = Math.ceil((parseInt(dateDiff) * nightCost + adding));

    (async () => {

const inputOptions = new Promise((resolve) => {

      setTimeout(() => {
        resolve({
            '25 per person': 'Breakfast Included',
            '70 per person': 'Dinner Included',
        })
      }, 1000)
    })
    const { value: price } = await Swal.fire({
      title: 'Select meal option',
      input: 'radio',
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to choose something!'
        }
      }
    })

    if (price) {
      Swal.fire({ html: 'That will cost $' + price })
      adding = parseInt(price);
      console.log(adding);
      totalCostMeal = Math.ceil(totalCost + adding);
      console.log("$" + totalCostMeal);

      const { value: email } = await Swal.fire({
        title: `Your total comes to $${totalCostMeal}.`,
        input: 'email',
        inputPlaceholder: 'Enter your email address'
      })

      if (email) {
        Swal.fire('Your confirmation has been sent to ' + email)
      }
    }

})()

};
    var dateDiff;
    var d1;
    var d2;
    var select = function(dateStr) {
         d1 = $('#from').datepicker('getDate');
         d2 = $('#to').datepicker('getDate');
        var diff = 0;
        if (d1 && d2) {
              diff = Math.floor((d2.getTime() - d1.getTime()) / 86400000); // ms per day
        };
        dateDiff = diff;
        console.log(dateDiff);
    };

    $('#from').datepicker({
      minDate: new Date(2019, 8 - 1, 22),
      maxDate: new Date(2019, 9 - 1, 28),
      onSelect: select,
    });

    $('#to').datepicker({
      onSelect: select
    });
