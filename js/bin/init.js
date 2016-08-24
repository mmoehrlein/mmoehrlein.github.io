(function($){
  $(function(){

    $('.button-collapse').sideNav();

    smoothScroll(300);

  }); // end of document ready
})(jQuery); // end of jQuery name space

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}
