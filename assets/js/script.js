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

    var init11 = JSON.parse(localStorage.getItem("11:00am"))
    elevenAm.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12:00pm"))
    twelvePm.val(init12);

    var init1 = JSON.parse(localStorage.getItem("1:00pm"))
    onePm.val(init1);

    var init2 = JSON.parse(localStorage.getItem("2:00pm"))
    twoPm.val(init2);

    var init3 = JSON.parse(localStorage.getItem("3:00pm"))
    threePm.val(init3);

    var init4 = JSON.parse(localStorage.getItem("4:00pm"))
    fourPm.val(init4);

    var init5 = JSON.parse(localStorage.getItem("5:00pm"))
    fivePm.val(init5);

    var init6 = JSON.parse(localStorage.getItem("6:00pm"))
    sixPm.val(init6);

  }

  function background () {
    $(".form-control").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
  }

  $(document).ready(function() {
    initPage()
    background()

    $(".saveBtn").on("click", function(){
        userInput = $(this).siblings(".form-control").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    
  })

  $("#clearday").on("click", function(){
    localStorage.clear();
    initPage()
  })

});