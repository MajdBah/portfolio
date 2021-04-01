$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {
            $("#navBar").addClass("noTransparrent");
        } else {
            $("#navBar").removeClass("noTransparrent");
        }
    });
    var counter = 0;
    $(window).scroll(function() {

        if (($(this).scrollTop() >= 1150) && ($(this).scrollTop() <= 1600) && (counter < 1)) {
            skills();
            counter++;
        }
    });

    function skills() {
        $('.circle').circleProgress({
            startAngle: -Math.PI / 2,
            fill: "#0575e6",
        }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('span').html(Math.round(stepValue * 100) + '%');
        });
    }

    $("#commentForm").validate();


});