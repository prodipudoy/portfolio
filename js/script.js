$(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });

})


$(document).ready(function(){
        // navigation start
     $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 70 }, "slow");

    });

     

		// ==superslides
	$('#slides').superslides({
		animation:'fade',
		play: 2000,
		pagination: false,
	});

	// ==typed js == this is used for content type

	var typed = new Typed('.element', {
  // Waits 1000ms after typing "First"
  strings: ['Full stack web developer.','Front end web designer','Wordpress developer.'],
  typeSpeed:50,
  loop:true,
  cursorChar: '',
});

	     // Fancy Box
    $('[data-fancybox]').fancybox();
    // Isotope = Sort and Filtering
    $('.items').isotope({
        filter : '*',
        animationOption:{
            duration: 1500,
            easing: 'linear',
            queue : false,
        }
    });
     // Apply Sort and Filtering
    $("#filter a").click(function() {
        $("#filter .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });
        // == owl carousel
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

// easy pie chart
     $(function() {
        $('.chart').easyPieChart({
            //your options goes here
            easing:'easeInOut',
            barColor:'#1ca399',
            trackColor:'#ffffff',
            scaleColor:false,
            lineWidth:5,
            size:152,
            
            onStep(from, to, percent){
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    });
  


});
