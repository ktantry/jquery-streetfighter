$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
	})

	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1112px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '600px');
			}
		);
	})

	.mouseup(function(){
		console.log('mouseup');
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	});
});



$(document).keydown(function(event){
		if ( event.which == 88 ) {
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
			$('.ryu-still').hide();
		};
	});

$(document).keyup(function(event){
		if ( event.which == 88 ) {
			$('.ryu-ready').hide();
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});


function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}