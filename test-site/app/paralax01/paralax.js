
var scrollIntro = function(){
	
	var wScroll;

	jQuery(window).scroll(function(){
		
		if ( !(jQuery('.psd_inner.psd_last').position().top + jQuery('.psd_inner.psd_last').height()) <= 0){
			var reverse = wScroll * -1;
			wScroll     = jQuery(this).scrollTop();
			
		    jQuery('.psd_inner.psd_first').css('top',wScroll);	
			jQuery('.psd_inner.psd_last').css('top',reverse);
		}
	});
};

//returns scrollingDown?
var scrollStatus = function(){
	var sd;
	var lastScrollPos = 0;
	var wScroll       = jQuery(this).scrollTop();

	jQuery(window).scroll( function(){
		if (lastScrollPos < wScroll)
			sd = true
		else
			sd = false;
	});
	return sd;
	
};

var printLog = function(){
	var wScroll;

	jQuery(window).scroll( function(){
		var position   = jQuery( ".Wposition" );
		wScroll        = jQuery(this).scrollTop();
		position.text( "y-pos: " + wScroll );
	});
};


scrollIntro(scrollStatus());
printLog();









