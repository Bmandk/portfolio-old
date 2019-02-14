$(document).ready(function(){

	$.get("/navbar.html", function(data){
		$("nav").replaceWith(data);
	});

    // Sætter BootStraps modal-vindues-billede til det vi har trykket på og åben modal-vinduet.
    $('.pop').on('click', function() {
		$('.imagepreview').attr('src', $(this).find('img').attr('src'));
		$('#imagemodal').modal('show');   
	});
});

$('.game img').on('touchstart click', function() {
	var script = document.createElement("script");
	script.src = "Release/UnityLoader.js";
	document.body.appendChild(script);

    script = document.createElement("script");
    script.src = "TemplateData/UnityProgress.js";
    document.body.appendChild(script);

	$(this).remove();
});