$('#hotelBtn').click(function(){
  console.log('hotel');
})

$('#motelBtn').click(function(){
  console.log('motel');
})

$('#houseBtn').click(function(){
  console.log('house');
})

$('#hostelBtn').click(function(){
  console.log('hostel');
})

$('#locationBtn').click(function(){
  console.log('location');
})

$('#checkinBtn').click(function(){
  console.log('check in ');
})

$('#checkoutBtn').click(function(){
  console.log('check out');
})

$('#guestBtn').click(function(){
  console.log('guests');
})

$('#search').click(function(){
  console.log('submitted');
})



























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
