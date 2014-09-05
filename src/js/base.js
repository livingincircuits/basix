function Parallax() {
    scrollPos = $(this).scrollTop();
    $('#js-hero').css({
        'background-position' : '50% ' + (-scrollPos/4)+"px"
    });
    $('#js-hero__text').css({
        'margin-top': (scrollPos/4)+"px",
        'opacity': 1-(scrollPos/250)
    });
}

$(document).ready(function(){

	$(".post-content").fitVids();

    $(window).scroll(function() {
        Parallax();
    });

});
