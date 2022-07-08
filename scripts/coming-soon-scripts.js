/* Author: Josh Hasan */

/* Coundown Timer for the Coming Soon webpage */
var countdownDate = new Date(); //Sets the countdownDate and time to the current date and time
countdownDate = countdownDate.setSeconds(countdownDate.getSeconds() + 31); // Adds 31 seconds to the current date and time

/* An interval timer that repeats every second */
var timer = setInterval(function () {
    var current = Date.now(); //Current date and time
    var distance = countdownDate - current; //Difference between target date/time and current date/time
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)); //Calculates the days remaining on the timer
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //Calculates the hours remaining on the timer
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); //Calculates the minutes remaining on the timer
    var seconds = Math.floor((distance % (1000 * 60)) / 1000); //Calculates the seconds remaining on the timer

    //Displays the calculated days, hours, minutes and seconds remaining on the timer
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    //Clears the interval timer when the countdown is finished and displays "EXPIRED"
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("counter").innerHTML = "EXPIRED";
        document.getElementById("counter").style.borderLeft = "none";
        document.getElementById("counter").style.borderRight = "none";
    }
}, 1000);