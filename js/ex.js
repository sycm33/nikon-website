// JavaScript Document
$(document).ready(function(){
	
	$('#btn1').click(function(){
		//첫번째 이미지를 photo안에서 맨뒤로 이동
		$('#photo_all img:first').appendTo($('#photo_all'));

	});
	$('#btn2').click(function(){
		//마지막 이미지를 photo안에서 맨앞으로 이동 
		$('#photo_all img:last').prependTo($('#photo_all'));
		});
			

});
	
