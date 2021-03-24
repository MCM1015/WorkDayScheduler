//Variables

var currentDayEl = $('#currentDay');
var currentHourEl = $('.hour');
var textAreaEl = $('.description');
var inputTextArea = $('textarea')
var saveButton = $('.saveBtn');
var realTime = moment().format('dddd, MMMM Do');


//Functions 
//current day set
function day() {
    currentDayEl.text(realTime);
}

//timeblock color set
function color() {
    var timeConvert = moment().format('HHa');
    currentHourEl.each(function (index, row) {
        var time = $(this).text();
        var newDateTime = moment(time, "HHa").toDate();
        var x = moment(newDateTime).format("HHa");
        var text = $(this).siblings(2);
        if (x == timeConvert) {
            text.toggleClass('present');
        } else if (x < timeConvert) {
            text.toggleClass('past');
        } else {
            text.toggleClass('future');
        }
    });
}

//save text to local storage function 
function updateInput(event) {
    var textAreaInput = $(event.target).parent().find('textarea').val()
    var hour = $(event.target).parent().data("hour")
    localStorage.setItem('info' + hour, textAreaInput);
}

//save text click event
saveButton.on('click', updateInput);

//pull text from local storage and store on page
function item() {
    textAreaEl.each(function (index, row) {
        var hour = $(this).parent().data("hour");
        $(this).text(localStorage.getItem('info' + hour));
    });
}

item();
day();
color();



