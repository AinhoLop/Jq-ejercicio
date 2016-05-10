$(document).ready(function() {

// ## punto 1 

$('#menu-container li > a').click(function(event){
	$('#menu-container li > a').parent().removeClass('current-menu-item');
	$('this').parent().addClass('current-menu-item');
});


// ## punto 2

$('#menu-container li').hover(function(){
	$(this).find('.sub-menu').fadeToggle(400);
});


// ## punto 3

$('#mobile-button').click(function() {
	$('#menu-container').show();
	$('#mobile-button').hide();
	$('#mobile-close').show();
});
	
$('#mobile-close').click(function() {
	$('#menu-container').hide();
	$('#mobile-button').show();
	$('#mobile-close').hide();
});


// ## punto 4

$('#menu-container li > a').click(function(){
$('#menu-container').show();

});
