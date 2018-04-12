$(document).ready(function() {
	$('.main_btna, .contact, [href="#sheldure"]').on('click', function() {

		$(".modal").animate({'position': 'relative','top':'-1500'},20).animate({'opacity': 'toggle','top':'0'},2000);
		
		$(".overlay").fadeToggle('slow');


	});

	$('.close').on('click', function() {
		$(".modal").animate({opacity: 'toggle', 'top':'-1500'},1000)
		$(".overlay").fadeToggle('slow');

	});

	$('#btnform').on('click', function() {
		let msg = $('.form-inline').serialize();
		$.ajax({
			type: 'POST',
			url: 'server.php',
			data: msg,
			success: function() {
			console.log('Все хорошо' + msg);
			$(".modal").animate({opacity: 'toggle', 'top':'-1500'},1000)
			$(".overlay").fadeToggle('slow');
			},
			error: function() {
				alert('Все плохо');
			}
		});
		return false;
	});
});

//slideDown