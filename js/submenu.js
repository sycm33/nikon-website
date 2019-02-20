// JavaScript Document

$(document).ready(function(){
    $('.sub_navi3').hide();
	
	$('#sub_navi2 li').hover(function(){
		$('.sub_navi3:not(:animated)',this).slideDown('fast');
	},function(){
		$('.sub_navi3:not(:animated)',this).slideUp('fast');
	});
	
	$('.sub_navi3 li a').css('background-color','#6C6C6C').css('color','#fff');
	
	$('.sub_navi3 li a').hover(function(){
		$(this).css('background-color','#FEDD00').css('color','#000');
	},function(){
		$(this).css('background-color','#6C6C6C').css('color','#fff');
	});
	
	//Special Contents
	//special_box
	$('#box1 li a').click(function(){
		$('.photo1').attr('src', $(this).attr('href') ).attr('title',$(this).text() );
		return false;
		});		

	//Best Photo
	$('#photo_img article:not( '+$('.roll li a.selected').attr('href')+')').hide();
	
	$('.roll li a').click(function(){
		$('.roll li a').removeClass('selected');	
		$(this).addClass('selected');
		
		$('#photo_img article').hide();
		$($(this).attr('href')).show();
		
		
		return false;
	});

	$("#sns dd a").css("border-radius","3px");
});

//Product Review
function show_img2 (){
    /* pro_review */
	$('.imgGroup:not(:animated)').delay(1000).animate({marginTop:'-186px'},'slow');
	$('.imgGroup:not(:animated)').delay(1500).animate({marginTop:'-372px'},'slow');
	$('.imgGroup:not(:animated)').delay(2000).animate({marginTop:'-558px'},'slow');
	$('.imgGroup:not(:animated)').delay(3000).animate({marginTop:'0px'},'slow');

}
//setInterval대기시간 지난후 함수를 반복실행
setInterval("show_img2()",3000);
