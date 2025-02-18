$(function(){
	//codigo javascript
	$('nav.mobile').click(function(){
		var listaMenu = $('nav.mobile ul');
		//abrir com fadeIn
		/*
		if(listaMenu.is(':hidden') == true){
			listaMenu.fadeIn();	
		}
		else{
			listaMenu.fadeOut();
		}
		*/

		//abrir sem efeitos
		/*
		if(listaMenu.is(':hidden') == true){
			//listaMenu.show();	
			listaMenu.css('display','block');
		}
		else{
			//listaMenu.hide();
			listaMenu.css('display','none');
		}
		*/

		if(listaMenu.is(':hidden') == true){
			var icone = $('.botao-menu-mobile i');
			icone.removeClass('fa-bars');
			icone.addClass('fa-times');
			listaMenu.slideToggle();
		}
		else{
			var icone = $('.botao-menu-mobile i');
			icone.removeClass('fa-times');
			icone.addClass('fa-bars');
			listaMenu.slideToggle();
		}
	});

	if($('target').length > 0){
		var elemento = '#'+$('target').attr('target');
		var divSroll = $(elemento).offset().top; 
		$('html,body').animate({'scrollTop':divSroll},2000);
	}
})