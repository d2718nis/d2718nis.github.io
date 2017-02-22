$(document).ready(function(){

	// Smooth scrolling
	$('a[href^="#"]').on('click',function (event) {
		event.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});

	// Easter egg
	$('.logo').on('click', function() {
		if ($('.logo').text() == 'Fancy Portfolio') {
			$('.logo').text('In Code We Trust');
		} else {
			$('.logo').text('Fancy Portfolio');
		}
	});
});
