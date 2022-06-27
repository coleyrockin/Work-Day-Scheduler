// moment.js stuff
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

var hour = moment().hours();
var userInput;
var hourSpan;
//Date and Hour
var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
  }, 100)

