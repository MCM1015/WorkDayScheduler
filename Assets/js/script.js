//Variables
//timeblocks
var containterEl = $('container');
var currentDayEl = $('#currentDay');
var currentHourEl = $('.hour');
var textAreaEl = $('.description');
var timeEl = $('#time');
var rowsEl = $('.row');
var saveButton = $('.saveBtn');
var realTime = moment().format('dddd, MMMM Do');

//Functions 
//current day set
function day() {
    currentDayEl.text(realTime);
}


//timeblock color set
function color() {
    var currentHour1 = moment().format('Ha');
    var currentHour2 = moment().format('HHa');
    
    currentHourEl.each(function (index, row) {
        console.log(currentHour1);
        console.log(currentHour2);
        var time = $(this).text(); 
        console.log(time);
        var text = $(this).siblings(2);
            if (time == currentHour1 || time == currentHour2) {
                text.toggleClass('present');
            } else if (time < currentHour1 || time < currentHour2) {
                text.toggleClass('past');
            } else {
                text.toggleClass('future');
            }
    });
}


//save text to local storage function 
function textArea() {
    textAreaEl.each(function (index, row) {
        var text = $(this).val();
        localStorage.setItem('text', text);
        localStorage.getItem(text);
    });
}



textArea();
//save text click event
saveButton.on('click', textArea);
day();
color();