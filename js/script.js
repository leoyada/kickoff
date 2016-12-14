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

/* -------------- database script -------------- */

var active = 4;
var once = 1;
var limit = 0;
var delay = 50;
var toggle = 1;
var maxheight = 280;    //passer til desktop
                        //cellestørrelse = 32px * 5 = 160px, adder 20 mere

$score_f = $("#score_f");
$score_h = $("#score_h");
$score_b = $("#score_b");
$score_o = $("#score_o");

function h() {
    //test
    $score_h.css("font-size", "40pt");
}

function showBoard(a){
    if (once) {
        once = 0;
        fiveMore(limit);
    }
    
    setTimeout(function(){
        //console.log(active);
        bgColor(active);
        fontWeight(active);
    }, delay);
    
    $("#showLimit").html("Rang 1 til maks " + limit);
    
    if (toggle) {
        if (a == "update") {
            $("#leaderboard").css("max-height","calc(" + maxheight + "px + 10vw)");
            console.log("max-height","calc(" + maxheight + "px + 10vw)");
            return;
        }
        toggle = !toggle;
        $("#leaderboard").css("max-height","calc(" + maxheight + "px + 10vw)");
        $("#downArrow").css("transform","rotate(270deg)");
        $("#teaser").html("Tryk for at gemme pointtavlen");
    } else {
        if (a == "update") {
            $("#leaderboard").css("max-height","calc(" + maxheight + "px + 10vw)");
            console.log("max-height","calc(" + maxheight + "px + 10vw)");
            return;
        }
        toggle = !toggle;
        $("#leaderboard").css("max-height","10vw");
        $("#downArrow").css("transform","rotate(90deg)");
        $("#teaser").html("Tryk her for at se pointtavlen!");
    }    
}

function lbHeadline(turn) {
    switch(active) {
        case 1:
            if(leftOrRight(turn)) {
                carousel("plus");
                lbSize("score_o");
                sort("o");
            } else {
                carousel("minus");
                lbSize("score_h");
                sort("h");
            }
            break;
        case 2:
            if(leftOrRight(turn)) {
                carousel("plus");
                lbSize("score_f");
                sort("f");
            } else {
                carousel("minus");
                lbSize("score_b");  
                sort("b");
            }
            break;
        case 3:
            if(leftOrRight(turn)) {
                carousel("plus");
                lbSize("score_h");
                sort("h");
            } else {
                carousel("minus");
                lbSize("score_o");
                sort("o");
            }
            break;
        case 4:
            if(leftOrRight(turn)) {
                carousel("plus");
                lbSize("score_b");
                sort("b");
            } else {
                carousel("minus");
                lbSize("score_f");
                sort("f");
            }
            break;
        default:
            break;
    }
    switch(turn) {
        case 'f':
            active = 1;
            lbSize("score_f");
            sort("f");
            break;
        case 'h':
            active = 2;
            lbSize("score_h");
            sort("h");
            break;
        case 'b':
            active = 3;
            lbSize("score_b");
            sort("b");
            break;
        case 'o':
            active = 4;
            lbSize("score_o");
            sort("o");
            break;
        default:
            break;
    }
    //settimeout er nødvendig, for noget af CSS'en tager effekt
    setTimeout(function(){
        //console.log(active);
        bgColor(active);
        fontWeight(active);
    }, delay);
}

function leftOrRight(a) {
    if (a == 'left') {
        return 1;
    } else {
        return 0;
    }
}

function carousel(spinThatShit) {
    if (spinThatShit == "plus") {
        active--;
        if (active < 1) {
            active = 4;
        }
    } else {
        active++;
        if (active > 4) {
            active = 1;
        }
    }
}

function lbSize(biggie) {
    $score_f.css("font-size", "14pt");
    $score_h.css("font-size", "14pt");
    $score_b.css("font-size", "14pt");
    $score_o.css("font-size", "14pt");
    $("#" + biggie).css("font-size", "40pt");
}

function bgColor(a) {
    a = a + 3;
    
    //for-loop for at sætte baggrund til 'none'
    for(var i = 4; i < 8; i++) {
        $(".bgCol" + i ).css("background","none");
    }
    //console.log(a);
    $(".bgCol" + a ).css("background","#4D8963");
    //console.log(".bgCol" + a);
}

function fontWeight(a) {
    a = a + 3;
    //for-loop for at sætte alle font-weights til 'normal'
    for(var i = 4; i < 8; i++) {
        $("td:nth-child(" + i + ")").css("font-weight","normal");
    }
    $("td:nth-child(" + a + ")").css("font-weight","bold");
}

//AJAX funktionalitet

//data er det jeg sender, så der skal jeg finde ud af active, og left eller right. Evt. gøre så man kan trykke direkte på overskrifterne

//sender her info afsted til min ajax/php fil. 'row' er et 'f', 'h', 'b' eller 'o'.
function sort(row) {
    $.post('ajax/sort.php', {direction: row, limit: limit}, function(data) {
        $('div#table').html(data);
    });
}

//Øg antallet af rows der vises
function fiveMore(a) {
    limit += 5;
    maxheight += 180;
    $.post('ajax/sort.php', {limit: limit, active: active}, function(data) {
        $('div#table').html(data);
    });
    //kalder showBoard for at opdatere maxheight + vise den grønne baggrund og bold text
    showBoard("update");
}

//Mindsk antallet af rows der vises
function fiveFewer(a) {
    if (limit <= 5){
        return;
    }
    limit -= 5;
    maxheight -= 180;
    $.post('ajax/sort.php', {limit: limit, active: active}, function(data) {
        $('div#table').html(data);
    });
    //kalder showBoard for at opdatere maxheight + vise den grønne baggrund og bold text
    
    showBoard("update");
}
