var calendar = new Date;
var month = document.getElementById('month');
var week = document.getElementById('week');
var day = document.getElementById('day');
var year = document.getElementById('year');
var weekNumber = calendar.getDay();
var monthNumber = calendar.getMonth();
day.innerHTML = calendar.getDate();

switch (weekNumber) {
    case 1:
        week.innerHTML = 'Monday';
        break;
    case 2:
        week.innerHTML = 'Tuesday';
        break;
    case 3:
        week.innerHTML = 'Wednesday';
        break;
    case 4:
        week.innerHTML = 'Thursday';
        break;
    case 5:
        week.innerHTML = 'Friday';
        break;
    case 6:
        week.innerHTML = 'Saturday';
        break;
    case 7:
        week.innerHTML = 'Sunday';
        break;
    default:
        break;
};

switch (monthNumber+1) {
    case 1:
        month.innerHTML = 'January';
        break;
    case 2:
        month.innerHTML = 'February';
        break;
    case 3:
        month.innerHTML = 'March';
        break;
    case 4:
        month.innerHTML = 'Aprel';
        break;
    case 5:
        month.innerHTML = 'May';
        break;
    case 6:
        month.innerHTML = 'June';
        break;
    case 7:
        month.innerHTML = 'July';
        break;
    case 8:
        month.innerHTML = 'August';
        break;
    case 9:
        month.innerHTML = 'September';
        break;
    case 10:
        month.innerHTML = 'October';
        break;
    case 11:
        month.innerHTML = 'November';
        break;
    case 12:
        month.innerHTML = 'December';
        break;
    default:
        break;
}
