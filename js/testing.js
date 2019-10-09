$('#locationBtn').click(function(){
  console.log('location');
})

$('#all').click(function(){
  console.log('all');
})

$('#auckland').click(function(){
  console.log('auckland');
})

$('#hamilton').click(function(){
  console.log('hamilton');
})

$('#moteuka').click(function(){
  console.log('moteuka');
})

$('#queenstown').click(function(){
  console.log('queenstown');
})

$('#christchurch').click(function(){
  console.log('christchurch');
})

$('#dunedin').click(function(){
  console.log('dunedin');
})

$('#napier').click(function(){
  console.log('napier');
})

$('#newPlymouth').click(function(){
  console.log('new plymouth');
})

$('#search').click(function(){
  event.preventDefault();

  var location = $('#location').val();
  var guests = $('#guestBtn').val();
  console.log(location);
  console.log(guests);
  // $('#location').addClass('hidden');
  // $('#search').addClass('hidden');


})















// $('#checkinBtn').click(function(){
//   console.log('check in ');
// })
//
// $('#checkoutBtn').click(function(){
//   console.log('check out');
// })
//
// $('#guestBtn').click(function(){
//   console.log('guests');
// })


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
