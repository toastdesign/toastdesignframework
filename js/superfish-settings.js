( function( $ ) {
	var sf = $('ul.nav-menu');
	var breakpoint = 600;

	if($(document).width() >= breakpoint){
		sf.superfish({
			deflay:200,
			speed: 'fast'
		});
	}

	$(window).resize(function(){
		if($(document).width() >= breakpoint & !sf.hasClass('sf-js-enabled')){
			sf.superfish({
				deflay:200,
				speed: 'fast'
			});
		} else if ($(document).width() < breakpoint){
			sf.superfish('destroy');
		}
	});

	
} )( jQuery );