// Tracking Event Tag Functions
$( document ).ready(function() {

$('[data-tracking]').each(function(index) {
	var $thisLink = $(this);
	
	$thisLink.click( function() { 
		$attribs = $thisLink.attr("data-tracking").split(",");

		//alert("name = "+$attribs[0]);

		ga('global.send', 'event', $attribs[0], $attribs[1], $attribs[2]);
		ga('local.send', 'event', $attribs[0], $attribs[1], $attribs[2]);

		//return false;
  });
	
});


});