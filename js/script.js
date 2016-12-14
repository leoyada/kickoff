var toggleSide = 1;
var toggleTop = 0;
var toggleScroll = 0;
        
$("#boks1").click(function() {
    console.log("a");
    $("#info-modal").css("opacity", "1");
    $("#info-modal").css("visibility", "visible");

});

$("#boks3").click(function() {
    console.log("x");
    $("#program-modal").css("opacity", "1");
    $("#program-modal").css("visibility", "visible");

});

$("#boks4").click(function() {
    console.log("x");
    $("#mad-modal").css("opacity", "1");
    $("#mad-modal").css("visibility", "visible");

});

$("#boks5").click(function() {
    console.log("x");
    $("#partner-modal").css("opacity", "1");
    $("#partner-modal").css("visibility", "visible");

});

$("#boks6").click(function() {
    console.log("x");
    $("#cup-modal").css("opacity", "1");
    $("#cup-modal").css("visibility", "visible");

});

$(".modal").click(function() {
    console.log("b");
    $("#info-modal").css("opacity", "0");
    $("#info-modal").css("visibility", "hidden");
    
    $("#program-modal").css("opacity", "0");
    $("#program-modal").css("visibility", "hidden");
    
    $("#mad-modal").css("opacity", "0");
    $("#mad-modal").css("visibility", "hidden");
    
    $("#partner-modal").css("opacity", "0");
    $("#partner-modal").css("visibility", "hidden");
    
    $("#cup-modal").css("opacity", "0");
    $("#cup-modal").css("visibility", "hidden");
});

$(".modalCont").click(function(event) {
    console.log("c");
    event.stopPropagation();
});

$("#play").click(function() {
    if (!toggleTop) {
        topLogo();
    }
    if (!toggleSide) {
        sideLogo(); 
    }
    $("#video h1").css("opacity","0");
    $("#video p").css("opacity","0");
    $("#play").css("opacity","0");
});

function sideLogo() {
    if (toggleSide) {
        toggleSide = 0;
        $("#sideLogo div").css("margin-left", "0");
        $("#hideSideLogo").css("transform", "rotate(180deg)");
    }
    else {
        toggleSide = 1;
        $("#sideLogo div").css("margin-left", "-2.8vw");
        $("#hideSideLogo").css("transform", "rotate(0deg)");
    }
}

function topLogo() {
    if (toggleTop) {
        toggleTop = 0;
        $("#logo").css("margin-top", "0");
        $("#hideTopLogo").css("transform", "rotate(270deg)");
    }
    else {
        toggleTop = 1;
        if (screen.width <= 1000) {
            $("#logo").css("margin-top", "-200px");
        } else {
            $("#logo").css("margin-top", "-11.5vw");           
        }
        $("#hideTopLogo").css("transform", "rotate(90deg)");
    }
}

$(document).ready(function () {
    $(window).scroll(function() {
        if($(window).scrollTop() > $(window).height()*0.3) {
            if (toggleScroll) {
                return;
            }
            toggleScroll = 1;
            toggleSide = 0;
            $("#sideLogo div").css("margin-left", "0");
            $("#hideSideLogo").css("transform", "rotate(180deg)");
        }
        if($(window).scrollTop() < $(window).height()*0.3) {
            if (toggleScroll) {
                toggleScroll = 0;
            }
        }
        console.log($(window).height());
        console.log($(document).height());        
        console.log($(window).scrollTop());
        //
            
        /*
        if (scrollPercent > 80) {
            alert("Scroll is greater than 80%");
            //document.getElementById('back-to-top').fadeOut;
        }
        */
    });
});

$("#bonus").click(function() {
    $("#video").css("background-image","url(../images/IMG_8895.jpg)");
});

//Smooth scroll

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

//Countdown

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.now();
    //var hundreds = Math.floor((t % 1000 / 10));
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t
        , 'days': days
        , 'hours': hours
        , 'minutes': minutes
        , 'seconds': seconds
            //'hundreds': hundreds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    //var hundredsSpan = clock.querySelector('.hundreds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        //hundredsSpan.innerHTML = ('' + t.hundreds).slice(-7);


        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date("2017-08-18T18:00:00");
initializeClock('clockdiv', deadline);


//Play knap

$('#play').click(function(){
    $('#videoplayer')[0].play();
});

// Tabs

var activeDay = 1;

function switchPlace(show, day) {
    console.log(show);
    console.log(day);
    $("#arenaText" + day).css("display", "none");
    $("#parkText" + day).css("display", "none");
    $("#pladsenText" + day).css("display", "none");
    $("#" + show + "Text" + day).css("display", "block");
    console.log("#" + show + "Text" + day);
    event.stopPropagation();
}

function switchDay(day) {
    console.log(day);
    switchPlace("arena", day);
    $("#day1").css("display", "none");
    $("#day2").css("display", "none");
    $("#day3").css("display", "none");
    $("#dayTab1").css("text-decoration", "none");
    $("#dayTab2").css("text-decoration", "none");
    $("#dayTab3").css("text-decoration", "none");
    $("#day" + day).css("display", "block");
    $("#dayTab" + day).css("text-decoration", "underline");
    //$("#arenaText" + day).css("display","block");
    console.log("#arenaText" + day);
}