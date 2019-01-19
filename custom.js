$(document).ready(function(){
	$.get("navbar.html", function(data){
		$("nav").replaceWith(data);
	});

    // Sætter BootStraps modal-vindues-billede til det vi har trykket på og åben modal-vinduet.
    $('.pop').on('click', function() {
		$('.imagepreview').attr('src', $(this).find('img').attr('src'));
		$('#imagemodal').modal('show');   
	});
});