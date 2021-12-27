// define function
function updateClock(){

    // get current date and time variable
    let currentTime= new Date();
    
    // create date and time variable
    let currentHour= currentTime.getHours();
    let currentMinutes= currentTime.getMinutes();
    let currentSeconds= currentTime.getSeconds();
    let curretDate= currentTime.getDate();
    let currentMonth= currentTime.getMonth();
    let currentYear= currentTime.getFullYear();
    let currentDay= currentTime.getDay();

    // add 0 on prefix if less than 10
    currentHour= (currentHour<10?"0":" ")+currentHour;
    currentMinutes= (currentMinutes<10?"0":" ")+currentMinutes;
    currentSeconds= (currentSeconds<10?"0":" ")+currentSeconds;

    // convert railway time to basic time
    currentHour= currentHour>12?currentHour-12:currentHour;
    currentHour=currentHour==0?"12":currentHour;

    // get AM PM
    dayTime= currentHour<12?"PM":"AM";
    
    // make date and time string
    let currentTimeStr= currentHour+" : "+currentMinutes+" : "+currentSeconds+" "+dayTime;
    let currentDateStr= curretDate+" / "+currentMonth+" / "+currentYear;

    // get day
    switch(currentDay){
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
        default:
            day="undefine";
            break;
    }

    // print date time and day
    document.getElementById("clock").innerHTML=currentTimeStr;
    document.getElementById("date").innerHTML= currentDateStr;
    document.getElementById("day").innerHTML= day;
}