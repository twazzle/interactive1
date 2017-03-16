// replace images when the page loads
$('img').attr('src', 'http://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_two_thirds/public/image/2016/04/main/strawberry-dream-cake-2428901_0.jpg?itok=TE1Ul9uA');

// replace text in the page when it loads
$('body').children().each(function () {
	// replace the '@' sign with a '$' sign
	$(this).html( $(this).html().replace(/@/g,'$') );
});

// when you click on an image hide it using CSS
$('img').click(function() {
	$(this).addClass('hide');
});

// when you click on the page 'body' apply .gradient to it from the CSS
$('body').click(function() {
	$(this).addClass('gradient');
});



//rotate Google's logo
$('#hplogo').addClass('rotate'); 


$('.red-circle').mouseenter(function() {
     $('.blue-square').fadeOut();
});

$('.red-circle').mouseleave(function() {
     $('.blue-square').fadeIn();
});