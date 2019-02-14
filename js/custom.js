$(document).ready(function(){
	$.get("/navbar.html", function(data){
		$("body").prepend(data);
	});

	$.get("/footer.html", function(data){
		$("body").append(data);
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