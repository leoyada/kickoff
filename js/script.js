var toggleSide = 1;
var toggleTop = 0;
var toggleScroll = 0;
        
$("#boks1").click(function() {
    console.log("a");
    $("#modal").css("opacity", "1");
    $("#modal").css("visibility", "visible");

});

$("#modal").click(function() {
    console.log("b");
    $("#modal").css("opacity", "0");
    $("#modal").css("visibility", "hidden");
});

$("#modalCont").click(function(event) {
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



/* -------------- database script -------------- */

var active = 4;
var once = 1;
var limit = 0;
var delay = 50;

$score_f = $("#score_f");
$score_h = $("#score_h");
$score_b = $("#score_b");
$score_o = $("#score_o");

function h() {
    //test
    $score_h.css("font-size", "40pt");
}

function showBoard(){
    if (once) {
        once = 0;
        //balls(limit);
        fiveMore(limit);
    }
    
    //bgColor(active);
    setTimeout(function(){
        //console.log(active);
        bgColor(active);
        fontWeight(active);
    }, delay);
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
    $.post('ajax/sort.php', {limit: limit, active: active}, function(data) {
        $('div#table').html(data);
    });
    setTimeout(function(){
        bgColor(active);
        fontWeight(active);
    }, delay);
}

//Øg antallet af rows der vises
/*
function loadMore(a) {
    limit += 5;
    $.post('ajax/sort.php', {limit: limit}, function(data) {
        $('div#table').html(data);
    });
    console.log(limit);
}
*/