$(function(){
	$('.nav .nav-nav .nav-left li a').mouseover(function(){
		$(this).addClass('active');
	})
	$('.nav .nav-nav .nav-left li a').mouseout(function(){
		$(this).removeClass('active');
	})
})