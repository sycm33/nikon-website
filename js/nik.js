// JavaScript Document
$(document).ready(function(){
	
	
   $('#order th:nth-child(odd)').addClass('odd1');
   
   $('#order th:nth-child(even)').addClass('even1');
   
   $('#order tr:not(:first-child)').hover(function(){
	   $(this).toggleClass('hover1');
});


	
	$('.bxslider2').bxSlider({
	  minSlides: 4,
	  maxSlides: 4,
	  slideWidth: 192,
	  slideMargin: 0,
	  slideMargin: 5,
  	  ticker: true,
	  speed: 30000
	});
	

});
