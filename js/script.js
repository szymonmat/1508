//Dropdown menu
$(function(){
$(".menu").hover(function() {
	$(".subMenu").stop().slideDown();
	},function(){
	$(".subMenu").stop().slideUp();
});
});
//end

//scroll
$(".scrollBox").click(function() {
	var current=$(this);
	var id=$(this).attr('loc');
    $('html, body').animate({
         scrollTop: $("#"+id).offset().top}
    , 500, function(){ 	
    	$(".scrollBox ").siblings().removeClass('scrollBoxClicked');
    	current.toggleClass('scrollBoxClicked');
    	});


});
//end