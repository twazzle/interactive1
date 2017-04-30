$(document).ready(function(){
	// your code here


		
	//n = 0;
	//$('body').click(function(){
		//n = n + 10;	
		//$('#content').css('color', 'rgb('+n+','+n+','+n+')');

		//alert(n);

		//n= n +10;

	
	$('.test').mouseover(function(){
		$('#secret-message').html($(this).data('message'));
	});


	$('body').mousemove(function(e){
		$('#pass').css('opacity', + (e.pageY) / 10000);
	});

});