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