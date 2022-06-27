// moment.js stuff and lots of variables for various time frames 9am-6pm
//Variable for userInput and hour span
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
var hour = moment().hours();
var userInput;
var hourSpan;
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");

//CURRENT DATE WeekDay/Day/Month/Year and TIME hours/mins/secs on homepage**
var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
  }, 100)

  function initPage() {

    console.log("Current Hour " + hour);
    var init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00 am"))
    tenAm.val(init10);
  }