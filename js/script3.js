// The array of all my accommodation options.

var accommodationOptions = [
  {
    id: 1,
    title: 'Waldorf Stadium Apartments Hotel',
    type: 'Hotel',
    cost: 157,
    location: 'Auckland',
    minNight: 1,
    maxNight: 5,
    minPeople: 1,
    maxPeople: 2,
    description: 'Luxury apartment with kitchen, near Queen Street Shopping District',
    image: 'waldorfStadiumApartments.png'
  },
  {
    id: 2,
    title: 'Airport Garden Inn',
    type: 'Motel',
    cost: 90,
    location: 'Auckland',
    minNight: 2,
    maxNight: 4,
    minPeople: 3,
    maxPeople: 10,
    description: 'Adults-only hotel in Mangere with outdoor pool, restaurant',
    image: 'airportGardenInn.png'
  },
  {
    id: 3,
    title: 'Backpackers Central Hamilton',
    type: 'Hostel',
    cost: 30,
    location: 'Hamilton',
    minNight: 1,
    maxNight: 10,
    minPeople: 1,
    maxPeople: 1,
    description: 'Backpackers Central Hamilton offers hostel in the centre of Hamilton, less than 5 minutes walk from local shops, restaurants and cafes. Free WiFi and free lockers are provided.',
    image: 'backpackers.jpg'
  },
  {
    id: 4,
    title: 'Serene Studio in Motueka',
    type: 'House',
    cost: 240,
    location: 'Moteuka',
    minNight: 2,
    maxNight: 15,
    minPeople: 1,
    maxPeople: 4,
    description: 'A sunny and bright studio, this is a perfect spot to unwind and recharge. ',
    image: 'studio.png'
  },
  {
    id: 5,
    title: 'Hilton Queenstown Resort & Spa',
    type: 'Hotel',
    cost: 157,
    location: 'Queenstown',
    minNight: 1,
    maxNight: 5,
    minPeople: 1,
    maxPeople: 2,
    description: 'Polished quarters, some with lake views, in a premium hotel offering dining, a spa & an indoor pool.',
    image: 'queenstown.png'
  },
  {
    id: 6,
    title: 'Jailhouse Accommodation',
    type: 'Hostel',
    cost: 30,
    location: 'Christchurch',
    minNight: 1,
    maxNight: 10,
    minPeople: 1,
    maxPeople: 1,
    description: 'Low-key hostel in a Gothic Revival-style prison with a coffee bar, a game room & a guest kitchen.',
    image: 'jailhouse.png'
  },
  {
    id: 7,
    title: 'Private Secluded House',
    type: 'House',
    cost: 240,
    location: 'Dunedin',
    minNight: 2,
    maxNight: 15,
    minPeople: 1,
    maxPeople: 4,
    description: 'Enjoy a cupa in your own private sunny courtyard surrounded by native plants and the odd croaking frog',
    image: 'dunedin.png'
  },
  {
    id: 8,
    title: 'Albatross Motel',
    type: 'Motel',
    cost: 90,
    location: 'Napier',
    minNight: 2,
    maxNight: 4,
    minPeople: 3,
    maxPeople: 10,
    description: 'Modern studios & apartments in a casual motel offering free Wi-Fi & parking, plus an outdoor pool.',
    image: 'napier.png'
  },
  {
    id: 9,
    title: 'Egmont Eco',
    type: 'Hostel',
    cost: 30,
    location: 'New Plymouth',
    minNight: 1,
    maxNight: 10,
    minPeople: 1,
    maxPeople: 1,
    description: 'A sunny and bright studio, this is a perfect spot to unwind and recharge. ',
    image: 'newPlymouth.png'
  }
];

// Everything that is working on load.
$(document).ready(function(){

  var started = false;


  // When the start button is clicked this function begins to work
    $('#start').click(function(){
      if(started === false){
        $(this).fadeOut(1000);
        $('.getStart').addClass('started');
        $('.getStartContent').addClass('startedContent');
        $('#contentContainer').removeClass('contentContainerStart');
        $('#contentContainer').removeClass('showResults');
        $('.checkIn').removeClass('card-img-top');
        $('.checkOut').removeClass('card-img-top');
        $('.travellers').removeClass('card-img-top guestsOverlay');
        setTimeout(function(){
          started = true;
        }, 1000);
      }
    })

    $('#logo').click(function(){
    if(started === true){
      $('#start').fadeIn(1000);
      $('.getStart').removeClass('started');
      $('.getStartContent').removeClass('startedContent');
      $('#contentContainer').addClass('contentContainerStart');
      setTimeout(function(){
        started = false;
      }, 1000);
    }
  })

  // The code for the buttons to change colour
  $('#hotel').click(function(){
    $('.hotel').css('background', 'black');
    $('.motel').css('background', '#808080');
    $('.house').css('background', '#808080');
    $('.hostel').css('background', '#808080');
  });

  $('#motel').click(function(){
    $('.hotel').css('background', '#808080');
    $('.motel').css('background', 'black');
    $('.house').css('background', '#808080');
    $('.hostel').css('background', '#808080');
  });

  $('#house').click(function(){
    $('.hotel').css('background', '#808080');
    $('.motel').css('background', '#808080');
    $('.house').css('background', 'black');
    $('.hostel').css('background', '#808080');
  });

  $('#hostel').click(function(){
    $('.hotel').css('background', '#808080');
    $('.motel').css('background', '#808080');
    $('.house').css('background', '#808080');
    $('.hostel').css('background', 'black');
  });

  $('.backToStart').click(function(){
    $('#options').fadeIn(300);
    $('#sections').fadeIn(300);
    $('.search').fadeIn(300);
    $('#filter').fadeOut(300);
    $('#places').fadeOut(300);
    $('#details').hidden;
    $('#results').addClass('hidden');
  });

  $('.search').click(function(){

    var location = $('#location').val();
    var guests = $('#guestSelect').val();

    for (var i = 0; i < accommodationOptions.length; i++) {
      if(location === accommodationOptions[i].location) {
        if(guests >= accommodationOptions[i].minPeople && guests <= accommodationOptions[i].maxPeople) {
          if ((dateDiff >= accommodationOptions[i].minNight && dateDiff <= accommodationOptions[i].maxNight)) {
            $('#filter').append(
              `<div class="col-12 col-sm-6 col-md-4 mb-3 text-center">
                  <div class="card">
                    <img src="images/thumbnails/${accommodationOptions[i].image}" class="card-img-top" alt="">
                      <div class="card-body">
                          <h5 class="card-title">${accommodationOptions[i].title}</h5>
                          <p class="card-text">${accommodationOptions[i].description}</p>
                          <p class="card-text">$${accommodationOptions[i].cost} / per night</p>
                          <div id="booking" class="btn btn-primary" onclick="booking(${accommodationOptions[i].id})"> Make a booking </div>
                      </div>
                  </div>
              </div>`
            );
            console.log(accommodationOptions[i]);
        } else {
            $('#filter').html(
              "<h2> Sorry there are no accommodation options that match your request </h2>"
            )
          }
        }
      }
    }
  })
});

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
  minDate: new Date(2019, 10 - 1, 3),
  maxDate: new Date(2019, 12 - 1, 31),
  onSelect: select,
});

$('#to').datepicker({
  onSelect: select
});

  // when the search button is clicked show an error or proceed

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
          // $('#filter').removeClass('hidden');
          next();
        });
      };

    });


// // function that shows the accommodation options
// var guestSelect;
// var totalCost;
//   $('.search').click(function(){
//       var location = $('#location').val();
//       guestSelect = parseInt($('#guestSelect').val());
//       // $("#locationName").html(location);
//       // $("#stayTime").html(`Your stay is from ${d1} till ${d2}`);
//       // $("#nights").html(dateDiff);
//
//     for (var i = 0; i < accommodationOptions.length; i++){
//       if (location.length === 0) {
//           console.log('need to input');
//       } else if (accommodationOptions[i] === 0){
//           console.log('Sorry! There is nothing avaliable, please try again');
//       } else {
//           $('#filter').empty();
//             for (var a = 0; a < accommodationOptions.length; a++) {
//                  if ((location === accommodationOptions[a].location) && (dateDiff >= accommodationOptions[a].minNight && dateDiff <= accommodationOptions[a].maxNight) && (guestSelect >= accommodationOptions[a].minPeople && guestSelect <= accommodationOptions[a].maxPeople)){
//                   $('#filter').append(
//                     `<div class="col-12 col-sm-6 col-md-4 mb-3 text-center">
//                         <div class="card">
//                           <img src="images/thumbnails/${accommodationOptions[a].image}" class="card-img-top" alt="">
//                             <div class="card-body">
//                                 <h5 class="card-title">${accommodationOptions[a].title}</h5>
//                                 <p class="card-text">${accommodationOptions[a].description}</p>
//                                 <p class="card-text">$${accommodationOptions[a].cost} / per night</p>
//                                 <div id="booking" class="btn btn-primary" onclick="booking(${accommodationOptions[a].id})"> Make a booking </div>
//                             </div>
//                         </div>
//                     </div>`
//                     );
//                 } else {
//                     $('#filter').html(
//                   "<h2> Sorry there are no accommodation options that match your request </h2>"
//                 )
//                 }
//
//             }
//         }
//     }
//   })




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
