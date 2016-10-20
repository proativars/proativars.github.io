// global. currently active menu item
var current_item = 0;

// few settings
var section_hide_time = 1300;
var section_show_time = 1300;

// jQuery stuff
$(document).ready(function() {

	// Switch section
	$("a", '.mainmenu').click(function(){
		if( ! $(this).hasClass('active') ) {
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() {
				$('a', '.mainmenu').removeClass( 'active' );
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				var rndm = Math.floor(Math.random() * 4) + 1
				$('html').attr("class", "bg" + rndm);
				new_section.fadeIn( section_show_time);//, function(){ $('html').attr("class", "bg" + rndm) } );
			} );
		}
		return false;
	});
});
