$(document).ready(function (){
	var margin = $('.main-container').height();
	$('.obj-container').css({"margin-top":margin});

	scroll();
	mostrar_menu();
});


$(window).resize( function(){
    
    var margin = $('.main-container').height();   
    $('.obj-container').css({"margin-top":margin});
    
});


function mostrar_menu () {
	$('.menu-show').click(function(){
		$('.sidebar').css({"left":"0"})
	})

	$('.sidebar ').click(function(){
		$('.sidebar').css({"left":"-100%"})
	})
}

function scroll (){

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll>100){
			$('.cabecera').addClass('menuscroll');

		}else{
			$('.cabecera').removeClass('menuscroll');

		}
	});
}