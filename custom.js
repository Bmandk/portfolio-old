$(document).ready(function(){
    // Tilføjer slow scrolling ved at gribe ind i default behaviour for pagejumps og derefter animere scrolling
    // https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
	$('a[href^="#"]').on('click',function (e) {
	    var target = this.hash;
	    var $target = $(target);
        if (target == '') {
            return false;
        }
	    e.preventDefault();

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
    
    // Sørger for at projekterne alle har 16:9 aspect ratio
    $('.project').each(function(){
        $(this).height($(this).width() * 0.5625);
    });
    
    // Sætter BootStraps modal-vindues-billede til det vi har trykket på og åben modal-vinduet.
    $('.pop').on('click', function() {
		$('.imagepreview').attr('src', $(this).find('img').attr('src'));
		$('#imagemodal').modal('show');   
	});		
});

// Sørger for at projekterne alle har 16:9 aspect ratio når vinduet resizes
$(window).resize(function(){
    $('.project').each(function(){
        $(this).height($(this).width() * 0.5625);
    });
});