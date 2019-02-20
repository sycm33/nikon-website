// JavaScript Document

$(document).ready(function() {
    
	//.tab li a의 sel로 설정되어 있는 href와 연결된 .list의 li를 제외하고 나머지는 숨김
	$('.list article:not( '+$('.tab li a.sel').attr('href')+')').hide();
	
	$('.tab li a').click(function(){
		$('.tab li a').removeClass('sel');	
		$(this).addClass('sel');
		
		$('.list article').hide();
		$($(this).attr('href')).show();
		return false;
		
	});
	
    $('#photo1 ul li a').click(function(){
	//$('#main img').attr('src', $(this).attr('href'));
	//return false;	
	
	//#main img앞에 연결된 href이미지 삽입
	var href1 = $(this).attr('href');
	$('#main img').before("<img src="+href1+">");
	$('#main img:last').fadeOut('slow', function(){
		$('#main img:last').remove();	
	});
	return false;
	
	});
	
	//special_box
	$('#menu li a').click(function(){
		$('.photo2').attr('src', $(this).attr('href') ).attr('title',$(this).text() );
		return false;
		});		


	//banner2
	$('#btn2').click(function(){
		//첫번째 이미지를 photo안에서 맨뒤로 이동
		$('#photo_all2 img:first').appendTo($('#photo_all2'));

	});
	$('#btn3').click(function(){
		//마지막 이미지를 photo안에서 맨앞으로 이동 
		$('#photo_all2 img:last').prependTo($('#photo_all2'));
		});
	
});





