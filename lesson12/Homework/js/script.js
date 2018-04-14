$(document).ready(function() {
	$('.main_btna, .contact, [href="#sheldure"]').on('click', function() {

		$(".modal").animate({'position': 'relative','top':'-1500'},20).animate({'opacity': 'toggle','top':'0'},2000);
		
		$(".overlay").fadeToggle('slow');


	});
	$(document).click(function(e){ 
		var elem = $(".modal"); 
		if(e.target != elem[0] && !elem.has(e.target).length){ 
			elem.hide(); 
			if($('.overlay').fadeIn('slow') === true){
				$('.overlay').fadeIn('slow');
			}
		} 
	});

	// $('.main_logo').on('click', function() {
	// 	$(".modal").animate({opacity: 'toggle', 'top':'-1500'},1000)
	// 	$(".overlay").fadeOut('slow');
	// })
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