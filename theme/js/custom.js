/* ************************************** */
/* Way Point JS  */
/* ************************************** */

$(document).ready(function(){
	
	// Boxes Animation
	$('.box').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { offset: '100%' });
	

	
});

/* *************************************** */  
/* JS for Portfolio Image Caption */
/* *************************************** */  

$(document).ready(function(){
	$(".slide-up").hover(function(){
		$(this).children(".movetoup").slideDown(500); 
		}, function(){
		$(this).children(".movetoup").slideUp(500);
	});
		
	$(".slide-down").hover(function(){
		$(this).children(".movetodown").slideDown(500); 
		}, function(){
		$(this).children(".movetodown").slideUp(500);
	});
 });
 
/* *************************************** */ 
/* Scroll to Top */
/* *************************************** */  
		
$(document).ready(function() {
	$(".totop").hide();
	
	$(window).scroll(function(){
	if ($(this).scrollTop() > 300) {
		$('.totop').fadeIn();
	} else {
		$('.totop').fadeOut();
	}
	});
	$(".totop a").click(function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
		
});
/* *************************************** */