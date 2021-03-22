//Variables

var currentDayEl = $('#currentDay');
var currentHourEl = $('.hour');
var textAreaEl = $('.description');
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
function textArea() {
        localStorage.setItem('textAreaEl', textAreaEl);
        localStorage.getItem(textAreaEl);
    };



textArea();
//save text click event
saveButton.on('click', textArea);
day();
color();