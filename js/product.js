// JavaScript Document
$(document).ready(function() {
		
	$('#cool h3:first').addClass('selected');
	
	$('#cool div:not(:first)').hide();
	
	$('#cool h3').click(function(){
		$('#cool h3').removeClass('selected');
		$(this).addClass('selected');
		
		if($(this).next().css('display')=='none'){
			$('#cool div').slideUp('fast');	
		}
		$(this).next().slideDown('fast');
	}).mouseover(function(){
		$(this).addClass('over');
	}).mouseout(function(){
		$(this).removeClass('over');
	});
	
	//image_wrap1
	$('.image_wrap1 p a').click(function(){
		$('.list3').attr('src', $(this).attr('href') ).attr('title',$(this).text() );
		return false;
		});		
	//image_wrap2
	$('p.s5300 a').click(function(){
		$('.list8').attr('src', $(this).attr('href') ).attr('title',$(this).text() );
		return false;
		});		

	//image_wrap2
	$(' p.s2900 a').click(function(){
		$('.list9').attr('src', $(this).attr('href') ).attr('title',$(this).text() );
		return false;
		});		

	//image_wrap3
	$('.image_wrap3 p a').click(function(){
		$('.list10').attr('src', $(this).attr('href') ).attr('title',$(this).text() );
		return false;
		});		
		
	$('#btn1').click(function(){
		//첫번째 이미지를 photo안에서 맨뒤로 이동
		$('#photo img:first').appendTo($('#photo'));
		});
	$('#btn2').click(function(){
		//마지막 이미지를 photo안에서 맨앞으로 이동 
		$('#photo img:last').prependTo($('#photo'));
		});
});

